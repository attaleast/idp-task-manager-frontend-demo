import { useEffect, useState } from 'react';
import { useTaskStore } from '../store/useTaskStore';
import { TaskCard } from '../components/TaskCard';
import type { TaskStatus } from '../types';

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
  };

  const renderColumn = (title: string, status: TaskStatus, badgeColor: string) => {
    const filteredTasks = tasks.filter(t => t.status === status);
    return (
      <div className="flex-1 bg-slate-100/50 rounded-xl p-4 min-h-[400px]">
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wide">{title}</h3>
          <span className={`text-xs font-bold px-2 py-1 rounded-md ${badgeColor}`}>
            {filteredTasks.length}
          </span>
        </div>
        <div>
          {filteredTasks.length === 0 ? (
            <div className="text-center text-xs text-slate-400 py-4">No tasks</div>
          ) : (
            filteredTasks.map(task => <TaskCard key={task.id} task={task} />)
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-slate-50">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Development Board</h2>
        <p className="text-slate-500 text-sm">Manage your project tasks efficiently</p>
      </header>

      <form onSubmit={handleCreate} className="mb-8 flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter task title..."
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
          type="submit" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm flex items-center gap-2"
        >
          + Add Task
        </button>
      </form>

      {isLoading ? (
        <div className="text-center text-slate-500 py-10">Loading tasks...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderColumn('To Do', 'todo', 'bg-slate-200 text-slate-600')}
          {renderColumn('In Progress', 'in_progress', 'bg-blue-100 text-blue-600')}
          {renderColumn('Done', 'done', 'bg-green-100 text-green-600')}
        </div>
      )}
    </div>
  );
};
