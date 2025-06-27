'use client';

import { projects } from "../../../projects";
import { projectUI } from "../../../projectUI";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function ProjectDetailPage(props) {
  const params = use(props.params);
  const router = useRouter();

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  // 🛍 Render the special Shopping UI project differently
  if (project.slug === "shopping-store-ui") {
    return (
      <div className="min-h-screen px-6 md:px-12 py-16 bg-[#121212] text-white">
        <button
          onClick={() => router.back()}
          className="text-sm text-red-400 hover:text-red-500 underline mb-8"
        >
          ← Back
        </button>

        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-gray-300 mb-6">{project.description}</p>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                target="_blank"
                className="inline-block text-sm bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full"
              >
                🔗 View on Figma
              </a>
            )}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, i) => (
                  <span key={i} className="bg-[#1f1f1f] px-4 py-2 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image src={project.image} alt={project.title} width={800} height={600} />
          </div>
        </div>

        {project.extraImages?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.extraImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Extra ${index + 1}`}
                width={600}
                height={400}
                className="rounded-xl"
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // 🧩 Default Portfolio Project Layout
  return (
    <div className="min-h-screen px-6 md:px-12 py-16 bg-[#121212] text-white">
      <button
        onClick={() => router.back()}
        className="text-sm text-red-400 hover:text-red-500 underline mb-8"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />

      <p className="text-lg text-gray-300 mb-6">{project.description}</p>

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 underline hover:text-red-500 mb-6 inline-block"
        >
          View Source Code →
        </a>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="bg-[#2a2a2a] text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
