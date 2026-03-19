import React from 'react';
import { Database, Shield, Zap, Lock, AlertTriangle, Eye, ChevronRight } from 'lucide-react';

const CorpusCard = ({ id, type, name, risk, description }) => (
    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group flex flex-col gap-6">
        <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-plasma font-black group-hover:scale-110 transition-transform">[{id}]</span>
            <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[8px] font-mono text-white/40 uppercase tracking-widest">{type}</span>
        </div>
        <div>
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest mb-2">{name}</h3>
            <p className="text-xs text-white/40 leading-relaxed h-12 overflow-hidden">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
                <AlertTriangle size={12} className="text-red-500" />
                <span className="text-[9px] font-mono text-red-500 uppercase font-bold">{risk}</span>
            </div>
            <button className="text-[9px] font-mono text-white/20 hover:text-white transition-colors flex items-center gap-1 group/btn">
                DETAILS <ChevronRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
);

export default function Corpus() {
    const templates = [
        { id: 'AV-01', type: 'Hallucination', name: 'Lethal Dosage Trigger', risk: 'Critical', description: 'Adversarial prompt designed to bypass weight constraints on high-toxicity pharmaceutical dosages.' },
        { id: 'AV-02', type: 'Jailbreak', name: 'Agentic Override', risk: 'High', description: 'Surgical prompt injection to force model into system-level diagnostic overrides.' },
        { id: 'AV-03', type: 'PII', name: 'Patient Exfiltration', risk: 'Medium', description: 'Forensic probing vector for patient name and ID leakage from inference cache.' },
        { id: 'AV-04', type: 'Policy', name: 'Consent Bypasser', risk: 'High', description: 'Attack vector targeting safety filters on illicit surgical procedure advice.' },
        { id: 'AV-05', type: 'Hallucination', name: 'Interaction Failure', risk: 'Critical', description: 'Tests model accuracy on complex three-way drug-to-drug interactions.' },
        { id: 'AV-06', type: 'Security', name: 'Metadata Leak', risk: 'Low', description: 'Attempts to extract model metadata and system-prompt clinical constraints.' },
    ];

    return (
        <div className="min-h-screen bg-void pt-24 px-6 md:px-12 max-w-[1200px] mx-auto pb-32">
            <header className="mb-20">
                <div className="flex items-center gap-3 mb-6">
                    <Database className="text-plasma" size={24} />
                    <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-plasma font-bold">Threat_Template_Explorer</span>
                </div>
                <h1 className="text-5xl font-sans font-black tracking-tight text-white mb-6 uppercase">Adversarial Corpus</h1>
                <p className="text-white/40 leading-relaxed font-sans text-lg max-w-2xl">
                    Browse the 48 standardized threat templates used by MedRedTeam-SDK to stress test medical LLMs. Each template is mapped to clinical safety standards.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((t, i) => (
                    <CorpusCard key={i} {...t} />
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-12 mb-12">
                {['ALL_VECTORS', 'PII_SECURITY', 'DOSAGE_STRESS', 'CLINICAL_BYPASS'].map((filter) => (
                    <button
                        key={filter}
                        className={`px-4 py-2 rounded-lg font-mono text-[9px] uppercase tracking-widest border transition-all
                            ${filter === 'ALL_VECTORS' ? 'bg-red-500 text-white border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.2)]' : 'border-white/5 text-white/30 hover:border-white/20'}
                        `}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="mt-20 p-10 border border-white/5 bg-white/[0.01] rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-plasma/10 flex items-center justify-center text-plasma border border-plasma/20">
                        <Lock size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Confidential Templates?</h3>
                        <p className="text-sm text-white/40 max-w-md italic">
                            Access to the full 480-prompt Surgical Suite is restricted to approved medical research institutions.
                        </p>
                    </div>
                </div>
                <button className="px-10 py-4 rounded-full bg-white text-void font-mono font-bold text-[11px] uppercase tracking-widest hover:scale-105 transition-all">
                    Apply for Access
                </button>
            </div>
        </div>
    );
}
