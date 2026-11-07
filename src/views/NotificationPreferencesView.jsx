import React, { useState } from 'react';
import { ArrowLeft, Check, Bell, MessageSquare, Smartphone } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function NotificationPreferencesView() {
  const { state, updatePreferences, setCurrentScreen } = useApp();

  const [enabled, setEnabled] = useState(
    state.preferences.automatedReminders ?? true
  );
  const [interval, setInterval] = useState(
    state.preferences.reminderInterval || '3 Days'
  );
  const [template, setTemplate] = useState(
    state.preferences.reminderTemplate ||
      'Hey! Just a friendly reminder that you owe Emily RM 15.00 for Groceries.'
  );
  const [savedToast, setSavedToast] = useState(false);

  // Interval options reflecting Jay's Lo-Fi feedback: "Let users choose 1 day or 2 days rather than fix them to just 3 days or 1 week"
  const intervalOptions = ['1 Day', '2 Days', '3 Days', '1 Week'];

  const handleSave = () => {
    updatePreferences({
      automatedReminders: enabled,
      reminderInterval: interval,
      reminderTemplate: template,
    });
    setSavedToast(true);
    setTimeout(() => {
      setCurrentScreen('profile');
    }, 600);
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-white px-6 pt-3 pb-8 select-none">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between py-2 mb-5">
          <button
            onClick={() => setCurrentScreen('profile')}
            className="p-1 -ml-1 text-slate-800 hover:text-slate-500 transition cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2.2]" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">
            Notification Preferences
          </h1>
          <div className="w-6" />
        </div>

        {/* Automated Reminders Master Card */}
        <div className="border border-slate-200/90 rounded-[22px] p-5 flex items-center justify-between mb-6 bg-white shadow-2xs">
          <div>
            <div className="font-bold text-slate-900 text-base">
              Automated Reminders
            </div>
            <div className="text-slate-400 text-xs mt-1">
              Ping roommates automatically
            </div>
          </div>
          <button
            type="button"
            onClick={() => setEnabled(!enabled)}
            className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 ease-in-out shrink-0 focus:outline-none cursor-pointer ${
              enabled ? 'bg-[#00a6f4]' : 'bg-slate-200'
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                enabled ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Remind Interval Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-sm font-bold text-slate-800">
              Remind roommates every:
            </label>
            <span className="text-[11px] font-semibold text-slate-400">
              Jay's Lo-Fi Feedback
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {intervalOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setInterval(opt)}
                className={`py-3.5 rounded-2xl border font-bold text-sm transition-all active:scale-95 cursor-pointer ${
                  interval === opt
                    ? 'bg-[#00a6f4] border-[#00a6f4] text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Reminder Message Preview Card */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-slate-800 mb-2">
            Reminder Message Preview
          </label>
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-[22px] p-5 shadow-2xs">
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-2 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" /> SYSTEM SMS / PUSH PREVIEW
            </span>
            <p className="text-slate-700 text-sm leading-relaxed font-medium italic">
              "{template}"
            </p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div>
        {savedToast && (
          <div className="mb-3 text-center text-xs font-bold text-emerald-600 bg-emerald-50 py-2 rounded-xl animate-fadeIn">
            ✓ Preferences saved successfully!
          </div>
        )}
        <button
          type="button"
          onClick={handleSave}
          className="w-full py-4 rounded-2xl bg-[#00a6f4] text-white font-bold text-base shadow-sm hover:bg-[#0092d8] active:scale-[0.98] transition cursor-pointer"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
