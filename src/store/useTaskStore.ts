import { create } from 'zustand';
import { Task } from '../types';
import { api } from '../api/client';

interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  fetchTasks: () => Promise<void>;
  createTask: (title: string) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  isLoading: false,
  error: null,

  fetchTasks: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.get('/tasks', { params: {project_id: '00000000-0000-0000-0000-000000000000'} });
      set({ tasks: response.data || [], isLoading: false });
    } catch (err) {
      set({ error: 'Failed to fetch tasks', isLoading: false});
    }
  },

  createTask: async (title: string) => {
    try {
      const response = await api.post('/tasks', {
        project_id: '00000000-0000-0000-0000-000000000000',
        title,
        description: ''
      });
      set((state) => ({tasks: [...state.tasks, response.data] }));
    } catch (err) {
      console.log('Failed to create task', err);
    }
  }
}))
