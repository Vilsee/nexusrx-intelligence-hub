import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpiralAnimation from './SpiralAnimation';
import {
  Brain, BookOpen, Target, FlaskConical, FileText,
  ArrowRight, Github, Zap, Clock, Database, Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ── NAVBAR ───────────────────────────────────────────────────────────
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                background: scrolled ? 'rgba(10,22,40,0.88)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(37,99,235,0.15)' : '1px solid transparent',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                padding: '1rem 2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}
        >
            <div className="flex items-center gap-10">
                {/* NexusRx Logo */}
                <a href="/" className="flex items-center gap-1.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)' }}>
                        <Zap size={16} className="text-white" />
                    </div>
                    <span className="font-display text-lg tracking-tight text-white">
                        Nexus<span style={{ color: '#2563EB' }}>Rx</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { label: 'Research', href: '#features' },
                        { label: 'Agents', href: '#agents' },
                        { label: 'Demo', href: '#demo' },
                        { label: 'Docs', href: '/docs' },
                    ].map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium hover-lift"
                            style={{ color: 'rgba(248,250,252,0.6)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.target.style.color = '#F8FAFC'}
                            onMouseLeave={e => e.target.style.color = 'rgba(248,250,252,0.6)'}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
                <a
                    href="https://github.com/vilsee/nexusrx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{ color: 'rgba(248,250,252,0.7)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'; e.currentTarget.style.color = '#F8FAFC'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(248,250,252,0.7)'; }}
                >
                    <Github size={16} />
                    <span>GitHub</span>
                </a>
                <a
                    href="#demo"
                    className="btn-shimmer flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                >
                    Try NexusRx Free
                </a>
            </div>

            {/* Mobile hamburger */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-1"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {[0, 1, 2].map(i => (
                    <span key={i} className="block w-5 h-0.5 rounded bg-white/70" />
                ))}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="absolute top-full left-0 right-0 mt-0 py-6 px-6 flex flex-col gap-4 md:hidden"
                    style={{ background: 'rgba(10,22,40,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(37,99,235,0.2)' }}
                >
                    {['Research', 'Agents', 'Demo', 'Docs'].map(link => (
                        <a key={link} href={link === 'Docs' ? '/docs' : `#${link.toLowerCase()}`} className="text-sm font-medium text-white/70" onClick={() => setMenuOpen(false)}>
                            {link}
                        </a>
                    ))}
                    <a href="#demo" className="btn-shimmer text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white mt-2">
                        Try NexusRx Free
                    </a>
                </div>
            )}
        </nav>
    );
}

// ── AGENT PIPELINE ───────────────────────────────────────────────────
const agents = [
    { id: 0, name: 'Orchestrator', desc: 'Query Parsing', icon: Brain, color: '#2563EB' },
    { id: 1, name: 'Literature', desc: 'PubMed Mining', icon: BookOpen, color: '#3B82F6' },
    { id: 2, name: 'Target', desc: 'Validation', icon: Target, color: '#10B981' },
    { id: 3, name: 'Trial Intel', desc: 'ClinicalTrials.gov', icon: FlaskConical, color: '#6366F1' },
    { id: 4, name: 'Synthesis', desc: 'Report Generation', icon: FileText, color: '#8B5CF6' },
];

