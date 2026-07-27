import { projects } from "@/mock/projects";
import { ProjectFormValues } from "../schemas/project.scehma";

export const projectService = {
  getAll: async () => projects,

  create: async (project: ProjectFormValues) => {
    // mock implementation
  },

  update: async (id: string, project: ProjectFormValues) => {
    // mock implementation
  },

  delete: async (id: string) => {
    // mock implementation
  },
};