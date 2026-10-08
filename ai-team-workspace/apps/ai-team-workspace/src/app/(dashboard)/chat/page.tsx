'use client';

import ChatList from "@/features/chat/components/chat-list";
import { ChatListSkeleton } from "@/features/chat/components/chat-list-skeleton";
import { useChats } from "@/features/chat/hooks/useChats";
import { EmptyState, ErrorState, getErrorMessage } from "@ai-team-workspace/ui";

export default function ChatPage() {
  const { data, isLoading, isError, error } = useChats();
  if (isLoading) {
      return <ChatListSkeleton />;
    }
  
    if (isError) {
      return (
        <ErrorState
          title="Couldn't load projects"
          description={getErrorMessage(error)}
          onRetry={() => {
            window.location.reload();
          }}
        />
      );
    }
    if (data === undefined || data.length === 0) {
      return (
        <EmptyState
          title="No projects found"
          description="You don't have any projects yet."
        />
      );
    }
    return <ChatList chats={data} />;
}
