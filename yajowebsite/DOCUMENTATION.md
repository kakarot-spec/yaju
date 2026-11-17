# Yajoo Musician Portfolio

## 1. What

The Angular project is a static musician portfolio for Yajoo. It includes Home, Gallery, Projects, In the Press, and Contact pages, shared site navigation and footer, selected photos, and a floating YouTube music player control. The Home page features Yaju Acharya's supplied biography and the original song Batas. Projects are arranged newest first, and In the Press has three editable photo and headline placeholders.

## 2. Why

The project stays on its existing Angular stack and uses Angular Router for separate page components. This keeps each page independent and makes shared interface pieces reusable. Angular's build output is configured for static hosting and prerenders the routes, matching the no-backend site structure. The supplied biography and media keep the page content tied to Yaju Acharya's materials.

## 3. How

`app.routes.ts` maps the page URLs to page components. The root `App` component supplies the shared header, routed page outlet, music player, and footer. The Home page follows the original hero, bio, featured work, and gallery preview layout. Contact opens a prefilled email draft because the site has no backend. The Press page renders three story cards; set an image path and edit each headline in `press-page.ts` when adding coverage. The player creates a YouTube embed only after a visitor presses Play; add a real YouTube video ID to `src/app/shared/music-player/music-player.ts` to enable it. Global design defaults live in `src/styles.css`, while component styles stay with their components.

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
        │   ├── press/
        │   │   ├── press-page.ts
        │   │   ├── press-page.html
        │   │   └── press-page.css
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
        ├── a.jpg
        ├── batas.jpg
        ├── DSCF6222.JPG
        ├── yajoo live.JPG
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
- `src/app/app.routes.ts` and `src/app/shared/site-header/`: register and link the In the Press page at `/press`.
- `src/app/pages/home/`, `contact/`, `projects/`, and `gallery/`: each page now has a separate `.ts`, `.html`, and `.css` file. Component paths use sibling-relative `templateUrl` and `styleUrl` references.
- `src/app/pages/home/home-page.html` and `.css`: preserve the Home layout, use the full user supplied biography, feature Batas as an original song by Yaju Acharya, and show the selected photo assets.
- `src/app/pages/contact/contact-page.html` and `.ts`: render the email form and send direct links and form drafts to `yajuflutistacharya@gmail.com`.
- `src/app/pages/projects/projects-page.html` and `.css`: render project cards with their supplied media, event labels, descriptions, and dates.
- `src/app/pages/press/`: adds the responsive In the Press page with three replaceable photo slots and editable headline placeholders.
- `src/app/pages/missing-project-link/`: provides a 404-style apology page with a return link; it displays the project name from the clicked project card.
- Every YouTube button in Projects routes to the missing-link page until real video links are available.
- `src/app/shared/site-header/`, `site-footer/`, and `music-player/`: each shared component now has separate `.ts`, `.html`, and `.css` files with sibling-relative paths.
- `src/styles.css` and `src/index.html`: add shared colors/layout defaults, document title, and page description.
- `angular.json`: outputs a static site build suitable for static hosting.
- `public/media/`: stores original portfolio media and user-added Batas, hero, event, and performance images used on Home and Projects.
- `PROJECT_LOG.md`: records user requests, additions, modifications, errors, and pending content.
- `DOCUMENTATION.md`: documents the implementation, decisions, and file structure.

### Projects Archive Update (2026-11-17)

- Added the seven user-selected media assets as project cards, using poster details for titles, event descriptions, venues, and dates where visible.
- Added both Katjazz poster images as separate entries at the user's direction, even though their artwork advertises the same date and performers.
- Set the Music for Health fundraiser date to 7 August 2026 as specified by the user.
- Initially ordered projects by known date from earliest to latest; this was later changed to newest first as requested.
- Modified `src/app/pages/projects/projects-page.ts` and used existing assets in `public/media/`; no new media files were required.

### Home, Contact, Projects, and Press Update (2026-11-17)

- Replaced the Home About copy with the full user supplied biography and described Batas as an original song created by Yaju Acharya.
- Sorted the project archive newest first, updated both 29 January Katjazz entries to 2026, dated The Last Call and Tulsi to 2024, and renamed Nightbus Sessions to Tulsi with a sound design credit for Yaju Acharya.
- Updated all Contact page email links and the form draft destination to `yajuflutistacharya@gmail.com`.
- Added the In the Press route and navigation item, plus three responsive photo placeholders with editable headline text. Replace each empty image value and headline in `src/app/pages/press/press-page.ts` when ready.
- Recorded the existing Home media choices (`a.jpg`, `batas.jpg`, `DSCF6222.JPG`, and `yajoo live.JPG`) and related page edits in this document.

## Content still needed

YouTube channel/video links can replace the current unavailable-link placeholders when supplied. The three In the Press cards are ready for real headlines and images.

## Verification

`npm run build` completed successfully and prerendered five routes, including the missing-project-link page. The Home page component stylesheet is 5.74 kB, so the component-style warning budget in `angular.json` is now 6 kB; the error budget remains 8 kB. This removes the build warning while retaining a 2 kB margin before a build error. The first build attempt failed because Angular could not fetch a Google Fonts stylesheet in the restricted network environment; the remote font import was removed and the build then succeeded with local system font fallbacks. No automated test suite was run.

After explicitly marking the root and shared components as standalone, `npm run build` again completed successfully with no errors or warnings and prerendered all five routes.

After adding the In the Press page and updating the Home, Projects, and Contact content, `npm run build` completed successfully and prerendered six static routes.

## Security Review (2026-11-15)

- `npm audit` reported 0 known vulnerabilities across the 506-package dependency graph in the lockfile.
- Reviewed application sources for unsafe HTML/DOM injection, dynamic code execution, exposed credentials, and external-link handling. No such issue was found in the scanned app files.
- The music iframe uses Angular's security-sensitive `bypassSecurityTrustResourceUrl` API. Its URL is assembled with a fixed `youtube-nocookie.com` origin, and the configured video ID is accepted only if it matches the 11-character YouTube ID pattern; no user-provided URL is trusted.
- This is a code and dependency review, not a guarantee that no unknown vulnerability exists. Production HTTP security headers (including Content Security Policy, HSTS, and Trusted Types policy) must be configured at the eventual static hosting provider; no deployment host is configured in this project.
