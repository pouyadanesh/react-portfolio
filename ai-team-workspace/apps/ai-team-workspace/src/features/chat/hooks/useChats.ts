"use client"

import { useQuery } from "@tanstack/react-query";
import { chatService } from "../services/chat.service";

export function useChats() {
  return useQuery({
    queryKey: ['chats'],
    queryFn: chatService.getAll,
  });
}