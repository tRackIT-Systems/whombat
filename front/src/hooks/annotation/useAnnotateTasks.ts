import {
  type UseMutationResult,
  type UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  AnnotationTaskFilter,
  type AnnotationTaskPage,
} from "@/api/annotation_tasks";
import api from "@/app/api";
import useAnnotateTasksKeyShortcuts from "@/hooks/annotation/useAnnotateTasksKeyShortcuts";
import useAnnotationTasks from "@/hooks/api/useAnnotationTasks";
import { type Filter } from "@/hooks/utils/useFilter";

import { WHOMBATDETECT_USERS } from "@/constants";

import type { AnnotationStatus, AnnotationStatusBadge, AnnotationTask, ClipAnnotation } from "@/types";

type AnnotationState = {
  /** Currently selected annotation task index */
  current: number | null;
  /** Currently selected annotation task */
  task: AnnotationTask | null;
  /** Clip annotations for the current task */
  annotations: UseQueryResult<ClipAnnotation, AxiosError>;
  /** Filter used to select which annotation tasks to show */
  filter: AnnotationTaskFilter;
  /** List of annotation tasks matching the filter */
  tasks: AnnotationTask[];
  /** Whether the annotation tasks are currently being fetched */
  isLoading: boolean;
  /** Whether there was an error fetching the annotation tasks */
  isError: boolean;
  /** Whether there is a next annotation task */
  hasNextTask: boolean;
  /** Whether there is a previous annotation task */
  hasPrevTask: boolean;
  _filter: Filter<AnnotationTaskFilter>;
};

type AnnotationControls = {
  /** Select a specific annotation task */
  goToTask: (task: AnnotationTask) => void;
  /** Select the next annotation task */
  nextTask: () => void;
  /** Select the previous annotation task */
  prevTask: () => void;
  /** Change the filter used to select which annotation tasks to show */
  setFilter: <T extends keyof AnnotationTaskFilter>(
    key: T,
    value: AnnotationTaskFilter[T],
  ) => void;
  /** Select a random annotation task */
  getFirstTask: () => void;
  /** Mark the current task as completed */
  markCompleted: UseMutationResult<AnnotationTask, AxiosError, void>;
  /** Mark the current task as unsure */
  markUnsure: UseMutationResult<AnnotationTask, AxiosError, void>;
  /** Mark the current task as rejected */
  markRejected: UseMutationResult<AnnotationTask, AxiosError, void>;
  /** Mark the current task as verified */
  markVerified: UseMutationResult<AnnotationTask, AxiosError, void>;
  /** Remove a badge from the current task */
  removeBadge: UseMutationResult<AnnotationTask, AxiosError, {state: AnnotationStatus, userId?: string}>;
};

const empty = {};

function sortAnnotationTasks(a: AnnotationTask, b: AnnotationTask): number {

  // Helper function to get a comparable date-time value
  const getDateTime = (task: AnnotationTask): number => {
    if (task.clip && task.clip.recording.date && task.clip.recording.time) {
      const date = task.clip.recording.date;
      const time = new Date(`1970-01-01T${task.clip.recording.time}`);
      return date.getTime() + time.getTime();
    }
    return -1; // Indicates that date/time is not available
  };

  const dateTimeA = getDateTime(a);
  const dateTimeB = getDateTime(b);

  // If both tasks have valid date-time, compare them
  if (dateTimeA !== -1 && dateTimeB !== -1) {
    return dateTimeA - dateTimeB;
  }

  // If one task has a valid date-time and the other doesn't, prioritize the one with date-time
  if (dateTimeA !== -1) return -1;
  if (dateTimeB !== -1) return 1;

  // If neither task has a valid date-time, compare UUIDs
  return a.uuid.localeCompare(b.uuid);
  
}

