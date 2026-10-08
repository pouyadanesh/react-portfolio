import { projectService } from '@/features/projects/services/project.service';
import { ProjectHeader, ProjectNavigation } from '@ai-team-workspace/ui';

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
   const project = await projectService.getOne(projectId);

  return (
    <>
      {project && <ProjectHeader project={project} />}

      <ProjectNavigation projectId={projectId} />

      <div className="pt-6">{children}</div>
    </>
  );
}
