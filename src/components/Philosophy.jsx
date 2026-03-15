import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleCanvas from './ParticleCanvas';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Word-by-word reveal on scroll
            const words = textRef.current.querySelectorAll('.word-reveal');
            gsap.from(words, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.04,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 70%',
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const wrapWords = (text, colorClass) =>
        text.split(' ').map((w, i) => (
            <span key={i} className="word-reveal inline-block mr-[0.25em]" style={colorClass ? { color: colorClass } : {}}>
                {w}
            </span>
        ));

    return (
        <section
            id="philosophy"
            ref={sectionRef}
            className="relative py-32 overflow-hidden"
            style={{ background: 'var(--graphite)' }}
        >
            {/* Parallax texture: AnimatedLiquidBackground — CSS native */}
            <div className="liquid-bg absolute inset-0 opacity-30" />
            <ParticleCanvas className="absolute inset-0" opacity={0.15} />

            <div className="relative z-10 px-6 md:px-16" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <p className="section-tag mb-10">The Manifesto</p>

                <blockquote ref={textRef} className="max-w-3xl">
                    <p className="font-sans font-light mb-8" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(240,239,244,0.5)', lineHeight: 1.9 }}>
                        {wrapWords('Most clinical AI safety testing focuses on: manual expert review, ad-hoc prompt tweaks, and hope.')}
                    </p>
                    <p className="font-serif italic leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', color: 'var(--ghost)', letterSpacing: '-0.02em' }}>
                        {wrapWords('We focus on: ')}
                        {wrapWords('adversarial automation.', 'var(--plasma)')}
                    </p>
                </blockquote>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { stat: '≥85%', label: 'Hallucination Recall', desc: 'DeBERTa-v3-NLI detects seeded factual errors reliably' },
                        { stat: '<10m', label: 'Full Suite Runtime', desc: 'CPU-only, 16GB RAM — no exotic hardware required' },
                        { stat: '4 axes', label: 'Bias Dimensions', desc: 'Gender · Ethnicity · Insurance · Age — all auditable' },
                    ].map(({ stat, label, desc }) => (
                        <div key={label} className="flex flex-col gap-2 p-6 rounded-2xl" style={{ background: 'rgba(123,97,255,0.07)', border: '1px solid rgba(123,97,255,0.15)' }}>
                            <span className="font-sans font-extrabold" style={{ fontSize: '2.2rem', color: 'var(--plasma)', lineHeight: 1 }}>{stat}</span>
                            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240,239,244,0.5)' }}>{label}</span>
                            <span className="text-sm" style={{ color: 'rgba(240,239,244,0.4)', lineHeight: 1.7 }}>{desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
