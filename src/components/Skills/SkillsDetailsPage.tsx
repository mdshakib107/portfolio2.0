import Link from "next/link";
import { SiNodedotjs } from "react-icons/si";

const skill = {
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
};

export default function SkillDetails() {
  return (
    <>
      <div className="text-center">
        <div className="flex items-center gap-4 mb-6">
          {skill.icon}
          <h2 className="text-3xl font-semibold">{skill.name}</h2>
        </div>
      </div>
      <p className="mb-6">{skill.intro}</p>

      <div className="flex ">
        {" "}
        <div className="m-6">
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <ul className="list-disc list-inside space-y-1">
            {skill.projects.map((project, idx) => (
              <li key={idx}>
                <Link
                  href={`/projects/${encodeURIComponent(
                    project.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  className="text-blue-600 hover:underline"
                >
                  {project}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="m-6">
          <h3 className="text-xl font-semibold mb-2">Blogs</h3>
          <ul className="list-disc list-inside space-y-1">
            {skill.blogs.map((blog, idx) => (
              <li key={idx}>
                <Link
                  href={`/blogs/${encodeURIComponent(
                    blog.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  className="text-blue-600 hover:underline"
                >
                  {blog}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
