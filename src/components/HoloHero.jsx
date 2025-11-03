import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Shield } from 'lucide-react';

export default function HoloHero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9wQq2m2m8yWcQ0J1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* glow gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,209,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(0,132,255,0.25),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(255,0,189,0.2),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-300" />
          Secure Trading. Authenticity Verified.
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Pokémon HoloLab
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 md:text-lg">
          Scan cards, watch them come alive in AR, track market value, and manage a gorgeous digital binder. A futuristic Poké‑lab for every trainer chasing that Charizard dream.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#scan" className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 px-5 py-3 font-semibold text-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.5)] transition hover:bg-cyan-400">
            <Rocket className="h-5 w-5 transition group-hover:translate-x-0.5" />
            Start Scanning
          </a>
          <a href="#binder" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <Star className="h-5 w-5 text-yellow-300" />
            View Binder
          </a>
        </div>
      </div>
    </section>
  );
}
