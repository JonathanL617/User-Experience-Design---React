import React from 'react';
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
  const { currentScreen, state } = useApp();

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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-0 sm:p-4">
      {/* Interactive Mobile Device Frame */}
      <PhoneFrame>
        {renderScreen()}
      </PhoneFrame>

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
