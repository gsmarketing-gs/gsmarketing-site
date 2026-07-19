export interface Product {
  id: string;
  category: string;
  title: string;
  titleTa: string;
  code: string;
  desc: string;
  img: string;
  tag?: string;
  badge?: string;
  moq: string;
  isPriority?: boolean;
  gallery?: string[];
  galleryDescs?: string[];
}

export interface GalleryItem {
  id: string;
  category: string; // 'lighting' | 'operations'
  title: string;
  code: string;
  desc: string;
  img: string;
  label: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'dye01',
    category: 'hair-dye',
    title: 'MALANO APPLE Hair Colour Cream',
    titleTa: 'மாலானோ ஆப்பிள் ஹேர் கலர் கிரீம்',
    code: 'GSM-MAL-DYE01',
    desc: 'Ammonia-free, long-lasting premium formulation with apple botanical conditioning extracts. Complete gray coverage within 15 minutes. Features Pouches A & B (500ml) with zero-stain clear water formula.',
    img: '/images/products/malano_apple_cream_main.jpg',
    tag: 'MALANO APPLE FLAGSHIP',
    badge: 'PRIORITY ITEM',
    moq: '100 Packs',
    isPriority: true,
    gallery: [
      '/images/products/malano_apple_cream_main.jpg',
      '/images/products/malano_apple_cream_features.jpg',
      '/images/products/malano_apple_cream_before_after.jpg',
      '/images/products/malano_apple_cream_tutorial.jpg'
    ],
    galleryDescs: [
      'Super premium ammonia-free formulation with apple extract and clear water technology. No towel or scalp stains. 100% natural coverage in just 15 minutes. Includes Pouches A & B (500ml).',
      'Key features: Ammonia-Free, Clear Water Type Formula, No Towel No Scalp Stain, Long-Lasting Natural Black, Made in India gold seal.',
      '15 Minutes Hair Transformation. Enriched with Apple-Extract Formula, powered by Clear Water Technology. Beautiful natural black locks.',
      'How to Use (4 Easy Steps): 1. Mix A + B in a bowl, 2. Apply on dry hair, 3. Wait for 15 minutes, 4. Rinse with water. Zero scalp stains.'
    ]
  },
  {
    id: 'dye02',
    category: 'hair-dye',
    title: 'MALANO Fruit Vinegar Hair Colour Gel',
    titleTa: 'மாலானோ பழ வினிகர் ஹேர் கலர் ஜெல்',
    code: 'GSM-MAL-DYE02',
    desc: 'Premium Fruit Vinegar formulation for deep natural shine, soft conditioning, and vibrant healthy locks. 100% ammonia-free, works in just 10 minutes. High profit margin product for supermarkets.',
    img: '/images/products/malano_vinegar_gel_main.jpg',
    tag: 'FRUIT VINEGAR SPECIAL',
    moq: '100 Packs'
  },
  {
    id: 'inv11',
    category: 'inverters',
    title: 'Pure Sine Wave Home Inverter',
    titleTa: 'சைன் வேவ் ஹோம் இன்வெர்ட்டர்',
    code: 'GSM-INV11',
    desc: 'Intelligent Pure Sine Wave Home Inverter with multi-stage smart battery charger. Automatically cuts off under short-circuit or overload. Quiet operations.',
    img: '/images/products/led-lights.svg',
    tag: 'POWER BACKUP',
    moq: '5 units'
  },
  {
    id: 'led009',
    category: 'led-lights',
    title: 'Premium 9W LED Panel Light',
    titleTa: 'உயர்தர 9W எல்இடி விளக்கு',
    code: 'GSM-LED-009',
    desc: 'Premium 9 Watt ceiling recessed LED light panel with multi-surge voltage protection. High lumen output. Beautiful warm/neutral/cool temperature selection.',
    img: '/images/products/led-lights.svg',
    tag: 'PREMIUM LIGHTING',
    moq: '20 pcs'
  },
  {
    id: 'led015',
    category: 'led-lights',
    title: 'Premium 15W LED Panel Light',
    titleTa: 'உயர்தர 15W எல்இடி விளக்கு',
    code: 'GSM-LED-015',
    desc: 'Heavy-duty 15 Watt ceiling recessed LED light panel designed for deep commercial illuminations. Anti-flicker, 2-year warranty included.',
    img: '/images/products/led-lights.svg',
    tag: 'PREMIUM LIGHTING',
    moq: '20 pcs'
  },
  {
    id: 'cob006',
    category: 'led-lights',
    title: 'Modular LED COB Spotlight 6W',
    titleTa: 'சிஓபி ஸ்பாட்லைட் விளக்கு',
    code: 'GSM-COB-006',
    desc: '6W Focused spotlight for show-walls, art features, and home ceilings. Rotatable axis for complete focus adjustment.',
    img: '/images/products/led-lights.svg',
    tag: 'ACCENT LIGHTING',
    moq: '30 pcs'
  },
  {
    id: 'ledt5',
    category: 'tube-lights',
    title: 'Premium T5 Tube Light 20W',
    titleTa: 'உயர்தர டி5 டியூப் லைட்',
    code: 'GSM-LED-T5',
    desc: 'Slim integrated 4-foot LED Tube Light. Easy bracket-mount fixture, high power factor, and excellent energy savings. High-efficiency drivers.',
    img: '/images/products/tube-lights.svg',
    tag: 'PREMIUM LIGHTING',
    moq: '25 pcs'
  },
  {
    id: 't8g22',
    category: 'tube-lights',
    title: 'T8 Glass LED Tube Light 22W',
    titleTa: 'டி8 கிளாஸ் டியூப் லைட்',
    code: 'GSM-T8G-22',
    desc: 'Super bright industrial grade glass-body LED tube light. Wide 270-degree beam angle, high resistance to high line surges.',
    img: '/images/products/tube-lights.svg',
    tag: 'INDUSTRIAL STRENGTH',
    moq: '25 pcs'
  },
  {
    id: 'mirrd24',
    category: 'mirror-lights',
    title: 'LED Backlit Bathroom Mirror',
    titleTa: 'லக்ஸரி எல்இடி கண்ணாடி விளக்கு',
    code: 'GSM-MIR-RD24',
    desc: '24-inch circular vanity glass mirror with frosted margin backlit by high-density LEDs. Smart touch sensor and anti-condensation heater.',
    img: '/images/products/mirror-lights.svg',
    tag: 'LUXURY HOME DECOR',
    moq: '5 pcs'
  },
  {
    id: 'modsw06',
    category: 'accessories',
    title: 'Modular 6A Switch Plate series',
    titleTa: 'மாடுலர் மின்சார சுவிட்சுகள்',
    code: 'GSM-MOD-SW06',
    desc: 'White non-combustible polycarbonate modular switches and 3-pin socket units. Heavy duty silver alloy contact nodes for sparks prevention.',
    img: '/images/products/accessories.svg',
    tag: 'MODULAR FITTINGS',
    moq: '200 pcs'
  },
  {
    id: 'wire15',
    category: 'accessories',
    title: 'Flame Retardant PVC Copper Wire',
    titleTa: 'தீத்தடுப்பு செம்பு ஒயர்கள்',
    code: 'GSM-WIRE-15',
    desc: 'Triple layer insulated electrolytic pure copper wire, certified ISI standard. High thermal conductivity, excellent current carrying capacity.',
    img: '/images/products/accessories.svg',
    tag: 'DOMESTIC CABLES',
    moq: '10 coils'
  },
  {
    id: 'dyebk',
    category: 'hair-dye',
    title: 'MALANO APPLE Black Hair Colour Shampoo',
    titleTa: 'மாலானோ ஆப்பிள் பிளாக் ஹேர் கலர் ஷாம்பு',
    code: 'GSM-DYE-BK',
    desc: 'New and improved shampoo formula. Ammonia-free, works in just 5 minutes for natural black color and intense shine. Very convenient for quick home use with high customer satisfaction.',
    img: '/images/products/malano_apple_shampoo_main.jpg',
    tag: 'FAST SHAMPOO TYPE',
    moq: '120 packets'
  },
  {
    id: 'biob01',
    category: 'bio-septic',
    title: 'Bio Septic Digest Powder (1Kg)',
    titleTa: 'பயோ செப்டிக் ஜீரண பவுடர்',
    code: 'GSM-BIO-B01',
    desc: 'Concentrated bacterial spore culture for chemical-free septic system cleaning. Dissolves organic solid waste buildup, eradicates foul toilet odor.',
    img: '/images/products/bio-septic.svg',
    tag: 'ECO SYSTEM CLEANER',
    moq: '20 buckets'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-l01',
    category: 'lighting',
    title: 'Exquisite Ceiling LED Recessed Panels Installation',
    code: 'GALLERY-L01',
    desc: 'Modern office lighting design highlighting recessed LED Panel Lights (15W) with cool daylight temperature.',
    img: '/images/products/led-lights.svg',
    label: 'Ceiling LED Panel Fitting'
  },
  {
    id: 'g-l02',
    category: 'lighting',
    title: 'Slim T5 Tube Light Installation in Store Corridor',
    code: 'GALLERY-L02',
    desc: 'Uniform light spread across a large retail hallway using energy-efficient T5 integrated tube light fittings.',
    img: '/images/products/tube-lights.svg',
    label: 'Integrated T5 Corridor Light'
  },
  {
    id: 'g-l03',
    category: 'lighting',
    title: 'Luxury Mirror Backlighting Design',
    code: 'GALLERY-L03',
    desc: 'Elegant circular mirror setup in a luxury hotel washroom, backlit with warm circular LED light bands.',
    img: '/images/products/mirror-lights.svg',
    label: 'Luxury Backlit Mirror Light'
  },
  {
    id: 'g-o01',
    category: 'operations',
    title: 'Bulk Modular Accessories Packing',
    code: 'GALLERY-O01',
    desc: 'Bulk shipments of modular switchboard plates and wire bundles prepared for distribution to Karaikal.',
    img: '/images/products/accessories.svg',
    label: 'Bulk Switchboard Packings'
  },
  {
    id: 'g-o02',
    category: 'operations',
    title: 'Eco Bio-Septic Powder Warehousing',
    code: 'GALLERY-O02',
    desc: 'Pallet storage of Eco Bio-Septic digest powder buckets and packets ready for agricultural/municipal dispatches.',
    img: '/images/products/bio-septic.svg',
    label: 'Bio-Septic stock Pallets'
  },
  {
    id: 'g-o03',
    category: 'operations',
    title: 'Natural Cosmetics Packaging and Dispatch',
    code: 'GALLERY-O03',
    desc: 'Fast dispatch packaging of our ammonia-free natural black hair dye series for superstores across Puducherry.',
    img: '/images/products/malano_apple_cream_main.jpg',
    label: 'Natural Hair Dye Shipments'
  }
];
