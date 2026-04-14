import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";

export default function HowITeach() {
  const theme = useTheme();

  const points = [
    "I go slow so you can follow",
    "I explain every step clearly",
    "I repeat when needed",
    "I connect theory with real coding",
  ];

  return (
    <section className={`${theme.colors.sectionAltBg} py-20 px-6`}>
      <FadeIn>
        <div
          className={`max-w-5xl mx-auto p-10 rounded-3xl ${theme.colors.cardBg} ${theme.colors.shadowSoft}`}
        >
          {/* Heading */}
          <div className="text-center">
            <h2
              className={`text-3xl sm:text-4xl font-serif ${theme.colors.headingPrimary}`}
            >
              How I teach
            </h2>

            <p className={`mt-4 text-base ${theme.colors.bodySecondary}`}>
              A simple way to help you understand without feeling lost.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {points.map((point, index) => (
              <div
                key={index}
                className={`
                  p-5 rounded-2xl text-center
                  ${theme.colors.cardBg}
                  ${theme.colors.shadowSoft}
                `}
              >
                {/* Step Number */}
                <div
                  className={`text-xs mb-2 ${theme.colors.bodyMuted}`}
                >
                  {index + 1}
                </div>

                {/* Text */}
                <p
                  className={`text-sm leading-relaxed ${theme.colors.bodySecondary}`}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}