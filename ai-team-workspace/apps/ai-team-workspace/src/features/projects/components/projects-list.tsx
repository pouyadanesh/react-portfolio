'use client';

import { Project } from '@/shared/types/projectModel';
import ProjectCard from './project-card';
import ProjectDialog from './project-dialog';
import ProjectDialogDelete from './project-dialog-delete';
import { useState } from 'react';

interface ProjectListModel {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectListModel) {
  const [openDialog, setOpenDialog] = useState<{
    open: boolean;
    project?: Project;
  }>({ open: false });
  const [openDeleteDialog, setOpenDeleteDialog] = useState<{
    open: boolean;
    id?: string;
  }>({ open: false });

  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3 max-w text-heading p-1">
        {projects.map((project) => {
          return (
            <ProjectCard
              project={project}
              key={project.id}
              onEdit={() => setOpenDialog({ open: true, project: project })}
              onDelete={() =>
                setOpenDeleteDialog({ open: true, id: project.id })
              }
            />
          );
        })}
      </div>
      <ProjectDialog
        mode={openDialog.project ? 'edit' : 'create'}
        open={openDialog.open}
        onOpenChange={(open) => {
          console.warn(open)
          setOpenDialog((prev) => {
            return { ...prev, open: open };
          });
        }}
        project={openDialog.project}
      />
      <ProjectDialogDelete
        open={openDeleteDialog.open}
        onOpenChange={(open) => {
          setOpenDeleteDialog((prev) => {
            return { ...prev, open: open };
          });
        }}
        id={openDeleteDialog.id}
      />
    </>
  );
}
