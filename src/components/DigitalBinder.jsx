import React, { useMemo, useState } from 'react';
import { Star, Filter, Flame, Droplets, Leaf, Zap } from 'lucide-react';

const demoCards = [
  { id: 1, name: 'Charizard', rarity: 'Ultra Rare', type: 'Fire', gen: 'I', power: 95 },
  { id: 2, name: 'Blastoise', rarity: 'Holo', type: 'Water', gen: 'I', power: 90 },
  { id: 3, name: 'Venusaur', rarity: 'Holo', type: 'Grass', gen: 'I', power: 88 },
  { id: 4, name: 'Pikachu', rarity: 'Promo', type: 'Electric', gen: 'I', power: 70 },
  { id: 5, name: 'Gardevoir EX', rarity: 'Secret Rare', type: 'Psychic', gen: 'III', power: 92 },
  { id: 6, name: 'Gyarados', rarity: 'Ultra Rare', type: 'Water', gen: 'I', power: 89 },
  { id: 7, name: 'Arcanine', rarity: 'Holo', type: 'Fire', gen: 'I', power: 80 },
  { id: 8, name: 'Raichu', rarity: 'Holo', type: 'Electric', gen: 'I', power: 78 },
];

const TypeBadge = ({ type }) => {
  const icon = {
    Fire: <Flame className="h-3.5 w-3.5" />,
    Water: <Droplets className="h-3.5 w-3.5" />,
    Grass: <Leaf className="h-3.5 w-3.5" />,
    Electric: <Zap className="h-3.5 w-3.5" />,
  }[type] || <Star className="h-3.5 w-3.5" />;

  const color = {
    Fire: 'from-orange-400 to-rose-500',
    Water: 'from-cyan-400 to-blue-500',
    Grass: 'from-emerald-400 to-lime-500',
    Electric: 'from-yellow-300 to-amber-500',
  }[type] || 'from-slate-300 to-slate-500';

  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${color} px-2 py-1 text-[10px] font-bold text-slate-900`}>{icon}{type}</span>
  );
};

export default function DigitalBinder() {
  const [type, setType] = useState('All');
  const [rarity, setRarity] = useState('All');

  const filtered = useMemo(() => {
    return demoCards.filter((c) => (type === 'All' || c.type === type) && (rarity === 'All' || c.rarity === rarity));
  }, [type, rarity]);

  return (
    <section id="binder" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-2 shadow-[0_0_35px_rgba(56,189,248,0.35)]">
            <Star className="h-5 w-5 text-slate-900" />
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Digital Binder</h2>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Filter className="h-4 w-4" />
          <span className="text-sm">Organize by type & rarity</span>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
          <option>All</option>
          <option>Fire</option>
          <option>Water</option>
          <option>Grass</option>
          <option>Electric</option>
        </select>

        <select value={rarity} onChange={(e) => setRarity(e.target.value)} className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
          <option>All</option>
          <option>Holo</option>
          <option>Ultra Rare</option>
          <option>Secret Rare</option>
          <option>Promo</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((c) => (
          <div key={c.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:shadow-[0_0_35px_rgba(99,102,241,0.35)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition group-hover:opacity-100" />
            <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="flex h-full items-end justify-between p-3">
                <div className="space-y-1">
                  <TypeBadge type={c.type} />
                  <p className="text-xs text-white/70">{c.rarity}</p>
                </div>
                <div className="rounded-md bg-black/40 px-2 py-1 text-xs text-white/70">Power {c.power}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="font-semibold text-white">{c.name}</p>
              <span className="text-xs text-white/60">Gen {c.gen}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
