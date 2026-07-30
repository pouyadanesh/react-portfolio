import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectService } from "../services/project.service";

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: projectService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      });
    },
  });
}