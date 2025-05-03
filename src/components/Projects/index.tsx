"use client"; // যদি তুমি app directory ব্যবহার করো
import Image from "next/image";
import Link from "next/link";

const portfolioData = [
  {
    title: "Candle",
    description: "Creative Candle Light",
    image:
      "https://i.ibb.co.com/cckQKz8h/fexoral-120-mg-tablet-38755786903-i1-smc-Xg-Ex4f23c-Bnx-AW6t4.webp",
    link: "https://dribbble.com",
  },
  {
    title: "Paint",
    description: "Creative wall painting",
    image:
      "https://i.ibb.co.com/cckQKz8h/fexoral-120-mg-tablet-38755786903-i1-smc-Xg-Ex4f23c-Bnx-AW6t4.webp",
    link: "https://dribbble.com",
  },
  {
    title: "UI/UX Sample",
    description: "UI/UX Sample design mockup",
    image:
      "https://i.ibb.co.com/cckQKz8h/fexoral-120-mg-tablet-38755786903-i1-smc-Xg-Ex4f23c-Bnx-AW6t4.webp",
    link: "https://dribbble.com",
  },
  {
    title: "Packet",
    description: "Packet design mockup",
    image:
      "https://i.ibb.co.com/cckQKz8h/fexoral-120-mg-tablet-38755786903-i1-smc-Xg-Ex4f23c-Bnx-AW6t4.webp",
    link: "https://dribbble.com",
  },
  {
    title: "Packet",
    description: "Another packet design mockup",
    image:
      "https://i.ibb.co.com/cckQKz8h/fexoral-120-mg-tablet-38755786903-i1-smc-Xg-Ex4f23c-Bnx-AW6t4.webp",
    link: "https://dribbble.com",
  },
  {
    title: "Cream",
    description: "Creative cream box design",
    image:
      "https://i.ibb.co.com/cckQKz8h/fexoral-120-mg-tablet-38755786903-i1-smc-Xg-Ex4f23c-Bnx-AW6t4.webp",
    link: "https://dribbble.com",
  },
];

export default function MyWork() {
  return (
    <section className="portfolios-section pt-24 lg:pt-28 xl:pt-32">
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

        {/* Filters */}
        <div className="portfolio-filters flex flex-wrap justify-center gap-4">
          {["All", "UI/UX Design", "Html & Css", "React Js", "Node Js"].map(
            (filter) => (
              <button
                key={filter}
                className="relative inline-block px-4 py-1 bg-teal-600 text-white rounded-xs overflow-hidden group"
              >
                <span className="absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 bg-white" />
                <span className="relative z-10 group-hover:text-teal-600 transition-colors duration-300">
                  {filter}
                </span>
              </button>
            )
          )}
        </div>

        {/* Portfolio Items */}
        <div className="mt-12 grid grid-cols-6 gap-7">
          {portfolioData.map((item, index) => (
            <div key={index} className="col-span-6 sm:col-span-3 lg:col-span-2">
              <div className="portfolio card hovercard group p-4 md:p-5">
                <div className="portfolio-top relative overflow-hidden">
                  <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
                    <Image
                      alt={item.title}
                      src={item?.image}
                      width={550}
                      height={384}
                      style={{ color: "transparent" }}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                    <Link
                      href={item.link}
                      target="_blank"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 p-0 text-lg text-grey"
                    >
                      🔗
                    </Link>
                  </div>
                </div>
                <div className="portfolio-content mt-4">
                  <h5 className="mb-0">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="btn btn-small">
            <span>Load More</span>
          </button>
        </div>
      </div>
    </section>
  );
}
