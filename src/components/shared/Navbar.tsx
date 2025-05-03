"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/resume", label: "RESUME" },
    { href: "/works", label: "WORKS" },
    { href: "/blogs", label: "BLOGS" },
    { href: "/contact", label: "CONTACT" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl  flex items-center justify-between px-4 py-3 container mx-auto">
      <div className=" text-white flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="text-xl font-bold">
          SHAKIB.
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className=" hidden md:flex items-center space-x-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative pb-1 transition-colors duration-300 ${
              pathname === href ? "text-teal-600 font-bold" : "text-white-700"
            } group`}
          >
            {label}
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        <div>
          <Link
            href="#contact"
            className="relative inline-block px-4 py-3 bg-teal-600 text-white rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 bg-white"></span>
            <span className="relative z-10 group-hover:text-teal-600 transition-colors duration-300">
              Hire Me
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full backdrop-blur-xs shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition-colors duration-200 ${
                pathname === href ? "text-teal-600 font-bold" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
          <div>
            <Link
              href="#contact"
              className="relative inline-block px-4 py-3 bg-teal-600 text-white rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 bg-white"></span>
              <span className="relative z-10 group-hover:text-teal-600 transition-colors duration-300">
                Hire Me
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
