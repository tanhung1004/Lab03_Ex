# Lab 3 — Exercise 2: Interactive Scientist & Pioneer Directory

## 1. Project Overview

**Objective:** Transform the static `smartPeople` dataset from Lab 2 into an interactive React 19 directory using derived state, stable IDs, and accessible controls.

**Technology Stack:** React 19, TypeScript, Vite, CSS, React DevTools.

**Additional Requirement:** Include a sample record for Nguyen Tan Hung with IQ 121 and record a verification video under 60 seconds.

## 2. Task Decomposition

### Task 2.1 — Normalize Dataset & Stable IDs

- [ ] Set up the React 19 + TypeScript project.
- [ ] Define a typed Scientist data model.
- [ ] Normalize the original six scientists.
- [ ] Assign stable unique IDs.
- [ ] Add Nguyen Tan Hung with sample IQ 121.
- [ ] Render the initial directory using `key={person.id}`.
- [ ] Verify that the project builds successfully.

**Commit:** `feat(ex2): normalize smartPeople schema with stable IDs`

### Task 2.2 — Search, IQ Filter & Sorting

- [ ] Implement case-insensitive name search.
- [ ] Implement the numeric Min-IQ filter using `valueAsNumber`.
- [ ] Implement sorting by descending IQ or ascending Age.
- [ ] Use ES2023 `.toSorted()` without mutating state.
- [ ] Calculate visible results during rendering.
- [ ] Do not use `useEffect` for filtering or sorting.
- [ ] Associate inputs with labels using `useId()` and `htmlFor`.

**Commit:** `feat(ex2): add search IQ filter and toSorted`

### Task 2.3 — Delete, Reset & Live Status

- [ ] Implement immutable deletion using stable IDs.
- [ ] Provide a Reset button restoring the initial dataset.
- [ ] Keep list keys stable after deleting a person.
- [ ] Show filtered result counts in `<output>`.
- [ ] Add `role="status"` and `aria-live="polite"`.
- [ ] Ensure controls support keyboard interaction.

**Commit:** `feat(ex2): add delete reset and live status`

## 3. Final Verification — Checkpoint 2

- [ ] The directory includes all six original scientists and Nguyen Tan Hung.
- [ ] Search ignores letter casing.
- [ ] IQ filtering is numeric.
- [ ] Sorting uses `.toSorted()`.
- [ ] Filtering/sorting does not use `useEffect`.
- [ ] All form inputs have associated labels.
- [ ] Deleting Johann Goethe preserves the remaining stable keys.
- [ ] Reset restores the original dataset.
- [ ] React DevTools Profiler confirms the expected render behavior when typing one character.
- [ ] `npm run build` completes successfully.
- [ ] No unexpected console errors.

## 4. Video Evidence

Record a video shorter than 60 seconds showing:

1. Initial directory and personal sample record.
2. Search interaction.
3. React DevTools Profiler inspection.
4. IQ filtering and sorting.
5. Delete and Reset behavior.

## 5. Submission

- GitHub repository: https://github.com/tanhung1004/Lab03_Ex
- React application source code
- Task Decomposition
- React DevTools verification video under 60 seconds
- Three mandatory feature milestone commits

**Status:** Task 2.1 in progress.