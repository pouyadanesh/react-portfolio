"use client"

import ProjectDetailPage from '@/features/projects/components/details/project-detail';
import { useSingleProject } from '@/features/projects/hooks/useSingleProject';
import { useParams } from 'next/navigation';

export default function ProjectsPage() {
    const params = useParams();
    const singleProject = useSingleProject(params.projectId as string);
  

  return <ProjectDetailPage project={singleProject.data} />;
}