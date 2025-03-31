"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiCplusplus } from "react-icons/si";
const Hero = () => {
  return (
    <section className="flex flex-col justify-between items-center min-h-screen px-6 relative overflow-hidden">
      {/* Основной контент */}
      <div className="relative mb-12 mt-16 flex flex-col lg:flex-row items-center w-full max-w-6xl z-10 flex-grow">
        <motion.video
          src="/blackhole.webm"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md lg:max-w-lg h-auto rotate-[-12deg]  rounded-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg text-center lg:text-left mt-10 lg:mt-0 lg:ml-12 p-8 rounded-2xl shadow-lg bg-gradient-to-r from-purple-600 via-blue-700 to-indigo-700 border border-purple-400/50"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-200">
            Hi! I'm <span className="font-semibold">Sayrex</span>, a frontend
            developer passionate about building modern and user-friendly web
            applications. I specialize in
            <span className="text-white font-medium"> Next.js</span> and{" "}
            <span className="text-white font-medium">Tailwind CSS</span>.
            Currently, I'm exploring{" "}
            <span className="text-white font-medium">C++</span> and{" "}
            <span className="text-white font-medium">Python</span>
            to expand my skills further
          </p>
        </motion.div>
      </div>

      {/* Второе видео внизу */}
      <motion.video
        src="/encryption.webm"
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-[-1000] h-[-1000] max-w-4xl opacity-40 pointer-events-none mb-6"
      />
      <div className="w-full py-4 mb-24 relative z-10">
        <Marquee gradient={false} speed={100} pauseOnHover>
          <div className="flex gap-10 text-5xl">
            <SiNextdotjs className="text-white" />
            <FaReact className="text-blue-400" />
            <SiTailwindcss className="text-cyan-400" />
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <FaJsSquare className="text-yellow-400" />
            <FaNodeJs className="text-green-500" />
            <FaPython className="text-yellow-300" />
            <SiCplusplus className="text-blue-600" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
