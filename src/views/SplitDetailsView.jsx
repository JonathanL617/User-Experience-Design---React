import React, { useState } from 'react';
import { ArrowLeft, Check, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SplitDetailsView() {
  const { setCurrentScreen, draftExpense, addExpense, state } = useApp();

  const totalExpense = parseFloat(draftExpense.amount) || 50.0;

  // Initialize splits for all members
  const [splits, setSplits] = useState({
    emily: draftExpense.splits?.emily ?? 20.0,
    michael: draftExpense.splits?.michael ?? 15.0,
    sarah: draftExpense.splits?.sarah ?? 15.0,
  });

  const [checkedPersons, setCheckedPersons] = useState({
    emily: true,
    michael: true,
    sarah: true,
  });

  const activeMembersCount = Object.values(checkedPersons).filter(Boolean).length;

  const currentSum =
    (checkedPersons.emily ? parseFloat(splits.emily || 0) : 0) +
    (checkedPersons.michael ? parseFloat(splits.michael || 0) : 0) +
    (checkedPersons.sarah ? parseFloat(splits.sarah || 0) : 0);

  const diff = totalExpense - currentSum;
  const isBalanced = Math.abs(diff) < 0.01;

  // Auto split evenly across checked members
  const handleAutoEqual = () => {
    if (activeMembersCount === 0) return;
    const equalShare = parseFloat((totalExpense / activeMembersCount).toFixed(2));
    const newSplits = {};
    if (checkedPersons.emily) newSplits.emily = equalShare;
    if (checkedPersons.michael) newSplits.michael = equalShare;
    if (checkedPersons.sarah) newSplits.sarah = equalShare;
    setSplits((prev) => ({ ...prev, ...newSplits }));
  };

  const handleConfirm = () => {
    addExpense({
      ...draftExpense,
      splits: {
        emily: checkedPersons.emily ? parseFloat(splits.emily || 0) : 0,
        michael: checkedPersons.michael ? parseFloat(splits.michael || 0) : 0,
        sarah: checkedPersons.sarah ? parseFloat(splits.sarah || 0) : 0,
      },
    });
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-white px-6 pt-3 pb-8 select-none">
      <div>
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 mb-3">
          <button
            onClick={() => setCurrentScreen('add-expense')}
            className="p-1 -ml-1 text-slate-800 hover:text-slate-500 transition cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2.2]" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">Split Details</h1>
          <button
            onClick={handleAutoEqual}
            className="text-[11px] font-bold text-[#00a6f4] hover:underline flex items-center gap-1"
            title="Distribute equally among checked roommates"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Equalize</span>
          </button>
        </div>

        {/* Total Expense Display */}
        <div className="text-center mt-2 mb-6">
          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
            TOTAL EXPENSE
          </span>
          <div className="text-4xl font-extrabold text-[#0f172a] mt-1">
            RM {totalExpense.toFixed(2)}
          </div>
        </div>

        {/* Split Breakdown Section Header */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-700">Split breakdown</h2>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              isBalanced
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                : 'bg-amber-50 text-amber-600 border border-amber-100'
            }`}
          >
            {isBalanced ? '✓ Balanced' : `Diff: RM ${diff > 0 ? '+' : ''}${diff.toFixed(2)}`}
          </span>
        </div>

        {/* Roommates Breakdown Cards */}
        <div className="space-y-3">
          {/* Emily (You) */}
          <div className="border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between bg-white shadow-2xs">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setCheckedPersons({ ...checkedPersons, emily: !checkedPersons.emily })
                }
                className={`w-6 h-6 rounded-md flex items-center justify-center transition cursor-pointer ${
                  checkedPersons.emily
                    ? 'bg-[#00a6f4] text-white'
                    : 'border-2 border-slate-300'
                }`}
              >
                {checkedPersons.emily && <Check className="w-4 h-4 stroke-[3]" />}
              </button>
              <span className="font-semibold text-slate-800 text-[15px]">
                Emily (You)
              </span>
            </div>
            <div className="px-3 py-2 bg-slate-50/80 border border-slate-200 rounded-xl flex items-center">
              <span className="text-xs text-slate-500 mr-1 font-semibold">RM</span>
              <input
                type="number"
                step="0.01"
                value={splits.emily}
                disabled={!checkedPersons.emily}
                onChange={(e) =>
                  setSplits({ ...splits, emily: parseFloat(e.target.value) || 0 })
                }
                className="w-16 text-right font-bold text-slate-900 text-sm bg-transparent focus:outline-none disabled:opacity-40"
              />
            </div>
          </div>

          {/* Michael */}
          <div className="border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between bg-white shadow-2xs">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setCheckedPersons({
                    ...checkedPersons,
                    michael: !checkedPersons.michael,
                  })
                }
                className={`w-6 h-6 rounded-md flex items-center justify-center transition cursor-pointer ${
                  checkedPersons.michael
                    ? 'bg-[#00a6f4] text-white'
                    : 'border-2 border-slate-300'
                }`}
              >
                {checkedPersons.michael && <Check className="w-4 h-4 stroke-[3]" />}
              </button>
              <span className="font-semibold text-slate-800 text-[15px]">
                Michael
              </span>
            </div>
            <div className="px-3 py-2 bg-slate-50/80 border border-slate-200 rounded-xl flex items-center">
              <span className="text-xs text-slate-500 mr-1 font-semibold">RM</span>
              <input
                type="number"
                step="0.01"
                value={splits.michael}
                disabled={!checkedPersons.michael}
                onChange={(e) =>
                  setSplits({
                    ...splits,
                    michael: parseFloat(e.target.value) || 0,
                  })
                }
                className="w-16 text-right font-bold text-slate-900 text-sm bg-transparent focus:outline-none disabled:opacity-40"
              />
            </div>
          </div>

          {/* Sarah */}
          <div className="border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between bg-white shadow-2xs">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setCheckedPersons({ ...checkedPersons, sarah: !checkedPersons.sarah })
                }
                className={`w-6 h-6 rounded-md flex items-center justify-center transition cursor-pointer ${
                  checkedPersons.sarah
                    ? 'bg-[#00a6f4] text-white'
                    : 'border-2 border-slate-300'
                }`}
              >
                {checkedPersons.sarah && <Check className="w-4 h-4 stroke-[3]" />}
              </button>
              <span className="font-semibold text-slate-800 text-[15px]">
                Sarah
              </span>
            </div>
            <div className="px-3 py-2 bg-slate-50/80 border border-slate-200 rounded-xl flex items-center">
              <span className="text-xs text-slate-500 mr-1 font-semibold">RM</span>
              <input
                type="number"
                step="0.01"
                value={splits.sarah}
                disabled={!checkedPersons.sarah}
                onChange={(e) =>
                  setSplits({ ...splits, sarah: parseFloat(e.target.value) || 0 })
                }
                className="w-16 text-right font-bold text-slate-900 text-sm bg-transparent focus:outline-none disabled:opacity-40"
              />
            </div>
          </div>
        </div>

        {/* Breakdown Summary Confirmation Card (Kai Wei's Lo-Fi feedback) */}
        <div className="mt-4 p-3.5 bg-sky-50/70 rounded-2xl border border-sky-100 text-xs text-slate-700 space-y-1.5 shadow-2xs">
          <div className="font-bold text-slate-800 flex items-center justify-between">
            <span>Split Summary Confirmation:</span>
            <span className="text-[11px] font-semibold text-[#00a6f4]">
              {draftExpense.category || 'Expense'}
            </span>
          </div>
          <div className="text-slate-600 text-xs flex justify-between">
            <span>• You pay:</span>
            <span className="font-bold text-slate-800">
              RM {(checkedPersons.emily ? splits.emily : 0).toFixed(2)}
            </span>
          </div>
          <div className="text-slate-600 text-xs flex justify-between">
            <span>• Michael owes you:</span>
            <span className="font-bold text-slate-800">
              RM {(checkedPersons.michael ? splits.michael : 0).toFixed(2)}
            </span>
          </div>
          <div className="text-slate-600 text-xs flex justify-between">
            <span>• Sarah owes you:</span>
            <span className="font-bold text-slate-800">
              RM {(checkedPersons.sarah ? splits.sarah : 0).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        type="button"
        onClick={handleConfirm}
        className="w-full py-4 rounded-2xl bg-[#00a6f4] text-white font-bold text-base shadow-sm hover:bg-[#0092d8] active:scale-[0.98] transition cursor-pointer"
      >
        Confirm Split
      </button>
    </div>
  );
}
