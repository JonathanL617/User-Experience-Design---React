import React, { useState } from 'react';
import { X, Building2, QrCode, Copy, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BankTransferModal() {
  const { activeModal, setActiveModal, selectedDebt, settleDebt } = useApp();
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (activeModal !== 'bank-transfer' || !selectedDebt) return null;

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard?.writeText('1140 2891 4521');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmPaid = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      settleDebt(selectedDebt.id, 'bank');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-sm rounded-[32px] p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={() => setActiveModal('settle-up')}
          className="absolute right-5 top-5 p-1 rounded-full text-slate-400 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Bank Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-extrabold text-[12px] flex items-center justify-center">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">
              DuitNow / Instant Transfer
            </div>
            <div className="text-[11px] text-slate-400">Maybank • RoomieSplit</div>
          </div>
        </div>

        {/* Recipient & Amount Info */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Recipient</span>
            <span className="font-bold text-slate-900">{selectedDebt.person} Tan</span>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Account Number</span>
            <div className="flex items-center gap-1 font-mono font-bold text-slate-900">
              <span>1140 2891 4521</span>
              <button
                onClick={handleCopy}
                className="text-[#00a6f4] hover:text-sky-600 p-0.5"
                title="Copy account number"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          {copied && (
            <div className="text-[11px] text-emerald-600 font-semibold text-right mb-2">
              ✓ Account number copied!
            </div>
          )}

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">Total Due</span>
            <span className="text-xl font-extrabold text-indigo-700">
              RM {selectedDebt.amount.toFixed(2)}
            </span>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="text-center p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100 mb-5">
          <QrCode className="w-16 h-16 text-indigo-700 mx-auto mb-1 stroke-[1.5]" />
          <span className="text-[11px] font-semibold text-indigo-900">
            Scan with any Malaysian Banking App (DuitNow QR)
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleConfirmPaid}
          disabled={isProcessing}
          className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          {isProcessing ? (
            <span>Verifying transfer...</span>
          ) : (
            <>
              <span>I Have Transferred RM {selectedDebt.amount.toFixed(2)}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
