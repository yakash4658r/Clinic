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

  const scrollToForm = () => {
    const el = document.querySelector("#appointment-form");
    if (el) el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
  };

  return (
    <section id="contact" className="py-6 lg:py-10 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        {/* Map for Location */}
        <AnimatedSection delay={0.3}>
          <div id="locations-map" className="bg-gray-50 border border-gray-200 rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">Our Location</h3>
                <p className="text-sm text-gray-500 font-medium">Visit us at Pondicherry</p>
              </div>
            </div>
            
            <div className="w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative bg-slate-100">
              <iframe 
                title="Shree IVF Care Pondicherry Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.0245404544926!2d79.78846751087804!3d11.972802735938972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53612497f4ae3d%3A0x421a03c942e5542c!2sShree%20IVF%20Care%20(Maternity%20%26%20Fertility%20care)!5e0!3m2!1sen!2sin!4v1780509925000!5m2!1sen!2sin" 
                className="w-full h-full border-none"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
