'use client';

import { Project } from '@/shared/types/projectModel';
import ProjectActionsMenu from './project-actions-menu';

interface ProjectModel {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
}: ProjectModel) {
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
            style={{ backgroundColor: project.color }}
          />

          <h3 className="truncate font-semibold text-foreground">
            {project.name}
          </h3>
        </div>

        {project.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        )}
      </div>

      <ProjectActionsMenu
        project={project}
        key={project.id}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}
