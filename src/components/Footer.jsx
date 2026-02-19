import { useTheme } from "../context/ThemeContext";
import site from "../data/site.json";

export default function Footer() {
  const theme = useTheme();

  return (
    <footer
      className={`${theme.colors.footerBg} border-t ${theme.colors.footerBorder} py-16 px-6`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column — Brand Closure */}
        <div>
          <h3
            className={`text-2xl font-serif ${theme.colors.footerTextPrimary}`}
          >
            Built with intention.
          </h3>

          <p className={`mt-4 ${theme.colors.footerTextSecondary}`}>
            Creating thoughtful tools and meaningful digital experiences.
          </p>

          {/* <p className={`mt-8 text-sm ${theme.colors.footerTextMuted}`}>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p> */}
        </div>

        {/* Right Column — Links */}
        <div className="md:text-right space-y-4">
          <a
            href={site.links.heartdrop}
            target="_blank"
            rel="noreferrer"
            className={`block ${theme.colors.footerTextSecondary} hover:underline`}
          >
            HeartDrop
          </a>

          <a
            href={site.links.purohit}
            target="_blank"
            rel="noreferrer"
            className={`block ${theme.colors.footerTextSecondary} hover:underline`}
          >
            Purohit Infotech
          </a>

          <a
            href="/projects"
            className={`block ${theme.colors.footerTextSecondary} hover:underline`}
          >
            Projects
          </a>

          <a
            href={`mailto:${site.socials.email}`}
            className={`block ${theme.colors.footerTextSecondary} hover:underline`}
          >
            Contact
          </a>
        </div>

        <div className="md:col-span-2 text-center">
          <p className={`mt-2 text-sm ${theme.colors.footerTextMuted}`}>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
