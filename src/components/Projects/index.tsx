"use client"; // যদি তুমি app directory ব্যবহার করো
import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import {
  SiDocker,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";
const techTags = [
  { name: "Redux", color: "text-purple-400", icon: <SiRedux /> },
  { name: "Next.js", color: "text-gray-300", icon: <SiNextdotjs /> },
  { name: "DBMS", color: "text-pink-300", icon: <FaDatabase /> },
  { name: "SQL", color: "text-blue-400", icon: <BiCodeAlt /> },
  { name: "PostgreSQL", color: "text-blue-300", icon: <SiPostgresql /> },
  { name: "Prisma", color: "text-purple-300", icon: <SiPrisma /> },
  { name: "MongoDB", color: "text-green-400", icon: <SiMongodb /> },
  { name: "Mongoose", color: "text-red-400", icon: <SiMongoose /> },
  { name: "Docker", color: "text-blue-500", icon: <SiDocker /> },
];
const portfolioData = [
  {
    id: "1",
    title: "💊 MediMart – Medicine E-Commerce Platform",
    description:
      "MediMart is a full-featured medicine e-commerce platform that enables users to securely browse, search, and purchase medicines online. It includes role-based access for customers and admins, secure authentication, prescription verification, order tracking, and a responsive shopping experience.",
    image: "https://i.ibb.co.com/fY71wzvP/image.png",
    link: "https://medi-mart-night.vercel.app/",
  },
];

export default function MyWork() {
  return (
    <section
      id="projects"
      className="portfolios-section pt-24 lg:pt-28 xl:pt-32"
    >
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="text-2xl font-semibold relative z-10 mb-2 uppercase">
            My Works
          </h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-teal-500 bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-teal-500"></span>
          </span>
          <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5">
            Works
          </span>
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center m-1 px-4 py-2 rounded-md border border-gray-700 bg-[#1a1a2e] hover:bg-[#2a2a40] transition text-sm"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
        <div className="p-4 overflow-x-hidden whitespace-nowrap rounded-md text-center relative">
          <div className="animate-slide inline-block">
            {techTags.map((tag, index) => (
              <button
                key={index}
                className={`inline-flex items-center justify-center m-1 px-4 py-2 rounded-md border border-gray-700 bg-[#1a1a2e] hover:bg-[#2a2a40] transition text-sm ${tag.color}`}
              >
                <span className="text-lg mx-1">{tag.icon}</span>
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="mt-12 grid grid-cols-6 gap-7">
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            {portfolioData.map((item, index) => (
              <ProjectCard item={item} key={index} />
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {/* <div className="mt-12 text-center">
          <button className="btn btn-small">
            <span>Load More</span>
          </button>
        </div> */}
      </div>
    </section>
  );
}
