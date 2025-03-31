  import Image from "next/image";
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

  export default function AboutPage() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0a001f] via-[#11002b] to-[#030014] text-white p-6 relative overflow-hidden">
        {/* Размытый фон для глубины */}
        <div className="absolute inset-0 bg-[#0a001f] opacity-40 blur-3xl" />

        <div className="max-w-3xl text-center relative z-10 p-6 bg-opacity-10 backdrop-blur-lg mt-24 rounded-xl border border-[#7042f8]/50 shadow-lg">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 animate-fade-in">
            About Me
          </h2>
          <p className="text-base text-gray-300 leading-relaxed animate-slide-up">
            Hi! I'm <span className="text-white font-semibold">Sayrex</span>, a
            frontend developer passionate about building modern, user-friendly web
            applications. I specialize in{" "}
            <span className="text-purple-300 font-medium">Next.js</span> and
            <span className="text-indigo-300 font-medium"> Tailwind CSS</span>,
            crafting smooth and dynamic web experiences.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mt-3 animate-slide-up delay-200">
            Currently, I'm expanding my expertise by learning{" "}
            <span className="text-indigo-300 font-medium">C++</span> and
            <span className="text-purple-300 font-medium"> Python</span>. My goal
            is to combine frontend excellence with backend logic, creating
            seamless web experiences.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mt-3 animate-slide-up delay-400">
            I love tackling challenges, optimizing performance, and bringing
            creative ideas to life through clean and efficient code.
          </p>

          <a
            href="/projects"
            className="inline-block mt-5 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all animate-slide-up delay-600"
          >
            View My Projects
          </a>
        </div>

        {/* Marquee Section */}
        <div className="w-full py-4 mt-6 relative z-10">
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

        {/* Блок с изображением */}
        <div className="justify-center items-center flex">
          <Image
            src="/mainIconsdark.svg" // Используем путь из public
            alt="Tech Icons"
            width={500} // Укажи реальные размеры
            height={500} // Подстрой под нужные пропорции
            className="opacity-80 w-[400px] h-[400px]"

          />
        </div>
      </section>
    );
  }
