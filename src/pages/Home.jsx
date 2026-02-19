import Hero from "../components/Hero";
import FeaturedHeartDrop from "../components/FeaturedHeartDrop";
import AboutBrand from "../components/AboutBrand";
import ProjectsPreview from "../components/ProjectsPreview";
import Philosophy from "../components/Philosophy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="font-sans bg-purple-50">
      <Hero />
      <FeaturedHeartDrop />
      <AboutBrand />
      <ProjectsPreview />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
