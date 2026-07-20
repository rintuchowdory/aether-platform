# GitHub Pages & CI/CD Setup Guide

This guide explains how to set up GitHub Pages and CI/CD for the Aether Intelligence Platform.

## Overview

The Aether platform includes two automated workflows:

1. **Test & Lint Workflow** (`test.yml`) - Runs on every push and pull request
2. **Build & Deploy Workflow** (`deploy.yml`) - Builds and deploys to GitHub Pages on every push to main

## Prerequisites

- GitHub repository with Actions enabled (default)
- Node.js 18+ and pnpm installed locally

## GitHub Pages Configuration

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Select **Source**: "GitHub Actions"
   - The deployment will be automatically triggered by the workflow

### Step 2: Configure Repository Secrets (if needed)

If your build requires environment variables, add them as repository secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add any required secrets (e.g., API keys, tokens)

Currently, the workflows don't require additional secrets, but you can add them if needed.

## CI/CD Workflows

### Test & Lint Workflow

**Trigger:** Push to `main` or `develop` branches, or pull requests

**Steps:**
- Checks out code
- Sets up Node.js (tests on 18.x and 20.x)
- Installs dependencies with pnpm
- Runs TypeScript type checking
- Runs code formatting check
- Runs test suite with Vitest

**Configuration file:** `.github/workflows/test.yml`

### Build & Deploy Workflow

**Trigger:** Push to `main` branch or manual workflow dispatch

**Steps:**
1. **Build Job:**
   - Checks out code
   - Sets up Node.js 20.x
   - Installs dependencies
   - Runs type checking
   - Builds the application with Vite
   - Uploads build artifact to GitHub Pages

2. **Deploy Job:**
   - Deploys the artifact to GitHub Pages
   - Sets environment URL for deployment tracking

**Configuration file:** `.github/workflows/deploy.yml`

## Deployment URL

Once GitHub Pages is configured and the first deployment succeeds, your site will be available at:

```
https://rintuchowdory.github.io/aether-platform/
```

The exact URL depends on your repository name. Check the "Deployments" section in your repository for the live URL.

## Local Testing

### Run Tests Locally

```bash
pnpm test
```

### Build Locally

```bash
pnpm build
```

The built files will be in `dist/public/`.

### Type Check

```bash
pnpm check
```

### Format Check

```bash
pnpm format --check
```

## Troubleshooting

### Workflow Not Triggering

- Ensure GitHub Actions is enabled in repository settings
- Check that the workflow files are in `.github/workflows/` directory
- Verify branch names match the workflow triggers (main, develop)

### Build Failures

- Check the workflow logs in the **Actions** tab
- Common issues:
  - Missing dependencies: Run `pnpm install --frozen-lockfile`
  - Type errors: Run `pnpm check` locally
  - Build errors: Run `pnpm build` locally to debug

### Pages Not Updating

- Ensure the build artifact is correctly uploaded
- Check that GitHub Pages source is set to "GitHub Actions"
- Clear browser cache or use incognito mode
- Wait a few minutes for deployment to complete

## Manual Deployment

To manually trigger the deploy workflow:

1. Go to **Actions** tab in your repository
2. Select **Build & Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select the branch (main)
5. Click **Run workflow**

## Next Steps

1. **Monitor Deployments:** Check the **Deployments** tab to see deployment history
2. **Add More Tests:** Expand the test suite in `server/*.test.ts` and `client/src/**/*.test.ts`
3. **Custom Domain:** In GitHub Pages settings, you can add a custom domain
4. **Branch Protection:** Consider enabling branch protection rules to require passing checks before merging

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [pnpm Documentation](https://pnpm.io/)
