# Image Reference Guide

This portfolio uses CSS-built project artwork and a portrait placeholder so it runs without external image dependencies. Replace these with your own approved images when you have them.

## Image slots in the website

### 1. Professional portrait
- **Location in code:** `index.html` → `PART B — HERO / INTRODUCTION` → `<div class="portrait">`.
- **Recommended file:** `assets/harsh-anand-portrait.jpg`
- **Recommended image:** clear professional headshot, square or 4:5 crop, simple background, good lighting.
- **How to add:** replace the inner `.placeholder` block with:
  ```html
  <img class="profile-photo" src="assets/harsh-anand-portrait.jpg" alt="Harsh Anand, digital marketing professional">
  ```
  Then add this CSS to `css/style.css`:
  ```css
  .profile-photo { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; border-radius: 24px; }
  ```

### 2. Project case study thumbnails
- **Location in code:** `index.html` → `PART E — SELECTED PROJECTS / CASE STUDIES` → each `<article class="project">`.
- **Current appearance:** four CSS-generated abstract art panels using `.projectart`, `.blue`, `.orange`, and `.purple`.
- **Suggested files:**
  - `assets/project-meta-ads.jpg` — Meta Ads Manager screenshot or anonymized campaign creative.
  - `assets/project-social-media.jpg` — social content grid or content calendar.
  - `assets/project-campaign-concept.jpg` — campaign key visual / sample creative.
  - `assets/project-landing-page.jpg` — website or landing-page screenshot.
- **Important:** use your own work or images you have permission to display. Blur private client data and label concept work clearly.

### 3. Optional supporting images
- `assets/meta-ads-dashboard.jpg` — anonymized results screenshot.
- `assets/social-content-grid.jpg` — Instagram post/Reels thumbnails.
- `assets/website-mockup.jpg` — responsive website screenshot.

## Visual reference direction
- Premium, minimal, editorial layout.
- Deep charcoal background `#101211`, soft off-white text `#F4F4ED`, electric lime `#C8FF55`.
- Real work screenshots are stronger than generic stock images.
- Keep thumbnails consistent in aspect ratio (16:9 is a good default).

## Image attribution and truthfulness
Do not present stock images or concept work as client work. Do not publish private dashboards, customer information, client names, or logos without permission.
