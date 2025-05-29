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
      id: 1,
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500 text-4xl" />,
      intro: "A markup language used for creating web pages.",
      link: "/html",
      projects: ["Portfolio Website", "Landing Page", "Resume Builder"],
      blogs: [
        "Introduction to HTML",
        "HTML5 Semantic Tags",
        "Common HTML Mistakes",
      ],
    },
    {
      id: 2,
      name: "CSS",
      icon: <SiCss3 className="text-blue-500 text-4xl" />,
      intro: "A styling language used for custom designs.",
      link: "/css",
      projects: ["CSS Grid Layout", "Flexbox Gallery", "Custom Animations"],
      blogs: [
        "Mastering Flexbox",
        "CSS Selectors Explained",
        "Tips for Clean CSS",
      ],
    },
    {
      id: 3,
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
      intro: "An advanced utility-first styling framework.",
      link: "/tailwind",
      projects: ["Tailwind Portfolio", "Dashboard UI", "E-commerce Homepage"],
      blogs: [
        "Why Use Tailwind?",
        "Responsive Design with Tailwind",
        "Tailwind Tips & Tricks",
      ],
    },
    {
      id: 4,
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      intro: "A programming language used for dynamic web applications.",
      link: "/javascript",
      projects: ["To-Do App", "Weather App", "Quiz Game"],
      blogs: [
        "Understanding Closures",
        "ES6 Features You Should Know",
        "Async JS Made Easy",
      ],
    },
    {
      id: 5,
      name: "React",
      icon: <SiReact className="text-cyan-400 text-4xl animate-spin-slow" />,
      intro: "A JavaScript library for building user interfaces.",
      link: "/react",
      projects: ["React Portfolio", "Blog App", "Recipe Finder"],
      blogs: [
        "React vs Vanilla JS",
        "useEffect Deep Dive",
        "Component Reusability",
      ],
    },
    {
      id: 6,
      name: "React Router DOM",
      icon: <SiReactrouter className="text-pink-500 text-4xl" />,
      intro: "A routing library for React applications.",
      link: "/react-router",
      projects: [
        "Multi-Page React App",
        "Dashboard Routing",
        "Auth Protected Routes",
      ],
      blogs: [
        "React Router Basics",
        "Nested Routes Explained",
        "Route Guards in React",
      ],
    },
    {
      id: 7,
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500 text-4xl" />,
      intro: "A JavaScript runtime environment for server-side applications.",
      link: "/node",
      projects: ["API with Node", "File Uploader", "Real-time Chat App"],
      blogs: [
        "Node.js Fundamentals",
        "Handling File Systems",
        "Creating REST APIs",
      ],
    },
    {
      id: 8,
      name: "Express.js",
      icon: <SiExpress className="text-gray-300 text-4xl" />,
      intro: "A minimal and flexible Node.js web application framework.",
      link: "/express",
      projects: ["REST API", "Auth System", "Blog Backend"],
      blogs: [
        "Middleware in Express",
        "Routing Made Simple",
        "Error Handling in Express",
      ],
    },
    {
      id: 9,
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400 text-4xl" />,
      intro: "A statically-typed superset of JavaScript.",
      link: "/typescript",
      projects: ["TypeScript To-Do", "Typed API", "React with TS"],
      blogs: [
        "Why Use TypeScript?",
        "Types vs Interfaces",
        "Type Safety in JS",
      ],
    },
    {
      id: 10,
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400 text-4xl" />,
      intro: "A NoSQL database system.",
      link: "/mongodb",
      projects: ["User Database", "Inventory System", "Analytics Dashboard"],
      blogs: ["MongoDB Basics", "Data Modeling Tips", "Aggregation Framework"],
    },
    {
      id: 11,
      name: "Mongoose",
      icon: <SiMongoose className="text-red-400 text-4xl" />,
      intro: "An ODM library for MongoDB.",
      link: "/mongoose",
      projects: [
        "Mongoose CRUD App",
        "Data Validation System",
        "User Auth Schema",
      ],
      blogs: [
        "Working with Schemas",
        "Populate & Virtuals",
        "Optimizing Mongoose Queries",
      ],
    },
    {
      id: 12,
      name: "Redux",
      icon: <SiRedux className="text-purple-400 text-4xl" />,
      intro: "A predictable state container for JavaScript apps.",
      link: "/redux",
      projects: ["Redux Store Setup", "Cart System", "Notification Center"],
      blogs: [
        "Redux Toolkit Guide",
        "Middleware with Redux",
        "Managing Global State",
      ],
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
