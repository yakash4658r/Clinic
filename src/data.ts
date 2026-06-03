export const CLINIC = {
  name: "Shree IVF Care",
  branchName: "Shree IVF Care",
  tagline: "High Success Rates — Ethical, Evidence-Based & Affordable Infertility Treatments",
  location: "Pondicherry",
  addressPondy: "Shree IVF Care, Navayuga Nagar, Mortandi, Pattanur, Tamil Nadu 605101",
  phone: "+91 98946 19153",
  phoneAlt: "+91 98946 19153",
  whatsapp: "+91 98946 19153",
  hours: "Mon–Sun: 9:00 AM – 8:30 PM",
  rating: "4.9",
  reviewCount: "1,500+",
  visits: "10,000+",
  babiesBorn: "5,000+",
  experienceYears: "20+",
  successRate: "80%",
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
    id: "natural-ivf",
    name: "Natural Cycle IVF",
    shortDesc: "A gentle IVF approach that works with your body's natural cycle without high-dose hormone medications.",
    price: "₹60,000",
    duration: "2-3 weeks",
    icon: "🌸",
    color: "from-rose-400 to-pink-500",
    includes: [
      "Natural ovulation cycle monitoring",
      "Egg retrieval under mild sedation",
      "Embryo culture in advanced incubators",
      "Single embryo transfer",
      "Post-transfer support & counseling"
    ],
    whoFor: ["Women with regular ovulation", "Those seeking medication-free treatments", "Couples looking for a gentle IVF option"],
    sessions: "1 cycle",
    safety: "Highly safe with minimal medication. Zero risk of Ovarian Hyperstimulation Syndrome (OHSS)."
  },
  {
    id: "ovulation-induction",
    name: "Ovulation Induction",
    shortDesc: "Simple fertility medications to stimulate ovaries and promote release of healthy eggs.",
    price: "₹5,000",
    duration: "10-14 days",
    icon: "🥚",
    color: "from-amber-400 to-orange-500",
    includes: [
      "Follicular tracking ultrasound scans",
      "Hormone baseline screening",
      "Prescription of ovulation stimulants",
      "Timed intercourse scheduling advice"
    ],
    whoFor: ["Women with irregular ovulation or PCOS", "Couples trying to conceive naturally", "Early stage fertility treatment"],
    sessions: "3–6 cycles recommended",
    safety: "Non-invasive. Small risk of multiple pregnancy which is carefully monitored via scans."
  },
  {
    id: "icsi",
    name: "Intra Cytoplasmic Sperm Injection",
    shortDesc: "Advanced micro-fertilization where a single healthy sperm is injected directly into an egg.",
    price: "₹1,20,000",
    duration: "45 min",
    icon: "💉",
    color: "from-violet-400 to-purple-500",
    includes: [
      "Sperm selection under high magnification",
      "Direct micro-injection by senior embryologist",
      "Embryo development tracking",
      "Sterile ICSI lab setup charges"
    ],
    whoFor: ["Severe male infertility", "Low sperm count or poor motility", "Previous failed IVF cycles"],
    sessions: "Part of IVF cycle",
    safety: "High success rates. Performed by expert embryologists under strict sterile conditions."
  },
  {
    id: "iui",
    name: "Intrauterine Insemination",
    shortDesc: "Placing washed and concentrated sperm directly inside the uterus around the time of ovulation.",
    price: "₹10,000",
    duration: "15-20 min",
    icon: "🧬",
    color: "from-teal-400 to-cyan-500",
    includes: [
      "Sperm washing & enrichment",
      "Insemination procedure",
      "Post-procedure recovery rest",
      "Dermatologist/fertility specialist supervision"
    ],
    whoFor: ["Mild male factor infertility", "Unexplained infertility", "Cervical mucus issues"],
    sessions: "3-4 cycles advised",
    safety: "Simple, outpatient procedure. Minimal discomfort, similar to a regular pap smear."
  },
  {
    id: "surgical-treatment",
    name: "Surgical Treatment Options",
    shortDesc: "Minimally invasive keyhole surgeries (laparoscopy/hysteroscopy) to correct fertility obstructions.",
    price: "₹25,000",
    duration: "Varies",
    icon: "🩺",
    color: "from-blue-400 to-indigo-500",
    includes: [
      "Pre-operative checkup & clearance",
      "Minimally invasive laparoscopy/hysteroscopy",
      "Post-op observation",
      "Expert surgeon fees & nursing care"
    ],
    whoFor: ["Uterine fibroids or polyps", "Blocked fallopian tubes", "Severe endometriosis"],
    sessions: "One-time procedure",
    safety: "Safe, daycare or short hospital stay. Swift recovery within a few days."
  },
  {
    id: "pgd",
    name: "Preimplantation Genetic Diagnosis",
    shortDesc: "Testing embryos for genetic disorders prior to transfer to ensure a healthy pregnancy.",
    price: "₹50,000",
    duration: "Lab based",
    icon: "🔬",
    color: "from-sky-400 to-blue-500",
    includes: [
      "Embryo biopsy",
      "Genetic screening panels",
      "Cryopreservation of embryos during testing",
      "Detailed genetic counseling & roadmap"
    ],
    whoFor: ["Couples with hereditary diseases", "Advanced maternal age", "Recurrent miscarriages"],
    sessions: "Per IVF cycle",
    safety: "Highly sophisticated and safe. Performed under high-power laser systems."
  },
  {
    id: "cryopreservation",
    name: "Cryopreservation of Sperm/Embryo",
    shortDesc: "Advanced freezing techniques to preserve eggs, sperm, or embryos for future use.",
    price: "₹25,000",
    duration: "Varies",
    icon: "❄️",
    color: "from-cyan-400 to-teal-500",
    includes: [
      "Semen/embryo vitrification",
      "Medical-grade liquid nitrogen storage",
      "First year maintenance fee",
      "Safety monitoring"
    ],
    whoFor: ["Fertility preservation for career", "Oncology patients before chemo", "Saving leftover embryos from IVF"],
    sessions: "Long term preservation",
    safety: "Extremely safe. Vitrification ensures high survival rates of cells upon thawing."
  },
  {
    id: "ivf",
    name: "In Vitro Fertilization",
    shortDesc: "Standard fertility treatment where eggs are fertilized by sperm outside the body in a laboratory.",
    price: "₹95,000",
    duration: "4-6 weeks",
    icon: "👶",
    color: "from-emerald-400 to-teal-500",
    includes: [
      "Ovarian stimulation monitoring",
      "Egg collection under anesthesia",
      "Lab fertilization & incubation",
      "Embryo transfer procedure"
    ],
    whoFor: ["Blocked fallopian tubes", "Advanced endometriosis", "Unexplained infertility after failed IUIs"],
    sessions: "1 full cycle",
    safety: "Fully supervised medical procedure with detailed scans at every step."
  },
  {
    id: "surrogacy",
    name: "Surrogacy Consultation",
    shortDesc: "Expert medical and legal compliance counseling for gestational surrogacy options.",
    price: "₹2,000",
    duration: "60 min",
    icon: "🤰",
    color: "from-pink-400 to-rose-500",
    includes: [
      "Legal framework briefing",
      "Medical feasibility review",
      "Surrogate matching guidelines",
      "Process mapping"
    ],
    whoFor: ["Severe uterine abnormalities", "Repeated pregnancy loss", "Medical conditions making pregnancy unsafe"],
    sessions: "Consultation standalone",
    safety: "Fully legal and ethical guidance in accordance with state laws."
  },
  {
    id: "frozen-embryo-transfer",
    name: "Frozen Embryo Transfer",
    shortDesc: "Thawing previously frozen embryos and transferring them into the prepared uterus.",
    price: "₹35,000",
    duration: "30 min",
    icon: "✨",
    color: "from-rose-400 to-pink-500",
    includes: [
      "Endometrial preparation protocols",
      "Laser-assisted hatching (if needed)",
      "Embryo thawing & check",
      "Transfer procedure under ultrasound guidance"
    ],
    whoFor: ["Leftover embryos from past cycles", "Postponed fresh transfer due to high hormones", "Planning siblings years later"],
    sessions: "1 transfer session",
    safety: "Non-invasive. High success rates equal to or higher than fresh transfer."
  },
  {
    id: "ovarian-drilling",
    name: "Ovarian Drilling",
    shortDesc: "Surgical puncture of ovaries with laser or electrocautery to restore normal ovulation in severe PCOS.",
    price: "₹25,000",
    duration: "45 min",
    icon: "⚡",
    color: "from-amber-400 to-orange-500",
    includes: [
      "Daycare laparoscopy",
      "Anesthesia & surgical care",
      "Post-op pain management",
      "Ovulation monitoring scans"
    ],
    whoFor: ["Severe PCOS patients resistant to oral drugs", "Women wanting to restore natural cycles"],
    sessions: "One-time surgery",
    safety: "Minimally invasive keyhole surgery. Fast healing and recovery."
  },
  {
    id: "blastocyst-transfer",
    name: "Blastocyst Transfer",
    shortDesc: "Growing embryos for 5 days until they reach the blastocyst stage before transferring them.",
    price: "₹15,000",
    duration: "Part of IVF cycle",
    icon: "🧬",
    color: "from-violet-400 to-purple-500",
    includes: [
      "Extended lab culture to Day 5",
      "Embryologist assessment of blastocyst grade",
      "Laser assisted transfer",
      "Vitrification of surplus blastocysts"
    ],
    whoFor: ["Desiring higher success rates per transfer", "Reducing risk of multiple births (single embryo transfer)"],
    sessions: "1 transfer cycle",
    safety: "Mimics natural implantation timing, resulting in higher pregnancy rates."
  },
  {
    id: "tesa",
    name: "Testicular Sperm Aspiration",
    shortDesc: "Minimally invasive extraction of sperm directly from the testicles for male infertility.",
    price: "₹30,000",
    duration: "30 min",
    icon: "💉",
    color: "from-blue-400 to-indigo-500",
    includes: [
      "Local anesthesia",
      "Fine needle aspiration of testicular tissue",
      "Immediate lab search for viable sperm",
      "ICSI fertilization preparation"
    ],
    whoFor: ["Azoospermia (zero sperm in semen)", "Blockage in sperm ducts", "Severe male factor issues"],
    sessions: "Outpatient procedure",
    safety: "Safe, outpatient procedure. Minimal recovery downtime with mild discomfort for a few days."
  },
  {
    id: "infertility-diagnosis",
    name: "Infertility Diagnosis",
    shortDesc: "Comprehensive male and female fertility evaluation scans and semen analysis to identify root causes.",
    price: "₹1,500",
    duration: "60-90 min",
    icon: "🔍",
    color: "from-teal-400 to-cyan-500",
    includes: [
      "Semen analysis",
      "Transvaginal scan (USG)",
      "Hormone level checkup",
      "Couple counseling & customized roadmap"
    ],
    whoFor: ["Couples unable to conceive after 1 year of marriage", "Irregular cycles", "Curious about fertility status"],
    sessions: "Diagnostic phase",
    safety: "Completely safe, non-invasive screening diagnostics."
  }
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
  desc: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "hemalatha",
    name: "Dr. S. Hemalatha V",
    qualification: "M.Phil., Ph.D. (Embryology)",
    specialization: "Chief Embryologist & Founder",
    experience: "20+ years",
    available: true,
    color: "from-rose-400 to-pink-500",
    initials: "SH",
    desc: "A pioneer in embryology and fertility counseling. Expert in treating high-risk patients and repeated ICSI failures. Her practice is evidence-based, ethical, and affordable."
  },
  {
    id: "bharathi",
    name: "Dr. Bharathi",
    qualification: "MD (Reproductive Medicine)",
    specialization: "Senior Fertility Specialist",
    experience: "15+ years",
    available: true,
    color: "from-teal-400 to-cyan-500",
    initials: "DB",
    desc: "Renowned expert in reproductive medicine, ovarian stimulation, and managing complex IVF cycles."
  }
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
    name: "Priya & Ramkumar",
    service: "In Vitro Fertilization",
    rating: 5,
    text: "After 7 years of marriage and two failed attempts elsewhere, we visited Shree IVF Care. Dr. Hemalatha's guidance and ethical approach changed our lives. The lab facilities are top-notch and we are now parents to a healthy baby girl!",
    initials: "PR",
    location: "Pondicherry",
  },
  {
    id: 2,
    name: "Vijay & Nandhini",
    service: "Intra Cytoplasmic Sperm Injection",
    rating: 5,
    text: "We are extremely grateful to Shree IVF Care in Pondicherry. The ICSI treatment was successful on our first attempt. Transparent pricing and constant support throughout the process.",
    initials: "VN",
    location: "Pondicherry",
  },
  {
    id: 3,
    name: "Gayathri & Suresh",
    service: "Blastocyst Transfer",
    rating: 5,
    text: "Best IVF clinic near Pondicherry. Highly experienced staff and Dr. Hemalatha explained every step clearly. The blastocyst transfer worked wonders for us.",
    initials: "GS",
    location: "Cuddalore",
  },
  {
    id: 4,
    name: "Kavitha & Arul",
    service: "Intrauterine Insemination",
    rating: 5,
    text: "Affordable treatment compared to other corporate clinics. No hidden charges. The doctors are highly professional and empathetic.",
    initials: "KA",
    location: "Villupuram",
  }
];

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: "What is your success rate for IVF?",
    answer: "Our clinic has an 80% success rate depending on patient age, diagnosis, and medical history. We follow evidence-based protocols to ensure the highest possible chance of pregnancy.",
  },
  {
    id: 2,
    question: "Is pricing transparent? Are there hidden charges?",
    answer: "Absolutely. Shree IVF Care is built on an ethical, affordable approach. All costs are discussed upfront during your custom treatment planning. We have no hidden charges.",
  },
  {
    id: 3,
    question: "How many IVF cycles will I need?",
    answer: "Many couples achieve success in their first cycle. However, some may require 2 to 3 cycles depending on age and fertility conditions. Your embryologist will detail your chances transparently.",
  },
  {
    id: 4,
    question: "What is your consultation fee?",
    answer: "A complete fertility consultation starts from ₹1,500, which includes custom pelvic scans and sperm/semen analysis review counseling. There are no pressure packages.",
  }
];
