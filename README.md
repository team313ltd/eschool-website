# School Showcase — updated advertising website

## Run locally
Extract the entire folder and double-click `index.html` in Chrome, Edge or Firefox. All pages are static; there are no backend requirements.

## Public pages
- `index.html` — homepage with all five roles (Principal Portal correctly linked)
- `demos.html` — dedicated interactive demo directory
- `features.html` — included package scope
- `how-it-works.html` — Google Form → setup → go live → handover training → support
- `faq.html` — separate FAQs page
- `contact.html` — enquiry page

## Interactive walkthroughs
- `admin.html` — Principal Portal
- `student.html` — Student App
- `parent.html` — Parent App
- `teacher.html` — Teacher App
- `portal.html` — Teacher Portal

All pages share precisely the same header/footer markup, links and stylesheet. Navigation includes a responsive mobile menu.

## IMPORTANT: Before public advertising
1. Configure actual contact destinations in `site-config.js` (`contactEmail`, `whatsappNumber`, or `schoolEnquiryFormUrl`). No email, phone or onboarding form link was supplied, so none was invented. The enquiry form currently copies the enquiry text when no email is configured; it does NOT pretend to submit it.
2. Replace generic School Showcase placeholder branding with the brand name/logo and add an appropriate privacy notice, business identity, and terms for your deployment.
3. Verify all advertised features against the production installation and legal rights to publish any copied product icons.
4. The website uses sample data. It is a clickable product simulation, not real school software.
5. Setup Google Form is provided privately after onboarding. No external form URL was invented.

## Files preserved
Original `app.js` interactive demo logic and `assets/*.svg` icons are retained. Desktop Principal/Teacher Portal fixed preview sizes are retained. Only the outdated text and front-end navigation/layout were updated.

## Package scope
The public pages focus strictly on included features. They do not advertise excluded add-ons.
