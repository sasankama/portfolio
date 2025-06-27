"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("navbar");
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.classList.add("bg-[#121212]/80", "backdrop-blur-md", "shadow-md");
        nav.classList.remove("bg-transparent", "backdrop-blur-none");
      } else {
        nav.classList.add("bg-transparent", "backdrop-blur-none");
        nav.classList.remove("bg-[#121212]/80", "backdrop-blur-md", "shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#0f0f0f] via-[#000000] to-[#131313] text-white overflow-hidden">
      {/* Navigation Bar */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-none transition-all duration-300 ease-in-out py-10 px-8"
        id="navbar"
      >
        <nav className="flex gap-12 text-lg px-12">
          <a href="#" className="hover:text-red-500">HOME</a>
          <a
            href="#about-section"
            className="hover:text-red-500"
            onClick={() =>
              document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ABOUT
          </a>
          <a
            href="#projects-section"
            className="hover:text-red-500"
            onClick={() =>
              document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            PROJECTS
          </a>
          <Link href="/contact" className="hover:text-red-500">CONTACTS</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 items-center px-20 pt-36 pb-16">
        {/* Left Content */}
        <div className="space-y-8 mt-20 ml-16">
          <p className="uppercase text-sm tracking-widest text-gray-300">I am</p>
          <h1 className="text-7xl font-bold">Sasanka Malshan</h1>
          <p className="max-w-md text-gray-400 text-lg">
            Turning imagination into impactful design.
          </p>

          {/* Bigger See More Button */}
          <button
            onClick={() =>
              document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-4 mt-39 ml-26 cursor-pointer group"


          >
            <div className="relative w-14 h-14 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <span className="text-3xl text-white group-hover:text-black transition">
                &#8594;
              </span>
              <div className="absolute w-full h-full rounded-full border border-white animate-ping"></div>
            </div>
            <span className="text-white text-lg font-semibold">See More</span>
          </button>
        </div>

        {/* Right Image with Circle, nudged slightly to the right */}
        <div className="flex justify-center relative translate-x-4">
          <div className="w-[400px] h-[400px] bg-[#535353] rounded-full absolute"></div>
          <img
            src="/images/profile.png"
            alt="Sasanka Malshan profile photo"
            className="relative z-10 w-[380px] mt-6"
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
