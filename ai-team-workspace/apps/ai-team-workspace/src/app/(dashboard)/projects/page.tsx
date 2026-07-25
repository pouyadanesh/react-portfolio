import ProjectsList from '@/features/projects/components/projects-list';
import { projects } from '@/mock/projects';

export default function ProjectsPage() {
  return <ProjectsList projects={projects} />;
}
