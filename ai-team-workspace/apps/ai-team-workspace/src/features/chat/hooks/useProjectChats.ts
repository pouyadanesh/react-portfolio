"use client";

import { useQuery } from "@tanstack/react-query";
import { chatService } from "../services/chat.service";

export function useProjectChats(projectId: string) {
  return useQuery({
    queryKey: ["chats", "project", projectId],
    queryFn: () => chatService.getByProjectId(projectId),
    enabled: Boolean(projectId),
  });
}
