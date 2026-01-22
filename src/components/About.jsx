import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "JavaScript", level: 85 },
  { name: "PostGreSQL", level: 80 },
  { name: "Golang", level: 88 },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 dot-grid opacity-20"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase animate-fadeInDown">
            About Me
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-fadeInUp animation-delay-200">
            Passionate about building{" "}
            <span className="gradient-text animate-gradient">
              better software
            </span>
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div
              className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/profile.jpg"
                  alt="Developer Profile"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
              </div>
              {/* Floating Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-emerald-600 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse animation-delay-1000"></div>
            </div>

            {/* Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  My full stack development journey started in{" "}
                  <span className="text-blue-400 font-semibold">2023</span> with
                  the{" "}
                  <span className="text-purple-400 font-semibold">
                    fundamentals
                  </span>{" "}
                  of web development, beginning with{" "}
                  <span className="text-orange-400 font-semibold">HTML</span>,{" "}
                  <span className="text-blue-400 font-semibold">CSS</span>, and{" "}
                  <span className="text-yellow-400 font-semibold">
                    JavaScript
                  </span>
                  . Over time, I moved into modern frontend development with{" "}
                  <span className="text-cyan-400 font-semibold">React</span> and
                  gradually strengthened my backend skills using{" "}
                  <span className="text-blue-400 font-semibold">Go</span> and
                  databases, focusing on building{" "}
                  <span className="text-emerald-400 font-semibold">
                    practical and scalable
                  </span>{" "}
                  applications.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in the{" "}
                  <span className="text-emerald-400 font-semibold">
                    MERN stack
                  </span>{" "}
                  (MongoDB, Express, React, Node.js) but I'm always learning new
                  technologies to stay ahead of the curve.
                </p>
              </div>

              {/* Skills Section */}
              <div className="glass-strong rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  Technical Skills
                </h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            animationDelay: `${index * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Tech Stack Tags */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Also Experienced With
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Vite", "Next.js", "HTML", "Java", "Python", "Git"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 glass hover:glass-strong border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium hover-scale cursor-pointer"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
