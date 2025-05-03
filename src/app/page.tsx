import AboutSection from "@/components/About";
import Contact from "@/components/Contact/Contact";
import HeroSection from "@/components/Home";
import ScrollToTop from "@/components/pages/ScrollTop";
import MyWork from "@/components/Projects";
import Resume from "@/components/Resume";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-[#081029] text-white ">
      <div className=" w-[90%] mx-auto">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Resume />
        <Skills />
        <MyWork />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
