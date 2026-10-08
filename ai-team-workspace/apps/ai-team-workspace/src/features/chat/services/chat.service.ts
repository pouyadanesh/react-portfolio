import { chats } from '@/mock/chats';
import { projects } from '@/mock/projects';
import { ChatFormValues } from '../schemas/chat.schema';

export const chatService = {
  getAll: async () => chats,

  getByProjectId: async (projectId: string) =>
    chats.filter((chat) => chat.projectId === projectId),

  getOne: async (id: string) => projects.find(f => f.id === id),

  create: async (chat: ChatFormValues) => {
    const newProjects = [
      ...projects,
      {
        ...chat,
        description: chat.description ?? '',
        id: `${new Date().getTime()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return newProjects;
  },

  update: async ({
    id,
    chat,
  }: {
    id: string;
    chat: ChatFormValues;
  }) => {
    const newProjects = projects;
    const fIndex = newProjects.findIndex((f) => f.id === id);
    const f = newProjects[fIndex];
    newProjects.splice(fIndex, 1, {
      ...f,
      description: chat.description ?? '',
      color: chat.color,
      name: chat.name,
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
