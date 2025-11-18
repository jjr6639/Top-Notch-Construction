# 🏗️ Top Notch Construction

A modern, responsive construction company website built with React, Vite, and Tailwind CSS. Features a sleek design with orange and space black color scheme, smooth animations, and a contemporary developer-inspired aesthetic.

![Top Notch Construction](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- 🎨 **Modern UI/UX** - Contemporary design with glassmorphism and gradient effects
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Engaging hover effects and transitions
- 🌐 **Single Page Application** - Seamless navigation with anchor links
- 💼 **Professional Sections**:
  - Hero section with call-to-action
  - Services showcase
  - Project portfolio
  - Client testimonials
  - Contact form
  - Quick navigation dropdown

## 🚀 Demo

[Live Demo](#) <!-- Add your deployed link here -->

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](https://via.placeholder.com/800x400?text=Add+Your+Screenshot)

### Mobile View
![Mobile Screenshot](https://via.placeholder.com/400x800?text=Add+Your+Screenshot)

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 7.2.2
- **Styling:** Tailwind CSS 3.4.17
- **Icons:** Lucide React
- **Language:** JavaScript (ES6+)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.19.0 or v22.12.0+)
- **npm** (v10.0.0+)
- **Git**

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/top-notch-construction.git
cd top-notch-construction
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🚢 Deployment

### Deploy to Netlify

#### Option 1: Drag & Drop
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist/` folder

#### Option 2: Git Integration
1. Push your code to GitHub
2. Sign in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Sign in to [Vercel](https://vercel.com/)
3. Click "Add New" → "Project"
4. Import your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://YOUR-USERNAME.github.io/top-notch-construction",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/top-notch-construction/',
})
```

4. Deploy:
```bash
npm run deploy
```

## 📂 Project Structure

```
top-notch-construction/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles with Tailwind directives
├── .gitignore
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── README.md
```

## 🎨 Customization

### Colors

The website uses an orange and space black theme. To customize colors, search and replace in `src/App.jsx`:

- **Primary Orange:** `orange-500`, `orange-400`, `orange-600`
- **Accent Red:** `red-500`, `red-600`
- **Background:** `zinc-900`, `zinc-950`, `black`

### Content

Update the following sections in `src/App.jsx`:

- **Company Name:** Search for "Top Notch Construction" and replace
- **Contact Info:** Update phone, email, and address in the contact section
- **Services:** Modify the `services` array
- **Projects:** Update the `projects` array with your project images
- **Testimonials:** Edit the `testimonials` array

### Images

Replace the Unsplash image URLs with your own:
```javascript
// Example in the projects array
image: 'https://your-image-url.com/image.jpg'
```

## 🧩 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |


## 👤 Author

Jordan J Runyon

- GitHub: [@jjr6639](https://github.com/jjr6639)
- Email: jjr6639@psu.edu

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Unsplash](https://unsplash.com/) - High-quality stock images

## 📞 Support

If you have any questions or need help, please open an issue or contact me directly.

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
