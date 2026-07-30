"use client"

import { Project } from '@/shared/types/projectModel';
import ProjectForm from './project-form';
import {
  Dialog,
  DialogClose,
  DialogContent,
} from '@/shared/components/ui/dialog';
import { useCreateProject } from '../hooks/useCreateProject';
import { useUpdateProject } from '../hooks/useUpdateProject';
import { projectSchema } from '../schemas/project.scehma';
import * as z from 'zod';
import { useRef } from 'react';

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
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();
  const closeRef = useRef<HTMLButtonElement>(null);
  const handleSubmit = async (data: z.infer<typeof projectSchema>) => {
    if (mode === 'create') {
      await createProject.mutateAsync(data);
    } else {
      await updateProject.mutateAsync({ id: project?.id ?? '', project: data });
    }
    closeRef.current?.click();
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <ProjectForm
          mode={mode}
          project={project}
          handleSubmit={handleSubmit}
        />
        <DialogClose asChild>
          <button ref={closeRef} type="button" className="hidden" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
