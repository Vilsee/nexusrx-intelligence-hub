import React from 'react';

export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden"
            style={{ background: 'var(--graphite)', borderRadius: '4rem 4rem 0 0', marginTop: '4rem' }}
        >
            <div className="px-8 md:px-16 pt-16 pb-10" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
                    {/* Brand */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <div className="font-sans font-extrabold text-2xl" style={{ color: 'var(--ghost)', letterSpacing: '-0.03em' }}>
                            MedRed<span style={{ color: 'var(--plasma)' }}>Team</span>
                            <span className="font-mono text-sm ml-1" style={{ color: 'var(--plasma)', opacity: 0.6 }}>-SDK</span>
                        </div>
                        <p className="text-sm max-w-xs" style={{ color: 'rgba(240,239,244,0.4)', lineHeight: 1.8 }}>
                            Open-source adversarial red-teaming SDK for medical LLMs. MIT License. Built for the #75HER Challenge Hackathon 2026.
                        </p>
                        {/* System Operational status */}
                        <div className="flex items-center gap-2 mt-2">
                            <span className="status-dot" />
                            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(240,239,244,0.35)' }}>
                                System Operational
                            </span>
                        </div>
                    </div>

                    {/* Nav columns */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(240,239,244,0.3)' }}>Product</h4>
                        {['Features', 'Architecture', 'Protocol', 'Get Started'].map(l => (
                            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} className="hover-lift text-sm" style={{ color: 'rgba(240,239,244,0.5)' }}
                                onMouseEnter={e => e.target.style.color = 'var(--plasma)'}
                                onMouseLeave={e => e.target.style.color = 'rgba(240,239,244,0.5)'}
                            >{l}</a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(240,239,244,0.3)' }}>Project</h4>
                        {['GitHub', 'PRD', 'PyPI', 'Hackathon'].map(l => (
                            <a key={l} href="#" className="hover-lift text-sm" style={{ color: 'rgba(240,239,244,0.5)' }}
                                onMouseEnter={e => e.target.style.color = 'var(--plasma)'}
                                onMouseLeave={e => e.target.style.color = 'rgba(240,239,244,0.5)'}
                            >{l}</a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
                    style={{ borderTop: '1px solid rgba(123,97,255,0.12)' }}
                >
                    <div className="flex flex-wrap gap-6">
                        {['MIT License', 'Privacy', 'Terms'].map(l => (
                            <a key={l} href="#" className="font-mono text-xs" style={{ color: 'rgba(240,239,244,0.25)' }}>{l}</a>
                        ))}
                    </div>
                    <div className="font-mono text-xs text-right" style={{ color: 'rgba(240,239,244,0.25)', lineHeight: 1.8 }}>
                        <div>PRD v1.0 · Author: Vilsee Kumar Shandilya</div>
                        <div>#75HER Challenge 2026 · Built on DigitalOcean Gradient AI</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
