---
description: how to deploy TotalPMPro to Vercel
---

# Deployment Workflow

## Vercel Deployment

### Automated Deployment
The project is configured for Vercel. Pushing to the `main` branch will trigger an automatic deployment.

### Manual Deployment via CLI
If you have the Vercel CLI installed:
```bash
vercel --prod
```

### Checks before Deployment
- Ensure `npm run build` passes locally.
- Verify that all environment variables are set in the Vercel dashboard.
