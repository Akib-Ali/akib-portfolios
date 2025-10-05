"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="px-6 py-4 border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto ">
        <Link href="#hero" className="flex items-center">
          <img
            src="/akib-final-logo.jpg"
            alt="Akib Ali Logo"
            className="w-40 cursor-pointer"
          />
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="#about">About</Link>
          <Link href="#skills">My Skill</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <Button size="sm" asChild>
          <Link href="/resume.pdf" target="_blank">
            Resume
          </Link>
        </Button>
      </div>
    </nav>
  )
}
