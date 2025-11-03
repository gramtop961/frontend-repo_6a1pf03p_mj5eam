import React, { useEffect, useRef, useState } from 'react';
import { Camera, Wand2, Sparkles } from 'lucide-react';

export default function CardScanner() {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((t) => t.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStreaming(true);
      }
    } catch (e) {
      console.warn('Camera unavailable:', e);
      setStreaming(false);
    }
  };

  const simulateScan = async () => {
    // Simulate a recognition result for demo purposes
    setTimeout(() => {
      setResult({
        name: 'Charizard VMAX',
        set: 'Shining Fates',
        rarity: 'Secret Rare',
        type: 'Fire',
        market: {
          current: 229.5,
          change24h: +3.2,
        },
      });
    }, 700);
  };

  return (
    <section id="scan" className="relative mx-auto mt-20 max-w-6xl px-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-2 shadow-[0_0_35px_rgba(168,85,247,0.35)]">
          <Camera className="h-5 w-5 text-slate-900" />
        </div>
        <h2 className="text-2xl font-bold text-white md:text-3xl">Card Scanner & AR Peek</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/40">
            <video ref={videoRef} playsInline muted className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button onClick={startCamera} className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 px-4 py-2 font-semibold text-slate-900 transition hover:bg-cyan-400">
              <Camera className="h-4 w-4" /> Enable Camera
            </button>
            <button onClick={simulateScan} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 font-semibold text-white/90 backdrop-blur transition hover:bg-white/20">
              <Wand2 className="h-4 w-4 text-fuchsia-300" /> Scan Card
            </button>
            {streaming ? (
              <span className="text-xs text-emerald-300">Live • Camera active</span>
            ) : (
              <span className="text-xs text-white/60">Tip: Allow camera access to try the live scanner</span>
            )}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="relative z-10">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
              <Sparkles className="h-5 w-5 text-yellow-300" /> Instant Hologram
            </h3>
            <p className="mb-4 text-sm text-white/75">
              After scanning, your card springs to life with animated moves, Pokédex intel, and a floating market panel.
            </p>

            {result ? (
              <div className="space-y-3">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-wide text-white/60">Card</p>
                      <h4 className="text-xl font-bold text-white">{result.name}</h4>
                      <p className="text-xs text-white/60">{result.set} • {result.rarity} • {result.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wide text-white/60">Market</p>
                      <p className="text-lg font-bold text-emerald-300">${result.market.current.toFixed(2)}</p>
                      <p className={`text-xs ${result.market.change24h >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>{result.market.change24h >= 0 ? '+' : ''}{result.market.change24h}% / 24h</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="mb-2 text-xs uppercase tracking-wide text-white/60">AR Preview</p>
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-500/30 to-rose-500/30 backdrop-blur">
                    <div className="flex h-full w-full items-center justify-center text-white/80">
                      Charizard charges a blazing move…
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-white/70">
                Scan a card to see stats, rarity, and live value trends with an AR teaser.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
