"use client"

import ProjectsList from '@/features/projects/components/projects-list';
import { useProjects } from '@/features/projects/hooks/useProjects';

export default function ProjectsPage() {
  const {data} = useProjects();
  return <ProjectsList projects={data ?? []} />;
}
