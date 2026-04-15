"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import Celebration from "./celebration";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  whatsappNumber?: string;

};

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        toast.success("✅ Message sent successfully 🚀");
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
        reset();
      } else {
        toast.error("❌ Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://gilariverflooring.com/wp-content/uploads/2018/12/contact-us-banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

    


      <div
        className="text-center mb-12 relative z-10 pt-24"
        data-aos="zoom-in-down"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]">
          Get In Touch
        </h1>

        <h3 className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto px-4">
          Ready to contribute to
          <span className="text-[#2D4E9D] font-semibold"> innovative teams </span>
          and build
          <span className="text-[#8CC63F] font-semibold"> scalable frontend solutions </span>
          that drive impact. Let&apos;s discuss how I can add value to your next big mission.
        </h3>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* Contact Form */}
        <div data-aos="fade-up" className="order-2 md:order-1 pb-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
              Get in Touch
            </h2>

            <div className="space-y-4">
              {/* Name */}
              <input
                {...register("name", { required: "Name is Required" })}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#4F6FB3] outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              {/* Email */}
              <input
                {...register("email", { required: "Email is Required" })}
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#4F6FB3] outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <input
                {...register("whatsappNumber", {
                  pattern: {
                    value: /^[0-9+\s()-]{7,20}$/,
                    message: "Enter a valid WhatsApp number",
                  },
                })}
                type="tel"
                placeholder="Your WhatsApp Number (optional)"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#4F6FB3] outline-none"
              />
              {errors.whatsappNumber && (
                <p className="text-red-500 text-sm">{errors.whatsappNumber.message}</p>
              )}
              {/* Message */}
              <textarea
                {...register("message", { required: "Message is Required" })}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#4F6FB3] outline-none resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Animation */}
        <div
          className="flex justify-center items-center order-1 md:order-2"
          data-aos="fade-down"
        >
          <Player
            autoplay
            loop
            src="/animations/contact.json"
            className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-[600px] xl:w-[650px] h-auto"
          />
        </div>
      </div>

      {/* Confetti */}
      <Celebration showConfetti={showConfetti} />
    </div>
  );
};

export default ContactUs;












