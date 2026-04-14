import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function LearnWithMe() {
  const theme = useTheme();

  const videos = [
    {
      title: "Let’s understand JavaScript slowly",
      desc: "A simple explanation to help you actually understand it.",
    },
    {
      title: "Understanding React step by step",
      desc: "Breaking down concepts so they feel clear.",
    },
    {
      title: "Functions explained simply",
      desc: "Making logic easy to follow.",
    },
  ];

  return (
    <section id="learn" className={`${theme.colors.sectionBg} py-20 px-6`}>
      <FadeIn>
        <div
          className={`max-w-5xl mx-auto p-10 rounded-3xl ${theme.colors.cardBg} ${theme.colors.shadowSoft}`}
        >
          {/* Heading */}
          <div className="text-center">
            <h2
              className={`text-3xl sm:text-4xl font-serif ${theme.colors.headingPrimary}`}
            >
              Learn with me
            </h2>

            <p className={`mt-4 text-base ${theme.colors.bodySecondary}`}>
              We’ll understand one concept at a time — slowly, clearly, and without rushing.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`
                  p-5 rounded-2xl 
                  ${theme.colors.cardBg} 
                  ${theme.colors.shadowSoft}
                  ${theme.colors.cardHoverShadow}
                  transition
                `}
              >
                {/* Thumbnail */}
                <div
                  className="h-36 rounded-xl mb-4 
                  bg-gradient-to-br from-purple-200/40 to-purple-300/30"
                />

                {/* Title */}
                <h3
                  className={`text-sm font-medium ${theme.colors.headingSecondary}`}
                >
                  {video.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-2 text-xs leading-relaxed ${theme.colors.bodyMuted}`}
                >
                  {video.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}