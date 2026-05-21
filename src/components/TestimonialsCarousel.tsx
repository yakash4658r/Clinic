import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS, CLINIC } from "../data";
import AnimatedSection from "./AnimatedSection";
import { useReducedMotion } from "../hooks/useReducedMotion";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-slate-200"}`}
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

export default function TestimonialsCarousel() {
  const prefersReduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = TESTIMONIALS.length;

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  }, [total]);

  // Auto-advance
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

  // Show 3 testimonials on desktop (current, next, next+1)
  const getVisible = () => {
    return [0, 1, 2].map((offset) => TESTIMONIALS[(current + offset) % total]);
  };

  const visible = getVisible();

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 border-b border-amber-500/20 pb-1.5 text-amber-800 text-[10px] sm:text-xs font-light tracking-[0.2em] uppercase mb-5">
            Patient Stories
          </span>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 leading-[1.15] tracking-wide">
            What Our Patients{" "}
            <span className="font-serif italic font-normal bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-4 bg-[#FAF7F0] border border-amber-900/10 rounded-2xl px-6 py-3.5 mt-2 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-600/10 flex items-center justify-center text-amber-700 text-[10px] font-bold font-serif">G</span>
              <span className="text-slate-800 font-medium text-[10px] tracking-wider uppercase">Google Reviews</span>
            </div>
            <div className="w-px h-5 bg-amber-900/15" />
            <div className="flex items-center gap-2">
              <StarRating count={5} />
              <span className="text-slate-950 font-bold text-sm font-serif">{CLINIC.rating}</span>
              <span className="text-slate-500 text-xs font-light">({CLINIC.reviewCount} reviews)</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Desktop: 3 cards visible */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={prefersReduced ? {} : {
                enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
              }}
              initial={prefersReduced ? {} : "enter"}
              animate={prefersReduced ? {} : "center"}
              exit={prefersReduced ? {} : "exit"}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {visible.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="bg-white/80 backdrop-blur-sm border border-amber-900/5 shadow-md shadow-amber-900/5 hover:border-amber-400/20 transition-all rounded-3xl p-7 flex flex-col"
                >
                  <div className="flex items-center gap-1 mb-4">
                    <StarRating count={testimonial.rating} />
                  </div>
                  <blockquote className="text-slate-700 text-sm font-light leading-relaxed mb-6 flex-1 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-amber-900/5">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-amber-500/15 flex items-center justify-center text-amber-800 font-serif font-medium text-sm flex-shrink-0">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{testimonial.name}</div>
                      <div className="text-slate-450 text-[11px] font-light">{testimonial.location}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-amber-500/5 text-amber-800 text-[9px] uppercase tracking-wider font-light px-2.5 py-1 rounded-md border border-amber-500/10">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Single card */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={current}
              custom={direction}
              variants={prefersReduced ? {} : slideVariants}
              initial={prefersReduced ? {} : "enter"}
              animate={prefersReduced ? {} : "center"}
              exit={prefersReduced ? {} : "exit"}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white/85 border border-amber-900/5 shadow-md shadow-amber-900/5 rounded-3xl p-7"
            >
              <div className="flex items-center gap-1 mb-4">
                <StarRating count={TESTIMONIALS[current].rating} />
              </div>
              <blockquote className="text-slate-700 text-sm font-light leading-relaxed mb-6 italic">
                "{TESTIMONIALS[current].text}"
              </blockquote>
              <div className="flex items-start gap-3 pt-4 border-t border-amber-900/5">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-amber-500/15 flex items-center justify-center text-amber-800 font-serif font-medium text-sm flex-shrink-0">
                  {TESTIMONIALS[current].initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-slate-900 text-sm">{TESTIMONIALS[current].name}</div>
                  <div className="text-slate-450 text-[11px] font-light">{TESTIMONIALS[current].location}</div>
                  <span className="inline-block mt-2.5 bg-amber-500/5 text-amber-800 text-[9px] uppercase tracking-wider font-light px-2.5 py-1 rounded-md border border-amber-500/10">
                    {TESTIMONIALS[current].service}
                  </span>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-amber-900/10 bg-white hover:bg-[#FAF7F0] flex items-center justify-center text-slate-600 hover:text-amber-800 transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2" role="tablist" aria-label="Testimonials navigation">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-1.5 bg-amber-600"
                    : "w-1.5 h-1.5 bg-amber-900/15 hover:bg-amber-900/25"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-amber-900/10 bg-white hover:bg-[#FAF7F0] flex items-center justify-center text-slate-600 hover:text-amber-800 transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
