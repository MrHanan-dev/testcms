# TotalPMPro Development Guidelines

This document outlines the strict standards and best practices for the TotalPMPro project. All developers must adhere to these rules to maintain code quality, UI consistency, and performance.

## 1. Core Technology Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Utility-first)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 2. Design System & Aesthetics
Maintain a **Premium Corporate Tech** aesthetic.

### Color Palette (Strict)
Always use the Tailwind color classes:
- **Primary**: `bg-primary-500` (#3ca3e8), `bg-primary-600` (#2575d1)
- **Accent**: `bg-accent-500` (#fbbf24)
- **Background**: Pure White (#FFFFFF)
- **Typography**: Near-black (#1a1a2e)

### Visual Effects
- **Glassmorphism**: Use `backdrop-blur-md` with semi-transparent white backgrounds (`bg-white/70`) for overlays and floating cards.
- **Gradients**: Use `bg-hero-gradient` for main headers and hero sections.
- **Shadows**: Use custom shadows (`shadow-premium`, `shadow-card-hover`) defined in `tailwind.config.js`.

## 3. Component Standards
- **Functional Components**: Use Arrow functions with `React.FC` or explicit prop types.
- **Client vs Server**: Use `"use client"` only when necessary (interactive hooks, Framer Motion). Default to Server Components.
- **Atomic Design**: Separate components into `src/components/ui` (generic/reusable) and `src/components/layout` or feature-specific folders.
- **Clean Props**: Avoid prop-drilling; use Context or composition for complex states.

## 4. Coding Best Practices
- **TypeScript**: No `any`. Define interfaces for all API responses and component props.
- **Hooks**: Follow the Rules of Hooks. Keep logic in custom hooks if it exceeds 10-15 lines.
- **Imports**: Use path aliases (e.g., `@/components/...`). Organize imports: React/Next first, then external libs, then local files.
- **Comments**: Write "Why" comments, not "What" comments. Use JSDoc for complex utility functions.

## 5. Performance & SEO
- **Images**: Always use `next/image` with proper alt text and dimensions.
- **SEO**: Every page must have a unique `Metadata` object. Use semantic HTML (`<main>`, `<section>`, `<article>`).
- **Loading**: Use `loading.tsx` for skeleton screens and `Suspense` for async data fetching.

## 6. Workflow
- **Git**: Use descriptive branch names (`feature/`, `fix/`, `docs/`).
- **Commits**: Follow conventional commits (e.g., `feat: lightened primary color palette`).
- **PRs**: Include screenshots/recordings for UI changes.
