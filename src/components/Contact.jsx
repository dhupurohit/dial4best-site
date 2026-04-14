import FadeIn from "./FadeIn";
import site from "../data/site.json";
import SocialLinks from "./SocialLinks";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Contact() {
  const theme = useTheme();

  return (
    <section
      id="contact"
      className={`${theme.colors.sectionAltBg} py-20 px-6 relative overflow-hidden`}
    >
      {/* Soft background glow */}
      <motion.div
        className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-80 h-80 rounded-full ${theme.colors.accentGlow} blur-3xl`}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <FadeIn>
        <div className="relative max-w-2xl mx-auto text-center">

          {/* Heading */}
          <h2
            className={`text-3xl sm:text-4xl font-serif ${theme.colors.headingPrimary}`}
          >
            You don’t have to figure it out alone.
          </h2>

          {/* Text */}
          <p className={`mt-6 text-lg ${theme.colors.bodySecondary}`}>
            If something feels confusing, you can reach out.
            <br />
            I’ll try to guide you.
          </p>

          {/* Email Button */}
          <motion.a
            href={`mailto:${site.socials.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-8 inline-block px-8 py-3 rounded-xl ${theme.colors.buttonPrimaryBg} ${theme.colors.buttonPrimaryHover} ${theme.colors.buttonPrimaryText} transition`}
          >
            {site.socials.email}
          </motion.a>

          {/* Social Links */}
          <SocialLinks />

        </div>
      </FadeIn>
    </section>
  );
}