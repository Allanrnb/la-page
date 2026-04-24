# Project: La Page (Editorial News Platform)

## Overview

This is a production-level news blog built with Next.js (App Router), using a headless CMS (WordPress) and Firebase for interactions.

The focus of this project is:

* Editorial UI/UX
* Clean architecture
* Scalability
* Performance and SEO

---

## Architecture Principles

* Follow a layered architecture:

  * UI (components)
  * Services (data fetching, external APIs)
  * Hooks (state & logic reuse)
  * Lib (helpers and utilities)
  * Types (global TypeScript types)

* NEVER mix data fetching logic inside UI components.

* ALWAYS isolate external API logic inside `/services`.

---

## Folder Structure Rules

* `/app` → routing and page composition only
* `/components` → reusable UI components
* `/services` → API integrations (WordPress, Firebase)
* `/hooks` → custom React hooks
* `/lib` → utilities and helpers
* `/types` → TypeScript interfaces and types

Each domain (news, layout, ui) must be separated.

---

## UI Guidelines (VERY IMPORTANT)

* This is NOT a SaaS dashboard.
* This is an editorial/news platform.

Design rules:

* Prioritize typography over UI elements
* Avoid card-heavy layouts
* Avoid excessive borders, shadows, or colors
* Use whitespace intentionally
* Headlines must be visually dominant

---

## Component Rules

* Prefer server components when possible

* Use client components only when needed (interactivity)

* Components must be:

  * Small
  * Reusable
  * Focused

---

## Data Fetching

* Use server-side data fetching when possible

* Use caching and revalidation (ISR)

* WordPress is the source of truth for content

* Firebase is used ONLY for:

  * Likes
  * Comments

---

## Styling Rules

* Use TailwindCSS
* Avoid inline styles
* Use consistent spacing scale
* Follow a minimal and editorial aesthetic

---

## Code Quality

* Use TypeScript strictly (no `any`)
* Use meaningful naming
* Avoid duplicated logic
* Prefer composition over complexity

---

## What to Avoid

* Do NOT generate generic UI
* Do NOT mix responsibilities in the same file
* Do NOT create large monolithic components
* Do NOT ignore the editorial design direction

---

## Goal

Build a real-world, production-ready editorial platform with high-quality UI and scalable architecture.
