import { CLINIC } from "../data";
import { useReducedMotion } from "../hooks/useReducedMotion";
import logoImg from "../assets/logo.png";

export default function Header() {
  const prefersReduced = useReducedMotion();
  const phoneClean = CLINIC.phone.replace(/[\s+]/g, "");

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#appointment-form");
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 py-3 sm:py-4">
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
            aria-label={`${CLINIC.name} - Home`}
          >
            <div className="flex items-center">
              <img src={logoImg} alt="Clinic Logo" className="h-16 sm:h-20 w-auto object-contain scale-[2] sm:scale-[2.6] origin-left" />
            </div>
          </a>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Phone Number Call Link - Styled as a Button */}
            <a
              href={`tel:${phoneClean}`}
              className="hidden sm:flex items-center gap-2 border-2 border-[#14427b] text-[#14427b] hover:bg-[#14427b] hover:text-white transition-colors duration-300 font-semibold px-4 py-2 rounded-lg"
              aria-label={`Call us at ${CLINIC.phone}`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{CLINIC.phone}</span>
            </a>

            {/* Mobile CTA Button - Only visible on mobile, replacing phone number */}
            <a
              href={`tel:${phoneClean}`}
              className="sm:hidden bg-[#14427b] text-white p-2 rounded-lg shadow-md"
              aria-label={`Call us at ${CLINIC.phone}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
