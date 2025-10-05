"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
// import Image from "next/image"


const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Stripe",
      description:
        "Stripe made online payments seamless and secure for our business. Their tools are unmatched.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      role: "Product Manager, Netflix",
      description:
        "Working with Netflix has been a game-changer. Their customer-first approach is inspiring.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Engineer, Google",
      description:
        "Google&apos;s products empower us to scale faster and reach billions of users worldwide.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Emily Davis",
      role: "Designer, Meta",
      description:
        "Meta&apos;s focus on innovation and community keeps pushing the boundaries of what’s possible.",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Michael Brown",
      role: "CTO, Amazon",
      description:
        "Amazon&apos; cloud infrastructure transformed the way we scale our products globally.",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Sophia Wilson",
      role: "Marketing Head, Microsoft",
      description:
        "Microsoft&apos;s tools have helped us collaborate better and boost productivity across teams.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]

  return (
    <div id="testimonials"
      className="max-w-7xl mx-auto px-2 py-16"
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
            data-aos={Math.floor(i / 3) % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Curved Top for Image */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover"
              />

              {/* <Image
                src={t.img}
                alt={t.name}
                width={96}   // 24 * 4 = 96px
                height={96}  // same height
                className="w-24 h-24 rounded-full object-cover"
              /> */}

            </div>

            <div className="mt-8">
              {/* <p className="text-gray-600 italic mb-4">"{t.description}"</p> */}
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

