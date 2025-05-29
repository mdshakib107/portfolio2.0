import SkillDetails from "@/components/Skills/SkillsDetailsPage";
import Link from "next/link";

const SkillsDetailsPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#081029] text-white flex flex-col items-center justify-center  ">
        <Link
          className="
    bg-gradient-to-r 
    from-[#081029] 
    via-[#0b1740] 
    to-[#152a6b] 
    text-white 
    font-semibold 
    py-3 
    px-6 
    rounded-lg 
    shadow-md 
    hover:from-[#152a6b] 
    hover:to-[#081029] 
    transition-colors 
    duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
  "
          href="/"
        >
          Home Page{" "}
        </Link>
        <h1 className="text-4xl font-bold mb-6 tracking-wide drop-shadow-md">
          Skills Details Page
        </h1>

        <p className="max-w-xl text-center text-gray-300 leading-relaxed text-lg mb-6">
          Below are the projects I have completed and the blogs I have written
          related to this skill.
        </p>
        <SkillDetails />
      </div>
    </>
  );
};

export default SkillsDetailsPage;
