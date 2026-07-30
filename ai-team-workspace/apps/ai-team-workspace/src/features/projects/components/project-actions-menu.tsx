'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { Project } from '@/shared/types/projectModel';
import { Edit, EllipsisVertical, Trash2 } from 'lucide-react';

interface IProps {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProjectActionsMenu({
  project,
  onEdit,
  onDelete,
}: IProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="
            absolute right-2 top-2
            inline-flex h-8 w-8 items-center justify-center
            rounded-md
            text-muted-foreground
            transition-colors
            hover:bg-accent
            hover:text-foreground
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
          "
        >
          <EllipsisVertical className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem onClick={onEdit}>
          <Edit className="h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
