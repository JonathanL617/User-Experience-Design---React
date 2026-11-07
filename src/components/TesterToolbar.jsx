import React, { useState } from 'react';
import {
  RotateCcw,
  Smartphone,
  Layers,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  CheckCircle,
  Eye,
  LogOut,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function TesterToolbar({ isFrameEnabled, setIsFrameEnabled }) {
  const {
    resetToInitial,
    currentTaskIndex,
    setCurrentTaskIndex,
    setActiveModal,
    setCurrentScreen,
    currentScreen,
  } = useApp();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const tasks = [
    {
      id: 1,
      title: 'Task 1: Log a New Expense (Uneven Split)',
      scenario: 'You just bought RM50 worth of groceries for the house. Log this expense into the app and split the cost unevenly among your roommates.',
      hint: 'Tap (+) Add -> Enter RM50 Groceries -> Select Split Unevenly -> Customize Split -> Confirm Split.',
    },
    {
      id: 2,
      title: 'Task 2: Paying a Roommate Back (Settle Up)',
      scenario: 'You owe money on a shared expense. Find your pending debt and pay Michael RM15 using a digital wallet.',
      hint: 'Under Pending Debts on Dashboard -> Tap "Settle Up" next to Michael -> Choose TnG eWallet -> Authorize & Pay.',
    },
    {
      id: 3,
      title: 'Task 3: Clearing a Debt (Mark as Paid)',
      scenario: 'Sarah just transferred RM15 to your bank account for her portion of her grocery. Acknowledge and clear this debt.',
      hint: 'Under Pending Debts -> Tap "Mark as Paid" on Sarah -> Confirm payment verification dialog.',
    },
    {
      id: 4,
      title: 'Task 4: Setting Up Automated Reminders',
      scenario: 'You want to avoid chasing your roommates for unpaid bills. Adjust your preferences so the app automatically sends out reminders every 3 days.',
      hint: 'Tap Profile tab -> Tap Automated Reminders -> Select "3 Days" interval -> Tap Save Preferences.',
    },
    {
      id: 5,
      title: 'Task 5: Checking Dashboard Financial Status',
      scenario: 'You open the app to check your overall financial status. Locate the summary showing the total amount owed to you and review the latest transaction.',
      hint: 'Check "TOTAL BALANCE" card and Recent Activity list. You can also search for transactions!',
    },
  ];

  const currentTask = tasks[currentTaskIndex];

  const handleReset = () => {
    resetToInitial();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-2 z-40">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-50 animate-fadeIn">
          <RotateCcw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          <span>Prototype state reset for new user testing session!</span>
        </div>
      )}

      <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md rounded-2xl p-3.5 transition-all">
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-extrabold text-xs uppercase tracking-wider text-slate-800">
              Usability Testing Control Panel
            </span>
            <span className="hidden sm:inline text-[11px] font-medium text-slate-400">
              (Coventry / INTI 6026CMD Prototype)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 font-bold text-xs flex items-center gap-1.5 transition active:scale-95"
              title="Reset all balances and transactions back to beginning"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset State</span>
            </button>

            {/* Toggle Phone Frame */}
            <button
              onClick={() => setIsFrameEnabled(!isFrameEnabled)}
              className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs flex items-center gap-1.5 transition"
              title="Toggle Phone Frame or Responsive view"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {isFrameEnabled ? 'Full Screen' : 'Phone Frame'}
              </span>
            </button>

            {/* Figma Designs View */}
            <button
              onClick={() => setActiveModal('figma-preview')}
              className="px-3 py-1.5 rounded-xl bg-sky-50 text-[#00a6f4] hover:bg-sky-100 font-bold text-xs flex items-center gap-1.5 transition"
              title="Inspect Figma design screenshots"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Figma Mockups</span>
            </button>

            {/* Collapse Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              {isCollapsed ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Task Details Panel */}
        {!isCollapsed && (
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-bold">
                  Task {currentTaskIndex + 1} of {tasks.length}
                </span>
                <span className="font-bold text-xs text-slate-800">
                  {currentTask.title}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                "{currentTask.scenario}"
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 italic">
                Observer note: {currentTask.hint}
              </p>
            </div>

            {/* Task Switcher Buttons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                disabled={currentTaskIndex === 0}
                onClick={() => setCurrentTaskIndex((p) => Math.max(0, p - 1))}
                className="p-1.5 rounded-xl border border-slate-200 text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition"
                title="Previous Task"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={currentTaskIndex === tasks.length - 1}
                onClick={() =>
                  setCurrentTaskIndex((p) => Math.min(tasks.length - 1, p + 1))
                }
                className="p-1.5 rounded-xl border border-slate-200 text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition"
                title="Next Task"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
