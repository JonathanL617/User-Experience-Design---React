import React, { useState, useEffect } from 'react';
import { X, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ReceiptScannerModal({ isOpen, onClose, onReceiptScanned }) {
  const [stage, setStage] = useState('scanning'); // 'scanning' -> 'detected'

  useEffect(() => {
    if (!isOpen) {
      setStage('scanning');
      return;
    }
    const timer = setTimeout(() => {
      setStage('detected');
    }, 1500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleApply = () => {
    onReceiptScanned({
      amount: '50.00',
      description: 'Groceries (Jaya Grocer)',
      category: 'Groceries',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-sm rounded-[32px] p-6 shadow-2xl relative overflow-hidden border border-slate-100">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1 rounded-full text-slate-400 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="text-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#00a6f4] flex items-center justify-center mx-auto mb-2">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">
            Smart Receipt Scanner
          </h3>
          <p className="text-xs text-slate-400">
            AI Optical Character Recognition (OCR)
          </p>
        </div>

        {/* Viewfinder simulation */}
        <div className="relative h-48 bg-slate-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center border-2 border-slate-800">
          {stage === 'scanning' ? (
            <>
              {/* Laser scan animation */}
              <div className="absolute inset-x-0 h-1 bg-[#00a6f4] shadow-[0_0_15px_#00a6f4] animate-bounce" />
              <div className="text-white text-xs font-semibold flex items-center gap-1.5 z-10 bg-slate-950/80 px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" />
                <span>Scanning receipt details...</span>
              </div>
            </>
          ) : (
            <div className="text-center p-4 z-10 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
              <div className="text-white font-bold text-sm">Receipt Detected!</div>
              <div className="text-emerald-300 font-extrabold text-lg mt-0.5">
                RM 50.00
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                Jaya Grocer • 4 Items
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-5">
          {stage === 'detected' ? (
            <button
              onClick={handleApply}
              className="w-full py-3.5 rounded-2xl bg-[#00a6f4] hover:bg-[#0092d8] text-white font-bold text-sm transition shadow-sm cursor-pointer"
            >
              Use Detected Receipt (RM 50.00)
            </button>
          ) : (
            <button
              disabled
              className="w-full py-3.5 rounded-2xl bg-slate-100 text-slate-400 font-bold text-sm opacity-60 cursor-not-allowed"
            >
              Analyzing...
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
