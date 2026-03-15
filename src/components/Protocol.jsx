import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Canvas animation 1 — slowly rotating double helix / concentric circles
function ConcentricCanvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const c = canvasRef.current;
        const ctx = c.getContext('2d');
        let t = 0, id;
        const draw = () => {
            c.width = c.offsetWidth; c.height = c.offsetHeight;
            ctx.clearRect(0, 0, c.width, c.height);
            const cx = c.width / 2, cy = c.height / 2;
            for (let r = 20; r < 120; r += 22) {
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(123,97,255,${0.5 - r / 300})`;
                ctx.lineWidth = 1;
                ctx.stroke();
                // Rotating dots on circles
                for (let i = 0; i < 6; i++) {
                    const angle = (i / 6) * Math.PI * 2 + t * (r % 2 === 0 ? 1 : -1);
                    ctx.beginPath();
                    ctx.arc(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r, 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(123,97,255,0.8)';
                    ctx.fill();
                }
            }
            t += 0.01;
            id = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(id);
    }, []);
    return <canvas ref={canvasRef} style={{ width: '100%', height: '160px', display: 'block' }} />;
}

// Canvas animation 2 — scanning horizontal laser line across dot grid
function ScannerCanvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const c = canvasRef.current;
        const ctx = c.getContext('2d');
        let scanY = 0, id;
        const draw = () => {
            c.width = c.offsetWidth; c.height = c.offsetHeight;
            ctx.clearRect(0, 0, c.width, c.height);
            const cols = 10, rows = 5;
            const gw = c.width / cols, gh = c.height / rows;
            for (let r = 0; r < rows; r++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * gw + gw / 2;
                    const y = r * gh + gh / 2;
                    const dist = Math.abs(y - scanY);
                    const alpha = dist < 20 ? 0.9 - dist / 20 * 0.6 : 0.15;
                    ctx.beginPath();
                    ctx.arc(x, y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0,255,150,${alpha})`;
                    ctx.fill();
                }
            }
            // Laser line
            const grad = ctx.createLinearGradient(0, 0, c.width, 0);
            grad.addColorStop(0, 'transparent');
            grad.addColorStop(0.5, 'rgba(0,255,150,0.8)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(0, scanY - 1, c.width, 2);
            scanY = (scanY + 1.5) % c.height;
            id = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(id);
    }, []);
    return <canvas ref={canvasRef} style={{ width: '100%', height: '160px', display: 'block' }} />;
}

// SVG animation 3 — EKG pulsing waveform via stroke-dashoffset
function WaveformSVG() {
    return (
        <div style={{ width: '100%', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 400 80" style={{ width: '100%', height: '80px' }}>
                <path
                    d="M0,40 L60,40 L75,10 L90,70 L105,25 L120,40 L180,40 L195,10 L210,70 L225,25 L240,40 L300,40 L315,10 L330,70 L345,25 L360,40 L400,40"
                    fill="none"
                    stroke="var(--plasma)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        strokeDasharray: 600,
                        strokeDashoffset: 0,
                        animation: 'ekgPulse 2.5s ease-in-out infinite',
                    }}
                />
                <style>{`
          @keyframes ekgPulse {
            0% { stroke-dashoffset: 600; opacity: 0.3; }
            40% { opacity: 1; }
            100% { stroke-dashoffset: -600; opacity: 0.3; }
          }
        `}</style>
            </svg>
        </div>
    );
}

const PROTOCOL_STEPS = [
    {
        num: '01',
        title: 'Attack Generation',
        desc: 'Goose orchestrates 87 adversarial prompts across misinformation, jailbreak, demographic steering, and context overflow vectors.',
        Canvas: ConcentricCanvas,
        bg: 'rgba(123,97,255,0.06)',
        border: 'rgba(123,97,255,0.2)',
    },
    {
        num: '02',
        title: 'Safety Scoring',
        desc: 'DeBERTa-v3-NLI scores hallucinations. Fairlearn measures demographic disparity. LLM-as-judge evaluates jailbreak resistance.',
        Canvas: ScannerCanvas,
        bg: 'rgba(0,255,150,0.04)',
        border: 'rgba(0,255,150,0.15)',
    },
    {
        num: '03',
        title: 'CI/CD Gate',
        desc: 'pytest-adverscan integrates into your pipeline. Non-zero exit code on any P0 failure blocks the deployment automatically.',
        Canvas: WaveformSVG,
        bg: 'rgba(255,182,39,0.04)',
        border: 'rgba(255,182,39,0.15)',
    },
];

export default function ProtocolSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = sectionRef.current.querySelectorAll('.protocol-card');
            cards.forEach((card, i) => {
                if (i === 0) return;
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                    },
                    y: 60,
                    opacity: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={sectionRef} className="py-28 px-6 md:px-16" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p className="section-tag mb-4">05 / How It Works</p>
            <h2 className="font-sans font-extrabold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--ghost)', letterSpacing: '-0.03em' }}>
                The <span style={{ color: 'var(--plasma)' }}>attack protocol</span>
            </h2>
            <p className="mb-16 max-w-lg" style={{ color: 'rgba(240,239,244,0.5)', fontSize: '1rem', lineHeight: 1.8 }}>
                Three-phase pipeline — each independently testable, each with live visualisation.
            </p>
            <div className="flex flex-col gap-6">
                {PROTOCOL_STEPS.map(({ num, title, desc, Canvas, bg, border }) => (
                    <div
                        key={num}
                        className="protocol-card rounded-4xl overflow-hidden"
                        style={{ background: bg, border: `1px solid ${border}` }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            {/* Canvas animation */}
                            <div className="p-4" style={{ borderRight: `1px solid ${border}` }}>
                                <Canvas />
                            </div>
                            {/* Content */}
                            <div className="p-8 flex flex-col justify-center gap-3">
                                <span className="font-mono text-sm" style={{ color: 'rgba(240,239,244,0.3)' }}>{num}</span>
                                <h3 className="font-sans font-bold" style={{ fontSize: '1.4rem', color: 'var(--ghost)', letterSpacing: '-0.02em' }}>{title}</h3>
                                <p style={{ color: 'rgba(240,239,244,0.5)', fontSize: '0.9rem', lineHeight: 1.8 }}>{desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
