# Lab 3 — Exercise 2: Interactive Scientist & Pioneer Directory

## 1. Project Overview

**Objective:** Develop an interactive Scientist & Pioneer Directory using React 19, TypeScript, stable IDs, derived state, accessible controls, and React DevTools.

**Technology Stack:**
- React 19
- TypeScript
- Vite
- CSS3
- React Developer Tools
- Git & GitHub

**Inherited Concept:** Lab 2 — Scientist & Pioneer Directory.

**Additional Requirement:** Include Nguyen Tan Hung with a sample IQ of 121 and record a verification video shorter than 60 seconds.

## 2. Task Decomposition

### Task 2.1 — Project Setup & Dataset Normalization

**Status: Completed**

- [x] Initialize React 19 + Vite + TypeScript.
- [x] Create `ScientistDirectory.tsx`.
- [x] Create `smartPeople.ts`.
- [x] Define a TypeScript `Scientist` interface/type.
- [x] Normalize the six original scientist records.
- [x] Assign unique, stable IDs.
- [x] Add Nguyen Tan Hung with sample IQ 121.
- [x] Render the initial directory using `key={person.id}`.

**Expected Result:** Seven records are available in the directory, with stable IDs.

**Commit:**

`feat(ex2): normalize smartPeople schema with stable IDs`

### Task 2.2 — Search, IQ Filter & Sorting

**Status: Completed**

- [x] Implement case-insensitive name search.
- [x] Implement Minimum IQ filtering.
- [x] Read numeric input using `valueAsNumber`.
- [x] Implement IQ descending sorting.
- [x] Implement Age ascending sorting.
- [x] Use ES2023 `.toSorted()` without mutating original data.
- [x] Calculate visible results using derived state.
- [x] Avoid `useEffect` for filtering and sorting.
- [x] Use `useId()` with accessible input labels.

**Expected Result:** The directory updates immediately when search, IQ, or sort values change.

**Commit:**

`feat(ex2): add search IQ filter and toSorted`

### Task 2.3 — Delete, Reset & Live Status

**Status: Completed**

- [x] Implement immutable deletion using stable IDs.
- [x] Implement Reset to restore the original seven records.
- [x] Reset search, IQ, and sorting controls.
- [x] Display the number of visible records.
- [x] Implement `<output>` with `role="status"` and `aria-live="polite"`.
- [x] Restore focus to Search after deleting a record.
- [x] Preserve stable React keys.

**Expected Result:** Records can be deleted and restored without corrupting the original dataset or derived results.

**Commit:**

`feat(ex2): add delete reset and live status`

### Task 2.4 — UI Styling & Responsive Design

**Status: Implemented**

- [x] Replace the default Vite styling.
- [x] Implement a dark glass dashboard.
- [x] Add the user-selected PUBG background image.
- [x] Create responsive scientist cards using CSS Grid.
- [x] Style Search, Minimum IQ, and Sort controls.
- [x] Style IQ badges, Delete buttons, and Reset button.
- [x] Add responsive rules for mobile devices.
- [x] Preserve existing React component functionality.

**Expected Result:** A readable and responsive scientist dashboard with a dark gaming-inspired visual theme.

**Commit:**

`style(ex2): add PUBG background and dark glass dashboard`

## 3. Checkpoint 2 — Final Verification

### Functional Testing

| Test | Expected Result |
|---|---|
| Initial directory | Display 7 scientists |
| Search `hun` | Display Nguyen Tan Hung |
| Search `EIN` | Display Albert Einstein |
| Minimum IQ = 200 | Display 3 records |
| Sort by IQ | Highest IQ appears first |
| Sort by Age | Youngest record appears first |
| Delete Johann Goethe | Directory decreases from 7 to 6 records |
| Reset Directory | Restore all 7 records |
| Live Status | Count updates when visible results change |

### React Architecture Verification

- [x] Use stable IDs for list keys.
- [x] Derive filtered and sorted records during rendering.
- [x] Do not store filtered results as separate state.
- [x] Do not use `useEffect` to synchronize filters.
- [x] Preserve immutable data updates.
- [x] Use accessible form labels and native controls.

### React DevTools Profiler

**Verification procedure:**

1. Open React Developer Tools → Profiler.
2. Reset the directory.
3. Start profiling.
4. Enter one character into Search.
5. Stop profiling.
6. Inspect the corresponding React render commit.
7. Verify that no unrelated or unnecessary commits are recorded.

**Evidence:** React DevTools screen recording.

**Note:** The exact commit count and render duration must be confirmed from the recorded Profiler results.

## 4. Video Verification

**Requirement:** Record one video shorter than 60 seconds.

The recording demonstrates:

1. Initial directory containing seven records.
2. Nguyen Tan Hung — sample IQ 121.
3. React DevTools Profiler during a Search update.
4. Search and Minimum IQ filtering.
5. Sorting by Age or IQ.
6. Delete a scientist.
7. Reset the directory.

**Video Filename:** `24520612_Lab3_Ex2_Verification.mp4`

## 5. Final Build & Git Verification

Run:

```powershell
npm run build
```

Verify that React, TypeScript, and Vite compile successfully.

Then verify repository history:

```powershell
git status
git log --oneline -8
```

The application should have no unexpected console errors.

## 6. Deliverables

- `src/data/smartPeople.ts`
- `src/components/ScientistDirectory.tsx`
- `src/App.tsx`
- `src/index.css`
- `TASK_DECOMPOSITION.md`
- GitHub repository
- React DevTools verification video (under 60 seconds)

**Repository:** https://github.com/tanhung1004/Lab03_Ex

**Final Status:** Implementation completed. Final build and recorded Profiler evidence to be confirmed before submission.