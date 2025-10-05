// "use client"
// import { useRef, useState, useEffect } from "react"
// import { Player } from "@lottiefiles/react-lottie-player"
// import { useForm } from "react-hook-form"
// import { Loader2, Send } from "lucide-react"
// import toast from "react-hot-toast"
// import Celebration from "./celebration"
// import AOS from "aos";
// import "aos/dist/aos.css";

// type ContactFormData = {
//   name: string;
//   email: string;
//   message: string;
// }

// // const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()
// const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()


// // const onSubmit = async (data: ContactFormData) => { ... }
// const onSubmit = async (data: ContactFormData) => { ... }



// const ContactUs = () => {
//   const { register, handleSubmit, reset, formState: { errors } } = useForm()
//   const [loading, setLoading] = useState(false)
//   const [showConfetti, setShowConfetti] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: false,
//     });
//   }, []);




//   const onSubmit = async (data: any) => {
//     try {
//       setLoading(true)
//       const res = await fetch("/api/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       })
//       const result = await res.json()

//       if (result.success) {
//         toast.success("✅ Message sent successfully 🚀")
//         setShowConfetti(true);
//         setTimeout(() => setShowConfetti(false), 4000); // hi
//         reset()
//       } else {
//         toast.error("❌ Failed to send message")
//       }
//     } catch (error) {
//       console.error("Error:", error)
//       toast.error("⚠️ Something went wrong!")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <>
//       <div id="contact"
//         className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 bg-cover bg-center"
//         style={{ backgroundImage: "url('https://gilariverflooring.com/wp-content/uploads/2018/12/contact-us-banner.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Top Center Heading */}
//         <div className="text-center mb-12 relative z-10 pt-20" data-aos="zoom-in-down">
//           <h1
//             className="flex items-center justify-center gap-3 text-4xl font-extrabold mb-6 
//                  bg-clip-text text-transparent 
//                  bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]"
//           >
//             Contact Me
//           </h1>
//           <h3 className="text-xl md:text-2xl  text-gray-200 leading-relaxed max-w-2xl mx-auto">
//             Have a project in mind? Let's create
//             <span className="text-[#2D4E9D] font-semibold"> clean, functional, </span>
//             and
//             <span className="text-[#8CC63F] font-semibold"> interactive digital experiences</span>
//           </h3>
//         </div>

//         <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

//           {/* Contact Form */}
//           <div data-aos="fade-right">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="bg-white shadow-2xl rounded-2xl p-8 bg-opacity-95"
//             >
//               <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//               <div className="space-y-4">
//                 <input
//                   {...register("name", { required: "Name is Required" })}
//                   placeholder="Your Name"
//                   className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

//                 <input
//                   {...register("email", { required: "Email is Required" })}
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

//                 <textarea
//                   {...register("message", { required: "Message is Required" })}
//                   placeholder="Your Message"
//                   rows={4}
//                   className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
//                 />
//                 {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" /> Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" /> Send Message
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Lottie Animation */}
//           <div className="flex justify-center items-center" data-aos="fade-left">
//             <Player
//               autoplay
//               loop
//               src="/animations/contact.json"
//               style={{ width: "650px", height: "650px" }}
//             />
//           </div>
//         </div>

//         <Celebration showConfetti={showConfetti} />
//       </div>


//     </>
//   )
// }

// export default ContactUs




"use client"
import { useState, useEffect } from "react"
// import { Player } from "@lottiefiles/react-lottie-player"
import { useForm } from "react-hook-form"
import { Loader2, Send } from "lucide-react"
import toast from "react-hot-toast"
import Celebration from "./celebration"
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
}

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await res.json()

      if (result.success) {
        toast.success("✅ Message sent successfully 🚀")
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
        reset()
      } else {
        toast.error("❌ Failed to send message")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("⚠️ Something went wrong!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://gilariverflooring.com/wp-content/uploads/2018/12/contact-us-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Top Center Heading */}
      <div className="text-center mb-12 relative z-10 pt-20" data-aos="zoom-in-down">
        <h1
          className="flex items-center justify-center gap-3 text-4xl font-extrabold mb-6 
               bg-clip-text text-transparent 
               bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]"
        >
          Contact Me
        </h1>
        <h3 className="text-xl md:text-2xl  text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s create
          <span className="text-[#2D4E9D] font-semibold"> clean, functional, </span>
          and
          <span className="text-[#8CC63F] font-semibold"> interactive digital experiences</span>
        </h3>
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contact Form */}
        <div data-aos="fade-right">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-2xl rounded-2xl p-8 bg-opacity-95"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <input
                {...register("name", { required: "Name is Required" })}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <input
                {...register("email", { required: "Email is Required" })}
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <textarea
                {...register("message", { required: "Message is Required" })}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

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

        {/* Lottie Animation */}
        <div className="flex justify-center items-center" data-aos="fade-left">
          <Player
            autoplay
            loop
            src="/animations/contact.json"
            style={{ width: "650px", height: "650px" }}
          />
        </div>
      </div>

      <Celebration showConfetti={showConfetti} />
    </div>
  )
}

export default ContactUs











