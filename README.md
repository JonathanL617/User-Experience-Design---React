# RoomieSplit — Hi-Fi Interactive Usability Testing Prototype

> **Coursework:** 6026CMD User Experience Design  
> **Institution:** INTI International College Penang / Coventry University, UK  
> **Project:** Iterative Usability Testing and Prototype Refinement (High-Fidelity Prototype)  
> **Student:** Jonathan Lim Ming Xuan (ID: 16930528)

---

## 🚀 Quick Start (Running on Any Computer)

### Option 1: 1-Click Launch (Windows) — Fastest & Recommended
1. Clone or extract this folder on the participant's computer.
2. Double-click **`start-prototype.bat`**.
3. It will automatically check Node.js, install dependencies if needed, and open the prototype in your default browser at `http://localhost:5173`.

---

### Option 2: 1-Click Launch (macOS / Linux)
1. Open Terminal in the project directory.
2. Run:
   ```bash
   chmod +x start-prototype.sh
   ./start-prototype.sh
   ```

---

### Option 3: Standard Terminal Commands
Make sure **Node.js (v18 or newer)** is installed ([Download Node.js](https://nodejs.org/)).

1. Open your terminal in this directory:
   ```bash
   npm install
   ```
2. Start the interactive local prototype:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

> [!TIP]
> **Windows PowerShell Users:** If PowerShell shows an execution policy restriction (`npm.ps1 cannot be loaded`), simply run `npm.cmd install` and `npm.cmd run dev`, or double-click `start-prototype.bat`.

---

## 📱 Testing Directly on Mobile Phones (Same Wi-Fi)

To test the prototype on a participant's actual smartphone (iPhone or Android):
1. Connect both the host computer and the phone to the **same Wi-Fi network**.
2. Run `npm run dev -- --host` (or double-click `start-prototype.bat`).
3. Note the **Network URL** displayed in your terminal (e.g. `http://192.168.1.X:5173`).
4. Type that URL into Safari or Chrome on the phone.
5. In the top toolbar of the app, click **"Full Screen"** so the UI expands naturally to fit the mobile device!

---

## 🧪 Usability Testing Tasks (Section 1.4)

The prototype comes with a built-in **Usability Testing Control Panel** at the top of the screen that displays the active scenario instructions, observer notes, and a **1-Click State Reset** button between participant sessions.

| Task # | Scenario / Task Description | Target Flow in Prototype |
| :--- | :--- | :--- |
| **Task 1** | **Log a new expense:** You just bought RM50 worth of groceries for the house. Log this expense into the app and split the cost unevenly among your roommates. | Tap `(+) Add` → Amount: `50.00` → Description: `Groceries` → Select `Split Unevenly` → Tap `Customize Split` → View breakdown (Emily: RM20, Michael: RM15, Sarah: RM15) → Tap `Confirm Split` → Success Screen. |
| **Task 2** | **Paying a roommate back:** You owe money on a shared expense. Find your pending debt and pay Michael RM15 using a digital wallet. | On Home Dashboard under *Pending Debts*, find `You owe Michael RM 15.00` → Tap `Settle Up` → Select `Pay via TnG eWallet` → Review confirmation & tap `Authorize & Pay` → Success Screen. |
| **Task 3** | **Clearing a debt:** Sarah just transferred RM15 to your bank account for her portion of her grocery. Acknowledge and clear this debt. | On Home Dashboard under *Pending Debts*, find `Sarah owes you RM 15.00` → Tap `Mark as Paid` → Complete 2nd-step verification dialog to prevent mistouch → Success Screen. |
| **Task 4** | **Setting up an automated reminder:** You want to avoid chasing your roommates for unpaid bills. Adjust your preferences so the app automatically sends out reminders every 3 days. | Tap `Profile` tab in bottom navigation → Tap `Automated Reminders` → Choose `3 Days` interval → Review SMS/Push preview → Tap `Save Preferences`. |
| **Task 5** | **Checking dashboard status:** You open the app to your overall financial status. Locate the summary showing the total amount owed to you and review the latest transaction. | On Home Dashboard, observe `TOTAL BALANCE` card (`You are owed RM ...`), `TOTAL DEBT` card, and filter/search the `Recent Activity` feed. |

---

## 🔄 Facilitator Tools Built Directly into the UI

- **1-Click Reset State (`Reset State` button):** Resets balances, transactions, and preferences back to the pristine initial state in 1 second between testing participants. No need to clear browser cookies or reload.
- **Task Switcher (`<` and `>`):** Cycle through Tasks 1 to 5 with full scenario prompts shown live on-screen for the participant or facilitator.
- **Display Mode Toggle (`Phone Frame` / `Full Screen`):** Switch between the iPhone 15 frame (ideal for laptops and remote Zoom testing) and full responsive mode (ideal for mobile phone browsers).
- **Figma Mockup Inspector (`Figma Mockups` button):** Open a side-by-side gallery of all 16 original Figma screens for visual fidelity verification.

---

## 🎨 Iterative Improvements Applied (Lo-Fi → Hi-Fi)

This High-Fidelity prototype incorporates direct feedback from the 5 initial Lo-Fi usability test participants:

1. **Split Confirmation & Calculation (Kai Wei):**  
   *Feedback:* "When the split breakdown page appears, i think it's better to have a summary so that users can have a confirmation before confirming the split."  
   *Implementation:* Added real-time sum indicator and an itemized summary box on the split details screen.
2. **Second-step Verification on Debt Settlement (Kai Wei):**  
   *Feedback:* "I think it would be nice to add a second verification to prevent mistouch."  
   *Implementation:* Added a confirmation dialog when clicking "Mark as Paid" to ensure users do not accidentally clear debts.
3. **Touch 'n Go Gateway Confirmation (Matthew):**  
   *Feedback:* "Normally when you do a transaction, there needs to be a confirmation that I want to do a transaction... give me a popup to bring me to Touch 'n Go website..."  
   *Implementation:* Designed an explicit Touch 'n Go eWallet 256-bit authorization gateway modal before completing payment.
4. **Transaction Search & Filter (Kai Wei & Matthew):**  
   *Feedback:* "Adding a search button to search for either name or money would be nice... when there is a lot of history..."  
   *Implementation:* Added an instant search bar in the Recent Activity feed that filters by name, description, and amount.
5. **Flexible Reminder Intervals (Jay):**  
   *Feedback:* "Let the users choose maybe 1 day or 2 days rather than fix them to just choose 3 days or 1 week."  
   *Implementation:* Added granular selectable options (1 Day, 2 Days, 3 Days, 1 Week) in Notification Preferences.
6. **Consistent Visual Color Semantics (Jay):**  
   *Feedback:* "The color for the amount can make it black for the recent activity items... blue can be used for someone who owes you debt."  
   *Implementation:* Red is used for debt you owe, sky blue for money owed to you, and neutral dark tones for activity history.

---

## 📂 Project Structure

```
├── public/                     # Static assets & original Figma reference PNGs
│   ├── home-dashboard.png
│   ├── add-expense-filled.png
│   ├── split-options.png
│   └── ... (all 16 Figma screen exports)
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx       # 4-tab mobile navigation bar
│   │   ├── PhoneFrame.jsx      # iPhone 15 frame with status bar & home indicator
│   │   └── TesterToolbar.jsx   # Testing control panel, tasks guide & reset button
│   ├── context/
│   │   └── AppContext.jsx      # Global interactive prototype state & logic
│   ├── views/
│   │   ├── HomeDashboardView.jsx           # Main dashboard with balances & feeds
│   │   ├── AddExpenseView.jsx              # Expense logging & receipt scanning
│   │   ├── SplitDetailsView.jsx            # Uneven split calculations & breakdown
│   │   ├── ProfileView.jsx                 # User profile & toggles
│   │   ├── NotificationPreferencesView.jsx # Reminder frequency configuration
│   │   ├── GroupsView.jsx                  # Co-living #402 roommate management
│   │   ├── LoginView.jsx                   # RoomieSplit authentication & error states
│   │   ├── SuccessView.jsx                 # Dynamic success confirmation screen
│   │   ├── SettleUpModal.jsx               # Digital wallet payment gateway options
│   │   ├── TnGGatewayModal.jsx             # Simulated Touch 'n Go eWallet checkout
│   │   ├── ConfirmPaymentModal.jsx         # Anti-mistouch confirmation dialog
│   │   └── FigmaReferenceModal.jsx         # Reference viewer for Figma designs
│   ├── App.jsx                 # Root component orchestrating views & modals
│   ├── index.css               # Tailwind CSS v4 styling
│   └── main.jsx                # React root mount
├── start-prototype.bat         # 1-click Windows launcher
├── start-prototype.sh          # 1-click macOS/Linux launcher
├── package.json
└── vite.config.js
```

---

## 🛠️ Technology Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans
