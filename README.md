# WaterSpooner.github.io

Personal website for Max Spooner, hosted on GitHub Pages.

## Tech

- Astro
- TypeScript
- Biome for linting and formatting
- GitHub Actions for deployment

## Project Structure

- public: static assets such as the favicon
- src: site source code (layouts and pages)
- astro.config.mjs: Astro configuration
- biome.json: Biome configuration
- .github/workflows: deployment workflow

## Getting Started

- Clone the repo
- Install dependencies:

```
npm install
```

- Start the local dev server at localhost:4321:

```
npm run dev
```

## Commands

- Start the dev server:

```
npm run dev
```

- Build the production site to ./dist:

```
npm run build
```

- Preview the build locally:

```
npm run preview
```

## Deployment

- Pushes to the main branch are built and deployed to GitHub Pages automatically by the GitHub Actions workflow