import { Chat } from '../../../../libs/types/src/lib/chatModel';

export const chats: Chat[] = [
  {
    id: 'chat-1',
    projectId: '1',
    projectName: 'AI Team Workspace',
    title: 'Workspace onboarding flow',
    summary: 'Planning a smoother first-run experience for new teams.',
    source: 'web',
    createdAt: new Date('2026-07-10T09:00:00Z'),
    updatedAt: new Date('2026-07-10T10:15:00Z'),
    conversations: [
      {
        sender: 'Maya Chen',
        text: 'What should the first screen show after a team signs up?',
        date: '2026-07-10T09:00:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Start with a short setup checklist, invite teammates, and a sample project.',
        date: '2026-07-10T09:01:00Z',
      },
    ],
  },
  {
    id: 'chat-2',
    projectId: '1',
    projectName: 'AI Team Workspace',
    title: 'Chat search and filters',
    summary: 'Exploring ways to find conversations across projects.',
    source: 'web',
    createdAt: new Date('2026-07-09T13:20:00Z'),
    updatedAt: new Date('2026-07-10T08:42:00Z'),
    conversations: [
      {
        sender: 'Daniel Kim',
        text: 'We need search by title and message content.',
        date: '2026-07-09T13:20:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'A global search with project and date filters should cover the main cases.',
        date: '2026-07-09T13:21:00Z',
      },
    ],
  },
  {
    id: 'chat-3',
    projectId: '2',
    projectName: 'Marketing Website',
    title: 'Homepage messaging',
    summary: 'Drafting concise value propositions for the new homepage.',
    source: 'web',
    createdAt: new Date('2026-07-08T11:05:00Z'),
    updatedAt: new Date('2026-07-08T11:40:00Z'),
    conversations: [
      {
        sender: 'Olivia Park',
        text: 'Can you suggest a clearer headline for the product?',
        date: '2026-07-08T11:05:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Bring your team and AI together to move projects forward.',
        date: '2026-07-08T11:06:00Z',
      },
    ],
  },
  {
    id: 'chat-4',
    projectId: '2',
    projectName: 'Marketing Website',
    title: 'SEO launch checklist',
    summary: 'Preparing technical and content checks before publishing.',
    source: 'web',
    createdAt: new Date('2026-07-07T15:10:00Z'),
    updatedAt: new Date('2026-07-07T16:00:00Z'),
    conversations: [
      {
        sender: 'Ethan Brooks',
        text: 'What should we verify before the site goes live?',
        date: '2026-07-07T15:10:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Check metadata, canonical URLs, sitemap, redirects, and mobile performance.',
        date: '2026-07-07T15:11:00Z',
      },
    ],
  },
  {
    id: 'chat-5',
    projectId: '3',
    projectName: 'Mobile Companion',
    title: 'Offline mode behavior',
    summary:
      'Defining which project actions remain available without a connection.',
    source: 'web',
    createdAt: new Date('2026-07-06T10:30:00Z'),
    updatedAt: new Date('2026-07-06T12:05:00Z'),
    conversations: [
      {
        sender: 'Nina Patel',
        text: 'Should users be able to draft a message offline?',
        date: '2026-07-06T10:30:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Yes. Save drafts locally and clearly show when they are waiting to sync.',
        date: '2026-07-06T10:31:00Z',
      },
    ],
  },
  {
    id: 'chat-6',
    projectId: '3',
    projectName: 'Mobile Companion',
    title: 'Push notification preferences',
    summary: 'Designing controls for useful, low-noise project notifications.',
    source: 'web',
    createdAt: new Date('2026-07-05T14:15:00Z'),
    updatedAt: new Date('2026-07-05T15:02:00Z'),
    conversations: [
      {
        sender: 'Lucas Meyer',
        text: 'How can we make notification settings easy to understand?',
        date: '2026-07-05T14:15:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Group settings by activity and offer a simple daily digest option.',
        date: '2026-07-05T14:16:00Z',
      },
    ],
  },
  {
    id: 'chat-7',
    projectId: '4',
    projectName: 'Design System',
    title: 'Button component variants',
    summary: 'Aligning button styles and states across the component library.',
    source: 'web',
    createdAt: new Date('2026-07-04T09:25:00Z'),
    updatedAt: new Date('2026-07-04T10:18:00Z'),
    conversations: [
      {
        sender: 'Sofia Alvarez',
        text: 'Which button variants do our product screens actually need?',
        date: '2026-07-04T09:25:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Start with primary, secondary, outline, and destructive, each with consistent states.',
        date: '2026-07-04T09:26:00Z',
      },
    ],
  },
  {
    id: 'chat-8',
    projectId: '4',
    projectName: 'Design System',
    title: 'Accessible color tokens',
    summary:
      'Reviewing contrast needs for text, controls, and focus indicators.',
    source: 'web',
    createdAt: new Date('2026-07-03T16:40:00Z'),
    updatedAt: new Date('2026-07-03T17:12:00Z'),
    conversations: [
      {
        sender: 'Noah Wilson',
        text: 'How should we organize accessible color tokens?',
        date: '2026-07-03T16:40:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Use semantic roles and test foreground/background pairs in every supported theme.',
        date: '2026-07-03T16:41:00Z',
      },
    ],
  },
  {
    id: 'chat-9',
    projectId: '5',
    projectName: 'Customer Portal',
    title: 'Billing dashboard layout',
    summary: 'Organizing invoices, payment methods, and account status.',
    source: 'web',
    createdAt: new Date('2026-07-02T08:50:00Z'),
    updatedAt: new Date('2026-07-02T09:32:00Z'),
    conversations: [
      {
        sender: 'Ava Johnson',
        text: 'What information should be most prominent on billing?',
        date: '2026-07-02T08:50:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Show the current plan and next payment first, followed by invoices and payment details.',
        date: '2026-07-02T08:51:00Z',
      },
    ],
  },
  {
    id: 'chat-10',
    projectId: '5',
    projectName: 'Customer Portal',
    title: 'Account recovery experience',
    summary: 'Making account recovery secure while keeping the steps clear.',
    source: 'web',
    createdAt: new Date('2026-07-01T12:30:00Z'),
    updatedAt: new Date('2026-07-01T13:25:00Z'),
    conversations: [
      {
        sender: 'James Miller',
        text: 'How do we reduce friction in account recovery?',
        date: '2026-07-01T12:30:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Use a short verified flow, explain each step, and avoid revealing whether an email exists.',
        date: '2026-07-01T12:31:00Z',
      },
    ],
  },
  {
    id: 'chat-11',
    projectId: '6',
    projectName: 'Knowledge Base',
    title: 'Document tagging strategy',
    summary: 'Choosing a consistent tag system for searchable help content.',
    source: 'web',
    createdAt: new Date('2026-06-30T10:05:00Z'),
    updatedAt: new Date('2026-06-30T10:49:00Z'),
    conversations: [
      {
        sender: 'Grace Lee',
        text: 'How many tags should we assign to each article?',
        date: '2026-06-30T10:05:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Keep tags focused: a product area, content type, and a few specific topics.',
        date: '2026-06-30T10:06:00Z',
      },
    ],
  },
  {
    id: 'chat-12',
    projectId: '6',
    projectName: 'Knowledge Base',
    title: 'Search result relevance',
    summary: 'Improving how help articles rank for natural language queries.',
    source: 'web',
    createdAt: new Date('2026-06-29T14:00:00Z'),
    updatedAt: new Date('2026-06-29T15:18:00Z'),
    conversations: [
      {
        sender: 'Amir Hassan',
        text: 'Search misses relevant docs when people phrase questions differently.',
        date: '2026-06-29T14:00:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Combine keyword matching with semantic retrieval and evaluate against real queries.',
        date: '2026-06-29T14:01:00Z',
      },
    ],
  },
  {
    id: 'chat-13',
    projectId: '7',
    projectName: 'DevOps Dashboard',
    title: 'Deployment health overview',
    summary:
      'Selecting the signals that help teams spot deployment problems quickly.',
    source: 'web',
    createdAt: new Date('2026-06-28T07:45:00Z'),
    updatedAt: new Date('2026-06-28T08:30:00Z'),
    conversations: [
      {
        sender: 'Mia Thompson',
        text: 'What belongs on a deployment health overview?',
        date: '2026-06-28T07:45:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Show recent releases, failure rate, duration, and a clear link to affected services.',
        date: '2026-06-28T07:46:00Z',
      },
    ],
  },
  {
    id: 'chat-14',
    projectId: '7',
    projectName: 'DevOps Dashboard',
    title: 'CI pipeline alerts',
    summary: 'Tuning pipeline alerts to highlight actionable failures.',
    source: 'web',
    createdAt: new Date('2026-06-27T18:10:00Z'),
    updatedAt: new Date('2026-06-27T18:52:00Z'),
    conversations: [
      {
        sender: 'Leo Martin',
        text: 'How can we avoid noisy alerts from flaky jobs?',
        date: '2026-06-27T18:10:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Group retries, alert on persistent failures, and include the failing step and owner.',
        date: '2026-06-27T18:11:00Z',
      },
    ],
  },
  {
    id: 'chat-15',
    projectId: '8',
    projectName: 'Analytics Hub',
    title: 'Executive metrics report',
    summary:
      'Building a compact weekly report for product and business leaders.',
    source: 'web',
    createdAt: new Date('2026-06-26T09:35:00Z'),
    updatedAt: new Date('2026-06-26T10:20:00Z'),
    conversations: [
      {
        sender: 'Isabella Garcia',
        text: 'Which metrics make a useful weekly executive summary?',
        date: '2026-06-26T09:35:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Include a small set of outcome metrics, their trend, and context for notable changes.',
        date: '2026-06-26T09:36:00Z',
      },
    ],
  },
  {
    id: 'chat-16',
    projectId: '8',
    projectName: 'Analytics Hub',
    title: 'Custom report builder',
    summary: 'Mapping a simple flow for creating and sharing custom reports.',
    source: 'web',
    createdAt: new Date('2026-06-25T13:00:00Z'),
    updatedAt: new Date('2026-06-25T14:12:00Z'),
    conversations: [
      {
        sender: 'Benjamin Clark',
        text: 'What is the simplest report builder flow?',
        date: '2026-06-25T13:00:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Choose a data source, add measures and filters, preview, then save or share.',
        date: '2026-06-25T13:01:00Z',
      },
    ],
  },
  {
    id: 'chat-17',
    projectId: '1',
    projectName: 'AI Team Workspace',
    title: 'Project permissions model',
    summary:
      'Reviewing member roles and access boundaries for shared projects.',
    source: 'web',
    createdAt: new Date('2026-06-24T11:15:00Z'),
    updatedAt: new Date('2026-06-24T12:03:00Z'),
    conversations: [
      {
        sender: 'Maya Chen',
        text: 'Which roles do we need for a first release?',
        date: '2026-06-24T11:15:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Owner, editor, and viewer cover common needs while keeping access easy to explain.',
        date: '2026-06-24T11:16:00Z',
      },
    ],
  },
  {
    id: 'chat-18',
    projectId: '2',
    projectName: 'Marketing Website',
    title: 'Customer story interview questions',
    summary:
      'Preparing interview prompts that bring out specific customer outcomes.',
    source: 'web',
    createdAt: new Date('2026-06-23T10:20:00Z'),
    updatedAt: new Date('2026-06-23T11:05:00Z'),
    conversations: [
      {
        sender: 'Olivia Park',
        text: 'How can we get more concrete answers in customer interviews?',
        date: '2026-06-23T10:20:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Ask about the situation before adoption, the change they made, and measurable results.',
        date: '2026-06-23T10:21:00Z',
      },
    ],
  },
  {
    id: 'chat-19',
    projectId: '5',
    projectName: 'Customer Portal',
    title: 'Usage analytics for customers',
    summary: 'Deciding how to present customer usage trends and activity.',
    source: 'web',
    createdAt: new Date('2026-06-22T15:40:00Z'),
    updatedAt: new Date('2026-06-22T16:28:00Z'),
    conversations: [
      {
        sender: 'Ava Johnson',
        text: 'What activity metrics are useful to show customers?',
        date: '2026-06-22T15:40:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Focus on active users, key feature adoption, and change over a clearly selected period.',
        date: '2026-06-22T15:41:00Z',
      },
    ],
  },
  {
    id: 'chat-20',
    projectId: '6',
    projectName: 'Knowledge Base',
    title: 'AI answer citations',
    summary:
      'Making generated answers traceable to their supporting documentation.',
    source: 'web',
    createdAt: new Date('2026-06-21T08:25:00Z'),
    updatedAt: new Date('2026-06-21T09:10:00Z'),
    conversations: [
      {
        sender: 'Amir Hassan',
        text: 'How should the assistant show where an answer came from?',
        date: '2026-06-21T08:25:00Z',
      },
      {
        sender: 'AI Assistant',
        text: 'Attach links to the relevant source passages and make citations visible beside claims.',
        date: '2026-06-21T08:26:00Z',
      },
    ],
  },
];
