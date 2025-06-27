"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectUI2 } from "../../../projectUI2";

export default function UIUXProjectsPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 md:px-12 py-16">
      {/* Back Button */}
      <button
        onClick={() => history.back()}
        className="text-sm text-red-400 hover:text-red-500 underline mb-8"
      >
        ← Back
      </button>

      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center text-red-500 mb-16">
        UI/UX Projects
      </h1>

      {/* Project Cards */}
      <div className="flex flex-col gap-20">
        {projectUI2.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col md:flex-row gap-10 items-start"
          >
            {/* LEFT: Images - All in a row */}
            <div className="flex gap-4 w-full md:w-1/2 justify-start">
                {[project.image, ...(project.extraImages || [])]
                  .slice(0, 3)
                  .map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-[9/16] h-80 rounded-md overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`Project Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
            {/* RIGHT: Text Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-300 text-base mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies?.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#2a2a2a] px-4 py-2 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mt-6 flex-wrap">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm"
                  >
                    🔗 View on Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
