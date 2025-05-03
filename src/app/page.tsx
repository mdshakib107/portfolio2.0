import AboutSection from "@/components/About";
import HeroSection from "@/components/Home";
import ScrollToTop from "@/components/pages/ScrollTop";
import MyWork from "@/components/Projects";
import Resume from "@/components/Resume";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Resume />
      <Skills />
      <MyWork />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
