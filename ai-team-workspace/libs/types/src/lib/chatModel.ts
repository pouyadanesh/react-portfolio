import { Conversation } from "./ConversationModel";

export interface Chat {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  summary: string;
  conversations: Conversation[];
  createdAt: Date;
  updatedAt: Date;
  source: string;
}
