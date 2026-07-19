import { useState, ChangeEvent, FormEvent } from 'react';

export default function Dealers() {
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
    text += `I would like to apply for dealer status / enquire about your distributor opportunities.\nPlease contact me.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917598103492?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    {
      icon: '📈',
      title: 'High Margin Business',
      titleTa: 'அதிக லாப வரம்பு',
      desc: 'We provide genuine distributor-level pricing allowing you to enjoy retail profit margins of 35% to 50% on key LED and electrical accessories.',
    },
    {
      icon: '📍',
      title: 'Territory Monopoly',
      titleTa: 'வட்டார பிரத்தியேக உரிமை',
      desc: 'Once registered as an authorized dealer for a specific locality (e.g. Cuddalore town or Karaikal district), we protect your business from other nearby competitors.',
    },
    {
      icon: '🍎',
      title: 'MALANO APPLE Brand Power',
      titleTa: 'மாலானோ ஆப்பிள் பிராண்ட் மதிப்பு',
      desc: 'Gain the exclusive right to sell the popular MALANO APPLE Hair Color (Premium Ammonia-Free Dye) alongside our general high-quality LED lighting range, both commanding massive customer loyalty.',
    },
    {
      icon: '📋',
      title: 'Marketing Aid & Boards',
      titleTa: 'மார்க்கெட்டிங் விளம்பரங்கள்',
      desc: 'We provide official flex boards, product demo panels, printed catalogs, and promotional bags to help customers identify your shop as an authorized dealer.',
    },
    {
      icon: '🚚',
      title: 'Prompt Delivery & Dispatch',
      titleTa: 'விரைவான டெலிவரி வசதி',
      desc: 'Never stay out of stock. Our weekly transport vehicles directly service Cuddalore, Karaikal, Villupuram, Thanjavur, and other municipalities to deliver goods to your door.',
    },
    {
      icon: '🛡️',
      title: 'Defective Replacement Policy',
      titleTa: 'உடனடி மாற்று கொள்கை',
      desc: 'No risk of dead stock. Any manufacturing error or transport damage is seamlessly replaced or credited in your next billing cycle with simple, clear audits.',
    },
  ];

  const deliveryCircuits = [
    { area: 'Puducherry & Villupuram', targets: 'Electrical & Hardwares', frequency: 'Bi-Weekly', isSpecial: false },
    { area: 'Cuddalore & Chidambaram', targets: 'Hardware & Builders', frequency: 'Bi-Weekly', isSpecial: false },
    { area: 'Karaikal & Mayiladuthurai', targets: 'Electrical Shops', frequency: 'Weekly', isSpecial: false },
    { area: 'Nagapattinam & Tiruvarur', targets: 'Wholesale & Retailers', frequency: 'Weekly', isSpecial: false },
    { area: 'Thanjavur & Rest of Tamil Nadu', targets: 'All Authorized Dealers', frequency: 'On-Demand Daily', isSpecial: true },
  ];

  const testimonials = [
    {
      text: '"Before partnering with GSmarketing, we had constant stock delays with other suppliers. Their wholesale lighting items sell incredibly fast in our shop. Their weekly vehicle delivery to Cuddalore is highly reliable!"',
      author: 'K. Selvam',
      shop: 'Selvam Electricals, Cuddalore',
      initials: 'KS',
    },
    {
      text: '"The Bio Septic digest powder and modular electrical switch accessories have added massive monthly profit to our store. Customer feedback is excellent. GSmarketing staff are very supportive with boards and posters."',
      author: 'M. Radhakrishnan',
      shop: 'MR Hardwares, Puducherry',
      initials: 'MR',
    },
    {
      text: '"Their billing and exchange policies are very clear and transparent. Any mirror light damage is swapped immediately. I highly recommend taking their dealership across Thanjavur and Karaikal areas."',
      author: 'S. Sundaram',
      shop: 'Sri Balaji Electrical Agency, Karaikal',
      initials: 'S',
    },
  ];

  return (
    <div className="pt-20">
      {/* --- MAIN HERO RECRUITMENT BANNER --- */}
      <section className="bg-gradient-to-r from-brand-royal to-blue-800 text-white py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-brand-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider badge-pulse">
            EXCLUSIVE OPPORTUNITY
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            MALANO APPLE Hair Color Dealership
            <span className="lang-tamil block text-xl sm:text-3xl font-tamil text-brand-accent-yellow mt-2">
              மாலானோ ஆப்பிள் ஹேர் கலர் டீலர்கள் தேவை
            </span>
          </h1>
          <p className="text-blue-100 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Join the GSmarketing distribution family. Secure your exclusive territory for the premium high-demand{' '}
            <strong className="text-brand-accent-yellow">MALANO APPLE Hair Color</strong> alongside our lighting and power solutions, maximizing your store's daily profitability.
          </p>

          {/* Quick Badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 text-[10px] sm:text-xs font-semibold">
            <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">✓ No High Security Deposit</span>
            <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">✓ Assured Territory Protection</span>
            <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">✓ Quick Doorstep Delivery</span>
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP BENEFITS & GROWTH ADVANTAGE --- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-brand-electric font-bold text-xs uppercase tracking-widest block">
              PARTNER ADVANTAGE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900">
              Why Become a GSmarketing Dealer?
              <span className="lang-tamil block text-lg sm:text-2xl font-tamil text-brand-electric mt-1">
                டீலர்ஷிப் எடுப்பதன் சிறப்புகள்
              </span>
            </h2>
            <div className="h-1 w-20 bg-brand-accent-orange mx-auto rounded"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-50 border border-gray-100 rounded-2xl space-y-4 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-royal text-xl">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900">
                  {b.title}
                  <span className="lang-tamil block text-xs font-tamil text-brand-royal mt-0.5">{b.titleTa}</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HUB DISTRICT DELIVERY SCHEDULE MAP --- */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Grid details */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-brand-accent-orange font-bold text-xs uppercase tracking-widest block">
                TARGET DISTRICTS
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 leading-tight">
                Our Regular Delivery Circuits
                <span className="lang-tamil block text-lg font-tamil text-brand-royal mt-1">எங்கள் சப்ளை ஏரியாக்கள்</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-base leading-relaxed">
                We operate scheduled wholesale distribution dispatch vehicles on fixed weekly routes, keeping your stock fully replenished without heavy freight transit charges.
              </p>
              <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <p className="text-xs font-bold text-gray-600 mb-1">Primary Distribution Hub:</p>
                <p className="text-sm font-bold text-brand-royal flex items-center">
                  <span>📍 Puducherry (புதுச்சேரி) &amp; Cuddalore (கடலூர்)</span>
                </p>
              </div>
            </div>

            {/* Schedule list table */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">
                Weekly Transit Circuits
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 uppercase font-bold text-[10px] tracking-wider">
                      <th className="p-3">Circuit / Area Name (பகுதி)</th>
                      <th className="p-3">Target Outlets</th>
                      <th className="p-3">Dispatch Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {deliveryCircuits.map((c, idx) => (
                      <tr key={idx}>
                        <td className="p-3 font-semibold text-gray-900">{c.area}</td>
                        <td className="p-3 text-gray-500">{c.targets}</td>
                        <td className="p-3">
                          <span
                            className={`px-2.5 py-0.5 rounded text-xs inline-block font-semibold ${
                              c.isSpecial
                                ? 'bg-amber-50 text-amber-700'
                                : c.frequency === 'Weekly'
                                ? 'bg-blue-50 text-brand-royal'
                                : 'bg-emerald-50 text-emerald-700'
                            }`}
                          >
                            {c.frequency}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUCCESS STORIES / DEALER TESTIMONIALS --- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-brand-electric font-bold text-xs uppercase tracking-widest block">
              TRUSTED BY 250+ SHOPS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900">
              Success Stories from our Dealer Network
              <span className="lang-tamil block text-lg sm:text-2xl font-tamil text-brand-electric mt-1">
                டீலர்களின் உண்மை கருத்துக்கள்
              </span>
            </h2>
            <div className="h-1 w-20 bg-brand-accent-orange mx-auto rounded"></div>
          </div>

          {/* Testimonial List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-6"
              >
                <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed">{t.text}</p>
                <div className="flex items-center space-x-3.5 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 bg-brand-royal rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.shop}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE WIDGET APPLICATION FORM --- */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" id="dealer-register-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-accent-orange font-bold text-xs uppercase tracking-widest block">
                REGISTER NOW
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 leading-tight">
                Secure Your Town Dealership Fast
                <span className="lang-tamil block text-lg sm:text-2xl font-tamil text-brand-accent-orange mt-1">
                  ஏரியா டீலர்ஷிப் பதிவு படிவம்
                </span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Fill out the application with your store name, business type, and city of interest. Clicking submit immediately prepares a formatted message template in WhatsApp. Our support manager will call you back to confirm pricing.
              </p>
              <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-xs space-y-2">
                <p className="font-bold text-brand-royal">✓ Authorized GSmarketing Distributor</p>
                <p className="text-gray-500">✓ Fully compliant with state trade safety certifications.</p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Your Full Name *</label>
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
                  {/* Phone */}
                  <div className="space-y-2">
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Shop Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Shop / Company Name</label>
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      placeholder="Enter shop or company name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                    />
                  </div>
                  {/* City */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">City / Town of Interest *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter town or district"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Business Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Your Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
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
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">Message / Product Demands</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mention products of interest (e.g. MALANO APPLE Hair Color, LED Panel lights, switches, bio septic powder)..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal focus:bg-white text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-colors shadow-lg flex items-center justify-center space-x-2 text-base cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.002-5.062-2.826-6.889-1.825-1.826-4.253-2.831-6.864-2.831-5.441 0-9.865 4.37-9.869 9.756-.002 1.76.476 3.48 1.385 5.017l-.952 3.478 3.567-.937zm11.383-7.258c-.3-.15-1.771-.875-2.046-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.792-1.49-1.77-1.665-2.07-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.492-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 1.05-1.05 1.05s-.975 1.725-.975 4.25c0 2.525 1.85 4.95 2.1 5.3.25.35 3.6 5.5 8.725 7.7.12.05.23.1.34.15 1.22.39 2.33.33 3.2.2 1-.15 2.2-.9 2.5-1.775.3-.875.3-1.625.2-1.775-.1-.15-.35-.25-.65-.4z" />
                  </svg>
                  <span>Apply via WhatsApp (சமர்ப்பிக்கவும்)</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
