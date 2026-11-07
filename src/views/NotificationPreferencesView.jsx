import React, { useState } from 'react';
import { ArrowLeft, Check, Smartphone, Sliders, Plus, Minus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function NotificationPreferencesView() {
  const { state, updatePreferences, setCurrentScreen } = useApp();

  const [enabled, setEnabled] = useState(
    state.preferences.automatedReminders ?? true
  );

  const initialInterval = state.preferences.reminderInterval || '3 Days';
  const isPreset = ['3 Days', '1 Week', '2 Weeks'].includes(initialInterval);

  const [selectedType, setSelectedType] = useState(isPreset ? initialInterval : 'Custom');
  const [customNum, setCustomNum] = useState(() => {
    if (!isPreset) {
      const match = initialInterval.match(/\d+/);
      return match ? parseInt(match[0], 10) : 5;
    }
    return 5;
  });
  const [customUnit, setCustomUnit] = useState(() => {
    if (!isPreset && initialInterval.toLowerCase().includes('week')) {
      return 'Weeks';
    }
    return 'Days';
  });

  const [template, setTemplate] = useState(
    state.preferences.reminderTemplate ||
      'Hey! Just a friendly reminder that you owe Emily RM 15.00 for Groceries.'
  );
  const [savedToast, setSavedToast] = useState(false);

  // Compute final effective interval string
  const effectiveInterval =
    selectedType === 'Custom'
      ? `${customNum} ${customNum === 1 ? customUnit.slice(0, -1) : customUnit}`
      : selectedType;

  const handleSave = () => {
    updatePreferences({
      automatedReminders: enabled,
      reminderInterval: effectiveInterval,
      reminderTemplate: template,
    });
    setSavedToast(true);
    setTimeout(() => {
      setCurrentScreen('profile');
    }, 600);
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-white px-6 pt-3 pb-8 select-none">
      <div className="overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between py-2 mb-4">
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
        <div className="border border-slate-200/90 rounded-[22px] p-5 flex items-center justify-between mb-5 bg-white shadow-2xs">
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
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-sm font-bold text-slate-800">
              Remind roommates every:
            </label>
            <span className="text-[11px] font-semibold text-[#00a6f4]">
              {effectiveInterval}
            </span>
          </div>

          {/* Preset Buttons Grid */}
          <div className="grid grid-cols-3 gap-2">
            {['3 Days', '1 Week', 'Custom'].map((opt) => {
              const isSelected = selectedType === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedType(opt)}
                  className={`py-3 rounded-2xl border font-bold text-xs transition-all active:scale-95 cursor-pointer ${
                    isSelected
                      ? 'bg-[#00a6f4] border-[#00a6f4] text-white shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Custom Settings Drawer / Card (when Custom is selected) */}
          {selectedType === 'Custom' && (
            <div className="mt-3 p-4 bg-sky-50/70 border border-sky-200 rounded-[22px] animate-fadeIn">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#00a6f4]" />
                  Custom Reminder Frequency
                </span>
                <span className="text-[11px] font-bold text-[#00a6f4] bg-white px-2 py-0.5 rounded-full border border-sky-100">
                  Every {effectiveInterval}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 items-center">
                {/* Number Stepper */}
                <div className="bg-white border border-slate-200 rounded-xl p-1 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCustomNum((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition active:scale-95 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-extrabold text-slate-900 text-sm px-2">
                    {customNum}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCustomNum((prev) => Math.min(60, prev + 1))}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Days or Weeks Toggle */}
                <div className="bg-white border border-slate-200 rounded-xl p-1 grid grid-cols-2 gap-1 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setCustomUnit('Days')}
                    className={`py-1.5 rounded-lg transition ${
                      customUnit === 'Days'
                        ? 'bg-[#00a6f4] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Days
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomUnit('Weeks')}
                    className={`py-1.5 rounded-lg transition ${
                      customUnit === 'Weeks'
                        ? 'bg-[#00a6f4] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Weeks
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Reminder Message Preview Card */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-slate-800 mb-2">
            Reminder Message Preview
          </label>
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-[22px] p-4 shadow-2xs">
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-2 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" /> SYSTEM SMS / PUSH PREVIEW
            </span>
            <p className="text-slate-700 text-xs leading-relaxed font-medium italic">
              "Hey! Just a friendly reminder that you owe Emily RM 15.00 for Groceries."
            </p>
            <div className="mt-2.5 pt-2 border-t border-slate-200/60 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Delivery cadence:</span>
              <span className="font-semibold text-slate-700">
                Repeats every {effectiveInterval}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-2">
        {savedToast && (
          <div className="mb-2 text-center text-xs font-bold text-emerald-600 bg-emerald-50 py-2 rounded-xl animate-fadeIn">
            ✓ Preferences saved: Reminding every {effectiveInterval}!
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
