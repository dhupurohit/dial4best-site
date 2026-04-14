import Hero from "../components/Hero";
import LearnWithMe from "../components/LearnWithMe";
import HowITeach from "../components/HowITeach";
import AboutBrand from "../components/AboutBrand";
import Philosophy from "../components/Philosophy";
import DoubtSection from "../components/DoubtSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <LearnWithMe />
      <HowITeach />
      <AboutBrand />
      <Philosophy />
      <DoubtSection />
      <Contact />
      <Footer />
    </main>
  );
}