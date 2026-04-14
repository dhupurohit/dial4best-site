import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";

export default function Philosophy() {
  const theme = useTheme();

  return (
    <section className={`${theme.colors.sectionAltBg} py-20 px-6`}>
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">

          <h2 className={`text-3xl font-serif ${theme.colors.headingPrimary}`}>
            Learning takes time.
          </h2>

          <p className={`mt-6 text-lg ${theme.colors.bodySecondary}`}>
            Understanding matters more than speed.
            <br />
            You are allowed to go slow.
          </p>

        </div>
      </FadeIn>
    </section>
  );
}