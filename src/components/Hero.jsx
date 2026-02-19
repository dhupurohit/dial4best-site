import { useTheme } from "../context/ThemeContext";
import site from "../data/site.json";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

export default function Hero() {
  const theme = useTheme();

  return (
    <section
      className={`${theme.colors.pageBg} relative min-h-screen flex items-center justify-center px-6 overflow-hidden`}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${theme.colors.heroGradientFrom} ${theme.colors.heroGradientVia} ${theme.colors.heroGradientTo}`}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Soft Glow Blob */}
      <motion.div
        className={`absolute w-72 h-72 rounded-full ${theme.colors.accentGlow} blur-3xl`}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <FadeIn>
        <div className="relative max-w-2xl text-center">
          <h1
            className={`text-4xl sm:text-5xl font-serif font-bold ${theme.colors.headingPrimary}`}
          >
            Hi, I’m {site.name.split(" ")[0]}.
          </h1>

          <h2
            className={`mt-4 text-2xl font-medium ${theme.colors.headingSecondary}`}
          >
            {site.tagline}
          </h2>

          <p
            className={`mt-6 text-lg leading-relaxed ${theme.colors.bodySecondary}`}
          >
            {site.heroSubtext}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.links.heartdrop}
              target="_blank"
              rel="noreferrer"
              className={`px-6 py-3 rounded-xl ${theme.colors.buttonPrimaryBg} ${theme.colors.buttonPrimaryHover} ${theme.colors.buttonPrimaryText} transition`}
            >
              Create a HeartDrop
            </a>

            <a
              href="#projects"
              className={`px-6 py-3 rounded-xl border ${theme.colors.buttonSecondaryBorder} ${theme.colors.buttonSecondaryText} ${theme.colors.buttonSecondaryHover} transition`}
            >
              Explore My Work
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
