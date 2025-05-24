import { Facebook, Github, Globe, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <ul className="flex space-x-4">
      {/* GitHub */}

      <li className="inline-block align-middle">
        <Link
          href="https://github.com/mdshakib107"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block h-10 w-10 overflow-hidden border border-gray-500 border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <Github />
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-teal-500 text-grey transition-all duration-500 group-hover:translate-y-0">
            <Github />
          </span>
        </Link>
      </li>

      {/* Facebook */}
      <li className="inline-block align-middle">
        <Link
          href="https://www.facebook.com/stepup.shakib/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block h-10 w-10 overflow-hidden border border-gray-500 border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <Facebook />
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-teal-500 text-grey transition-all duration-500 group-hover:translate-y-0">
            <Facebook />
          </span>
        </Link>
      </li>

      {/* LinkedIn */}
      <li className="inline-block align-middle">
        <Link
          href="https://www.linkedin.com/in/mohammad-shakib/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block h-10 w-10 overflow-hidden border border-gray-500 border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <Linkedin />
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-teal-500 text-grey transition-all duration-500 group-hover:translate-y-0">
            <Linkedin />
          </span>
        </Link>
      </li>

      {/* Twitter */}
      <li className="inline-block align-middle">
        <Link
          href="https://x.com/abu_al_qassam"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block h-10 w-10 overflow-hidden border border-gray-500 border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <Twitter />
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-teal-500 text-grey transition-all duration-500 group-hover:translate-y-0">
            <Twitter />
          </span>
        </Link>
      </li>

      {/* Website */}
      <li className="inline-block align-middle">
        <Link
          href="https://shakib101.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block h-10 w-10 overflow-hidden border border-gray-500 border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
        >
          <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center  rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
            <Globe />
          </span>
          <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-teal-500 text-grey transition-all duration-500 group-hover:translate-y-0">
            <Globe />
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
