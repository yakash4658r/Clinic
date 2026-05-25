import { useState } from "react";
import { motion } from "framer-motion";
import { CLINIC } from "../data";
import AnimatedSection from "./AnimatedSection";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function ContactCTA() {
  const prefersReduced = useReducedMotion();
  const phoneClean = CLINIC.phone.replace(/[\s+]/g, "");
  const phoneCleanAlt = CLINIC.phoneAlt.replace(/[\s+]/g, "");
  const waNumber = CLINIC.whatsapp.replace(/[\s+]/g, "");
  const [activeMap, setActiveMap] = useState<'pondicherry' | 'chennai'>('pondicherry');

  const scrollToForm = () => {
    const el = document.querySelector("#appointment-form");
    if (el) el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big CTA Banner */}
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#14427b] to-[#14427b]/90 p-10 sm:p-14 lg:p-16 text-center mb-16 shadow-lg shadow-[#14427b]/10">
            {/* Background blobs */}
            {!prefersReduced && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#e51b60]/10 blur-3xl"
                  animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"
                  animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
                  transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                />
              </>
            )}

            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#e51b60] bg-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5 shadow-sm">
                Start Your Journey Today
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Ready to Take the{" "}
                <span className="text-[#e51b60]">
                  First Step?
                </span>
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Schedule a consultation with our experienced embryologists and fertility doctors today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={scrollToForm}
                  whileHover={prefersReduced ? {} : { scale: 1.04 }}
                  whileTap={prefersReduced ? {} : { scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-[#e51b60] text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-[#e51b60]/30 hover:bg-[#c91552] transition-all text-base"
                >
                  Book Free Callback
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
                <a
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi! I'd like to book a consultation at Bharati Fertility.")}`}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          
          {/* Phone */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 shadow-sm hover:border-[#14427b]/30 rounded-2xl p-6 transition-all group h-full justify-between">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-[#14427b]/10 flex items-center justify-center mb-3 group-hover:bg-[#14427b]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#14427b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-1">Call Us</div>
                <div className="space-y-1">
                  <a href={`tel:${phoneClean}`} className="text-gray-900 font-bold text-sm block hover:text-[#e51b60]">{CLINIC.phone}</a>
                  <a href={`tel:${phoneCleanAlt}`} className="text-gray-900 font-bold text-sm block hover:text-[#e51b60]">{CLINIC.phoneAlt}</a>
                </div>
              </div>
              <div className="text-[#e51b60] text-xs mt-3 font-bold">Tap to call</div>
            </div>
          </AnimatedSection>

          {/* WhatsApp */}
          <AnimatedSection delay={0.15}>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi! I'd like to know more about Bharati Fertility.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 shadow-sm hover:border-emerald-300 rounded-2xl p-6 transition-all group h-full justify-between"
              aria-label="Chat on WhatsApp"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-3 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-1">WhatsApp</div>
                <div className="text-gray-900 font-bold text-sm">{CLINIC.whatsapp}</div>
              </div>
              <div className="text-emerald-600 text-xs mt-3 font-bold">Chat now</div>
            </a>
          </AnimatedSection>

          {/* Location Branches */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-6 h-full justify-between hover:border-[#e51b60]/30 transition-all">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-[#e51b60]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e51b60]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-1">Our Branches</div>
                <div className="text-left space-y-2 mt-2 w-full">
                  <div>
                    <span className="text-[10px] font-bold text-[#14427b] uppercase block leading-none mb-0.5">Pondicherry (Primary)</span>
                    <span className="text-[11px] text-gray-600 font-medium block leading-snug">{CLINIC.addressPondy}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#14427b] uppercase block leading-none mb-0.5">Chennai Branch</span>
                    <span className="text-[11px] text-gray-600 font-medium block leading-snug">Ambattur Branch</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  const el = document.getElementById("locations-map");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="text-[#e51b60] text-xs mt-3 font-bold hover:underline bg-transparent border-none cursor-pointer p-0"
              >
                View on Google Map
              </button>
            </div>
          </AnimatedSection>

          {/* Hours */}
          <AnimatedSection delay={0.25}>
            <div className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-6 h-full justify-between hover:border-[#14427b]/30 transition-all">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-[#14427b]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#14427b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-1">Working Hours</div>
                <div className="text-gray-900 font-bold text-xs leading-snug">{CLINIC.hours}</div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 text-xs font-bold">Open Now</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Dynamic Tabbed Maps for Locations */}
        <AnimatedSection delay={0.3}>
          <div id="locations-map" className="bg-gray-50 border border-gray-200 rounded-3xl p-4 sm:p-6 mb-10 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">Our Locations</h3>
                <p className="text-sm text-gray-500 font-medium">Visit us at Pondicherry or Chennai</p>
              </div>
              <div className="flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setActiveMap('pondicherry')}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors duration-300 ${
                    activeMap === 'pondicherry' ? 'bg-[#e51b60] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Pondicherry
                </button>
                <button
                  onClick={() => setActiveMap('chennai')}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors duration-300 ${
                    activeMap === 'chennai' ? 'bg-[#e51b60] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Chennai
                </button>
              </div>
            </div>
            
            <div className="w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative bg-slate-100">
              {activeMap === 'pondicherry' ? (
                <iframe 
                  title="Shree IVF Care Pondicherry Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.736932488887!2d79.82862080000001!3d11.9333904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361d7637894a3%3A0xc665b16f3126fce7!2sPuducherry!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                  className="w-full h-full border-none"
                  allowFullScreen={true}
                  loading="lazy" 
                />
              ) : (
                <iframe 
                  title="Bharati Fertility Center Chennai Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.590740920401!2d80.15874037591606!3d13.125131587203606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526363d3fb490f%3A0xf639ceca4f6f7ce9!2sBharati%20Fertility!5e0!3m2!1sen!2sin!4v1716658000000!5m2!1sen!2sin" 
                  className="w-full h-full border-none"
                  allowFullScreen={true}
                  loading="lazy" 
                />
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
