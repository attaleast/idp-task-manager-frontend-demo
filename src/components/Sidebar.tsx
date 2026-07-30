import { Folder, Settings, Home } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <h1 className="text-xl font-bold text-primary">IDP Tasks</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors">
          <Home size={20} /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-white bg-primary shadow-sm">
          <Folder size={20} /> My Project
        </a>
      </nav>
      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100">
          <Settings size={20} /> Settings
        </button>
      </div>
    </aside>
  );
};
