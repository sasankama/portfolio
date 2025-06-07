"use client";

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-black via-[#1a0c0c] to-black text-white overflow-hidden">
      {/* Navigation Bar */}
      <header className="flex items-center justify-start gap-8 px-8 py-6">
        <div className="cursor-pointer space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>

        <nav className="flex gap-8 text-sm">
          <a href="#" className="hover:text-red-500">HOME</a>
          <a href="#about-section" className="hover:text-red-500" onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
            }}>ABOUT</a>
          <a href="#projects-section" className="hover:text-red-500">PROJECTS</a>
          <Link href="/contact" className="hover:text-red-500">CONTACTS</Link>
        </nav>
      </header>

      <main className="grid grid-cols-2 items-center px-20 py-10">
        <div className="space-y-6">
          <p className="uppercase text-sm tracking-widest text-gray-300">I am</p>
          <h1 className="text-6xl font-bold">Sasanka Malshan</h1>
          <p className="max-w-md text-gray-400">Turning imagination into impactful design.</p>

          {/* Fixed: See More scroll button */}
          <button
            onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-4 mt-6 cursor-pointer space-y-1 group"
          >
            <div className="relative w-10 h-10 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
            <span className="text-xl text-white transition-colors duration-300 group-hover:text-black">&#8594;</span>
              <div className="absolute w-full h-full rounded-full border border-white animate-ping"></div>
            </div>
            <span className="text-white text-sm">See More</span>
          </button>
        </div>

        <div className="flex justify-center relative">
          <div className="w-[400px] h-[400px] bg-red-700 rounded-full absolute"></div>
          <img
            src="/images/profile.png"
            alt="Hero Visual"
            className="relative z-10 w-[350px]"
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
