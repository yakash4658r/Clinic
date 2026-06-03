import { CLINIC } from "../data";
import { useReducedMotion } from "../hooks/useReducedMotion";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const prefersReduced = useReducedMotion();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 lg:pb-14">
        <div className="flex flex-col mb-10">
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#14427b] to-[#0f325c] flex items-center justify-center shadow-sm">
                <span className="text-white text-sm font-extrabold">S</span>
              </div>
              <div>
                <span className="font-bold text-white text-base leading-tight block">Shree IVF Care</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Ethical, evidence-based, and affordable treatments for infertility in Pondicherry. Led by senior embryologist Dr. S. Hemalatha V.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${CLINIC.phone.replace(/[\s+]/g, "")}`}
                className="flex items-center gap-2 text-slate-400 hover:text-[#e51b60] transition-colors"
              >
                <svg className="w-4 h-4 text-[#e51b60] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CLINIC.phone} (Primary)
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <svg className="w-4 h-4 text-[#e51b60] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {CLINIC.location}
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                <svg className="w-4 h-4 text-[#e51b60] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {CLINIC.hours}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-md text-slate-600">
            <strong className="text-slate-500">Disclaimer:</strong> Success rates and outcomes depend on diagnostic criteria, maternal age, and other clinical details. This website is for informational purposes only. Consult a doctor for diagnostic guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
