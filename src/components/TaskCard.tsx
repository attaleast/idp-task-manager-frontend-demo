import { Calendar, User } from 'lucide-react';
import type { Task } from '../types';

export const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-400 transition-all cursor-pointer mb-3">
      <h4 className="font-semibold text-slate-800 mb-2">{task.title}</h4>
      {task.description && (
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">{task.description}</p>
      )}
      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-2">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          {new Date(task.created_at).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full text-slate-600 font-medium">
          <User size={12} />
          Unassigned
        </div>
      </div>
    </div>
  );
};
