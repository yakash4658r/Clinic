import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import HeroForm from "./components/HeroForm";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: { borderRadius: "12px", fontSize: "14px" },
        }}
      />

      {/* Sticky Header */}
      <Header />

      {/* Main content */}
      <main id="main-content">
        {/* Hero + Form (Above the fold) */}
        <HeroForm />

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* Contact + Final CTA */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Widgets (WhatsApp, scroll-to-top, mobile bottom CTA) */}
      <FloatingWidgets />
    </div>
  );
}

