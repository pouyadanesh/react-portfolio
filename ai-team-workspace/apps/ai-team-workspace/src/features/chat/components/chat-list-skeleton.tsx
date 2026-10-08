import { ChatCardSkeleton } from "./chat-card-skeleton";

export function ChatListSkeleton() {
  return (
    <div className="grid gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <ChatCardSkeleton key={index} />
      ))}
    </div>
  );
}