# Nablasol Front-End Developer Test

## Overview

This repository contains my submission for the Nablasol Front-End Developer Test. It includes two independent React applications, each replicating a multi-step form wizard from the provided design references.

| Task | Description | Steps Implemented |
|------|-------------|--------------------|
| **Task 1** | Project creation wizard | 4 of 6 steps |
| **Task 2** | Account creation wizard | 2 of 3 steps |

Both applications are built as separate Vite + React projects, each with its own dependencies, so they can be run, tested, and deployed independently.

---

## Tech Stack

| Layer | Choice | Reasoning |
|---|---|---|
| Framework | React (via Vite) | Fast setup, no boilerplate needed for a single-flow wizard with no routing requirements |
| Language | JavaScript (ES6+) | Matches the brief's requirement of "a JavaScript framework" |
| Styling | Tailwind CSS | Utility-first approach for quickly matching the provided pixel designs |
| State Management | React `useState` | Sufficient for a form of this scale; avoids over-engineering with external libraries |
| Persistence | Browser `localStorage` | Explicitly required in the brief — form data survives step navigation and page refresh |
| Validation | Custom per-step functions | Keeps logic transparent and dependency-free |
| Deployment | Vercel | Zero-config deployment for Vite projects |

---

## Project Structure

```
Nablasol_tasks/
├── task1/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Task1.jsx           # container — state, navigation, validation
│   │   │   ├── StepDots.jsx        # Progress indicator
│   │   │   └── steps/
│   │   │       ├── CreateProjectStep.jsx
│   │   │       ├── ProjectTypeStep.jsx
│   │   │       ├── SelectViewStep.jsx
│   │   │       └── TasksStep.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
├── task2/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Task2.jsx           # container — state, navigation, validation
│   │   │   ├── StepperHeader.jsx   # Numbered step header
│   │   │   └── steps/
│   │   │       ├── ProfileStep.jsx
│   │   │       └── BusinessInfoStep.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

## Task 1 — Project Creation Wizard

Replicates a 6-step "Create a project" flow; the following 4 consecutive steps are implemented:

1. **Create a project** — project name, client selection (with "New Client" option), date range, optional notes
2. **Project type** — Time & Materials / Fixed Fee / Non-Billable tabs, hourly rate input, budget reset and alert threshold options
3. **Select a view** — List or Board layout selection
4. **Tasks** — add, complete, and remove tasks from a checklist

### Run locally
```bash
cd task1
npm install
npm run dev
```
The app runs at `http://localhost:5173` by default.

### Key behavior
- All form data is held in a single state object in `Task1.jsx` and synced to `localStorage` on every change, so progress is not lost on refresh.
- Step 1 requires a project name and a valid date range (end date cannot precede start date) before "Next" is enabled.
- Step 4 changes the final action button to "Finish," which logs the complete form data to the console.
- A dot-based progress indicator at the bottom of the card reflects the current step.

### Known simplifications
- Icons for "List" and "Board" view options are represented with simple placeholder glyphs rather than custom iconography.
- The "Who can manage projects" and "Team" steps from the original 6-step design were not required per the brief and are not implemented.

---

## Task 2 — Account Creation Wizard

Replicates the first 2 of a 3-step "Create New Account" flow:

1. **Your Profile** — first name, last name, email, phone number, password, and confirm password
2. **Business Information** — brand name, brand type, address fields, tax ID, and a documents/COI section

### Run locally
```bash
cd task2
npm install
npm run dev
```
The app runs at `http://localhost:5173` by default (or the next available port if Task 1 is already running).

### Key behavior
- Form data persists across steps and page refreshes via `localStorage`, same as Task 1.
- Step 1 validates required fields, email format, and that both password fields match before allowing progress.
- Step 2 validates that all required business fields are filled in.
- A numbered stepper header ("1 Your Profile — 2 Business Information — 3 Additional Users") reflects overall progress, including the unimplemented third step, for visual context.

### Known simplifications
- The "Documents" and "COI PDF Upload" sections are presented visually to match the design (status icons, action arrows) but are not wired to real signing or file-upload functionality, as no backend was specified in the brief.
- The third step, "Additional Users," is shown in the stepper for context but was not required to be built.

---

## Responsiveness

Both wizards use responsive Tailwind classes (form fields stack to a single column on smaller screens) and were tested by resizing the browser window down to mobile widths.

---

## Deployment

Each project is deployed independently:
- **Task 1:** https://nablasol-tasks-nine.vercel.app/
- **Task 2:** https://nablasol-tasks-chci.vercel.app/

To deploy either project to Vercel:
1. Push the project folder to a GitHub repository (or connect the monorepo and set the correct root directory in Vercel's project settings).
2. In Vercel, import the repository and set the **Root Directory** to `task1` or `task2` as applicable.
3. Vercel auto-detects the Vite build settings (`npm run build`, output directory `dist`).
4. Deploy.

---

## Notes for the Reviewer

- Task 1 completes 4 of the 6 requested steps, and Task 2 completes 2 of the 3 requested steps, per the brief's instructions.
- Both apps were built independently (separate `package.json`, separate dev servers) since the two designs represent visually and functionally distinct flows.
- Commit history is organized by feature/component to make the build process easy to follow.