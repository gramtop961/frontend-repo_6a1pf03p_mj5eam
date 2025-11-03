import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const sparks = Array.from({ length: 24 }).map((_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100, d: 6 + Math.random() * 12 }));

export default function PackOpener() {
  const [opened, setOpened] = useState(false);
  const [card, setCard] = useState(null);

  const openPack = () => {
    setOpened(true);
    const pool = ['Ultra Rare', 'Holo', 'Secret Rare', 'Promo'];
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const names = {
      'Ultra Rare': 'Sylveon V',
      Holo: 'Mewtwo',
      'Secret Rare': 'Charizard VMAX',
      Promo: 'Pikachu',
    };
    setTimeout(() => {
      setCard({ rarity: pick, name: names[pick] });
    }, 900);
  };

  const reset = () => {
    setOpened(false);
    setCard(null);
  };

  return (
    <section className="mx-auto mt-24 max-w-6xl px-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-2 shadow-[0_0_35px_rgba(236,72,153,0.35)]">
          <Sparkles className="h-5 w-5 text-slate-900" />
        </div>
        <h2 className="text-2xl font-bold text-white md:text-3xl">Pack Opening Simulator</h2>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="relative h-56 w-40 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-800">
            <AnimatePresence>
              {!opened ? (
                <motion.div key="pack" initial={{ rotateX: -15, opacity: 0, y: 20 }} animate={{ rotateX: 0, opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex items-center justify-center text-white/70">
                  Sealed Pack
                </motion.div>
              ) : (
                <motion.div key="burst" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                  {sparks.map((s) => (
                    <motion.span
                      key={s.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.8], x: `${s.x}%`, y: `${s.y}%` }}
                      transition={{ duration: 1.2, delay: Math.random() * 0.4 }}
                      className="pointer-events-none absolute block rounded-full bg-gradient-to-br from-yellow-200 to-fuchsia-400"
                      style={{ width: s.d, height: s.d }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left">
            <p className="max-w-xl text-white/75">
              Feel the hype. Shake to shimmer, tap to rip. Spark bursts reveal your rare pull with a satisfying glow.
            </p>
            {!opened ? (
              <button onClick={openPack} className="rounded-xl bg-fuchsia-500/90 px-5 py-3 font-semibold text-slate-900 shadow-[0_0_30px_rgba(217,70,239,0.5)] transition hover:bg-fuchsia-400">
                Rip a Pack
              </button>
            ) : (
              <button onClick={reset} className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/20">
                Open Another
              </button>
            )}

            {card && (
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">Your Pull</p>
                <div className="mt-1 flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white">{card.name}</h4>
                  <span className="rounded-md bg-gradient-to-r from-yellow-300 to-amber-500 px-2 py-1 text-xs font-bold text-slate-900">{card.rarity}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
