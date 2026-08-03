# Arik Hasan — Portfolio

> My personal portfolio site, presenting my product management and software work, experience, and projects.

![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

## Overview

A fast, single-page portfolio built with React and Tailwind CSS. It highlights my experience, competencies, projects, education, and skills, with a downloadable resume and direct contact links. The design is a dark, modern layout with smooth section navigation.

**Live site:** https://arikhasan.vercel.app/

## Tech Stack

| Area | Technology |
|------|------------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Linting | ESLint 9 |
| Hosting | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+

### Installation & Development

```bash
# Clone the repo
git clone https://github.com/arikhasan2210/Portfolio-Web-Page.git
cd Portfolio-Web-Page

# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```
Portfolio-Web-Page/
├── index.html            # HTML entry point + SEO/Open Graph meta
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Full portfolio (all sections + content)
│   ├── App.css
│   ├── index.css          # Tailwind + global styles
│   └── assets/            # Images (portrait, hero)
├── public/                # Static assets (favicon, resume.pdf, icons)
├── vite.config.js
└── eslint.config.js
```

## Sections

- **Hero** — intro, focus areas, and quick status (current role, availability)
- **Highlights** — key metrics from my work
- **About** — background and approach
- **Experience** — professional roles and impact
- **Projects** — featured work
- **Education** — degree, honors, and relevant coursework
- **Skills & Certifications** — product, technical, and certification lists
- **Contact** — email, LinkedIn, GitHub, and resume links

## Deployment

The site is deployed on Vercel. Any push to the main branch triggers an automatic production deployment. To deploy your own copy, import the repository into Vercel; it auto-detects the Vite configuration.

## Author

**Arik Hasan** — [Portfolio](https://arikhasan.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/arik-hasan) · [GitHub](https://github.com/arikhasan2210)
