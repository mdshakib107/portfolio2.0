"use client";
import { useRef } from "react";
import ReactPlayer from "react-player/youtube";
const AboutSection = () => {
  const playerRef = useRef<ReactPlayer>(null);
  return (
    <div className="about-section pt-24 lg:pt-28 xl:pt-32">
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

        <div className="grid grid-cols-2 items-center gap-7">
          {/* Image Section */}
          <div className="col-span-2 lg:col-span-1">
            <div className="about-image overflow-hidden rounded-lg">
              <div className="about-image-inner relative border-3 border-teal-500 border-opacity-10">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <ReactPlayer
                      ref={playerRef}
                      url="https://www.youtube.com/watch?v=gh43P-XoWmg"
                      playing={true}
                      controls={false}
                      width="100%"
                      height="100%"
                      light={true} // Only shows thumbnail + play button
                      playIcon={
                        <button className="bg-teal-500 text-white px-4 py-2 rounded-full text-lg">
                          ▶ Play
                        </button>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-span-2 lg:col-span-1">
            <div className="about-content">
              <h3>
                Hi, I am <span className="text-teal-500">Joseph Bieber</span>
              </h3>
              <ul className="styledlist">
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    First Name
                  </strong>
                  : Joseph
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Last Name
                  </strong>
                  : Bieber
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Age
                  </strong>
                  : 27 years
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Nationality
                  </strong>
                  : American
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Languages
                  </strong>
                  : English, French
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Address
                  </strong>
                  : 121 King Street, Melbourne, United States
                </li>
                <li className="text-lg">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Freelance
                  </strong>
                  : Available
                </li>
              </ul>
              <a href="/resume.pdf" className="btn mt-3">
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
