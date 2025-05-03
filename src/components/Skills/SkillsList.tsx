// components/SkillsList.jsx
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SkillCard from "./SkillCard";
const SkillsList = () => {
  // Skills List
  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500 text-4xl" />,
      intro: "A markup language used for creating web pages.",
      link: "/html",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-blue-500 text-4xl" />,
      intro: "A styling language used for custom designs.",
      link: "/css",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
      intro: "An advanced utility-first styling framework.",
      link: "/tailwind",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      intro: "A programming language used for dynamic web applications.",
      link: "/javascript",
    },
    {
      name: "React",
      icon: <SiReact className="text-cyan-400 text-4xl animate-spin-slow" />,
      intro: "A JavaScript library for building user interfaces.",
      link: "/react",
    },
    {
      name: "React Router DOM",
      icon: <SiReactrouter className="text-pink-500 text-4xl" />,
      intro: "A routing library for React applications.",
      link: "/react-router",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500 text-4xl" />,
      intro: "A JavaScript runtime environment for server-side applications.",
      link: "/node",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300 text-4xl" />,
      intro: "A minimal and flexible Node.js web application framework.",
      link: "/express",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400 text-4xl" />,
      intro: "A statically-typed superset of JavaScript.",
      link: "/typescript",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400 text-4xl" />,
      intro: "A NoSQL database system.",
      link: "/mongodb",
    },
    {
      name: "Mongoose",
      icon: <SiMongoose className="text-red-400 text-4xl" />,
      intro: "An ODM library for MongoDB.",
      link: "/mongoose",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-400 text-4xl" />,
      intro: "A predictable state container for JavaScript apps.",
      link: "/redux",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsList;
