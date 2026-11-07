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

## 🧭 Navigation & Tab Architecture

To prevent overwhelming single-page scrolling, the prototype is divided into 5 focused bottom navigation tabs:

1. **Home (`Home`):**  
   Focuses on immediate financial standing: `TOTAL BALANCE`, `TOTAL DEBT`, and **Pending Debts** requiring action (`Settle Up` and `Mark as Paid`), with a quick 2-item preview of latest activity.
2. **Activity (`Activity`):**  
   Dedicated transaction history tab featuring:
   - Monthly household spending total
   - Instant search by title, amount, or category
   - Category filtering pills (`All`, `Groceries`, `Utilities`, `Dining`, `Household`)
   - Interactive transaction inspection sheets
3. **Add Expense (`Add`):**  
   Prominent elevated action button for logging shared bills, smart receipt OCR scanning, and uneven split customization.
4. **Groups (`Groups`):**  
   Manage the active household (*Co-living Space #402*), view roommates, and invite/add new members.
5. **Profile (`Profile`):**  
   Connected payment methods (TnG eWallet, Bank Account) and notification preferences (automated reminders cadence).

---

## 🧪 Usability Testing Tasks (Section 1.4)

The prototype comes with a built-in **User Testing Controls** panel at the top of the screen that displays active scenario instructions and a **1-Click State Reset** button between participant sessions.

| Task # | Scenario / Task Description | Target Flow in Prototype |
| :--- | :--- | :--- |
| **Task 1** | **Log a new expense:** You just bought RM50 worth of groceries for the house. Log this expense into the app and split the cost unevenly among your roommates. | Tap `(+) Add` → Amount: `50.00` → Description: `Groceries` → Select `Split Unevenly` → Tap `Save` → View breakdown (Emily: RM20, Michael: RM15, Sarah: RM15) → Tap `Confirm Split` → Success Screen. |
| **Task 2** | **Paying a roommate back:** You owe money on a shared expense. Find your pending debt and pay Michael RM15 using a digital wallet. | On Home Dashboard under *Pending Debts*, find `You owe Michael RM 15.00` → Tap `Settle Up` → Select `Pay via TnG eWallet` → Review confirmation & tap `Authorize & Pay` → Success Screen. |
| **Task 3** | **Clearing a debt:** Sarah just transferred RM15 to your bank account for her portion of her grocery. Acknowledge and clear this debt. | On Home Dashboard under *Pending Debts*, find `Sarah owes you RM 15.00` → Tap `Mark as Paid` → Complete verification dialog → Success Screen. |
| **Task 4** | **Setting up an automated reminder:** You want to avoid chasing your roommates for unpaid bills. Adjust your preferences so the app automatically sends out reminders every 3 days. | Tap `Profile` tab → Tap `Automated Reminders` → Choose `3 Days` (or tap `Custom` to set any custom days/weeks) → Review SMS/Push preview → Tap `Save Preferences`. |
| **Task 5** | **Checking dashboard status:** You open the app to your overall financial status. Locate the summary showing the total amount owed to you and review the latest transaction. | On Home Dashboard, observe `TOTAL BALANCE` card, or switch to the **Activity** tab to inspect full history with search and category filters. |

---

## 🔄 Facilitator Tools Built Directly into the UI

- **1-Click Reset State (`Reset State` button):** Resets balances, debts, and transactions back to the initial state in 1 second between testing participants.
- **Task Switcher (`<` and `>`):** Cycle through Tasks 1 to 5 with full scenario prompts shown live on-screen for the participant or facilitator.
- **Display Mode Toggle (`Phone Frame` / `Full Screen`):** Switch between the iPhone 15 frame (ideal for laptops and remote Zoom testing) and full responsive mode (ideal for mobile phone browsers).
- **Figma Reference Viewer (`Design Screens` button):** Side-by-side reference gallery of all 16 original Figma screens.

---

## 🛠️ Technology Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans
