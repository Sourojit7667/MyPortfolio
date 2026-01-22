import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Task Management System",
    description:
      "A comprehensive task management application with features like task creation, assignment, deadlines, and progress tracking for teams and individuals.",
    tech: ["React", "Vite", "Go", "Supabase", "Vercel", "Render"],
    link: "https://taskf-alpha.vercel.app/",
    githubFrontend: "https://github.com/Sourojit7667/taskf",
    githubBackend: "https://github.com/Sourojit7667/taskb",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
  },
  {
    title: "Page Translator",
    description:
      "A browser extension that instantly translates web pages into multiple languages with support for text selection and full-page translation.",
    tech: ["React", "Vite", "Go", "Supabase", "Vercel", "Render"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  const projectRefs = useRef([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown !== null && !event.target.closest(".relative")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdown]);

  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-[#1e293b] to-[#0f172a] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-grid opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase animate-fadeInDown">
            Portfolio
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-fadeInUp animation-delay-200">
            Recent <span className="gradient-text animate-gradient">Work</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto animate-fadeInUp animation-delay-400">
            Check out some of my latest projects showcasing modern web
            technologies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="scroll-reveal group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

              <div className="relative bg-[#1e293b] overflow-hidden shadow-2xl rounded-2xl border border-gray-700 hover-lift transition-all duration-500">
                {/* Project Image */}
                <div className="h-56 w-full overflow-hidden relative group">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full w-full bg-linear-to-br from-blue-600/20 to-emerald-600/20 flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-gray-600 group-hover:text-blue-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                    </div>
                  )}
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#1e293b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  <h3 className="text-xl leading-6 font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-linear-to-r from-blue-600/20 to-emerald-600/20 border border-blue-500/30 text-blue-300 text-xs rounded-full font-medium hover:scale-105 transition-transform"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium rounded-lg transition-all duration-300 hover-glow"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                    {/* Code Dropdown Button */}
                    <div className="relative">
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className="group/btn flex items-center justify-center gap-2 px-4 py-2.5 glass hover:glass-strong border border-gray-600 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="hidden sm:inline">Code</span>
                        <svg
                          className={`w-3 h-3 transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === index && (
                        <div className="absolute bottom-full mb-2 right-0 w-40 glass-strong border border-gray-600 rounded-lg overflow-hidden shadow-xl z-10">
                          <a
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-blue-600/20 transition-colors"
                          >
                            Frontend
                          </a>
                          <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-blue-600/20 transition-colors border-t border-gray-700"
                          >
                            Backend
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
