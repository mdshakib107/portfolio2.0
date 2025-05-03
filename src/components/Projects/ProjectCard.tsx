import { item } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ item }: { item: item }) => {
  return (
    <div>
      <div className=" hover:shadow-amber-300 portfolio card hovercard group p-4 md:p-5">
        <div className="portfolio-top relative overflow-hidden">
          <div className="portfolio-image fiximage blur-0 filter transition-all duration-500  group-hover:blur">
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
              href={item.id}
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 p-0 text-lg text-grey"
            >
              🔗
            </Link>
          </div>
        </div>
        <div className="portfolio-content mt-4">
          <h4 className="mb-2 font-semibold ">{item.title}</h4>
          <p className="text-sm font-thin">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
