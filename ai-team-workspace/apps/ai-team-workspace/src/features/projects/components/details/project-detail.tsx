'use client';

import { Project } from '@ai-team-workspace/types';

interface IProps {
  project: Project | undefined;
}

export default function ProjectDetailPage({ project }: IProps) {
  return <div>{project?.name}</div>;
}
