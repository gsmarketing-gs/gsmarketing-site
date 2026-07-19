import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  langMode: 'bilingual' | 'en-only';
  setLangMode: (mode: 'bilingual' | 'en-only') => void;
}

export default function Header({ currentPage, onPageChange, langMode, setLangMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onPageChange(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLinkClass = (page: string) => {
    return currentPage === page
      ? 'text-brand-royal font-semibold hover:text-brand-electric transition-colors flex flex-col'
      : 'text-gray-600 font-medium hover:text-brand-royal transition-colors flex flex-col';
  };

  const getMobileLinkClass = (page: string) => {
    return currentPage === page
      ? 'text-brand-royal font-bold text-lg border-l-4 border-brand-royal pl-3 py-1 flex justify-between items-center'
      : 'text-gray-600 font-medium text-lg pl-4 py-1 flex justify-between items-center';
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100 h-20 flex items-center ${
        isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="index.html"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center space-x-3"
            id="header-logo-link"
            style={{ width: '185.2px', height: '59px' }}
          >
            <img
              src="/images/logo.jpg"
              alt="GSmarketing Logo"
              className="h-12 w-12 rounded-xl object-cover border border-orange-500/20 shadow-md"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-brand-royal leading-none">
                GSmarketing
              </span>
              <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase leading-tight mt-0.5">
                Dealer Network
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="index.html" onClick={(e) => handleLinkClick(e, 'home')} className={getLinkClass('home')}>
              <span>Home</span>
              <span className="lang-tamil text-[10px] font-tamil font-normal -mt-1">முகப்பு</span>
            </a>
            <a href="products.html" onClick={(e) => handleLinkClick(e, 'products')} className={getLinkClass('products')}>
              <span>Products</span>
              <span className="lang-tamil text-[10px] font-tamil font-normal -mt-1">தயாரிப்புகள்</span>
            </a>
            <a href="dealers.html" onClick={(e) => handleLinkClick(e, 'dealers')} className={`${getLinkClass('dealers')} relative group`}>
              <span className="flex items-center">
                Dealers
                <span className="absolute -top-3 -right-6 bg-brand-accent-orange text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full badge-pulse">
                  WANTED
                </span>
              </span>
              <span className="lang-tamil text-[10px] font-tamil font-normal -mt-1">டீலர்கள் தேவை</span>
            </a>
            <a href="gallery.html" onClick={(e) => handleLinkClick(e, 'gallery')} className={getLinkClass('gallery')}>
              <span>Gallery</span>
              <span className="lang-tamil text-[10px] font-tamil font-normal -mt-1">தொகுப்பு</span>
            </a>
            <a href="about.html" onClick={(e) => handleLinkClick(e, 'about')} className={getLinkClass('about')}>
              <span>About Us</span>
              <span className="lang-tamil text-[10px] font-tamil font-normal -mt-1">எங்களைப் பற்றி</span>
            </a>
            <a href="contact.html" onClick={(e) => handleLinkClick(e, 'contact')} className={getLinkClass('contact')}>
              <span>Contact</span>
              <span className="lang-tamil text-[10px] font-tamil font-normal -mt-1">தொடர்பு</span>
            </a>
          </nav>

          {/* Right Side: Language Toggle & Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="bg-gray-100 p-1 rounded-lg flex items-center space-x-1 border border-gray-200">
              <button
                onClick={() => setLangMode('bilingual')}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-all cursor-pointer ${
                  langMode === 'bilingual'
                    ? 'bg-brand-electric text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Bilingual
              </button>
              <button
                onClick={() => setLangMode('en-only')}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-all cursor-pointer ${
                  langMode === 'en-only'
                    ? 'bg-brand-electric text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                English
              </button>
            </div>

            <a
              href="dealers.html"
              onClick={(e) => handleLinkClick(e, 'dealers')}
              className="px-5 py-2.5 bg-brand-accent-orange text-white text-sm font-semibold rounded-lg hover:bg-brand-accent-orange/90 transition-all shadow-md hover:shadow-lg flex flex-col items-center"
            >
              <span>Become a Dealer</span>
              <span className="lang-tamil text-[10px] font-tamil font-normal">இன்றே டீலராகுங்கள்</span>
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <div className="bg-gray-100 p-1 rounded-lg flex items-center space-x-1 border border-gray-200 text-[10px]">
              <button
                onClick={() => setLangMode('bilingual')}
                className={`px-2 py-0.5 font-bold rounded transition-all cursor-pointer ${
                  langMode === 'bilingual'
                    ? 'bg-brand-electric text-white shadow-md'
                    : 'text-gray-600'
                }`}
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLangMode('en-only')}
                className={`px-2 py-0.5 font-bold rounded transition-all cursor-pointer ${
                  langMode === 'en-only'
                    ? 'bg-brand-electric text-white shadow-md'
                    : 'text-gray-600'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-brand-royal focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-6 px-4 space-y-4 lg:hidden flex flex-col z-40"
        >
          <a
            href="index.html"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={getMobileLinkClass('home')}
          >
            <span>Home</span>
            <span className="lang-tamil text-sm font-tamil text-gray-500">முகப்பு</span>
          </a>
          <a
            href="products.html"
            onClick={(e) => handleLinkClick(e, 'products')}
            className={getMobileLinkClass('products')}
          >
            <span>Products</span>
            <span className="lang-tamil text-sm font-tamil text-gray-500">தயாரிப்புகள்</span>
          </a>
          <a
            href="dealers.html"
            onClick={(e) => handleLinkClick(e, 'dealers')}
            className={getMobileLinkClass('dealers')}
          >
            <span className="flex items-center">
              Dealers Wanted
              <span className="ml-2 bg-brand-accent-orange text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                WANTED
              </span>
            </span>
            <span className="lang-tamil text-sm font-tamil text-gray-500">டீலர்கள் தேவை</span>
          </a>
          <a
            href="gallery.html"
            onClick={(e) => handleLinkClick(e, 'gallery')}
            className={getMobileLinkClass('gallery')}
          >
            <span>Gallery</span>
            <span className="lang-tamil text-sm font-tamil text-gray-500">தொகுப்பு</span>
          </a>
          <a
            href="about.html"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={getMobileLinkClass('about')}
          >
            <span>About Us</span>
            <span className="lang-tamil text-sm font-tamil text-gray-500">எங்களைப் பற்றி</span>
          </a>
          <a
            href="contact.html"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={getMobileLinkClass('contact')}
          >
            <span>Contact</span>
            <span className="lang-tamil text-sm font-tamil text-gray-500">தொடர்பு</span>
          </a>

          <div className="pt-4 border-t border-gray-100">
            <a
              href="dealers.html"
              onClick={(e) => handleLinkClick(e, 'dealers')}
              className="w-full text-center py-3 bg-brand-accent-orange text-white font-semibold rounded-lg shadow-md block cursor-pointer text-sm"
            >
              Become an Authorized Dealer (டீலர்கள் தேவை)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
