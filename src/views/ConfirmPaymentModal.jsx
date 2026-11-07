import React from 'react';
import { X, AlertCircle, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ConfirmPaymentModal() {
  const { activeModal, setActiveModal, selectedDebt, markAsPaid } = useApp();

  if (activeModal !== 'confirm-paid' || !selectedDebt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-sm rounded-[32px] p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={() => setActiveModal(null)}
          className="absolute right-5 top-5 p-1 rounded-full text-slate-400 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#00a6f4] flex items-center justify-center mb-4">
          <CheckCircle className="w-6 h-6 stroke-[2]" />
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
          Confirm Debt Receipt
        </h2>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed">
          Has <span className="font-bold text-slate-700">{selectedDebt.person}</span> transferred{' '}
          <span className="font-bold text-slate-900">RM {selectedDebt.amount.toFixed(2)}</span> to your bank account or eWallet?
        </p>

        <div className="mt-3 p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 border border-slate-100">
          💡 <span className="font-semibold">UX Improvement:</span> Second verification step added to prevent accidental taps (Kai Wei's Lo-Fi feedback).
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            type="button"
            onClick={() => setActiveModal(null)}
            className="py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => markAsPaid(selectedDebt.id)}
            className="py-3 px-4 rounded-xl bg-[#00a6f4] text-white font-bold text-xs hover:bg-[#0092d8] shadow-xs transition active:scale-95"
          >
            Yes, Mark as Paid
          </button>
        </div>
      </div>
    </div>
  );
}
