export const CLINIC = {
  name: "Asteria Skin & Wellness Clinic",
  tagline: "Premium Skin & Wellness Care — Safe, Modern, Personalised",
  location: "Chennai, Tamil Nadu",
  phone: "+91 90000 12345",
  whatsapp: "+91 90000 12345",
  hours: "Mon–Sun: 9:00 AM – 8:00 PM",
  rating: "4.9",
  reviewCount: "1,200+",
  visits: "10,000+",
};

export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  price: string;
  duration: string;
  icon: string;
  color: string;
  includes: string[];
  whoFor: string[];
  sessions: string;
  safety: string;
}

export const SERVICES: Service[] = [
  {
    id: "acne-scar",
    name: "Acne & Scar Treatment",
    shortDesc: "Advanced protocols to reduce active acne and fade scars effectively.",
    price: "₹2,999",
    duration: "45–60 min",
    icon: "✨",
    color: "from-rose-400 to-pink-500",
    includes: [
      "Skin analysis & consultation",
      "Deep pore cleanse + extraction",
      "Targeted spot treatment",
      "LED light therapy",
      "Post-care soothing mask",
    ],
    whoFor: ["Active acne sufferers", "Post-acne hyperpigmentation", "Acne scar reduction seekers"],
    sessions: "4–6 sessions recommended (2–4 weeks apart) for best results",
    safety:
      "Clinically supervised. Mild redness may occur for 24–48 hrs. Sun protection advised.",
  },
  {
    id: "laser-hair",
    name: "Laser Hair Reduction",
    shortDesc: "Long-lasting hair reduction using medical-grade diode laser technology.",
    price: "₹1,999",
    duration: "20–45 min",
    icon: "⚡",
    color: "from-violet-400 to-purple-500",
    includes: [
      "Skin & hair type assessment",
      "Medical-grade diode laser session",
      "Cooling gel application",
      "Post-session soothing care",
    ],
    whoFor: ["Unwanted facial/body hair", "Ingrown hair issues", "Anyone seeking long-term reduction"],
    sessions: "6–8 sessions for significant reduction; maintenance sessions thereafter",
    safety:
      "Safe for most skin tones. Mild warmth/tingling during session. Avoid sun 2 weeks pre/post.",
  },
  {
    id: "prp-hair",
    name: "PRP Hair Therapy",
    shortDesc: "Platelet-Rich Plasma therapy to nourish hair follicles and reduce hair fall.",
    price: "₹4,999",
    duration: "60–75 min",
    icon: "💧",
    color: "from-teal-400 to-cyan-500",
    includes: [
      "Blood draw & PRP preparation",
      "Scalp numbing cream",
      "Micro-injection of PRP",
      "Scalp massage therapy",
      "Post-care instructions",
    ],
    whoFor: ["Early hair loss (Grade I–III)", "Thinning hair concerns", "Post-partum hair loss"],
    sessions: "3–4 sessions (monthly), then maintenance every 6 months",
    safety:
      "Uses your own blood plasma — minimal allergy risk. Mild scalp tenderness for 24–48 hrs.",
  },
  {
    id: "hydrafacial",
    name: "HydraFacial Glow",
    shortDesc: "Multi-step hydra-dermabrasion for instantly glowing, refreshed skin.",
    price: "₹2,499",
    duration: "60 min",
    icon: "🌊",
    color: "from-sky-400 to-blue-500",
    includes: [
      "Deep cleanse & exfoliation",
      "Gentle acid peel",
      "Painless extractions (vortex suction)",
      "Antioxidant serum infusion",
      "Hydration lock & SPF finish",
    ],
    whoFor: ["Dull, tired skin", "Pre-event glow seekers", "Dehydrated or stressed skin"],
    sessions: "Single session shows visible results; monthly maintenance recommended",
    safety:
      "Non-invasive, no downtime. Suitable for all skin types. Mild sensitivity for a few hours.",
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Consult",
    shortDesc: "Expert Botox & filler consultations to plan your personalised rejuvenation.",
    price: "₹699",
    duration: "30 min",
    icon: "🕊️",
    color: "from-amber-400 to-orange-500",
    includes: [
      "Detailed facial analysis",
      "Personalised treatment mapping",
      "Product & procedure recommendations",
      "Realistic outcome discussion",
      "No-pressure consultation",
    ],
    whoFor: ["Fine lines & wrinkle concerns", "Volume loss concerns", "Anyone exploring aesthetic options"],
    sessions: "Consultation is standalone; treatment plans discussed individually",
    safety:
      "Consultation only — no procedures during this session. All options explained transparently.",
  },
  {
    id: "pigmentation",
    name: "Pigmentation & Tan Removal",
    shortDesc: "Targeted treatments to even skin tone and reduce sun damage effectively.",
    price: "₹2,499",
    duration: "45 min",
    icon: "🌟",
    color: "from-yellow-400 to-amber-500",
    includes: [
      "Skin tone analysis",
      "Targeted depigmentation therapy",
      "Vitamin C brightening infusion",
      "Gentle laser/IPL option",
      "SPF counselling",
    ],
    whoFor: ["Sun tan & hyperpigmentation", "Melasma concerns", "Uneven skin tone"],
    sessions: "4–6 sessions recommended; results may vary by skin type",
    safety:
      "Mild redness expected. Strict sun protection mandatory during treatment course.",
  },
  {
    id: "chemical-peel",
    name: "Medi-Peel / Chemical Peel",
    shortDesc: "Professional-grade peels to resurface skin texture and address concerns.",
    price: "₹2,999",
    duration: "30–45 min",
    icon: "🍃",
    color: "from-green-400 to-emerald-500",
    includes: [
      "Skin assessment & prep",
      "Customised peel selection",
      "Peel application & neutralisation",
      "Calming serum & moisturiser",
      "Post-peel care kit guidance",
    ],
    whoFor: ["Textured / congested skin", "Fine lines & dullness", "Mild acne & pigmentation"],
    sessions: "Series of 4–6 peels (2–4 weeks apart) for optimal outcome",
    safety:
      "Mild peeling for 3–5 days post-session. Avoid harsh actives & sun during recovery.",
  },
  {
    id: "body-contouring",
    name: "Body Contouring Consult",
    shortDesc: "Evidence-based contouring consultations to explore non-surgical body shaping options.",
    price: "₹699",
    duration: "30 min",
    icon: "💎",
    color: "from-indigo-400 to-blue-500",
    includes: [
      "BMI & body composition discussion",
      "Treatment option walkthrough",
      "Personalised goal mapping",
      "Lifestyle & nutrition guidance",
      "Follow-up plan outline",
    ],
    whoFor: ["Localised fat concerns", "Post-pregnancy body goals", "Anyone exploring non-surgical options"],
    sessions: "Consultation standalone; treatment sessions discussed post-assessment",
    safety:
      "Consultation only. All non-surgical options explained with realistic expectations.",
  },
  {
    id: "skin-consult",
    name: "General Skin Consultation",
    shortDesc: "Comprehensive skin analysis with a certified dermatologist for a personalised plan.",
    price: "₹699",
    duration: "30 min",
    icon: "🩺",
    color: "from-cyan-400 to-teal-500",
    includes: [
      "Full skin assessment",
      "Medical & lifestyle history",
      "Skincare routine review",
      "Personalised prescription (if needed)",
      "Written care plan",
    ],
    whoFor: ["New patients", "Changing skin concerns", "Routine skin health check"],
    sessions: "Single session — follow-up as recommended by the doctor",
    safety:
      "Non-invasive consultation. Safe for all skin types and ages.",
  },
];

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  available: boolean;
  color: string;
  initials: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "ananya",
    name: "Dr. Ananya Iyer",
    qualification: "MD (Dermatology)",
    specialization: "Medical & Cosmetic Dermatology",
    experience: "10+ years",
    available: true,
    color: "from-rose-400 to-pink-500",
    initials: "AI",
  },
  {
    id: "karthik",
    name: "Dr. Karthik Raman",
    qualification: "MBBS, DDVL",
    specialization: "Dermatology & Venereology",
    experience: "8+ years",
    available: true,
    color: "from-teal-400 to-cyan-500",
    initials: "KR",
  },
  {
    id: "meera",
    name: "Dr. Meera Sundaram",
    qualification: "Cosmetologist (Certified)",
    specialization: "Cosmetic Procedures & Skin Wellness",
    experience: "7+ years",
    available: false,
    color: "from-violet-400 to-purple-500",
    initials: "MS",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  text: string;
  initials: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya Krishnamurthy",
    service: "HydraFacial Glow",
    rating: 5,
    text: "I had my HydraFacial done before my wedding and the results were genuinely wonderful. My skin looked fresh and hydrated for the entire event. The team was professional and made me feel completely at ease.",
    initials: "PK",
    location: "Anna Nagar, Chennai",
  },
  {
    id: 2,
    name: "Arjun Selvam",
    service: "Laser Hair Reduction",
    rating: 5,
    text: "Six sessions of laser hair reduction and I'm so happy I made the decision. The staff explained everything clearly, the procedure was comfortable, and the results have been consistent. Very professional setup.",
    initials: "AS",
    location: "Velachery, Chennai",
  },
  {
    id: 3,
    name: "Deepa Narayanan",
    service: "Acne & Scar Treatment",
    rating: 5,
    text: "I'd struggled with acne scars for years. Dr. Ananya designed a plan specifically for my skin, and after the recommended sessions I'm genuinely pleased with the improvement. Transparent about what to expect — I appreciated that.",
    initials: "DN",
    location: "Adyar, Chennai",
  },
  {
    id: 4,
    name: "Ramesh Balaji",
    service: "PRP Hair Therapy",
    rating: 5,
    text: "Started PRP for early hair thinning after a recommendation from a friend. The doctors are knowledgeable and the process was explained step by step. Three sessions in and I'm noticing positive changes.",
    initials: "RB",
    location: "Porur, Chennai",
  },
  {
    id: 5,
    name: "Sunitha Mohan",
    service: "Pigmentation & Tan Removal",
    rating: 5,
    text: "My sun tan was really bothering me. The clinic assessed my skin type first, then recommended a suitable treatment plan. No rush to upsell anything — just honest advice. The clinic is also very clean and hygienic.",
    initials: "SM",
    location: "T. Nagar, Chennai",
  },
  {
    id: 6,
    name: "Vikram Chandrasekaran",
    service: "General Skin Consultation",
    rating: 5,
    text: "Came in for a general consultation and left with a clear skincare plan and a prescription. Dr. Karthik spent good time understanding my concerns. The ₹699 consultation fee is completely worth it for the clarity you get.",
    initials: "VC",
    location: "Nungambakkam, Chennai",
  },
  {
    id: 7,
    name: "Kavitha Subramaniam",
    service: "Medi-Peel / Chemical Peel",
    rating: 5,
    text: "Had a series of chemical peels for texture issues. The doctor customised the strength for my skin, and the staff guided me through post-care thoroughly. My skin texture has noticeably improved over the course.",
    initials: "KS",
    location: "Mylapore, Chennai",
  },
  {
    id: 8,
    name: "Anand Raghunathan",
    service: "Anti-Aging Consult",
    rating: 5,
    text: "Was considering aesthetic treatments but had many questions. The anti-aging consultation was thorough, honest and zero-pressure. Dr. Meera explained what's realistic and what isn't — exactly the kind of advice I needed.",
    initials: "AR",
    location: "Guindy, Chennai",
  },
];

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: "Are the treatments safe? What certifications do your doctors hold?",
    answer:
      "Yes. All treatments at Asteria are performed by certified dermatologists and trained cosmetologists. Our clinic uses medical-grade equipment and follows strict sterilisation protocols approved by regulatory standards. Each treatment is preceded by a skin assessment to ensure suitability.",
  },
  {
    id: 2,
    question: "How many sessions will I need to see results?",
    answer:
      "The number of sessions varies by treatment and individual skin type. For example, laser hair reduction typically requires 6–8 sessions, while a HydraFacial may show visible results after a single session. During your consultation, your doctor will give you an honest, personalised estimate — we do not promise fixed outcomes.",
  },
  {
    id: 3,
    question: "Is there downtime after treatments? Can I return to work the same day?",
    answer:
      "Most of our treatments are low-downtime or no-downtime procedures. A HydraFacial or consultation has zero downtime. Chemical peels may involve 3–5 days of mild skin shedding. Laser sessions may cause temporary redness. Your doctor will advise you specifically before your session.",
  },
  {
    id: 4,
    question: "What is your consultation fee?",
    answer:
      "A general skin consultation with our dermatologist is ₹699. Specialised consultations (anti-aging, body contouring) are also ₹699. The consultation fee is fully transparent with no hidden charges. Treatment costs are explained clearly during the consultation before you commit to anything.",
  },
  {
    id: 5,
    question: "Is pricing transparent? Are there hidden charges?",
    answer:
      "Absolutely. We believe in upfront, transparent pricing. The 'starting from' prices listed are the base rates for a single session. Packages or multi-session plans may be discussed, but there is no obligation to purchase. All costs are communicated before treatment begins.",
  },
  {
    id: 6,
    question: "How long does a typical appointment last?",
    answer:
      "Consultations run 20–30 minutes. Treatment sessions range from 20 minutes (small-area laser) to 75 minutes (PRP hair therapy). We recommend arriving 10 minutes early for paperwork. You will be informed of the approximate duration when you book.",
  },
  {
    id: 7,
    question: "What should I do before my first appointment?",
    answer:
      "Remove makeup or heavy skincare products before arriving. Avoid sun exposure 48 hours before laser/peel sessions. Bring any ongoing prescriptions or skincare products you currently use. For PRP, avoid blood thinners (with your doctor's advice). We will send a pre-visit checklist via WhatsApp after booking.",
  },
  {
    id: 8,
    question: "Do you offer a guarantee on results?",
    answer:
      "We do not promise or guarantee specific outcomes, as results vary by individual skin type, lifestyle, and adherence to post-care. What we do promise is honest, evidence-based advice, personalised treatment plans, and full support throughout your journey. We encourage realistic expectations and open communication.",
  },
];
