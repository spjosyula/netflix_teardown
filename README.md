# Netflix Teardown

A modern, interactive React app that analyzes Netflix's product, user experience, and business strategy. Built with React 19, Tailwind CSS, and deployed via GitHub Pages.

## Features

- **Interactive Product Teardown:**
  - Explore Netflix's product statement, onboarding, user personas, core features, monetization, competitors, metrics, SWOT, and final thoughts via a card-based UI.
- **Modal-Based Deep Dives:**
  - Each analysis area opens as a modal with detailed content, tables, timelines, and visuals.
- **Custom UI/UX:**
  - Unique Netflix-inspired gradients, custom fonts, and responsive design.
- **Routing:**
  - React Router v6 for navigation between the landing page and analysis view.
- **Tailwind CSS Customization:**
  - Custom color palette (e.g., `netflix-red`), gradients, and utility classes.
- **Ready for GitHub Pages Deployment.**

## Technologies Used

- React 19
- Tailwind CSS 3
- React Router 6
- GitHub Pages (via `gh-pages`)

## Getting Started

### Prerequisites
- Node.js (latest LTS recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/netflix-teardown.git
   cd netflix-teardown
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
Build the app for production:
```bash
npm run build
```
The optimized build will be in the `build/` folder.

### Deploy to GitHub Pages
1. Update the `homepage` field in `package.json` to your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/netflix-teardown"
   ```
2. Deploy:
   ```bash
   npm run deploy
   ```

## Project Structure

```
netflix-teardown/
├── public/                # Static assets (images, HTML)
├── src/
│   ├── components/        # All React components (cards, modals, UI)
│   ├── styles/            # Custom CSS (gradients, fonts)
│   ├── index.js           # App entry point
│   ├── App.js             # Main app and routing
│   └── index.css          # Tailwind and global styles
├── tailwind.config.js     # Tailwind CSS config (custom colors, etc.)
├── package.json           # Project metadata and scripts
└── README.md
```

## Customization & Styling
- **Tailwind:** Edit `tailwind.config.js` for theme changes.
- **Gradients & Fonts:** See `src/styles/common.css` for custom backgrounds and font classes.
- **Assets:** Place images in `public/` and reference them in components.

## Analysis Areas (Modals)
- **Product Statement & Target Audience**
- **Onboarding & User Journey**
- **User Personas**
- **Core Feature Analysis**
- **Monetization Strategy**
- **Competitor Landscape**
- **Recommended Metrics Hypothesis**
- **SWOT Analysis**
- **Final Thoughts**

Each area is accessible via the Analysis page and opens in a modal for focused exploration.

## Scripts
- `npm start` – Run in development mode
- `npm run build` – Build for production
- `npm run deploy` – Deploy to GitHub Pages
- `npm test` – Run tests (if present)

## License
This project is for educational and demonstration purposes only. Not affiliated with or endorsed by Netflix, Inc.
