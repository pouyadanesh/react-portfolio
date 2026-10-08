import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectService } from "../services/project.service";

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: projectService.update,
    onSuccess: (data) => {
      queryClient.setQueryData(['projects'], data);
    },
  });
}