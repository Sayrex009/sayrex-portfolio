"use client";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaLinux,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiUbuntu,
  SiArchlinux,
  SiHyprland,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

// Расширенная информация о технологиях
const techDetails = {
  React: {
    name: "React",
    desc: "A powerful JavaScript library for building fast and interactive user interfaces with component-based architecture.",
    icon: <FaReact className="text-blue-400" />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    year: "2013",
    creator: "Jordan Walke (Facebook)",
    useCases: "SPAs, mobile apps (React Native), interactive UIs",
    iconInfo:
      "The React icon features a blue atom symbol, representing the component-based architecture where each component is like an atom building up the application.",
  },
  Nextjs: {
    name: "Next.js",
    desc: "A React framework that enables server-side rendering, static site generation, and optimized performance for web apps.",
    icon: <SiNextdotjs className="text-white" />,
    color: "text-white",
    bgColor: "bg-white/10",
    year: "2016",
    creator: "Vercel",
    useCases: "SEO-friendly websites, e-commerce, blogs, hybrid apps",
    iconInfo:
      "The Next.js icon is a white N inside a black square, representing its modern and minimalist approach to React frameworks.",
  },
  TailwindCSS: {
    name: "Tailwind CSS",
    desc: "A utility-first CSS framework that simplifies styling with pre-configured classes and responsive design capabilities.",
    icon: <SiTailwindcss className="text-cyan-400" />,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    year: "2017",
    creator: "Adam Wathan",
    useCases: "Rapid UI development, prototyping, custom designs",
    iconInfo:
      "The Tailwind CSS icon features a stylized T with a gradient tail, symbolizing the utility-first approach and the 'wind' in its name.",
  },
  HTML5: {
    name: "HTML5",
    desc: "The latest evolution of HTML, introducing new semantic elements and enhanced multimedia support.",
    icon: <FaHtml5 className="text-orange-500" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    year: "2014",
    creator: "W3C & WHATWG",
    useCases: "Web structure, semantic markup, multimedia content",
    iconInfo:
      "The HTML5 icon is an orange shield with the number 5, representing the robustness and protection it offers for web content structure.",
  },
  CSS3: {
    name: "CSS3",
    desc: "A stylesheet language with modern features like flexbox, grid, animations, and transitions for better UI design.",
    icon: <FaCss3Alt className="text-blue-500" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    year: "1996 (CSS1), 2011 (CSS3)",
    creator: "Håkon Wium Lie",
    useCases: "Styling web pages, animations, responsive layouts",
    iconInfo:
      "The CSS3 icon is a blue shield with the number 3, symbolizing the styling and protection it provides for web content presentation.",
  },
  JavaScript: {
    name: "JavaScript",
    desc: "A versatile programming language that powers dynamic content, web applications, and server-side solutions via Node.js.",
    icon: <FaJsSquare className="text-yellow-400" />,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    year: "1995",
    creator: "Brendan Eich",
    useCases: "Web interactivity, full-stack development, mobile apps",
    iconInfo:
      "The JavaScript icon is a yellow square with JS initials, representing its ubiquity and square brackets syntax.",
  },
  Nodejs: {
    name: "Node.js",
    desc: "A runtime environment that allows JavaScript to be executed outside of the browser, mainly for backend development.",
    icon: <FaNodeJs className="text-green-500" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    year: "2009",
    creator: "Ryan Dahl",
    useCases: "Servers, APIs, real-time applications, microservices",
    iconInfo:
      "The Node.js icon features a green hexagon with JS inside, representing its JavaScript runtime and the interconnected nature of Node modules.",
  },
  Python: {
    name: "Python",
    desc: "A high-level programming language known for its simplicity, extensive libraries, and applications in data science, AI, and automation.",
    icon: <FaPython className="text-yellow-300" />,
    color: "text-yellow-300",
    bgColor: "bg-yellow-300/10",
    year: "1991",
    creator: "Guido van Rossum",
    useCases: "Data science, AI, scripting, web development",
    iconInfo:
      "The Python icon features two intertwined blue and yellow snakes, inspired by the Monty Python comedy group that gave the language its name.",
  },
  Cplusplus: {
    name: "C++",
    desc: "A powerful, object-oriented programming language widely used in system programming, game development, and performance-critical applications.",
    icon: <SiCplusplus className="text-blue-600" />,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    year: "1985",
    creator: "Bjarne Stroustrup",
    useCases: "Game engines, operating systems, high-performance apps",
    iconInfo:
      "The C++ icon is a blue stylized '++' symbol, representing the increment operator and the language's evolution from C.",
  },
  Linux: {
    name: "Linux",
    desc: "An open-source operating system known for its stability, security, and flexibility, widely used in servers and development environments.",
    icon: <FaLinux className="text-white" />,
    color: "text-white",
    bgColor: "bg-white/10",
    year: "1991",
    creator: "Linus Torvalds",
    useCases: "Servers, embedded systems, development environments",
    iconInfo:
      "The Linux icon is Tux the penguin, the official mascot, representing the friendly and community-driven nature of the OS.",
  },
  Ubuntu: {
    name: "Ubuntu",
    desc: "A user-friendly Linux distribution based on Debian, popular for personal use, development, and enterprise applications.",
    icon: <SiUbuntu className="text-orange-400" />,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    year: "2004",
    creator: "Canonical Ltd.",
    useCases: "Desktop OS, servers, cloud computing",
    iconInfo:
      "The Ubuntu icon features three people in a circle, representing the African philosophy of 'Ubuntu' meaning 'humanity to others'.",
  },
  ArchLinux: {
    name: "Arch Linux",
    desc: "A lightweight and customizable rolling-release Linux distribution that gives users full control over their system.",
    icon: <SiArchlinux className="text-blue-500" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    year: "2002",
    creator: "Judd Vinet",
    useCases: "Custom systems, learning Linux, lightweight setups",
    iconInfo:
      "The Arch Linux icon is a blue stylized 'A', representing the simplicity and elegance of the distribution.",
  },
  Hyprland: {
    name: "Hyprland",
    desc: "A modern Wayland compositor featuring dynamic tiling, smooth animations, and enhanced user customization.",
    icon: <SiHyprland className="text-purple-500" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    year: "2020",
    creator: "vaxerski",
    useCases: "Linux desktop environments, tiling window managers",
    iconInfo:
      "The Hyprland icon is a purple stylized 'H', representing its modern and hyper-customizable nature.",
  },
  TypeScript: {
    name: "TypeScript",
    desc: "A strongly typed superset of JavaScript that compiles to plain JavaScript, adding optional static typing to the language.",
    icon: <SiTypescript className="text-blue-600" />,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    year: "2012",
    creator: "Microsoft",
    useCases: "Large-scale applications, team projects, type-safe JS",
    iconInfo:
      "The TypeScript icon is a blue stylized 'TS', representing its JavaScript foundation with type safety.",
  },
  Docker: {
    name: "Docker",
    desc: "A platform for developing, shipping, and running applications in containers, enabling consistent environments across deployments.",
    icon: <SiDocker className="text-blue-400" />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    year: "2013",
    creator: "Docker, Inc.",
    useCases: "Containerization, microservices, CI/CD pipelines",
    iconInfo:
      "The Docker icon is a blue whale carrying containers, symbolizing the concept of containerization and shipping applications.",
  },
  GitHub: {
    name: "GitHub",
    desc: "A web-based platform for version control and collaboration that lets developers work together on projects.",
    icon: <FaGithub className="text-white" />,
    color: "text-white",
    bgColor: "bg-white/10",
    year: "2008",
    creator: "Chris Wanstrath, PJ Hyett, Tom Preston-Werner",
    useCases: "Version control, collaboration, open source projects",
    iconInfo:
      "The GitHub icon is a white octocat (a cat-octopus hybrid), representing the platform's playful yet powerful nature.",
  },
};

