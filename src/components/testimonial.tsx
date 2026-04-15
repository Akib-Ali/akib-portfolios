"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

 
const testimonials = [
    {
      name: "Aarav Patel",
      role: "Founder, PixelWave Studio",
      description:
        "Working with this team was a great experience. They delivered exactly what we envisioned — clean design, fast performance, and amazing attention to detail.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Meera Singh",
      role: "Marketing Manager, BloomCraft",
      description:
        "The professionalism and creativity exceeded our expectations. Our website now feels modern and truly reflects our brand identity.",
      img: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      name: "Rahul Sharma",
      role: "Tech Lead, Innovent Labs",
      description:
        "They handled everything from planning to deployment with clear communication. The end product was reliable, well-built, and delivered on time.",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      name: "Sanya Kapoor",
      role: "Entrepreneur, Luxe Threads",
      description:
        "Absolutely loved the design and smooth functionality. My eCommerce site now feels professional and easy to manage — our sales grew within weeks!",
      img: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      name: "Vikram Desai",
      role: "Operations Head, NextGen Logistics",
      description:
        "From day one, the team understood our business goals. The custom dashboard they built has simplified our operations drastically.",
      img: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
      name: "Isha Verma",
      role: "Content Creator, The Creative Edit",
      description:
        "The website they created not only looks stunning but also loads super fast. I keep getting compliments from clients and followers!",
      img: "https://randomuser.me/api/portraits/women/54.jpg",
    },
  ];

  return (
    <div id="testimonials"
      className="max-w-7xl mx-auto px-2 py-20"
    >


      <div className="text-center mb-12">
        <div className="text-center mb-16" data-aos="zoom-in-down">
          <h1
            className="flex items-center justify-center gap-3 text-4xl font-extrabold mb-6 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]"
          >
            What Our Clients Say
          </h1>

          <h3 className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Trusted by clients worldwide for delivering
            <span className="text-[#2D4E9D] font-semibold"> scalable web solutions </span>
            with
            <span className="text-[#8CC63F] font-semibold"> clean, maintainable code </span>
            and an exceptional
            <span className="text-[#2D4E9D] font-semibold"> development experience. </span>
          </h3>



        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-16">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-b from-purple-50 to-white shadow-xl rounded-2xl p-8 pt-16 text-center hover:scale-105 transition-transform duration-300"
            data-aos={Math.floor(i / 3) % 2 === 0 ? "fade-up" : "fade-up"}
          >
            {/* Curved Top for Image */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover"
              />


            </div>

            <div className="mt-8">
              <p className="text-gray-600 italic mb-4">&quot;{t.description}&quot;</p>

              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial

