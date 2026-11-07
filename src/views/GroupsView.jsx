import React, { useState } from 'react';
import { Users, UserPlus, Shield, ChevronRight, X, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';

export default function GroupsView() {
  const { state, addMember } = useApp();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleAddRoommate = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) return;
    addMember(newName.trim(), newEmail.trim());
    setNewName('');
    setNewEmail('');
    setShowInviteModal(false);
  };

  const getInitialsColor = (idx) => {
    const colors = [
      'bg-sky-100 text-sky-700',
      'bg-indigo-100 text-indigo-700',
      'bg-rose-100 text-rose-700',
      'bg-emerald-100 text-emerald-700',
      'bg-amber-100 text-amber-700',
    ];
    return colors[idx % colors.length];
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-white select-none">
      <div className="flex-1 overflow-y-auto px-6 pt-5 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Groups</h1>
            <p className="text-slate-500 text-sm">Manage your shared spaces</p>
          </div>
          <button
            onClick={() => setShowInviteModal(true)}
            className="w-10 h-10 rounded-2xl bg-sky-50 text-[#00a6f4] flex items-center justify-center hover:bg-sky-100 transition cursor-pointer shadow-2xs"
            title="Invite Roommate"
          >
            <UserPlus className="w-5 h-5" />
          </button>
        </div>

        {/* Current Active Group Card */}
        <div className="border border-sky-200 bg-sky-50/50 rounded-[24px] p-5 mb-6 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-[#00a6f4] uppercase tracking-wider">
              Active Household
            </span>
            <span className="text-[11px] font-bold px-2.5 py-1 bg-[#00a6f4] text-white rounded-full">
              Primary
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            {state.currentUser.groupName}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {state.members.length} active roommates • Shared utilities & grocery
          </p>
        </div>

        {/* Members List */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-700">Roommates in #402</h3>
            <span className="text-xs text-slate-400 font-medium">
              {state.members.length} members
            </span>
          </div>
          <div className="space-y-3">
            {state.members.map((m, idx) => (
              <div
                key={m.id || idx}
                className="border border-slate-200/90 rounded-[20px] p-4 flex items-center justify-between bg-white shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-full font-bold text-sm flex items-center justify-center ${getInitialsColor(
                      idx
                    )}`}
                  >
                    {m.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">
                      {m.name}
                    </div>
                    <div className="text-xs text-slate-400">{m.email}</div>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {m.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Invite Roommate Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-sm rounded-[32px] p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setShowInviteModal(false)}
              className="absolute right-5 top-5 p-1 rounded-full text-slate-400 hover:text-slate-700 transition"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Add Roommate
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Add a new member to Co-living Space #402
            </p>

            <form onSubmit={handleAddRoommate} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Jason Lee"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-[#00a6f4]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="e.g. jason@email.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-[#00a6f4]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-[#00a6f4] hover:bg-[#0092d8] text-white font-bold text-xs shadow-xs transition active:scale-95 cursor-pointer"
              >
                Add Roommate
              </button>
            </form>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
