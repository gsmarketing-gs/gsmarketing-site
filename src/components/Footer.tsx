import { MouseEvent } from 'react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue-dark text-gray-300 pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Info */}
          <div className="lg:col-span-4 space-y-4" id="footer-logo-desc-col">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.jpg"
                alt="GSmarketing Logo"
                className="h-12 w-12 rounded-xl object-cover border border-white/10 shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                  GSmarketing
                </span>
                <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase leading-tight mt-0.5">
                  Dealer Network
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              GSmarketing is an award-winning distributor of premier electrical fittings, high-efficiency lighting, and unique consumer formulations. Partner with us for reliable wholesale supply.
            </p>
            <p className="lang-tamil text-brand-accent-yellow text-xs font-tamil">
              தமிழ்நாட்டின் முன்னணி மின்சார பொருட்கள் மொத்த விநியோகஸ்தர்.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4" id="footer-quick-links-col">
            <h4 className="text-white font-display font-bold text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="index.html" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-white transition-colors">
                  Home (முகப்பு)
                </a>
              </li>
              <li>
                <a href="products.html" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors">
                  Products (தயாரிப்புகள்)
                </a>
              </li>
              <li>
                <a href="dealers.html" onClick={(e) => handleLinkClick(e, 'dealers')} className="hover:text-white transition-colors">
                  Dealer Application (டீலர்கள்)
                </a>
              </li>
              <li>
                <a href="gallery.html" onClick={(e) => handleLinkClick(e, 'gallery')} className="hover:text-white transition-colors">
                  Gallery (தொகுப்பு)
                </a>
              </li>
              <li>
                <a href="about.html" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-white transition-colors">
                  About Us (எங்களைப் பற்றி)
                </a>
              </li>
              <li>
                <a href="contact.html" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-white transition-colors">
                  Contact (தொடர்புக்கு)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Brands */}
          <div className="lg:col-span-3 space-y-4" id="footer-brands-col">
            <h4 className="text-white font-display font-bold text-sm tracking-widest uppercase">Brands &amp; Categories</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="products.html" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors">
                  ★ MALANO APPLE Hair Color
                </a>
              </li>
              <li>
                <a href="products.html" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors">
                  Electrical Products
                </a>
              </li>
              <li>
                <a href="products.html" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors">
                  LED Lights &amp; Tube Lights
                </a>
              </li>
              <li>
                <a href="products.html" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors">
                  Luxury Bath Mirror Lights
                </a>
              </li>
              <li>
                <a href="products.html" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors">
                  Bio Septic Digest Powder
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div className="lg:col-span-3 space-y-4" id="footer-reach-col">
            <h4 className="text-white font-display font-bold text-sm tracking-widest uppercase">Reach Us</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="text-brand-accent-orange font-bold">✉</span>
                <span>gsmarketing0919@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-brand-accent-orange font-bold">☏</span>
                <span>+91 75981 03492</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-accent-orange font-bold">📍</span>
                <span className="leading-relaxed">
                  Shop No. 9, ECR Main Road, Opposite Chevalier Sellane School, Periya Kalapet, Puducherry – 605014, India
                </span>
              </li>
            </ul>

            {/* Stock alerts box */}
            <div className="pt-2">
              <p className="text-xs text-white font-bold mb-1.5 uppercase">Subscribe to Stock Alerts</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-l text-xs focus:outline-none w-full text-white"
                />
                <button className="bg-brand-accent-orange text-white px-3 rounded-r text-xs font-bold hover:bg-brand-accent-orange/90 cursor-pointer">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 GSmarketing. All Rights Reserved. Authorized distributor of MALANO APPLE Hair Color products.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400" id="terms-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
