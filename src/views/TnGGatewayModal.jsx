import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function TnGGatewayModal() {
  const { activeModal, setActiveModal, selectedDebt, settleDebt } = useApp();
  const [pin, setPin] = useState('••••••');
  const [isProcessing, setIsProcessing] = useState(false);

  if (activeModal !== 'tng-gateway' || !selectedDebt) return null;

  const handleAuthorize = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      settleDebt(selectedDebt.id, 'tng');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn select-none">
      <div className="bg-white w-full max-w-sm rounded-4xl p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={() => setActiveModal('settle-up')}
          className="absolute right-5 top-5 p-1 rounded-full text-slate-400 hover:text-slate-700 transition cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* TnG Header Brand */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-xl bg-[#005ba9] text-white font-extrabold text-[12px] flex items-center justify-center tracking-tighter shadow-xs">
            TNG
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm tracking-tight">
              Touch 'n Go eWallet
            </div>
            <div className="text-[11px] text-slate-400">Payment Authorization</div>
          </div>
        </div>

        {/* Payment Details Card */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 mb-4">
          <div className="text-xs text-blue-600 font-semibold">Recipient (RoomieSplit)</div>
          <div className="text-base font-bold text-slate-900 mt-0.5">
            {selectedDebt.person} Tan
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-blue-100">
            <span className="text-xs text-slate-500 font-semibold">Amount to Pay</span>
            <span className="text-2xl font-extrabold text-[#005ba9]">
              RM {selectedDebt.amount.toFixed(2)}
            </span>
          </div>
        </div>

        {/* PIN simulation */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-slate-600 font-semibold mb-1.5">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-slate-400" /> Security PIN
            </span>
            <span className="text-emerald-600 font-bold">Biometrics Verified</span>
          </div>
          <div className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center text-sm font-mono tracking-widest text-slate-700">
            {pin}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAuthorize}
          disabled={isProcessing}
          className="w-full py-3.5 rounded-2xl bg-[#005ba9] hover:bg-[#004b8d] text-white font-bold text-sm shadow-sm transition active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Contacting Touch 'n Go Server...</span>
            </div>
          ) : (
            <>
              <span>Authorize & Pay RM {selectedDebt.amount.toFixed(2)}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
