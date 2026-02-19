import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";
import { useTheme } from "../context/ThemeContext";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const theme = useTheme();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className={`${theme.colors.pageBg} min-h-screen flex items-center justify-center`}>
        <p className={theme.colors.bodySecondary}>Project not found.</p>
      </main>
    );
  }

  return (
    <main className={`${theme.colors.pageBg} min-h-screen py-28 px-6`}>
      <FadeIn>
        <div className="max-w-3xl mx-auto">

          {/* Back Button */}
          <Link
            to="/projects"
            className={`inline-block mb-10 text-sm ${theme.colors.bodyMuted} hover:underline`}
          >
            ← Back to Projects
          </Link>

          {/* Title */}
          <h1
            className={`text-4xl sm:text-5xl font-serif ${theme.colors.headingPrimary}`}
          >
            {project.title}
          </h1>

          {/* Animated Divider */}
          <motion.div
            className={`mt-4 h-1 w-20 rounded-full ${theme.colors.accentGlow}`}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          {/* Content */}
          <p
            className={`mt-8 text-lg leading-relaxed ${theme.colors.bodySecondary}`}
          >
            {project.content}
          </p>

        </div>
      </FadeIn>
    </main>
  );
}
