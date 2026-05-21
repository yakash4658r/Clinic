import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useUtmParams } from "../hooks/useUtmParams";
import { SERVICES, CLINIC } from "../data";
import toast from "react-hot-toast";

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDateTime: string;
}

interface HeroFormProps {
  prefillService?: string;
}

export default function HeroForm({ prefillService }: HeroFormProps) {
  const prefersReduced = useReducedMotion();
  const utmParams = useUtmParams();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormValues>({
    defaultValues: { service: prefillService || "" },
  });

  // Allow external prefill via useEffect
  useEffect(() => {
    if (prefillService) {
      setValue("service", prefillService);
    }
  }, [prefillService, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await new Promise((r) => setTimeout(r, 800)); // simulate async

    const payload = {
      ...data,
      ...utmParams,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
    };

    console.log("📋 Appointment Form Payload:", payload);

    // Store in localStorage
    try {
      localStorage.setItem("asteria_last_submission", JSON.stringify(payload));
    } catch {}

    setSubmitted(true);
    toast.success("We'll call you within 10 minutes!", {
      duration: 5000,
      icon: "🎉",
      style: {
        background: "#0f766e",
        color: "#fff",
        fontWeight: 600,
        borderRadius: "12px",
      },
    });

    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const trustBadges = [
    {
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.196-.612 1.062-.612 1.258 0l1.286 4.028a1 1 0 00.95.69h4.244c.645 0 .911.83.43 1.295l-3.433 3.328a1 1 0 00-.342.953l1.286 4.028c.196.612-.48 1.104-.999.736l-3.433-2.494a1 1 0 00-1.175 0l-3.433 2.494c-.52.368-1.195-.124-.999-.736l1.286-4.028a1 1 0 00-.342-.953L2.247 9.512c-.48-.465-.213-1.295.43-1.295h4.244a1 1 0 00.95-.69l1.286-4.028z" />
        </svg>
      ),
      text: `${CLINIC.rating}/5 Rating`
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      text: `${CLINIC.visits} Happy Visits`
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110.1 21a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.746 3.746 0 0113.9 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      text: "Certified Doctors"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      text: "Hygienic & Safe"
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0B0C0E] via-[#121316] to-[#0D0E10] pt-20"
      aria-label="Hero section with appointment form"
    >
      {/* Animated background blobs */}
      {!prefersReduced && (
        <>
          <motion.div
            className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/3 blur-3xl pointer-events-none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Hero Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-1.5 border-b border-amber-500/20 pb-2 mb-8">
              <span className="text-amber-400 text-[10px] sm:text-xs font-light tracking-[0.2em] uppercase">Chennai's Premium Skin Clinic</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="font-serif font-light text-5xl sm:text-6xl lg:text-5xl xl:text-6xl text-white leading-[1.15] mb-6 tracking-wide">
              Premium Skin &
              <span className="block font-serif italic font-normal bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 bg-clip-text text-transparent mt-1">
                Wellness Care
              </span>
              <span className="block text-slate-350 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-serif italic font-light mt-3 text-slate-300">Safe. Modern. Personalised.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={item} className="text-slate-450 text-sm sm:text-base font-light leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 tracking-wide text-slate-400">
              Chennai's premier medical-aesthetic clinic. Benefit from same-day private consultations and fully transparent, bespoke treatment plans.
            </motion.p>

            {/* Trust Badges */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {trustBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 bg-white/[0.02] border border-white/[0.04] hover:border-amber-500/20 hover:bg-white/[0.04] rounded-2xl px-4 py-4 text-center transition-all duration-300"
                >
                  <span className="w-10 h-10 rounded-full bg-amber-500/5 flex items-center justify-center border border-amber-500/10">
                    {badge.icon}
                  </span>
                  <span className="text-white/70 text-[10px] font-medium tracking-wide uppercase leading-tight mt-1">{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Urgency */}
            <motion.div variants={item} className="inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 rounded-lg px-4 py-2.5">
              <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-amber-350 text-xs font-light tracking-wide text-left">Limited slots available today — book early to secure yours</span>
            </motion.div>
          </motion.div>

          {/* Right — Appointment Form */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 32, scale: prefersReduced ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            id="appointment-form"
          >
            <div className="bg-[#121316]/90 backdrop-blur-xl border border-white/[0.06] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60 relative overflow-hidden">
              {/* Gold Top Light Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/45 to-transparent" />

              {/* Form Header */}
              <div className="mb-6">
                <h2 className="font-serif font-light text-2xl text-white mb-1.5 tracking-wide">Book Your Appointment</h2>
                <p className="text-slate-400 text-xs font-light tracking-wide">Fill in your details — we'll call you back in 10 minutes.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4 text-amber-500">✦</div>
                  <h3 className="font-serif font-light text-2xl text-white mb-2">You're booked!</h3>
                  <p className="text-slate-400 text-sm font-light">Our team will call you within 10 minutes to confirm.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-slate-400 text-[10px] sm:text-xs font-light tracking-widest uppercase mb-1.5">
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Priya Krishnamurthy"
                      {...register("fullName", {
                        required: "Please enter your full name",
                        minLength: { value: 2, message: "Name is too short" },
                      })}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-err" : undefined}
                      className="w-full bg-[#0B0C0E]/40 border border-white/[0.08] text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/55 transition-all"
                    />
                    {errors.fullName && (
                      <p id="fullName-err" role="alert" className="text-rose-455 text-xs mt-1.5 flex items-center gap-1 text-rose-400">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-slate-400 text-[10px] sm:text-xs font-light tracking-widest uppercase mb-1.5">
                      Phone Number <span className="text-amber-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="flex items-center px-3 bg-[#0B0C0E]/40 border border-white/[0.08] rounded-xl text-slate-400 text-sm font-medium">🇮🇳 +91</span>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="90000 12345"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit Indian mobile number",
                          },
                        })}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-err" : undefined}
                        className="flex-1 bg-[#0B0C0E]/40 border border-white/[0.08] text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/55 transition-all"
                      />
                    </div>
                    {errors.phone && (
                      <p id="phone-err" role="alert" className="text-rose-455 text-xs mt-1.5 flex items-center gap-1 text-rose-400">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-slate-400 text-[10px] sm:text-xs font-light tracking-widest uppercase mb-1.5">
                      Email <span className="text-slate-500 text-[10px] font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      {...register("email", {
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-err" : undefined}
                      className="w-full bg-[#0B0C0E]/40 border border-white/[0.08] text-white placeholder-slate-550 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/55 transition-all"
                    />
                    {errors.email && (
                      <p id="email-err" role="alert" className="text-rose-455 text-xs mt-1.5 flex items-center gap-1 text-rose-400">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-slate-400 text-[10px] sm:text-xs font-light tracking-widest uppercase mb-1.5">
                      Service Interested In <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        {...register("service", { required: "Please select a service" })}
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? "service-err" : undefined}
                        className="w-full bg-[#0B0C0E]/45 border border-white/[0.08] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/55 transition-all appearance-none"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" className="bg-[#121316]">Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id} className="bg-[#121316]">
                            {s.name} — {s.price}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p id="service-err" role="alert" className="text-rose-455 text-xs mt-1.5 flex items-center gap-1 text-rose-400">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date/Time */}
                  <div>
                    <label htmlFor="preferredDateTime" className="block text-slate-400 text-[10px] sm:text-xs font-light tracking-widest uppercase mb-1.5">
                      Preferred Date & Time <span className="text-slate-500 text-[10px] font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="preferredDateTime"
                      type="datetime-local"
                      {...register("preferredDateTime")}
                      className="w-full bg-[#0B0C0E]/40 border border-white/[0.08] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/55 transition-all"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold tracking-widest uppercase py-4 px-6 rounded-xl shadow-lg shadow-amber-900/20 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-amber-500/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 text-xs sm:text-sm relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Booking…
                        </span>
                      ) : (
                        "Request Callback Slot"
                      )}
                    </button>
                    <p className="text-slate-500 text-[10px] font-light tracking-wide text-center mt-3 flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      No spam. We'll call once to confirm. Your data is safe.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
