import { Project } from '@/shared/types/projectModel';
import ProjectCard from './project-card';

interface ProjectListModel {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectListModel) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3 max-w text-heading p-1">
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.id} />;
      })}
    </div>
  );
}
