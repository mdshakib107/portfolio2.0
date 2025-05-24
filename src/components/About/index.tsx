"use client";

import {
  Book,
  Code,
  Code2Icon,
  Heading,
  Lightbulb,
  PersonStanding,
} from "lucide-react";
const techTags = [
  { name: "Programing", color: "text-purple-400", icon: <Code2Icon /> },
  { name: "Reading", color: "text-gray-300", icon: <Book /> },
  { name: "Thinking", color: "text-pink-300", icon: <Heading /> },
  {
    name: "Protagonist (ENFJ-A)",
    color: "text-pink-300",
    icon: <PersonStanding />,
  },
];
const AboutSection = () => {
  return (
    <div id="about" className="about-section pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="text-2xl font-semibold relative z-10 mb-2 uppercase">
            About Me
          </h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-teal-500 bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-teal-500"></span>
          </span>
          <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5">
            About
          </span>
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
        <div className="grid grid-cols-2 items-center gap-1">
          {/* Image Section */}
          <div className="col-span-2 lg:col-span-1">
            <div className="about-image overflow-hidden rounded-lg border-2 border-teal-500 border-opacity-10">
              <div
                className="relative w-full"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src="https://drive.google.com/file/d/1JVLPviTmCAS1Ri5duIqnVEPSH_7D8sck/preview"
                  allow="autoplay"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className=" col-span-2 lg:col-span-1">
            <section className="bg-[#081029] h-96 overflow-y-auto   md:px-8 ">
              <div className="max-w-5xl mx-auto  rounded-2xl shadow-lg ">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="text-teal-500" />
                      <h3 className="text-xl font-semibold text-gray-200">
                        Tech Stack
                      </h3>
                    </div>
                    <p className="text-white text-base leading-relaxed">
                      <span className="text-teal-500 font-medium">MERN</span>,{" "}
                      <span className="text-teal-500 font-medium">
                        TypeScript
                      </span>
                      , <span className="text-teal-500 font-medium">Redux</span>
                      ,{" "}
                      <span className="text-teal-500 font-medium">Next.js</span>
                      ,{" "}
                      <span className="text-teal-500 font-medium">
                        Firebase
                      </span>
                    </p>
                  </div>

                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Lightbulb className="text-teal-500" />
                      <h3 className="text-xl font-semibold text-gray-200">
                        Soft Skills
                      </h3>
                    </div>
                    <span className="font-semibold text-teal-400">
                      Protagonist (ENFJ-A) personality
                    </span>
                    <p className="text-gray-200 text-base leading-relaxed">
                      <span className="text-teal-500 font-medium">
                        Leadership
                      </span>
                      ,{" "}
                      <span className="text-teal-500 font-medium">
                        Communication
                      </span>
                      ,{" "}
                      <span className="text-teal-500 font-medium">
                        Problem Solving
                      </span>
                      ,{" "}
                      <span className="text-teal-500 font-medium">
                        Teamwork
                      </span>
                      ,{" "}
                      <span className="text-teal-500 font-medium">
                        Growth Mindset
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6 mt-5 text-justify">
                  Hello! I&apos;m a{" "}
                  <span className="text-teal-500 font-semibold">
                    passionate and growth-driven web developer
                  </span>{" "}
                  with a strong foundation in the MERN stack and a deep
                  commitment to continuous learning. I began my web development
                  journey in July 2021, building 12 beginner-level projects
                  using HTML, CSS, Tailwind CSS, JavaScript, React, Firebase,
                  Node.js, Express.js, and MongoDB.
                </p>

                <p className="text-gray-200 text-lg leading-relaxed mb-6 text-justify">
                  In early 2022, I interned at{" "}
                  <span className="font-medium text-teal-500">
                    Odicode Digital Solutions Pvt Ltd
                  </span>{" "}
                  in Karnataka, India, where I gained industry-level exposure.
                  After a short break, I resumed my journey in October 2024 with
                  advanced technologies such as{" "}
                  <span className="font-medium text-teal-500">
                    TypeScript, advanced Node.js & Express.js, Mongoose, Redux,
                    and Next.js
                  </span>
                  . During this phase, I collaborated with a team of 5 members
                  on industry-standard projects, further sharpening my skills.
                </p>

                <p className="text-gray-200 text-lg leading-relaxed mb-6 text-justify">
                  I&apos;m currently in my final year of Computer Science &
                  Engineering at{" "}
                  <span className="font-medium text-teal-500">
                    Green University of Bangladesh
                  </span>
                  . I’ve also been actively involved in social and volunteer
                  organizations such as{" "}
                  <span className="font-medium text-teal-500">
                    Volunteer for Bangladesh – Dhaka Zone, Creating Legacies 17
                    / Coaches Across Continents, Aachal Foundation
                  </span>
                  , and the{" "}
                  <span className="font-medium text-teal-500">
                    Green University Islamic Community
                  </span>
                  . These roles have helped me grow in leadership,
                  communication, and team collaboration.
                </p>

                <p className="text-gray-200 text-lg leading-relaxed mb-10 text-justify">
                  As an{" "}
                  <span className="font-semibold text-teal-400">
                    ENFJ-A personality
                  </span>
                  , I thrive in collaborative environments and value empathy,
                  responsibility, and creative problem-solving. My mission is to
                  create impactful digital experiences through technology and
                  meaningful teamwork.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