export default function useAnnotateTasks({
  filter: initialFilter = empty,
  annotationTask: initialTask,
  onChangeTask,
  onCompleteTask,
  onUnsureTask,
  onRejectTask,
  onVerifyTask,
}: {
  /** Initial filter to select which annotation tasks to show */
  filter?: AnnotationTaskFilter;
  /** Optional, initial annotation task to select */
  annotationTask?: AnnotationTask;
  /** Callback when the selected annotation task changes */
  onChangeTask?: (task: AnnotationTask) => void;
  /** Callback when the current task is marked as completed */
  onCompleteTask?: (task: AnnotationTask) => void;
  /** Callback when the current task is marked as completed */
  onUnsureTask?: (task: AnnotationTask) => void;
  /** Callback when the current task is marked as rejected */
  onRejectTask?: (task: AnnotationTask) => void;
  /** Callback when the current task is marked as verified */
  onVerifyTask?: (task: AnnotationTask) => void;
}): AnnotationState & AnnotationControls {
  const [currentTask, setCurrentTask] = useState<AnnotationTask | null>(
    initialTask ?? null,
  );
  const client = useQueryClient();

  const {
    items: initialItems,
    filter,
    isLoading,
    isError,
    queryKey,
  } = useAnnotationTasks({
    pageSize: -1,
    filter: initialFilter,
    fixed: Object.keys(initialFilter) as (keyof AnnotationTaskFilter)[],
  });

  const items = useMemo(() => {
    return initialItems.toSorted((a, b) => sortAnnotationTasks(a, b))
  }, [initialItems]);

  const index = useMemo(() => {
    if (currentTask === null) return -1;
    return items.findIndex((item) => item.uuid === currentTask.uuid);
  }, [currentTask, items]);

  const goToTask = useCallback(
    (task: AnnotationTask) => {
      client.setQueryData(["annotation_task", task.uuid], task);
      setCurrentTask(task);
      onChangeTask?.(task);
    },
    [onChangeTask, client],
  );

  const hasNextTask = useMemo(() => {
    if (index !== -1) {
      return index < items.length - 1;
    }
    return items.length > 0;
  }, [index, items.length]);

  const nextTask = useCallback(() => {
    if (!hasNextTask) return;
    if (index === -1) {
      goToTask(items[0]);
    } else {
      goToTask(items[index + 1]);
    }
  }, [index, items, hasNextTask, goToTask]);

  const hasPrevTask = useMemo(() => {
    if (index !== -1) {
      return index > 0;
    }
    return items.length > 0;
  }, [index, items.length]);

  const prevTask = useCallback(() => {
    if (!hasPrevTask) return;
    if (index === -1) {
      goToTask(items[0]);
    } else {
      goToTask(items[index - 1]);
    }
  }, [index, items, hasPrevTask, goToTask]);

  const { set: setFilterKeyValue } = filter;
  const setFilter = useCallback(
    <T extends keyof AnnotationTaskFilter>(
      key: T,
      value: AnnotationTaskFilter[T],
    ) => {
      setFilterKeyValue(key, value);
    },
    [setFilterKeyValue],
  );

  const queryFn = useCallback(async () => {
    if (currentTask == null) {
      throw new Error("No selected task");
    }
    return api.annotationTasks.getAnnotations(currentTask);
  }, [currentTask]);

  const annotations = useQuery<ClipAnnotation, AxiosError>({
    queryKey: ["annotation_task", currentTask?.uuid, "annotations"],
    queryFn,
    enabled: currentTask != null,
  });

  const updateTaskData = useCallback(
    (task: AnnotationTask) => {
      client.setQueryData(["annotation_task", task.uuid], task);
      client.setQueryData(queryKey, (old: AnnotationTaskPage) => {
        if (old == null) return old;
        return {
          ...old,
          items: old.items.map((item) => {
            if (item.uuid === task.uuid) {
              return task;
            }
            return item;
          }),
        };
      });
      setCurrentTask(task);
    },
    [client, queryKey],
  );

  // Add this helper function at the top level
  function shouldRemoveBadge(badge: AnnotationStatusBadge) {
    return (
      badge.state === "rejected" &&
      badge.user?.username != null &&
      WHOMBATDETECT_USERS.includes(badge.user.username)
    );
  }

  async function removeDetectorBadge(task: AnnotationTask) {
    if (task.status_badges) {
      const badgesToRemove = task.status_badges.filter(shouldRemoveBadge);
      for (const badge of badgesToRemove) {
        await api.annotationTasks.removeBadge(task, badge.state, badge.user?.id);
      }
    }
  }

  const markCompletedFn = useCallback(async () => {
    if (currentTask == null) {
      throw new Error("No selected task");
    }
    return api.annotationTasks.addBadge(currentTask, "completed");
  }, [currentTask]);

  const markCompleted = useMutation<AnnotationTask, AxiosError>({
    mutationFn: markCompletedFn,
    onSuccess: (task) => {
      let updatedTask = task;
      removeDetectorBadge(task);
      onCompleteTask?.(updatedTask);
      updateTaskData(updatedTask);
      const nextTaskIndex = index + 1;
      const nextTaskToLoad = items[nextTaskIndex];
      if (nextTaskToLoad) {
        goToTask(nextTaskToLoad);
      }
    },
  });

  const markUnsureFn = useCallback(async () => {
    if (currentTask == null) {
      throw new Error("No selected task");
    }
    return api.annotationTasks.addBadge(currentTask, "assigned");
  }, [currentTask]);

  const markUnsure = useMutation<AnnotationTask, AxiosError>({
    mutationFn: markUnsureFn,
    onSuccess: (task) => {
      let updatedTask = task;
      removeDetectorBadge(task);
      onCompleteTask?.(updatedTask);
      updateTaskData(updatedTask);
      const nextTaskIndex = index + 1;
      const nextTaskToLoad = items[nextTaskIndex];
      if (nextTaskToLoad) {
        goToTask(nextTaskToLoad);
      }
    },
  });

  const markRejectedFn = useCallback(async () => {
    if (currentTask == null) {
      throw new Error("No selected task");
    }
    return api.annotationTasks.addBadge(currentTask, "rejected");
  }, [currentTask]);

  const markRejected = useMutation<AnnotationTask, AxiosError>({
    mutationFn: markRejectedFn,
    onSuccess: (task) => {
      let updatedTask = task;
      removeDetectorBadge(task);
      onCompleteTask?.(updatedTask);
      updateTaskData(updatedTask);
      const nextTaskIndex = index + 1;
      const nextTaskToLoad = items[nextTaskIndex];
      if (nextTaskToLoad) {
        goToTask(nextTaskToLoad);
      }
    },
  });

  const markVerifiedFn = useCallback(async () => {
    if (currentTask == null) {
      throw new Error("No selected task");
    }
    return api.annotationTasks.addBadge(currentTask, "verified");
  }, [currentTask]);

  const markVerified = useMutation<AnnotationTask, AxiosError>({
    mutationFn: markVerifiedFn,
    onSuccess: (task) => {
      let updatedTask = task;
      removeDetectorBadge(task);
      onCompleteTask?.(updatedTask);
      updateTaskData(updatedTask);
      const nextTaskIndex = index + 1;
      const nextTaskToLoad = items[nextTaskIndex];
      if (nextTaskToLoad) {
        goToTask(nextTaskToLoad);
      }
    },
  });

  const removeBadgeFn = useCallback(
    async (status: AnnotationStatus, userId? : string) => {
      if (currentTask == null) {
        throw new Error("No selected task");
      }
      return api.annotationTasks.removeBadge(currentTask, status, userId);
    },
    [currentTask],
  );

  const removeBadge = useMutation<AnnotationTask, AxiosError, {state: AnnotationStatus, userId?: string}>(
    {
      mutationFn: ({state, userId}) => removeBadgeFn(state, userId),
      onSuccess: (task) => {
        updateTaskData(task);
      },
    },
  );

  const getFirstTask = useCallback(() => {
    if (items.length === 0) return;
    const task = items[0];
    setCurrentTask(task);
    onChangeTask?.(task);
  }, [items, onChangeTask]);

  useEffect(() => {
    if (currentTask == null && items.length > 0) {
      goToTask(items[0]);
    }
  }, [currentTask, items, goToTask]);

  useAnnotateTasksKeyShortcuts({
    onGoNext: nextTask,
    onGoPrevious: prevTask,
    onMarkCompleted: markCompleted.mutate,
    onMarkUnsure: markUnsure.mutate,
    onMarkRejected: markRejected.mutate,
    onMarkVerified: markVerified.mutate,
  });

  return {
    current: index,
    task: currentTask,
    filter: filter.filter,
    tasks: items,
    isLoading,
    isError,
    goToTask,
    hasNextTask,
    hasPrevTask,
    nextTask,
    prevTask,
    setFilter,
    annotations,
    markCompleted,
    markUnsure,
    markRejected,
    markVerified,
    removeBadge,
    getFirstTask,
    _filter: filter,
  };
}
