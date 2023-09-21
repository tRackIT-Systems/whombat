import { useCallback } from "react";
import { useActor, useMachine } from "@xstate/react";
import toast from "react-hot-toast";
import { type RefObject } from "react";

import { annotateMachine } from "@/machines/annotate";
import { scaleGeometryToViewport } from "@/utils/geometry";
import drawGeometry from "@/draw/geometry";
import useStore from "@/store";
import useClick from "@/hooks/motions/useClick";
import useSpectrogram from "@/hooks/spectrogram/useSpectrogram";
import useAnnotations from "@/hooks/api/useAnnotations";
import useHoveredAnnotation from "@/hooks/annotation/useHoveredAnnotation";
import useAnnotationCreate from "@/hooks/annotation/useAnnotationCreate";
import useAnnotationEdit from "@/hooks/annotation/useAnnotationEdit";
import { type ScratchState } from "@/hooks/motions/useDrag";
import { type ScrollState } from "@/hooks/motions/useMouseWheel";
import { type MouseState } from "@/hooks/motions/useMouse";
import { type Task } from "@/api/tasks";
import { type Recording } from "@/api/recordings";

const IDLE_STYLE = {
  borderColor: "rgb(59,130,246)",
  borderWidth: 2,
};

const SELECT_STYLE = {
  borderColor: "yellow",
  fillColor: "yellow",
  borderWidth: 2,
  fillAlpha: 0.2,
};

const DELETE_STYLE = {
  borderColor: "red",
  fillColor: "red",
  borderWidth: 3,
  fillAlpha: 0.2,
};

export default function useAnnotate({
  task,
  recording,
  mouseState,
  scratchState,
  scrollState,
  ref,
}: {
  task: Task;
  recording: Recording;
  mouseState: MouseState;
  scratchState: ScratchState;
  scrollState: ScrollState;
  ref: RefObject<HTMLCanvasElement>;
}) {
  const annotations = useAnnotations({
    filter: {
      task__eq: task.id,
    },
  });

  const parameters = useStore((state) => state.spectrogramSettings);

  const [state, send] = useMachine(annotateMachine, {
    context: {
      task,
      recording,
      tags: [],
      parameters,
      selectedAnnotation: null,
    },
    services: {
      createAnnotation: async (ctx, _) => {
        const { task, geometryToCreate } = ctx;

        if (geometryToCreate == null) {
          throw new Error("No geometry to create");
        }

        const annotation = annotations.create.mutateAsync({
          task_id: task.id,
          geometry: geometryToCreate,
        });

        toast.promise(annotation, {
          loading: "Creating annotation...",
          success: "Annotation created",
          error: "Failed to create annotation",
        });

        return await annotation;
      },
      updateAnnotationGeometry: async (ctx, event) => {
        const { selectedAnnotation } = ctx;
        // @ts-ignore
        const { geometry } = event;

        if (selectedAnnotation == null) {
          throw new Error("No annotation selected");
        }

        const updated = annotations.update.mutateAsync({
          annotation_id: selectedAnnotation.id,
          data: {
            geometry,
          },
        });

        toast.promise(updated, {
          loading: "Updating annotation...",
          success: "Annotation updated",
          error: "Failed to update annotation",
        });

        return await updated;
      },
      deleteAnnotation: async (_, event) => {
        // @ts-ignore
        const { annotation } = event;

        if (annotation == null) {
          throw new Error("No annotation to delete");
        }

        const deleted = annotations.delete.mutateAsync(annotation.id);

        toast.promise(deleted, {
          loading: "Deleting annotation...",
          success: "Annotation deleted",
          error: "Failed to delete annotation",
        });

        return await deleted;
      },
    },
  });

  const [specState, specSend] = useActor(state.context.spectrogram);

  const { draw: drawSpec } = useSpectrogram({
    state: specState,
    send: specSend,
    dragState: scratchState,
    scrollState,
  });

  const drawAnnotationCreate = useAnnotationCreate({
    drag: scratchState,
    window: specState.context.window,
    send,
    active: state.matches("create.drawing"),
  });

  const drawAnnotationEdit = useAnnotationEdit({
    drag: scratchState,
    mouse: mouseState,
    active: state.matches("edit.editing"),
    send,
    window: specState.context.window,
    annotation: state.context.selectedAnnotation,
  });

  const isSelectingToEdit = state.matches("edit.selecting");
  const isSelectingToDelete = state.matches("delete.selecting");
  const isSelecting = isSelectingToEdit || isSelectingToDelete;

  const hovered = useHoveredAnnotation({
    mouse: mouseState,
    annotations: annotations.items,
    window: specState.context.window,
    active: isSelecting,
  });

  // Handle selecting annotation for editing or deleting
  const handleClick = useCallback(() => {
    if (hovered == null) return;

    if (isSelectingToEdit) {
      send({
        type: "SELECT_ANNOTATION",
        annotation: hovered,
      });
    } else if (isSelectingToDelete) {
      send({
        type: "DELETE_ANNOTATION",
        annotation: hovered,
      });
    }
  }, [hovered, isSelectingToEdit, isSelectingToDelete, send]);
  useClick({
    ref,
    onClick: handleClick,
  });

  const drawAnnotations = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const window = specState.context.window;
      const items = annotations.items;
      for (const item of items) {
        const geometry = scaleGeometryToViewport(
          { width: ctx.canvas.width, height: ctx.canvas.height },
          // @ts-ignore
          item.sound_event.geometry,
          window,
        );

        if (item.id !== hovered?.id) {
          drawGeometry(ctx, geometry, IDLE_STYLE);
          continue;
        }

        if (isSelectingToEdit) {
          drawGeometry(ctx, geometry, SELECT_STYLE);
          continue;
        }

        if (isSelectingToDelete) {
          drawGeometry(ctx, geometry, DELETE_STYLE);
          continue;
        }
      }
    },
    [
      specState.context.window,
      annotations.items,
      hovered,
      isSelectingToEdit,
      isSelectingToDelete,
    ],
  );

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      drawSpec(ctx);
      drawAnnotations(ctx);
      drawAnnotationCreate(ctx);
      drawAnnotationEdit(ctx);
    },
    [drawSpec, drawAnnotationCreate, drawAnnotations, drawAnnotationEdit],
  );

  return {
    state,
    send,
    draw,
  };
}