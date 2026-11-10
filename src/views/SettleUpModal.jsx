import React from 'react';
import { X, Wallet, Building2, Banknote } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SettleUpModal() {
  const { activeModal, setActiveModal, selectedDebt, settleDebt } = useApp();

  if (activeModal !== 'settle-up' || !selectedDebt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn select-none">
      <div className="bg-white w-full max-w-sm rounded-[32px] p-6 shadow-2xl border border-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute right-5 top-5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Header */}
        <div className="mt-1">
          <h2 className="text-[22px] font-extrabold text-slate-900 leading-tight">
            Settle Up with {selectedDebt.person}
          </h2>
          <p className="text-slate-500 text-xs mt-1">Pay your pending balance</p>
        </div>

        {/* Amount Due Box */}
        <div className="text-center my-6">
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
            AMOUNT DUE
          </span>
          <div className="text-3xl font-extrabold text-[#0f172a] mt-0.5">
            RM {selectedDebt.amount.toFixed(2)}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3 mb-6">
          {/* TnG eWallet Option with Official Logo Badge */}
          <button
            onClick={() => setActiveModal('tng-gateway')}
            className="w-full text-left p-4 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-[#00a6f4] hover:bg-sky-50/50 transition flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-[#00509d] text-white flex flex-col items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition font-black">
              <span className="text-[10px] leading-none font-extrabold tracking-tighter">TNG</span>
              <span className="text-[7px] leading-tight text-[#ffde00] font-bold">eWallet</span>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                Pay via Touch 'n Go eWallet
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                Official digital wallet redirect
              </div>
            </div>
          </button>

          {/* Bank Transfer Option with DuitNow Badge */}
          <button
            onClick={() => setActiveModal('bank-transfer')}
            className="w-full text-left p-4 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-[#00a6f4] hover:bg-sky-50/50 transition flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-[#ee1c25] text-white flex flex-col items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition font-black">
              <span className="text-[9px] leading-none font-extrabold tracking-tighter">Duit</span>
              <span className="text-[8px] leading-tight text-white font-bold">Now</span>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">
                Pay via Bank Transfer
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                DuitNow QR & Instant Bank Transfer
              </div>
            </div>
          </button>
        </div>

        {/* Cash Option */}
        <div className="text-center">
          <button
            onClick={() => settleDebt(selectedDebt.id, 'cash')}
            className="text-xs font-bold text-[#00a6f4] hover:underline cursor-pointer"
          >
            Mark as Paid with Cash
          </button>
        </div>
      </div>
    </div>
  );
}
