# Yajoo Website Project Log

This note tracks the requested work, implementation decisions, changes, and issues as the site is built.

## Requested by the user

- Create a musician portfolio website for **Yajoo** using the existing Angular project.
- Include Home, Gallery, Projects, and Contact pages.
- Organize reusable pieces in a components folder so they can be designed separately.
- Keep the first version static; no backend is planned.
- Focus on photos and YouTube music links.
- Include a play button so visitors can start music after pressing it.
- Add photos and audio later; no media assets have been provided yet.
- Decide the visual style later.
- Keep this note updated with requested items, additions, modifications, errors, and resolutions.

## Added in the first implementation

- Set up routed page components for Home, Gallery, Projects, and Contact.
- Added shared header/navigation, footer, and a floating music player under `src/app/shared/`.
- Added responsive styling and visual photo placeholders that can later be replaced with real images.
- Added YouTube links on the Projects and Contact pages.
- Added a YouTube player configuration point in `src/app/shared/music-player/music-player.ts`.
- Added this log and `DOCUMENTATION.md`.

## Modifications

- Replaced the generic Home About copy with a shortened first-person biography for Yaju Acharya, including his Bhaktapur roots, classical and jazz training, former membership in Fret, and cross-cultural musical focus. Kept the About section in its original position and updated its role and location details.
- Replaced the Angular starter welcome screen with the Yajoo site shell and home page.
- Registered page routes and page titles in `src/app/app.routes.ts`.
- Kept the existing Angular dependencies and SSR configuration.
- Switched the Angular build output to static mode, retaining prerendering while avoiding a required Node server at deployment.
- Located the original source folder as `C:\Users\ryuga\Desktop\portfolio-yoojo-main` (its on-disk name differs from the spelling in the request).
- Rebuilt Home using the original hero, about, featured-project, and photo-preview sections, with three optimized photos copied into the Angular app.
- Redesigned Contact using the original intro and form composition. As this is a static site, form submission opens a prefilled email draft rather than transmitting or storing the message.

## Errors and resolutions

- The first production build could not reach Google Fonts to inline a remote stylesheet. Removed the network-dependent font import and kept local system font fallbacks so the static build does not depend on network access.
- Latest production build passed with no errors. The Home page CSS measured 5.74 kB against a 4 kB warning budget; adjusted the component-style warning budget to 6 kB while keeping the 8 kB error limit, which matches the current stylesheet size without disabling the error guard.
- Resolved the reported unknown shared-element/import diagnostics by explicitly declaring the root app, site header, music player, and site footer as standalone components. A clean production build passes with no errors or warnings and prerenders all five routes. If VS Code continues showing the old messages, its Angular language service diagnostics may need refreshing.
- Security review: `npm audit` reported 0 known vulnerabilities in 506 packages. Reviewed app source for unsafe DOM/HTML execution, exposed secrets, and risky links. Restricted the music player's trusted YouTube resource URL to a fixed host and an 11-character video ID pattern.
- Reused the original `last call.png` image in the Home page photo strip and in Contact as a circular portrait using a head-focused crop.
- Set the Nightbus Sessions cover to the original `a film.jpg` artwork.
- Added three archive projects to the Projects page: International Katjazz Session (2025), TEDx Baneshwor (2024), and World Music Day (2023). Replaced the earlier generic sample entries with Nightbus Sessions and The Last Call.
- Imported and optimized the source images into `public/media/`; the original image folder is unchanged.
- Split Home, Gallery, Projects, Contact, Site Header, Site Footer, and Music Player into sibling `.ts`, `.html`, and `.css` files. Verified each relative template/style path with a production build after each extraction.
- Updated the Home featured-project and archive image frames to contain images without cropping, and removed hover zoom so the full image remains visible across source aspect ratios.
- Added a 404-style missing-project-link page with a project-specific apology and return link. Routed all five YouTube buttons on Projects to that page until the real video links are supplied.
- Added seven user-selected archive cards for the Ethnomusicologist collaboration, Echoes in the Valley, the Club 10X event, Music for Medicine, two separate Katjazz posters, and the Music for Health fundraiser. The initial order was increasing by date; the user later requested newest first. The Music for Health date uses 7 August 2026 per the user.
- Updated the Home About section with Yaju Acharya's full supplied biography and described Batas as an original song created by Yaju.
- Added the responsive In the Press page, with three photo placeholders and editable headline labels, and added its route and navigation link.
- Reordered Projects newest first; changed both 29 January Katjazz entries to 2026; dated The Last Call and Tulsi to 2024; renamed Nightbus Sessions to Tulsi and credited sound design to Yaju Acharya.
- Changed the Contact email and all form mail destinations to `yajuflutistacharya@gmail.com`.
- Documented the existing Home edits and user supplied media (`a.jpg`, `batas.jpg`, `DSCF6222.JPG`, and `yajoo live.JPG`) in `DOCUMENTATION.md`.
- Verified the updated site with `npm run build`; Angular completed successfully and prerendered six static routes. Browser inspection and the requested name entry could not be completed because computer-use approval timed out.
- The YouTube player cannot play Yajoo's music until a real YouTube video ID is supplied in the music player component.
- Project YouTube links remain placeholders until real channel or video links are supplied.
- Gallery panels are placeholders until photo assets are provided.
- The static Contact form depends on the visitor having an email app configured.
- Hosting security headers are not configured here; set CSP, HSTS, and appropriate Trusted Types policy at the eventual production host.

## Pending from the user

- YouTube video ID for the play button and Yajoo's channel URL.
- Real project/release names and links.
- YouTube channel/video links and actual release details remain needed.
- Gallery page can be updated with more of the original photos later.
- Preferred visual style (to decide later).
