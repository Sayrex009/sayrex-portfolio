"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiPlus, FiClock } from "react-icons/fi";

const ProjectsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Пока пустой массив проектов
  const projects = [];

  // Категории для будущих проектов
  const categories = [
    { name: "Web Development", color: "bg-blue-500" },
    { name: "Mobile Apps", color: "bg-purple-500" },
    { name: "UI/UX Design", color: "bg-pink-500" },
    { name: "Open Source", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white p-8 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Заголовок с анимацией */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-purple-200 max-w-2xl">
            Here will be my future projects. I'm currently working on some
            exciting ideas!
          </p>
        </motion.div>

        {/* Состояние "нет проектов" */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="mb-6"
              >
                <FiClock className="text-6xl text-purple-400" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Projects Coming Soon</h2>
              <p className="text-lg text-gray-300 max-w-md mb-6">
                I'm currently working on some amazing projects that will be
                displayed here soon. Stay tuned for updates!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium flex items-center gap-2"
              >
                <FiGithub /> Visit My GitHub
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Категории будущих проектов */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Future Project Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className={`${category.color} bg-opacity-20 hover:bg-opacity-30 rounded-xl p-6 border border-white/10 transition-all cursor-pointer`}
              >
                <div className="text-2xl mb-3">{i + 1}.</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-sm opacity-80">
                  Future projects in this category will appear here
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Шаблон для будущих проектов */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Project Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Пример будущего проекта 1 */}
            <motion.div
              whileHover="hover"
              onHoverStart={() => setHoveredCard(1)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 relative"
            >
              <div className="h-48 bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                <FiPlus className="text-4xl text-white opacity-30" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">Future Project</h3>
                  <span className="text-xs px-2 py-1 bg-purple-500/30 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  This is where my amazing project description will appear once
                  it's ready.
                </p>
                <div className="flex gap-3">
                  <button className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">
                    React
                  </button>
                  <button className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">
                    Next.js
                  </button>
                </div>
              </div>

              {/* Эффект при наведении */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none"
                variants={{
                  hover: { opacity: 1 },
                  initial: { opacity: 0 },
                }}
                initial="initial"
                animate={hoveredCard === 1 ? "hover" : "initial"}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Пример будущего проекта 2 */}
            <motion.div
              whileHover="hover"
              onHoverStart={() => setHoveredCard(2)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 relative"
            >
              <div className="h-48 bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center">
                <FiPlus className="text-4xl text-white opacity-30" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">Awesome App</h3>
                  <span className="text-xs px-2 py-1 bg-pink-500/30 rounded-full">
                    In Development
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  This will be a description of my upcoming mobile application.
                </p>
                <div className="flex gap-3">
                  <button className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">
                    Flutter
                  </button>
                  <button className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">
                    Firebase
                  </button>
                </div>
              </div>

              {/* Эффект при наведении */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent pointer-events-none"
                variants={{
                  hover: { opacity: 1 },
                  initial: { opacity: 0 },
                }}
                initial="initial"
                animate={hoveredCard === 2 ? "hover" : "initial"}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Want to collaborate?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            I'm open to interesting project ideas and collaborations. Feel free
            to reach out!
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
