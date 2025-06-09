"use client";
import HeroSection from "../../components/HeroSection";
import React from "react";

// Define your project data
const projects = [
  {
    title: "Smart Aquarium System",
    description: "IoT-based aquarium controller with React dashboard and ESP32.",
    image: "/images/aquarium.jpg",
    color: "border-cyan-500",
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal site built with Next.js and Tailwind CSS.",
    image: "/images/portfolio.jpg",
    color: "border-purple-500",
  },
  {
    title: "AI Image Enhancer",
    description: "Web app that enhances photos using open-source AI models.",
    image: "/images/ai.jpg",
    color: "border-green-500",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about-section" className="py-20 px-12 bg-[#1a1a1a]">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl">
          I'm Sasanka Malshan, a passionate developer focused on creating
          intuitive digital experiences and impactful UI designs.
        </p>
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

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#1a1a1a] p-6 rounded-2xl border-2 ${project.color}
                transform transition duration-300 ease-in-out
                hover:scale-105 hover:bg-[#222] hover:shadow-xl`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact-section" className="py-20 px-12 bg-[#111111]">
        <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
        <p>Email: sasanka@example.com</p>
        <p>Phone: +94 123 456 789</p>
      </section>

      {/* Footer */}
      <footer className="py-10 px-12 text-sm text-gray-500 bg-[#0d0d0d] text-center">
        © 2025 Sasanka Malshan. All rights reserved.
      </footer>
    </main>
  );
}
