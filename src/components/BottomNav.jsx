import React from 'react';
import { Home, Receipt, Plus, Users, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BottomNav() {
  const { currentScreen, setCurrentScreen } = useApp();

  const isActivityActive = currentScreen === 'activity';
  const isHomeActive = currentScreen === 'home';
  const isAddActive = currentScreen === 'add-expense' || currentScreen === 'split-details';
  const isGroupsActive = currentScreen === 'groups';
  const isProfileActive = currentScreen === 'profile' || currentScreen === 'notifications';

  return (
    <nav className="h-16 bg-white border-t border-slate-200/80 flex items-center justify-between px-4 shrink-0 select-none z-20 shadow-[0_-4px_16px_rgba(0,0,0,0.02)]">
      {/* 1. Home */}
      <button
        onClick={() => setCurrentScreen('home')}
        className={`flex-1 flex flex-col items-center justify-center gap-1 py-1 transition active:scale-95 cursor-pointer ${
          isHomeActive ? 'text-[#00a6f4]' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <Home className="w-5 h-5 stroke-[2.2]" />
        <span className={`text-[10px] ${isHomeActive ? 'font-bold' : 'font-medium'}`}>
          Home
        </span>
      </button>

      {/* 2. Activity / Transaction History Tab */}
      <button
        onClick={() => setCurrentScreen('activity')}
        className={`flex-1 flex flex-col items-center justify-center gap-1 py-1 transition active:scale-95 cursor-pointer ${
          isActivityActive ? 'text-[#00a6f4]' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <Receipt className="w-5 h-5 stroke-[2]" />
        <span className={`text-[10px] ${isActivityActive ? 'font-bold' : 'font-medium'}`}>
          Activity
        </span>
      </button>

      {/* 3. Add Expense (Elevated center button) */}
      <button
        onClick={() => setCurrentScreen('add-expense')}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-1 transition active:scale-95 group cursor-pointer -mt-2"
        title="Log a new shared expense"
      >
        <div className={`w-9 h-9 rounded-full flex items-center justify-center transition shadow-sm ${
          isAddActive
            ? 'bg-[#00a6f4] text-white shadow-[#00a6f4]/30'
            : 'bg-[#00a6f4] text-white hover:bg-[#0092d8]'
        }`}>
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </div>
        <span className={`text-[10px] font-bold ${
          isAddActive ? 'text-[#00a6f4]' : 'text-slate-500 group-hover:text-[#00a6f4]'
        }`}>
          Add Expense
        </span>
      </button>

      {/* 4. Groups */}
      <button
        onClick={() => setCurrentScreen('groups')}
        className={`flex-1 flex flex-col items-center justify-center gap-1 py-1 transition active:scale-95 cursor-pointer ${
          isGroupsActive ? 'text-[#00a6f4]' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <Users className="w-5 h-5 stroke-[2]" />
        <span className={`text-[10px] ${isGroupsActive ? 'font-bold' : 'font-medium'}`}>
          Groups
        </span>
      </button>

      {/* 5. Profile */}
      <button
        onClick={() => setCurrentScreen('profile')}
        className={`flex-1 flex flex-col items-center justify-center gap-1 py-1 transition active:scale-95 cursor-pointer ${
          isProfileActive ? 'text-[#00a6f4]' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <User className="w-5 h-5 stroke-[2]" />
        <span className={`text-[10px] ${isProfileActive ? 'font-bold' : 'font-medium'}`}>
          Profile
        </span>
      </button>
    </nav>
  );
}
