# Lab 3 — Exercise 1: Semantic Engineer & Pro-Gamer Profile Card

## 1. Project Overview

**Objective:** Build two reusable React 19 components, `DeveloperCard` and `SkillBadge`, using semantic HTML, CSS Modules, responsive design, and secure image handling.

**Technology Stack:**
- React 19
- TypeScript (TSX)
- Vite
- CSS Modules
- CSS Custom Properties
- Git

**Legacy Reference:** Lab 2 — Exercise 4.4 (Elon Musk Card) and Exercise 4.5 (User Profile).

**Constraint:** Zero `<div>` elements inside `DeveloperCard`.

---

## 2. Task Decomposition

### Task 1.1 — Project Setup

- [ ] Verify React 19 and React DOM installation.
- [ ] Verify Vite and TypeScript configuration.
- [ ] Create `src/components/`.
- [ ] Create `DeveloperCard.tsx`.
- [ ] Create `SkillBadge.tsx`.
- [ ] Create `DeveloperCard.module.css`.
- [ ] Verify `npm run build` succeeds.

**Expected Result:** The React project builds successfully and the required files exist.

### Task 1.2 — Build SkillBadge Component

- [ ] Define typed props for `SkillBadge`.
- [ ] Display a skill name.
- [ ] Use semantic HTML.
- [ ] Support reusable skill data.
- [ ] Avoid unnecessary wrapper elements.

**Expected Result:** A reusable component that displays an individual skill.

### Task 1.3 — Build Semantic DeveloperCard

- [ ] Define typed props or a typed developer data model.
- [ ] Use `<article>` as the card container.
- [ ] Use `<header>` and `<hgroup>` for profile information.
- [ ] Use `<dl>`, `<dt>`, and `<dd>` for profile details.
- [ ] Use `<ul>` and `<li>` to display skills.
- [ ] Render skills using `SkillBadge`.
- [ ] Do not use any `<div>` elements inside `DeveloperCard`.

**Expected Result:** A complete semantic developer profile card.

### Task 1.4 — Secure Image Handling

- [ ] Use an HTTPS avatar URL.
- [ ] Define explicit `width` and `height` attributes.
- [ ] Provide meaningful alternative text.
- [ ] Implement fallback initials when the image cannot be loaded.
- [ ] Check that the layout remains stable.

**Expected Result:** Secure and accessible profile media with stable dimensions.

### Task 1.5 — Integrate Components

- [ ] Import `DeveloperCard` into `App.tsx`.
- [ ] Provide sample developer data.
- [ ] Render the profile card.
- [ ] Check that React renders without errors.

**Expected Result:** A functional profile card in the browser.

**Git Commit 1:**

`feat(ex1): implement semantic DeveloperCard and SkillBadge`

---

### Task 1.6 — CSS Modules

- [ ] Import `DeveloperCard.module.css`.
- [ ] Replace inline component styles with CSS Module classes.
- [ ] Define reusable CSS Custom Properties.
- [ ] Style profile image, heading, details, and skill badges.
- [ ] Preserve semantic HTML structure.

**Expected Result:** A styled profile card with scoped CSS classes.

### Task 1.7 — Responsive Design

- [ ] Implement responsive layout.
- [ ] Test viewport width at 375px.
- [ ] Prevent horizontal scrolling.
- [ ] Ensure text remains readable.
- [ ] Ensure images and content fit within the viewport.

**Expected Result:** A responsive developer card that works at 375px without horizontal overflow.

**Git Commit 2:**

`style(ex1): add responsive 375px CSS module`

---

## 3. Final Verification — Checkpoint 1

### Semantic HTML Verification

- [ ] No `<div>` elements inside `DeveloperCard`.
- [ ] Required semantic elements are present.
- [ ] Accessibility Tree shows meaningful article, headings, description list, and skills list.

### Security Verification

- [ ] No insecure `http://` image sources.
- [ ] Profile image includes explicit dimensions.
- [ ] Avatar fallback works when loading fails.

### Responsive Verification

- [ ] Test using Chrome DevTools Device Toolbar.
- [ ] Set viewport to 375px.
- [ ] Confirm there is no horizontal scrolling.

### Build Verification

- [ ] `npm run build` completes successfully.
- [ ] Browser console contains no unexpected errors.

### Git Verification

- [ ] Two atomic implementation commits are present.
- [ ] Commit messages match the required milestones.
- [ ] `node_modules/` and `dist/` are ignored.
- [ ] Working tree is clean after committing.
- [ ] Changes are pushed successfully if a remote repository is configured.

---

## 4. Final Deliverables

- `src/components/DeveloperCard.tsx`
- `src/components/SkillBadge.tsx`
- `src/components/DeveloperCard.module.css`
- Updated `src/App.tsx`
- `TASK_DECOMPOSITION.md`
- Two atomic Git commits
- Verified responsive and semantic implementation

**Status:** Planning complete — implementation and verification pending.