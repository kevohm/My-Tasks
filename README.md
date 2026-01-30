# Frontend Improvement Projects

A curated set of **intricate, skill-focused frontend projects** designed to aggressively improve your understanding of **React, TypeScript, JavaScript, and Vite**.

These are not beginner portfolio demos. Each project intentionally introduces constraints and complexity to expose real-world problems, mental models, and edge cases that senior frontend engineers deal with daily.

---

## 🎯 Goals of This Repository

* Deepen understanding of React’s rendering and state model
* Master TypeScript beyond basic typing
* Strengthen core JavaScript fundamentals
* Learn performance tuning and architectural trade‑offs
* Gain confidence debugging complex UI systems

---

## 🧠 Project List

### 1️⃣ State From Hell

**Focus:** React state modeling, reducers, memoization

**Description**
Build a deeply nested editable UI (goals → tasks → subtasks) where poor state design causes performance and correctness issues.

**Key Features**

* Nested CRUD operations
* Undo / redo history
* Optimistic updates
* Derived state (progress, counters)

**Constraints**

* ❌ No Redux, Zustand, Jotai
* ✅ Must use `useReducer`
* ✅ Proper memoization required

**Skills Trained**

* Immutable updates
* Derived vs source state
* Rerender control
* Referential equality

---

### 2️⃣ Type‑Safe Form Engine

**Focus:** Advanced TypeScript

**Description**
Create a generic, schema‑driven form builder with full type inference.

**Key Features**

* JSON schema → rendered form
* Strongly typed form values
* Field‑level validation
* Conditional fields

**Constraints**

* ❌ No `any`
* ❌ No unsafe type assertions
* ✅ Generic inference only

**Skills Trained**

* Generics
* Conditional & mapped types
* Type inference limits
* API design in TS

---

### 3️⃣ 10,000 Row Problem

**Focus:** Performance & rendering

**Description**
Render and edit extremely large datasets without freezing the UI.

**Key Features**

* Editable table (10k+ rows)
* Sorting & filtering
* Inline validation

**Constraints**

* ❌ No virtualization initially
* ✅ Measure rerenders using React DevTools

**Skills Trained**

* Render batching
* Memoization strategies
* Key usage
* Event delegation

---

### 4️⃣ Race Condition Simulator

**Focus:** Effects, async behavior

**Description**
Build a UI that makes async bugs visible and solvable.

**Key Features**

* Live search
* Request cancellation
* Retry with exponential backoff
* Stale‑while‑revalidate cache

**Constraints**

* ❌ No React Query / SWR
* ✅ Use `AbortController`

**Skills Trained**

* Effect cleanup
* Race conditions
* Async state modeling
* Error boundaries

---

### 5️⃣ Headless UI Kit

**Focus:** Component architecture

**Description**
Create reusable, headless UI primitives that separate logic from presentation.

**Key Features**

* Headless dropdown
* Headless modal
* Headless tabs

**Constraints**

* ❌ No UI libraries
* ✅ Compound components or render props

**Skills Trained**

* Context boundaries
* Reusability patterns
* API ergonomics

---

### 6️⃣ Test‑First Refactor

**Focus:** Testing & maintainability

**Description**
Refactor a deliberately messy React app by writing tests before touching logic.

**Key Features**

* Legacy codebase
* User‑focused tests
* Safe refactors

**Constraints**

* ❌ No snapshot tests
* ✅ Testing Library + MSW

**Skills Trained**

* Behavior‑driven testing
* Refactor confidence
* Mock boundaries

---

### 7️⃣ Write a Vite Plugin

**Focus:** Tooling & build systems

**Description**
Build a custom Vite plugin to understand the modern frontend toolchain.

**Key Features**

* Import transformation
* Env‑based code replacement
* Build‑time validation

**Constraints**

* ✅ Use Rollup plugin hooks
* ✅ ESM only

**Skills Trained**

* Vite internals
* Build vs runtime logic
* Module systems

---

### 8️⃣ React Without React

**Focus:** JavaScript fundamentals

**Description**
Rebuild the core ideas behind React from scratch using plain JavaScript.

**Key Features**

* Minimal virtual DOM
* Diffing algorithm
* State updates

**Constraints**

* ❌ No frameworks
* ❌ No React

**Skills Trained**

* Closures
* Immutability
* Event delegation
* Rendering algorithms

---

### 9️⃣ Global App Simulator

**Focus:** i18n & UX edge cases

**Description**
Simulate a truly global application.

**Key Features**

* RTL / LTR switching
* Locale‑aware dates & numbers
* Time zones
* Lazy‑loaded translations

**Constraints**

* ❌ No full i18n framework initially

**Skills Trained**

* Intl API
* Code splitting
* UX edge cases

---

### 🔟 Offline‑First App

**Focus:** Real‑world reliability

**Description**
Build an app that works without an internet connection.

**Key Features**

* Offline usage
* Sync conflict resolution
* Optimistic UI
* IndexedDB persistence

**Constraints**

* ❌ No backend‑as‑a‑service magic
* ✅ Use Service Workers

**Skills Trained**

* State reconciliation
* Persistence strategies
* Reliability engineering

---

## 🏆 Recommended Completion Paths

### Fast but Effective

1. Type‑Safe Form Engine
2. Headless UI Kit
3. Offline‑First App

### Performance‑Focused

1. 10,000 Row Problem
2. State From Hell
3. Race Condition Simulator

---

## 🧰 Suggested Stack

* React + TypeScript
* Vite
* Testing Library
* Vitest
* Playwright
* MSW

---

## 🚦 Rules of Engagement

* Prefer clarity over cleverness
* Measure performance, don’t guess
* Write tests where failure is expensive
* Document trade‑offs

---

## 📌 Final Note

If a project feels uncomfortable or frustrating — that’s the point. These projects are designed to surface the exact problems that differentiate intermediate developers from senior frontend engineers.

Happy building 🚀
