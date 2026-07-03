import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Skills from "@/components/home/Skills";
import TechSlider from "@/components/home/TechSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechSlider />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
