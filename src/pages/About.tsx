import { MouseEvent } from 'react';

interface AboutProps {
  onPageChange: (page: string) => void;
}

export default function About({ onPageChange }: AboutProps) {
  const handleNav = (e: MouseEvent, page: string) => {
    e.preventDefault();
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* --- CORPORATE ABOUT HERO --- */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex justify-center mb-2">
            <img
              src="/images/logo.jpg"
              alt="GSmarketing Logo"
              className="h-20 w-20 rounded-2xl object-cover border border-brand-accent-yellow/30 shadow-xl"
            />
          </div>
          <span className="text-brand-accent-yellow text-xs font-bold uppercase tracking-widest block">WHO WE ARE</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            The GSmarketing Corporate Journey
            <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-accent-yellow mt-1">
              எங்கள் நிறுவனத்தின் பின்னணி
            </span>
          </h1>
          <p className="text-blue-100 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Delivering commercial excellence, reliable distribution infrastructure, and premium product lines to our wholesale retail outlets and dealers.
          </p>
        </div>
      </section>

      {/* --- STORY & FOUNDER VISION --- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-electric font-bold text-xs uppercase tracking-widest block">
                ESTABLISHED LEADER
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 leading-tight">
                Distributing Trust and Innovation Across South India
                <span className="lang-tamil block text-lg sm:text-xl font-tamil text-brand-royal mt-1">
                  நம்பகமான மற்றும் தரமான விநியோக சேவை
                </span>
              </h2>
              <div className="h-1 w-16 bg-brand-accent-orange rounded"></div>

              <div className="text-gray-600 text-xs sm:text-sm space-y-4 leading-relaxed">
                <p>
                  Founded with a core focus on establishing solid supply chain operations,{' '}
                  <strong>GSmarketing</strong> has grown into a premier Multi-Category Distributor, Wholesale Supplier, and Dealer Network company. From our strategic central hubs, we serve cosmetics retail shops, supermarkets, department stores, fancy stores, hardware outlets, and electrical dealers across Tamil Nadu and Puducherry.
                </p>
                <p>
                  We are proud exclusive partners and distributors for the highly requested{' '}
                  <strong>MALANO APPLE Hair Color</strong> brand. While we continue to distribute premium energy-saving lighting and power solutions, our prime priority campaign is appointing authorized regional dealers for the fast-selling, premium{' '}
                  <strong>MALANO APPLE Hair Color</strong> series.
                </p>
                <p>
                  Beyond hair color and electrical systems, we also distribute custom high-performance formulations like eco-friendly biological digest bacterial powders for odor-free, maintenance-free septic systems.
                </p>
              </div>
            </div>

            {/* Promotional Contact Banner */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-royal to-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden border border-white/5">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <div className="relative z-10 space-y-6">
                <span className="bg-brand-accent-yellow text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  BECOME A PARTNER
                </span>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white">
                    Launch Your Exclusive Dealership Today!
                    <span className="lang-tamil block text-xs font-tamil text-brand-accent-yellow mt-1">
                      எங்களுடன் இணைந்து உங்கள் வணிகத்தை பெருக்குங்கள்
                    </span>
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Unlock high-margin returns, dedicated marketing support, and direct authorized supply in your region. Secure your territory before it's taken.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">Direct Enquiry</p>
                    <p className="text-xs sm:text-sm font-extrabold text-brand-accent-yellow">Tamil Nadu &amp; Puducherry</p>
                  </div>
                  <a
                    href="dealers.html"
                    onClick={(e) => handleNav(e, 'dealers')}
                    className="px-5 py-2.5 bg-brand-accent-yellow hover:bg-yellow-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md uppercase tracking-wider transition-colors inline-block cursor-pointer"
                  >
                    Apply Online ➔
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION, VISION & CORE CORPORATE VALUES --- */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="text-3xl">🎯</div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-gray-900">
                Our Core Mission
                <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">எங்கள் நோக்கம்</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                To provide robust commercial distribution support, allowing regional retail hardware shops to easily access genuine, high-margin electrical fittings and modern energy-saving devices.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="text-3xl">👁️</div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-gray-900">
                Our Vision
                <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">எங்கள் தொலைநோக்கு</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                To become South India's undisputed supply-chain gold standard, enabling eco-friendly architectural lighting, chemical-free sanitations, and luxury fittings to reach every neighborhood shop.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="text-3xl">🤝</div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-gray-900">
                Our Core Ethics
                <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">எங்கள் கோட்பாடுகள்</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Transparent pricing models, protected regional dealer territories, complete and hassle-free defective stock swaps, and unwavering commitment to client growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP CALL TO ACTION --- */}
      <section className="py-16 bg-gradient-to-r from-brand-royal to-blue-800 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl">Secure Your Local Monopoly Today</h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Become an authorized dealer representing GSmarketing and MALANO APPLE Hair Color in your town. Secure your commercial delivery route.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="dealers.html"
              onClick={(e) => handleNav(e, 'dealers')}
              className="px-8 py-3.5 bg-brand-accent-orange text-white text-xs sm:text-sm font-extrabold rounded-xl hover:bg-brand-accent-orange/90 shadow-lg text-center cursor-pointer"
            >
              Become a Dealer (விண்ணப்பிக்க)
            </a>
            <a
              href="contact.html"
              onClick={(e) => handleNav(e, 'contact')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/25 text-center cursor-pointer"
            >
              Contact Support Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
