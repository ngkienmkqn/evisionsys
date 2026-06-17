import { useEffect, useRef } from "react";

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function clamp(v: number, a: number, b: number) {
  return Math.max(0, Math.min(1, (v - a) / (b - a)));
}

interface Spark {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
}

/**
 * Global Video Background
 * This component is placed once in the layout/page and stays fixed behind all content.
 * It scrubs its animation based on the total page scroll progress.
 */
export function VideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnSpark = (cx: number, cy: number, intensity: number) => {
      if (Math.random() > intensity * 0.35) return;
      const spread = Math.min(W, H) * 0.4;
      sparksRef.current.push({
        x: cx + (Math.random() - 0.5) * spread,
        y: cy + (Math.random() - 0.5) * (spread * 0.4),
        vx: (Math.random() - 0.5) * 0.7,
        vy: -(0.4 + Math.random() * 1.4),
        life: 0,
        maxLife: 60 + Math.random() * 90,
        size: 0.5 + Math.random() * 2,
      });
      if (sparksRef.current.length > 180) sparksRef.current.shift();
    };

    const draw = () => {
      // Calculate scroll progress across the ENTIRE document
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrollY = window.scrollY;
      const p = clamp(scrollY / maxScroll, 0, 1);

      const cx = W / 2;
      const cy = H / 2;

      // ── Background ────
      const ambientR = Math.round(easeInOut(clamp(p, 0.1, 0.6)) * 22);
      const ambientG = Math.round(easeInOut(clamp(p, 0.1, 0.6)) * 10);
      ctx.fillStyle = `rgb(${8 + ambientR},${8 + ambientG},8)`;
      ctx.fillRect(0, 0, W, H);

      // ── Radial atmosphere (Brighter & More intense) ──────
      const atmosAlpha = easeInOut(clamp(p, 0.08, 0.65)) * 0.75;
      if (atmosAlpha > 0.005) {
        const gSize = Math.min(W, H) * 1.2;
        const atm = ctx.createRadialGradient(cx, cy, 0, cx, cy, gSize);
        atm.addColorStop(0,   `rgba(245,158,11,${atmosAlpha})`);
        atm.addColorStop(0.3, `rgba(245,158,11,${atmosAlpha * 0.3})`);
        atm.addColorStop(1,   `rgba(245,158,11,0)`);
        ctx.fillStyle = atm;
        ctx.fillRect(0, 0, W, H);
      }

      // ── Light rays (Sharper & more pronounced) ────────
      const rayAlpha = easeInOut(clamp(p, 0.3, 0.75)) * 0.25
                     * (1 - easeInOut(clamp(p, 0.85, 1.0)));
      if (rayAlpha > 0.002) {
        for (let i = 0; i < 20; i++) {
          const angle = (i / 20) * Math.PI * 2 + (p * 0.5); // Add slight rotation as it scrolls
          const len = Math.max(W, H) * 1.5;
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(angle);
          const rg = ctx.createLinearGradient(0, 0, len, 0);
          rg.addColorStop(0,   `rgba(255,200,50,${rayAlpha})`);
          rg.addColorStop(0.4, `rgba(245,158,11,${rayAlpha * 0.4})`);
          rg.addColorStop(1,   `rgba(245,158,11,0)`);
          ctx.fillStyle = rg;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          const s = Math.PI / 20 / 2;
          ctx.arc(0, 0, len, -s, s);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }

      // ── "E" — ALWAYS CENTERED, NEVER MOVES ───────────
      const fontSize = Math.min(W * 0.56, H * 0.72);
      ctx.font = `900 ${fontSize}px 'Inter','Helvetica Neue',Arial,sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Outline trace (0.05 → 0.40) - Thicker & Brighter
      const traceP = easeInOut(clamp(p, 0.05, 0.40));
      if (traceP > 0) {
        ctx.save();
        ctx.setLineDash([3000, 3000]);
        ctx.lineDashOffset = 3000 * (1 - traceP);
        ctx.lineWidth = Math.max(3, fontSize * 0.008);
        ctx.strokeStyle = `rgba(255,180,30,${traceP})`;
        ctx.shadowColor = "#f59e0b";
        ctx.shadowBlur = 30 * traceP;
        ctx.strokeText("E", cx, cy);
        ctx.restore();
      }

      // Glow fill (0.25 → 0.85) - Much more aggressive bloom
      const glowP = easeInOut(clamp(p, 0.25, 0.85));
      if (glowP > 0) {
        [{ blur: 160, alpha: 0.1 }, { blur: 80, alpha: 0.2 }, { blur: 30, alpha: 0.4 }, { blur: 10, alpha: 0.8 }]
          .forEach(({ blur, alpha }) => {
            ctx.save();
            ctx.shadowColor = "#f59e0b";
            ctx.shadowBlur = blur * glowP;
            ctx.fillStyle = `rgba(245,158,11,${alpha * glowP})`;
            ctx.fillText("E", cx, cy);
            ctx.restore();
          });
      }

      // Peak inner highlight (0.45 → 0.85) - Pure bright white/yellow core
      const peakP = easeInOut(clamp(p, 0.45, 0.85));
      if (peakP > 0) {
        ctx.save();
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 20 * peakP;
        ctx.fillStyle = `rgba(255,245,210,${peakP * 0.9})`;
        ctx.fillText("E", cx, cy);
        ctx.strokeStyle = `rgba(255,255,255,${peakP})`;
        ctx.lineWidth = Math.max(1, fontSize * 0.004);
        ctx.strokeText("E", cx, cy);
        ctx.restore();

        // Final razor-sharp core layer with NO blur to ensure maximum crispness
        ctx.save();
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255,255,255,${peakP * 0.8})`;
        ctx.fillText("E", cx, cy);
        ctx.restore();
      }

      // ── Sparks rising upward ──────────────────────────
      const sparkI = easeInOut(clamp(p, 0.25, 0.65))
                   * (1 - easeInOut(clamp(p, 0.75, 0.95)));
      spawnSpark(cx, cy, sparkI * 2.5); // 2.5x more sparks
      sparksRef.current = sparksRef.current.filter((s) => {
        s.x += s.vx; s.y += s.vy * 1.5; s.vx += (Math.random() - 0.5) * 0.1; s.life++;
        const a = (1 - s.life / s.maxLife) * sparkI;
        if (a <= 0.002) return false;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 1.5, 0, Math.PI * 2); // Bigger sparks
        ctx.shadowColor = "#ffc107";
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(255,193,7,${a * 1.5})`; // Brighter
        ctx.fill();
        return s.life < s.maxLife;
      });
      ctx.shadowBlur = 0;

      // ── Vignette ──────────────────────────────────────
      const vig = ctx.createRadialGradient(cx, cy, Math.min(W,H)*0.2, cx, cy, Math.max(W,H)*0.85);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(0,0,0,0.72)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      // ── Scanlines ─────────────────────────────────────
      for (let y = 0; y < H; y += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.045)";
        ctx.fillRect(0, y, W, 1);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
