# RoomieSplit — Hi-Fi Interactive Usability Testing Prototype

> **Coursework:** 6026CMD User Experience Design  
> **Institution:** INTI International College Penang / Coventry University, UK  
> **Project:** Iterative Usability Testing and Prototype Refinement (High-Fidelity Prototype)  
> **Student:** Jonathan Lim Ming Xuan (ID: 16930528)

---

## Quick Start (Running the Prototype)

Make sure **Node.js (v18 or newer)** is installed on the computer ([Download Node.js](https://nodejs.org/)).

### 1. Install Dependencies
Open your terminal in this project folder and run:
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to the local server address displayed in your terminal (typically):
```
http://localhost:5173
```

> [!TIP]
> **Windows PowerShell Users:** If your PowerShell displays a script execution policy restriction (`npm.ps1 cannot be loaded`), simply run:
> ```powershell
> npm.cmd install
> npm.cmd run dev
> ```

---

## Testing Directly on Mobile Phones (Same Wi-Fi)

To test the prototype on a participant's actual smartphone (iPhone or Android):
1. Connect both the host computer and the phone to the **same Wi-Fi network**.
2. Start the server exposing network access:
   ```bash
   npm run dev -- --host
   ```
3. Note the **Network URL** printed in the terminal (e.g. `http://192.168.1.X:5173`).
4. Type that URL into Safari or Chrome on the phone.
5. In the top toolbar, tap **"Full Screen"** so the interface expands to fit the mobile screen naturally.

---

## Navigation & Tab Architecture

The prototype is organized into 5 dedicated bottom navigation tabs:

1. **Home (`Home`):**  
   Financial summary (`TOTAL BALANCE`, `TOTAL DEBT`) and **Pending Debts** requiring immediate action (`Settle Up` and `Mark as Paid`).
2. **Activity (`Activity`):**  
   Complete transaction history featuring monthly group spend, instant search, category filtering (`All`, `Groceries`, `Utilities`, `Dining`, `Household`), and item inspection sheets.
3. **Add Expense (`Add`):**  
   Elevated action button for logging shared bills, smart receipt OCR scanning, and uneven split customization.
4. **Groups (`Groups`):**  
   Active household overview (*Co-living Space #402*), roommate list, and member onboarding.
5. **Profile (`Profile`):**  
   Payment methods (TnG eWallet, Bank Account) and notification preferences (automated reminder intervals).

---

## Facilitator Tools Built Directly into the UI

- **1-Click Reset State (`Reset State` button):** Resets balances, debts, and transactions back to the initial state in 1 second between testing participants.
- **Task Switcher (`<` and `>`):** Cycle through Tasks 1 to 5 with full scenario prompts shown live on-screen for the participant or facilitator.
- **Display Mode Toggle (`Phone Frame` / `Full Screen`):** Switch between the iPhone 15 frame (ideal for laptops and remote Zoom testing) and full responsive mode (ideal for mobile phone browsers).
- **Figma Reference Viewer (`Design Screens` button):** Side-by-side reference gallery of all 16 original Figma screens.

---

## Technology Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans
