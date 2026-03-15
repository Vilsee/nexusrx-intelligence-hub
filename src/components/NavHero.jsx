import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplineHero from './SplineHero';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-5 left-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3"
            style={{
                transform: 'translateX(-50%)',
                width: 'min(92vw, 900px)',
                borderRadius: '3rem',
                background: scrolled ? 'rgba(10,10,20,0.75)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                border: scrolled ? '1px solid rgba(123,97,255,0.2)' : '1px solid transparent',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
            }}
        >
            {/* Logo */}
            <span className="font-sans font-bold text-base tracking-tight" style={{ color: 'var(--ghost)', letterSpacing: '-0.02em' }}>
                MedRed<span style={{ color: 'var(--plasma)' }}>Team</span>
                <span className="font-mono text-xs ml-1" style={{ color: 'var(--plasma)', opacity: 0.7 }}>-SDK</span>
            </span>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
                {['Problem', 'Features', 'Architecture', 'Protocol'].map(link => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="hover-lift text-sm font-medium"
                        style={{ color: 'rgba(240,239,244,0.65)', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = 'var(--ghost)'}
                        onMouseLeave={e => e.target.style.color = 'rgba(240,239,244,0.65)'}
                    >
                        {link}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <a
                href="#get-started"
                className="btn-magnetic hidden md:flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full"
                style={{ background: 'var(--plasma)', color: '#fff' }}
            >
                <span className="btn-slide" />
                <span>Star on GitHub</span>
            </a>

            {/* Mobile hamburger */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-1"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {[0, 1, 2].map(i => (
                    <span key={i} className="block w-5 h-0.5 rounded" style={{ background: 'var(--ghost)', transition: 'all 0.3s' }} />
                ))}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="absolute top-full left-0 right-0 mt-2 py-4 px-6 flex flex-col gap-4 md:hidden"
                    style={{ background: 'rgba(10,10,20,0.95)', backdropFilter: 'blur(20px)', borderRadius: '1.5rem', border: '1px solid rgba(123,97,255,0.2)' }}
                >
                    {['Problem', 'Features', 'Architecture', 'Protocol'].map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium" style={{ color: 'var(--ghost)' }} onClick={() => setMenuOpen(false)}>
                            {link}
                        </a>
                    ))}
                    <a href="#get-started" className="btn-magnetic text-center px-5 py-2 text-sm font-semibold rounded-full" style={{ background: 'var(--plasma)', color: '#fff' }}>
                        <span className="btn-slide" />
                        <span>Star on GitHub</span>
                    </a>
                </div>
            )}
        </nav>
    );
}

export function HeroSection() {
    const contentRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current.children, {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.3,
            });
        }, contentRef);
        return () => ctx.revert();
    }, []);

    // MouseTextEffect — native mousemove, no Framer
    const handleMouseMove = (e) => {
        if (!titleRef.current) return;
        const rect = titleRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        titleRef.current.style.transform = `skew(${dx * 3}deg, ${dy * 1.5}deg)`;
        titleRef.current.style.textShadow = `${dx * -10}px ${dy * -6}px 30px rgba(123,97,255,0.6)`;
    };

    const handleMouseLeave = () => {
        if (!titleRef.current) return;
        titleRef.current.style.transform = '';
        titleRef.current.style.textShadow = '';
    };

    return (
        <section
            id="hero"
            style={{ height: '100dvh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}
        >
            {/* 3D Spline Scene with fallback */}
            <SplineHero />

            {/* Dark gradient overlay from bottom */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, rgba(10,10,20,0.98) 0%, rgba(10,10,20,0.6) 40%, rgba(10,10,20,0.1) 70%, transparent 100%)',
                    zIndex: 2,
                }}
            />

            {/* Hero content — bottom-left third */}
            <div
                ref={contentRef}
                className="relative w-full px-6 md:px-16 pb-16 md:pb-24"
                style={{ zIndex: 3, maxWidth: '900px' }}
            >
                {/* Badge */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="status-dot" />
                    <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--plasma)' }}>
                        PRD v1.0 · #75HER Hackathon · AI/ML Track
                    </span>
                </div>

                {/* Hero headline — Preset D pattern: "[Tech noun] beyond" / "[Boundary word]." */}
                <div>
                    <h1
                        ref={titleRef}
                        className="mouse-text-effect leading-none mb-2 cursor-default select-none"
                        style={{ transition: 'transform 0.15s ease, text-shadow 0.15s ease' }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span
                            className="block font-sans font-extrabold"
                            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'var(--ghost)', letterSpacing: '-0.04em' }}
                        >
                            Safety testing beyond
                        </span>
                        <span
                            className="block font-serif italic"
                            style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)', color: 'var(--plasma)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
                        >
                            assumption.
                        </span>
                    </h1>
                </div>

                <p className="font-sans font-light mt-6 mb-8 max-w-xl" style={{ color: 'rgba(240,239,244,0.65)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                    An automated adversarial red-teaming agent for medical LLM safety benchmarking — built for MLOps teams to run safety regression tests in CI/CD before deploying clinical AI.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 mb-10">
                    {[['7', 'Core Modules'], ['87', 'Attack Prompts'], ['<10m', 'Suite Runtime'], ['OSS', 'MIT Licensed']].map(([val, label]) => (
                        <div key={label} className="flex flex-col gap-1">
                            <span className="font-sans font-extrabold" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--plasma)', lineHeight: 1 }}>{val}</span>
                            <span className="font-mono uppercase tracking-widest" style={{ fontSize: '0.6rem', color: 'rgba(240,239,244,0.45)' }}>{label}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#get-started"
                        className="btn-magnetic inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full text-sm"
                        style={{ background: 'var(--plasma)', color: '#fff' }}
                    >
                        <span className="btn-slide" />
                        <span>pip install adverscan-health</span>
                    </a>
                    <a
                        href="#features"
                        className="btn-magnetic inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full text-sm"
                        style={{ background: 'transparent', color: 'var(--ghost)', border: '1px solid rgba(123,97,255,0.4)' }}
                    >
                        <span className="btn-slide" style={{ background: 'rgba(123,97,255,0.1)' }} />
                        <span>View Features</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
