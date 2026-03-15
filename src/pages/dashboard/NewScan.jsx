import React, { useState } from 'react';
import { 
    ChevronRight, CheckCircle2, Shield, Zap, Target, 
    Settings, Play, ArrowRight, ArrowLeft, Loader2
} from 'lucide-react';

const StepIndicator = ({ current, total }) => (
    <div className="flex items-center gap-4 mb-12">
        {Array.from({ length: total }).map((_, i) => (
            <React.Fragment key={i}>
                <div className={`flex items-center gap-3 ${i + 1 <= current ? 'text-plasma' : 'text-white/20'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold border-2 ${i + 1 === current ? 'border-plasma bg-plasma/10' : i + 1 < current ? 'border-plasma bg-plasma text-void' : 'border-white/10'}`}>
                        {i + 1 < current ? <CheckCircle2 size={16} /> : i + 1}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:block">Step {i + 1}</span>
                </div>
                {i < total - 1 && <div className={`h-px w-12 ${i + 1 < current ? 'bg-plasma' : 'bg-white/10'}`} />}
            </React.Fragment>
        ))}
    </div>
);

export default function NewScan() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [config, setConfig] = useState({
        target: '',
        attacks: [],
        provider: 'gradient'
    });

    const handleLaunch = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // In a real app, redirect to result
            window.location.hash = '/dashboard';
        }, 3000);
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-4xl mx-auto">
            <header className="mb-12">
                <h1 className="text-4xl font-sans font-black tracking-tight text-white mb-2 uppercase">Protocol Initialization</h1>
                <p className="text-white/40 font-mono text-[11px] uppercase tracking-widest leading-relaxed">
                    Configure adversarial attack vectors for medical LLM stress testing.
                </p>
            </header>

            <StepIndicator current={step} total={3} />

            {/* Step 1: Target Selection */}
            {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {['llama-3-med-70b', 'gpt-4o-clinical', 'med-gemma-7b', 'claude-3-opus'].map((model) => (
                            <button 
                                key={model}
                                onClick={() => setConfig({...config, target: model})}
                                className={`p-8 rounded-2xl border transition-all text-left flex items-start gap-6 group
                                    ${config.target === model ? 'bg-plasma/10 border-plasma border-2 ring-4 ring-plasma/5' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}
                                `}
                            >
                                <div className={`p-3 rounded-xl ${config.target === model ? 'bg-plasma text-void' : 'bg-white/5 text-white/40 group-hover:text-plasma'} transition-colors`}>
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-1">{model}</h3>
                                    <p className="text-[11px] text-white/40 uppercase font-mono tracking-tighter">Clinical_Model_Verified // High_Latency_Inference</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 2: Attack Configuration */}
            {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { id: 'pii', name: 'PII EXFILTRATION', icon: Shield, desc: 'Stress test patient data leakage via weights probing.' },
                            { id: 'dosage', name: 'DOSAGE HALLUCINATION', icon: Zap, desc: 'Trigger toxic pharmaceutical dosage errors via adversarial Clinical prompts.' },
                            { id: 'consent', name: 'CONSENT BYPASS', icon: Shield, desc: 'Bypass authorization filters for restricted diagnostics.' }
                        ].map((at) => (
                            <div 
                                key={at.id}
                                className={`p-6 rounded-2xl border flex items-center justify-between transition-all
                                    ${config.attacks.includes(at.id) ? 'bg-plasma/5 border-plasma/30' : 'bg-white/[0.01] border-white/5'}
                                `}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`p-2 rounded-lg ${config.attacks.includes(at.id) ? 'bg-plasma text-void' : 'bg-white/5 text-white/20'}`}>
                                        <at.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-mono text-xs font-bold text-white tracking-widest">{at.name}</h3>
                                        <p className="text-[11px] text-white/40 uppercase tracking-tighter font-mono">{at.desc}</p>
                                    </div>
                                </div>
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 accent-plasma" 
                                    checked={config.attacks.includes(at.id)}
                                    onChange={(e) => {
                                        if (e.target.checked) setConfig({...config, attacks: [...config.attacks, at.id]});
                                        else setConfig({...config, attacks: config.attacks.filter(x => x !== at.id)});
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] space-y-8">
                        <div className="flex items-center justify-between border-b border-white/5 pb-6">
                            <span className="font-mono text-[10px] uppercase text-white/30 tracking-widest">Target Configuration</span>
                            <span className="font-mono text-[10px] uppercase text-plasma font-bold tracking-widest">{config.target}</span>
                        </div>
                        <div className="space-y-4">
                            <span className="font-mono text-[10px] uppercase text-white/30 tracking-widest">Active Vectors</span>
                            <div className="flex flex-wrap gap-2">
                                {config.attacks.map(a => (
                                    <span key={a} className="px-3 py-1 rounded bg-plasma/10 border border-plasma/20 text-plasma font-mono text-[9px] uppercase font-bold tracking-widest">
                                        {a}_audit_v1
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-void/50 border border-plasma/20 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Loader2 className="text-plasma animate-spin" size={20} />
                                <span className="font-mono text-[10px] uppercase text-white tracking-widest">Inference Provider: GRADIENT_AI (High Priority)</span>
                            </div>
                            <span className="font-mono text-[10px] text-green-500 font-bold uppercase tracking-widest">Ready</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-16 flex items-center justify-between">
                <button 
                    onClick={() => setStep(s => s - 1)}
                    disabled={step === 1 || loading}
                    className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/5 text-white/40 hover:text-white transition-all disabled:opacity-0"
                >
                    <ArrowLeft size={18} />
                    <span className="font-mono text-[11px] uppercase font-bold tracking-widest">Previous Phase</span>
                </button>

                {step < 3 ? (
                    <button 
                        onClick={() => setStep(s => s + 1)}
                        disabled={step === 1 && !config.target}
                        className="btn-magnetic px-10 py-4 font-mono text-[11px] uppercase tracking-widest rounded-full bg-white text-void font-bold shadow-xl flex items-center gap-3 disabled:opacity-20"
                    >
                        Next Configuration <ArrowRight size={18} />
                    </button>
                ) : (
                    <button 
                        onClick={handleLaunch}
                        disabled={loading}
                        className="btn-magnetic px-12 py-4 font-mono text-[11px] uppercase tracking-widest rounded-full bg-plasma text-white font-black shadow-[0_0_40px_rgba(159,101,243,0.4)] flex items-center gap-3 hover:scale-105 transition-all"
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
                        {loading ? 'INITIALIZING_AUDIT...' : 'START ADVERSARIAL AUDIT'}
                    </button>
                )}
            </div>
        </div>
    );
}
