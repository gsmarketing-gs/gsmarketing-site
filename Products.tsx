import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface ContactProps {
  prefillData?: { title: string; code: string } | null;
}

export default function Contact({ prefillData }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shopName: '',
    city: '',
    businessType: 'Electrical Shop',
    message: '',
  });

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in enquiring about: ${prefillData.title} (Code: ${prefillData.code}). Please send me the wholesale pricing structure.`,
      }));
    }
  }, [prefillData]);

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
    text += `Business Category: ${formData.businessType}\n`;
    if (formData.message) text += `Message: ${formData.message}\n\n`;
    text += `I would like to make an inquiry on your products. Please contact me.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917598103492?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-20 relative text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="flex justify-center mb-2">
            <img
              src="/images/logo.jpg"
              alt="GSmarketing Logo"
              className="h-20 w-20 rounded-2xl object-cover border border-brand-accent-yellow/30 shadow-xl"
            />
          </div>
          <span className="text-brand-accent-yellow text-xs font-bold uppercase tracking-widest block">
            COMMERCIAL HELPDESK
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            Get In Touch With GSmarketing
            <span className="lang-tamil block text-xl sm:text-2xl font-tamil text-brand-accent-yellow mt-1">
              எங்களைத் தொடர்பு கொள்ளவும்
            </span>
          </h1>
          <p className="text-blue-100 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have technical questions, pricing queries, or dealer requests? Write to us or call our headquarters team directly.
          </p>
        </div>
      </section>

      {/* Primary Contact Details & Map */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Side: Contact details & Map */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">Distribution HQ</h2>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Our administrative distribution board and bulk cargo operations run from the following location:
                </p>
              </div>

              {/* Contact list info */}
              <div className="space-y-6 text-sm">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Phone Support (மொபைல் எண்)</p>
                    <p className="text-brand-royal font-extrabold text-lg mt-0.5">+91 75981 03492</p>
                    <p className="text-xs text-gray-400">Available 9:00 AM - 8:00 PM (Monday to Saturday)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">✉</span>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Corporate Email (மின்னஞ்சல்)</p>
                    <p className="text-brand-royal font-medium mt-0.5">gsmarketing0919@gmail.com</p>
                    <p className="text-xs text-gray-400">General logistics and dealer invoicing support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Registered Office Address (அலுவலக முகவரி)</p>
                    <div className="text-gray-600 text-xs sm:text-sm mt-1 space-y-1 font-medium bg-gray-50 p-4.5 rounded-2xl border border-gray-100 shadow-sm leading-relaxed">
                      <p className="font-extrabold text-brand-royal">GSmarketing</p>
                      <p>Shop No. 9,</p>
                      <p>ECR Main Road,</p>
                      <p>Opposite Chevalier Sellane School,</p>
                      <p>Periya Kalapet,</p>
                      <p>Puducherry – 605014,</p>
                      <p>India.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Territory Logistics Coverage</p>
                    <p className="text-gray-600 text-xs sm:text-sm mt-0.5 leading-relaxed font-semibold text-brand-royal">
                      Authorized distributor serving: • Puducherry (including Karaikal) • Villupuram District • Cuddalore District
                    </p>
                  </div>
                </div>
              </div>

              {/* Map block */}
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 flex flex-col items-center justify-center text-center space-y-3 shadow-inner">
                <span className="text-3xl">🗺️</span>
                <div className="space-y-1">
                  <p className="font-bold text-sm text-gray-900">GSmarketing Headquarters Map</p>
                  <p className="text-xs text-brand-royal font-bold">Shop No. 9, ECR Main Road, Periya Kalapet, Puducherry</p>
                  <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">Opposite Chevalier Sellane School, Puducherry – 605014</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=GSmarketing+Shop+No+9+ECR+Main+Road+Opposite+Chevalier+Sellane+School+Periya+Kalapet+Puducherry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-slate-900 text-white hover:bg-slate-950 text-xs font-bold rounded-lg transition-colors inline-block cursor-pointer"
                >
                  Open Google Maps Location
                </a>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-xl">
              <div className="space-y-2 mb-8">
                <h3 className="font-display font-extrabold text-xl text-gray-900">Send an Online Inquiry</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Your message will be formatted and redirected to our corporate WhatsApp desk.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                  />
                </div>

                {/* Shop name and City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Shop / Agency Name</label>
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      placeholder="Enter shop name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">City / District *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter city or district"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Business category */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Your Business Category</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                  >
                    <option value="Electrical Shop">Electrical Retailer / Dealer</option>
                    <option value="Hardware Shop">Hardware / Paint / Construction Shop</option>
                    <option value="Contractor">Electrician / Building Contractor</option>
                    <option value="General Consumer">Individual Consumer / Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Inquiry Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your query..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-colors shadow-md flex items-center justify-center space-x-2 text-sm cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.002-5.062-2.826-6.889-1.825-1.826-4.253-2.831-6.864-2.831-5.441 0-9.865 4.37-9.869 9.756-.002 1.76.476 3.48 1.385 5.017l-.952 3.478 3.567-.937zm11.383-7.258c-.3-.15-1.771-.875-2.046-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.792-1.49-1.77-1.665-2.07-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.492-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 1.05-1.05 1.05s-.975 1.725-.975 4.25c0 2.525 1.85 4.95 2.1 5.3.25.35 3.6 5.5 8.725 7.7.12.05.23.1.34.15 1.22.39 2.33.33 3.2.2 1-.15 2.2-.9 2.5-1.775.3-.875.3-1.625.2-1.775-.1-.15-.35-.25-.65-.4z" />
                  </svg>
                  <span>Submit Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
