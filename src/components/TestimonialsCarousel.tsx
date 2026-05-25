import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS, CLINIC } from "../data";
import AnimatedSection from "./AnimatedSection";
import { useReducedMotion } from "../hooks/useReducedMotion";

import labImg from "../assets/lab.png";
import consultingImg from "../assets/consulting.png";
import receptionImg from "../assets/reception.png";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const pillars = [
  {
    icon: "⭐",
    title: "Renowned IVF Specialist",
    desc: "Experienced and highly recommended specialists leading your care.",
    accent: "#e51b60",
  },
  {
    icon: "🔬",
    title: "Advanced Technologies",
    desc: "Most advanced micro-fertilization techniques and incubation systems.",
    accent: "#e51b60",
  },
  {
    icon: "🤝",
    title: "Step-by-Step Counseling",
    desc: "Empathetic guidance and clear facts for a happy, safe delivery.",
    accent: "#e51b60",
  },
];

export default function TestimonialsCarousel() {
  const prefersReduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const total = TESTIMONIALS.length;

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  }, [total]);

  useEffect(() => {
    if (prefersReduced) return;
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go, prefersReduced]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const getVisible = () => [0, 1, 2].map((offset) => TESTIMONIALS[(current + offset) % total]);
  const visible = getVisible();

  const videos = [
    {
      id: "v1",
      title: "Best IVF Specialist | Happy Parents Success",
      duration: "3:45",
      thumb: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=640&q=80",
      description: "Successful delivery after 8 years of primary infertility.",
      initials: "MK",
    },
    {
      id: "v2",
      title: "Happy Patient | IVF Success Journey",
      duration: "5:28",
      thumb: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=640&q=80",
      description: "Conceived twins through ICSI and blastocyst transfer.",
      initials: "RN",
    },
    {
      id: "v3",
      title: "Happy Patient Review | Bharati Fertility Center",
      duration: "4:18",
      thumb: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=640&q=80",
      description: "Sharing our affordable treatment and counseling experience.",
      initials: "SD",
    },
  ];

  const galleryItems = [
    { src: labImg, title: "Embryology Laboratory", desc: "Equipped with advanced triple-gas incubators and micro-manipulators for ICSI." },
    { src: consultingImg, title: "Consulting Room", desc: "Private, warm, and zero-pressure consulting room for personalized couple guidance." },
    { src: receptionImg, title: "Welcoming Reception Lobby", desc: "Comfortable and safe clinical environment prioritizing patient confidentiality." },
  ];

  return (
    <>
      {/* ─── 3 Pillars Feature Banner ─── */}
      <section className="relative bg-[#14427b] overflow-hidden">
        {/* subtle diagonal accent */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 60px)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                className="flex items-start gap-4 p-8 transition-colors duration-300"
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: [-5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl flex-shrink-0 mt-0.5"
                >
                  {pillar.icon}
                </motion.span>
                <div>
                  <h4 className="font-bold text-base mb-2" style={{ color: pillar.accent }}>
                    {pillar.title}
                  </h4>
                  <p className="text-white/65 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Video Testimonials ─── */}
      <section id="video-testimonials" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#e51b60] mb-4 bg-pink-50 border border-pink-200 px-4 py-1.5 rounded-full"
            >
              Success Journeys
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              <span className="text-gray-900">Testimonial </span>
              <span
                style={{ background: "linear-gradient(135deg, #e51b60, #ff6b9d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Videos
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Listen directly to couples sharing their real IVF and fertility journey experiences under Dr. S. Hemalatha's guidance.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((vid, i) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 80, damping: 15 }}
                onHoverStart={() => setHoveredCard(vid.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setActiveVideo(vid.id)}
                className="group cursor-pointer"
              >
                <motion.div
                  animate={{ y: hoveredCard === vid.id ? -6 : 0, boxShadow: hoveredCard === vid.id ? "0 20px 40px rgba(229,27,96,0.15)" : "0 2px 8px rgba(0,0,0,0.06)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gray-900 overflow-hidden">
                    <motion.img
                      src={vid.thumb}
                      alt={vid.title}
                      animate={{ scale: hoveredCard === vid.id ? 1.07 : 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover opacity-85"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Play button */}
                    <motion.div
                      animate={{ scale: hoveredCard === vid.id ? 1.15 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#e51b60] shadow-lg shadow-pink-500/40 flex items-center justify-center">
                        <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </motion.div>

                    {/* Duration badge */}
                    <span className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-mono tracking-wider">
                      {vid.duration}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 text-sm leading-snug mb-3 group-hover:text-[#e51b60] transition-colors duration-200">
                      {vid.title}
                    </h4>
                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                      <div className="w-7 h-7 rounded-full bg-[#14427b] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                        {vid.initials}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#e51b60]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Verified Patient Story</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reviews Section ─── */}
      <section id="reviews" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#e51b60] mb-4 bg-pink-50 border border-pink-200 px-4 py-1.5 rounded-full">
              Patient Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              <span className="text-gray-900">What Our Patients </span>
              <span style={{ background: "linear-gradient(135deg, #e51b60, #ff6b9d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Are Saying
              </span>
            </h2>

            {/* Google Reviews badge */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-3.5 shadow-sm cursor-default"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#14427b] flex items-center justify-center text-white text-[10px] font-bold">G</div>
                <span className="text-gray-800 font-bold text-[10px] tracking-wider uppercase">Google Reviews</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <div className="flex items-center gap-2">
                <StarRating count={5} />
                <span className="text-gray-900 font-bold text-sm">{CLINIC.rating}</span>
                <span className="text-gray-500 text-xs">({CLINIC.reviewCount} reviews)</span>
              </div>
            </motion.div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((testimonial, i) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-gray-100 shadow-sm rounded-2xl p-7 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14427b] to-[#e51b60] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <StarRating count={testimonial.rating} />
                    </div>
                  </div>
                  <div className="ml-auto bg-gray-100 p-1.5 rounded-full flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.18 13.91l-3.9-2.34c-.17-.1-.38-.1-.55 0l-3.9 2.34c-.38.23-.85-.05-.73-.48l1.04-4.43c.04-.19-.02-.38-.15-.52l-3.41-3.08c-.33-.3-.15-.85.3-.89l4.53-.39c.19-.02.35-.14.43-.31l1.79-4.2c.18-.42.78-.42.96 0l1.79 4.2c.08.18.25.3.43.31l4.53.39c.45.04.63.59.3.89l-3.41 3.08c-.14.13-.2.32-.15.52l1.04 4.43c.12.43-.35.71-.73.48z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="text-gray-400 text-[11px]">{testimonial.location}</div>
                  <span className="bg-pink-50 text-[#e51b60] text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-lg border border-pink-100">
                    {testimonial.service}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>



      {/* ─── Video Modal ─── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-950 border border-gray-800 rounded-3xl overflow-hidden max-w-3xl w-full aspect-video relative flex items-center justify-center"
            >
              <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black via-transparent to-black/80">
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-bold text-base max-w-[75%] leading-snug">
                    {videos.find(v => v.id === activeVideo)?.title}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(229,27,96,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveVideo(null)}
                    className="text-white w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors text-lg flex-shrink-0"
                  >
                    ×
                  </motion.button>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center justify-center self-center bg-[#e51b60]/15 border border-[#e51b60]/30 text-[#e51b60] p-7 rounded-full"
                >
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </motion.div>

                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                  <span className="text-xs text-white/70">Loading patient testimonial video...</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
