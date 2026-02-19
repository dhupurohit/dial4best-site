import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Philosophy() {
  const theme = useTheme();

  return (
    <section className={`${theme.colors.sectionBg} py-28 px-6 relative overflow-hidden`}>
      
      {/* Subtle floating background glow */}
      <motion.div
        className={`absolute bottom-0 right-0 w-72 h-72 rounded-full ${theme.colors.accentGlow} blur-3xl`}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <FadeIn>
        <div className="relative max-w-2xl mx-auto text-center">

          <h2
            className={`text-3xl sm:text-4xl font-serif ${theme.colors.headingPrimary}`}
          >
            I build slowly and intentionally.
          </h2>

          <motion.p
            className={`mt-8 text-lg leading-relaxed ${theme.colors.bodySecondary}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Some products solve practical problems.
            <br />
            Some create emotional moments.
            <br />
            <b>Both</b> matter.
          </motion.p>

        </div>
      </FadeIn>
    </section>
  );
}
