"use client";
import HeroSection from "../../components/HeroSection";
import React from "react";
import { projects } from "@/projects"; // ✅ Now this will work
import Link from "next/link";
import { projectUI } from "../projectUI"; // ✅ correct if page.js is in src/app
import { projectUI2 } from "@/projectUI2";



// Define your project data

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section
  id="about-section"
  className="min-h-screen flex flex-col justify-center items-start px-12 py-20 bg-[#1a1a1a]"
>
  <h2 className="text-4xl font-bold mb-6">About Me</h2>
  <p className="text-gray-400 max-w-3xl text-lg leading-relaxed mb-10">
    I'm <span className="text-white font-semibold">Sasanka Malshan</span>, a passionate
    developer focused on building seamless digital experiences and engaging user interfaces.
    I enjoy solving complex problems, crafting elegant designs, and learning new technologies.
  </p>

  <div>
    <h3 className="text-2xl font-semibold mb-4">Skills</h3>
    <div className="flex flex-wrap gap-4">
      {[
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Git",
        "Figma",
      ].map((skill, index) => (
        <span
          key={index}
          className="bg-[#2a2a2a] text-white px-4 py-2 rounded-full text-sm hover:bg-red-500 transition"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>



      {/* Projects Section */}
      <section id="projects-section" className="py-20 px-6 md:px-12 bg-[#121212]">
        {/* Social Links */}
        <div className="flex justify-center md:justify-end gap-6 mb-8 text-sm">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.figma.com/@your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            Figma
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

        {/* Portfolio Coding Projects */}
        {/* Top 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Portfolio Card */}
          <Link href={`/projects/${projects[0].slug}`}>
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border-2 border-gray-800 hover:scale-105 hover:bg-[#222] hover:shadow-xl transition max-w-full">
              <img src={projects[0].image} alt={projects[0].title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{projects[0].title}</h2>
              <p className="text-gray-400 text-sm">{projects[0].description}</p>
            </div>
          </Link>

            {/* UI/UX Card 1 */}
          <Link href={`/UIUX/${projectUI[0].slug}`}>
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border-2 border-gray-800 hover:scale-105 hover:bg-[#222] hover:shadow-xl transition max-w-full">
                <img src={projectUI[0].image} alt={projectUI[0].title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2">{projectUI[0].title}</h2>
                <p className="text-gray-400 text-sm">{projectUI[0].description}</p>
              </div>
            </Link>
                  {/* */}
              <Link href={`/UIUX/${projectUI[0].slug}`}>
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border-2 border-gray-800 hover:scale-105 hover:bg-[#222] hover:shadow-xl transition max-w-full">
                <img src={projectUI[0].image} alt={projectUI[0].title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2">{projectUI[0].title}</h2>
                <p className="text-gray-400 text-sm">{projectUI[0].description}</p>
              </div>
            </Link>

            <Link href={`/UIUX2/${projectUI2[0].slug}`}>
            <div className="bg-[#1a1a1a] p-6 rounded-2x1 border-2 border-gray-800 hover:scale-105 hover:bg-[#222] hover:shadow-xl transition max-w-full">
              <img src ={projectUI2[0].image} alt={projectUI2[0].title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-sembold mb-2">{projectUI2[0].title}</h2>
              <p className="text-gray-400 text-sm">{projectUI2[0].description}</p>
            </div>
            </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact-section" className="py-20 px-12 bg-[#111111]">
        <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
        <p>Email: ssbkmlshn123@gmail.com</p>
        <p>Phone: +94 782053709</p>
        <p>whatsapp: +94 782053709</p>
      </section>

      {/* Footer */}
      <footer className="py-10 px-12 text-sm text-gray-500 bg-[#0d0d0d] text-center">
        © 2025 Sasanka Malshan. All rights reserved.
      </footer>
    </main>
  );
}
