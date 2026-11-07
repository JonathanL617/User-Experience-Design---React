import React, { useState } from 'react';
import { Wifi, ShoppingBag, Search, Plus, Filter, Sparkles, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';

export default function HomeDashboardView() {
  const {
    state,
    setCurrentScreen,
    setActiveModal,
    setSelectedDebt,
    setSelectedActivity,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [activeSegment, setActiveSegment] = useState('all'); // 'all', 'debts', 'activity' (Matthew's Lo-Fi feedback)

  const filteredActivities = state.recentActivities.filter((act) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      act.title.toLowerCase().includes(query) ||
      act.amount.toString().includes(query) ||
      act.splitText.toLowerCase().includes(query) ||
      (act.category && act.category.toLowerCase().includes(query))
    );
  });

  const filteredDebts = state.pendingDebts.filter((d) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      d.person.toLowerCase().includes(query) ||
      d.amount.toString().includes(query)
    );
  });

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
      {/* Scrollable Content */}
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

        {/* View Filter Segment (Directly addressing Matthew's Lo-Fi feedback: "Pending debt is more important and should be on top, recent activity shouldn't be in front page or should be its own segment") */}
        <div className="mt-6 flex items-center justify-between gap-2">
          <div className="bg-slate-100/90 p-1 rounded-xl flex items-center gap-1 text-xs font-bold text-slate-600">
            <button
              onClick={() => setActiveSegment('all')}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeSegment === 'all'
                  ? 'bg-white shadow-xs text-slate-900'
                  : 'hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveSegment('debts')}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                activeSegment === 'debts'
                  ? 'bg-white shadow-xs text-rose-600'
                  : 'hover:text-slate-900'
              }`}
            >
              <span>Debts</span>
              {state.pendingDebts.length > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              )}
            </button>
            <button
              onClick={() => setActiveSegment('activity')}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeSegment === 'activity'
                  ? 'bg-white shadow-xs text-slate-900'
                  : 'hover:text-slate-900'
              }`}
            >
              Activity
            </button>
          </div>

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition text-xs flex items-center gap-1.5 font-medium border border-slate-200/80"
            title="Search transactions and debts"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>
        </div>

        {/* Search Bar Input (Kai Wei's Lo-Fi feedback) */}
        {showSearch && (
          <div className="mt-3 animate-fadeIn">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, bill, or amount..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-[#00a6f4]"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Pending Debts Section (Visible in 'all' and 'debts' segments) */}
        {(activeSegment === 'all' || activeSegment === 'debts') && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2.5">
              <h2 className="text-base font-bold text-slate-900">
                Pending Debts
              </h2>
              {state.pendingDebts.length > 0 && (
                <span className="text-[11px] font-semibold text-slate-400">
                  {state.pendingDebts.length} active
                </span>
              )}
            </div>

            <div className="space-y-3">
              {filteredDebts.length === 0 ? (
                <div className="text-center py-5 text-xs text-emerald-600 font-semibold bg-emerald-50 rounded-2xl border border-emerald-100">
                  🎉 All debts settled! No outstanding balances.
                </div>
              ) : (
                filteredDebts.map((debt) => {
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
                        {debt.note && (
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {debt.note}
                          </div>
                        )}
                      </div>

                      {/* Settle Up (Red accent reflecting Jay's Lo-Fi feedback) */}
                      {isYouOwe ? (
                        <button
                          onClick={() => handleSettleUp(debt)}
                          className="px-4 py-2 rounded-xl border-[1.5px] border-rose-500 text-rose-600 font-bold text-xs hover:bg-rose-500 hover:text-white transition active:scale-95 cursor-pointer shadow-2xs"
                        >
                          Settle Up
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMarkAsPaid(debt)}
                          className="px-3.5 py-2 rounded-xl border-[1.5px] border-[#00a6f4] text-[#00a6f4] font-bold text-xs hover:bg-[#00a6f4] hover:text-white transition active:scale-95 cursor-pointer shadow-2xs"
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
        )}

        {/* Recent Activity Section (Visible in 'all' and 'activity' segments) */}
        {(activeSegment === 'all' || activeSegment === 'activity') && (
          <div className="mt-7">
            <div className="flex items-center justify-between mb-2.5">
              <h2 className="text-base font-bold text-slate-900">
                Recent Activity
              </h2>
              <span className="text-[11px] text-slate-400 font-medium">
                Tap for details
              </span>
            </div>

            <div className="space-y-3">
              {filteredActivities.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  No activity found matching your search.
                </div>
              ) : (
                filteredActivities.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => setSelectedActivity(act)}
                    className="bg-white border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between shadow-2xs hover:border-slate-300 transition cursor-pointer active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-center shrink-0">
                        {act.type === 'wifi' ? (
                          <Wifi className="w-5 h-5 text-slate-700 stroke-[2]" />
                        ) : (
                          <ShoppingBag className="w-5 h-5 text-slate-700 stroke-[2]" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-[15px]">
                          {act.title}
                        </h3>
                        <p className="text-slate-400 text-xs mt-0.5">
                          {act.splitText}
                        </p>
                      </div>
                    </div>
                    {/* Amount formatted in black to maintain consistency per Jay's feedback */}
                    <div className="text-right">
                      <div className="font-bold text-slate-900 text-[15px]">
                        RM {act.amount.toFixed(2)}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {act.timestamp}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
}
