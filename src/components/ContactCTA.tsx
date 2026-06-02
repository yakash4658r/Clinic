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
