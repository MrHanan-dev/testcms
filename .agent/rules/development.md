## Aesthetic Standards
- **Premium Corporate Tech**: The project must look expensive and modern.
- **Glassmorphism**: Use `backdrop-blur-md` with semi-transparent white backgrounds for overlays.
- **Color Palette**: 
  - Primary (Deep Executive Blue): `#0B3C5D` / `#072A40`
  - Accent (Champagne Gold): `#C6A75E`
  - Background: Soft Luxury Background (`#F4F7FA`) / White

## Code Standards
- **Framework**: Next.js App Router (Standard).
- **Styling**: Tailwind CSS ONLY.
- **Performance**: Use dynamic imports for heavy components.
- **A11y**: Ensure all interactive elements have ARIA labels.
- **Clean Code**: Prioritize readability, KISS (Keep It Simple, Stupid), and DRY (Don't Repeat Yourself). Use descriptive variable and function names.

## Change Management
- **Planning**: ALWAYS create an `implementation_plan.md` before making structural changes.
- **Minimal Churn**: Only modify files directly related to the task. Avoid unnecessary refactors or sweeping changes unless explicitly requested. Ensure each PR/change is focused and atomic.
- **Verification**: Run `npm run dev` and check for errors after UI changes.
