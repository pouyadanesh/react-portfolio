import { useQuery } from "@tanstack/react-query";
import { projectService } from "../services/project.service";

export function useSingleProject(id: string) {
  return useQuery({
    queryKey: ['projects', {id}],
    queryFn: () => projectService.getOne(id),
  });
}