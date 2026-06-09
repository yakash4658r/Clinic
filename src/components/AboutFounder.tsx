import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { SERVICES } from "../data";
import { useReducedMotion } from "../hooks/useReducedMotion";
import founderImg from "../assets/founder.jpeg";
import { 
  Leaf, 
  Activity, 
  Syringe, 
  Dna, 
  Stethoscope, 
  Microscope, 
  Snowflake, 
  Baby, 
  Users, 
  TestTube, 
  ClipboardList,
  Clock,
  ShieldCheck
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

const BADGE_STYLES: Record<string, string> = {
  pink:   "bg-pink-100 text-pink-700 border border-pink-200",
  blue:   "bg-blue-100 text-blue-700 border border-blue-200",
  violet: "bg-violet-100 text-violet-700 border border-violet-200",
  teal:   "bg-teal-100 text-teal-700 border border-teal-200",
  amber:  "bg-amber-100 text-amber-700 border border-amber-200",
  indigo: "bg-indigo-100 text-indigo-700 border border-indigo-200",
  cyan:   "bg-cyan-100 text-cyan-700 border border-cyan-200",
  rose:   "bg-rose-100 text-rose-700 border border-rose-200",
  purple: "bg-purple-100 text-purple-700 border border-purple-200",
};

const SERVICE_META: Record<string, { category: string; color: string }> = {
  "natural-ivf":          { category: "FERTILITY",    color: "pink" },
  "ovulation-induction":  { category: "HORMONAL",     color: "amber" },
  "icsi":                 { category: "EMBRYOLOGY",   color: "violet" },
  "iui":                  { category: "INSEMINATION", color: "teal" },
  "surgical-treatment":   { category: "SURGICAL",     color: "blue" },
  "pgd":                  { category: "GENETICS",     color: "indigo" },
  "cryopreservation":     { category: "PRESERVATION", color: "cyan" },
  "ivf":                  { category: "FERTILITY",    color: "rose" },
  "surrogacy":            { category: "COLLABORATIVE",color: "purple" },
  "frozen-embryo-transfer":{ category: "FET",         color: "pink" },
  "ovarian-drilling":     { category: "SURGICAL",     color: "amber" },
  "blastocyst-transfer":  { category: "EMBRYOLOGY",   color: "violet" },
  "tesa":                 { category: "MALE FACTOR",  color: "blue" },
  "infertility-diagnosis":{ category: "DIAGNOSTICS",  color: "teal" },
};

export default function AboutFounder() {
  const prefersReduced = useReducedMotion();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const scrollToForm = () => {
    const el = document.querySelector("#appointment-form");
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
    }
  };

  return (
    <>
      {/* Stats Bar */}
      <div className="bg-[#14427b] text-white py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-white/20">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <Baby className="w-8 h-8 mb-3 text-white" strokeWidth={1.5} />
              <div className="text-lg lg:text-xl font-bold">5000+ Babies born</div>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <Clock className="w-8 h-8 mb-3 text-white" strokeWidth={1.5} />
              <div className="text-lg lg:text-xl font-bold">10+ years of experience</div>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <ShieldCheck className="w-8 h-8 mb-3 text-white" strokeWidth={1.5} />
              <div className="text-lg lg:text-xl font-bold">80% Success Rate</div>
            </div>
            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <Users className="w-8 h-8 mb-3 text-white" strokeWidth={1.5} />
              <div className="text-lg lg:text-xl font-bold">10,000+ Trusted Families</div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Paragraph */}
          <AnimatedSection>
            <p className="text-gray-900 text-lg md:text-[22px] leading-relaxed mb-10 font-medium text-center md:text-left">
              Shree IVF Care in Pondicherry is the brainchild of Dr. Hemalatha An ethical approach in counseling the patients, stating facts and offering affordable treatments for infertility has made Shree IVF Care in Pondicherry carve out an identity of its own. We aim at making treatments offered to overcome infertility, affordable, accessible and available for couples from all walks of life.
            </p>
          </AnimatedSection>

          {/* Divider */}
          <hr className="border-gray-800 border-t mb-12" />

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Side */}
            <div className="lg:col-span-7">
              <AnimatedSection direction="left">
                <h2 className="font-extrabold text-3xl md:text-[34px] text-[#14427b] leading-tight mb-8">
                  IVF Treatment at the Lowest Cost<br/>
                  <span className="text-[#e51b60]">in Pondicherry</span>
                </h2>

                <h3 className="font-bold text-[22px] text-[#14427b] mb-4">About Our Founder</h3>
                
                <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed mb-6">
                  <p>
                    Dr.S. Hemalatha V did her M.PHIL., PHD., EMBRYOLOGIST (EXPERIENCE MORE THAN 20 YEARS)
                  </p>
                  <p>
                    She is successful in treating high-risk patients and repeated ICSI failures. Her practice is evidence-based, ethical, and affordable. Dr S Hemalatha is patient-friendly, emphasizing detailed history, necessary investigations, and empathy. Her mission is to provide quality treatment at an affordable cost to help couples achieve parenthood.
                  </p>
                </div>

                <h4 className="font-extrabold text-gray-900 text-[17px] mb-4">
                  Here are some reasons why we are successful for over 10 years:
                </h4>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-700 text-[15px] marker:text-gray-800">
                  <li>Experience and Expertise</li>
                  <li>Consistency and Trust</li>
                  <li>Adaptation to Advances in Medicine</li>
                  <li>Patient-Centered Care</li>
                  <li>Compassionate Care</li>
                  <li>Strong Medical Team</li>
                  <li>Community Involvement</li>
                </ul>
              </AnimatedSection>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="right" className="flex flex-col items-center">
                
                {/* Image Container with Blob */}
                <div className="relative w-full max-w-[400px] aspect-square mb-6 mx-auto">
                  {/* Decorative circles */}
                  <div className="absolute top-12 left-4 w-6 h-6 bg-blue-100 rounded-full opacity-70" />
                  <div className="absolute top-8 right-16 w-4 h-4 bg-blue-100 rounded-full opacity-70" />
                  <div className="absolute top-1/4 -right-2 w-7 h-7 bg-blue-100 rounded-full opacity-70" />
                  <div className="absolute bottom-1/4 left-2 w-8 h-8 bg-blue-100 rounded-full opacity-70" />
                  <div className="absolute bottom-10 right-12 w-3 h-3 bg-gray-200 rounded-full opacity-70" />
                  
                  {/* Blue Blob Shape */}
                  <div 
                    className="absolute inset-8 bg-[#14427b]"
                    style={{ borderRadius: '60% 40% 70% 30% / 40% 50% 60% 50%' }}
                  />
                  
                  {/* Image */}
                  <img 
                    src={founderImg} 
                    alt="Dr S Hemalatha" 
                    className="absolute inset-0 w-full h-full object-contain object-bottom z-10 drop-shadow-md" 
                  />
                </div>

                {/* Doctor Info */}
                <div className="text-center mb-8">
                  <p className="text-gray-800 font-medium text-[13px] mb-1">
                    Dr. S. Hemalatha V M.PHIL., PHD., EMBRYOLOGIST
                  </p>
                  <p className="text-gray-600 text-[13px]">
                    Our founder & Medical Director,
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 w-full justify-center lg:justify-between px-2 flex-wrap">
                  <div className="flex gap-2">
                    <a href="tel:8220052005" className="flex items-center justify-center gap-1.5 border border-[#14427b] text-[#14427b] px-3 py-2 text-sm font-bold hover:bg-[#14427b] hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      82 2005 2005
                    </a>
                    <button onClick={scrollToForm} className="bg-[#14427b] text-white px-5 py-2 text-sm font-bold hover:bg-[#0f325c] transition-colors">
                      Book an Appointment
                    </button>
                  </div>
                  
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-[#e51b60] text-white p-2 hover:bg-[#c91552] transition-colors hidden sm:block">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section
        id="treatments"
        className="relative py-10 lg:py-16 overflow-hidden border-t border-pink-100"
        style={{ background: "linear-gradient(160deg, #fff5f8 0%, #fef0f5 30%, #f8f0ff 60%, #fff5fb 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(229,27,96,0.12) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-40 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(20,66,123,0.10) 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, rgba(229,27,96,0.08) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-tight mb-5">
              <span className="text-gray-900 font-serif">Our </span>
              <span
                className="font-serif"
                style={{ background: "linear-gradient(135deg, #e51b60 0%, #ff6b9d 50%, #e51b60 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Treatments
              </span>
            </h2>
          </AnimatedSection>

          {/* Treatments Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap justify-center gap-5"
          >
            {SERVICES.map((s, idx) => {
              const meta = SERVICE_META[s.id] || { category: "TREATMENT", color: "pink" };
              return (
                <motion.div
                  key={s.id}
                  variants={cardVariants}
                  className="group w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] xl:w-[calc(25%-15px)]"
                >
                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={{
                      rest: {
                        y: 0,
                        boxShadow: "0 2px 8px rgba(229,27,96,0.06)",
                      },
                      hover: {
                        y: -6,
                        boxShadow: "0 16px 40px rgba(229,27,96,0.14), 0 4px 12px rgba(20,66,123,0.06)",
                      },
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="relative bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 flex flex-col h-full overflow-hidden cursor-pointer"
                  >
                    {/* Hover glow overlay */}
                    <motion.div
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ background: "linear-gradient(135deg, rgba(229,27,96,0.03) 0%, rgba(255,107,157,0.05) 100%)" }}
                    />

                    {/* Category badge */}
                    <div className="mb-4">
                      <span className={`inline-block text-[9px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full ${BADGE_STYLES[meta.color]}`}>
                        {meta.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: { scale: 1.12, rotate: [-2, 2, 0], transition: { duration: 0.4 } },
                      }}
                      className="w-11 h-11 mb-4 text-[#e51b60] flex-shrink-0"
                    >
                      {getServiceIcon(s.id)}
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 text-[14px] leading-snug mb-2 group-hover:text-[#e51b60] transition-colors duration-300">
                      {s.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-5">
                      {s.shortDesc}
                    </p>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(s.id);
                        scrollToForm();
                      }}
                      className="inline-flex items-center gap-1.5 text-[#e51b60] text-xs font-semibold border border-[#e51b60]/30 bg-pink-50 hover:bg-[#e51b60] hover:text-white hover:border-[#e51b60] px-4 py-2 rounded-lg transition-all duration-200 self-start cursor-pointer"
                    >
                      Enquire Now
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </>
  );
}

