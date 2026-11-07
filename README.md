# Hi-Fi Interactive Usability Testing Prototype
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



---

## Navigation & Tab Architecture

The application is structured into 5 dedicated bottom navigation tabs:

1. **Home (`Home`):**  
   Financial executive overview displaying net balance (`TOTAL BALANCE`, `TOTAL DEBT`) and actionable **Pending Debts** requiring resolution (`Settle Up` and `Mark as Paid`).
2. **Activity (`Activity`):**  
   Complete transaction ledger featuring monthly group spend, instant search, category filtering (`All`, `Groceries`, `Utilities`, `Dining`, `Household`), and item inspection sheets.
3. **Add Expense (`Add`):**  
   Elevated action button for logging shared bills, smart receipt OCR scanning, and uneven split customization.
4. **Groups (`Groups`):**  
   Active household overview (*Co-living Space #402*), roommate roster, and member onboarding.
5. **Profile (`Profile`):**  
   Connected payment methods (TnG eWallet, Bank Account), notification preferences (automated reminder intervals), and demo data reset options.

---

## 🛠️ Technology Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans
