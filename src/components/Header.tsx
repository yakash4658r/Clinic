import { useState, useEffect } from "react";
import { CLINIC } from "../data";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const prefersReduced = useReducedMotion();
  const phoneClean = CLINIC.phone.replace(/[\s+]/g, "");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#appointment-form");
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#hero");
              if (el) el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
            }}
            className="flex items-center gap-3 group"
            aria-label="Asteria Skin & Wellness Clinic - Home"
          >
            <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-300 ${
              scrolled ? "border-amber-500/40 text-amber-600 bg-amber-500/5" : "border-amber-500/30 text-amber-400 bg-transparent"
            }`}>
              <span className="font-serif font-medium text-lg tracking-wider">A</span>
            </div>
            <div>
              <span className={`font-serif font-medium text-lg sm:text-xl leading-none block tracking-wide transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}>
                Asteria
              </span>
              <span className={`text-[8px] sm:text-[9px] font-light leading-none block tracking-[0.22em] uppercase mt-1 transition-colors duration-300 ${
                scrolled ? "text-amber-600" : "text-amber-400"
              }`}>
                Skin & Wellness
              </span>
            </div>
          </a>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Phone Number Call Link */}
            <a
              href={`tel:${phoneClean}`}
              className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled ? "text-slate-700 hover:text-amber-600" : "text-slate-200 hover:text-amber-350"
              }`}
              aria-label={`Call us at ${CLINIC.phone}`}
            >
              <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                scrolled ? "bg-amber-500/10 text-amber-600" : "bg-white/5 text-amber-400 border border-white/10"
              }`}>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span className="hidden sm:inline font-light text-xs uppercase tracking-wider">Call Us:</span>
              <span className="text-amber-400 sm:text-inherit font-semibold">{CLINIC.phone}</span>
            </a>

            {/* CTA Button */}
            <a
              href="#appointment-form"
              onClick={handleBookClick}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-250 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Slot
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
