"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Typed } from "react-typed"; // Correct import
import SocialLinks from "../shared/SocialLinks";

const HeroSection = () => {
  // Create a ref for the element where Typed.js will be initialized
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed when the component mounts
    if (typedElement.current) {
      new Typed(typedElement.current, {
        strings: ["Shakib", "MERN Stack Developer"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });
    }
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#081029] text-white px-4">
      <div className="text-center max-w-2xl">
        {/* Profile Image */}
        <div className="herosection-imagewrapper relative mb-5 inline-block overflow-hidden rounded-full align-middle">
          <span className="herosection-imageanimation absolute left-0 top-0 z-10 h-full w-full animate-spin rounded-full bg-gradient-to-tr from-teal-500 to-transparent"></span>
          <div className="herosection-image fiximage relative z-20 inline-block h-[150px] w-[150px] overflow-hidden rounded-full border-3 border-teal-500 border-opacity-10 align-middle">
            {/* Next.js Image Component */}
            <Image
              src="https://i.ibb.co.com/H4wyntP/50343404-2189711957956882-6683888295706886144-n.jpg"
              alt="Joseph Bieber"
              width={150}
              height={150}
              className="object-cover"
              loading="lazy"
            />
          </div>
          <span className="absolute inset-0 z-0 animate-spin-slow rounded-full border-4 border-t-teal-500 border-transparent"></span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I am{" "}
          <span className="text-teal-500">
            {/* Use the ref for Typed */}
            <span ref={typedElement}>|</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 mb-6">
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make websites more interactive with web
          animations.
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center">
          <SocialLinks />
        </div>
        <div className="herosection-bottom absolute left-0 top-auto bottom-10 w-full text-center">
          <a
            className="cursor-pointer text-xs font-medium uppercase tracking-widest transition-all hover:text-teal-500 flex justify-center items-center"
            href="#scroll-section" // এখানে আপনি আপনার স্ক্রল সেকশনের আইডি ব্যবহার করবেন।
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="inline animate-bounce text-base"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"></path>
            </svg>
            <span className="pl-2">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
