import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer className="p-16 text-gray-100 bg-[#081029]  ">
      <nav className=" flex justify-center items-center mt-8">
        <SocialLinks />
      </nav>

      <aside className="mt-8 text-center">
        <p className="text-gray-400">
          Copyright &copy; {currentYear.getFullYear()} - All right reserved by
          Mohammad Shakib
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
