import HeroSection from "../../components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212] text-white">
      <HeroSection />

      {/* ABOUT Section (anchor target) */}
      <section id="about-section" className="py-20 px-12 bg-[#1a1a1a]">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl">
          I'm Sasanka Malshan, a passionate developer focused on creating
          intuitive digital experiences and impactful UI designs.
        </p>
      </section>

      {/* CONTACT INFO Section */}
      <section className="py-20 px-12 bg-[#111111]">
        <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
        <p>Email: sasanka@example.com</p>
        <p>Phone: +94 123 456 789</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-12 text-sm text-gray-500 bg-[#0d0d0d] text-center">
        © 2025 Sasanka Malshan. All rights reserved.
      </footer>
    </main>
  );
}
