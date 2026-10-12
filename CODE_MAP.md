# Code Map — Which Part Does What?

## Project structure
```text
Harsh_Anand_Portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── IMAGE_REFERENCE_GUIDE.md
│   └── portrait-reference.svg
├── portfolio_content_blueprint.md
└── README.md
```

## `index.html` — content and structure
- **Head:** page title, mobile viewport, description, and CSS link.
- **PART A — Top navigation:** brand mark and section links.
- **PART B — Hero / introduction:** headline, short intro, calls to action, portrait placeholder, three positioning principles.
- **PART C — About Me:** personal summary and working principles.
- **PART D — Services / Expertise:** six service cards.
- **PART E — Selected Projects / Case Studies:** four editable project templates. Replace all bracketed prompts with real information.
- **PART F — Experience and Education:** timeline entries for actual roles, projects, and qualifications.
- **PART G — Working Process:** four-step process.
- **PART H — Contact:** email/social links and enquiry form.
- **PART I — Footer:** copyright year and back-to-top link.
- The bottom of the file loads `js/script.js` with `defer`.

## `css/style.css` — design and layout
- **01:** color variables, typography defaults, and global reset.
- **02:** sticky header, navigation links, mobile menu button.
- **03:** hero section, headline, CTA buttons, portrait panel, stat row.
- **04:** section spacing, headings, shared layouts.
- **05:** About layout, service cards, skill pills.
- **06:** project cards and project thumbnail color variations.
- **07:** experience / education timeline.
- **08:** numbered process cards.
- **09:** contact block, input styling, footer.
- **10:** tablet and mobile breakpoints plus reduced-motion accessibility.
- Change the variables in `:root` near the top to update the global colors.

## `js/script.js` — interactions
- **01:** opens/closes the mobile navigation.
- **02:** inserts the current year into the footer.
- **03:** reveals cards and sections as they scroll into view.
- **04:** validates the contact fields through browser requirements and prepares a `mailto:` email.
- Replace `YOUR_EMAIL@example.com` in the contact-form code before publishing. This is not a server-side form.

## How to preview
Open `index.html` in Chrome, Edge, Firefox, or Safari. Keep the folder structure intact so CSS and JS paths continue to work.
