import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Shield, Zap, Eye, Lock, Globe, Server, Cpu, Database, 
  ArrowRight, Terminal, Copy, Check, Menu, X, ChevronRight, Activity
} from 'lucide-react';
import SplineHero from '../components/SplineHero';

gsap.registerPlugin(ScrollTrigger);

// ── NAVBAR ───────────────────────────────────────────────────────────
function Navbar() {
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
        background: scrolled ? 'rgba(10,10,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '1.25rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}
    >
      <div className="flex items-center gap-8">
        <span className="font-mono text-sm font-bold tracking-tighter" style={{ color: 'var(--ghost)' }}>
          MEDREDTEAM<span style={{ color: 'var(--plasma)' }}>-SDK</span>
        </span>
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className="font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Home</NavLink>
          <NavLink to="/docs" className="font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Documentation</NavLink>
          <NavLink to="/leaderboard" className="font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Leaderboard</NavLink>
          <NavLink to="/corpus" className="font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Corpus</NavLink>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2">
            <span className="status-dot" style={{ width: 6, height: 6 }} />
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--plasma)' }}>System: Ready</span>
        </div>
        <NavLink 
          to="/dashboard"
          className="px-5 py-2 rounded-full bg-white text-void font-mono text-[10px] uppercase font-bold hover:bg-plasma hover:text-white transition-all"
        >
          Console
        </NavLink>
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 py-6 px-8 flex flex-col gap-4 md:hidden" style={{ background: 'var(--void)', borderBottom: '1px solid var(--border)' }}>
          <a href="#" className="font-mono text-xs uppercase tracking-widest" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" className="font-mono text-xs uppercase tracking-widest" onClick={() => setMenuOpen(false)}>Documentation</a>
        </div>
      )}
    </nav>
  );
}

// ── HERO SECTION ─────────────────────────────────────────────────────
function Hero() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('pip install medrteam');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      <SplineHero />
      
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void z-[1]" />

      <div className="relative z-10 w-full max-w-[1200px] px-6 md:px-12 flex flex-col items-center text-center">
        <h1 className="font-sans font-extrabold text-4xl md:text-7xl lg:text-8xl tracking-tight mb-6 max-w-5xl leading-[0.9] text-white">
          AUTOMATED RED-TEAMING FOR MEDICAL LLMS
        </h1>
        <p className="font-mono text-sm md:text-base tracking-widest uppercase mb-12 max-w-3xl text-white/50 leading-relaxed">
          EXPOSE HALLUCINATIONS, JAILBREAKS, AND DATA LEAKAGE BEFORE DEPLOYMENT. NATIVE LANGCHAIN & LLAMAINDEX INTEGRATION.
        </p>

        <div className="flex flex-col items-center gap-8 w-full max-w-lg">
            {/* Status Label */}
            <div className="px-4 py-1.5 rounded-full border border-plasma/30 bg-plasma/5 flex items-center gap-3">
                <span className="status-dot" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-plasma">SYSTEM_STATUS: READY</span>
            </div>

            {/* Terminal Block */}
            <div 
                onClick={handleCopy}
                className="w-full card-surface group cursor-pointer overflow-hidden transition-all hover:border-plasma/40"
                style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '1rem' }}
            >
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Terminal_Command_Input</span>
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-white/20 group-hover:text-plasma transition-colors" />}
                </div>
                <div className="p-6 font-mono text-sm flex items-center gap-3">
                    <span className="text-plasma">$</span>
                    <span className="text-white font-medium">pip install medrteam</span>
                    <span className="ml-auto font-mono text-[10px] text-white/20 uppercase">v1.0.4-stable // system ready</span>
                </div>
            </div>

            <NavLink 
                to="/docs" 
                className="btn-magnetic px-10 py-4 font-mono text-[11px] uppercase tracking-widest rounded-full"
                style={{ background: 'var(--ghost)', color: 'var(--void)' }}
            >
                <span className="btn-slide" style={{ background: 'rgba(0,0,0,0.1)' }} />
                Read Docs
            </NavLink>
        </div>
      </div>
    </section>
  );
}

