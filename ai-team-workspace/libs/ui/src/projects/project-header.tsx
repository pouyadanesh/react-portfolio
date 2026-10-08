import type { Project } from '@ai-team-workspace/types';

export function ProjectHeader({ project }: { project: Project }) {
  console.warn(project)
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">{project.name}</h1>
      </div>
    </header>
  );
}