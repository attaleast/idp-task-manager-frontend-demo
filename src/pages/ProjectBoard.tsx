import { useEffect, useState } from 'react';
import { useTaskStore } from '../store/useTaskStore';
import { TaskCard } from '../components/TaskCard';

export const ProjectBoard = () => {
  const { tasks, isLoading, fetchTasks, createTask } = useTaskStore();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    createTask(newTaskTitle);
    setNewTaskTitle('');
  }

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">My Project Board</h2>
        <p className="text-slate-500">Manager your efficiently</p>
      </header>

      <form onSubmit={handleCreate} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
          Add Task
        </button>
      </form>

      { isLoading ? (
        <div className="text-slate-500">Loading tasks...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-slat-600 uppercase text-sm tracking-wider">To Do ({tasks.filter(t => t.status === 'todo').length})</h3>
              {tasks.filter(t => t.status === 'todo').map(task => <TaskCard key={task.id} task={task} />)}
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-slat-600 uppercase text-sm tracking-wider">In Progress ({tasks.filter(t => t.status === 'in_progress').length})</h3>
              {tasks.filter(t => t.status === 'in_progress').map(task => <TaskCard key={task.id} task={task} />)}
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-slat-600 uppercase text-sm tracking-wider">Done ({tasks.filter(t => t.status === 'done').length})</h3>
              {tasks.filter(t => t.status === 'done').map(task => <TaskCard key={task.id} task={task} />)}
            </div>
        </div>
      )}
    </div>
  );
};
