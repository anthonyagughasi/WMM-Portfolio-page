import { CaseStudy, Discipline, StrategicGoal, Testimonial, Sector } from '../types';

export const STUDIO_META = {
  name: 'We Make Magic Studios',
  logoUrl: '/assets/aistudio/www.wemakemagicstudios-scaled_f3202998.png',
  tagline: 'We build brands people feel before they buy.',
  subheading: 'A premium creative and marketing studio. Strategy, cinematic content and digital campaigns, run as one structured system for brands that want to be remembered.',
  location: 'Abuja, Nigeria',
  address: 'Nile St, River Park Estate, Airport Road, Abuja',
  phone: '+234 703 273 8365',
  phoneRaw: '2347032738365',
  primaryEmail: 'info@wemakemagicstudios.com',
  secondaryEmail: 'wemakemagicstudios@gmail.com',
  website: 'www.wemakemagicstudios.com',
  sectorsServed: ['Fragrance & Skincare', 'Furniture & Interior', 'Healthcare & Clinical', 'Hospitality & Dining'],
  marketsServed: 'Serving Nigeria and international markets',
  socials: [
    { name: 'Instagram', url: 'https://instagram.com/wemakemagicstudios' },
    { name: 'YouTube', url: 'https://youtube.com/@wemakemagicstudios' },
    { name: 'Facebook', url: 'https://facebook.com/wemakemagicstudios' },
    { name: 'X', url: 'https://x.com/wemakemagicstudios' }
  ]
};

