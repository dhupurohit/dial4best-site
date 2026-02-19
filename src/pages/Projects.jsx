import projects from "../data/projects.json";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

export default function Projects() {
  const theme = useTheme();

  return (
    <main className={`${theme.colors.pageBg} min-h-screen py-28 px-6`}>
      <FadeIn>
        <div className="max-w-4xl mx-auto">

          {/* Page Heading */}
          <h1
            className={`text-4xl sm:text-5xl font-serif text-center ${theme.colors.headingPrimary}`}
          >
            All Projects
          </h1>

          <p
            className={`mt-6 text-center text-lg ${theme.colors.bodySecondary}`}
          >
            Small experiments and tools I’ve built along the way.
          </p>

          {/* Project Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className={`block p-8 rounded-2xl ${theme.colors.cardBg} ${theme.colors.shadowSoft} ${theme.colors.cardHoverShadow} transition`}
                >
                  <h3
                    className={`text-xl font-semibold ${theme.colors.headingSecondary}`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${theme.colors.bodySecondary}`}
                  >
                    {project.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </FadeIn>
    </main>
  );
}
