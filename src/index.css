@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Noto+Sans+Tamil:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Outfit", ui-sans-serif, system-ui, sans-serif;
  --font-tamil: "Noto Sans Tamil", "Inter", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;

  /* Sleek Interface Theme Color Overrides - Extracted from Spiritual Meditator Logo */
  --color-brand-dark: #120303;
  --color-brand-blue-dark: #1f0808;
  --color-brand-royal: #991b1b;
  --color-brand-electric: #dc2626;
  --color-brand-accent-orange: #ea580c;
  --color-brand-accent-yellow: #fbbf24;
  --color-brand-light: #fdfafb;

  /* Force standard gray classes to resolve to modern cool slates */
  --color-gray-50: #f8fafc;
  --color-gray-100: #f1f5f9;
  --color-gray-200: #e2e8f0;
  --color-gray-300: #cbd5e1;
  --color-gray-400: #94a3b8;
  --color-gray-500: #64748b;
  --color-gray-600: #475569;
  --color-gray-700: #334155;
  --color-gray-800: #1e293b;
  --color-gray-900: #0f172a;
  --color-gray-950: #020617;
}

/* Base custom styles for premium transitions and scrolling */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: #ffffff;
  color: #1e293b;
  overflow-x: hidden;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Infinite marquee or animations */
@keyframes infinite-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-infinite-scroll {
  animation: infinite-scroll 40s linear infinite;
}

.animate-infinite-scroll:hover {
  animation-play-state: paused;
}

/* Glassmorphism utility */
.glass-nav {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
}

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.5);
}

/* Reveal transition utilities */
.reveal-fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-fade-in.active {
  opacity: 1;
  transform: translateY(0);
}

/* Highlight badge */
.badge-pulse {
  position: relative;
}
.badge-pulse::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  border: 1px solid var(--color-brand-accent-orange);
  animation: badge-pulse-anim 2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  opacity: 1;
}

@keyframes badge-pulse-anim {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.4); opacity: 0; }
}
