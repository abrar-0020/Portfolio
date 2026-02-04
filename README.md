# Premium Portfolio Website — Abrar Pasha

A modern, elegant portfolio website inspired by louiscuenot.com, built with Next.js, Three.js, and Framer Motion.

## 🎨 Design Philosophy

This portfolio embodies:
- **Editorial Minimalism**: Clean layouts with strong typography
- **Subtle 3D**: Atmospheric Three.js animations that enhance without overwhelming
- **Premium Feel**: High-end creative technologist aesthetic
- **Smooth Interactions**: Framer Motion-powered scroll animations and micro-interactions

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── 3d/
│   │   └── Scene3D.tsx     # Three.js 3D background
│   ├── animations/
│   │   └── Motion.tsx      # Reusable animation components
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Experience.tsx  # Experience timeline
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── Contact.tsx     # Contact section
│   └── ui/
│       ├── ScrollProgress.tsx  # Scroll progress bar
│       └── ScrollToTop.tsx     # Scroll to top button
├── hooks/
│   └── useScrollEffects.ts # Custom scroll hooks
├── tailwind.config.js      # Tailwind configuration
├── next.config.mjs         # Next.js configuration
└── package.json
```

## 🎯 Key Features

### 1. **3D Animated Hero**
   - Floating abstract spheres using React Three Fiber
   - Smooth, subtle movements
   - Optimized performance

### 2. **Scroll Animations**
   - Section reveals with Framer Motion
   - Parallax effects
   - Scroll progress indicator

### 3. **Interactive Projects**
   - Hoverable project cards
   - Expandable project details modal
   - Smooth transitions

### 4. **Responsive Design**
   - Mobile-first approach
   - Fluid typography
   - Optimized for all screen sizes

### 5. **SEO Optimized**
   - Semantic HTML
   - Meta tags
   - Open Graph support

## 🎨 Color Palette

```css
Primary Background: #FFFFFF
Soft Background:    #F7F7F7
Primary Text:       #0A0A0A
Secondary Text:     #555555
Borders/Dividers:   #EAEAEA
Accent:             #3B82F6
```

## 🌐 Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Environment Variables (if needed)
If you add API integrations later:
```bash
# In Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_API_KEY=your_key_here
```

## 🔧 Customization

### Update Personal Information
Edit the content in:
- [components/sections/About.tsx](components/sections/About.tsx)
- [components/sections/Experience.tsx](components/sections/Experience.tsx)
- [components/sections/Projects.tsx](components/sections/Projects.tsx)
- [components/sections/Contact.tsx](components/sections/Contact.tsx)

### Modify Colors
Edit [tailwind.config.js](tailwind.config.js):
```js
colors: {
  primary: {
    accent: '#YOUR_COLOR',
    // ...other colors
  }
}
```

### Adjust 3D Scene
Customize [components/3d/Scene3D.tsx](components/3d/Scene3D.tsx):
- Change sphere colors
- Adjust positions
- Modify animation speeds

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Three.js optimized for 60fps

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

**Abrar Pasha**
- GitHub: [@abrar-0020](https://github.com/abrar-0020)
- LinkedIn: [abrar-pasha](https://linkedin.com/in/abrar-pasha)
- Location: Bangalore, India

---

Built with ❤️ using Next.js, Three.js, and Framer Motion
