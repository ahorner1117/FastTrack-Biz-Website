# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FastTrack is a marketing/support website for an iOS GPS acceleration timer app. It's a React SPA built with Vite, styled with Tailwind CSS, and uses Supabase for authentication. The site has a dark theme with neon green (#00FF7F) and pink (#FF006E) accent colors.

### The iOS App

FastTrack is a GPS-based vehicle acceleration timer with a social platform. Core features marketed on this site:
- **Timing** — 0-60 mph, 0-100 mph, quarter-mile, and half-mile acceleration runs using GPS + accelerometer launch detection
- **Garage** — Vehicle management with make/model/year, VIN lookup, and modification tracking (engine, suspension, exhaust, etc.)
- **Community** — Social feed with posts, comments, threaded replies, @mentions, groups (auto-generated per vehicle model + custom), and friend messaging
- **Leaderboards** — Performance rankings filterable by vehicle, distance, and time period
- Additional: drive tracking mode, user profiles, push notifications, admin portal

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Generate `public/llms.txt` from page Helmet metadata, then Vite build
- `npm run preview` — Preview production build on port 3000
- `npm run lint` — ESLint (quiet mode, errors only)
- `npm run lint:warn` — ESLint with warnings

## Architecture

**Stack:** React 18 + Vite 4 + Tailwind 3 + Supabase Auth + Framer Motion

**Path alias:** `@` maps to `./src` (configured in both `vite.config.js` and `eslint.config.mjs`)

**Routing:** React Router v7 with `BrowserRouter`. Routes defined in `src/App.jsx`. The `LandingPage` (`/`) uses anchor-scroll navigation to sections (features, faq, support, privacy). Feature sub-pages: `/timing`, `/garage`, `/community`, `/leaderboards`. Also `/terms` and `/privacy` for legal pages.

**Feature pages:** Each feature page (`src/pages/TimingPage.jsx`, `GaragePage.jsx`, `CommunityPage.jsx`, `LeaderboardsPage.jsx`) showcases a core app feature with app screenshots, feature lists, and consistent layout (Header + Footer). The Header includes a dropdown "Features" menu linking to these sub-pages.

**Images:** App screenshots stored in `public/images/` (e.g., `acceleration-timer.png`, `garage-vehicles.png`, `explore-page-and-groups.png`, `leaderboard.png`). Referenced directly in feature page components.

**Auth flow:** `AuthProvider` wraps the entire app in `App.jsx`. The `useAuth()` hook (from `src/contexts/SupabaseAuthContext.jsx`) provides `user`, `session`, `signIn`, `signUp`, `signOut`. The Supabase client is in `src/lib/customSupabaseClient.js`. Auth UI is a modal (`AuthModal`) triggered from the `Header`.

**UI components:** `src/components/ui/` contains shadcn/ui-style primitives (button, toast, accordion) using Radix UI + `class-variance-authority`. The `cn()` utility in `src/lib/utils.js` merges Tailwind classes via `clsx` + `tailwind-merge`.

**Styling conventions:** Dark background (#0a0a0a), neon glow effects via custom utility classes in `src/index.css` (e.g., `neon-text-green`, `neon-box-pink`). Tailwind config extends with CSS variable-based theming (`hsl(var(--primary))` pattern).

**Build tooling:** `tools/generate-llms.js` runs before Vite build to extract `<Helmet>` title/description from page components into `public/llms.txt`. The `plugins/` directory contains Hostinger Horizons dev-only Vite plugins (visual editor, selection mode, iframe route restoration) — these are not part of the app's core functionality.

## Key Conventions

- File extensions: `.jsx` for components, `.js` for utilities/config
- Node version: 20.19.1 (see `.nvmrc`)
- ESLint focuses on critical runtime errors (`no-undef`, `import/no-self-import`); many stylistic rules are intentionally disabled
- Pages use `react-helmet` for SEO metadata — this is required for the `generate-llms.js` build step to work
- Icons come from `lucide-react`
- The `ScrollToTop` component ensures pages scroll to top on route changes
- Feature pages follow a consistent structure: Helmet metadata → Header → hero section with gradient → feature grid/cards → app screenshots → CTA → Footer
