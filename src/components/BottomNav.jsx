import React from 'react';
import { Home, Plus, Users, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BottomNav() {
  const { currentScreen, setCurrentScreen } = useApp();

  return (
    <nav className="h-16 bg-white border-t border-slate-200/80 flex items-center justify-around px-3 shrink-0 select-none z-20 shadow-[0_-4px_16px_rgba(0,0,0,0.02)]">
      {/* Home */}
      <button
        onClick={() => setCurrentScreen('home')}
        className={`flex flex-col items-center justify-center gap-1 py-1 px-3 transition active:scale-95 cursor-pointer ${
          currentScreen === 'home' ? 'text-[#00a6f4]' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <Home className="w-5 h-5 stroke-[2.2]" />
        <span className={`text-[10px] ${currentScreen === 'home' ? 'font-bold' : 'font-medium'}`}>
          Home
        </span>
      </button>

      {/* Add Expense (Clarified label based on Matthew's Lo-Fi feedback) */}
      <button
        onClick={() => setCurrentScreen('add-expense')}
        className="flex flex-col items-center justify-center gap-1 py-1 px-2.5 transition active:scale-95 group cursor-pointer"
        title="Log a new shared expense"
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition shadow-xs ${
          currentScreen === 'add-expense' || currentScreen === 'split-details'
            ? 'bg-[#00a6f4] text-white'
            : 'bg-sky-50 text-[#00a6f4] border border-sky-200 group-hover:bg-[#00a6f4] group-hover:text-white'
        }`}>
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </div>
        <span className={`text-[10px] font-bold ${
          currentScreen === 'add-expense' || currentScreen === 'split-details'
            ? 'text-[#00a6f4]'
            : 'text-slate-500 group-hover:text-[#00a6f4]'
        }`}>
          Add Expense
        </span>
      </button>

      {/* Groups */}
      <button
        onClick={() => setCurrentScreen('groups')}
        className={`flex flex-col items-center justify-center gap-1 py-1 px-3 transition active:scale-95 cursor-pointer ${
          currentScreen === 'groups' ? 'text-[#00a6f4]' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <Users className="w-5 h-5 stroke-[2]" />
        <span className={`text-[10px] ${currentScreen === 'groups' ? 'font-bold' : 'font-medium'}`}>
          Groups
        </span>
      </button>

      {/* Profile */}
      <button
        onClick={() => setCurrentScreen('profile')}
        className={`flex flex-col items-center justify-center gap-1 py-1 px-3 transition active:scale-95 cursor-pointer ${
          currentScreen === 'profile' || currentScreen === 'notifications'
            ? 'text-[#00a6f4]'
            : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <User className="w-5 h-5 stroke-[2]" />
        <span className={`text-[10px] ${
          currentScreen === 'profile' || currentScreen === 'notifications'
            ? 'font-bold'
            : 'font-medium'
        }`}>
          Profile
        </span>
      </button>
    </nav>
  );
}
