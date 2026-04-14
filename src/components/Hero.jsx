import { useTheme } from "../context/ThemeContext";
import FadeIn from "./FadeIn";

export default function Hero() {
  const theme = useTheme();

  return (
    <section
      className={`${theme.colors.pageBg} min-h-screen flex items-center justify-center px-6`}
    >
      <FadeIn>
        <div className="max-w-2xl text-center">

          <h1 className={`text-4xl sm:text-5xl font-serif ${theme.colors.headingPrimary}`}>
            Hi, I’m Dhruvita (Dhruvaa).
          </h1>

          <h2 className={`mt-4 text-2xl ${theme.colors.headingSecondary}`}>
            I teach coding slowly and clearly — step by step.
          </h2>

          <p className={`mt-6 text-lg leading-relaxed ${theme.colors.bodySecondary}`}>
            So you can actually understand what you're learning,
            not just follow along and feel lost.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#learn"
              className={`px-6 py-3 rounded-xl ${theme.colors.buttonPrimaryBg} ${theme.colors.buttonPrimaryHover} ${theme.colors.buttonPrimaryText}`}
            >
              Start learning
            </a>

            <a
              href="#learn"
              className={`px-6 py-3 rounded-xl border ${theme.colors.buttonSecondaryBorder} ${theme.colors.buttonSecondaryText} ${theme.colors.buttonSecondaryHover}`}
            >
              Watch a video
            </a>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}