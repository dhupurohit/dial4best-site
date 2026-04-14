import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Footer() {
  const theme = useTheme();

  return (
    <footer
      className={`${theme.colors.sectionBg} border-t ${theme.colors.navBorder} py-16 px-6`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left */}
        <div>
          <h3 className={`font-semibold ${theme.colors.headingSecondary}`}>
            Built with intention.
          </h3>

          <p className={`mt-2 text-sm ${theme.colors.bodyMuted}`}>
            A calm space to learn coding — slowly and clearly.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-2 text-sm">

          <a href="#learn" className={`${theme.colors.bodySecondary} hover:opacity-70 transition`}>
            Learn
          </a>

          <a href="#about" className={`${theme.colors.bodySecondary} hover:opacity-70 transition`}>
            About
          </a>

          <a href="#contact" className={`${theme.colors.bodySecondary} hover:opacity-70 transition`}>
            Contact
          </a>

          <motion.a
            href="https://purohitinfotech.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 2 }}
            className={`${theme.colors.bodySecondary} hover:opacity-70 transition`}
          >
            Purohit Infotech
          </motion.a>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Dhruvita Purohit. All rights reserved.
      </div>
    </footer>
  );
}