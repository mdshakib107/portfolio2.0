"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#resume", label: "RESUME" },
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "WORKS" },
    { href: "#blogs", label: "BLOGS" },
    { href: "#contact", label: "CONTACT" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="backdrop-blur-2xl sticky top-0 z-50 text-gray-100 bg-[#081029] ">
      <nav className="  flex items-center justify-between px-4 py-3 container mx-auto">
        <div className=" text-white flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="text-5xl font-bold text-teal-500">
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
          {navLinks.map(
            ({ href, label }) => (
              console.log(pathname),
              (
                <Link
                  key={href}
                  href={href}
                  className={`relative pb-1 transition-colors duration-300 ${
                    pathname === href
                      ? "text-teal-600 font-bold"
                      : "text-white-700"
                  }  group`}
                >
                  {label}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )
          )}
          <div>
            <Link
              href="#contact"
              className="px-4
            border-1
     border-[#152a6b]
      py-2
      rounded-md
      text-white
      font-semibold
      bg-gradient-to-r
      from-[#081029]
      via-[#0b1740]
      to-[#152a6b]
      shadow-md
      hover:from-[#152a6b]
      hover:via-[#0b1740]
      hover:to-[#081029]
      transition-colors
      duration-300
      ease-in-out
      focus:outline-none
      focus:ring-2
      focus:ring-cyan-500"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#081029]  shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition-colors duration-200 ${
                  pathname === href ? "text-teal-600 font-bold" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <div>
              <Link
                href="#contact"
                className="px-4
            border-1
     border-[#152a6b]
      py-2
      rounded-md
      text-white
      font-semibold
      bg-gradient-to-r
      from-[#081029]
      via-[#0b1740]
      to-[#152a6b]
      shadow-md
      hover:from-[#152a6b]
      hover:via-[#0b1740]
      hover:to-[#081029]
      transition-colors
      duration-300
      ease-in-out
      focus:outline-none
      focus:ring-2
      focus:ring-cyan-500"
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
