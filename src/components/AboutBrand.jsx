import FadeIn from "./FadeIn";
import site from "../data/site.json";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function AboutBrand() {
  const theme = useTheme();

  return (
    <section className={`${theme.colors.sectionBg} py-24 px-6`}>
      <FadeIn>
        <div className={`max-w-3xl mx-auto text-center p-10 rounded-2xl ${theme.colors.cardBg} ${theme.colors.shadowSoft}`}>

          {/* Heading */}
          <h2
            className={`text-3xl sm:text-4xl font-serif ${theme.colors.headingPrimary}`}
          >
            The builder behind the brand.
          </h2>

          {/* Subtle Divider Accent */}
          <motion.div
            className={`mx-auto mt-4 h-1 w-20 rounded-full ${theme.colors.accentGlow}`}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          {/* Body Text */}
          <p
            className={`mt-8 text-lg leading-relaxed ${theme.colors.bodySecondary}`}
          >
            I’m the founder of <b>Purohit Infotech</b>, where I build structured web
            tools and practical systems. I prefer clarity over complexity and
            meaningful products over noise.
          </p>

          {/* Button */}
          <motion.a
            href={site.links.purohit}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-10 inline-block px-8 py-3 rounded-xl border ${theme.colors.buttonSecondaryBorder} ${theme.colors.buttonSecondaryText} ${theme.colors.buttonSecondaryHover} transition`}
          >
            Visit Purohit Infotech
          </motion.a>

        </div>
      </FadeIn>
    </section>
  );
}
