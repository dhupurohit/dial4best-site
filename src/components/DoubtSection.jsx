import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";

export default function DoubtSection() {
  const theme = useTheme();

  return (
    <section className={`${theme.colors.sectionBg} py-20 px-6`}>
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">

          <h2 className={`text-3xl font-serif ${theme.colors.headingPrimary}`}>
            Have a doubt?
          </h2>

          <p className={`mt-6 text-lg ${theme.colors.bodySecondary}`}>
            You don’t have to figure everything out alone.

            <br /><br />

            If something feels confusing, you can always reach out —
            I’ll try to guide you.
          </p>

          <p className={`mt-4 ${theme.colors.bodyMuted}`}>
            (DoubtLab coming soon)
          </p>

        </div>
      </FadeIn>
    </section>
  );
}