# eSchool Interactive Showcase — V2

A standalone, browser-based walkthrough designed to **sell a fully managed school system**. It is intentionally separated from the actual Laravel/eSchool installation and database.

## Open locally

1. Extract the ZIP fully.
2. Open `index.html` in Chrome or Edge.
3. Select Student App, Parent App, Teacher App, or Teacher Portal.
4. Click any feature in the left rail; interact with the sample screen; use Next/Previous.

No installation, QR codes, credentials, PHP, npm, or MySQL are required. The files should be kept together so icons, CSS and JavaScript resolve correctly. You can deploy the folder to any static web server.

## What is based on the source package

Analyzed user-provided `eSchool v-3.5.0`, including `Flutter App Codes 3.5.0`, eSchool student/parent, eSchoolTeacher, Laravel PHP panel, and documentation. Both Flutter apps define primary `#22577A`, white surfaces and green accents; select SVG icons in `assets/` were copied from the uploaded product. Feature structure and screen terminology follow real Dart UI screens, navigation and Laravel teacher-dashboard templates.

## What this version is and is not

- **It is:** A source-informed HTML/CSS/JS simulation (47 walkthrough screens across four experiences) with fictional Crescent Academy data.
- **It is not:** The actual compiled Flutter UI, a pixel-perfect render, a production student portal, or live school accounts.
- Example actions (attendance, homework submission, publishing, approvals) modify a temporary JavaScript demo state or display feedback only. No actual database, emails, payments, or announcements are changed.
- The full UI can be visually fine-tuned screen by screen against screenshots from a running Flutter app. Fonts are system fallbacks offline; source font files are intentionally not redistributed.

## Access model

School supplies details and requests. The provider handles school setup, configuration, and administrative changes. School-facing tools: Student App, Parent App, Teacher App, and permission-limited Teacher Portal only. **Do not provide the School Admin or Super Admin panel to schools.** Real deployment must enforce these boundaries in Laravel permissions; hiding the administrative panels from this marketing website alone is not a security measure.

## Files

`index.html` main marketing page

`student.html` interactive Student App

`parent.html` interactive Parent App

`teacher.html` interactive Teacher App

`portal.html` interactive Teacher Portal

`style.css`, `app.js`, `assets/*.svg` styles, interactions, product icons

`FEATURE_MAP.md` source-informed module inventory

## Before public launch

Confirm the demo screens against the installed version, select service branding and a domain, add working contact/onboarding routes, write original pricing/terms/privacy, review accessible mobile layout, verify source icon redistribution terms, and test on actual target browsers.
