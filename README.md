# 📚 Bhagavad Gita Web — Svelte Recreation

<div align="center">

![Bhagavad Gita Banner](screenshots/banner.png)

**A faithfully recreated version of the Bhagavad Gita page from [sanskrit.ie](https://www.sanskrit.ie/gita.php), built with modern web technologies.**

[![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

| Feature | Status |
|---------|:------:|
| Fully recreated UI (pixel-perfect layout) | ✅ |
| API integration for live verse data | ✅ |
| Responsive grid of 18 chapters | ✅ |
| Verse reader with audio + QR + translation | ✅ |
| Adjustable font size | ✅ |
| Projector / Reading mode | ✅ |
| Smooth UX, scroll to top on chapter load | ✅ |

---

## 🎯 Visual Comparison

### Homepage - Hero Section

<table>
  <tr>
    <th>Original Website</th>
    <th>Recreated Version</th>
  </tr>
  <tr>
    <td><img src="screenshots/original-hero.png" alt="Original Hero Section" width="100%"/></td>
    <td><img src="screenshots/recreated-hero.png" alt="Recreated Hero Section" width="100%"/></td>
  </tr>
</table>

*The hero section features the iconic Arjuna-Krishna chariot scene with an open book representing the Gita chapters below.*

---

### Chapter Grid Layout

<table>
  <tr>
    <th>Original Website</th>
    <th>Recreated Version</th>
  </tr>
  <tr>
    <td><img src="screenshots/original-chapters-1.png" alt="Original Chapters 1-7" width="100%"/></td>
    <td><img src="screenshots/recreated-chapters-1.png" alt="Recreated Chapters 1-7" width="100%"/></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><em>Chapters 1-7 displayed as diamond-shaped cards with background imagery</em></td>
  </tr>
</table>

<table>
  <tr>
    <th>Original Website</th>
    <th>Recreated Version</th>
  </tr>
  <tr>
    <td><img src="screenshots/original-chapters-2.png" alt="Original Chapters 8-18" width="100%"/></td>
    <td><img src="screenshots/recreated-chapters-2.png" alt="Recreated Chapters 8-18" width="100%"/></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><em>Chapters 8-18 with consistent styling and hover effects</em></td>
  </tr>
</table>

---

### Verse Reading Interface

<table>
  <tr>
    <th>Original Website</th>
    <th>Recreated Version</th>
  </tr>
  <tr>
    <td><img src="screenshots/original-verse.png" alt="Original Verse Display" width="100%"/></td>
    <td><img src="screenshots/recreated-verse.png" alt="Recreated Verse Display" width="100%"/></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><em>Chapter 1 verse display with Sanskrit text, transliteration, translation, and audio controls</em></td>
  </tr>
</table>

*Features include: font size adjustment, projector mode toggle, verse navigation, and integrated audio playback*

---

### Audio Chapter Selection

<table>
  <tr>
    <th>Original Website</th>
    <th>Recreated Version</th>
  </tr>
  <tr>
    <td><img src="screenshots/original-audio.png" alt="Original Audio Chapters" width="100%"/></td>
    <td><img src="screenshots/recreated-audio.png" alt="Recreated Audio Chapters" width="100%"/></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><em>Scroll-style chapter selector for audio recitation access</em></td>
  </tr>
</table>

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Svelte + Vite |
| **Styling** | Custom CSS with responsive design |
| **Data Source** | Sanskrit.ie Geeta API |
| **Assets** | PNG images for hero section |
| **Deployment** | Vercel / Netlify (recommended) |

---

## 📂 Project Structure

```
bhagavad-gita-svelte/
│
├── src/
│   ├── assets/
│   │   ├── gita_book.png
│   │   ├── gita_banner.png
│   │   └── chapter_images/
│   │
│   ├── components/
│   │   ├── NavBar.svelte
│   │   ├── Hero.svelte
│   │   ├── ChapterGrid.svelte
│   │   ├── ChapterSidebar.svelte
│   │   ├── VerseList.svelte
│   │   ├── Footer.svelte
│   │   └── BottomBar.svelte
│   │
│   ├── lib/
│   │   ├── api.js
│   │   └── stores.js
│   │
│   └── App.svelte
│
├── screenshots/
│   ├── original-hero.png
│   ├── recreated-hero.png
│   ├── original-chapters-1.png
│   ├── recreated-chapters-1.png
│   ├── original-chapters-2.png
│   ├── recreated-chapters-2.png
│   ├── original-verse.png
│   ├── recreated-verse.png
│   ├── original-audio.png
│   └── recreated-audio.png
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### 🔧 Local Development Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/<your-username>/bhagavad-gita-svelte.git

# 2️⃣ Navigate to project directory
cd bhagavad-gita-svelte

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run development server
npm run dev
```

➡️ The app will be available at: **http://localhost:5173**

### 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

---

## 🔌 API Integration

Data is fetched from the original website's API:

```
https://www.sanskrit.ie/api/geeta.php?q=<chapter_number>
```

### Example API Response:

```javascript
// GET https://www.sanskrit.ie/api/geeta.php?q=1
{
  "chapter": 1,
  "verses": [
    {
      "verse": 1,
      "sanskrit": "धृतराष्ट्र उवाच...",
      "transliteration": "dhṛtarāṣṭra uvāca...",
      "translation": "Dhritarashtra said...",
      "audio_url": "..."
    }
    // ... more verses
  ]
}
```

⚠️ **Note:** The API can sometimes be slow or offline. "Data Not Found" may appear occasionally.

---

## 🎨 Key Features Breakdown

### 🏛️ Hero Section
- Authentic chariot scene with Arjuna and Krishna
- Open book visual element representing the 18 chapters
- Smooth scroll to chapter grid

### 📖 Chapter Grid
- 18 chapters displayed as diamond-shaped cards
- Hover effects with subtle transformations
- Click to load chapter verses

### 📝 Verse Display
- **Sanskrit text** with proper Devanagari rendering
- **Transliteration** in Latin script
- **English translation**
- **Font size slider** (12px - 28px)
- **Projector mode** for presentations
- **Audio playback** for each verse
- **Navigation** between verses

### 🎧 Audio Section
- Scroll-style chapter selector
- Integrated audio player
- Full chapter recitation support

---

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

---

## 🔍 Technical Highlights

### ✅ Faithful Recreation
- Pixel-perfect UI matching original design
- Authentic color scheme and typography
- Preserved user experience patterns

### ⚡ Performance
- Vite for fast development and builds
- Lazy loading of verse content
- Optimized image assets

### 🎯 Code Quality
- Component-based architecture
- Reactive state management with Svelte stores
- Clean separation of concerns
- Reusable utility functions

---

## 🌍 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder via Netlify dashboard
# or use Netlify CLI
netlify deploy --prod
```

---

## 🙏 Acknowledgments

- **Original Content:** [sanskrit.ie](https://www.sanskrit.ie/)
- **API Provider:** Sanskrit.ie Geeta API
- **Inspiration:** Preserving ancient wisdom through modern technology
- **Development:** Created as part of internship evaluation

---

## 📧 Contact

**Developer:** [Your Name]  
**Email:** your.email@example.com  
**LinkedIn:** [Your LinkedIn Profile]  
**Portfolio:** [Your Portfolio Website]

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔮 Future Enhancements

- [ ] Add chapter summaries
- [ ] Implement verse bookmarking
- [ ] Add search functionality
- [ ] Support for multiple translations
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) features
- [ ] Offline support

---

<div align="center">

**Made with ❤️ and devotion to preserving ancient wisdom**

⭐ Star this repo if you found it helpful!

</div>
