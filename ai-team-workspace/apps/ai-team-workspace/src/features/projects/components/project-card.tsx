import { Project } from '@/shared/types/projectModel';
import { EllipsisVertical } from 'lucide-react';
import ProjectActionsMenu from './project-actions-menu';

interface ProjectModel {
  project: Project;
}

export default function ProjectCard({ project }: ProjectModel) {
  return (
    <div className="relative cursor-pointer ring-1 p-1 rounded-lg">
      <div className="flex flex-col">
        <div className="flex flex-row justify-start items-center gap-2">
          <div
            className={`w-5 h-5 rounded-full`}
            style={{ backgroundColor: project.color }}
          />
          <span className="mb-1 text-destructive">{project.name}</span>
        </div>
        <span className="text-lg font-medium">{project.description}</span>
      </div>
      <ProjectActionsMenu />
    </div>
  );
}