export const DISCIPLINES: Discipline[] = [
  {
    id: 'strategy-pr',
    number: '01',
    title: 'Strategy and PR',
    summary: 'Positioning that gives every post, shoot and ad a reason to exist. We study your market, define the emotional position you should own and plan how the brand shows up in public.',
    deliverables: [
      'Brand positioning and audit',
      'Campaign strategy',
      'PR outreach and influencer alignment',
      'Content planning and calendars'
    ],
    iconName: 'Compass'
  },
  {
    id: 'cinematic-production',
    number: '02',
    title: 'Cinematic Production',
    summary: 'Film and photography built to look like the brand feels. Directed shoots with the right crew, camera setup and edit workflow, from cinematic brand films to mobile-first reels.',
    deliverables: [
      'Cinematography and photography',
      'Short-form reels and story-led video',
      'Event coverage with multi-camera crews',
      'Editing, grading and sound design'
    ],
    iconName: 'Film'
  },
  {
    id: 'digital-campaigns',
    number: '03',
    title: 'Digital Campaigns',
    summary: 'Content and paid media that move people from seeing to buying. We manage the channels, the ad structure and the reporting so creative work is tied to a result the business cares about.',
    deliverables: [
      'Meta and Google ads management',
      'Social media management and engagement',
      'Audience and CRM feedback analysis',
      'Monthly performance reporting'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'brand-design',
    number: '04',
    title: 'Brand and Design',
    summary: 'A visual system your team can use without it falling apart. Identity, kits and campaign graphics designed with specialist brand designers so everything reads as one house.',
    deliverables: [
      'Brand identity and brand kits',
      'Campaign graphics and carousels',
      'Catalog and sales collateral',
      'Investor and partnership decks'
    ],
    iconName: 'Palette'
  },
  {
    id: 'tech-consultation',
    number: '05',
    title: 'Tech Consultation',
    summary: 'Technical strategy, digital product engineering and platform development. We build high-performance digital systems that turn brand vision into operational software.',
    deliverables: [
      'Website design and custom development',
      'Web and mobile app development',
      'Custom platforms and client portals',
      'Technical architecture and integrations'
    ],
    iconName: 'Code2'
  }
];

export const SECTOR_FILTERS: Sector[] = [
  'All',
  'Fragrance & Beauty',
  'Furniture & Home',
  'Healthcare',
  'Hospitality & Food'
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'hareem-istanbul',
    brandName: 'Hareem Istanbul',
    title: 'Hareem Istanbul',
    sector: 'Fragrance & Beauty',
    sectorLabel: 'Fragrance and skincare',
    logoUrl: '/assets/aistudio/1__1__210dd987.png',
    summary: 'A luxury fragrance and skincare house growing across Nigeria, Ghana and Romania. We operate as its digital marketing department.',
    brief: 'Make the brand read as luxury everywhere it appears, keep one emotional voice across new markets and concentrate effort on Instagram instead of spreading thin.',
    whatWeBuilt: [
      'Two Ways to Ride: a story-led campaign linking the Safari car perfumes with the EU travel sets through male and female perspectives',
      'Berceker, Skin of the Unarmored: infographic messaging on personality, ingredient science and ease of use, with influencer posting guides',
      'Founder-led reels with an emotional hook, a clear introduction and a story body',
      'A fragrance web series with recurring characters',
      'A three-month content calendar around the Ghana store launch'
    ],
    howWeRunIt: 'Instagram-first strategy, Meta ads, influencers chosen for niche and emotional fit, and one content system shared by every Hareem market.',
    highlightMetric: 'Unified across Nigeria, Ghana & Romania',
    isFeatured: true
  },
  {
    id: 'vantage-furniture',
    brandName: 'Vantage Furniture',
    title: 'Vantage Furniture',
    sector: 'Furniture & Home',
    sectorLabel: 'Furniture',
    logoUrl: '/assets/aistudio/4_bdad2c5e.png',
    summary: 'Premium furniture sold through moments that matter: the wedding, the Eid table, the first home.',
    brief: 'Turn a large catalog into occasion-led buying, so customers shop a feeling and a complete room instead of single pieces.',
    whatWeBuilt: [
      'Forever Begins Here: a wedding campaign that launched in July 2025',
      'Five curated wedding packages, from the Ruby Starter to the Lina Luxury lounge, built into visuals, ads and the catalog',
      'Eid Dining Activation: campaign strategy centred on the dining table',
      'Catalog and ad creative for each package'
    ],
    howWeRunIt: 'Nationwide Meta targeting read against real audience behaviour, with lookalike retargeting adjusted by where engagement was coming from.',
    highlightMetric: '5 Occasion-Led Curated Room Packages',
    isFeatured: true
  },
  {
    id: 'mc-hair-transplant',
    brandName: 'MC Turkish Hair Transplant',
    title: 'MC Hair Transplant',
    sector: 'Healthcare',
    sectorLabel: 'Healthcare',
    logoUrl: '/assets/aistudio/images__1_-removebg-preview_da2ca6fd.png',
    summary: 'A hair transplant clinic serving Abuja and Lagos. The studio runs its Meta, TikTok and WhatsApp advertising and its content, with restorative wording throughout.',
    brief: 'Rebuild patient trust and demystify surgical restoration in Nigeria. Shift messaging away from aggressive clinical discounts toward dignified, restorative personal transformations with medical transparency.',
    whatWeBuilt: [
      'Restorative video narratives showcasing physician consultation empathy, procedure comfort, and natural graft line recovery',
      'Targeted Meta and TikTok advertising campaigns structured around privacy, confidence, and natural aesthetic results',
      'Direct-to-WhatsApp patient intake funnel with rapid assessment workflows and consultation scheduling',
      'Patient reassurance carousels, hair wellness education, and surgeon expertise highlights'
    ],
    howWeRunIt: 'The studio runs its Meta, TikTok and WhatsApp advertising and its content, with restorative wording throughout. Integrated performance ads targeting Lagos and Abuja qualified audiences paired with daily lead qualification and tone governance.',
    highlightMetric: 'Dual-City (Abuja & Lagos) Patient Acquisition System',
    isFeatured: true
  },
  {
    id: 'g-burger',
    brandName: 'G-Burger',
    title: 'G-Burger',
    sector: 'Hospitality & Food',
    sectorLabel: 'Hospitality, food',
    logoUrl: '/assets/aistudio/images__2_-removebg-preview_61d1d46d.png',
    summary: 'A burger brand. The studio produces its cinematic reels and motion graphics.',
    brief: 'Turn appetizing street gourmet craftsmanship into craveable digital content that drives instant delivery orders and weekend foot traffic surges.',
    whatWeBuilt: [
      'Cinematic food reels with hyper-detailed macro capture: sizzling smashed patties, melting artisanal cheese, and toasted brioche buns',
      'Bespoke branded motion graphics packages for digital menus, seasonal drops, and promotional story stickers',
      'Fast-paced audio-synced video shorts designed specifically for high-retention Instagram and TikTok feeds',
      'Geo-targeted call-to-order overlays directing hunger traffic straight to WhatsApp and delivery partners'
    ],
    howWeRunIt: 'The studio produces its cinematic reels and motion graphics. High-cadence film shoots, rapid color grading, and timed delivery window ad blasts targeting hungry local zones.',
    highlightMetric: 'Cinematic Reels & Bespoke Motion Graphics',
    isFeatured: true
  },
  {
    id: 'nizamiye-hospital',
    brandName: 'Nizamiye Hospital',
    title: 'Nizamiye Hospital',
    sector: 'Healthcare',
    sectorLabel: 'Healthcare',
    logoUrl: '/assets/aistudio/2__1__c38af797.png',
    summary: 'A hospital brand where trust is the product, kept present and human online every single day.',
    brief: 'Stay consistent, reassuring and responsive on social media in a sector where tone matters more than trends.',
    whatWeBuilt: [
      'Ongoing social media management and content planning',
      'Daily follow up on stories, highlights, comments and replies',
      'A dedicated client channel checked every day',
      'Regular reporting on activity and content'
    ],
    howWeRunIt: 'Daily accountability from the digital marketing team, with executive oversight on engagement and client communication.',
    highlightMetric: 'Daily Patient Trust & Clinical Communication Channel',
    isFeatured: true
  },
  {
    id: 'istanbul-cafe-express',
    brandName: 'Istanbul Cafe & Restaurant',
    title: 'Istanbul Cafe Express',
    sector: 'Hospitality & Food',
    sectorLabel: 'Hospitality',
    logoUrl: '/assets/aistudio/2_c960c13f.png',
    summary: 'A location showcase film told through a phone call between two people, built to sell the ambiance, the food and delivery in one scene.',
    brief: 'Sell the ambiance, authentic Turkish flavors, and rapid home delivery within one fluid cinematic scene without standard commercial voiceovers.',
    whatWeBuilt: [
      'A location showcase film told through a phone call between two people, linking dining ambiance with direct home delivery',
      'Signature dish sizzle reels highlighting authentic Mediterranean dining culture',
      'Campaign graphics for seasonal feasts and direct takeaway ordering'
    ],
    howWeRunIt: 'Cinematic location direction, narrative pacing, and focused hospitality ads tied to peak dining times.',
    highlightMetric: 'Narrative Showcase Film & Delivery Campaign'
  },
  {
    id: 'hareem-villa',
    brandName: 'Hareem Villa',
    title: 'Hareem Villa',
    sector: 'Hospitality & Food',
    sectorLabel: 'Hospitality',
    logoUrl: '/assets/aistudio/1__1__210dd987.png',
    summary: 'A premium shortlet concept styled with Hareem fragrances and skincare, with mood based booking, scent rituals and an investor deck.',
    brief: 'Create a multisensory hospitality concept that turns shortlet stays into branded rituals and convinces early-stage investors.',
    whatWeBuilt: [
      'Premium shortlet identity styled with Hareem fragrances and botanical skincare',
      'Mood-based booking structure and signature scent ritual guides for guests',
      'Complete private investor and partner deck articulating returns and expansion model'
    ],
    howWeRunIt: 'Hospitality concept architecture, luxury interior scent curation, and investor collateral design.',
    highlightMetric: 'Mood-Based Booking Architecture & Investor Deck'
  },
  {
    id: 'elba-furniture',
    brandName: 'Elba Furniture & Doors',
    title: 'Elba Furniture',
    sector: 'Furniture & Home',
    sectorLabel: 'Home and build',
    logoUrl: '/assets/aistudio/images-removebg-preview_fc483109.png',
    summary: 'Market research on buyer behaviour, pricing and competitors for a luxury door brand entering Lagos, Abuja and Port Harcourt. We then defined what the brand’s content should look like and produced the first pieces.',
    brief: 'Conduct comprehensive market intelligence across Nigeria’s top 3 luxury real estate hubs to establish pricing power and aesthetic distinction for architectural doors.',
    whatWeBuilt: [
      'Comprehensive market research on buyer behaviour, pricing structures, and competitor benchmarks in Lagos, Abuja, and Port Harcourt',
      'A defined brand visual direction tailored to high-net-worth homeowners and architects',
      'Production of the brand’s first suite of cinematic photography and video assets'
    ],
    howWeRunIt: 'Empirical market intelligence combined with architectural studio photography and strategic buyer profiling.',
    highlightMetric: 'Tri-City Market Research (Lagos, Abuja, PH) & Content System'
  },
  {
    id: 'chayim-diagnostics',
    brandName: 'Chayim Diagnostics',
    title: 'Chayim Diagnostics',
    sector: 'Healthcare',
    sectorLabel: 'Healthcare',
    logoUrl: '/assets/aistudio/chayim_1366abd0.png',
    summary: 'Marketing and content work for a state-of-the-art diagnostic centre living the future of medicine.',
    brief: 'Transform diagnostic medical technology into accessible, compassionate patient communications that encourage early health screenings.',
    whatWeBuilt: [
      'Marketing strategy and clinical content architecture for diagnostic imaging and lab testing',
      'Clear, empathetic breakdown carousels explaining medical scans and preventive wellness packages',
      'Digital campaign creative highlighting accuracy, speed, and consultant accessibility'
    ],
    howWeRunIt: 'Structured health communication schedules backed by clinical advisory oversight and informative visual design.',
    highlightMetric: 'Diagnostic Precision & Patient Wellness Engagement'
  },
  {
    id: 'nizamiye-beauty',
    brandName: 'Nizamiye Beauty',
    title: 'Nizamiye Beauty',
    sector: 'Fragrance & Beauty',
    sectorLabel: 'Beauty & Wellness',
    logoUrl: '/assets/aistudio/3_fb5db40c.png',
    summary: 'A luxury aesthetic clinic where clinical safety meets refined aesthetic care, managed as an internal marketing department.',
    brief: 'Build high-touch digital positioning that highlights medical qualifications while delivering an indulgent, reassuring beauty experience.',
    whatWeBuilt: [
      'Aesthetic treatment walkthroughs and dermatologist insight series',
      'VIP photo sessions and visual branding for medical spa procedures',
      'Consultation acquisition funnels and social media management'
    ],
    howWeRunIt: 'Seamless embedded studio support acting directly alongside their clinic coordinators and clinical specialists.',
    highlightMetric: 'Embedded Digital Department & High-Ticket Consultations'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Hareem Istanbul', logo: '/assets/aistudio/1__1__210dd987.png', sector: 'Fragrance & Skincare' },
  { name: 'Vantage Furniture', logo: '/assets/aistudio/4_bdad2c5e.png', sector: 'Furniture & Living' },
  { name: 'Nizamiye Hospital', logo: '/assets/aistudio/2__1__c38af797.png', sector: 'Healthcare' },
  { name: 'MC Turkish Hair Transplant', logo: '/assets/aistudio/images__1_-removebg-preview_da2ca6fd.png', sector: 'Healthcare' },
  { name: 'G-Burger', logo: '/assets/aistudio/images__2_-removebg-preview_61d1d46d.png', sector: 'Hospitality & Food' },
  { name: 'Nizamiye Beauty', logo: '/assets/aistudio/3_fb5db40c.png', sector: 'Beauty & Wellness' },
  { name: 'Istanbul Cafe & Restaurant', logo: '/assets/aistudio/2_c960c13f.png', sector: 'Hospitality & Dining' },
  { name: 'Elba Furniture & Doors', logo: '/assets/aistudio/images-removebg-preview_fc483109.png', sector: 'Home & Build' },
  { name: 'Chayim Diagnostics', logo: '/assets/aistudio/chayim_1366abd0.png', sector: 'Advanced Diagnostics' }
];

export const STRATEGIC_GOALS: StrategicGoal[] = [
  {
    id: 'awareness',
    label: 'Awareness',
    heading: 'Make the brand known and respected.',
    description: 'Authority grows when people see a brand often and always in the same emotional voice. We plan reach, story and visual consistency first, then measure how much of the right audience now recognises you.',
    tactics: [
      'High-impact cinematic brand films & founder-led narratives',
      'Broad-reach Meta & TikTok distribution targeting key metropolitan nodes',
      'PR positioning, press coverage, and niche influencer alignment',
      'Consistent visual language across every public touchpoint'
    ]
  },
  {
    id: 'engagement',
    label: 'Engagement',
    heading: 'Give people a reason to come closer.',
    description: 'We build content that invites a reply, a save or a share, tied to one emotion for your niche. Audience feedback from the CRM is read next to social data so the next piece is smarter than the last.',
    tactics: [
      'Story-led carousels and relatable problem-solution reels',
      'Active daily community moderation, story replies, and client inquiry triage',
      'Audience commentary feedback loops into creative production',
      'Interactive polls, sensory reveals, and occasion-led activations'
    ]
  },
  {
    id: 'conversion',
    label: 'Conversion',
    heading: 'Turn attention into enquiries and sales.',
    description: 'Creative is mapped to the buying journey, with ad structure, offers and sales follow up aligned. Digital marketing, customer relations and sales work from the same plan.',
    tactics: [
      'Full-funnel Meta, TikTok and Google retargeting architecture',
      'Frictionless WhatsApp lead generation and CRM automated booking handoffs',
      'Occasion-led package pricing, curated catalog offers, and timed promotions',
      'Unified sales reporting connecting ad spend to realized bank revenue'
    ]
  }
];

export const STRATEGIC_PILLARS = [
  {
    title: 'Emotional Growth Plan',
    description: 'Each niche gets its own path through a seven-pillar emotion tree, so messaging stays consistent across every platform.',
    highlight: '7-Pillar Framework'
  },
  {
    title: 'Creative Analysis',
    description: 'We read audience feedback in the CRM against social engagement data before deciding what to make next.',
    highlight: 'CRM + Social Intelligence'
  },
  {
    title: 'AI as a Tool',
    description: 'Chatbots and creative tools speed us up. People still direct the story, and a professional is hired when the job needs one.',
    highlight: 'Human-Led Craft'
  },
  {
    title: 'Human-Centered Resonance',
    description: 'Our storytelling is crafted around how modern audiences instinctively perceive, connect, and make intuitive buying decisions.',
    highlight: 'Emotional Connection'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'vantage',
    quote: 'Marketing felt like a struggle until We Make Magic Studios stepped in. Now, customers don’t just buy, they connect, share, and return!',
    client: 'Vantage Furniture',
    role: 'Managing Partner'
  },
  {
    id: 'nizamiye-beauty',
    quote: 'They didn’t just meet our expectations. They exceeded it. Not just working as an external team, but they made it feel like they were part of our own internal team.',
    client: 'Nizamiye Beauty',
    role: 'Operations & Aesthetics Lead'
  },
  {
    id: 'madam-ayse',
    quote: 'I had a wonderful photo session and felt very well taken care of. The staff were very professional and the pictures came out beautifully.',
    client: 'Madam Ayse',
    role: 'Private Client'
  }
];
