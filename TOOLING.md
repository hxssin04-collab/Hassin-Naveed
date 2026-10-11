# Development tooling

The working frontend uses the committed npm package/lockfile, Vite, TypeScript and Playwright with system Chromium. The cloud environment installation/startup draft is maintained separately through the onboarding configuration; saving it does not start a process or publish a site.

The previous environment’s installed tooling and reports were not retained after the workspace changed. This repository was rebuilt and checked in the current environment. Optional Vercel and 21st.dev services are not application dependencies, and no authentication or API activation is claimed for them. The source can run and be tested without either service.

Deployment settings are in `vercel.json`. Use the hosting provider’s repository integration or securely configured account credentials. Do not place deployment secrets in this checkout, documentation or chat. `.env*` and `.vercel/` are ignored. The original tracked `2.0` file has been preserved.
