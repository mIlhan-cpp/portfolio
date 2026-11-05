
# Milhan Khan portfolio

npm install && npm run dev      # local
npm run build                   # production build in dist/

A responsive personal portfolio showcasing my work as an AI Engineer and Full-Stack Developer. It brings together selected projects, professional experience, technical skills, and contact information in a dark, atmospheric interface.

## Highlights

- Intro/hero section with portfolio navigation and smooth motion.
- About and skills sections highlighting development and AI/ML experience.
- Experience timeline and selected project cards.
- Contact section with relevant links.
- Dark blue visual theme with subtle purple-blue textured gradients, including dedicated backgrounds for **Experience** and **Selected Work**.
- Responsive layout for desktop and mobile.
- Resume PDF available at `public/Milhan_Khan.pdf`.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** for development and production builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Run Locally

Requirements: Node.js (LTS recommended) and npm.

```bash
# Clone the repository
git clone <your-repository-url>
cd milhan-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

The production-ready site is generated in the `dist/` directory.

## Project Structure

```text
milhan-portfolio/
├── public/                 # Static assets and resume PDF
├── src/
│   ├── components/         # Page sections and reusable UI
│   ├── data/               # Projects, experience, and skills content
│   ├── hooks/              # Reusable React hooks
│   ├── styles/              # Global styles and theme
│   ├── App.tsx              # Main application layout
│   └── main.tsx             # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Updating Content

- **Projects:** edit `src/data/projects.ts` and update each project's title, description, technologies, and GitHub/live links.
- **Experience:** edit `src/data/experience.ts`.
- **Skills:** edit `src/data/skills.ts`.
- **Resume:** replace `public/Milhan_Khan.pdf` with the updated PDF, keeping the same filename unless the resume link is updated too.
- **Backgrounds and styling:** update the relevant assets in `public/` and styles in `src/styles/globals.css`.

## Deployment

Build the project with `npm run build`, then deploy the generated `dist/` folder to a static hosting provider. For Vercel, import the Git repository and use **Vite** as the framework preset; the build command is `npm run build` and the output directory is `dist`.

---

Built by **Milhan Khan**.
