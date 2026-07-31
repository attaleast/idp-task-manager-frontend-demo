import { CheckCircle2, Circle, Loader } from 'lucide-react';
import type { Task } from '../types';

export const TaskCard = ({ task }: { task: Task }) => {
  const statusConfig = {
    todo: { icon: <Circle size={18} />, color: 'text-slate-400', bg: 'bg-slate-50' },
    in_progress: { icon: <Loader size={18} />, color: 'text-blue-500', bg: 'bg-blue-50' },
    done: { icon: <CheckCircle2 size={18} />, color: 'text-green-500', bg: 'bg-green-50' },
  };

  const config = statusConfig[task.status];

  return (
    <div className={`p-4 rounded-lg border border-slate-200 ${config.bg} shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
      <div className="flex items-start gap-3">
        <div className={config.color}>{config.icon}</div>
        <div>
          <h3 className="font-medium text-slate-800">{task.title}</h3>
          {task.description && <p className="text-sm text-slate-500 mt-1 line-clamp-2">{task.description}</p>}
        </div>
      </div>
    </div>
  );
};
