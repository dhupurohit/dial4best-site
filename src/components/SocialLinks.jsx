import site from "../data/site.json";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const theme = useTheme();
  const socials = site.socials;

  const links = [
    { key: "github", label: "GitHub" },
    { key: "linkedin", label: "LinkedIn" },
    { key: "instagram", label: "Instagram" },
    { key: "youtube", label: "YouTube" },
    { key: "twitter", label: "X" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {links.map(({ key, label }) =>
        socials[key] ? (
          <motion.a
            key={key}
            href={socials[key]}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className={`px-5 py-2 rounded-full border ${theme.colors.borderSoft} ${theme.colors.bodySecondary} ${theme.colors.buttonSecondaryHover} transition`}
          >
            {label}
          </motion.a>
        ) : null
      )}
    </div>
  );
}
