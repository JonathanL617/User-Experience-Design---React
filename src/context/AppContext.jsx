import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const INITIAL_STATE = {
  isLoggedIn: true,
  currentUser: {
    name: 'Emily Chen',
    email: 'emily.chen@email.com',
    initials: 'EC',
    groupName: 'Co-living Space #402',
  },
  members: [
    { id: 'emily', name: 'Emily (You)', initials: 'EC', email: 'emily.chen@email.com', role: 'Admin' },
    { id: 'michael', name: 'Michael', initials: 'MT', email: 'michael.t@email.com', role: 'Roommate' },
    { id: 'sarah', name: 'Sarah', initials: 'SL', email: 'sarah.lee@email.com', role: 'Roommate' },
  ],
  totalOwedToYou: 0.0,
  totalYouOwe: 15.0,
  recentActivities: [
    {
      id: 'act-1',
      title: 'Internet Bill',
      category: 'Utilities',
      splitText: 'Split equally',
      amount: 30.0,
      timestamp: 'Yesterday',
      type: 'wifi',
      paidBy: 'Emily Chen',
      splits: [
        { name: 'Emily (You)', amount: 10.0 },
        { name: 'Michael', amount: 10.0 },
        { name: 'Sarah', amount: 10.0 },
      ],
    },
  ],
  pendingDebts: [
    {
      id: 'debt-michael-owe',
      type: 'you_owe', // you owe Michael
      person: 'Michael',
      amount: 15.0,
      note: 'Dinner split from Tuesday',
      date: '2 days ago',
    },
  ],
  preferences: {
    automatedReminders: false,
    reminderInterval: '3 Days', // '1 Day', '2 Days', '3 Days', '1 Week'
    reminderTemplate: 'Hey! Just a friendly reminder that you owe Emily RM {amount} for {expense}.',
    pushNotifications: true,
  },
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('roomiesplit_state_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse state', e);
      }
    }
    return INITIAL_STATE;
  });

  const [currentScreen, setCurrentScreen] = useState('home');
  const [successConfig, setSuccessConfig] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedDebt, setSelectedDebt] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  // New expense draft state
  const [draftExpense, setDraftExpense] = useState({
    amount: '50.00',
    description: 'Groceries',
    category: 'Groceries',
    group: 'Roomies #402',
    splitMethod: 'uneven',
    splits: {
      emily: 20.0,
      michael: 15.0,
      sarah: 15.0,
    },
  });

  useEffect(() => {
    localStorage.setItem('roomiesplit_state_v2', JSON.stringify(state));
  }, [state]);

  const resetToInitial = () => {
    localStorage.removeItem('roomiesplit_state_v2');
    setState(INITIAL_STATE);
    setCurrentScreen('home');
    setActiveModal(null);
    setSuccessConfig(null);
    setSelectedDebt(null);
    setSelectedActivity(null);
    setDraftExpense({
      amount: '50.00',
      description: 'Groceries',
      category: 'Groceries',
      group: 'Roomies #402',
      splitMethod: 'uneven',
      splits: {
        emily: 20.0,
        michael: 15.0,
        sarah: 15.0,
      },
    });
  };

  // Add new expense (Task 1)
  const addExpense = (expenseData) => {
    const amt = parseFloat(expenseData.amount) || 50.0;
    const michaelShare = parseFloat(expenseData.splits?.michael || 0);
    const sarahShare = parseFloat(expenseData.splits?.sarah || 0);
    const emilyShare = parseFloat(expenseData.splits?.emily || 0);

    const splitDesc =
      expenseData.splitMethod === 'even'
        ? 'Split equally'
        : `Split: Emily RM${emilyShare.toFixed(0)}, Michael RM${michaelShare.toFixed(0)}, Sarah RM${sarahShare.toFixed(0)}`;

    const newActivity = {
      id: `act-${Date.now()}`,
      title: expenseData.description || 'Groceries',
      category: expenseData.category || 'Groceries',
      splitText: 'Split with Michael & Sarah',
      amount: amt,
      timestamp: 'Just now',
      type: expenseData.category === 'Utilities' ? 'wifi' : 'groceries',
      paidBy: 'Emily Chen (You)',
      splits: [
        { name: 'Emily (You)', amount: emilyShare },
        { name: 'Michael', amount: michaelShare },
        { name: 'Sarah', amount: sarahShare },
      ],
    };

    const newDebtsToAdd = [];
    if (michaelShare > 0) {
      newDebtsToAdd.push({
        id: `debt-michael-owed-${Date.now()}`,
        type: 'they_owe',
        person: 'Michael',
        amount: michaelShare,
        note: expenseData.description || 'Groceries',
        date: 'Just now',
      });
    }
    if (sarahShare > 0) {
      newDebtsToAdd.push({
        id: `debt-sarah-owed-${Date.now()}`,
        type: 'they_owe',
        person: 'Sarah',
        amount: sarahShare,
        note: expenseData.description || 'Groceries',
        date: 'Just now',
      });
    }

    const newOwedTotal = michaelShare + sarahShare;

    setState((prev) => ({
      ...prev,
      totalOwedToYou: prev.totalOwedToYou + newOwedTotal,
      recentActivities: [newActivity, ...prev.recentActivities],
      pendingDebts: [...prev.pendingDebts, ...newDebtsToAdd],
    }));

    setSuccessConfig({
      title: 'Expense Added Successfully!',
      subtitle: `RM ${amt.toFixed(2)} — ${expenseData.description || 'Groceries'}`,
      nextScreen: 'home',
    });
    setCurrentScreen('success');
  };

  // Settle up debt (Task 2)
  const settleDebt = (debtId, paymentMethod = 'tng') => {
    const debt = state.pendingDebts.find((d) => d.id === debtId);
    if (!debt) return;

    setState((prev) => {
      const updatedDebts = prev.pendingDebts.filter((d) => d.id !== debtId);
      const remainingYouOwe = Math.max(0, prev.totalYouOwe - debt.amount);
      return {
        ...prev,
        totalYouOwe: remainingYouOwe,
        pendingDebts: updatedDebts,
      };
    });

    setSuccessConfig({
      title: 'Debt Cleared!',
      subtitle: `You paid ${debt.person} RM ${debt.amount.toFixed(2)}`,
      nextScreen: 'home',
    });
    setActiveModal(null);
    setCurrentScreen('success');
  };

  // Mark debt as paid (Task 3)
  const markAsPaid = (debtId) => {
    const debt = state.pendingDebts.find((d) => d.id === debtId);
    if (!debt) return;

    setState((prev) => {
      const updatedDebts = prev.pendingDebts.filter((d) => d.id !== debtId);
      const remainingOwed = Math.max(0, prev.totalOwedToYou - debt.amount);
      return {
        ...prev,
        totalOwedToYou: remainingOwed,
        pendingDebts: updatedDebts,
      };
    });

    setSuccessConfig({
      title: 'Debt Cleared!',
      subtitle: `${debt.person} has paid RM ${debt.amount.toFixed(2)}`,
      nextScreen: 'home',
    });
    setActiveModal(null);
    setCurrentScreen('success');
  };

  // Update preferences (Task 4)
  const updatePreferences = (newPrefs) => {
    setState((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        ...newPrefs,
      },
    }));
  };

  // Add new roommate
  const addMember = (name, email) => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    setState((prev) => ({
      ...prev,
      members: [
        ...prev.members,
        {
          id: `member-${Date.now()}`,
          name,
          email,
          initials,
          role: 'Roommate',
        },
      ],
    }));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        currentScreen,
        setCurrentScreen,
        successConfig,
        setSuccessConfig,
        activeModal,
        setActiveModal,
        selectedDebt,
        setSelectedDebt,
        selectedActivity,
        setSelectedActivity,
        draftExpense,
        setDraftExpense,
        currentTaskIndex,
        setCurrentTaskIndex,
        resetToInitial,
        addExpense,
        settleDebt,
        markAsPaid,
        updatePreferences,
        addMember,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
