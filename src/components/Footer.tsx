import { CLINIC } from "../data";
import { useReducedMotion } from "../hooks/useReducedMotion";

const NAV_LINKS = [
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const prefersReduced = useReducedMotion();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-750 flex items-center justify-center shadow-sm bg-gradient-to-br from-amber-500 to-amber-700">
                <span className="text-slate-950 text-sm font-extrabold">A</span>
              </div>
              <div>
                <span className="font-bold text-white text-base leading-tight block">Asteria</span>
                <span className="text-[10px] text-amber-400 font-medium leading-tight block tracking-wide uppercase">Skin & Wellness</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Chennai's trusted dermatology & cosmetic wellness clinic. Personalised care, transparent pricing, certified doctors.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${CLINIC.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
              >
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CLINIC.phone}
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {CLINIC.location}
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {CLINIC.hours}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Trust & Safety</h3>
            <div className="space-y-3">
              {[
                { icon: "🏥", text: "Certified Dermatologists" },
                { icon: "🔬", text: "Medical-Grade Equipment" },
                { icon: "✅", text: "Hygienic Protocols" },
                { icon: "💬", text: "Post-Care Support" },
                { icon: "💰", text: "Transparent Pricing" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-slate-400">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-md text-slate-600">
            <strong className="text-slate-500">Disclaimer:</strong> Results may vary. This page is for information purposes only and does not constitute medical advice. Consult a qualified doctor for personalised guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
