import { Project } from '@/shared/types/projectModel';
import ProjectForm from './project-form';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';

interface IProps {
  project?: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'create' | 'edit';
}

export default function ProjectDialog({
  project,
  open,
  onOpenChange,
  mode,
}: IProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <ProjectForm mode={mode} project={project} />
      </DialogContent>
    </Dialog>
  );
}
