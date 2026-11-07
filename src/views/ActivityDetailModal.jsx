import React from 'react';
import { X, Calendar, User, Receipt, Tag, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ActivityDetailModal() {
  const { selectedActivity, setSelectedActivity } = useApp();

  if (!selectedActivity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-sm rounded-[32px] p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={() => setSelectedActivity(null)}
          className="absolute right-5 top-5 p-1 rounded-full text-slate-400 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <span className="text-xs font-bold text-[#00a6f4] uppercase tracking-wider">
            Transaction Details
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
            {selectedActivity.title}
          </h2>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">
            RM {selectedActivity.amount.toFixed(2)}
          </div>
        </div>

        {/* Metadata Badges */}
        <div className="space-y-2.5 py-4 border-y border-slate-100 text-xs text-slate-600">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium text-slate-400">
              <User className="w-3.5 h-3.5" /> Paid by
            </span>
            <span className="font-bold text-slate-800">
              {selectedActivity.paidBy || 'Emily Chen (You)'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium text-slate-400">
              <Calendar className="w-3.5 h-3.5" /> Date
            </span>
            <span className="font-bold text-slate-800">
              {selectedActivity.timestamp}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium text-slate-400">
              <Tag className="w-3.5 h-3.5" /> Category
            </span>
            <span className="font-bold text-slate-800">
              {selectedActivity.category || 'Shared Expense'}
            </span>
          </div>
        </div>

        {/* Split Details Breakdown */}
        <div className="mt-4">
          <span className="text-xs font-bold text-slate-700 mb-2 block">
            Split Breakdown
          </span>
          <div className="bg-slate-50/80 rounded-2xl p-3 space-y-2 border border-slate-100">
            {selectedActivity.splits?.map((s, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">{s.name}</span>
                <span className="font-bold text-slate-900">
                  RM {s.amount.toFixed(2)}
                </span>
              </div>
            )) || (
              <div className="text-xs text-slate-400">Split details recorded.</div>
            )}
          </div>
        </div>

        <button
          onClick={() => setSelectedActivity(null)}
          className="w-full mt-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
