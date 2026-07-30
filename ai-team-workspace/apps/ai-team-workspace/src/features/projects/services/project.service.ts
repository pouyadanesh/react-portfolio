import { projects } from '@/mock/projects';
import { ProjectFormValues } from '../schemas/project.scehma';

export const projectService = {
  getAll: async () => projects,

  create: async (project: ProjectFormValues) => {
    const newProjects = [
      ...projects,
      {
        ...project,
        description: project.description ?? '',
        id: `${new Date().getTime()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return newProjects;
  },

  update: async ({
    id,
    project,
  }: {
    id: string;
    project: ProjectFormValues;
  }) => {
    const newProjects = projects;
    const fIndex = newProjects.findIndex((f) => f.id === id);
    const f = newProjects[fIndex];
    newProjects.splice(fIndex, 1, {
      ...f,
      description: project.description ?? '',
      color: project.color,
      name: project.name,
      updatedAt: new Date(),
    });
    return newProjects;
  },

  delete: async (id: string) => {
    const index = projects.findIndex((p) => p.id === id);

    if (index !== -1) {
      projects.splice(index, 1);
    }

    return true;
  },
};
