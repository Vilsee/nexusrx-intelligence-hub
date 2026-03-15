import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TIERS = [
    {
        name: 'Essential',
        badge: 'OSS Free',
        desc: 'For individual researchers and open-source projects.',
        features: ['pip install medrteam', 'Full jailbreak suite (87 prompts)', 'HallucinationScorer', 'JSON + Markdown reports'],
        cta: 'Get Started Free',
        href: '#get-started',
        featured: false,
    },
    {
        name: 'Performance',
        badge: 'Most Popular',
        desc: 'For MLOps teams running clinical AI in production.',
        features: ['Everything in Essential', 'BiasAuditor (4 demographic axes)', 'pytest plugin + CI/CD template', 'Configurable thresholds via YAML', 'Priority GitHub support'],
        cta: 'Star on GitHub',
        href: 'https://github.com',
        featured: true,
    },
    {
        name: 'Enterprise',
        badge: 'Custom',
        desc: 'For health AI companies needing compliance artefacts.',
        features: ['Everything in Performance', 'PDF-ready audit reports', 'Custom attack taxonomy', 'LiteLLM — any LLM provider', 'Dedicated onboarding'],
        cta: 'Contact Us',
        href: 'mailto:medrteam@example.com',
        featured: false,
    },
];

export default function PricingSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.tier-card', {
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="get-started" ref={sectionRef} className="py-28 px-6 md:px-16" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p className="section-tag mb-4">06 / Get Started</p>
            <h2 className="font-sans font-extrabold mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--ghost)', letterSpacing: '-0.03em' }}>
                Open-source, <span style={{ color: 'var(--plasma)' }}>forever.</span>
            </h2>
            <p className="mb-14 max-w-lg" style={{ color: 'rgba(240,239,244,0.5)', fontSize: '1rem', lineHeight: 1.8 }}>
                MedRedTeam-SDK is MIT licensed. Scale up with community support or bring us into your enterprise pipeline.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                {TIERS.map(({ name, badge, desc, features, cta, href, featured }) => (
                    <div
                        key={name}
                        className="tier-card rounded-4xl flex flex-col gap-5 p-7"
                        style={{
                            background: featured ? 'var(--plasma)' : 'var(--surface)',
                            border: `1px solid ${featured ? 'var(--plasma)' : 'var(--border)'}`,
                            transform: featured ? 'scale(1.04)' : 'scale(1)',
                            boxShadow: featured ? '0 0 60px rgba(123,97,255,0.3)' : 'none',
                        }}
                    >
                        <div className="flex items-start justify-between">
                            <h3 className="font-sans font-bold text-xl" style={{ color: featured ? '#fff' : 'var(--ghost)' }}>{name}</h3>
                            <span
                                className="font-mono text-[10px] px-2 py-1 rounded-full tracking-wider uppercase"
                                style={{ background: featured ? 'rgba(255,255,255,0.2)' : 'rgba(123,97,255,0.12)', color: featured ? '#fff' : 'var(--plasma)' }}
                            >{badge}</span>
                        </div>
                        <p className="text-sm" style={{ color: featured ? 'rgba(255,255,255,0.75)' : 'rgba(240,239,244,0.5)', lineHeight: 1.7 }}>{desc}</p>
                        <ul className="flex flex-col gap-2.5 flex-1">
                            {features.map(f => (
                                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: featured ? 'rgba(255,255,255,0.85)' : 'rgba(240,239,244,0.65)' }}>
                                    <span style={{ color: featured ? '#fff' : 'var(--plasma)', flexShrink: 0 }}>✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={href}
                            className="btn-magnetic block text-center py-3 rounded-full font-semibold text-sm mt-2"
                            style={{
                                background: featured ? '#fff' : 'var(--plasma)',
                                color: featured ? 'var(--plasma)' : '#fff',
                            }}
                        >
                            <span className="btn-slide" />
                            <span>{cta}</span>
                        </a>
                    </div>
                ))}
            </div>

            {/* Quick-start terminal */}
            <div className="mt-16 rounded-3xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid var(--border)', maxWidth: '640px' }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--border)', background: 'rgba(0,0,0,0.4)' }}>
                    {['#FF5F57', '#FEBC2E', '#28C840'].map(c => <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
                    <span className="ml-auto font-mono text-xs" style={{ color: 'rgba(240,239,244,0.3)' }}>medrteam-sdk — bash</span>
                </div>
                <div className="p-5 font-mono text-xs flex flex-col gap-1.5">
                    {[
                        { p: '$ ', cmd: 'pip install medrteam', style: { color: 'var(--ghost)' } },
                        { out: 'Successfully installed medrteam-sdk-0.1.0', style: { color: 'rgba(240,239,244,0.4)' } },
                        { p: '$ ', cmd: 'medrteam run --model gpt-4o --suite medical_safety', style: { color: 'var(--ghost)' } },
                        { out: '⠸ Running 87-prompt jailbreak suite...', style: { color: '#FFB627' } },
                        { out: '⚠  BIAS DETECTED — disparity score: 0.34', style: { color: '#FF3D57' } },
                        { out: '✓  Jailbreak resistance: 96.2% (PASS)', style: { color: '#00FF96' } },
                        { out: '✓  Report → ./reports/safety_2026-03-07.json', style: { color: '#00FF96' } },
                    ].map((line, i) => (
                        <div key={i}>
                            {line.p && <span style={{ color: 'var(--plasma)' }}>{line.p}</span>}
                            <span style={line.style}>{line.cmd || line.out}</span>
                            {i === 6 && <span className="cursor-blink inline-block w-1.5 h-3 ml-1 align-middle" style={{ background: 'var(--plasma)' }} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
