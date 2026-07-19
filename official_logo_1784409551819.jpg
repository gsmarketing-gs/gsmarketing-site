import { useState } from 'react';
import { GALLERY_DATA, GalleryItem } from '../types';
import Lightbox from '../components/Lightbox';

interface GalleryProps {
  onPageChange: (page: string) => void;
  onEnquireProduct: (productName: string, productCode: string) => void;
}

export default function Gallery({ onPageChange, onEnquireProduct }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightingItems = GALLERY_DATA.filter((item) => item.category === 'lighting');
  const operationsItems = GALLERY_DATA.filter((item) => item.category === 'operations');

  // Master array for flat lightbox navigation
  const allItems = [...lightingItems, ...operationsItems];

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = allItems.findIndex((x) => x.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  const renderGalleryGrid = (items: GalleryItem[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(item)}
            className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-video cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-bold text-sm">{item.label}</p>
              <p className="text-brand-accent-yellow text-[11px]">Click to inspect details ➔</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-brand-accent-orange font-mono text-xs font-bold uppercase tracking-widest block">
            GSmarketing Network Showcase
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight">
            Photo Gallery &amp; Installations
            <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-accent-yellow mt-1.5">
              புகைப்பட தொகுப்பு மற்றும் நிறுவல்கள்
            </span>
          </h1>
          <div className="h-1 w-20 bg-brand-accent-orange mx-auto rounded"></div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed pt-2">
            Take an insider look at our premium showroom mockups, high-efficiency client installations, bulk warehouses, and weekly truck supply logistics dispatches across Puducherry, Villupuram, and Cuddalore districts.
          </p>
        </div>
      </section>

      {/* Main Gallery Items list */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Category 1: Lighting Designs */}
          <div className="space-y-6 mb-16">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="font-display font-bold text-2xl text-gray-900">
                Showroom Lighting Designs
                <span className="lang-tamil block text-base font-tamil text-brand-electric font-medium mt-0.5">
                  காட்சி கூடம் மற்றும் விளக்கு அமைப்புகள்
                </span>
              </h2>
            </div>
            {renderGalleryGrid(lightingItems)}
          </div>

          {/* Section Category 2: Logistics & Dispatch */}
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="font-display font-bold text-2xl text-gray-900">
                Operations &amp; Stockroom Dispatch
                <span className="lang-tamil block text-base font-tamil text-brand-electric font-medium mt-0.5">
                  சரக்கு விநியோகம் மற்றும் சேமிப்பு கிடங்கு
                </span>
              </h2>
            </div>
            {renderGalleryGrid(operationsItems)}
          </div>

        </div>
      </section>

      {/* Exclusive Regional Recruitment Banner */}
      <section className="py-12 bg-gradient-to-r from-brand-accent-orange to-amber-500 text-white shadow-inner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-display font-bold text-2xl sm:text-3xl">Are You an Electrical Retailer or Hardware Owner?</h3>
          <p className="text-orange-50 text-sm max-w-xl mx-auto">
            Get your storefront listed in our authorized dealer gallery directory and get direct wholesale supply.
          </p>
          <button
            onClick={() => {
              onPageChange('dealers');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 bg-slate-900 hover:bg-slate-950 text-brand-accent-yellow font-extrabold text-sm rounded-lg shadow-md uppercase tracking-wider transition-colors cursor-pointer"
          >
            Apply for Dealership (பதிவு செய்யவும்)
          </button>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={allItems.map((item) => ({
          img: item.img,
          title: item.title,
          code: item.code,
          desc: item.desc,
        }))}
        activeIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        onEnquire={(title, code) => {
          setLightboxOpen(false);
          onEnquireProduct(title, code);
        }}
      />
    </div>
  );
}
