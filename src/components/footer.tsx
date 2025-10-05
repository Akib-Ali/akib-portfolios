"use client"
import { MapPin, Mail, Phone, Github, Linkedin, ArrowUp } from "lucide-react"

// export default function Footer() {

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            I am always open to discuss your projects or talk about new ideas.
            Let&apos;s connect and make something amazing together! 🚀

          </p>
        </div>

        {/* Middle Section - Address & Contact */}
        <ul className="space-y-3">
          <li className="flex items-center gap-3 hover:text-[#8CC63F] transition">
            <MapPin className="w-5 h-5 animate-bounce" />
            Aliganj (UP)
          </li>
          <li className="flex items-center gap-3 hover:text-[#8CC63F] transition">
            <Mail className="w-5 h-5 animate-pulse" />
            <a href="mailto:akib7599@gmail.com" className="hover:underline">
              akib7599@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3 hover:text-[#8CC63F] transition">
            <Phone className="w-5 h-5 animate-bounce" />
            <a href="tel:+919318384168" className="hover:underline">
              +91 9318384168
            </a>
          </li>
        </ul>

        <ul className="space-y-3">
          <li className="flex items-center gap-3 hover:text-[#8CC63F] transition">
            <Github className="w-5 h-5 animate-bounce" />
            <a
              href="https://github.com/Akib-Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Akib-Ali
            </a>
          </li>

          <li className="flex items-center gap-3 transition hover:text-[#8CC63F]">
            <Linkedin className="w-5 h-5 animate-pulse" />
            <a
              href="https://www.linkedin.com/in/akib-ali-1695081b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/akib-ali
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom CopyRight */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Akib Ali. All rights reserved.
      </div>

    <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-[#8CC63F] text-white p-3 rounded-full shadow-lg hover:bg-[#6ea62d] transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </footer>
  )
}





