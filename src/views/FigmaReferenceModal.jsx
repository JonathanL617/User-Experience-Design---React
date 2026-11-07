import React, { useState } from 'react';
import { X, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FigmaReferenceModal() {
  const { activeModal, setActiveModal } = useApp();
  const [selectedImage, setSelectedImage] = useState('home-dashboard.png');

  if (activeModal !== 'figma-preview') return null;

  const figmaScreens = [
    { file: 'home-dashboard.png', name: 'Home Dashboard (Initial)' },
    { file: 'home-dashboard-1.png', name: 'Home Dashboard (Groceries Added)' },
    { file: 'home-dashboard-2.png', name: 'Settle Up Modal' },
    { file: 'home-dashboard-updated.png', name: 'Home Dashboard (Debt Settled)' },
    { file: 'home-dashboard-updated-1.png', name: 'Home Dashboard (Sarah Paid)' },
    { file: 'add-expense-blank.png', name: 'Add Expense (Blank)' },
    { file: 'add-expense-filled.png', name: 'Add Expense (Filled RM50)' },
    { file: 'split-options.png', name: 'Split Details (Breakdown)' },
    { file: 'success-expense.png', name: 'Success (Expense Added)' },
    { file: 'success-debt-cleared-1.png', name: 'Success (Paid Michael)' },
    { file: 'success-debt-cleared.png', name: 'Success (Sarah Paid)' },
    { file: 'profile-settings.png', name: 'Profile Settings' },
    { file: 'profile-settings-1.png', name: 'Profile Settings (Active)' },
    { file: 'notification-preferences.png', name: 'Notification Preferences' },
    { file: 'login-empty.png', name: 'Login (Empty)' },
    { file: 'login-error.png', name: 'Login (Error State)' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-[32px] p-6 shadow-2xl flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#00a6f4]" />
            <h2 className="text-lg font-bold text-slate-900">
              Figma Design Reference Screens
            </h2>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex-1 flex overflow-hidden mt-4 gap-6">
          {/* Thumbnails Sidebar */}
          <div className="w-64 border-r border-slate-100 overflow-y-auto pr-3 space-y-2 shrink-0">
            {figmaScreens.map((s) => (
              <button
                key={s.file}
                onClick={() => setSelectedImage(s.file)}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
                  selectedImage === s.file
                    ? 'bg-sky-50 text-[#00a6f4] border border-sky-200'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="truncate">{s.name}</span>
              </button>
            ))}
          </div>

          {/* Active Preview */}
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-4 overflow-hidden">
            <div className="text-xs font-semibold text-slate-500 mb-2">
              Viewing: <span className="text-slate-800">{selectedImage}</span>
            </div>
            <div className="max-h-[70vh] flex items-center justify-center">
              <img
                src={`/${selectedImage}`}
                alt={selectedImage}
                className="max-h-[68vh] object-contain rounded-2xl shadow-md border border-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
