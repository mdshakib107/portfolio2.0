// components/SkillCard.jsx
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-gray-950 rounded-lg py-6 shadow-md m-4  hover:shadow-teal-500 transition duration-300 ease-in-out transform hover:scale-105">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
      </div>

      {/* Skill Name */}
      <h2 className="text-xl font-bold text-white text-center">{skill.name}</h2>

      {/* Intro */}
      <p className="text-gray-400 mt-2 text-center">{skill.intro}</p>

      {/* Button */}
      <div className="mt-4 flex justify-center">
        <Link
          className="flex items-center justify-center hover:bg-gray-900 text-white border-1 px-4  rounded-full transition duration-300 ease-in-out"
          href={skill.link}
        >
          <BiCheck className="mr-2" />
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
