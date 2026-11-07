import React from 'react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';

export default function HomeDashboardView() {
  const {
    state,
    setCurrentScreen,
    setActiveModal,
    setSelectedDebt,
  } = useApp();

  const handleSettleUp = (debt) => {
    setSelectedDebt(debt);
    setActiveModal('settle-up');
  };

  const handleMarkAsPaid = (debt) => {
    setSelectedDebt(debt);
    setActiveModal('confirm-paid');
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-white select-none">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-3 pb-6">
        {/* Header */}
        <div className="flex items-center justify-between mt-2 mb-5">
          <div>
            <h1 className="text-[26px] font-bold text-slate-900 leading-tight">
              Welcome back, Emily!
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              {state.currentUser.groupName}
            </p>
          </div>
          <button
            onClick={() => setCurrentScreen('profile')}
            className="w-11 h-11 rounded-full bg-[#dbeafe] text-[#0284c7] font-bold text-lg flex items-center justify-center hover:opacity-90 transition active:scale-95 cursor-pointer shadow-xs"
            title="Profile & Settings"
          >
            {state.currentUser.initials}
          </button>
        </div>

        {/* Card 1: Total Balance */}
        <div className="bg-[#e7f5fd] rounded-[24px] p-5 shadow-xs border border-sky-100">
          <span className="text-[11px] font-bold text-[#00a6f4] tracking-wider uppercase">
            TOTAL BALANCE
          </span>
          <div className="text-[28px] font-extrabold text-[#0f172a] mt-1.5 tracking-tight">
            You are owed RM {state.totalOwedToYou.toFixed(2)}
          </div>
        </div>

        {/* Card 2: Total Debt (shown if user owes money) */}
        {state.totalYouOwe > 0 && (
          <div className="bg-[#ffe8ed] rounded-[24px] p-5 mt-3 shadow-xs border border-rose-100 transition-all">
            <span className="text-[11px] font-bold text-[#f43f5e] tracking-wider uppercase">
              TOTAL DEBT
            </span>
            <div className="text-[28px] font-extrabold text-[#0f172a] mt-1.5 tracking-tight">
              You owe RM {state.totalYouOwe.toFixed(2)}
            </div>
          </div>
        )}

        {/* Pending Debts Section */}
        <div className="mt-7">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-slate-900">
              Pending Debts
            </h2>
            {state.pendingDebts.length > 0 && (
              <span className="text-xs font-semibold text-slate-400">
                {state.pendingDebts.length} active
              </span>
            )}
          </div>

          <div className="space-y-3">
            {state.pendingDebts.length === 0 ? (
              <div className="text-center py-8 text-xs text-emerald-600 font-semibold bg-emerald-50 rounded-2xl border border-emerald-100">
                🎉 All debts settled! No outstanding balances.
              </div>
            ) : (
              state.pendingDebts.map((debt) => {
                const isYouOwe = debt.type === 'you_owe';
                return (
                  <div
                    key={debt.id}
                    className="bg-white border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between shadow-2xs hover:border-slate-300 transition"
                  >
                    <div>
                      <div className="text-[13px] text-slate-600 font-medium">
                        {isYouOwe ? `You owe ${debt.person}` : `${debt.person} owes you`}
                      </div>
                      <div
                        className={`text-[17px] font-extrabold mt-0.5 ${
                          isYouOwe ? 'text-[#ef4444]' : 'text-[#00a6f4]'
                        }`}
                      >
                        RM {debt.amount.toFixed(2)}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {debt.note || (isYouOwe ? 'Shared household expense' : 'Groceries')}
                      </div>
                    </div>

                    {isYouOwe ? (
                      <button
                        onClick={() => handleSettleUp(debt)}
                        className="px-5 py-2.5 rounded-xl border-[1.5px] border-[#00a6f4] text-[#00a6f4] font-semibold text-xs hover:bg-[#00a6f4] hover:text-white transition active:scale-95 cursor-pointer shadow-2xs"
                      >
                        Settle Up
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMarkAsPaid(debt)}
                        className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#00a6f4] text-[#00a6f4] font-semibold text-xs hover:bg-[#00a6f4] hover:text-white transition active:scale-95 cursor-pointer shadow-2xs"
                      >
                        Mark as Paid
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
}
