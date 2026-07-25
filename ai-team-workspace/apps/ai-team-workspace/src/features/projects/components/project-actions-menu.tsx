import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { Delete, Edit, EllipsisVertical, Trash2 } from 'lucide-react';

export default function ProjectActionsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="absolute top-2 right-1 w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-300">
        <DropdownMenuItem>
          <Edit />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem variant='destructive'>
          <Trash2 />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
