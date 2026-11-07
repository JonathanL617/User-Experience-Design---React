import React from 'react';
import { Wallet, Building2, ChevronRight, Bell, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';

export default function ProfileView() {
  const { state, setState, updatePreferences, setCurrentScreen } = useApp();

  const toggleReminders = (e) => {
    e.stopPropagation();
    updatePreferences({ automatedReminders: !state.preferences.automatedReminders });
  };

  const togglePush = () => {
    updatePreferences({ pushNotifications: !state.preferences.pushNotifications });
  };

  const handleLogout = () => {
    setState((prev) => ({ ...prev, isLoggedIn: false }));
    setCurrentScreen('login');
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-white">
      <div className="flex-1 overflow-y-auto px-6 pt-5 pb-6">
        {/* User Profile Card */}
        <div className="flex items-center gap-4 mb-8 mt-2">
          <div className="w-16 h-16 rounded-full bg-[#dbeafe] text-[#0284c7] font-bold text-2xl flex items-center justify-center shrink-0">
            {state.currentUser.initials}
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {state.currentUser.name}
            </h1>
            <p className="text-slate-500 text-sm">{state.currentUser.email}</p>
          </div>
        </div>

        {/* Section: Payment Methods */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-slate-700 mb-3">
            Payment Methods
          </h2>
          <div className="space-y-3">
            {/* TnG eWallet */}
            <div className="border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between bg-white shadow-2xs">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#00a6f4]">
                  <Wallet className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="font-semibold text-slate-800 text-[15px]">
                  TnG eWallet
                </span>
              </div>
              <span className="text-[#00a6f4] font-semibold text-sm">
                Connected
              </span>
            </div>

            {/* Bank Account */}
            <div className="border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between bg-white shadow-2xs">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                  <Building2 className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="font-semibold text-slate-800 text-[15px]">
                  Bank Account (•••• 4521)
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Section: Preferences */}
        <div>
          <h2 className="text-sm font-bold text-slate-700 mb-3">
            Preferences
          </h2>
          <div className="border border-slate-200/90 rounded-[22px] bg-white divide-y divide-slate-100 shadow-2xs overflow-hidden">
            {/* Automated Reminders */}
            <div
              onClick={() => setCurrentScreen('notifications')}
              className="p-4 flex items-center justify-between hover:bg-slate-50/70 transition cursor-pointer"
            >
              <div className="pr-4">
                <div className="font-bold text-slate-900 text-[15px]">
                  Automated Reminders
                </div>
                <div className="text-slate-400 text-xs mt-0.5">
                  Remind roommates about due splits
                </div>
                {state.preferences.automatedReminders && (
                  <div className="text-[#00a6f4] text-xs font-semibold mt-1">
                    Configured: Every {state.preferences.reminderInterval}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={toggleReminders}
                className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 ease-in-out shrink-0 focus:outline-none cursor-pointer ${
                  state.preferences.automatedReminders
                    ? 'bg-[#00a6f4]'
                    : 'bg-slate-200'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                    state.preferences.automatedReminders
                      ? 'translate-x-5'
                      : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Push Notifications */}
            <div className="p-4 flex items-center justify-between">
              <div className="pr-4">
                <div className="font-bold text-slate-900 text-[15px]">
                  Push Notifications
                </div>
                <div className="text-slate-400 text-xs mt-0.5">
                  Updates on bill splits & settles
                </div>
              </div>
              <button
                type="button"
                onClick={togglePush}
                className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 ease-in-out shrink-0 focus:outline-none cursor-pointer ${
                  state.preferences.pushNotifications
                    ? 'bg-[#00a6f4]'
                    : 'bg-slate-200'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                    state.preferences.pushNotifications
                      ? 'translate-x-5'
                      : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Log Out Option */}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full py-3.5 rounded-2xl border border-rose-200 text-rose-600 font-bold text-sm hover:bg-rose-50 flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out (Test Login Screen)</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