// ── CORE CAPABILITIES ────────────────────────────────────────────────
function CoreCapabilities() {
  const caps = [
    {
      title: 'ADVERSARIAL_INJECTION',
      desc: 'Automated testing for jailbreaks and custom surgical prompts designed to bypass safety guardrails in medical-tuned LLMs.'
    },
    {
      title: 'DOSAGE_HALLUCINATION',
      desc: 'Deep scanning for fatal dosage hallucinations and incorrect drug-to-drug interactions through structured attack vectors.'
    },
    {
      title: 'PII_LEAKAGE_DETECTION',
      desc: 'Verification of HIPAA compliance through automated patient-identifiable information leakage stress tests.'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-plasma mb-4">Core_System_Capabilities</p>
        <div className="h-px w-24 bg-plasma/30 mb-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caps.map((cap, i) => (
          <div key={i} className="flex flex-col gap-6 p-8 card-surface h-full">
            <h3 className="font-mono text-sm font-bold tracking-widest text-white">{cap.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed font-sans">{cap.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/30">[ STATUS: OPERATIONAL_CI_CD_READY ]</div>
        <NavLink to="/docs/api" className="font-mono text-[10px] uppercase tracking-[0.2em] text-plasma underline underline-offset-8 decoration-plasma/30 hover:decoration-plasma transition-all">TERMINAL_DOCS</NavLink>
      </div>
    </section>
  );
}

// ── ECOSYSTEM CONNECTORS ─────────────────────────────────────────────
function EcosystemConnectors() {
  const connectors = [
      { name: 'LANGCHAIN', desc: 'ADVERSARIAL PROMPT CHAINING AND AGENTIC OVERRIDES.' },
      { name: 'HUGGINGFACE', desc: 'DIRECT INFERENCE ATTACKS ON OPEN-WEIGHT CLINICAL MODELS.' },
      { name: 'LLAMAINDEX', desc: 'EXTRACT POTENTIAL PII FROM VECTOR DATABASE RETRIEVALS.' },
      { name: 'GRADIENT AI', desc: 'SCALABLE GPU-BACKED ADVERSARIAL TESTING PIPELINES.' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-plasma mb-4">[ NATIVE_INTEGRATIONS ]</p>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight text-white mb-4">ECOSYSTEM CONNECTORS</h2>
            <p className="font-mono text-[10px] tracking-widest text-white/20 uppercase tracking-[0.2em]">TARGET: SECURE_CI_CD_DEPLOYMENT</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectors.map((c, i) => (
                <div key={i} className="p-8 border border-white/5 hover:border-plasma/20 transition-colors flex flex-col gap-6">
                    <h4 className="font-mono text-xs font-bold text-plasma tracking-widest">{c.name}</h4>
                    <p className="font-mono text-[10px] leading-relaxed text-white/40 tracking-wider uppercase">{c.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

// ── INFRASTRUCTURAL CORE ─────────────────────────────────────────────
function InfrastructuralCore() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3">
            <h2 className="font-sans font-extrabold text-4xl mb-8 text-white">Infrastructural Core</h2>
            <p className="text-white/50 leading-loose text-base max-w-xl">
                Deployed on high-performance GPU-backed nodes. Our infrastructure leverages DigitalOcean Gradient AI for sub-second inference latency, wrapped in a production-grade Next.js command dashboard. Automated pipeline integrity is maintained through strict CI/CD integration.
            </p>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
            <div className="p-8 card-surface flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">System Status</span>
                <div className="flex items-center justify-between">
                    <span className="font-mono text-lg font-bold text-white tracking-widest">ONLINE // SECTOR 07</span>
                    <Activity size={18} className="text-plasma animate-pulse" />
                </div>
            </div>
            <div className="p-8 card-surface flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Inference Latency</span>
                <span className="font-mono text-lg font-bold text-white tracking-widest">142MS AVG</span>
            </div>
        </div>
    </section>
  );
}

// ── SECURE YOUR MODELS ───────────────────────────────────────────────
function SecureYourModels() {
  return (
    <section className="py-32 px-6 md:px-12 text-center bg-white/[0.03]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-10 text-white leading-[1.1]">
                AUTOMATE ADVERSARIAL RED-TEAMING FOR MEDICAL LLMS
            </h2>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase leading-relaxed max-w-2xl mb-12">
                DEPLOY THE SDK INTO YOUR CI/CD PIPELINE TO DETECT HALLUCINATIONS, JAILBREAKS, AND DATA LEAKAGE BEFORE PRODUCTION. SECURE SYSTEM ARCHITECTURE WITH ONE PIP INSTALL.
            </p>
            <div className="flex items-center gap-6">
                 <div className="h-px w-12 bg-white/10" />
                 <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-plasma">SYSTEM STATUS: ACTIVE // OPEN SOURCE</span>
                 <div className="h-px w-12 bg-white/10" />
            </div>
        </div>
    </section>
  );
}

// ── THREAT VECTORS ───────────────────────────────────────────────────
function ThreatVectors() {
  const vectors = [
    { num: '01', title: 'DOSAGE_HALLUCINATION', risk: 'CRITICAL_RISK', desc: 'Automated testing for lethal dosage hallucinations in pharmacy-integrated LLM pipelines. Validates against FDA standard datasets.' },
    { num: '02', title: 'CONSENT_BYPASS', risk: 'SECURITY_BREACH', desc: 'Heuristic-based adversarial attacks targeting safety filters. Focuses on illicit surgical procedures and restricted pharmaceutical advice.' },
    { num: '03', title: 'DATA_EXFILTRATION', risk: 'HIPAA_VIOLATION', desc: 'Probing for protected health information leakage in weights and cached inference. Uses custom entropy-based detection logic.' },
    { num: '04', title: 'PIPELINE_INTEGRATION', risk: 'AUTOMATED_RED_TEAM', desc: 'Native drop-in support for GitHub Actions and GitLab CI. Generates compliant reports for medical device software certification.' },
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="mb-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-plasma mb-4">Threat_Vectors_Overview</p>
            <h2 className="font-sans font-extrabold text-4xl text-white">ANALYSIS SUITE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {vectors.map((v, i) => (
                <div key={i} className="flex flex-col gap-6 p-8 border border-white/5 hover:bg-white/[0.01] transition-all group">
                    <div className="flex items-start justify-between">
                        <span className="font-mono text-xl font-bold text-plasma/40 group-hover:text-plasma transition-colors">{v.num}</span>
                        <span className="px-3 py-1 rounded bg-red-500/10 text-red-400 font-mono text-[9px] uppercase tracking-widest border border-red-500/20">{v.risk}</span>
                    </div>
                    <h3 className="font-mono text-lg font-bold text-white tracking-widest">{v.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                    <div className="mt-4 font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]">MEDRED_PROTOCOL_V4.1</div>
                </div>
            ))}
        </div>

        <div className="mt-20 py-8 border-y border-white/5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-plasma animate-pulse">[SYSTEM_READY]</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">V.1.0.4 stable build</span>
        </div>
    </section>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────
function Footer() {
    return (
        <footer className="py-16 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                    © 2026 MEDREDTEAM-SDK. ALL RIGHTS RESERVED.
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-plasma">
                    [ADVERSARIAL_PROTOCOL_V.1.0]
                </div>
            </div>
        </footer>
    );
}

// ── LANDING PAGE ─────────────────────────────────────────────────────
export default function Landing() {
  return (
    <div className="bg-void text-ghost selection:bg-plasma selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CoreCapabilities />
      <EcosystemConnectors />
      <InfrastructuralCore />
      <SecureYourModels />
      <ThreatVectors />
      <Footer />
    </div>
  );
}
