import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api from "@/app/api";

import type { UserUpdate } from "@/api/user";
import type { User } from "@/types";
import type { AxiosError } from "axios";

export default function useActiveUser({
  user: initial,
  onUpdate,
  onLogout,
  enabled = true,
}: {
  user?: User;
  onUpdate?: (user: User) => void;
  onLogout?: () => void;
  enabled?: boolean;
} = {}) {
  const client = useQueryClient();

  const query = useQuery<User, AxiosError>({
    queryKey: ["me"],
    queryFn: api.user.me,
    initialData: initial,
    staleTime: 30_000,
    gcTime: 60 * 60 * 1000, // when the gcTime expires, react will re-fetch the data. This might lead to the problem that set filters in annotation task are lost. Therefore, we set a hopefully large enough time.
    retry: false,
    enabled,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchOnMount: true,
    refetchIntervalInBackground: false,
  });

  const update = useMutation<User, AxiosError, UserUpdate>({
    mutationFn: api.user.update,
    onSuccess: (data) => {
      query.refetch();
      onUpdate?.(data);
    },
  });

  const logout = useMutation<unknown, AxiosError>({
    mutationFn: api.auth.logout,
    onSuccess: () => {
      client.removeQueries({ queryKey: ["me"] });
      onLogout?.();
    },
  });

  return {
    ...query,
    update,
    logout,
  };
}
