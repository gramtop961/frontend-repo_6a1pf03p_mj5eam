import React from 'react';
import HoloHero from './components/HoloHero';
import CardScanner from './components/CardScanner';
import DigitalBinder from './components/DigitalBinder';
import PackOpener from './components/PackOpener';
import { Users, Trophy } from 'lucide-react';

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-white/70 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-white/80">
          <Trophy className="h-5 w-5 text-yellow-300" />
          <span className="text-sm">Achievement badges, league events, secure trades — coming alive as you build your collection.</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-cyan-300" />
          <span className="text-sm">Join the HoloLab community</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <HoloHero />
      <CardScanner />
      <DigitalBinder />
      <PackOpener />
      <Footer />
    </div>
  );
}
