"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Typed } from "react-typed"; // Correct import
import SocialLinks from "../shared/SocialLinks";

const HeroSection = () => {
  // Create a ref for the element where Typed.js will be initialized
  const typedElement = useRef(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000); // ৪ সেকেন্ড পর পর ফ্লিপ
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initialize Typed when the component mounts
    if (typedElement.current) {
      new Typed(typedElement.current, {
        strings: [
          "Shakib",
          "A MERN Stack Developer",
          "A Protagonist (ENFJ-A) Person",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });
    }
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <section
      id="home"
      className="mt-10 relative min-h-screen flex items-center justify-center bg-[#081029] text-white "
    >
      <div className="text-center ">
        {/* Profile Image */}
        <div className="relative inline-block rounded-full p-1 perspective-1000">
          {/* ফ্লিপিং ইমেজ */}
          <div
            className="relative rounded-full overflow-hidden border-3 border-teal-500 border-opacity-20 transition-transform duration-700 [transform-style:preserve-3d]"
            style={{
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <Image
              src="https://i.ibb.co/TxVy7jRx/image.png"
              alt="Profile Picture"
              width={300}
              height={300}
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I am{" "}
          <span className="text-teal-500">
            {/* Use the ref for Typed */}
            <span ref={typedElement}></span>
          </span>
        </h1>

        {/* Subtext */}
        <p className=" px-40 text-lg italic  text-gray-200 mb-6  text-center">
          I&apos;m a passionate Full-Stack Web Developer with a strong
          foundation in the MERN stack, and a focus on TypeScript, Node,
          MongoDB, Mongose, Next.js, and Redux. <br />
          I&apos;ve growth mindset, strong leadership, and excellent
          communication skills.
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center ">
          <SocialLinks />
        </div>
        <div className="herosection-bottom  left-0 top-auto bottom-10 w-full text-center mt-30">
          <Link
            className="cursor-pointer text-xs font-medium uppercase tracking-widest transition-all hover:text-teal-500 flex justify-center items-center"
            href="#about"
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
            <span className=" scroll-smooth pl-2">Scroll Down</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
