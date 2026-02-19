import { useTheme } from "../context/ThemeContext";
import site from "../data/site.json";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    setOpen(false);

    const performScroll = () => {
      const el = document.getElementById("contact");
      if (el) {
        const yOffset = -80; // navbar height offset
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(performScroll, 200);
    } else {
      // Delay scroll slightly so menu collapse finishes
      setTimeout(performScroll, 200);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-md ${theme.colors.navBg} border-b ${theme.colors.navBorder} z-50`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className={`font-semibold ${theme.colors.navText}`}>
          Dial4Best
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            to="/projects"
            className={`px-3 py-2 rounded-lg transition ${theme.colors.navText} ${theme.colors.navHoverBg}`}
          >
            Projects
          </Link>

          <button
            onClick={scrollToContact}
            className={`px-3 py-2 rounded-lg transition ${theme.colors.navText} ${theme.colors.navHoverBg}`}
          >
            Contact
          </button>

          {/* External Buttons */}
          <motion.a
            href={site.links.heartdrop}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-lg ${theme.colors.navButtonBg} ${theme.colors.navButtonHover} ${theme.colors.navButtonText} transition`}
          >
            HeartDrop
          </motion.a>

          <motion.a
            href={site.links.purohit}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-lg border ${theme.colors.navText} ${theme.colors.navHoverBg} transition`}
          >
            Purohit
          </motion.a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-6 h-0.5 ${theme.colors.navIcon} block`}
          />

          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`w-6 h-0.5 ${theme.colors.navIcon} block my-1`}
          />

          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-6 h-0.5 ${theme.colors.navIcon} block`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 pb-6"
          >
            <div
              className={`flex flex-col gap-4 md:hidden px-6 pb-6 ${theme.colors.navBg} border-t ${theme.colors.navBorder}`}
            >
              <Link
                to="/projects"
                onClick={() => setOpen(false)}
                className={`${theme.colors.navText}`}
              >
                Projects
              </Link>

              <button
                onClick={scrollToContact}
                className={`${theme.colors.navText} text-left`}
              >
                Contact
              </button>

              <a
                href={site.links.heartdrop}
                target="_blank"
                rel="noreferrer"
                className={`${theme.colors.navText}`}
              >
                HeartDrop
              </a>

              <a
                href={site.links.purohit}
                target="_blank"
                rel="noreferrer"
                className={`${theme.colors.navText}`}
              >
                Purohit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
