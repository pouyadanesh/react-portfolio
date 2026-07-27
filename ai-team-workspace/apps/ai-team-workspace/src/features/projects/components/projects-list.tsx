'use client';

import { Project } from '@/shared/types/projectModel';
import ProjectCard from './project-card';
import { useState } from 'react';
import ProjectDialog from './project-dialog';

interface ProjectListModel {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectListModel) {
  const [openDialog, setOpenDialog] = useState<{
    open: boolean;
    project?: Project;
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
            />
          );
        })}
      </div>
      <ProjectDialog
        mode={openDialog.project ? 'edit' : 'create'}
        open={openDialog.open}
        onOpenChange={(open) =>
          setOpenDialog((prev) => {
            return { ...prev, open: open };
          })
        }
        project={openDialog.project}
      />
    </>
  );
}
