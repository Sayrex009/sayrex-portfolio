import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[60px]  top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin lg:ml-12 w-full h-full"
          />
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/about" className="cursor-pointer">About me</Link>
            <Link href="/skills" className="cursor-pointer">Skills</Link>
            <Link href="/projects" className="cursor-pointer">Projects</Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {/* Здесь можно добавить кнопки или иконки социальных сетей */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
