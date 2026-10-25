# Lab 3 — Exercise 3: KRAFTON PUBG Vietnam Series Live Telemetry

## 1. Project Overview

**Objective:** Build a fault-tolerant PUBG Vietnam Series live telemetry dashboard using React 19, TypeScript, a four-state machine, simulated packet loss, and AbortController.

**Technology:** React 19, TypeScript, Vite, CSS, Chrome DevTools, Git.

**Inherited concepts:** React state management, resilient loading components, semantic HTML, and accessible feedback from previous exercises.

## 2. Task Decomposition

### Task 3.1 — Project Setup & PUBG Dataset

- [ ] Initialize React 19 + Vite + TypeScript.
- [ ] Define a typed PUBG squad data model.
- [ ] Add Cerberus Esports, The Expendables, and Genius Esports.
- [ ] Preserve the dataset values from the assignment.
- [ ] Display the initial squad information.
- [ ] Verify the build.

### Task 3.2 — Four-State Machine

- [ ] Implement IDLE, LOADING, SUCCESS, and ERROR states.
- [ ] Implement squad selection.
- [ ] Trigger a new telemetry request when a squad is selected.
- [ ] Keep the state transitions predictable.

### Task 3.3 — Simulated Packet Loss & AbortController

- [ ] Simulate 35% packet loss.
- [ ] Simulate an asynchronous telemetry request.
- [ ] Use AbortController for request cancellation.
- [ ] Abort obsolete requests on squad changes.
- [ ] Ignore AbortError without showing a false error message.
- [ ] Prevent stale responses from overwriting current data.

**Required functional milestone commit:**

`feat(ex3): implement PUBG VN telemetry and AbortController`

### Task 3.4 — Skeleton UI, Error & Retry

- [ ] Build a 220px Blue-Zone skeleton while LOADING.
- [ ] Use a pulsing animation.
- [ ] Reserve stable layout space to minimize CLS.
- [ ] Render successful telemetry data.
- [ ] Display failures in an accessible section with role="alert".
- [ ] Add a Reconnect Satellite (Retry) button.
- [ ] Never use window.alert().
- [ ] Use a retry trigger to restart the request.

**Required UI milestone commit:**

`feat(ex3): add skeleton UI and retry alert`

### Task 3.5 — DevTools Checkpoint 3

- [ ] Test Network Slow 3G.
- [ ] Inspect layout shifts and skeleton stability.
- [ ] Check the CLS measurement.
- [ ] Rapidly select CES → TE → GE.
- [ ] Inspect request cancellation.
- [ ] Verify that canceled requests do not display false errors.
- [ ] Test the Retry button with keyboard and mouse.
- [ ] Run npm run build.
- [ ] Confirm no unexpected console errors.

### Task 3.6 — Documentation & Submission

- [ ] Record verification results.
- [ ] Review implementation commits.
- [ ] Confirm source files are pushed to GitHub.
- [ ] Update TASK_DECOMPOSITION.md.

## 3. Final Deliverables

- PubgMatchTelemetry component
- Typed PUBG Vietnam squad dataset
- Simulated telemetry request service
- Four-state machine and AbortController handling
- Skeleton loader and accessible retry interface
- DevTools Checkpoint 3 evidence
- Task Decomposition and Git history

**Repository:** https://github.com/tanhung1004/Lab03_Ex

**Current Status:** Task 3.1 in progress.