import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import PhoneFrame from './components/PhoneFrame';
import TesterToolbar from './components/TesterToolbar';

// Views
import LoginView from './views/LoginView';
import HomeDashboardView from './views/HomeDashboardView';
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
import FigmaReferenceModal from './views/FigmaReferenceModal';

function MainApp() {
  const { currentScreen, state } = useApp();
  const [isFrameEnabled, setIsFrameEnabled] = useState(true);

  const renderScreen = () => {
    if (!state.isLoggedIn) {
      return <LoginView />;
    }

    switch (currentScreen) {
      case 'login':
        return <LoginView />;
      case 'home':
        return <HomeDashboardView />;
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
    <div className="min-h-screen bg-slate-100 flex flex-col justify-start py-4 px-2 sm:px-4">
      {/* Usability Testing Facilitator Bar */}
      <TesterToolbar
        isFrameEnabled={isFrameEnabled}
        setIsFrameEnabled={setIsFrameEnabled}
      />

      {/* Main Interactive Smartphone Prototype */}
      <div className="flex-1 flex items-center justify-center">
        <PhoneFrame isFrameEnabled={isFrameEnabled}>
          {renderScreen()}
        </PhoneFrame>
      </div>

      {/* Global Interactive Modals & Sheets */}
      <SettleUpModal />
      <TnGGatewayModal />
      <BankTransferModal />
      <ConfirmPaymentModal />
      <ActivityDetailModal />
      <FigmaReferenceModal />
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