// Компонент для анимированных фоновых частиц
const ParticleBackground = () => {
  const particles = Array(30).fill(0);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * -20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, 100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// Компонент для пульсирующего градиентного кольца
const PulsingRing = () => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="rounded-full border-2 border-purple-500 w-1/2 h-1/2" />
    </motion.div>
  );
};

const Page = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  // Эффект для анимации заголовка
  const [titleScale, setTitleScale] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleScale((prev) => (prev === 1 ? 1.02 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0a001f] via-[#11002b] to-[#030014] text-white p-6 relative overflow-hidden">
      {/* Анимированный фон */}
      <ParticleBackground />
      <PulsingRing />

      <div className="absolute inset-0 bg-opacity-40 backdrop-blur-xl" />

      <motion.h2
        className="text-5xl font-bold mb-8 relative z-10"
        animate={{ scale: titleScale }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        Technology Overview
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 relative z-10 max-w-6xl">
        {Object.entries(techDetails).map(([key, tech]) => (
          <motion.button
            key={key}
            className={`group flex flex-col items-center space-y-3 p-6 rounded-xl shadow-xl relative overflow-hidden transition-all border-2 border-transparent ${tech.bgColor}`}
            onClick={() => setSelectedTech(tech)}
            onMouseEnter={() => setHoveredTech(tech)}
            onMouseLeave={() => setHoveredTech(null)}
            whileHover={{
              y: -10,
              scale: 1.05,
              borderColor: tech.color.replace("text-", "border-"),
              boxShadow: `0 10px 25px -5px ${tech.color.replace(
                "text-",
                ""
              )}40`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
          >
            <motion.div
              className="text-8xl"
              animate={
                hoveredTech === tech
                  ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1],
                    }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              {tech.icon}
            </motion.div>
            <motion.span
              className="text-lg font-semibold"
              animate={
                hoveredTech === tech
                  ? {
                      color: tech.color,
                      scale: 1.1,
                    }
                  : {}
              }
            >
              {tech.name}
            </motion.span>

            {/* Анимированный блеск при наведении */}
            <motion.div
              className="absolute inset-0 bg-white opacity-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={
                hoveredTech === tech
                  ? {
                      opacity: [0, 0.2, 0],
                      left: ["-100%", "100%"],
                    }
                  : {}
              }
              transition={{ duration: 1.5 }}
            />
          </motion.button>
        ))}
      </div>

      {/* Модальное окно с анимациями */}
      <AnimatePresence>
        {selectedTech && (
          <Dialog
            open={!!selectedTech}
            onClose={() => setSelectedTech(null)}
            as="div"
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            static
          >
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <Dialog.Panel
                className={`bg-[#0a001f] p-8 rounded-xl shadow-2xl max-w-2xl w-full border-2 ${selectedTech.color.replace(
                  "text-",
                  "border-"
                )} relative overflow-hidden`}
              >
                {/* Анимированный фон модального окна */}
                <motion.div
                  className={`absolute inset-0 opacity-10`}
                  style={{
                    background: `radial-gradient(circle at center, ${selectedTech.color.replace(
                      "text-",
                      ""
                    )} 0%, transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="text-5xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        {selectedTech.icon}
                      </motion.div>
                      <Dialog.Title
                        className={`text-3xl font-bold ${selectedTech.color}`}
                      >
                        {selectedTech.name}
                      </Dialog.Title>
                    </div>
                    <motion.button
                      className="p-2 rounded-full hover:bg-white/10"
                      onClick={() => setSelectedTech(null)}
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="mt-6 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-purple-300">
                        Description
                      </h3>
                      <Dialog.Description className="text-gray-300 text-lg">
                        {selectedTech.desc}
                      </Dialog.Description>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-purple-300">
                          Year Released
                        </h3>
                        <p className="text-gray-300">{selectedTech.year}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-300">
                          Creator
                        </h3>
                        <p className="text-gray-300">{selectedTech.creator}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-300">
                          Primary Use Cases
                        </h3>
                        <p className="text-gray-300">{selectedTech.useCases}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-300">
                          Icon Meaning
                        </h3>
                        <p className="text-gray-300">{selectedTech.iconInfo}</p>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className={`mt-8 px-6 py-3 rounded-lg font-semibold ${selectedTech.bgColor} ${selectedTech.color} hover:opacity-90 w-full`}
                    onClick={() => setSelectedTech(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Футер с анимацией */}
      <motion.footer
        className="mt-12 text-gray-400 text-sm relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          Hover over technologies to see effects • Click for detailed
          information
        </p>
        <motion.p
          className="mt-2"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,255,0.3)",
              "0 0 10px rgba(168,85,247,0.5)",
              "0 0 5px rgba(255,255,255,0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Made with React and Framer Motion
        </motion.p>
      </motion.footer>
    </section>
  );
};

export default Page;
