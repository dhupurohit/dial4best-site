import FadeIn from "./FadeIn";
import site from "../data/site.json";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function FeaturedHeartDrop() {
  const theme = useTheme();

  return (
    <section className={`${theme.colors.sectionAltBg} py-24 px-6 relative overflow-hidden`}>
      
      {/* Subtle animated background glow */}
      <motion.div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full ${theme.colors.accentGlow} blur-3xl`}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <FadeIn>
        <div className="relative max-w-3xl mx-auto text-center">

          <h2
            className={`text-3xl sm:text-4xl font-serif ${theme.colors.headingPrimary}`}
          >
            HeartDrop — digital moments, made beautifully.
          </h2>

          <p
            className={`mt-6 text-lg leading-relaxed ${theme.colors.bodySecondary}`}
          >
            Instead of sending a long message, you can create a private page
            with memories, letters, timelines, and more.
          </p>

          {/* Animated CTA Button */}
          <motion.a
            href={site.links.heartdrop}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-10 inline-block px-8 py-3 rounded-xl ${theme.colors.buttonPrimaryBg} ${theme.colors.buttonPrimaryHover} ${theme.colors.buttonPrimaryText} transition ${theme.colors.shadowSoft}`}
          >
            Create Your First HeartDrop
          </motion.a>

        </div>
      </FadeIn>
    </section>
  );
}
