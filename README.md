# MYMOID Open Source

Static website that presents MYMOID's public client libraries and directs
developers to the source repositories and developer resources.

The site is published through GitHub Pages from the `mymoid.github.io`
repository. It is separate from the corporate MYMOID website and the public
Developer Portal.

## Table of contents

- [Role in the payment platform](#role-in-the-payment-platform)
- [Published libraries](#published-libraries)
- [Architecture](#architecture)
- [Technology stack](#technology-stack)
- [Requirements](#requirements)
- [Local setup](#local-setup)
- [Available commands](#available-commands)
- [Project structure](#project-structure)
- [Updating library information](#updating-library-information)
- [Quality and testing](#quality-and-testing)
- [Deployment](#deployment)
- [Branch strategy](#branch-strategy)
- [Related repositories](#related-repositories)

## Role in the payment platform

MYMOID Open Source is a discovery page for the public libraries used to
integrate software with MYMOID APIs.

```text
Developer
    |
    v
MYMOID Open Source site
    |-- PHP client library repository and Composer version
    |-- TypeScript/JavaScript client repository and npm version
    |
    +-- MYMOID GitHub organization
    `-- Public Developer Portal
```

The site does not issue API credentials, document the complete API, or process
payments. Developers use the public portal for integration guidance and the
private portal to create applications and credentials.

## Published libraries

The current library cards are defined in `app/ui/libraries.tsx`:

| Library | Repository | Package information |
| --- | --- | --- |
| PHP | `mymoid/mymoid-php` | Composer version badge for `mymoid/api`. |
| TypeScript/JavaScript | `mymoid/mymoid-js` | npm version badge for `@mymoid/api`. |

The header also links to the public Developer Portal and the MYMOID account
creation flow.

## Architecture

The project is a small Next.js App Router application exported as static files.
There is no server runtime, API route, database, authentication session, or
environment-specific configuration.

`next.config.js` sets `output: 'export'`, producing the deployable site under
`out/` during a production build.

## Technology stack

- Node.js 20 in GitHub Actions
- Next.js 14 with App Router
- React 18 and TypeScript
- Tailwind CSS 3
- Static export
- GitHub Actions and GitHub Pages

## Requirements

- Node.js 20 for parity with the deployment workflow.
- npm, using the committed `package-lock.json`.

The application does not require a `.env` file.

## Local setup

1. Install the locked dependencies:

   ```bash
   npm ci
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Next.js development server. |
| `npm run build` | Generates the static production export under `out/`. |
| `npm run start` | Runs Next.js in server mode; use `dev` for local work and the static export for deployment. |
| `npm run lint` | Runs the Next.js ESLint checks. |

## Project structure

```text
.
|-- app/
|   |-- ui/                    Header, hero, library cards, and visual components
|   |-- globals.css            Design tokens, responsive rules, and theme colors
|   |-- layout.tsx             Metadata and global page layout
|   `-- page.tsx               Single public page
|-- public/                    MYMOID and library assets
|-- .github/workflows/
|   `-- nextjs.yml             GitHub Pages build and deployment
|-- next.config.js             Static-export configuration
|-- tailwind.config.ts         Tailwind configuration
`-- package.json               Scripts and dependencies
```

## Updating library information

Library names, repository links, logos, and package badges are maintained in
`app/ui/libraries.tsx` and `public/`.

When adding or changing a library:

1. Confirm the repository is intended to be public.
2. Confirm the package name and registry badge URL.
3. Add an accessible logo with an accurate alternative description.
4. Verify that the repository and badge use HTTPS.
5. Test desktop and mobile layouts.
6. Build the static export and check that assets work without a server.

Do not publish private repositories, internal package names, credentials, or
unsupported SDK commitments.

## Quality and testing

Before submitting a change, run:

```bash
npm run lint
npm run build
```

The repository does not currently define automated unit or end-to-end tests.
Changes require manual verification of:

- External repository and developer links.
- Package-version badges.
- Responsive layout.
- Light and dark color behavior.
- Static images and the generated `out/` export.

## Deployment

`.github/workflows/nextjs.yml` deploys the site to GitHub Pages.

On every push to `main`, or on manual workflow dispatch, GitHub Actions:

1. Checks out the repository.
2. Configures Node.js 20.
3. Restores or installs npm dependencies.
4. Builds the Next.js static export.
5. Uploads the `out/` directory as a Pages artifact.
6. Publishes the artifact to the `github-pages` environment.

The workflow requires `pages: write` and `id-token: write`; application source
code must not attempt to embed credentials in the static output.

## Branch strategy

| Branch | Purpose |
| --- | --- |
| `develop` | Integration branch for reviewed site changes. |
| `main` | Production branch deployed automatically to GitHub Pages. |
| Feature/fix branches | Short-lived work created from `develop` and reviewed through pull requests. |

## Related repositories

- `mymoid-js`: TypeScript/JavaScript client library displayed on this site.
- `mymoid-php`: PHP client library displayed on this site.
- `PRODUCT-developer-portal-public`: public API guides and reference.
- `PRODUCT-developer-portal-private`: application and credential management.
- `PRODUCT-mymoid-web`: corporate and commercial MYMOID website.
- `Docs`: cross-product documentation.
