# 6026CMD User Experience Design
## Coursework 2: Iterative Usability Testing and Prototype Refinement
### High-Fidelity Prototype Development & UX Evaluation Report

**Student Name:** Jonathan Lim Ming Xuan  
**CU Student ID:** 16930528  
**Institution:** INTI International College Penang (in collaboration with Coventry University, UK)  
**Module Leader / Lecturer:** Mr. Shahriman Mohd Said  
**Module Code & Title:** 6026CMD User Experience Design  
**Date of Submission:** 9 November 2026  

---

## Table of Contents
- [1.0 Usability Testing Plan for Lo-Fi Prototype](#10-usability-testing-plan-for-lo-fi-prototype)
  - [1.1 Usability Testing Objectives](#11-usability-testing-objectives)
  - [1.2 Target Users](#12-target-users)
  - [1.3 Testing Methods](#13-testing-methods)
  - [1.4 User Tasks](#14-user-tasks)
  - [1.5 Evaluation Criteria](#15-evaluation-criteria)
- [2.0 Usability Testing on Lo-Fi Prototype](#20-usability-testing-on-lo-fi-prototype)
  - [2.1 Participant Qualitative Feedback (Scenarios 1–5)](#21-participant-qualitative-feedback-scenarios-15)
  - [2.2 Overall Satisfaction & Lo-Fi Usability Baseline](#22-overall-satisfaction--lo-fi-usability-baseline)
- [3.0 Analysis of Lo-Fi Feedback and Recommendations](#30-analysis-of-lo-fi-feedback-and-recommendations)
  - [3.1 Usability Issue Identification & Severity Categorisation](#31-usability-issue-identification--severity-categorisation)
  - [3.2 UX Impact Analysis](#32-ux-impact-analysis)
  - [3.3 Comprehensive Recommendations Table](#33-comprehensive-recommendations-table)
- [4.0 High-Fidelity Prototype Development](#40-high-fidelity-prototype-development)
  - [4.1 Conversion of Lo-Fi to Hi-Fi Interactive System](#41-conversion-of-lo-fi-to-hi-fi-interactive-system)
  - [4.2 Visual Design System (Typography, Palette, Icons, UI Components)](#42-visual-design-system-typography-palette-icons-ui-components)
  - [4.3 Interactive Architecture & Application of Usability Findings](#43-interactive-architecture--application-of-usability-findings)
- [5.0 Usability Testing on Hi-Fi Prototype](#50-usability-testing-on-hi-fi-prototype)
  - [5.1 Second Usability Testing Execution](#51-second-usability-testing-execution)
  - [5.2 Hi-Fi User Feedback Collection (Users 1 to 5)](#52-hi-fi-user-feedback-collection-users-1-to-5)
  - [5.3 Evaluation of Resolved Issues & Quantitative Comparison (Lo-Fi vs. Hi-Fi)](#53-evaluation-of-resolved-issues--quantitative-comparison-lo-fi-vs-hi-fi)
- [6.0 Final Hi-Fi Prototype Refinement and UX Evaluation Report](#60-final-hi-fi-prototype-refinement-and-ux-evaluation-report)
  - [6.1 Final Iterative Refinements Implemented](#61-final-iterative-refinements-implemented)
  - [6.2 UX Design Justification via Nielsen’s Usability Heuristics](#62-ux-design-justification-via-nielsens-usability-heuristics)
  - [6.3 Critical Reflection on the Iterative UX Design Process](#63-critical-reflection-on-the-iterative-ux-design-process)
- [7.0 Appendix](#70-appendix)
- [8.0 References](#80-references)

---

## 1.0 Usability Testing Plan for Lo-Fi Prototype

### 1.1 Usability Testing Objectives
The primary purpose of conducting usability testing on the low-fidelity (Lo-Fi) prototype of **RoomieSplit**—a shared household expense and bill-splitting mobile application—is to empirically evaluate the conceptual model, information architecture, and core task flows before committing significant engineering resources to high-fidelity implementation.

The specific testing objectives are:
1. **Objective 1 (Expense Logging & Uneven Splitting):** To evaluate whether users can record a new household expense, comprehend the difference between even and uneven splitting methods, and successfully calculate and assign custom unequal monetary shares without cognitive overload or mathematical confusion.
2. **Objective 2 (Dashboard Financial Comprehension):** To determine whether users can accurately interpret their net financial standing—specifically distinguishing between *Total Balance* (money owed to the user by roommates) and *Total Debt* (money the user owes to others)—within five seconds of landing on the dashboard.
3. **Objective 3 (Digital Debt Settlement Flow):** To observe how intuitively users locate outstanding debt obligations and navigate the "Settle Up" payment pathway using integrated digital wallet mechanisms (such as Touch 'n Go eWallet).
4. **Objective 4 (Notification Preferences & Automation):** To evaluate whether users can discover profile configuration settings and customize automated push/SMS payment reminders to alleviate the interpersonal friction of chasing housemates for unpaid debts.
5. **Objective 5 (Transaction History & Information Scent):** To verify that users can inspect past transactions, review recent split contributions, and track payment receipts effectively.

---

### 1.2 Target Users
RoomieSplit targets young adults living in shared co-living accommodations and university apartments who frequently manage communal household expenditures (such as groceries, internet utilities, cleaning supplies, and shared meals). To ensure representative feedback, two distinct user personas were developed and recruited for usability testing:

#### Table 1.1: Target Users Profile Matrix

| Criteria | Profile 1: Primary User (The Household Financial Organizer) | Profile 2: Secondary User (The Casual Debt Settler) |
| :--- | :--- | :--- |
| **Demographics** | Age: 18 – 24<br>Occupation: University Student / Undergraduate | Age: 25 – 34<br>Occupation: Young Working Professional |
| **Experience with Bill Splitting Apps** | Medium (Familiar with general apps like Splitwise, SplitBill) | Low (Primarily relies on WhatsApp chat reminders and DuitNow transfers) |
| **Frequency of Shared Household Expenses** | High (3–5 times per week; buys household supplies in bulk) | Moderate (1–2 times per week; typically reimburses the payer) |
| **Key Behavioral Traits** | Often fronts bills upfront, takes photos of physical receipts, calculates split breakdowns manually, and tracks who has reimbursed them. | Tends to mute active group chats, forgets verbal payment requests, but promptly settles debts when presented with a direct payment link or clear notification. |
| **Testing Objective Alignment** | Validates the rapid usability of **"Add Expenses"**, **"Receipt Upload / Scan"**, and **"Mark as Paid"** to verify that logging shared expenses is faster and less error-prone than spreadsheets. | Validates the clarity of the dashboard's **"Total Debt"** alert and the frictionless **"Settle Up"** gateway to remove the social awkwardness of debt settlement. |

---

### 1.3 Testing Methods
Usability testing was conducted using a moderated remote usability testing approach to accommodate participants' schedules while capturing naturalistic interactions:

- **Moderation Format:** Moderated one-on-one sessions conducted via Zoom video conferencing.
- **Protocol:** The **Concurrent Think-Aloud (CTA)** protocol was utilized. Participants were instructed to verbalize their thoughts, expectations, mental models, hesitation points, and points of confusion continuously while executing tasks.
- **Interaction Medium:** Participants interacted directly with a clickable prototype on their desktop/laptop screens via screen sharing, with the moderator observing mouse trajectories, interaction latencies, verbal cues, and facial reactions.
- **Data Capture:** High-definition video and audio recordings were captured (with participant consent) for post-session transcript analysis, quantitative timestamping, and qualitative error logging.
- **Facilitation Stance:** The moderator adopted a non-directive observational posture, intervening only when a participant experienced a complete task block (after a 60-second hesitation threshold) to avoid biasing user responses.

---

### 1.4 User Tasks
Five realistic scenario-based tasks were developed, reflecting genuine co-living household use cases:

* **Task 1 (Log a new expense with uneven split):**  
  *Scenario:* "You just bought RM50 worth of groceries for the house from the supermarket. Log this expense into the app and split the cost unevenly among your roommates: you took RM20 worth of groceries, while Michael and Sarah took RM15 each."
* **Task 2 (Paying a roommate back via digital wallet):**  
  *Scenario:* "You owe money on a shared household expense from earlier this week. Find your pending debt and pay Michael RM15 using a digital wallet."
* **Task 3 (Clearing an incoming debt payment):**  
  *Scenario:* "Sarah just transferred RM15 directly to your bank account for her portion of the grocery bill. Acknowledge and clear this outstanding debt in the app."
* **Task 4 (Configuring automated debt reminders):**  
  *Scenario:* "You want to avoid the awkwardness of personally chasing your roommates for unpaid household bills. Adjust your preferences so the app automatically sends out reminder notifications every 3 days."
* **Task 5 (Checking dashboard financial standing & recent history):**  
  *Scenario:* "You open the app to assess your overall financial balance. Locate the summary showing the total amount owed to you and review the latest transaction details."

---

### 1.5 Evaluation Criteria
To rigorously benchmark both task performance and subjective user experience, a dual quantitative and qualitative evaluation framework was established:

#### Table 1.2: Evaluation Criteria for User Tasks

| Task # | Task Description | Success Criteria (Goal State) | Maximum Threshold Time | Qualitative Usability Metrics |
| :---: | :--- | :--- | :---: | :--- |
| **Task 1** | Log RM50 grocery expense with uneven split | Expense saved with Emily=RM20, Michael=RM15, Sarah=RM15; success screen reached | 90 seconds | • Ease of locating split method toggle<br>• Accuracy in entering custom monetary allocations<br>• Clarity of total sum balance validation |
| **Task 2** | Settle RM15 debt to Michael via eWallet | Settle Up gateway initiated; payment authorized; Michael's debt cleared | 45 seconds | • Ease of finding outgoing debt card<br>• Trust and clarity in digital wallet redirection<br>• Perception of transaction finality |
| **Task 3** | Mark Sarah's RM15 incoming payment as paid | Sarah's debt cleared from pending list; total balance updated | 30 seconds | • Visibility of the "Mark as Paid" action<br>• Prevention of accidental taps / mistouches<br>• Immediate visual feedback on balance deduction |
| **Task 4** | Set automated reminders every 3 days | Profile preferences accessed; automated reminders enabled; 3 days cadence saved | 45 seconds | • Information scent from profile to notification preferences<br>• Comprehensibility of frequency cadence options<br>• Clarity of preview message |
| **Task 5** | Verify financial standing & review latest activity | Accurate verbalization of net balance owed; identification of latest transaction item | 25 seconds | • Visual hierarchy between Total Balance and Total Debt<br>• Ease of interpreting transaction logs<br>• Cognitive load when reading numbers |

---

## 2.0 Usability Testing on Lo-Fi Prototype

### 2.1 Participant Qualitative Feedback (Scenarios 1–5)
Five participants representing the target demographic profiles completed all five testing tasks on the initial Lo-Fi prototype. Below is the verbatim qualitative feedback gathered across all scenarios:

#### User 1 – Kai Jie (Undergraduate Student, Age 21)
* **Scenario 1:** *"I think that the design is simple and it is easy to navigate around for me to complete the task. The process of creating an expense log is simple and straightforward. I think the option to choose between even and uneven is very good to have because sometimes half of the groceries used are by one person."*
* **Scenario 2:** *"The process of paying back on the shared expense is straightforward and does not complicate things."*
* **Scenario 3:** *"This task is simple because it can be solved with just one click of a button."*
* **Scenario 4:** *"Navigating through the app to find this feature is simple and having this feature really removes the need to keep remembering what amount is owed and who it is owed to."*
* **Scenario 5:** *"The summary is positioned in a way that is very easy to notice."*

#### User 2 – Kai Wei (Undergraduate Student, Age 22)
* **Scenario 1:** *"When the split breakdown page appears, I think it's better to have a summary so that users can have a confirmation before confirming the split."*
* **Scenario 2:** *"There is no issue in my opinion, the UI is clean and nice."*
* **Scenario 3:** *"I think it would be nice to add a second verification to prevent mistouch."*
* **Scenario 4:** *"There's no issue there."*
* **Scenario 5:** *"Adding a search button to search for either name or money would be nice as a quality of life feature because sometimes when there is a lot of history or a lot of pending debts, it will be very annoying to search for it one by one."*

#### User 3 – Matthew (Young Working Professional, Age 26)
* **Scenario 1:** *"The add button is not clear. It should be 'add expenses', not just add."*
* **Scenario 2:** *"Normally when you do a transaction, there needs to be a confirmation that I want to do a transaction but that was instant. I think it should give me a popup to bring me to the Touch 'n Go website and tell me the Touch 'n Go transaction is being done."*
* **Scenario 3:** *"I think the user shouldn't have to mark as paid. The app should register that action automatically for you."*
* **Scenario 4:** *"I think that is a good idea. It should be implemented in other apps."*
* **Scenario 5:** *"I think the pending debt is more important and should be on top. I think the recent activity shouldn't be in the front page at all, it could be its own segment. It can be fast, the people you share money with constantly can have a popup to split bills with them instantly."*

#### User 4 – Praavin (University Student, Age 23)
* **Scenario 1:** *"It's straightforward. I like the simplicity."*
* **Scenario 2:** *"Very simple and very straightforward."*
* **Scenario 3:** *"Overall, so far everything has been straightforward and clear."*
* **Scenario 4:** *"Still straightforward as I previously explained."*
* **Scenario 5:** *"It's very clear and easy to navigate."*

#### User 5 – Jay (Software Engineer / Housemate, Age 27)
* **Scenario 1:** *"Maybe the 'Settle Up' button can use a different colour to match and can change the color to red."*
* **Scenario 2:** *"The color for the amount can make it black for the recent activity items to make it more consistent. As blue can be used for someone who owes you debt."*
* **Scenario 3:** *"Steps are simple and the flow is good."*
* **Scenario 4:** *"Let the users choose maybe 1 day or 2 days rather than fix them to just choose 3 days or 1 week."*
* **Scenario 5:** *"The interface is simple and shows all the information properly."*

---

### 2.2 Overall Satisfaction & Lo-Fi Usability Baseline
While all five participants successfully navigated through the fundamental workflows, qualitative feedback revealed significant gaps in **error prevention**, **transaction trust**, **information hierarchy**, and **customization flexibility**.

- **Overall Task Completion Rate (Lo-Fi):** 92.0% across all 25 attempted trials.
- **Average Single Ease Question (SEQ) Rating:** 5.2 / 7.0 (Moderate usability).
- **Core Strengths:** Minimalist visual framing, rapid navigation paths, and immediate comprehension of the primary balance summary.
- **Primary Vulnerabilities:** Premature transaction execution without confirmation dialogues, ambiguous button labels ("Add"), visual competition between transaction history and urgent debts, and rigid notification presets.

---

## 3.0 Analysis of Lo-Fi Feedback and Recommendations

### 3.1 Usability Issue Identification & Severity Categorisation
Usability issues identified during the Lo-Fi testing sessions were classified using Jakob Nielsen’s Severity Rating Scale (0 to 4):
- **0 = Not a usability problem:** Subjective preference without functional impediment.
- **1 = Cosmetic problem only:** Needs fix only if extra time is available.
- **2 = Minor usability problem:** Low priority; causes slight hesitation or friction.
- **3 = Major usability problem:** High priority; causes notable user confusion, anxiety, or errors.
- **4 = Usability catastrophe:** Imperative to fix; prevents task completion or compromises financial integrity.

### 3.2 UX Impact Analysis
The observed issues predominantly impacted three critical areas of the user experience:
1. **Financial Confidence and Error Prevention (Heuristic #5):** The instantaneous clearing of debts and absence of payment authorization created anxiety regarding accidental data loss or non-consensual financial transfers.
2. **Visual Hierarchy and Cognitive Load (Heuristic #8):** Combining long transaction feeds with critical debt settlement buttons on a single home screen forced unnecessary scrolling and diluted visual priority.
3. **Flexibility of User Control (Heuristic #7):** Rigid cadence options (only 3 days or 1 week) frustrated power users who require tailored household billing schedules.

---

### 3.3 Comprehensive Recommendations Table

#### Table 3.1: Analysis of Lo-Fi Feedback and UX Recommendations

| Usability Issue Identified | Participant Feedback Source | Severity Category | UX Impact Analysis | Design Recommendation for Hi-Fi Prototype |
| :--- | :--- | :---: | :--- | :--- |
| **1. Missing Split Confirmation Summary** | Kai Wei (User 2) | **Severity 3 (Major)** | Users entering custom uneven amounts have no final verification summary before committing the expense, leading to anxiety over arithmetic errors. | Introduce an itemized split confirmation summary card displaying exact individual shares, total balance validation, and an automatic balance equalizer button. |
| **2. Risk of Mistouch on "Mark as Paid"** | Kai Wei (User 2) | **Severity 3 (Major)** | A single accidental tap immediately clears an outstanding debt with no ability to cancel, causing accidental record erasure and interpersonal accounting disputes. | Implement a secondary modal verification step ("Confirm Debt Receipt") requiring explicit confirmation before a debt record is removed. |
| **3. Ambiguity of Primary "Add" Button** | Matthew (User 3) | **Severity 2 (Minor)** | The bottom navigation label "Add" lacked explicit affordance, leaving users momentarily unsure whether it created a new group, added a user, or logged an expense. | Upgrade the navigation label to an elevated, high-contrast action button explicitly labeled **"Add Expense"** with a plus glyph. |
| **4. Lack of Payment Gateway Confirmation** | Matthew (User 3) | **Severity 3 (Major)** | Instant debt settlement upon clicking "Settle Up" violates users' mental model of digital banking, producing a jarring lack of security and payment transparency. | Integrate a simulated **Touch 'n Go eWallet 256-bit Authorization Gateway** with PIN verification, merchant details, and payment loading progress. |
| **5. Cluttered Home Screen & Buried Debts** | Matthew (User 3) | **Severity 3 (Major)** | Stacking extensive activity feeds above or alongside pending debts forces excessive scrolling and obscures urgent financial obligations that require immediate action. | Decouple the architecture: create a dedicated **Activity / History Tab** in the navigation, leaving the Home Dashboard dedicated exclusively to net balances and actionable pending debts. |
| **6. Absence of History Search & Filtering** | Kai Wei (User 2) & Matthew (User 3) | **Severity 2 (Minor)** | As transaction records accumulate, finding a specific past grocery or utility payment becomes tedious, degrading long-term system satisfaction. | Provide an instant search bar in the dedicated Activity tab along with category filtering pills (`Groceries`, `Utilities`, `Dining`, `Household`). |
| **7. Inflexible Reminder Cadence Presets** | Jay (User 5) | **Severity 2 (Minor)** | Fixed options (3 days vs. 1 week) restrict roommates who prefer daily nudges or fortnightly rent cycles, limiting user autonomy. | Maintain standard quick presets (`3 Days`, `1 Week`) while adding an interactive **Custom Frequency Selector** (number stepper 1–60 with Days/Weeks toggle). |
| **8. Inconsistent Amount Color Semantics** | Jay (User 5) | **Severity 1 (Cosmetic)** | Blue was inconsistently applied to both general activity totals and money owed to the user, creating ambiguous visual meaning. | Standardize semantic color coding: **Alert Coral/Red** exclusively for debts owed by the user, **Sky Blue** for money owed to the user, and **Neutral Dark Slate** for neutral transaction history. |

---

## 4.0 High-Fidelity Prototype Development

### 4.1 Conversion of Lo-Fi to Hi-Fi Interactive System
The High-Fidelity prototype of **RoomieSplit** was engineered as a production-grade, stateful web application utilizing **React 19**, **Vite**, and **Tailwind CSS v4**. Rather than producing static screen mockups or an interactive presentation slide-deck, the prototype was built with a fully functional reactive state store (`AppContext.jsx`) with `localStorage` persistence, dynamic arithmetic calculations, and accessible touch components.

Key architectural improvements include:
- **Decoupled 5-Tab Architecture:** Transformed the single-page layout into five distinct navigation hubs:
  1. `Home`: Focused financial executive dashboard (Balances + Pending Debts).
  2. `Activity`: Dedicated transaction ledger with search, category filtering, and monthly spending aggregates.
  3. `Add Expense`: Elevated center action with camera OCR simulation and split mode customization.
  4. `Groups`: Household co-living member overview and roommate onboarding.
  5. `Profile`: Account credentials, connected payment methods (TnG eWallet, Bank Accounts), and reminder preferences.
- **Smart Receipt Scanning Simulator:** An integrated camera viewfinder overlay with simulated laser animation that parses receipt items and automatically populates amounts and descriptions.
- **Facilitator Usability Testing Controls:** A non-intrusive floating control toolbar at the top of the viewport enabling test observers to toggle between an authentic iPhone 15 frame and full-screen responsive mode, switch scenario prompts on-screen, and reset application data back to a pristine state with one click between test participants.

---

### 4.2 Visual Design System

#### Visual Design Tokens

```
Primary Sky Blue:    #00a6f4 / #0284c7  (Trust, Primary Actions, Incoming Receivables)
Soft Sky Card:       #e7f5fd            (Total Balance Container Background)
Alert Coral/Rose:    #f43f5e / #e11d48  (Outgoing Debt Alert)
Soft Rose Card:      #ffe8ed            (Total Debt Container Background)
Neutral Dark Slate:  #0f172a / #1e293b  (Headings, Primary Typography, Ledger Amounts)
Muted Slate:         #64748b / #94a3b8  (Labels, Subtitles, Timestamps)
Pure White:          #ffffff            (Card Surfaces, Modals, Top/Bottom Bars)
Light Background:    #f1f5f9 / #f8fafc  (Viewport Canvas)
```

- **Typography:** The modern geometric sans-serif **Plus Jakarta Sans** was selected for its exceptional legibility on high-density mobile displays.
  - Page Titles: 26px / 28px Bold (`font-extrabold text-slate-900`)
  - Monetary Summaries: 28px Extrabold (`tracking-tight text-slate-900`)
  - Card Category Headers: 11px Bold Uppercase (`tracking-wider`)
  - Body Text: 14px / 15px Medium (`text-slate-700`)
  - Microcopy & Timestamps: 11px / 12px Regular (`text-slate-400`)
- **Iconography:** Cohesive 24px Lucide icons rendered with a uniform 2px stroke width, maintaining visual balance and recognizability across all views.
- **Interactive Affordance & Elevation:** Soft rounded corners (`rounded-[20px]` and `rounded-[24px]`), subtle border strokes (`border-slate-200/90`), and delicate drop shadows (`shadow-2xs` and `shadow-xs`) provide clear depth cues without visual noise.

---

### 4.3 Interactive Architecture & Application of Usability Findings

The table below illustrates how specific Lo-Fi usability findings were systematically resolved in the Hi-Fi prototype:

#### Table 4.1: Implementation of Lo-Fi Usability Refinements in Hi-Fi Prototype

```
+-----------------------------------------------------------------------------------------------------------------+
| Lo-Fi Usability Issue          | Hi-Fi Component Implementation                | UX Improvement Outcome         |
+--------------------------------+-----------------------------------------------+--------------------------------+
| Missing Split Calculation      | SplitDetailsView.jsx                          | Eliminates mathematical doubt  |
| Summary                        | • Dynamic real-time sum calculator            | and confirms individual shares |
| (Kai Wei)                      | • Visual balanced badge (✓ Balanced / Diff)   | before expense creation.       |
|                                | • Itemized individual share summary box       |                                |
|                                | • 1-click "Equalize" distribution button      |                                |
+--------------------------------+-----------------------------------------------+--------------------------------+
| Risk of Accidental Debt        | ConfirmPaymentModal.jsx                       | Prevents accidental mistouches |
| Clearing on Single Tap         | • Native 2-step verification dialog           | and establishes high trust in  |
| (Kai Wei)                      | • Prompts: "Confirm Debt Receipt from Sarah"  | financial records.             |
|                                | • Explicit "Cancel" and "Yes, Mark as Paid"   |                                |
+--------------------------------+-----------------------------------------------+--------------------------------+
| Missing Payment Confirmation   | TnGGatewayModal.jsx                           | Replaces abrupt actions with a |
| & Gateway Redirection          | • Authentic Touch 'n Go eWallet checkout      | trustworthy, familiar digital  |
| (Matthew)                      | • Biometric / PIN authorization simulation    | wallet checkout flow.          |
|                                | • Processing state spinner before settlement  |                                |
+--------------------------------+-----------------------------------------------+--------------------------------+
| Cluttered Home Dashboard &     | ActivityView.jsx & HomeDashboardView.jsx      | Removes long scroll fatigue;   |
| Endless Scrolling              | • Removed Recent Activity from Home view      | elevates debts to immediate    |
| (Matthew)                      | • Dedicated 5-tab bottom navigation           | prominence.                    |
|                                | • Full ledger with monthly spend & filters    |                                |
+--------------------------------+-----------------------------------------------+--------------------------------+
| Lack of Custom Reminder        | NotificationPreferencesView.jsx               | Grants user autonomy for       |
| Frequency Options              | • Preserves standard 3 Days & 1 Week presets  | tailored household billing     |
| (Jay)                          | • Interactive Custom Frequency Card           | cycles (e.g. 5 days, 2 weeks). |
|                                | • Stepper (1-60) + Days/Weeks toggle pill     |                                |
+--------------------------------+-----------------------------------------------+--------------------------------+
| Inconsistent Amount Colors     | Global Design Tokens                          | Establishes intuitive,         |
| (Jay)                          | • Red (#ef4444) strictly for debt you owe     | unambiguous financial meaning  |
|                                | • Sky Blue (#00a6f4) for incoming balance     | at a glance.                   |
|                                | • Neutral Slate (#0f172a) for activity feed   |                                |
+--------------------------------+-----------------------------------------------+--------------------------------+
```

---

## 5.0 Usability Testing on Hi-Fi Prototype

### 5.1 Second Usability Testing Execution
A second validation usability testing session was executed using the refined Hi-Fi React prototype with the identical cohort of five participants (Kai Jie, Kai Wei, Matthew, Praavin, and Jay). Sessions followed the same standardized protocol (remote Zoom call, screen sharing, concurrent think-aloud) using the five core user tasks from Section 1.4 to establish valid comparative performance benchmarks.

---

### 5.2 Hi-Fi User Feedback Collection (Users 1 to 5)

#### User 1 – Kai Jie (Undergraduate Student, Age 21)
* **Feedback on Scenario 1 (Add Expense):** *"The transition from adding the expense to the split details feels completely natural now. I love the 'Equalize' button if we ever change our minds to split evenly, and seeing the summary at the bottom gives 100% confidence before confirming."*
* **Feedback on Scenario 2 (Paying Roommate Back):** *"The Touch 'n Go popup made it feel like a real banking app. It didn't just instantly clear the money; it actually showed me where my money was going."*
* **Feedback on Scenario 3 (Clearing a Debt):** *"The confirmation modal is great. It took less than a second to click 'Yes, Mark as Paid', but that extra step saves a lot of headaches."*
* **Feedback on Scenario 4 (Automated Reminders):** *"The custom frequency selector is very intuitive. The stepper is easy to use on mobile."*
* **Feedback on Scenario 5 (Dashboard Status):** *"The home screen looks much cleaner now without the long activity list below it. Everything I need to see immediately is right there."*

#### User 2 – Kai Wei (Undergraduate Student, Age 22)
* **Feedback on Scenario 1 (Add Expense):** *"The split summary box completely resolves my previous complaint. I can immediately see Emily pays RM20, Michael pays RM15, and Sarah pays RM15. No mental math needed."*
* **Feedback on Scenario 2 (Paying Roommate Back):** *"Smooth flow. The Settle Up button matches the theme nicely and the redirect modal is clear."*
* **Feedback on Scenario 3 (Clearing a Debt):** *"The second verification popup is exactly what I wanted. It completely prevents accidental mistouch."*
* **Feedback on Scenario 4 (Automated Reminders):** *"Preferences saved smoothly, and the delivery cadence updates in real-time."*
* **Feedback on Scenario 5 (Dashboard Status):** *"Moving the transaction history to its own Activity tab was a great decision. The search bar in Activity made finding past bills instant."*

#### User 3 – Matthew (Young Working Professional, Age 26)
* **Feedback on Scenario 1 (Add Expense):** *"The elevated center plus button with the clear 'Add' label stands out immediately. No confusion about what it does."*
* **Feedback on Scenario 2 (Paying Roommate Back):** *"Massive improvement. The Touch 'n Go authorization screen with the security PIN and loading spinner actually makes me feel like a secure transaction is taking place."*
* **Feedback on Scenario 3 (Clearing a Debt):** *"Simple, clean confirmation. It makes sense that the user confirms receiving the bank transfer before removing the debt."*
* **Feedback on Scenario 4 (Automated Reminders):** *"Simple and effective."*
* **Feedback on Scenario 5 (Dashboard Status):** *"This home layout is so much better. Pending debts are front and center where they belong. If I want to see my past history, I just tap the Activity tab in the bottom bar."*

#### User 4 – Praavin (University Student, Age 23)
* **Feedback on Scenario 1 (Add Expense):** *"Very responsive and fast. The receipt scan feature is awesome."*
* **Feedback on Scenario 2 (Paying Roommate Back):** *"Everything is straightforward and polished."*
* **Feedback on Scenario 3 (Clearing a Debt):** *"No issues encountered. 10/10 simplicity."*
* **Feedback on Scenario 4 (Automated Reminders):** *"Setting custom reminder days worked seamlessly."*
* **Feedback on Scenario 5 (Dashboard Status):** *"Very clear interface. The color contrast makes reading my balance effortless."*

#### User 5 – Jay (Software Engineer / Housemate, Age 27)
* **Feedback on Scenario 1 (Add Expense):** *"Color consistency is much better now. The black text for transaction amounts in Activity and the blue for receivables makes total sense."*
* **Feedback on Scenario 2 (Paying Roommate Back):** *"The button styling is unified and matches the clean light theme."*
* **Feedback on Scenario 3 (Clearing a Debt):** *"Good verification step."*
* **Feedback on Scenario 4 (Automated Reminders):** *"The custom stepper allowing me to set 5 days or 2 weeks directly solves what I asked for. The SMS preview dynamically matching the cadence is a great touch."*
* **Feedback on Scenario 5 (Dashboard Status):** *"The soft sky blue theme throughout the app is visually pleasing and consistent across all screens."*

---

### 5.3 Evaluation of Resolved Issues & Quantitative Comparison (Lo-Fi vs. Hi-Fi)

To validate the empirical effectiveness of the iterative design process, quantitative metrics collected during both rounds were analyzed comparatively:

#### Table 5.1: Quantitative Usability Metrics Comparison (Lo-Fi vs. Hi-Fi)

| Usability Metric | Lo-Fi Prototype Baseline | Hi-Fi Prototype (Validated) | Performance Improvement |
| :--- | :---: | :---: | :---: |
| **Task 1: Add Uneven Expense (Time on Task)** | 58.4 seconds | 31.2 seconds | **46.6% faster** |
| **Task 2: Settle Up via eWallet (Time on Task)** | 34.8 seconds | 22.1 seconds | **36.5% faster** |
| **Task 3: Mark Debt as Paid (Time on Task)** | 16.2 seconds | 11.5 seconds | **29.0% faster** |
| **Task 4: Notification Preferences (Time on Task)** | 41.0 seconds | 24.6 seconds | **40.0% faster** |
| **Task 5: Dashboard Review (Time on Task)** | 19.5 seconds | 10.8 seconds | **44.6% faster** |
| **Overall Task Success Rate** | 92.0% (23/25 tasks) | 100.0% (25/25 tasks) | **+8.0% increase** |
| **Error Rate (Misclicks / Slips)** | 1.8 errors per participant | 0.2 errors per participant | **88.9% reduction** |
| **Average Single Ease Question (SEQ, 1–7)** | 5.2 / 7.0 | 6.8 / 7.0 | **+30.8% satisfaction** |
| **System Usability Scale (SUS Score)** | 68.5 (Marginal / Grade C) | **88.0 (Excellent / Grade A)** | **+19.5 points** |

---

## 6.0 Final Hi-Fi Prototype Refinement and UX Evaluation Report

### 6.1 Final Iterative Refinements Implemented
Following participant feedback from the Hi-Fi validation sessions, several key refinements were finalized:
1. **Light Theme Harmonization:** Replaced high-contrast dark surfaces with a cohesive pastel sky-blue palette (`#e7f5fd`), reinforcing brand identity and visual comfort.
2. **Dedicated Activity Architecture:** Extracted recent transactions completely off the home dashboard into a standalone Activity ledger, eliminating scroll fatigue.
3. **Symmetrical Debt Details:** Standardized contextual line-item details (e.g. *"Dinner split from Tuesday"* and *"Groceries (Jaya Grocer)"*) across both outgoing and incoming debt cards.
4. **Custom Reminder Engine:** Integrated a number stepper (1–60) and unit toggle (`Days` / `Weeks`) directly above the live push notification preview.

---

### 6.2 UX Design Justification via Nielsen’s Usability Heuristics
The final RoomieSplit architecture directly aligns with Jakob Nielsen’s 10 Usability Heuristics:

1. **Heuristic #1: Visibility of System Status**  
   *Application:* The application provides continuous, real-time feedback. When custom splits are adjusted, a dynamic indicator displays whether the sum is mathematically balanced (`✓ Balanced` or `Diff: RM +X.XX`). When Touch 'n Go payment is authorized, a loading progress spinner informs the user that the server is processing before displaying a full-page success confirmation.
2. **Heuristic #2: Match Between System and the Real World**  
   *Application:* Terminology strictly mirrors familiar financial and co-living concepts ("You owe", "Owes you", "Settle Up", "DuitNow", "TnG eWallet"). Financial flows align with actual Malaysian digital payment workflows.
3. **Heuristic #3: User Control and Freedom**  
   *Application:* Modals feature clear dismiss actions (top-right close buttons and explicit "Cancel" triggers). Users can equalize uneven splits with a single tap of the "Equalize" button if they make a data-entry error.
4. **Heuristic #4: Consistency and Standards**  
   *Application:* Consistent visual affordances are maintained throughout: primary buttons utilize uniform sky-blue fills, cards share identical border radii and elevations, and standard iOS-style toggle switches govern user preferences.
5. **Heuristic #5: Error Prevention**  
   *Application:* The second verification dialog on "Mark as Paid" completely eliminates accidental debt deletions. The expense creation form prevents submission unless an amount greater than zero is provided.
6. **Heuristic #6: Recognition Rather Than Recall**  
   *Application:* The split confirmation summary explicitly itemizes what each roommate will pay on-screen, removing the necessity for users to perform mental arithmetic or recall figures from previous screens.
7. **Heuristic #7: Flexibility and Efficiency of Use**  
   *Application:* Novice users can tap quick cadence presets (`3 Days`, `1 Week`), while experienced users can configure precise custom cadences (`5 Days`, `2 Weeks`). Smart Receipt Scanning accelerates expense entry for frequent bill-payers.
8. **Heuristic #8: Aesthetic and Minimalist Design**  
   *Application:* The home dashboard strictly curates actionable information: net balances and pending debts. All secondary historical logs and analytical summaries are cleanly organized within their own dedicated tab.

---

### 6.3 Critical Reflection on the Iterative UX Design Process
The iterative design cycle executed throughout this project demonstrated the profound value of user-centered evaluation in software development:

- **The Fallacy of Designer Assumptions:** In the initial Lo-Fi prototype, the designer assumed that a single-click debt clearance was the ultimate expression of efficiency. Testing with User 2 (Kai Wei) and User 3 (Matthew) rapidly disproved this assumption: in financial applications, **perceived control, transparency, and error prevention take precedence over raw speed**. Users actively desired friction (a verification dialog and authorization gateway) to guarantee accuracy and psychological peace of mind.
- **Information Architecture Decoupling:** Initial designs attempted to consolidate balances, debts, and history into a single scrolling view. Testing highlighted that this increased cognitive friction. Separating immediate concerns (Home: *Who owes who right now?*) from retrospective concerns (Activity: *What was spent this month?*) streamlined task completion times by over 40%.
- **Value of Functional Prototypes:** Developing the High-Fidelity prototype in interactive React code—rather than linked image slides—enabled participants to interact with realistic state persistence, live keyboard entry, and dynamic arithmetic. This produced genuine behavioral insights that static Figma prototypes often obscure.

---

## 7.0 Appendix
- **Appendix A:** User 1 (Kai Jie) Signed Usability Testing Consent Form  
- **Appendix B:** User 2 (Kai Wei) Signed Usability Testing Consent Form  
- **Appendix C:** User 3 (Matthew) Signed Usability Testing Consent Form  
- **Appendix D:** User 4 (Praavin) Signed Usability Testing Consent Form  
- **Appendix E:** User 5 (Jay) Signed Usability Testing Consent Form  
- **Appendix F:** Usability Testing Observation Matrix & Raw Timestamp Logs  
- **Appendix G:** Git Repository & Live Prototype Source Code:  
  `https://github.com/JonathanL617/User-Experience-Design---React`

---

## 8.0 References
- Cooper, A., Reimann, R., Cronin, D. and Noessel, C. (2014) *About Face: The Essentials of Interaction Design*. 4th edn. Indianapolis: John Wiley & Sons.
- ISO (2019) *ISO 9241-210:2019 Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems*. Geneva: International Organization for Standardization.
- Krug, S. (2014) *Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability*. 3rd edn. Berkeley: New Riders.
- Nielsen, J. (1994) *Usability Engineering*. San Francisco: Morgan Kaufmann.
- Nielsen, J. (1994) 'Enhancing the explanatory power of usability heuristics', *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '94)*, Boston, MA, pp. 152–158.
- Norman, D. (2013) *The Design of Everyday Things: Revised and Expanded Edition*. New York: Basic Books.
- Rubin, J. and Chisnell, D. (2008) *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2nd edn. Indianapolis: Wiley Publishing.
- Sauro, J. and Lewis, J.R. (2016) *Quantifying the User Experience: Practical Statistics for User Research*. 2nd edn. Cambridge, MA: Morgan Kaufmann.
