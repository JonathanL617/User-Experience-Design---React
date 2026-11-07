import React, { useState } from 'react';
import { X, Camera, ChevronDown, Check, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ReceiptScannerModal from './ReceiptScannerModal';

export default function AddExpenseView() {
  const { setCurrentScreen, draftExpense, setDraftExpense, addExpense } = useApp();
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const categories = ['Groceries', 'Utilities', 'Dining', 'Household', 'Rent'];

  const handleReceiptScanned = (scannedData) => {
    setDraftExpense((prev) => ({
      ...prev,
      amount: scannedData.amount,
      description: scannedData.description,
      category: scannedData.category,
    }));
  };

  const handleSaveOrContinue = () => {
    const total = parseFloat(draftExpense.amount) || 0;
    if (draftExpense.splitMethod === 'uneven') {
      setCurrentScreen('split-details');
    } else {
      // Split evenly among the 3 roommates
      const share = parseFloat((total / 3).toFixed(2));
      addExpense({
        ...draftExpense,
        splits: {
          emily: share,
          michael: share,
          sarah: share,
        },
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-white px-6 pt-3 pb-8 select-none">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between py-2">
          <button
            onClick={() => setCurrentScreen('home')}
            className="p-1 -ml-1 text-slate-800 hover:text-slate-500 transition cursor-pointer"
          >
            <X className="w-6 h-6 stroke-[2.2]" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">Add Expense</h1>
          <div className="w-6" />
        </div>

        {/* Amount Input */}
        <div className="text-center mt-5 mb-6">
          <span className="text-xs font-bold text-[#00a6f4] tracking-wider uppercase">
            AMOUNT
          </span>
          <div className="flex items-center justify-center mt-1">
            <span className="text-3xl font-extrabold text-[#0f172a] mr-2">RM</span>
            <input
              type="number"
              step="0.01"
              value={draftExpense.amount}
              onChange={(e) =>
                setDraftExpense({ ...draftExpense, amount: e.target.value })
              }
              placeholder="0.00"
              className="text-4xl font-extrabold text-[#0f172a] w-48 text-left bg-transparent focus:outline-none border-b-2 border-transparent focus:border-[#00a6f4] transition"
            />
          </div>
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Description
          </label>
          <input
            type="text"
            value={draftExpense.description}
            onChange={(e) =>
              setDraftExpense({ ...draftExpense, description: e.target.value })
            }
            placeholder="What was this for?"
            className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-[#00a6f4] focus:bg-white transition"
          />
        </div>

        {/* Category Pills */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-600 mb-1.5">
            Category
          </label>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setDraftExpense({ ...draftExpense, category: cat })}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition ${
                  draftExpense.category === cat
                    ? 'bg-[#00a6f4] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions Row */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <button
            type="button"
            onClick={() => setIsScannerOpen(true)}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl border border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-[#00a6f4] text-sm font-semibold transition active:scale-95 cursor-pointer shadow-2xs"
          >
            <Camera className="w-4 h-4" />
            <span>Scan Receipt</span>
          </button>

          <div className="relative">
            <select
              value={draftExpense.group}
              onChange={(e) =>
                setDraftExpense({ ...draftExpense, group: e.target.value })
              }
              className="w-full appearance-none py-3 pl-4 pr-9 bg-slate-50/70 border border-slate-200 rounded-2xl text-slate-700 text-sm font-semibold focus:outline-none focus:border-[#00a6f4]"
            >
              <option value="Roomies #402">Roomies #402</option>
              <option value="Select Group" disabled>
                Select Group
              </option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Split Method Segmented Control */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Split Method
          </label>
          <div className="bg-slate-50/90 border border-slate-200 p-1 rounded-2xl grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() =>
                setDraftExpense({ ...draftExpense, splitMethod: 'even' })
              }
              className={`py-2.5 text-sm font-semibold rounded-xl transition cursor-pointer ${
                draftExpense.splitMethod === 'even'
                  ? 'bg-white shadow-xs text-[#00a6f4] font-bold'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Split Evenly
            </button>
            <button
              type="button"
              onClick={() =>
                setDraftExpense({ ...draftExpense, splitMethod: 'uneven' })
              }
              className={`py-2.5 text-sm font-semibold rounded-xl transition cursor-pointer ${
                draftExpense.splitMethod === 'uneven'
                  ? 'bg-white shadow-xs text-[#00a6f4] font-bold'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Split Unevenly
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        type="button"
        onClick={handleSaveOrContinue}
        disabled={!draftExpense.amount || parseFloat(draftExpense.amount) <= 0}
        className="w-full py-4 rounded-2xl bg-[#00a6f4] text-white font-bold text-base shadow-sm hover:bg-[#0092d8] active:scale-[0.98] transition disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
      >
        Save
      </button>

      {/* Receipt Scanner Modal */}
      <ReceiptScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onReceiptScanned={handleReceiptScanned}
      />
    </div>
  );
}
