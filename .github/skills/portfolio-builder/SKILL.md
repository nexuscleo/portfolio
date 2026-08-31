---
name: portfolio-builder
description: "Use when creating, improving, or reviewing a personal portfolio website built with HTML, CSS, and JavaScript. Includes landing page structure, responsive sections, project cards, contact form behavior, accessibility, and polish for a modern developer portfolio."
---

# Portfolio Builder

## Purpose

Create or refine a personal portfolio website that presents a developer's profile, projects, skills, and contact information clearly and professionally. This workflow is optimized for single-page portfolio sites built with semantic HTML, responsive CSS, and light JavaScript interactivity.

## Workflow

### 1. Understand the portfolio goal

Start by identifying the audience and purpose:
- who the portfolio is for: recruiters, clients, collaborators, or employers
- what should be highlighted: skills, projects, resume, process, or contact
- whether the site should be a simple landing page or a fuller single-page experience

Decision point:
- If the project already exists, improve the current structure instead of replacing it.
- If it is new, define the main sections first: home, about, projects, contact.

### 2. Define the core sections

Create a layout around the essential sections:
- hero with name, role, CTA links
- about section with summary and skill tags
- projects section with cards or gallery
- contact section with form and social links
- footer with copyright and dynamic year

Quality check:
- The page should communicate the person's value proposition in under a few seconds.
- Navigation should feel clear and easy to scan.

### 3. Build accessible and semantic HTML

Use semantic structure and meaningful labels:
- header, nav, main, section, footer
- heading hierarchy from h1 to h2 appropriately
- descriptive alt text for profile images and project visuals
- form labels and aria-live status for validation feedback

Decision point:
- If the site needs a mobile menu, include a toggle button and a simple JS interaction.
- If the content is static, prefer semantic markup over unnecessary wrappers.

### 4. Style for responsiveness and clarity

Apply modern CSS patterns:
- mobile-first design
- consistent spacing and typography
- clear CTA buttons and hover states
- card grids for projects
- responsive breakpoints for tablet and desktop
- strong contrast and readable fonts

Quality check:
- The page remains readable on mobile, tablet, and desktop.
- The layout should look intentional and not overcrowded.

### 5. Add light interactivity where it matters

Use JavaScript only for meaningful user experience improvements:
- mobile navigation toggle
- dynamic footer year
- project gallery generation from data
- contact form validation and success/error feedback

Decision point:
- If there is no backend, simulate sending the form without breaking the UX.
- If data is repeated, use a JS array or object instead of manually repeating markup.

### 6. Validate the result

Before finishing, confirm the portfolio is complete and polished:
- page loads without console errors
- navigation works across sections
- mobile menu opens and closes correctly
- call-to-action buttons lead to the right place
- contact form responds correctly to empty or invalid input
- visuals and spacing feel balanced and professional

Completion criteria:
- The portfolio communicates identity and capability clearly.
- The design feels modern, clean, and responsive.
- It is easy for a recruiter or client to contact the person.

### 7. Document the project

Update the project documentation with:
- short overview of the portfolio
- live demo or repository link
- tech stack used
- local run instructions
- author credits and date

Decision point:
- If the site is a portfolio for a specific person, include a concise professional summary rather than generic marketing copy.

## Branching guide

### If the site is brand new
- create clean page sections first
- add styling and spacing
- then add interaction and content polish

### If the site already exists
- audit the current structure
- fix accessibility and responsiveness issues
- improve calls to action, content hierarchy, and contact flow

### If the user wants a more advanced portfolio
- add project filtering, animated sections, or dark mode
- keep interactions lightweight and user-friendly
- avoid overcomplicating layout or code structure

## Quality bar

A strong portfolio project should have all of the following:
- clear purpose and audience alignment
- polished visual hierarchy
- responsive layout across devices
- accessible HTML and form labels
- functional interactivity without visual clutter
- concise documentation for local use and deployment

## Example prompts to use this skill

- Build a modern personal portfolio with sections for home, about, projects, and contact.
- Improve this portfolio site to be more responsive on mobile devices.
- Add project cards and contact form validation to the current portfolio.
- Review the portfolio for accessibility, semantics, and UX improvements.
