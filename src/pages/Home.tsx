import { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from 'react';

interface HomeProps {
  onPageChange: (page: string) => void;
  onEnquireProduct?: (productName: string, productCode: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  // FAQ accordion active state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shopName: '',
    city: '',
    businessType: 'Electrical Shop',
    message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    let text = `Hello GSmarketing,\n\n`;
    text += `Name: ${formData.name}\n`;
    text += `Phone: ${formData.phone}\n`;
    if (formData.shopName) text += `Shop Name: ${formData.shopName}\n`;
    text += `City: ${formData.city}\n`;
    text += `Business Type: ${formData.businessType}\n`;
    if (formData.message) text += `Message: ${formData.message}\n\n`;
    text += `I would like to become a dealer / enquire about your products.\nPlease contact me.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917598103492?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const handleCategoryNav = (e: MouseEvent, category: string) => {
    e.preventDefault();
    onPageChange(`products?category=${category}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'What is the minimum initial order for dealer status?',
      qTa: 'குறைந்தபட்ச ஆர்டர் அளவு எவ்வளவு?',
      a: 'We support small hardware retailers to expand smoothly. The initial order requirement depends on the area and specific products chosen (e.g. general LED lights). Contact us directly to discuss a custom starter package with zero high deposit pressure.',
    },
    {
      q: 'Which districts do you deliver to directly?',
      qTa: 'எந்தெந்த ஊர்களுக்கு நேரடி டெலிவரி உண்டு?',
      a: 'We offer scheduled weekly distribution dispatches to Puducherry (including Karaikal), Villupuram District, and Cuddalore District.',
    },
    {
      q: 'Are these product lines covered under manufacturer warranty?',
      qTa: 'தயாரிப்புகளுக்கு உத்தரவாதம் (Warranty) உண்டா?',
      a: 'Yes! All LED and tube lights distributed by us come with standard manufacturing replacement warranties (usually 1 to 2 years depending on specifications). Defective units are swapped directly on our next delivery vehicle run with zero hassle.',
    },
    {
      q: 'Can retail customers purchase directly from GSmarketing?',
      qTa: 'சில்லறை வாடிக்கையாளர்கள் நேரடியாக வாங்க முடியுமா?',
      a: 'Yes, retail buyers are welcome to submit an inquiry. We supply materials for homes, contractors, and building projects. However, dealers registered under our network receive highly optimized commercial distributor prices.',
    },
  ];

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-brand-blue-dark via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-electric/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-accent-orange/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left reveal-fade-in active">
              <div className="inline-flex items-center space-x-2 bg-brand-accent-orange/20 border border-brand-accent-orange/40 text-brand-accent-orange font-bold text-xs px-3.5 py-1.5 rounded-full tracking-wider uppercase badge-pulse">
                <span>★ DEALERS WANTED IN PUDUCHERRY, VILLUPURAM &amp; CUDDALORE ★</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                Your Trusted Multi-Category Distributor
                <span className="lang-tamil block text-2xl sm:text-3xl lg:text-4xl font-tamil font-bold text-brand-accent-yellow mt-2">
                  உங்கள் நம்பிக்கைக்குரிய விநியோகக் கூட்டாளி
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
                GSmarketing is a premium Multi-Category Distributor, Wholesale Supplier, and Dealer Network company. We are now appointing exclusive regional dealers for the fast-selling{' '}
                <strong className="text-brand-accent-yellow">MALANO APPLE Hair Color</strong> alongside electricals, power solutions, and biotech down-lines.
              </p>
              <p className="lang-tamil text-brand-electric font-tamil text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
                ஜிஎஸ் மார்க்கெட்டிங்: புதுச்சேரி, காரைக்கால், விழுப்புரம் மற்றும் கடலூர் மாவட்டத்தின் முன்னணி விநியோகஸ்தர் மற்றும் டீலர் நெட்வொர்க் நிறுவனம். எங்களின் முதன்மை திட்டமான{' '}
                <strong className="text-brand-accent-yellow">மாலானோ ஆப்பிள் ஹேர் கலர் (MALANO APPLE Hair Color)</strong> டீலர்ஷிப் உரிமைகளை உங்கள் பகுதியில் பெற இன்றே தொடர்பு கொள்ளுங்கள்!
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="dealers.html"
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange('dealers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-accent-orange hover:bg-brand-accent-orange/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-center flex flex-col justify-center items-center cursor-pointer"
                >
                  <span className="text-base">Apply for MALANO APPLE Hair Color Dealership</span>
                  <span className="lang-tamil text-xs font-tamil font-normal">ஹேர் கலர் டீலர்ஷிப்பிற்கு விண்ணப்பிக்கவும்</span>
                </a>
                <a
                  href="products.html"
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border-2 border-white/80 hover:border-white transition-all text-center flex flex-col justify-center items-center cursor-pointer"
                >
                  <span className="text-base">Explore All Products</span>
                  <span className="lang-tamil text-xs font-tamil font-normal">தயாரிப்புகளை ஆராய்க</span>
                </a>
              </div>

              {/* Trust Subtitles */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-brand-accent-yellow">100%</p>
                  <p className="text-xs text-gray-400">Genuine Brands (உயர்தர பிராண்ட்)</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-brand-accent-yellow">Fast</p>
                  <p className="text-xs text-gray-400">Delivery Support (விரைவான டெலிவரி)</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-brand-accent-yellow">Wholesale</p>
                  <p className="text-xs text-gray-400">Pricing (மொத்த விற்பனை விலை)</p>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Graphics */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center reveal-fade-in active">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-brand-electric/10 to-brand-accent-orange/10 rounded-3xl p-6 border border-white/10 flex flex-col justify-between shadow-2xl">
                <div className="absolute -top-5 -right-5 bg-brand-accent-orange text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md rotate-12 uppercase flex flex-col items-center border-2 border-white">
                  <span>PRIORITY CAMPAIGN</span>
                  <span className="text-sm">HAIR COLOR</span>
                </div>

                <div className="my-auto w-full flex flex-col items-center space-y-4">
                  <div className="w-64 h-48 bg-white/10 rounded-2xl p-4 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                    <img
                      src="/images/products/malano_apple_cream_main.jpg"
                      alt="MALANO APPLE Hair Color"
                      className="max-h-full max-w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-brand-accent-yellow font-display font-bold text-xl uppercase tracking-wider">MALANO APPLE HAIR COLOR</p>
                    <p className="text-gray-300 text-xs">Ammonia-Free Premium Dye Network</p>
                    <p className="lang-tamil text-brand-accent-orange text-[10px] font-tamil mt-1">மாலானோ ஆப்பிள் டீலர்கள் தேவை</p>
                  </div>
                </div>

                <div className="flex justify-center space-x-1.5">
                  <span className="w-6 h-1.5 rounded-full bg-brand-accent-orange"></span>
                  <span className="w-2 h-1.5 rounded-full bg-gray-600"></span>
                  <span className="w-2 h-1.5 rounded-full bg-gray-600"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFINITE MARQUEE PROMOTION BRAND CAROUSEL --- */}
      <div className="bg-brand-accent-yellow text-slate-950 py-3 overflow-hidden border-y border-brand-accent-yellow/50 relative z-20">
        <div className="flex whitespace-nowrap animate-infinite-scroll">
          <div className="flex space-x-12 text-sm font-extrabold uppercase tracking-widest">
            <span>★ NOW APPOINTING DEALERS IN PUDUCHERRY, VILLUPURAM &amp; CUDDALORE ★</span>
            <span className="lang-tamil font-tamil">★ புதுச்சேரி, விழுப்புரம் மற்றும் கடலூரில் டீலர்கள் தேவை ★</span>
            <span>★ JOIN MALANO APPLE NETWORK ★</span>
            <span className="lang-tamil font-tamil">★ மலானோ ஆப்பிள் டீலராக சேருங்கள் ★</span>
            <span>★ WHOLESALE SUPPLY AVAILABLE ★</span>
            <span className="lang-tamil font-tamil">★ மொத்த விற்பனை ★</span>
            <span>★ 100% QUALITY GUARANTEED ★</span>
            <span className="lang-tamil font-tamil">★ தரமான பொருட்கள் ★</span>
          </div>
          <div className="flex space-x-12 text-sm font-extrabold uppercase tracking-widest ml-12">
            <span>★ NOW APPOINTING DEALERS IN PUDUCHERRY, VILLUPURAM &amp; CUDDALORE ★</span>
            <span className="lang-tamil font-tamil">★ புதுச்சேரி, விழுப்புரம் மற்றும் கடலூரில் டீலர்கள் தேவை ★</span>
            <span>★ JOIN MALANO APPLE NETWORK ★</span>
            <span className="lang-tamil font-tamil">★ மலானோ ஆப்பிள் டீலராக சேருங்கள் ★</span>
            <span>★ WHOLESALE SUPPLY AVAILABLE ★</span>
            <span className="lang-tamil font-tamil">★ மொத்த விற்பனை ★</span>
            <span>★ 100% QUALITY GUARANTEED ★</span>
            <span className="lang-tamil font-tamil">★ தரமான பொருட்கள் ★</span>
          </div>
        </div>
      </div>

      {/* --- SPECIAL BRAND BANNER : MALANO APPLE --- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-brand-royal rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl reveal-fade-in active">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] hidden md:block"></div>
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand-accent-orange/20 rounded-full blur-2xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="bg-brand-accent-orange text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-widest inline-block">FLAGSHIP CAMPAIGN</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                  Exclusive Dealership: MALANO APPLE Hair Color
                  <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-accent-yellow mt-1">
                    மாலானோ ஆப்பிள் ஹேர் கலர் டீலர்கள் தேவை
                  </span>
                </h2>
                <p className="text-blue-100 text-sm sm:text-base max-w-2xl">
                  We are now appointing exclusive regional dealers and wholesale stockists for the premium{' '}
                  <strong className="text-brand-accent-yellow">MALANO APPLE Hair Color</strong> across Puducherry (including Karaikal), Villupuram District, and Cuddalore District. This high-margin, premium ammonia-free formulation is in massive demand. Secure your exclusive local territory today!
                </p>
                <p className="lang-tamil text-brand-accent-yellow font-tamil text-xs sm:text-sm">
                  அமோனியா இல்லாத, பாதுகாப்பான மாலானோ ஆப்பிள் ஹேர் கலர் தயாரிப்புகளை உங்கள் பகுதியில் மொத்தமாக விற்பனை செய்ய பிரத்தியேக டீலர்ஷிப் வாய்ப்பு!
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center space-x-2 bg-white/10 px-3.5 py-1.5 rounded-lg text-xs font-semibold">
                    <span className="text-brand-accent-yellow text-base">✓</span> <span>High Profit Margins (அதிக லாபம்)</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 px-3.5 py-1.5 rounded-lg text-xs font-semibold">
                    <span className="text-brand-accent-yellow text-base">✓</span> <span>Protected Territories (பிரத்தியேக ஏரியா)</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 px-3.5 py-1.5 rounded-lg text-xs font-semibold">
                    <span className="text-brand-accent-yellow text-base">✓</span> <span>Direct Marketing Support (மார்க்கெட்டிங் ஆதரவு)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <a
                  href="dealers.html"
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange('dealers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full lg:w-auto px-8 py-4 bg-brand-accent-orange hover:bg-brand-accent-orange/90 text-white font-bold rounded-xl text-center shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer"
                >
                  <span>Apply for Dealership</span>
                  <span className="lang-tamil block text-xs font-tamil font-normal mt-0.5">டீலர்ஷிப்பிற்கு விண்ணப்பிக்கவும்</span>
                </a>
                <span className="text-xs text-blue-200 mt-2">No Application Fee Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PRODUCT CATEGORIES --- */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-fade-in active">
            <span className="text-brand-electric font-bold text-xs uppercase tracking-widest block">OUR DIVERSE PORTFOLIO</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
              High-Demand Wholesale Products
              <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-electric mt-1">
                எங்கள் தரமான தயாரிப்புகள்
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-accent-orange mx-auto rounded-full"></div>
            <p className="text-gray-500 text-sm sm:text-base pt-2">
              GSmarketing distributes high-quality, government-compliant electrical systems along with essential cosmetic and eco-friendly consumer goods for hardware stores and retail centers.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cat 1: MALANO APPLE */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/30 rounded-2xl border-2 border-brand-accent-orange shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group reveal-fade-in active relative">
              <div className="absolute -top-3.5 -right-3.5 bg-brand-accent-orange text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider badge-pulse">PRIORITY DEALERSHIP</div>
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <img
                    src="/images/products/malano_apple_cream_main.jpg"
                    alt="MALANO APPLE Hair Color Wholesale"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold text-brand-accent-orange tracking-widest uppercase">★ HERO CAMPAIGN</span>
                <h3 className="font-display font-bold text-xl text-gray-900 mt-1">
                  MALANO APPLE Hair Color
                  <span className="lang-tamil block text-xs font-tamil font-medium text-brand-accent-orange mt-0.5">மாலானோ ஆப்பிள் ஹேர் கலர்</span>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                  Premium ammonia-free, long-lasting natural hair color series. Fast-moving high margins, complete marketing display panels, and district-level exclusivity.
                </p>
              </div>
              <div className="pt-5 border-t border-orange-200/50 mt-5 flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => handleCategoryNav(e, 'hair-dye')}
                  className="text-brand-accent-orange font-bold text-xs hover:text-brand-accent-orange/80 transition-colors flex items-center"
                >
                  Apply for Dealership ➔
                </a>
                <span className="text-[10px] font-mono bg-brand-accent-orange text-white px-2 py-1 rounded">HOT SELLER</span>
              </div>
            </div>

            {/* Cat 2: LED Lights */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group reveal-fade-in active">
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <img
                    src="/images/products/led-lights.svg"
                    alt="LED Lights Wholesale"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold text-brand-electric tracking-widest uppercase">PREMIUM QUALITY</span>
                <h3 className="font-display font-bold text-xl text-gray-900 mt-1">
                  Premium LED Lights
                  <span className="lang-tamil block text-xs font-tamil font-medium text-brand-royal mt-0.5">உயர்தர எல்இடி விளக்குகள்</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                  Energy-efficient panel lights, ceiling downlights, and commercial bulbs. Complete warranty coverage. Highly requested.
                </p>
              </div>
              <div className="pt-5 border-t border-gray-50 mt-5 flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => handleCategoryNav(e, 'led-lights')}
                  className="text-brand-royal font-bold text-xs hover:text-brand-electric transition-colors flex items-center"
                >
                  View Catalog ➔
                </a>
                <span className="text-[10px] font-mono bg-blue-50 text-brand-royal px-2 py-1 rounded">DEALERS ELIGIBLE</span>
              </div>
            </div>

            {/* Cat 3: Tube Lights */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group reveal-fade-in active">
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1540931910681-dcf10160b7d6?auto=format&fit=crop&w=800&q=80"
                    alt="Tube Lights Wholesale"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold text-brand-electric tracking-widest uppercase">EFFICIENT LIGHTING</span>
                <h3 className="font-display font-bold text-xl text-gray-900 mt-1">
                  Sleek Tube Lights
                  <span className="lang-tamil block text-xs font-tamil font-medium text-brand-royal mt-0.5">ட்யூப் லைட்கள்</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                  Heavy-duty T5 and T8 modular tube lights. Ideal for residential societies, commercial offices, and educational institutes.
                </p>
              </div>
              <div className="pt-5 border-t border-gray-50 mt-5 flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => handleCategoryNav(e, 'tube-lights')}
                  className="text-brand-royal font-bold text-xs hover:text-brand-electric transition-colors flex items-center"
                >
                  View Catalog ➔
                </a>
                <span className="text-[10px] font-mono bg-blue-50 text-brand-royal px-2 py-1 rounded">DEALERS ELIGIBLE</span>
              </div>
            </div>

            {/* Cat 4: Mirror Lights */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group reveal-fade-in active">
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <img
                    src="/images/products/mirror-lights.svg"
                    alt="Mirror Lights Wholesale"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold text-brand-electric tracking-widest uppercase">DESIGNER AMBIENCE</span>
                <h3 className="font-display font-bold text-xl text-gray-900 mt-1">
                  LED Luxury Mirror Lights
                  <span className="lang-tamil block text-xs font-tamil font-medium text-brand-royal mt-0.5">அலங்கார கண்ணாடி விளக்குகள்</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                  Waterproof backlit LED mirror systems with high color accuracy, perfect for modern bathrooms, luxury hotels, and showrooms.
                </p>
              </div>
              <div className="pt-5 border-t border-gray-50 mt-5 flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => handleCategoryNav(e, 'mirror-lights')}
                  className="text-brand-royal font-bold text-xs hover:text-brand-electric transition-colors flex items-center"
                >
                  View Catalog ➔
                </a>
                <span className="text-[10px] font-mono bg-blue-50 text-brand-royal px-2 py-1 rounded">DEALERS ELIGIBLE</span>
              </div>
            </div>

            {/* Cat 5: Inverters & Power */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group reveal-fade-in active">
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80"
                    alt="Inverters &amp; Power Solutions"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold text-brand-electric tracking-widest uppercase">POWER SOLUTIONS</span>
                <h3 className="font-display font-bold text-xl text-gray-900 mt-1">
                  Inverters &amp; Power Solutions
                  <span className="lang-tamil block text-xs font-tamil font-medium text-brand-royal mt-0.5">இன்வெர்ட்டர் &amp; மின்சார சேமிப்பு</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                  High-efficiency home inverters, battery packs, and uninterrupted power systems (UPS) designed for heavy loads and backup stability.
                </p>
              </div>
              <div className="pt-5 border-t border-gray-50 mt-5 flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => handleCategoryNav(e, 'inverters')}
                  className="text-brand-royal font-bold text-xs hover:text-brand-electric transition-colors flex items-center"
                >
                  View Catalog ➔
                </a>
                <span className="text-[10px] font-mono bg-blue-50 text-brand-royal px-2 py-1 rounded">DEALERS ELIGIBLE</span>
              </div>
            </div>

            {/* Cat 6: Accessories */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group reveal-fade-in active">
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <img
                    src="/images/products/accessories.svg"
                    alt="Electrical Accessories Wholesale"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold text-brand-electric tracking-widest uppercase">SAFETY COMPLIANT</span>
                <h3 className="font-display font-bold text-xl text-gray-900 mt-1">
                  Electrical Accessories &amp; Products
                  <span className="lang-tamil block text-xs font-tamil font-medium text-brand-royal mt-0.5">மின்சார சாதனங்கள்</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                  Modular switches, high-grade extension sockets, junction boxes, wires, insulation tape, and essential hardware items.
                </p>
              </div>
              <div className="pt-5 border-t border-gray-50 mt-5 flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => handleCategoryNav(e, 'accessories')}
                  className="text-brand-royal font-bold text-xs hover:text-brand-electric transition-colors flex items-center"
                >
                  View Catalog ➔
                </a>
                <span className="text-[10px] font-mono bg-blue-50 text-brand-royal px-2 py-1 rounded">DEALERS ELIGIBLE</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="products.html"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3.5 bg-brand-royal text-white rounded-lg font-bold hover:bg-brand-electric transition-colors shadow-md cursor-pointer"
            >
              Explore Complete 100+ Product Catalog ➔
            </a>
          </div>
        </div>
      </section>

      {/* --- PROMOTIONAL HIGH-IMPACT BANNER --- */}
      <section className="py-12 bg-gradient-to-r from-brand-accent-orange to-amber-500 text-white shadow-inner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-2.5 py-1 rounded">EXCLUSIVE CAMPAIGN</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl">
                MALANO APPLE Hair Color Dealer Appointment
                <span className="lang-tamil block text-lg sm:text-xl font-tamil text-slate-950 font-bold mt-1">
                  மாலானோ ஆப்பிள் ஹேர் கலர் டீலர்கள் சேர்க்கை
                </span>
              </h3>
              <p className="text-orange-50 text-xs sm:text-sm">
                Securing exclusive local territories with high-margin returns. Authorized wholesale supply directly to your doorstep in Puducherry, Villupuram District, and Cuddalore District.
              </p>
            </div>
            <div>
              <a
                href="dealers.html"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange('dealers');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block px-7 py-3 bg-slate-900 hover:bg-slate-950 text-brand-accent-yellow font-extrabold text-sm rounded-lg shadow-md uppercase tracking-wider transition-colors flex flex-col items-center cursor-pointer"
              >
                <span>Apply for Dealership</span>
                <span className="lang-tamil text-[10px] font-tamil font-normal">இன்றே பதிவு செய்யுங்கள்</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE CORE BENEFITS FOR DEALERS (WHY CHOOSE US) --- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left details */}
            <div className="lg:col-span-5 space-y-6 reveal-fade-in active">
              <span className="text-brand-electric font-bold text-xs uppercase tracking-widest block">PARTNERSHIP VALUE</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900">
                Empowering Small Businesses to Scale High
                <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-electric mt-1">
                  டீலர்ஷிப் நன்மைகள்
                </span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                GSmarketing is not just a distributor; we are your growth companion. We provide complete logistic assistance, quick-dispatch delivery across all major blocks, and marketing tools to scale your business.
              </p>
              <p className="lang-tamil text-gray-600 font-tamil text-xs sm:text-sm">
                புதுச்சேரி, காரைக்கால், விழுப்புரம் மற்றும் கடலூர் மாவட்டங்களில் உள்ள எலக்ட்ரிக்கல் கடைகள், ஹார்டுவேர் கடைகளுக்கு சிறந்த முறையில் சப்ளை செய்கிறோம்.
              </p>
            </div>

            {/* Right: 4 Benefit Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-fade-in active">
              {/* Benefit 1 */}
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-royal text-xl font-bold">₹</div>
                <h3 className="font-display font-bold text-lg text-gray-900">
                  Unmatched Wholesale Price
                  <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">மொத்த விற்பனை விலை</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  We offer deep discounts and exclusive partner margins, enabling you to beat local retail pricing confidently.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-brand-accent-orange text-xl">🚚</div>
                <h3 className="font-display font-bold text-lg text-gray-900">
                  Fast Doorstep Dispatch
                  <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">விரைவான விநியோகம்</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Our regional vehicles handle dispatches weekly to Puducherry (including Karaikal), Villupuram District, and Cuddalore District.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-brand-accent-yellow text-xl">📢</div>
                <h3 className="font-display font-bold text-lg text-gray-900">
                  Complete Dealer Support
                  <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">முழுமையான டீலர் ஆதரவு</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Get free brand posters, catalogues, brochures, and digital banners to promote products easily in your town.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 text-xl">🛡️</div>
                <h3 className="font-display font-bold text-lg text-gray-900">
                  Genuine Replacement
                  <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">பொருட்கள் மாற்று வசதி</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Any manufacturer defect is replaced immediately. Transparent billing and robust claim processing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EASY 3-STEP DEALER JOINING PROCESS --- */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-fade-in active">
            <span className="text-brand-electric font-bold text-xs uppercase tracking-widest block">HOW TO START</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900">
              Become a Dealer in Three Easy Steps
              <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-electric mt-1">
                டீலராக சேர 3 எளிய வழிமுறைகள்
              </span>
            </h2>
            <div className="h-1 w-20 bg-brand-accent-orange mx-auto rounded"></div>
          </div>

          {/* Process Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center space-y-4 relative reveal-fade-in active">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-royal text-white font-extrabold rounded-full flex items-center justify-center text-lg border-4 border-gray-50">1</div>
              <h3 className="font-display font-bold text-xl text-gray-900 pt-3">
                Submit Registration
                <span className="lang-tamil block text-sm font-tamil text-brand-royal mt-0.5">டீலர் பதிவு செய்யவும்</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Fill the Dealer Form on our website or directly drop a request via our fast WhatsApp template.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center space-y-4 relative reveal-fade-in active">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-electric text-white font-extrabold rounded-full flex items-center justify-center text-lg border-4 border-gray-50">2</div>
              <h3 className="font-display font-bold text-xl text-gray-900 pt-3">
                Price Verification
                <span className="lang-tamil block text-sm font-tamil text-brand-royal mt-0.5">விலை மற்றும் விவாதம்</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Our manager calls you to discuss wholesale price quotes, order quantities, and exclusive regional rights.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center space-y-4 relative reveal-fade-in active">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-accent-orange text-white font-extrabold rounded-full flex items-center justify-center text-lg border-4 border-gray-50">3</div>
              <h3 className="font-display font-bold text-xl text-gray-900 pt-3">
                Stock Dispatch
                <span className="lang-tamil block text-sm font-tamil text-brand-royal mt-0.5">பொருட்கள் டெலிவரி</span>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Upon payment, your products are immediately loaded and dispatched via our logistics vehicle safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP ENQUIRY FORM SECTION --- */}
      <section className="py-20 bg-white" id="dealer-form-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Form Left Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 reveal-fade-in active">
              <div className="space-y-4">
                <span className="text-brand-accent-orange font-bold text-xs uppercase tracking-widest block">GET STARTED TODAY</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
                  Submit Dealer Application Instantly
                  <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-accent-orange mt-1">
                    டீலர்ஷிப் பதிவு படிவம்
                  </span>
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  Submit your request through our specialized client portal. Clicking 'Submit' automatically opens a configured WhatsApp template directly targeting our main support dispatch desk.
                </p>
                <p className="lang-tamil text-brand-royal font-tamil text-xs sm:text-sm">
                  கீழே உள்ள படிவத்தை பூர்த்தி செய்து சமர்ப்பிக்கும் போது, ​​நேரடியாக எங்களது வாட்ஸ்அப் எண்ணிற்கு உங்களது தகவல்கள் வந்து சேரும்.
                </p>
              </div>

              {/* Contact details helper */}
              <div className="p-6 bg-blue-50/50 border border-blue-50 rounded-2xl space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-royal">DISTRIBUTION SUPPORT</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center space-x-3">
                    <span className="text-brand-electric font-bold">✉</span>
                    <span>gsmarketing0919@gmail.com</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-brand-electric font-bold">☏</span>
                    <span>+91 75981 03492 (WhatsApp &amp; Call)</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-brand-electric font-bold">📍</span>
                    <span>Serving Puducherry, Villupuram &amp; Cuddalore Districts</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Form Right Widget */}
            <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-xl reveal-fade-in active">
              <form onSubmit={handleFormSubmit} className="whatsapp-form space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Your Full Name (உங்கள் பெயர்) *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white transition-all text-sm"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Phone Number (தொலைபேசி எண்) *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Shop Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Shop / Company Name (கடையின் பெயர்)</label>
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      placeholder="Enter shop or company name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white transition-all text-sm"
                    />
                  </div>
                  {/* City */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">City / Town (ஊர் பெயர்) *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter town or district"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Business Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Your Business Type (வணிக வகை)</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white transition-all text-sm"
                  >
                    <option value="Electrical Shop">Electrical Retail Shop (மின்சார கடை)</option>
                    <option value="Hardware Store">Hardware / Paint Shop (ஹார்டுவேர் கடை)</option>
                    <option value="Building Contractor">Building Contractor / Engineer (கட்டிட ஒப்பந்ததாரர்)</option>
                    <option value="Electrician">Electrician / Freelance Technician (மின்சார வல்லுனர்)</option>
                    <option value="Wholesaler">Wholesale Distributor / Sub-Dealer (மொத்த விற்பனையாளர்)</option>
                    <option value="Retail Customer">Retail Customer (சில்லறை வாடிக்கையாளர்)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Message / Requirements (தகவல்)</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mention products of interest (e.g. MALANO APPLE Hair Color, LED lights, switches, bio septic powder)..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white transition-all text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-base cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.002-5.062-2.826-6.889-1.825-1.826-4.253-2.831-6.864-2.831-5.441 0-9.865 4.37-9.869 9.756-.002 1.76.476 3.48 1.385 5.017l-.952 3.478 3.567-.937zm11.383-7.258c-.3-.15-1.771-.875-2.046-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.792-1.49-1.77-1.665-2.07-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.492-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 1.05-1.05 1.05s-.975 1.725-.975 4.25c0 2.525 1.85 4.95 2.1 5.3.25.35 3.6 5.5 8.725 7.7.12.05.23.1.34.15 1.22.39 2.33.33 3.2.2 1-.15 2.2-.9 2.5-1.775.3-.875.3-1.625.2-1.775-.1-.15-.35-.25-.65-.4z" />
                  </svg>
                  <span>Submit via WhatsApp (சமர்ப்பிக்கவும்)</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQS SECTION --- */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center space-y-3 mb-12">
            <span className="text-brand-electric font-bold text-xs uppercase tracking-widest block">YOUR QUESTIONS ANSWERED</span>
            <h2 className="font-display font-extrabold text-3xl text-gray-900">
              Frequently Asked Questions
              <span className="lang-tamil block text-lg font-tamil text-brand-electric mt-1">
                அடிக்கடி கேட்கப்படும் கேள்விகள்
              </span>
            </h2>
            <div className="h-1.5 w-16 bg-brand-accent-orange mx-auto rounded-full"></div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-brand-electric bg-blue-50/10 shadow-sm' : 'border-gray-200 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="faq-header w-full p-6 text-left font-display font-bold text-gray-900 flex justify-between items-center focus:outline-none cursor-pointer"
                  >
                    <span className="flex flex-col pr-4">
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      <span className="lang-tamil text-xs font-tamil text-gray-500 font-normal mt-0.5">
                        {faq.qTa}
                      </span>
                    </span>
                    <span
                      className="faq-icon text-brand-electric font-bold text-xl transition-transform duration-300 shrink-0"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`faq-content px-6 pb-6 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4 ${
                      isOpen ? 'block animate-fade-in' : 'hidden'
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
