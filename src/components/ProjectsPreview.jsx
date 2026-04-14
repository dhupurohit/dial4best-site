import projects from "../data/projects.json";
import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectsPreview() {
  const theme = useTheme();

  return (
    <section id="projects" className={`${theme.colors.sectionAltBg} py-20 px-6`}>
      <FadeIn>
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <h2
            className={`text-3xl sm:text-4xl font-serif text-center ${theme.colors.headingPrimary}`}
          >
            Small experiments.
          </h2>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className={`block p-6 rounded-2xl ${theme.colors.cardBg} ${theme.colors.shadowSoft} ${theme.colors.cardHoverShadow} transition`}
                >
                  <h3
                    className={`text-lg font-semibold ${theme.colors.headingSecondary}`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${theme.colors.bodySecondary}`}
                  >
                    {project.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-14 text-center">
            <Link
              to="/projects"
              className={`inline-block px-8 py-3 rounded-xl border ${theme.colors.buttonSecondaryBorder} ${theme.colors.buttonSecondaryText} ${theme.colors.buttonSecondaryHover} transition`}
            >
              View All Projects
            </Link>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}
