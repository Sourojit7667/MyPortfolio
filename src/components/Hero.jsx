import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 lg:py-36 particle-bg dot-grid">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden pointer-events-none z-0 opacity-30">
        <div className="absolute top-[10%] left-[10%] w-120 h-120 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-[10%] right-[10%] w-120 h-120 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[40%] w-120 h-120 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block mb-3 animate-fadeInDown">Hi, I'm </span>
            <span className="block gradient-text animate-gradient animate-fadeInUp animation-delay-200">
              Sourojit Das
            </span>
          </h1>

          <p className="mt-6 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-8 md:text-2xl md:max-w-3xl animate-fadeInUp animation-delay-400">
            I build{" "}
            <span className="text-blue-400 font-semibold">beautiful</span>,{" "}
            <span className="text-emerald-400 font-semibold">responsive</span>,
            and{" "}
            <span className="text-purple-400 font-semibold">performant</span>{" "}
            web applications.
          </p>

          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-400 sm:text-lg md:max-w-3xl animate-fadeInUp animation-delay-600">
            Passionate about UI/UX and modern web technologies.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center animate-fadeInUp animation-delay-800">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="#projects"
              className="group flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover-lift hover-glow"
            >
              <span>View Work</span>
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-base font-medium rounded-xl shadow-lg text-blue-100 glass hover:glass-strong transition-all duration-300 hover-lift"
            >
              <span>Contact Me</span>
              <svg
                className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 animate-bounce">
          <a
            href="#about"
            className="inline-block text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <span className="block text-sm mt-2">Scroll Down</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
