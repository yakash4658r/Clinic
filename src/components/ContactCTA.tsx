import { motion } from "framer-motion";
import { CLINIC } from "../data";
import AnimatedSection from "./AnimatedSection";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function ContactCTA() {
  const prefersReduced = useReducedMotion();
  const phoneClean = CLINIC.phone.replace(/\s+/g, "");
  const waNumber = CLINIC.whatsapp.replace(/[\s+]/g, "");

  const scrollToForm = () => {
    const el = document.querySelector("#hero");
    if (el) el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big CTA Banner */}
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B0C0E] via-[#121316] to-[#0D0E10] p-10 sm:p-14 lg:p-16 text-center mb-16">
            {/* Background blobs */}
            {!prefersReduced && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl"
                  animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-500/3 blur-3xl"
                  animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
                  transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                />
              </>
            )}

            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
                Limited Slots Today
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Ready to Feel{" "}
                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                  Confident?
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
                Take the first step toward better skin. Book a consultation with Chennai's most trusted dermatology clinic today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={scrollToForm}
                  whileHover={prefersReduced ? {} : { scale: 1.04 }}
                  whileTap={prefersReduced ? {} : { scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-400 transition-all text-base"
                >
                  Book Your Appointment
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
                <a
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi! I'd like to book a consultation at Asteria Clinic.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-all text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {/* Phone */}
          <AnimatedSection delay={0.1}>
            <a
              href={`tel:${phoneClean}`}
              className="flex flex-col items-center text-center bg-white border border-amber-900/5 shadow-md shadow-amber-900/5 hover:border-amber-400/30 rounded-2xl p-6 transition-all group"
              aria-label={`Call us at ${CLINIC.phone}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-3 group-hover:bg-amber-200 transition-colors">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Call Us</div>
              <div className="text-slate-900 font-bold text-sm">{CLINIC.phone}</div>
              <div className="text-amber-600 text-xs mt-1 font-medium">Tap to call</div>
            </a>
          </AnimatedSection>

          {/* WhatsApp */}
          <AnimatedSection delay={0.15}>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi! I'd like to know more about Asteria Clinic.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center bg-white border border-amber-900/5 shadow-md shadow-amber-900/5 hover:border-emerald-300 rounded-2xl p-6 transition-all group"
              aria-label="Chat on WhatsApp"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-3 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">WhatsApp</div>
              <div className="text-slate-900 font-bold text-sm">{CLINIC.whatsapp}</div>
              <div className="text-emerald-600 text-xs mt-1 font-medium">Chat now</div>
            </a>
          </AnimatedSection>

          {/* Address */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center text-center bg-white border border-amber-900/5 shadow-md shadow-amber-900/5 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Location</div>
              <div className="text-slate-900 font-bold text-sm">{CLINIC.location}</div>
              {/* Map Placeholder */}
              <div className="mt-3 w-full h-20 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                <span className="text-slate-500 text-xs font-medium">📍 Map view</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Hours */}
          <AnimatedSection delay={0.25}>
            <div className="flex flex-col items-center text-center bg-white border border-amber-900/5 shadow-md shadow-amber-900/5 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Working Hours</div>
              <div className="text-slate-900 font-bold text-sm">{CLINIC.hours}</div>
              <div className="mt-3 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 text-xs font-medium">Open Now</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
