# Yajoo Musician Portfolio

## 1. What

The Angular project is now a static musician portfolio for Yajoo. It has Home, Gallery, Projects, and Contact routes, shared site navigation and footer, the original portfolio's home-page structure and selected photos, a redesigned Contact page, and a floating YouTube music player control.

## 2. Why

The project stays on its existing Angular stack and uses standalone components with Angular Router. This keeps each page independent and makes shared interface pieces reusable. Angular's build output is configured for static hosting and prerenders the routes, matching the agreed no-backend first version. The original home composition and optimized photos now ground the page in Yajoo's actual materials.

## 3. How

`app.routes.ts` maps the four page URLs to standalone page components. The root `App` component supplies the shared header, routed page outlet, music player, and footer. The Home page follows the original hero, bio, featured work, and gallery preview layout. Contact follows the original intro/form composition; submission opens a prefilled email draft because the site has no backend. The player creates a YouTube embed only after a visitor presses Play; add a real YouTube video ID to `src/app/shared/music-player/music-player.ts` to enable it. Global design defaults live in `src/styles.css`, while component styles stay with their components.

## 4. Code Changes & File Tree

### Directory Structure

```text
yajowebsite/
├── DOCUMENTATION.md
├── PROJECT_LOG.md
└── src/
    ├── styles.css
    ├── app/
        ├── app.ts
        ├── app.html
        ├── app.css
        ├── app.routes.ts
        ├── pages/
        │   ├── home/
        │   │   ├── home-page.ts
        │   │   ├── home-page.html
        │   │   └── home-page.css
        │   ├── gallery/
        │   │   ├── gallery-page.ts
        │   │   ├── gallery-page.html
        │   │   └── gallery-page.css
        │   ├── projects/
        │   │   ├── projects-page.ts
        │   │   ├── projects-page.html
        │   │   └── projects-page.css
        │   ├── missing-project-link/
        │   │   ├── missing-project-link-page.ts
        │   │   ├── missing-project-link-page.html
        │   │   └── missing-project-link-page.css
        │   └── contact/
        │       ├── contact-page.ts
        │       ├── contact-page.html
        │       └── contact-page.css
        └── shared/
            ├── site-header/
            │   ├── site-header.ts
            │   ├── site-header.html
            │   └── site-header.css
            ├── site-footer/
            │   ├── site-footer.ts
            │   ├── site-footer.html
            │   └── site-footer.css
            └── music-player/
                ├── music-player.ts
                ├── music-player.html
                └── music-player.css
    └── public/media/
        ├── yajoo-portrait.jpg
        ├── yajoo-live.jpg
        ├── yajoo-festival.jpg
        ├── last-call.jpg
        ├── last-call-head.jpg
        ├── nightbus-film.jpg
        ├── katjazz-2025.jpg
        ├── tedx-2024.jpg
        └── world-music-day-2023.jpg
```

### Specific Changes

- `src/app/app.ts`, `app.html`, and `app.css`: root layout now composes shared navigation, routed pages, music control, and footer.
- `src/app/app.ts` and the shared header, music player, and footer components: declared `standalone: true` explicitly so Angular tooling can statically recognize the components listed in `imports`.
- `src/app/app.routes.ts`: defines Home, Gallery, Projects, and Contact routes with page titles.
- `src/app/pages/home/`, `contact/`, `projects/`, and `gallery/`: each page now has a separate `.ts`, `.html`, and `.css` file. Component paths use sibling-relative `templateUrl` and `styleUrl` references.
- `src/app/pages/home/home-page.html` and `.css`: preserve the original home-page layout and show the Last Call image in the photo strip.
- `src/app/pages/contact/contact-page.html` and `.css`: render the email form and circular, head-focused Last Call portrait.
- `src/app/pages/projects/projects-page.html` and `.css`: render Nightbus Sessions with the film poster and list the archive projects.
- `src/app/pages/missing-project-link/`: provides a 404-style apology page with a return link; it displays the project name from the clicked project card.
- Every YouTube button in Projects routes to the missing-link page until real video links are available.
- `src/app/shared/site-header/`, `site-footer/`, and `music-player/`: each shared component now has separate `.ts`, `.html`, and `.css` files with sibling-relative paths.
- `src/styles.css` and `src/index.html`: add shared colors/layout defaults, document title, and page description.
- `angular.json`: outputs a static site build suitable for static hosting.
- `public/media/`: stores optimized copies of the original portrait, performance, Last Call, film, Katjazz, TEDx, and World Music Day images; the source folder remains unchanged.
- `PROJECT_LOG.md`: records user requests, additions, modifications, errors, and pending content.
- `DOCUMENTATION.md`: documents the implementation, decisions, and file structure.

## Content still needed

Release details and YouTube channel/video links can replace the remaining placeholders when available. The Contact email is taken from the original page; confirm it is still current. The visual style can be refined later.

## Verification

`npm run build` completed successfully and prerendered five routes, including the missing-project-link page. The Home page component stylesheet is 5.74 kB, so the component-style warning budget in `angular.json` is now 6 kB; the error budget remains 8 kB. This removes the build warning while retaining a 2 kB margin before a build error. The first build attempt failed because Angular could not fetch a Google Fonts stylesheet in the restricted network environment; the remote font import was removed and the build then succeeded with local system font fallbacks. No automated test suite was run.

After explicitly marking the root and shared components as standalone, `npm run build` again completed successfully with no errors or warnings and prerendered all five routes.

## Security Review (2026-11-15)

- `npm audit` reported 0 known vulnerabilities across the 506-package dependency graph in the lockfile.
- Reviewed application sources for unsafe HTML/DOM injection, dynamic code execution, exposed credentials, and external-link handling. No such issue was found in the scanned app files.
- The music iframe uses Angular's security-sensitive `bypassSecurityTrustResourceUrl` API. Its URL is assembled with a fixed `youtube-nocookie.com` origin, and the configured video ID is accepted only if it matches the 11-character YouTube ID pattern; no user-provided URL is trusted.
- This is a code and dependency review, not a guarantee that no unknown vulnerability exists. Production HTTP security headers (including Content Security Policy, HSTS, and Trusted Types policy) must be configured at the eventual static hosting provider; no deployment host is configured in this project.
