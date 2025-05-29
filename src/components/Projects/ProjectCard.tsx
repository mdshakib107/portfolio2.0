import { item } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ item }: { item: item }) => {
  return (
    <div
      className="bg-gradient-to-br
  from-gray-1000
  via-gray-950
  to-gray-800 rounded-lg p-4 shadow-md m-4   transition
    duration-300
    ease-in-out
    transform
    hover:scale-105
    from-gray-800
    hover:from-teal-500
    hover:to-teal-500
    hover:shadow-[0_0_15px_4px_rgba(45,212,191,0.6)]"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-md">
        <Image
          alt={item.title}
          src={item?.image}
          width={550}
          height={384}
          style={{ color: "transparent" }}
          className="w-full h-auto object-cover rounded-md"
          priority={true}
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
        <p className="mt-1 text-white text-sm leading-relaxed font-light">
          {item.description.length > 100
            ? item.description.slice(0, 100) + "..."
            : item.description}
        </p>

        {/* Details Button */}
        <div className="mt-4 flex justify-center">
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              bg-gradient-to-r
              from-[#081029]
              via-[#0b1740]
              to-[#152a6b]
              text-white
              border-1
              border-[#152a6b]
              font-semibold
              py-2
              px-6
              rounded-full
              shadow-md
              hover:from-[#152a6b]
              hover:to-[#081029]
              transition-colors
              duration-300
              ease-in-out
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
