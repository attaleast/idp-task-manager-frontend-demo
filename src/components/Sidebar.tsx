import { Folder, Settings, Home, CheckSquare } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <CheckSquare className="text-blue-500" size={24} />
          <h1 className="text-xl font-bold text-white">IDP Tasks</h1>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
          <Home size={18} /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-white bg-blue-600 shadow-lg shadow-blue-600/20">
          <Folder size={18} /> My Project
        </a>
      </nav>
      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
          <Settings size={18} /> Settings
        </button>
      </div>
    </aside>
  );
};
