import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <div className="resume-section pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="text-2xl font-semibold relative z-10 mb-2 uppercase">
            My Skills
          </h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-teal-500 bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-teal-500"></span>
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            Skills
          </span>
        </div>
        <div className="flex justify-center item-center">
          <button className="relative inline-block px-4 py-2 bg-teal-600 text-white rounded-xs overflow-hidden group">
            <span className="absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 bg-white" />
            <span className="relative z-10 group-hover:text-teal-600 transition-colors duration-300">
              Tech
            </span>
          </button>

          <button className=" mx-2 relative inline-block px-4 py-2 bg-teal-600 text-white rounded-xs overflow-hidden group">
            <span className="absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 bg-white" />
            <span className="relative z-10 group-hover:text-teal-600 transition-colors duration-300">
              Soft
            </span>
          </button>
        </div>
        <SkillsList />
      </div>
    </div>
  );
};

export default Skills;
