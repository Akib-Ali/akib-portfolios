"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; 
import { resumeLink } from "./common";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-4 border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <img
            src="/akib-final-logo.jpg"
            alt="Akib Ali Logo"
            className="w-36 sm:w-40 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#skills" className="hover:text-blue-600 transition">
            My Skill
          </Link>
          <Link href="#projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="#testimonials" className="hover:text-blue-600 transition">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Resume Button (Always Visible) */}
        <Button size="sm" asChild className="hidden md:inline-flex">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 pb-4 animate-fadeIn">
          <Link
            href="#about"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            My Skill
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button size="sm" asChild>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
