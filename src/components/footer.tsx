// "use client"
// import { MapPin, Mail, Phone, Github, Linkedin, ArrowUp } from "lucide-react"

// // export default function Footer() {

// export default function Footer() {

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     })
//   }

//   return (
//     <footer className="bg-gray-900 text-white py-8 relative">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

//         {/* Left Section */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
//           <p className="text-gray-400">
//             I am always open to discuss your projects or talk about new ideas.
//             Let&apos;s connect and make something amazing together! 🚀

//           </p>
//         </div>

//         {/* Middle Section - Address & Contact */}
//         <ul className="space-y-3">
//           <li className="flex items-center gap-3 hover:text-[#8CC63F] transition">
//             <MapPin className="w-5 h-5 animate-bounce" />
//             Aliganj (UP)
//           </li>
//           <li className="flex items-center gap-3 hover:text-[#8CC63F] transition">
//             <Mail className="w-5 h-5 animate-pulse" />
//             <a href="mailto:akib7599@gmail.com" className="hover:underline">
//               akib7599@gmail.com
//             </a>
//           </li>
//           <li className="flex items-center gap-3 hover:text-[#8CC63F] transition">
//             <Phone className="w-5 h-5 animate-bounce" />
//             <a href="tel:+919318384168" className="hover:underline">
//               +91 9318384168
//             </a>
//           </li>
//         </ul>

//         <ul className="space-y-3">
//           <li className="flex items-center gap-3 hover:text-[#8CC63F] transition">
//             <Github className="w-5 h-5 animate-bounce" />
//             <a
//               href="https://github.com/Akib-Ali"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:underline"
//             >
//               github.com/Akib-Ali
//             </a>
//           </li>

//           <li className="flex items-center gap-3 transition hover:text-[#8CC63F]">
//             <Linkedin className="w-5 h-5 animate-pulse" />
//             <a
//               href="https://www.linkedin.com/in/akib-ali-1695081b8/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:underline"
//             >
//               linkedin.com/in/akib-ali
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Bottom CopyRight */}
//       <div className="text-center text-gray-500 text-sm mt-6">
//         © {new Date().getFullYear()} Akib Ali. All rights reserved.
//       </div>

//     <button
//         onClick={scrollToTop}
//         className="absolute right-6 bottom-6 bg-[#8CC63F] text-white p-3 rounded-full shadow-lg hover:bg-[#6ea62d] transition"
//       >
//         <ArrowUp className="w-5 h-5" />
//       </button>

//     </footer>
//   )
// }






"use client"
import { MapPin, Mail, Phone, Github, Linkedin, ArrowUp, Send } from "lucide-react"

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-[#0B1120] text-slate-300 py-16 overflow-hidden border-t border-slate-800">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D4E9D] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">

        {/* 🔹 Brand/Bio Section */}
        <div className="md:col-span-5 space-y-6">
          <h2 className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
            AKIB <span className="text-[#8CC63F]">ALI</span>
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-sm">
            A dedicated <span className="text-white font-medium">Software Engineer</span> specializing in building 
            robust MERN architectures. Focused on delivering high-performance, 
            scalable web applications through collaborative engineering.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Akib-Ali" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800/50 rounded-lg hover:bg-[#2D4E9D] hover:text-white transition-all duration-300 border border-slate-700">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/akib-ali-1695081b8/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800/50 rounded-lg hover:bg-[#4F6FB3] hover:text-white transition-all duration-300 border border-slate-700">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 🔹 Contact Info (Added Phone Number) */}
        <div className="md:col-span-4 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8CC63F]">Professional Network</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 group">
              <div className="p-2 bg-slate-800/30 rounded-md group-hover:bg-[#2D4E9D]/20 transition-colors">
                <Mail className="w-5 h-5 text-[#2D4E9D]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Official Email</p>
                <a href="mailto:akib7599@gmail.com" className="text-slate-200 hover:text-[#8CC63F] transition-colors">
                  akib7599@gmail.com
                </a>
              </div>
            </li>
            
            {/* Added Phone Number Section */}
            <li className="flex items-start gap-4 group">
              <div className="p-2 bg-slate-800/30 rounded-md group-hover:bg-[#4F6FB3]/20 transition-colors">
                <Phone className="w-5 h-5 text-[#4F6FB3]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Direct Line</p>
                <a href="tel:+919318384168" className="text-slate-200 hover:text-[#8CC63F] transition-colors">
                  +91 9318384168
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4 group">
              <div className="p-2 bg-slate-800/30 rounded-md group-hover:bg-[#8CC63F]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#8CC63F]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Location</p>
                <p className="text-slate-200">Aliganj, Uttar Pradesh, India</p>
              </div>
            </li>
          </ul>
        </div>

        {/* 🔹 Quick CTA */}
        <div className="md:col-span-3 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8CC63F]">Collaboration</h3>
          <p className="text-sm text-slate-400">Open for full-time roles and technical discussions.</p>
          <a 
            href="mailto:akib7599@gmail.com" 
            className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#0B1120] font-bold rounded-xl hover:bg-[#8CC63F] hover:text-white transition-all duration-300 shadow-lg shadow-black/20"
          >
            Send Message <Send className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} Akib Ali. Built with <span className="text-[#2D4E9D]">Next.js</span> & <span className="text-[#8CC63F]">Tailwind</span>.
        </p>
        
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          BACK TO TOP 
          <div className="p-2 bg-slate-800 rounded-full group-hover:bg-[#2D4E9D] transition-all">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  )
}