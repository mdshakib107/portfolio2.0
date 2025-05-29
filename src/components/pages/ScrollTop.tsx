"use client";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-50 px-4 py-2 rounded-md text-white font-semibold border border-[#152a6b]
    bg-gradient-to-r from-[#081029] via-[#0b1740] to-[#152a6b] shadow-md
    hover:from-[#152a6b] hover:via-[#0b1740] hover:to-[#081029]
    transition-colors duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-cyan-500
    ${visible ? "opacity-100 animate-bounce" : "opacity-0 pointer-events-none"}
  `}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;
