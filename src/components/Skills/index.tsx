import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <div id="skills" className="pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="relative pb-14 text-center">
          <h2 className="text-2xl font-semibold mb-2 uppercase relative z-10">
            My Skills
          </h2>
          <span className="inline-block h-1.5 w-32 rounded-full bg-teal-500 bg-opacity-20 relative z-10 overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-1.5 rounded-full bg-teal-500 animate-lefttoright"></span>
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 -translate-x-1/2 text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            Skills
          </span>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <button
            className="
            border-1
     border-[#152a6b]
      px-4
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
      focus:ring-cyan-500
    "
          >
            TECH SKILLS
          </button>

          <button
            className="
      px-4
      py-2
      rounded-md
       border-1
     border-[#152a6b]
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
      focus:ring-cyan-500
    "
          >
            SOFT SKILLS
          </button>
        </div>

        <SkillsList />
      </div>
    </div>
  );
};

export default Skills;
