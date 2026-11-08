import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { AppProvider, useApp } from './context/AppContext';
import PhoneFrame from './components/PhoneFrame';

// Views
import LoginView from './views/LoginView';
import HomeDashboardView from './views/HomeDashboardView';
import ActivityView from './views/ActivityView';
import AddExpenseView from './views/AddExpenseView';
import SplitDetailsView from './views/SplitDetailsView';
import ProfileView from './views/ProfileView';
import NotificationPreferencesView from './views/NotificationPreferencesView';
import GroupsView from './views/GroupsView';
import SuccessView from './views/SuccessView';

// Modals
import SettleUpModal from './views/SettleUpModal';
import TnGGatewayModal from './views/TnGGatewayModal';
import BankTransferModal from './views/BankTransferModal';
import ConfirmPaymentModal from './views/ConfirmPaymentModal';
import ActivityDetailModal from './views/ActivityDetailModal';

function MainApp() {
  const { currentScreen, state, resetToInitial } = useApp();
  const [resetToast, setResetToast] = useState(false);

  const handleResetData = () => {
    resetToInitial();
    setResetToast(true);
    setTimeout(() => setResetToast(false), 2200);
  };

  const renderScreen = () => {
    if (!state.isLoggedIn) {
      return <LoginView />;
    }

    switch (currentScreen) {
      case 'login':
        return <LoginView />;
      case 'home':
        return <HomeDashboardView />;
      case 'activity':
        return <ActivityView />;
      case 'add-expense':
        return <AddExpenseView />;
      case 'split-details':
        return <SplitDetailsView />;
      case 'profile':
        return <ProfileView />;
      case 'notifications':
        return <NotificationPreferencesView />;
      case 'groups':
        return <GroupsView />;
      case 'success':
        return <SuccessView />;
      default:
        return <HomeDashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-0 sm:p-4 relative">
      {/* Toast Notification (Outside the prototype) */}
      {resetToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2 animate-fadeIn">
          <RotateCcw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          <span>Demo state reset to initial!</span>
        </div>
      )}

      {/* Interactive Mobile Device Frame */}
      <PhoneFrame>
        {renderScreen()}
      </PhoneFrame>

      {/* Facilitator Reset Button (Placed outside the prototype canvas) */}
      <button
        onClick={handleResetData}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 px-3.5 py-2.5 bg-white/95 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-md hover:shadow-lg rounded-full text-xs font-bold backdrop-blur-sm transition-all active:scale-95 cursor-pointer group"
        title="Facilitator shortcut: Reset prototype to initial state"
      >
        <RotateCcw className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00a6f4] transition" />
        <span className="hidden sm:inline">Reset Demo Data</span>
      </button>

      {/* Global Interactive Modals & Sheets */}
      <SettleUpModal />
      <TnGGatewayModal />
      <BankTransferModal />
      <ConfirmPaymentModal />
      <ActivityDetailModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
