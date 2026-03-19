import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Zap, BookOpen, Target, FlaskConical, FileText, Brain,
  ArrowRight, Terminal, Copy, Check, Send, Loader2,
  Shield, Globe, Server, Database, Activity, ChevronRight,
  Beaker, BarChart3, FileSearch, Microscope
} from 'lucide-react';
import Navbar, { HeroSection } from '../components/NavHero';
import { CelestialSphere } from '../components/ui/CelestialSphere';
import AnoAIBackground from '../components/ui/AnoAIBackground';

gsap.registerPlugin(ScrollTrigger);

// ── HOW IT WORKS ─────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Type Your Query',
      desc: 'Enter a gene, disease, or compound in natural language. NexusRx understands the language of molecular biology.',
      icon: Terminal,
      example: '"BRCA2 PARP inhibitor ovarian cancer"'
    },
    {
      num: '02',
      title: 'Agents Activate',
      desc: '5 specialized AI agents run in parallel — mining PubMed, validating targets on Open Targets, mapping clinical trials, and more.',
      icon: Brain,
      example: '5 agents · parallel execution · < 90s'
    },
    {
      num: '03',
      title: 'Human-in-the-Loop',
      desc: 'Low-confidence findings surface for researcher review. You stay in control — the AI augments, never replaces.',
      icon: Shield,
      example: 'Confidence gate at 60% threshold'
    },
    {
      num: '04',
      title: 'Research Brief Delivered',
      desc: 'A structured, auditable research brief with citations, evidence strength ratings, and recommended next steps.',
      icon: FileText,
      example: 'PDF + Markdown + JSON outputs'
    },
  ];

  return (
    <section id="features" className="relative py-24 px-6 md:px-12 max-w-[1200px] mx-auto overflow-hidden">
      {/* Celestial Sphere Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <CelestialSphere 
          hue={200} 
          speed={0.2} 
          zoom={1.5} 
          particleSize={3}
          className="w-full h-full"
        />
      </div>

      {/* Aurora Glow */}
      <div className="aurora-bg">
        <div className="aurora-1 opacity-10" />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-16 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-plasma mb-4">How It Works</span>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4">
          From query to research brief in minutes
        </h2>
        <p className="text-sm text-white/40 max-w-xl">
          NexusRx orchestrates a fleet of AI agents using LangGraph, coordinating across 5 MCP data sources simultaneously.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="shiny-border group hover:scale-[1.02] transition-transform">
              <div className="shiny-border-content glass-card p-8 flex flex-col gap-5 h-full">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
                      <Icon size={24} className="text-plasma group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-mono text-xs font-bold text-plasma/60">{step.num}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <span className="font-mono text-[10px] text-white/25 uppercase tracking-wider">{step.example}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── LIVE DEMO SECTION ────────────────────────────────────────────────
function DemoSection() {
  const [query, setQuery] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(-1);
  const [agentOutputs, setAgentOutputs] = useState({});
  const [showReport, setShowReport] = useState(false);
  const [demoComplete, setDemoComplete] = useState(false);

  const exampleQueries = [
    'BRCA2 PARP inhibitor ovarian cancer',
    'KRAS G12C lung adenocarcinoma',
    'PD-L1 checkpoint immunotherapy melanoma',
    'metformin NAFLD liver fibrosis',
  ];

  const agentDefs = [
    { id: 0, name: 'Orchestrator', icon: Brain, color: '#2563EB', parseTime: 800 },
    { id: 1, name: 'Literature Intelligence', icon: BookOpen, color: '#3B82F6', parseTime: 1500 },
    { id: 2, name: 'Target Validation', icon: Target, color: '#10B981', parseTime: 1200 },
    { id: 3, name: 'Clinical Trial Intel', icon: FlaskConical, color: '#6366F1', parseTime: 1400 },
    { id: 4, name: 'Synthesis & Report', icon: FileText, color: '#8B5CF6', parseTime: 1000 },
  ];

  const getSimulatedOutputs = (q) => {
    const queryLower = q.toLowerCase();
    
    // Default context
    let target = "BRCA2";
    let disease = "ovarian cancer";
    let drug = "PARP inhibitor";
    let papers = 847;
    let druggability = "0.89";
    let association = "0.94";
    let safety = "Low hepatotoxicity risk, CYP450 interaction noted.";
    let trials = "12 active Phase III trials. 3 completed Phase II.";
    let subspace = "post-platinum-resistant subgroup";
    let recommendation = "Proceed with combination PARP + anti-PD-L1 trial in platinum-resistant cohort.";
    let strength = "0.91";

    if (queryLower.includes('kras') || queryLower.includes('lung')) {
      target = "KRAS G12C";
      disease = "lung adenocarcinoma";
      drug = "Sotorasib / Adagrasib";
      papers = 1240;
      druggability = "0.92";
      association = "0.96";
      safety = "Mild GI toxicity, potential resistance via secondary mutations.";
      trials = "8 Phase III trials, 15 Phase II trials.";
      subspace = "untreated brain metastases";
      recommendation = "Optimize combination with SHP2 inhibitors for CNS-penetrant efficacy.";
      strength = "0.88";
    } else if (queryLower.includes('pd-l1') || queryLower.includes('melanoma')) {
      target = "PD-L1 / PD-1";
      disease = "melanoma";
      drug = "Checkpoint Immunotherapy";
      papers = 3421;
      druggability = "0.98";
      association = "0.99";
      safety = "Immune-related adverse events (irAEs) monitored; high safety profile.";
      trials = "45 Phase III trials globally.";
      subspace = "LAG-3 co-expression refractory";
      recommendation = "Consider triplet therapy with LAG-3 and CTLA-4 inhibitors.";
      strength = "0.95";
    } else if (queryLower.includes('metformin') || queryLower.includes('nafld')) {
      target = "AMPK / Metformin";
      disease = "NAFLD / Liver Fibrosis";
      drug = "Antidiabetic / Anti-fibrotic";
      papers = 560;
      druggability = "0.85";
      association = "0.78";
      safety = "Lactic acidosis risk (rare), long-term safety established.";
      trials = "4 active Phase II trials for NASH/NAFLD.";
      subspace = "F3/F4 stage fibrosis cohort";
      recommendation = "Investigate synergistic effects with SGLT2 inhibitors or GLP-1 RAs.";
      strength = "0.82";
    }

    return {
      0: { status: 'complete', data: JSON.stringify({ target_entity: target, disease_context: disease, command_class: drug, agent_sequence: [1,2,3,4] }) },
      1: { status: 'complete', data: `Found ${papers} papers on PubMed. Top 20 ranked by relevance + recency. Contradiction detected between 2 meta-analyses on therapy efficacy (p < 0.05).` },
      2: { status: 'complete', data: `Druggability Score: ${druggability} | Association Score: ${association} | Safety Flags: ${safety} Tissue specificity: high in ${disease.split(' ').pop()}.` },
      3: { status: 'complete', data: `${trials} White space identified: ${subspace} (low active trial density detected).` },
      4: { status: 'complete', data: `Evidence Strength: STRONG (${strength}). Recommended: ${recommendation} Full brief generated with citations.` },
    };
  };

  const runDemo = async (selectedQuery) => {
    const q = selectedQuery || query;
    if (!q.trim()) return;
    setQuery(q);
    setIsRunning(true);
    setCurrentAgent(-1);
    setAgentOutputs({});
    setShowReport(false);
    setDemoComplete(false);

    const outputs = getSimulatedOutputs(q);

    for (let i = 0; i < agentDefs.length; i++) {
      setCurrentAgent(i);
      await new Promise(r => setTimeout(r, agentDefs[i].parseTime));
      setAgentOutputs(prev => ({ ...prev, [i]: outputs[i] }));
    }

    await new Promise(r => setTimeout(r, 500));
    setShowReport(true);
    setIsRunning(false);
    setDemoComplete(true);
  };

  return (
    <section id="demo" className="relative py-24 px-6 md:px-12 overflow-hidden" style={{ background: '#0D1B2A' }}>
      {/* Aurora Glow */}
      <div className="aurora-bg">
        <div className="aurora-1 opacity-20" />
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bio-green mb-4">Live Demo</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4">
            See NexusRx in action
          </h2>
          <p className="text-sm text-white/40 max-w-xl">
            Type a drug discovery query or pick an example below. Watch the 5-agent pipeline process it in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="shiny-border">
            <div className="shiny-border-content glass-card overflow-hidden">
              {/* Input header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Research Query</span>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
              </div>
              {/* Input area */}
              <div className="p-6 flex items-center gap-5">
                <span className="font-mono text-plasma text-lg font-bold">»</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !isRunning && runDemo()}
                  placeholder="Enter a gene, disease, or compound... e.g. BRCA2, KRAS G12C"
                  className="flex-1 bg-transparent text-white text-base font-mono outline-none placeholder:text-white/20"
                  disabled={isRunning}
                />
                <button
                  onClick={() => runDemo()}
                  disabled={isRunning || !query.trim()}
                  className="btn-shimmer flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isRunning ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {isRunning ? 'Processing...' : 'Analyze'}
                </button>
              </div>
            </div>
          </div>

          {/* Example chips */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {exampleQueries.map(eq => (
              <button
                key={eq}
                onClick={() => runDemo(eq)}
                disabled={isRunning}
                className="px-3 py-1.5 rounded-full text-[11px] font-mono transition-all hover:scale-105 disabled:opacity-30"
                style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', color: 'rgba(248,250,252,0.6)' }}
              >
                {eq}
              </button>
            ))}
          </div>
        </div>

        {/* Agent Pipeline Monitor */}
        {(isRunning || demoComplete) && (
          <div className="max-w-4xl mx-auto">
            <div className="shiny-border">
              <div className="shiny-border-content glass-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Agent Pipeline Monitor</span>
                  <div className="flex items-center gap-2">
                    <Activity size={14} className={isRunning ? "text-plasma animate-pulse" : "text-bio-green"} />
                    <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: isRunning ? '#2563EB' : '#10B981' }}>
                      {isRunning ? 'Processing...' : 'Complete'}
                    </span>
                  </div>
                </div>

                {/* Agent steps */}
                <div className="flex flex-col gap-4">
                  {agentDefs.map((agent, i) => {
                    const Icon = agent.icon;
                    const isActive = currentAgent === i;
                    const isDone = agentOutputs[i] !== undefined;

                    return (
                      <div key={agent.id} className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          {/* Status indicator */}
                          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{
                            background: isDone ? 'rgba(16,185,129,0.1)' : isActive ? 'rgba(37,99,235,0.1)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${isDone ? 'rgba(16,185,129,0.2)' : isActive ? 'rgba(37,99,235,0.3)' : 'rgba(255,255,255,0.05)'}`,
                          }}>
                            {isDone ? (
                              <Check size={14} className="text-bio-green" />
                            ) : isActive ? (
                              <Loader2 size={14} className="text-plasma animate-spin" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                            )}
                          </div>

                          {/* Agent info */}
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <Icon size={16} style={{ color: isDone ? '#10B981' : isActive ? agent.color : 'rgba(255,255,255,0.2)' }} />
                            <span className={`text-sm font-medium ${isDone ? 'text-white/80' : isActive ? 'text-white font-bold' : 'text-white/25'}`}>
                              Agent {i}: {agent.name}
                            </span>
                          </div>

                          {/* Status badge */}
                          <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded" style={{
                            background: isDone ? 'rgba(16,185,129,0.1)' : isActive ? 'rgba(37,99,235,0.15)' : 'transparent',
                            color: isDone ? '#10B981' : isActive ? '#2563EB' : 'rgba(255,255,255,0.15)',
                            border: `1px solid ${isDone ? 'rgba(16,185,129,0.2)' : isActive ? 'rgba(37,99,235,0.3)' : 'rgba(255,255,255,0.05)'}`,
                          }}>
                            {isDone ? 'Complete' : isActive ? 'Running' : 'Queued'}
                          </span>
                        </div>
                        {/* Agent output */}
                        {isDone && agentOutputs[i] && (
                          <div className="ml-11 p-4 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto" style={{ background: 'rgba(0,0,0,0.3)', color: 'rgba(248,250,252,0.5)', border: '1px solid rgba(255,255,255,0.03)' }}>
                            {agentOutputs[i].data}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Confidence bar */}
                {showReport && (
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-white/60 font-display uppercase tracking-widest">Evidence Strength</span>
                      <span className="font-mono text-sm font-bold text-bio-green">
                        STRONG — {agentOutputs[4] ? agentOutputs[4].data.match(/\((0\.\d+)\)/)[1] : '91'}%
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(agentOutputs[4] ? parseFloat(agentOutputs[4].data.match(/\((0\.\d+)\)/)[1]) : 0.91) * 100}%`, 
                          background: 'linear-gradient(90deg, #2563EB, #10B981)' 
                        }}
                      />
                    </div>
                    <div className="mt-6 p-6 rounded-2xl" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <FileText size={18} className="text-bio-green" />
                        <span className="text-sm font-bold text-bio-green font-display uppercase tracking-wider">Research Brief Generated</span>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed font-sans mt-2">
                        {agentOutputs[4] ? agentOutputs[4].data.split('Recommended: ')[1] : 'Structured research brief finalized.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ── AGENT CARDS (Detailed) ───────────────────────────────────────────
function AgentDetails() {
  const agentDetails = [
    {
      name: 'Literature Intelligence',
      mcp: 'PubMed MCP',
      icon: BookOpen,
      color: '#3B82F6',
      points: ['3 parallel searches per query', 'Top 20 papers ranked by relevance', 'Contradiction detection across findings'],
    },
    {
      name: 'Target Validation',
      mcp: 'Open Targets MCP',
      icon: Target,
      color: '#10B981',
      points: ['Druggability scorecard (0–1.0)', 'Safety flag summary', 'Tissue specificity heat map'],
    },
    {
      name: 'Clinical Trial Intel',
      mcp: 'ClinicalTrials.gov MCP',
      icon: FlaskConical,
      color: '#6366F1',
      points: ['Phase distribution mapping', 'Enrollment status tracking', 'White space opportunity flagging'],
    },
    {
      name: 'Molecular Context',
      mcp: 'Scholar Gateway + Owkin MCPs',
      icon: Microscope,
      color: '#F59E0B',
      points: ['Compound precedent analysis', 'ADMET profile summaries', 'Structural novelty scoring'],
    },
  ];

  return (
    <section id="agents" className="relative py-24 px-6 md:px-12 max-w-[1200px] mx-auto overflow-hidden">
      {/* AnoAI Shader Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <AnoAIBackground />
      </div>

      {/* Aurora Glow */}
      <div className="aurora-bg">
        <div className="aurora-2 opacity-10" />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-16 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-plasma mb-4">Specialized Agents</span>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4">
          Five agents. One intelligence pipeline.
        </h2>
        <p className="text-sm text-white/40 max-w-xl">
          Each agent is purpose-built for a specific phase of drug discovery research, powered by live MCP data sources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {agentDetails.map((agent, i) => {
          const Icon = agent.icon;
          return (
            <div key={i} className="shiny-border group hover:scale-[1.02] transition-transform">
              <div className="shiny-border-content glass-card p-8 flex flex-col gap-5 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6" style={{ background: `${agent.color}15`, border: `1px solid ${agent.color}30` }}>
                    <Icon size={24} style={{ color: agent.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{agent.name}</h3>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/30">{agent.mcp}</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 mt-2">
                  {agent.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/50">
                      <ChevronRight size={16} className="text-plasma/50 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── OPEN SOURCE CTA ──────────────────────────────────────────────────
function OpenSourceCTA() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('pip install nexusrx-core');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-32 px-6 md:px-12 text-center overflow-hidden" style={{ background: 'rgba(255,255,255,0.01)' }}>
      {/* Aurora Glow */}
      <div className="aurora-bg">
        <div className="aurora-1 opacity-10" />
        <div className="aurora-2 opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bio-green">Open Source</span>
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight">
          Every drug discovery team deserves
          <br />
          <span className="text-shimmer">
            a 24/7 AI research analyst.
          </span>
        </h2>
        <p className="text-base text-white/40 max-w-2xl leading-relaxed">
          NexusRx is MIT-licensed, composable, and model-agnostic. Run it in Docker, call it from Jupyter, or import individual agents into your own LangGraph pipeline.
        </p>

        {/* Terminal block */}
        <div className="w-full max-w-md group cursor-pointer animate-float">
          <div className="shiny-border" onClick={handleCopy}>
            <div className="shiny-border-content glass-card overflow-hidden transition-all hover:bg-white/[0.05]">
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Quick Install</span>
                {copied ? <Check size={16} className="text-bio-green" /> : <Copy size={16} className="text-white/20 group-hover:text-plasma transition-colors" />}
              </div>
              <div className="p-6 font-mono text-base flex items-center justify-center gap-4">
                <span className="text-plasma font-bold">»</span>
                <span className="text-white font-medium">pip install nexusrx-core</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <div className="h-px w-12 bg-white/10" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-plasma">From biomarker to breakthrough — autonomously.</span>
          <div className="h-px w-12 bg-white/10" />
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)' }}>
            <Zap size={12} className="text-white" />
          </div>
          <span className="font-display text-sm text-white/60">
            NexusRx
          </span>
          <span className="font-mono text-[10px] text-white/20 ml-2">v1.0 · March 2026</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
          © 2026 NexusRx. MIT License. Built for Airia AI Agents Hackathon.
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
      <HeroSection />
      <HowItWorks />
      <AgentDetails />
      <DemoSection />
      <OpenSourceCTA />
      <Footer />
    </div>
  );
}
