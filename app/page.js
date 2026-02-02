"use client";
import { useState } from "react";

export default function Page() {
  const videos = [
    "/videos/SampleLongForm1.mp4",
    "/videos/SampleLongForm2.mp4",
    "/videos/SampleShortForm1.mp4",
    "/videos/SampleShortForm2.mp4",
    "/videos/SampleShortForm3.mp4",
    "/videos/SampleShortForm4.mp4",
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="relative min-h-screen text-slate-100
      bg-gradient-to-br from-[#121826] via-[#151b2e] to-[#1a1f36]">

      {/* CINEMATIC GLOW */}
      <div className="absolute inset-0 opacity-60
        bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_45%),
            radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.25),transparent_45%)]" />

      {/* NAVBAR */}
      <nav className="relative z-10 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold tracking-wide">Roger Madulara Jr</h1>
          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight
          bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400
          bg-clip-text text-transparent">
          Short-Form Video Editor
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-300">
          Crafting viral moments for TikTok, Reels, and YouTube Shorts
          through cinematic edits and engaging storytelling.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr
              from-cyan-500/20 to-violet-500/20 blur-2xl" />
            <img
              src="/image/me.jpg"
              alt="Roger M Madulara Jr"
              className="relative z-10 rounded-3xl border border-white/20 shadow-xl object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">About Me</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              I’m a computer science student with a passion for short-form video
              editing. I focus on pacing, rhythm, and emotion to create content
              that keeps viewers watching and engaging.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-10">Latest Edits</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((src, i) => (
            <div
              key={i}
              onClick={() => setActiveVideo(src)}
              className="cursor-pointer aspect-[9/16] rounded-2xl overflow-hidden
              bg-white/10 border border-white/20 backdrop-blur-md relative group"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={src} type="video/mp4" />
              </video>

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center
                bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white/80
                  flex items-center justify-center text-black text-xl">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎬 MODAL PLAYER */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10
              bg-black/60 text-white px-3 py-1 rounded-md">
              ✕ Close
            </button>

            <video
              controls
              autoPlay
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-24 bg-white/5 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-white/8 border border-white/15 p-6 backdrop-blur-md">
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-slate-300 text-sm font-medium">
              Roger M Madulara Jr
            </p>
            <p className="text-slate-400 text-sm">
              +63 963 572 4470
            </p>
            <p className="text-slate-400 text-sm">
              Tagum City, Davao del Norte
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
