import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";
import site from "../data/site.json";

export default function AboutBrand() {
  const theme = useTheme();

  return (
    <section className={`${theme.colors.sectionBg} py-20 px-6`}>
      <FadeIn>
        <div
          className={`max-w-3xl mx-auto text-center p-10 rounded-2xl ${theme.colors.cardBg} ${theme.colors.shadowSoft}`}
        >
          <h2
            className={`text-3xl sm:text-4xl font-serif ${theme.colors.headingPrimary}`}
          >
            Why I teach this way
          </h2>

          <p
            className={`mt-8 text-lg leading-relaxed ${theme.colors.bodySecondary}`}
          >
            I didn’t struggle with coding because it was difficult.
            <br />
            <br />
            I struggled because I didn’t understand why things were done a
            certain way. The theory felt disconnected. The code worked — but I
            didn’t truly understand it.
            <br />
            <br />
            That’s why I teach differently. I slow things down. I connect theory
            with actual coding. And I explain things in a way your mind can
            follow.
            <br />
            <br />
            So you don’t feel lost or left behind.
            <br />
            <br />
            Alongside teaching, I also build simple and thoughtful tools under
            Purohit Infotech — based on the same idea of clarity and usefulness.
          </p>

          <a
            href={site.links.purohit}
            target="_blank"
            rel="noreferrer"
            className={`mt-10 inline-block px-6 py-3 rounded-xl border ${theme.colors.buttonSecondaryBorder} ${theme.colors.buttonSecondaryText} ${theme.colors.buttonSecondaryHover}`}
          >
            Explore what I build
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
