// components/SkillsList.jsx
import SkillCard from "./SkillCard";

const SkillsList = () => {
  // Skills List
  const skills = [
    {
      name: "HTML",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      intro: "A markup language used for creating web pages.",
      link: "/html",
    },
    {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.png",
      intro: "A styling language used for custom designs.",
      link: "/css",
    },
    {
      name: "Tailwind CSS",
      icon: "https://tailwindcss.com/_next/static/media/logo.0e8c9f8b.png",
      intro: "An advanced utility-first styling framework.",
      link: "/tailwind",
    },
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      intro: "A programming language used for dynamic web applications.",
      link: "/javascript",
    },
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      intro: "A JavaScript library for building user interfaces.",
      link: "/react",
    },
    {
      name: "React Router DOM",
      icon: "https://reactrouter.com/web/guides/quick-start/logo.svg",
      intro: "A routing library for React applications.",
      link: "/react-router",
    },
    {
      name: "Node.js",
      icon: "https://nodejs.org/static/images/logo.svg",
      intro: "A JavaScript runtime environment for server-side applications.",
      link: "/node",
    },
    {
      name: "Express.js",
      icon: "https://expressjs.com/images/express-facebook-share.png",
      intro: "A minimal and flexible Node.js web application framework.",
      link: "/express",
    },
    {
      name: "TypeScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      intro: "A statically-typed superset of JavaScript.",
      link: "/typescript",
    },
    {
      name: "MongoDB",
      icon: "https://www.mongodb.com/assets/svg/mongodb-logo.svg",
      intro: "A NoSQL database system.",
      link: "/mongodb",
    },
    {
      name: "Mongoose",
      icon: "https://mongoosejs.com/docs/images/mongoose.png",
      intro: "An ODM library for MongoDB.",
      link: "/mongoose",
    },
    {
      name: "Redux",
      icon: "https://redux.js.org/img/redux-logo.svg",
      intro: "A predictable state container for JavaScript apps.",
      link: "/redux",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsList;
