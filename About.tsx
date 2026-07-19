import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import Home from './pages/Home';
import Products from './pages/Products';
import Dealers from './pages/Dealers';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [initialCategory, setInitialCategory] = useState<string | undefined>(undefined);
  const [prefillData, setPrefillData] = useState<{ title: string; code: string } | null>(null);
  
  // Manage language mode at the application level
  const [langMode, setLangMode] = useState<'bilingual' | 'en-only'>(() => {
    const saved = localStorage.getItem('gs-lang-mode');
    return (saved === 'en-only' ? 'en-only' : 'bilingual');
  });

  // Keep body class sync'd for legacy CSS selectors (e.g. .hide-tamil)
  useEffect(() => {
    if (langMode === 'en-only') {
      document.body.classList.add('hide-tamil');
    } else {
      document.body.classList.remove('hide-tamil');
    }
    localStorage.setItem('gs-lang-mode', langMode);
  }, [langMode]);

  // Handle page transitions smoothly and support hash/query param logic
  const handlePageChange = (pageRoute: string) => {
    if (pageRoute.startsWith('products')) {
      const urlParams = new URLSearchParams(pageRoute.includes('?') ? pageRoute.split('?')[1] : '');
      const cat = urlParams.get('category');
      setInitialCategory(cat || undefined);
      setCurrentPage('products');
    } else {
      setInitialCategory(undefined);
      setCurrentPage(pageRoute);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pre-fill enquiry values and navigate directly to contact form
  const handleEnquireProduct = (productName: string, productCode: string) => {
    setPrefillData({ title: productName, code: productCode });
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render active layout page component
  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onPageChange={handlePageChange}
            onEnquireProduct={handleEnquireProduct}
          />
        );
      case 'products':
        return (
          <Products
            onPageChange={handlePageChange}
            onEnquireProduct={handleEnquireProduct}
            initialCategory={initialCategory}
          />
        );
      case 'dealers':
        return <Dealers />;
      case 'gallery':
        return (
          <Gallery
            onPageChange={handlePageChange}
            onEnquireProduct={handleEnquireProduct}
          />
        );
      case 'about':
        return <About onPageChange={handlePageChange} />;
      case 'contact':
        return <Contact prefillData={prefillData} />;
      default:
        return (
          <Home
            onPageChange={handlePageChange}
            onEnquireProduct={handleEnquireProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-800 antialiased font-sans">
      {/* Universal Sticky Header */}
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        langMode={langMode}
        setLangMode={setLangMode}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Universal Footer */}
      <Footer onPageChange={handlePageChange} />

      {/* Persistent Call/WhatsApp/Back-to-Top Channels */}
      <FloatingCTAs />
    </div>
  );
}
