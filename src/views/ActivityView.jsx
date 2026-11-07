import React, { useState } from 'react';
import {
  Wifi,
  ShoppingBag,
  Search,
  Receipt,
  Utensils,
  Home,
  TrendingUp,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';

export default function ActivityView() {
  const { state, setSelectedActivity } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Groceries', 'Utilities', 'Dining', 'Household'];

  // Filter activities
  const filteredActivities = state.recentActivities.filter((act) => {
    // Category filter
    if (selectedCategory !== 'All') {
      const cat = act.category || (act.type === 'wifi' ? 'Utilities' : 'Groceries');
      if (cat !== selectedCategory) return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = act.title.toLowerCase().includes(q);
      const matchAmt = act.amount.toString().includes(q);
      const matchSplit = act.splitText.toLowerCase().includes(q);
      const matchCat = (act.category || '').toLowerCase().includes(q);
      if (!matchTitle && !matchAmt && !matchSplit && !matchCat) return false;
    }

    return true;
  });

  // Calculate total spending
  const totalSpending = state.recentActivities.reduce(
    (sum, act) => sum + (parseFloat(act.amount) || 0),
    0
  );

  const getCategoryIcon = (act) => {
    const cat = act.category || (act.type === 'wifi' ? 'Utilities' : 'Groceries');
    if (cat === 'Utilities' || act.type === 'wifi') {
      return <Wifi className="w-5 h-5 text-slate-700 stroke-[2]" />;
    }
    if (cat === 'Dining') {
      return <Utensils className="w-5 h-5 text-slate-700 stroke-[2]" />;
    }
    if (cat === 'Household') {
      return <Home className="w-5 h-5 text-slate-700 stroke-[2]" />;
    }
    return <ShoppingBag className="w-5 h-5 text-slate-700 stroke-[2]" />;
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-white select-none">
      <div className="flex-1 overflow-y-auto px-6 pt-5 pb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Activity</h1>
            <p className="text-slate-500 text-xs mt-0.5">
              Household transaction history & logs
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#00a6f4] flex items-center justify-center shadow-2xs">
            <Receipt className="w-5 h-5" />
          </div>
        </div>

        {/* Monthly Household Spend Card (Matching light sky theme) */}
        <div className="bg-[#e7f5fd] rounded-[24px] p-5 mb-5 border border-sky-100 shadow-xs">
          <div className="flex items-center justify-between text-xs text-[#00a6f4] mb-1 font-bold uppercase tracking-wider">
            <span>TOTAL MONTHLY SPEND</span>
            <span className="flex items-center gap-1 text-emerald-600 font-semibold normal-case text-xs">
              <TrendingUp className="w-3.5 h-3.5" /> Updated
            </span>
          </div>
          <div className="text-[28px] font-extrabold text-[#0f172a] tracking-tight">
            RM {totalSpending.toFixed(2)}
          </div>
          <div className="mt-2.5 pt-2 border-t border-sky-200/60 flex items-center justify-between text-xs text-slate-500">
            <span>Total Logs: {state.recentActivities.length} items</span>
            <span>Active Roommates: {state.members?.length || 3}</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by bill name, category, amount..."
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00a6f4] focus:bg-white transition"
          />
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition active:scale-95 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#00a6f4] text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Transaction History Feed */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
            <span>All Transactions ({filteredActivities.length})</span>
            <span className="text-[11px] text-slate-400 font-normal">Tap to inspect split</span>
          </div>

          {filteredActivities.length === 0 ? (
            <div className="text-center py-10 text-xs text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              No transactions found matching your criteria.
            </div>
          ) : (
            filteredActivities.map((act) => (
              <div
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                className="bg-white border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between shadow-2xs hover:border-slate-300 transition cursor-pointer active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    {getCategoryIcon(act)}
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

      <BottomNav />
    </div>
  );
}
