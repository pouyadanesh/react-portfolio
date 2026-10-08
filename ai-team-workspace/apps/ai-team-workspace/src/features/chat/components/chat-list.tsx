'use client';

import { Chat } from '@ai-team-workspace/types';
import ChatCard from './chat-list-item';

interface ChatListModel {
  chats: Chat[];
}

export default function ChatList({ chats }: ChatListModel) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3 max-w text-heading p-1">
      {chats.map((chat) => {
        return <ChatCard chat={chat} key={chat.id} />;
      })}
    </div>
  );
}
