# Lab 3 — Exercise 3: KRAFTON PUBG Vietnam Series Live Telemetry

## 1. Project Overview

**Objective:** Build a fault-tolerant PUBG telemetry dashboard using React, TypeScript, a four-state machine, simulated packet loss, and AbortController.

**Technology:** React 19, TypeScript, Vite, CSS, Chrome DevTools, Git.

**Squads:**
- Cerberus Esports
- The Expendables
- Genius Esports

## 2. Task Decomposition

### Task 3.1 — Project Setup & PUBG Dataset

- [x] Initialize the React + TypeScript + Vite project.
- [x] Define the typed PUBG squad dataset.
- [x] Add three PUBG Vietnam squads.
- [x] Display the initial squad information.
- [x] Verify the initial build.

### Task 3.2 — Four-State Machine

- [x] Implement IDLE, LOADING, SUCCESS, and ERROR states.
- [x] Implement squad selection.
- [x] Trigger telemetry requests when the selected squad changes.
- [x] Render telemetry results according to the current state.

### Task 3.3 — Packet Loss & AbortController

- [x] Implement simulated 35% packet loss.
- [x] Fetch simulated telemetry using an asynchronous service.
- [x] Use AbortController to cancel obsolete requests.
- [x] Prevent stale responses from overwriting current telemetry.
- [x] Ignore aborted requests without displaying false errors.

### Task 3.4 — Skeleton, Error, Retry & UI

- [x] Implement the 220px Blue Zone Skeleton.
- [x] Add animated skeleton placeholders.
- [x] Reserve stable layout space to reduce layout shifts.
- [x] Show a connection error using role="alert".
- [x] Implement Reconnect Satellite retry functionality.
- [x] Support retry without reloading the webpage.
- [x] Style the PUBG telemetry dashboard.
- [x] Add responsive layouts.

### Task 3.5 — Chrome DevTools Verification

- [x] Test telemetry under Slow 3G.
- [x] Observe loading and final telemetry states.
- [x] Test rapid squad switching: Cerberus Esports → The Expendables → Genius Esports.
- [x] Verify the latest selected squad remains authoritative.
- [x] Test the simulated packet-loss error.
- [x] Test Reconnect Satellite.
- [x] Record a verification video.
- [ ] Record the measured CLS value in the verification notes.

**Verification video:** `Lab3_Exercise3_DevTools_Checkpoint3.mp4`

**Measured CLS:** _Enter actual result if measured._

**Network observations:** _Enter actual results, including whether canceled requests were visible._

### Task 3.6 — Final Documentation & Git Verification

- [x] Complete the Task Decomposition.
- [ ] Run the final production build.
- [ ] Verify the Git working tree.
- [ ] Push final documentation to GitHub.
- [ ] Confirm submission links.

## 3. Deliverables

- React + TypeScript PUBG telemetry dashboard
- Typed dataset for three PUBG squads
- Four-state telemetry model
- Simulated packet loss (35%)
- AbortController-based cancellation
- 220px Blue Zone Skeleton
- Accessible error notification and retry button
- Chrome DevTools verification video
- Task Decomposition and Git history

## 4. Repository

https://github.com/tanhung1004/Lab03_Ex

**Status:** Implementation completed; final Git and submission verification pending.