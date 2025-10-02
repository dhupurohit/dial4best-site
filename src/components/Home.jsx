// src/components/Home.jsx
import React from "react";

/**
 * Full-width minimal single-page portfolio (light yellow / cream)
 * - Content stretches full width of the viewport.
 * - Replace the placeholder text/links with your real content.
 */

export default function Home() {
  const projects = [
    {
      title: "Portfolio Site",
      desc: "Minimal React + Tailwind site",
      link: "dial4best.com",
    },
    {
      title: "Purohit Infotech",
      desc: "Website for Purohit Infotech",
      link: "purohitinfotech.com",
    },
    // {
    //   title: "Tiny Resume Builder",
    //   desc: "Generate a clean resume from JSON",
    //   link: "#",
    // },
  ];

  return (
    <main className="min-h-screen w-full bg-yellow-50 text-gray-800 antialiased">
      {/* Header — full width */}
      <header className="w-full border-b border-yellow-200 bg-gradient-to-b from-yellow-50/80 to-white/60">
        <div className="w-full px-6 py-6 flex items-center justify-between">
          <div>
            <a
              href="#"
              className="text-xl font-extrabold tracking-tight text-amber-700"
            >
              Dhruvita Purohit
            </a>
            <div className="text-sm text-amber-600">Full Stack Developer</div>
          </div>

          <nav className="flex gap-4 items-center">
            <a
              href="#projects"
              className="text-sm font-medium text-amber-700 hover:underline"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-amber-700 hover:underline"
            >
              About
            </a>
            <a
              href="mailto:dial4best@gmail.com"
              className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — full width */}
      <section className="w-full px-6 py-16 text-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-extrabold leading-tight text-amber-800 sm:text-5xl">
            Hi, I’m Dhruvita — I build simple web experiences.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-700/90">
            I make small, useful developer tools and clean frontends using React
            and Node.js. I like simple UX, clear code, and automations that save
            time.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-md border border-amber-700 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-100"
            >
              View projects
            </a>
            <a
              href="https://github.com/dhupurohit"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects — full width cards but internal content constrained a bit */}
      <section id="projects" className="w-full px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-amber-800">
            Selected projects
          </h2>
          <p className="mt-2 text-amber-700/90">
            Small projects I made to solve practical problems.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-lg border border-yellow-200 bg-white/70 p-4 shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-amber-800">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-amber-700/90">{p.desc}</p>
                <div className="mt-3">
                  <a
                    href={p.link}
                    className="text-sm font-medium text-amber-700 hover:underline"
                    aria-label={`Open ${p.title}`}
                  >
                    View →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About / Contact — full width */}
      <section id="about" className="w-full px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-lg border border-yellow-200 bg-white/70 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-amber-800">About</h2>
          <p className="mt-2 text-amber-700/90">
            I build front-end focused projects using React, Tailwind CSS and
            lightweight Node.js backends. I prefer small, maintainable codebases
            and building things that are easy to use.
          </p>
        </div>
      </section>

      <section id="contact" className="w-full px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-lg border border-yellow-200 bg-white/70 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-amber-800">Contact</h2>

              <p className="mt-1 text-sm text-amber-700/90">
                Email:{" "}
                <a
                  href="mailto:dial4best@gmail.com"
                  className="font-medium text-amber-700 hover:underline"
                >
                  dial4best@gmail.com
                </a>
              </p>
              <p className="mt-1 text-sm text-amber-700/90">
                GitHub:{" "}
                <a
                  href="https://github.com/dhupurohit"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-amber-700 hover:underline"
                >
                  @dhupurohit
                </a>
              </p>
            </div>

            {/* <div>
              <h4 className="text-sm font-semibold text-amber-800">
                Quick links
              </h4>
              <ul className="mt-1 space-y-1 text-sm text-amber-700/90">
                <li>
                  <a href="#" className="hover:underline">
                    Resume (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog (coming soon)
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer — full width */}
      <footer className="w-full border-t border-yellow-200 bg-yellow-50">
        <div className="w-full px-6 py-6 text-sm text-amber-700/90">
          © {new Date().getFullYear()} Dhruvita P. — Built with React &
          Tailwind.
        </div>
      </footer>
    </main>
  );
}
