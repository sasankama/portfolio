'use client';
import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen px-6 md:px-20 py-10">
      {/* 🔙 Back Button */}
      <div className="mb-8">
        <Link href="/">
          <button className="flex items-center gap-2 text-sm text-white hover:text-red-400 transition">
            ← Back
          </button>
        </Link>
      </div>

      {/* Contact Section */}
      <section id="contact-section">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Contact Form */}
          <motion.form
            className="space-y-6 bg-[#1a1a1a] p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-[#222] rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-[#222] rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="6"
                placeholder="Your message..."
                className="w-full px-4 py-2 bg-[#222] rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-semibold transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">Let's Connect</h3>
              <p className="text-gray-400">
                Whether you have a question, a project idea, or just want to say hi — I'm happy to chat!
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>Email:</strong> ssbkmlshn123@gmail.com</p>
              <p><strong>Phone:</strong> +94 782053709</p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/94782053709" target="_blank" className="text-green-400 hover:underline">Message me</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-username" target="_blank" className="text-blue-400 hover:underline">View Profile</a></p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