function AgentPipeline() {
    const pipelineRef = useRef(null);

    useEffect(() => {
        if (!pipelineRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from('.agent-node', {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out',
                delay: 1.2,
            });
            gsap.from('.pipeline-connector', {
                scaleX: 0,
                duration: 0.4,
                stagger: 0.12,
                ease: 'power2.out',
                delay: 1.5,
            });
        }, pipelineRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pipelineRef} className="w-full overflow-x-auto pb-4">
            <div className="flex items-center gap-0 min-w-[700px] md:min-w-0 justify-center">
                {agents.map((agent, i) => {
                    const Icon = agent.icon;
                    return (
                        <React.Fragment key={agent.id}>
                            {/* Agent Node */}
                            <div className="agent-node shiny-border agent-node-active group transition-all hover:scale-105">
                              <div className="shiny-border-content glass-card flex flex-col items-center gap-3 px-4 py-5 min-w-[130px] cursor-default">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12"
                                    style={{ background: `${agent.color}20`, border: `1px solid ${agent.color}40` }}
                                >
                                    <Icon size={20} style={{ color: agent.color }} />
                                </div>
                                <div className="text-center">
                                    <div className="text-xs font-semibold text-white/90">{agent.name}</div>
                                    <div className="text-[10px] font-mono text-white/40 mt-0.5">{agent.desc}</div>
                                </div>
                                {/* Status indicator */}
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-bio-green" style={{ boxShadow: '0 0 8px #10B981' }} />
                                    <span className="text-[9px] font-mono text-bio-green/70 uppercase">Ready</span>
                                </div>
                              </div>
                            </div>

                            {/* Connector line */}
                            {i < agents.length - 1 && (
                                <div className="pipeline-connector flex items-center mx-1" style={{ transformOrigin: 'left' }}>
                                    <div className="relative w-8 h-[2px] overflow-hidden" style={{ background: 'rgba(37,99,235,0.2)' }}>
                                        <div className="flow-dot absolute top-0 left-0 w-3 h-full" style={{ background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }} />
                                    </div>
                                    <ArrowRight size={12} className="text-plasma/40 pipeline-line" />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}

// ── SOCIAL PROOF STRIP ───────────────────────────────────────────────
function SocialProof() {
    const partners = ['Airia', 'PubMed', 'Open Targets', 'ClinicalTrials.gov', 'Owkin'];
    return (
        <div className="w-full py-8 mt-8" style={{ background: '#111827', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">Powered by</span>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {partners.map(name => (
                        <span key={name} className="font-mono text-xs tracking-wider text-white/30 hover:text-white/60 transition-colors cursor-default uppercase">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── HERO SECTION ─────────────────────────────────────────────────────
export function HeroSection() {
    const contentRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        if (!contentRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 0.9,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.4,
            });
        }, contentRef);
        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e) => {
        if (!titleRef.current) return;
        const rect = titleRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        titleRef.current.style.transform = `skew(${dx * 2}deg, ${dy * 1}deg)`;
        titleRef.current.style.textShadow = `${dx * -8}px ${dy * -5}px 40px rgba(37,99,235,0.5)`;
    };

    const handleMouseLeave = () => {
        if (!titleRef.current) return;
        titleRef.current.style.transform = '';
        titleRef.current.style.textShadow = '';
    };

    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex flex-col overflow-hidden"
        >
            {/* 21st.dev Spiral Animation Background — now fixed via component */}
            <SpiralAnimation />

            {/* Aurora Glows */}
            <div className="aurora-bg">
                <div className="aurora-1" />
                <div className="aurora-2" />
            </div>

            {/* Gradient overlays */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, rgba(10,22,40,0.2) 0%, rgba(10,22,40,0.5) 50%, rgba(10,22,40,0.95) 90%, #0A1628 100%)',
                    zIndex: 1,
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)',
                    zIndex: 1,
                }}
            />

            {/* Hero content */}
            <div
                ref={contentRef}
                className="relative flex-1 flex flex-col items-center justify-center text-center w-full px-6 md:px-12 pt-28 pb-8"
                style={{ zIndex: 3, maxWidth: '1100px', margin: '0 auto' }}
            >
                {/* Badge */}
                <div className="flex items-center gap-2.5 mb-8">
                    <span className="status-dot" />
                    <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: '#10B981' }}>
                        Airia Active Agents Hackathon · Track 2
                    </span>
                </div>

                {/* Headline */}
                <h1
                    ref={titleRef}
                    className="mouse-text-effect cursor-default select-none mb-6 animate-float"
                    style={{ transition: 'transform 0.15s ease, text-shadow 0.15s ease' }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <span
                        className="block font-display font-semibold leading-[0.95] text-white"
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '-0.04em' }}
                    >
                        Compress weeks of drug discovery
                    </span>
                    <span
                        className="block font-display font-semibold leading-[0.95] mt-3"
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '-0.04em' }}
                    >
                        research into{' '}
                        <span className="text-shimmer" style={{
                            background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            8 minutes.
                        </span>
                    </span>
                </h1>

                {/* Sub-headline */}
                <p className="font-sans text-base md:text-lg max-w-2xl mb-10 leading-relaxed" style={{ color: 'rgba(248,250,252,0.55)' }}>
                    NexusRx deploys a coordinated fleet of AI agents across PubMed, Open Targets,
                    ClinicalTrials.gov, and more — then delivers a structured research brief, automatically.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <a
                        href="#demo"
                        className="btn-shimmer btn-magnetic inline-flex items-center gap-2.5 px-8 py-3.5 font-semibold rounded-full text-sm text-white"
                    >
                        <span className="btn-slide" />
                        <Zap size={16} />
                        <span>Try NexusRx Free</span>
                    </a>
                    <a
                        href="https://github.com/vilsee/nexusrx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-magnetic inline-flex items-center gap-2.5 px-8 py-3.5 font-semibold rounded-full text-sm"
                        style={{ background: 'transparent', color: '#F8FAFC', border: '1px solid rgba(37,99,235,0.4)' }}
                    >
                        <span className="btn-slide" style={{ background: 'rgba(37,99,235,0.1)' }} />
                        <Github size={16} />
                        <span>View on GitHub</span>
                    </a>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
                    {[
                        ['5', 'AI Agents'],
                        ['< 90s', 'Pipeline'],
                        ['5', 'MCP Sources'],
                        ['OSS', 'MIT Licensed'],
                    ].map(([val, label]) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                            <span className="font-display font-semibold text-xl md:text-2xl" style={{ color: '#2563EB' }}>{val}</span>
                            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(248,250,252,0.35)' }}>{label}</span>
                        </div>
                    ))}
                </div>

                {/* Agent Pipeline */}
                <AgentPipeline />
            </div>

            {/* Social Proof */}
            <div style={{ position: 'relative', zIndex: 3 }}>
                <SocialProof />
            </div>
        </section>
    );
}
