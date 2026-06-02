import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useUtmParams } from "../hooks/useUtmParams";
import { CLINIC } from "../data";
import toast from "react-hot-toast";
import heroBg from "../assets/hero_bg.png";

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  appointmentMode: string;
  query: string;
  recaptcha: boolean;
}

export default function HeroForm() {
  const prefersReduced = useReducedMotion();
  const utmParams = useUtmParams();
  const [submitted, setSubmitted] = useState(false);
  const [robotChecked, setRobotChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    clearErrors,
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      appointmentMode: "",
      query: "",
      recaptcha: false,
    }
  });

  const handleRecaptchaClick = () => {
    const nextVal = !robotChecked;
    setRobotChecked(nextVal);
    if (nextVal) {
      clearErrors("recaptcha");
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!robotChecked) {
      setError("recaptcha", { type: "manual", message: "Please verify that you are not a robot" });
      return;
    }

    await new Promise((r) => setTimeout(r, 800)); // simulate async

    const payload = {
      ...data,
      recaptcha: robotChecked,
      ...utmParams,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
    };

    console.log("📋 IVF Appointment Form Payload:", payload);

    try {
      localStorage.setItem("asteria_last_submission", JSON.stringify(payload));
    } catch {}

    setSubmitted(true);
    toast.success("Consultation Request Submitted! We'll call you shortly.", {
      duration: 5000,
      icon: "👶",
      style: {
        background: "#0f766e",
        color: "#fff",
        fontWeight: 600,
        borderRadius: "12px",
      },
    });

    reset();
    setRobotChecked(false);
    setTimeout(() => setSubmitted(false), 5000);
  };


  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  return (
    <section id="hero" className="flex flex-col w-full">
      <div 
        className="relative min-h-[90vh] flex items-center pt-28 pb-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Light Overlay for readability */}
        <div className="absolute inset-0 bg-white/70 sm:bg-white/50 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Hero Content */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={item} className="mb-4">
                <span className="text-[#e51b60] text-lg sm:text-xl font-semibold uppercase">NO.1 IVF & Fertility Center in Chennai</span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={item} className="font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#14427b] leading-[1.2] mb-6">
                Expert IVF Doctors with High Success Rates
                <span className="block mt-2">in Chennai</span>
              </motion.h1>

              {/* Location Tag */}
              <motion.div variants={item} className="inline-block mt-4">
                <span className="bg-[#e51b60] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                  Ambattur
                </span>
              </motion.div>
            </motion.div>

            {/* Right — Appointment Form */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 32, scale: prefersReduced ? 1 : 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              id="appointment-form"
            >
              <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                {/* Form Header */}
                <div className="mb-6">
                  <h2 className="font-bold text-2xl text-[#14427b] mb-1.5">Book Your Fertility Checkup <span className="text-[#e51b60]">with IVF Experts</span></h2>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="text-5xl mb-4 text-[#e51b60]">✓</div>
                    <h3 className="font-bold text-2xl text-[#14427b] mb-2">Request Submitted!</h3>
                    <p className="text-gray-600 text-sm">Our fertility coordinator will call you back shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Name *"
                        {...register("fullName", {
                          required: "Please enter your name",
                          minLength: { value: 2, message: "Name is too short" },
                        })}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-err" : undefined}
                        className="w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e51b60] transition-all"
                      />
                      {errors.fullName && (
                        <p id="fullName-err" role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Mobile No *"
                        {...register("phone", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit Indian mobile number",
                          },
                        })}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-err" : undefined}
                        className="w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e51b60] transition-all"
                      />
                      {errors.phone && (
                        <p id="phone-err" role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email ID"
                        {...register("email", {
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-err" : undefined}
                        className="w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e51b60] transition-all"
                      />
                      {errors.email && (
                        <p id="email-err" role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Appointment Mode */}
                    <div>
                      <select
                        id="appointmentMode"
                        {...register("appointmentMode", { required: "Please select an appointment mode" })}
                        aria-invalid={!!errors.appointmentMode}
                        aria-describedby={errors.appointmentMode ? "appointmentMode-err" : undefined}
                        className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e51b60] transition-all"
                      >
                        <option value="">Select Appointment Mode *</option>
                        <option value="in-clinic">In-Clinic Consultation</option>
                        <option value="online">Online Consultation</option>
                      </select>
                      {errors.appointmentMode && (
                        <p id="appointmentMode-err" role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          {errors.appointmentMode.message}
                        </p>
                      )}
                    </div>

                    {/* Query */}
                    <div>
                      <textarea
                        id="query"
                        placeholder="Any Queries..."
                        rows={2}
                        {...register("query")}
                        className="w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e51b60] transition-all resize-none"
                      />
                    </div>

                    {/* Mock reCAPTCHA */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between select-none">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handleRecaptchaClick}
                          className={`w-6 h-6 rounded border transition-colors flex items-center justify-center ${
                            robotChecked ? "bg-green-500 border-green-500 text-white" : "bg-white border-gray-300 text-transparent"
                          }`}
                          aria-label="reCAPTCHA verification checkbox"
                        >
                          {robotChecked && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </button>
                        <span className="text-gray-700 text-sm font-sans">I'm not a robot</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                          alt="reCAPTCHA logo"
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-[8px] text-gray-500 mt-0.5">reCAPTCHA</span>
                      </div>
                    </div>
                    {errors.recaptcha && (
                      <p role="alert" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        {errors.recaptcha.message}
                      </p>
                    )}

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#e51b60] hover:bg-[#c91552] text-white font-bold tracking-widest uppercase py-4 px-6 rounded-lg shadow-md transition-all duration-250 hover:-translate-y-0.5 disabled:opacity-60 text-sm"
                      >
                        {isSubmitting ? "Submitting…" : "GET FREE IVF CONSULTATION"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
