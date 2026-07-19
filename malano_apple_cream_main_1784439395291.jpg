import { useState, useEffect } from 'react';
import { PRODUCTS_DATA, Product } from '../types';
import Lightbox from '../components/Lightbox';

interface ProductsProps {
  onPageChange: (page: string) => void;
  onEnquireProduct: (productName: string, productCode: string) => void;
  initialCategory?: string;
}

const CATEGORIES = [
  { id: 'all', label: 'All Products', labelTa: 'அனைத்து தயாரிப்புகள்' },
  { id: 'hair-dye', label: 'MALANO APPLE', labelTa: 'மாலானோ ஆப்பிள்' },
  { id: 'led-lights', label: 'LED Panels', labelTa: 'எல்இடி பேனல்கள்' },
  { id: 'tube-lights', label: 'Tube Lights', labelTa: 'ட்யூப் லைட்கள்' },
  { id: 'mirror-lights', label: 'Luxury Mirror', labelTa: 'அலங்கார கண்ணாடி' },
  { id: 'inverters', label: 'Power Backup', labelTa: 'இன்வெர்ட்டர்' },
  { id: 'accessories', label: 'Fittings & Wires', labelTa: 'மின்சார சுவிட்ச்' },
  { id: 'bio-septic', label: 'Bio Septic', labelTa: 'பயோ செப்டிக்' },
];

export default function Products({ onPageChange, onEnquireProduct, initialCategory }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Lightbox States
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<{ img: string; title: string; code: string; desc: string }[]>([]);
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(0);

  // Sync with initial category or hash changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    } else {
      // Check query param
      const urlParams = new URLSearchParams(window.location.search);
      const cat = urlParams.get('category');
      if (cat) {
        setSelectedCategory(cat);
      }
    }
  }, [initialCategory]);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  const openProductLightbox = (product: Product) => {
    if (product.gallery && product.gallery.length > 0) {
      // Build gallery items
      const items = product.gallery.map((imgUrl, idx) => ({
        img: imgUrl,
        title: product.title,
        code: product.code,
        desc: product.galleryDescs ? product.galleryDescs[idx] : product.desc,
      }));
      setLightboxItems(items);
    } else {
      setLightboxItems([{
        img: product.img,
        title: product.title,
        code: product.code,
        desc: product.desc,
      }]);
    }
    setLightboxActiveIndex(0);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-brand-accent-orange font-mono text-xs font-bold uppercase tracking-widest block">
            GSmarketing Distribution Catalog
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight">
            Our Premium Product Portfolio
            <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-accent-yellow mt-1.5">
              தரமான தயாரிப்புகளின் தொகுப்பு
            </span>
          </h1>
          <div className="h-1 w-20 bg-brand-accent-orange mx-auto rounded"></div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed pt-2">
            Explore our commercial down-lines, including electrical consumables, decorative bathroom accents, and high-margin cosmetics formulations. Click any product image to zoom and read technical spec sheets.
          </p>
        </div>
      </section>

      {/* Category Tabs Wrapper */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm overflow-x-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 md:justify-center whitespace-nowrap py-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-royal text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="block">{cat.label}</span>
                <span className="lang-tamil block text-[10px] font-tamil font-normal -mt-0.5 opacity-80">
                  {cat.labelTa}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Display Grid Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Showing {filteredProducts.length} high-demand downlines
            </span>
            <span className="text-xs text-brand-electric font-semibold">
              Filter: {CATEGORIES.find((c) => c.id === selectedCategory)?.label}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card bg-gray-50 rounded-2xl border border-gray-100 p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Aspect image placeholder */}
                  <div
                    onClick={() => openProductLightbox(product)}
                    className="aspect-video w-full rounded-xl overflow-hidden bg-white border border-gray-100 relative cursor-pointer"
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur">
                      🔍 Click to zoom
                    </span>

                    {product.badge && (
                      <span className="absolute top-2 left-2 bg-brand-accent-orange text-white text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Descriptions details */}
                  <div className="space-y-1">
                    {product.tag && (
                      <span className="text-brand-electric font-mono text-[10px] font-bold uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded inline-block">
                        {product.tag}
                      </span>
                    )}
                    <h3 className="product-title font-display font-bold text-lg text-gray-900 mt-1">
                      {product.title}
                      <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">
                        {product.titleTa}
                      </span>
                    </h3>
                    <p className="product-code text-[11px] font-mono text-gray-400 font-medium">
                      Product Code: {product.code}
                    </p>
                  </div>

                  <p className="product-desc text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-gray-200 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400">
                    Wholesale MOQ: {product.moq}
                  </span>
                  <button
                    onClick={() => onEnquireProduct(product.title, product.code)}
                    className="px-4.5 py-2 bg-brand-royal text-white text-xs font-bold rounded-lg hover:bg-brand-electric transition-colors cursor-pointer"
                  >
                    Enquire Price
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400 text-sm">No products found under this category.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-4 px-5 py-2 bg-brand-royal text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Special dealer recruitment banner */}
      <section className="py-12 bg-brand-accent-orange text-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl">Want Exclusive Area Dealership Rights?</h3>
            <p className="text-orange-100 text-xs sm:text-sm">
              Secure your district before other local shops. Call our commercial manager today.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                onPageChange('dealers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-950 text-brand-accent-yellow font-extrabold text-sm rounded-lg shadow-md uppercase tracking-wide cursor-pointer"
            >
              Become a Dealer Now
            </button>
          </div>
        </div>
      </section>

      {/* Immersive Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        activeIndex={lightboxActiveIndex}
        onNavigate={(newIndex) => setLightboxActiveIndex(newIndex)}
        onEnquire={(title, code) => {
          setLightboxOpen(false);
          onEnquireProduct(title, code);
        }}
      />
    </div>
  );
}
