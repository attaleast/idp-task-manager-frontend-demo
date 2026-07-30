export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'done';
}

export interface Project {
  id: string;
  name: string;
}
