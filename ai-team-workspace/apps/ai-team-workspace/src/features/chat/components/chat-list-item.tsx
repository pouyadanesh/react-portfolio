import { Chat } from '@ai-team-workspace/types';
import { Link, MessageSquare } from 'lucide-react';

interface IProps {
  chat: Chat;
}

export default function ChatCard({ chat }: IProps) {
  return (
    <div
      className="
        group relative rounded-lg border border-border bg-card p-4
        text-card-foreground shadow-sm
        transition-all duration-200
        hover:border-primary/30
        hover:shadow-md
        hover:bg-accent/30
        cursor-pointer
      "
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div
            className="h-4 w-4 shrink-0 rounded-full ring-2 ring-background"
          />
          <Link href={`/projects/${chat.id}`}>
            <h3 className="truncate font-semibold text-foreground">
              {chat.title}
            </h3>
          </Link>
        </div>

        {chat.summary && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {chat.summary}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4 border-t bg-muted/30 mt-4 px-4 py-2.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>8 conversations</span>
        </div>

        <span className="ml-auto">Updated 3 hours ago</span>
      </div>
      {/* <ProjectActionsMenu
        project={project}
        key={project.id}
        onEdit={onEdit}
        onDelete={onDelete}
      /> */}
    </div>
  );
}
