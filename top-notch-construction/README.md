# Top Notch Construction Website

A modern, professional construction company website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Orange and space black color scheme
- 📱 Fully responsive design
- ⚡ Lightning-fast with Vite
- 🎯 Modern glassmorphic UI elements
- 🔧 Easy to customize
- 🚀 Ready to deploy

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd top-notch-construction
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

## Project Structure

```
top-notch-construction/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors

The color scheme uses:
- Orange: `#f97316` (orange-500)
- Space Black: `#09090b` (zinc-950)

Update these in `tailwind.config.js` if needed.

### Content

All content can be edited in `src/App.jsx`:
- Services
- Projects
- Testimonials
- Contact information

### Fonts

The site uses:
- **Bebas Neue** - Headers and titles
- **Oswald** - Body text

These are loaded from Google Fonts in `index.html`.

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import to Vercel
3. Framework preset: Vite
4. Deploy!

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```
3. Run: `npm run deploy`

## Technologies

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React (Icons)

## License

MIT

## Support

For issues or questions, contact: info@topnotchconstruction.com
