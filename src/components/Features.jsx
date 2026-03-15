import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── CARD 1: Diagnostic Shuffler ──────────────────────────────────────
const SHUFFLER_ITEMS = [
    { label: 'Goose AttackOrchestrator', tag: 'AGENT', color: 'var(--plasma)' },
    { label: 'Tree-of-Thought Refinement', tag: 'ACTIVE', color: '#00FF96' },
    { label: 'Attack Taxonomy Loader', tag: 'RUNNING', color: '#FFB627' },
];

function DiagnosticShuffler() {
    const [items, setItems] = useState(SHUFFLER_ITEMS);

    useEffect(() => {
        const id = setInterval(() => {
            setItems(prev => {
                const next = [...prev];
                next.unshift(next.pop());
                return next;
            });
        }, 3000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="card-surface p-6 flex flex-col gap-4 h-full min-h-[260px]">
            <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--plasma)' }}>01 — Agentic Orchestration</p>
            <h3 className="font-sans font-bold text-lg" style={{ color: 'var(--ghost)' }}>Attack Orchestrator</h3>
            <p className="text-sm mb-2" style={{ color: 'rgba(240,239,244,0.55)' }}>Goose-driven agentic loop with tree-of-thought prompt refinement across 4 attack classes.</p>
            <div className="flex flex-col gap-2 mt-auto">
                {items.map((item, i) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between px-3 py-2 rounded-xl"
                        style={{
                            background: i === 0 ? 'rgba(123,97,255,0.12)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${i === 0 ? 'rgba(123,97,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            transform: i === 0 ? 'scale(1.02)' : 'scale(1)',
                        }}
                    >
                        <span className="font-sans text-xs font-medium" style={{ color: 'var(--ghost)' }}>{item.label}</span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(0,0,0,0.4)', color: item.color }}>{item.tag}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── CARD 2: Telemetry Typewriter ─────────────────────────────────────
const FEED_MESSAGES = [
    '⠸ Loading medical ground truth corpus...',
    '✓  DeBERTa-v3-NLI loaded (247MB)',
    '⚠  HALLUCINATION detected — drug interaction claim',
    '→  Flagged span: "metformin + alcohol synergism"',
    '✓  Jailbreak resistance: 96.2% PASS',
    '⠹  Running BiasAuditor — 12 demographic pairs...',
    '⚠  BIAS: gender disparity score 0.34 > threshold 0.15',
    '✓  Report saved → ./reports/safety_2026-03-07.json',
];

function TelemetryTypewriter() {
    const [displayedText, setDisplayedText] = useState('');
    const [msgIdx, setMsgIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);

    useEffect(() => {
        const msg = FEED_MESSAGES[msgIdx];
        if (charIdx < msg.length) {
            const id = setTimeout(() => {
                setDisplayedText(msg.slice(0, charIdx + 1));
                setCharIdx(c => c + 1);
            }, 30);
            return () => clearTimeout(id);
        } else {
            const id = setTimeout(() => {
                setMsgIdx(i => (i + 1) % FEED_MESSAGES.length);
                setCharIdx(0);
                setDisplayedText('');
            }, 1400);
            return () => clearTimeout(id);
        }
    }, [charIdx, msgIdx]);

    const getColor = (text) => {
        if (text.startsWith('⚠')) return '#FFB627';
        if (text.startsWith('✓')) return '#00FF96';
        if (text.startsWith('→')) return 'rgba(240,239,244,0.5)';
        return 'rgba(240,239,244,0.75)';
    };

    return (
        <div className="card-surface p-6 flex flex-col gap-4 h-full min-h-[260px]">
            <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--plasma)' }}>02 — Clinical Safety Scoring</p>
            <h3 className="font-sans font-bold text-lg" style={{ color: 'var(--ghost)' }}>Live Safety Feed</h3>
            <div className="flex items-center gap-2 mb-2">
                <span className="status-dot" style={{ background: '#00FF96', boxShadow: '0 0 8px #00FF96' }} />
                <span className="font-mono text-xs" style={{ color: '#00FF96' }}>LIVE FEED</span>
            </div>
            <div
                className="flex-1 rounded-xl p-4 font-mono text-xs leading-relaxed"
                style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '120px' }}
            >
                <span style={{ color: getColor(displayedText) }}>{displayedText}</span>
                <span className="cursor-blink inline-block w-1.5 h-3.5 ml-px align-middle" style={{ background: 'var(--plasma)' }} />
            </div>
        </div>
    );
}

// ── CARD 3: Cursor Protocol Scheduler ───────────────────────────────
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function CursorScheduler() {
    const [activeDay, setActiveDay] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [phase, setPhase] = useState('idle'); // idle | moving | clicking | saved

    useEffect(() => {
        let t;
        const sequence = async () => {
            setPhase('idle');
            await new Promise(r => { t = setTimeout(r, 1000); });
            const targetDay = 3; // Wednesday
            setPhase('moving');
            await new Promise(r => { t = setTimeout(r, 800); });
            setActiveDay(targetDay);
            setPhase('clicking');
            await new Promise(r => { t = setTimeout(r, 600); });
            setPhase('saved');
            await new Promise(r => { t = setTimeout(r, 2000); });
            setActiveDay(null);
            setPhase('idle');
        };
        const loop = setInterval(() => sequence(), 5000);
        sequence();
        return () => { clearInterval(loop); clearTimeout(t); };
    }, []);

    return (
        <div className="card-surface p-6 flex flex-col gap-4 h-full min-h-[260px]">
            <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--plasma)' }}>03 — CI/CD Safety Gate</p>
            <h3 className="font-sans font-bold text-lg" style={{ color: 'var(--ghost)' }}>Scan Scheduler</h3>
            <p className="text-sm" style={{ color: 'rgba(240,239,244,0.55)' }}>pytest plugin + GitHub Actions template. Auto-blocks unsafe deployments.</p>
            <div className="mt-auto">
                <div className="flex gap-2 mb-3">
                    {DAYS.map((d, i) => (
                        <div
                            key={i}
                            className="flex-1 aspect-square flex items-center justify-center rounded-lg font-mono text-xs font-bold cursor-default select-none"
                            style={{
                                background: activeDay === i ? 'var(--plasma)' : 'rgba(255,255,255,0.04)',
                                border: `1px solid ${activeDay === i ? 'var(--plasma)' : 'rgba(255,255,255,0.08)'}`,
                                color: activeDay === i ? '#fff' : 'rgba(240,239,244,0.4)',
                                transform: activeDay === i && phase === 'clicking' ? 'scale(0.92)' : 'scale(1)',
                                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                boxShadow: activeDay === i ? '0 0 16px rgba(123,97,255,0.5)' : 'none',
                            }}
                        >
                            {d}
                        </div>
                    ))}
                </div>
                <div
                    className="w-full py-2 text-center rounded-xl font-mono text-xs font-semibold"
                    style={{
                        background: phase === 'saved' ? 'rgba(0,255,150,0.12)' : 'rgba(123,97,255,0.08)',
                        border: `1px solid ${phase === 'saved' ? 'rgba(0,255,150,0.3)' : 'rgba(123,97,255,0.2)'}`,
                        color: phase === 'saved' ? '#00FF96' : 'rgba(240,239,244,0.5)',
                        transition: 'all 0.4s ease',
                    }}
                >
                    {phase === 'saved' ? '✓ Schedule Saved — CI Gate Active' : '→ medrteam.yaml configured'}
                </div>
            </div>
        </div>
    );
}

// ── FEATURES SECTION ─────────────────────────────────────────────────
export default function FeaturesSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="py-28 px-6 md:px-16" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p className="section-tag mb-4">04 / Interactive Feature Artifacts</p>
            <h2 className="font-sans font-extrabold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--ghost)', letterSpacing: '-0.03em' }}>
                Core <span style={{ color: 'var(--plasma)' }}>feature set</span>
            </h2>
            <p className="mb-14 max-w-lg" style={{ color: 'rgba(240,239,244,0.5)', fontSize: '1rem', lineHeight: 1.8 }}>
                Each card is a functional software micro-UI — not static marketing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="feature-card"><DiagnosticShuffler /></div>
                <div className="feature-card"><TelemetryTypewriter /></div>
                <div className="feature-card"><CursorScheduler /></div>
            </div>
        </section>
    );
}
