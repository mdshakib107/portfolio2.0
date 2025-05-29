// components/SkillCard.jsx
"use client";
import { Skill } from "@/types";
import Link from "next/link";

import { BiCheck } from "react-icons/bi";

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div
      className=" bg-gradient-to-br
  from-gray-1000
  via-gray-950
  to-gray-800 rounded-lg p-4 shadow-md m-4   transition
    duration-300
    ease-in-out
    transform
    hover:scale-105
    from-gray-800
    hover:from-teal-500
    hover:to-teal-500
    hover:shadow-[0_0_15px_4px_rgba(45,212,191,0.6)]"
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">{skill.icon}</div>

      {/* Skill Name */}
      <h2 className="text-xl font-bold text-white text-center">{skill.name}</h2>

      {/* Intro */}
      <p className="text-gray-400 mt-2 text-center">{skill.intro}</p>

      {/* Button */}
      <div className="mt-4 flex justify-center">
        <Link
          href={`skills/${skill.id}`}
          className="
    inline-flex
    items-center
    justify-center
    bg-gradient-to-r
    from-[#081029]
    via-[#0b1740]
    to-[#152a6b]
    text-white
    font-semibold
    
    px-6
    rounded-full
    shadow-md
    hover:from-[#152a6b]
    hover:to-[#081029]
    transition-colors
    duration-300
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
  "
        >
          <BiCheck className="mr-2 text-lg" />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