// Clean, premium icons for each service
const getServiceIcon = (id: string) => {
  const iconProps = { className: "w-10 h-10", strokeWidth: 1.5 };
  switch (id) {
    case "natural-ivf":
      return <Leaf {...iconProps} />;
    case "ovulation-induction":
      return <Activity {...iconProps} />;
    case "icsi":
      return <Syringe {...iconProps} />;
    case "iui":
      return <Dna {...iconProps} />;
    case "surgical-treatment":
      return <Stethoscope {...iconProps} />;
    case "pgd":
      return <Microscope {...iconProps} />;
    case "cryopreservation":
    case "frozen-embryo-transfer":
      return <Snowflake {...iconProps} />;
    case "ivf":
      return <Baby {...iconProps} />;
    case "surrogacy":
      return <Users {...iconProps} />;
    case "ovarian-drilling":
      return <Activity {...iconProps} />;
    case "blastocyst-transfer":
      return <TestTube {...iconProps} />;
    case "tesa":
      return <Syringe {...iconProps} />;
    case "infertility-diagnosis":
      return <ClipboardList {...iconProps} />;
    default:
      return <Activity {...iconProps} />;
  }
};

const getServiceLabel = (id: string, defaultName: string) => {
  switch (id) {
    case "icsi":
      return "INTRA CYTOPLASMIC SPERM INJECTION(ICSI)";
    case "cryopreservation":
      return "CRYOPRESERVATION OF SPERM & EMBRYOS";
    case "surrogacy":
      return "SURROGACY";
    default:
      return defaultName.toUpperCase();
  }
};
