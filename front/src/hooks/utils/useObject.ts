import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";

import type { AxiosError } from "axios";
import type { SetStateAction } from "react";

export function useObjectDestruction<T>({
  uuid,
  query,
  client,
  mutationFn,
  name,
  onSuccess,
  onError,
}: {
  uuid?: string;
  query: ReturnType<typeof useQuery<T>>;
  client: ReturnType<typeof useQueryClient>;
  mutationFn: (obj: T) => Promise<T>;
  name: string;
  onSuccess?: (data: T) => void;
  onError?: (error: AxiosError) => void;
}): ReturnType<typeof useMutation<T, AxiosError>> {
  const { status, data } = query;

  const trueMutationFn = useCallback(async () => {
    if (uuid == null) {
      throw new Error(`No uuid provided for object of type ${name}`);
    }

    if (status === "pending") {
      throw new Error(
        `No data for object of type ${name} (uuid=${uuid}). ` +
        "Either the query is not enabled or the query is still loading.",
      );
    }

    if (status === "error") {
      throw new Error(
        `Error while loading object of type ${name} (uuid=${uuid}), cannot mutate`,
      );
    }

    return await mutationFn(data);
  }, [status, data, mutationFn, name, uuid]);

  return useMutation<T, AxiosError>({
    mutationFn: trueMutationFn,
    onSuccess: (data) => {
      client.removeQueries({
        queryKey: [name, uuid],
      });
      onSuccess?.(data);
    },
    onError: onError,
  });
}

export function useObjectMutation<T, K, J = T>({
  uuid,
  query,
  client,
  mutationFn,
  name,
  onSuccess,
  onError,
  withUpdate = true,
}: {
  uuid?: string;
  query: ReturnType<typeof useQuery<T>>;
  client: ReturnType<typeof useQueryClient>;
  mutationFn: (obj: T, extra: K) => Promise<J>;
  name: string;
  onSuccess?: (data: J) => void;
  onError?: (error: AxiosError) => void;
  withUpdate?: boolean;
}): ReturnType<typeof useMutation<J, AxiosError, K>> {
  const { status, data } = query;

  const trueMutationFn = useCallback(
    async (extra: K) => {
      if (uuid == null) {
        throw new Error(`No uuid provided for object of type ${name}`);
      }

      if (status === "pending") {
        throw new Error(
          `No data for object of type ${name} (uuid=${uuid}). ` +
          "Either the query is not enabled or the query is still loading.",
        );
      }

      if (status === "error") {
        throw new Error(
          `Error while loading object of type ${name} (uuid=${uuid}), cannot mutate`,
        );
      }

      return await mutationFn(data, extra);
    },
    [status, data, mutationFn, name, uuid],
  );

  return useMutation<J, AxiosError, K>({
    mutationFn: trueMutationFn,
    onSuccess: (data) => {
      if (withUpdate) {
        client.setQueryData([name, uuid], data);
      }
      onSuccess?.(data);
    },
    onError: onError,
  });
}

export function useObjectQuery<T, K>({
  uuid,
  query,
  queryFn,
  name,
  secondaryName,
  enabled = false,
}: {
  uuid?: string;
  query: ReturnType<typeof useQuery<T>>;
  queryFn: (obj: T) => Promise<K>;
  name: string;
  secondaryName: string;
  enabled?: boolean;
}) {
  const { status, data } = query;

  const trueQueryFn = useCallback(async () => {
    if (status === "pending") {
      throw new Error(
        `No data for object of type ${name} (uuid=${uuid}). ` +
        "Either the query is not enabled or the query is still loading.",
      );
    }

    if (status === "error") {
      throw new Error(
        `Error while loading object of type ${name} (uuid=${uuid}), cannot mutate`,
      );
    }
    return await queryFn(data);
  }, [status, data, queryFn, name, uuid]);

  return useQuery<K, AxiosError>({
    queryFn: trueQueryFn,
    queryKey: [name, uuid, secondaryName],
    enabled: status !== "pending" && status !== "error" && enabled,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    gcTime: 60 * 60 * 1000, // when the gcTime expires, react will re-fetch the data. This might lead to the problem that set filters in annotation task are lost. Therefore, we set a hopefully large enough time.
  });
}

export type UseObjectProps<T> = {
  uuid?: string;
  name: string;
  enabled?: boolean;
  getFn: (uuid: string) => Promise<T>;
  onError?: (error: AxiosError) => void;
};

export default function useObject<T>({
  uuid,
  initial,
  name,
  enabled = true,
  getFn,
  onError,
}: {
  initial?: T;
} & UseObjectProps<T>) {
  const client = useQueryClient();

  const queryFn = useCallback(async () => {
    if (uuid == null) {
      throw new Error(`No uuid provided for object of type ${name}`);
    }
    return await getFn(uuid);
  }, [uuid, name, getFn]);

  const query = useQuery<T, AxiosError>({
    queryKey: [name, uuid],
    queryFn,
    retry: (failureCount, error) => {
      if (error == null) {
        return failureCount < 3;
      }

      const status = error?.response?.status;
      if (status == null) {
        return failureCount < 3;
      }

      // Should not retry on any of the 4xx errors
      if (status >= 400 && status < 500) {
        return false;
      }

      return failureCount < 3;
    },
    initialData: initial,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    gcTime: 60 * 60 * 1000, // when the gcTime expires, react will re-fetch the data. This might lead to the problem that set filters in annotation task are lost. Therefore, we set a hopefully large enough time.
    enabled: enabled && uuid != null,
  });

  const setData = useCallback(
    (data: SetStateAction<T>) => {
      client.setQueryData([name, uuid], data);
    },
    [client, uuid, name],
  );

  const { error, isError } = query;
  useEffect(() => {
    if (isError) {
      onError?.(error);
    }
  }, [error, isError, onError]);

  return {
    query,
    client,
    setData,
    useQuery: <K>({
      queryFn,
      name: secondaryName,
      enabled = false,
    }: {
      name: string;
      queryFn: (obj: T) => Promise<K>;
      enabled?: boolean;
    }) => {
      return useObjectQuery({
        uuid,
        query,
        queryFn,
        secondaryName,
        name,
        enabled,
      });
    },
    useMutation: <K, J = T>({
      mutationFn,
      onSuccess,
      onError,
      withUpdate = true,
    }: {
      mutationFn: (data: T, extra: K) => Promise<J>;
      onSuccess?: (data: J) => void;
      onError?: (error: AxiosError) => void;
      withUpdate?: boolean;
    }) => {
      return useObjectMutation({
        uuid,
        query,
        client,
        mutationFn,
        name,
        onSuccess,
        onError,
        withUpdate,
      });
    },
    useDestruction: ({
      mutationFn,
      onSuccess,
      onError,
    }: {
      mutationFn: (data: T) => Promise<T>;
      onSuccess?: (data: T) => void;
      onError?: (error: AxiosError) => void;
    }) => {
      return useObjectDestruction({
        uuid,
        query,
        client,
        mutationFn,
        name,
        onSuccess,
        onError,
      });
    },
  };
}
