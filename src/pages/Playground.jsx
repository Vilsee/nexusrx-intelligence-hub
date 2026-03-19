import React, { useState } from 'react';
import { Terminal, Play, Save, Share2, Copy, Check, Info } from 'lucide-react';

export default function Playground() {
    const [code, setCode] = useState(`import medrteam
from medrteam.llm import MedicalAggregator

# Initialize the inference engine
engine = medrteam.InferenceEngine(
    provider='digitalocean',
    model='llama-3-med-70b'
)

# Run a sample safety audit
audit = MedicalAggregator(engine)
results = audit.run_attack_pipeline(['pii', 'dosage'])
print(results.summary())`);

    return (
        <div className="min-h-screen bg-void pt-24 px-6 md:px-12 pb-20">
            <header className="mb-12 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Terminal className="text-plasma" size={20} />
                        <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-plasma font-bold">SDK_Playground_Beta</span>
                    </div>
                    <h1 className="text-3xl font-sans font-black tracking-tight text-white uppercase">Live Code Editor</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 text-white/40 hover:text-white transition-all font-mono text-[10px] uppercase font-bold">
                        <Save size={14} /> Save Script
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-plasma text-white font-mono text-[10px] uppercase font-black tracking-widest shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:scale-105 transition-all">
                        <Play size={16} /> Execute Audit
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden h-[600px]">
                {/* Editor Side */}
                <div className="bg-void flex flex-col">
                    <div className="px-6 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                        <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">medrteam_script_v1.py</span>
                        <Info size={14} className="text-white/20" />
                    </div>
                    <textarea 
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="flex-1 p-8 bg-transparent text-plasma/90 font-mono text-sm leading-relaxed resize-none focus:outline-none"
                    />
                </div>

                {/* Terminal Side */}
                <div className="bg-black flex flex-col">
                    <div className="px-6 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                        <span className="font-mono text-[10px] text-green-500/40 uppercase tracking-widest">Audit Output</span>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400 opacity-30" />
                            <div className="w-2 h-2 rounded-full bg-amber-400 opacity-30" />
                            <div className="w-2 h-2 rounded-full bg-green-400 opacity-30" />
                        </div>
                    </div>
                    <div className="flex-1 p-8 font-mono text-xs text-white/60 space-y-3 overflow-y-auto">
                        <div className="flex gap-2">
                            <span className="text-plasma">$</span>
                            <span className="text-white">python medrteam_script_v1.py</span>
                        </div>
                        <div className="text-white/20 italic">// Establishing DO-Gradient Connection...</div>
                        <div className="text-green-500">[READY] Connection secure.</div>
                        <div className="text-white/40 pt-4">INITIALIZING VECTORS: ['PII', 'DOSAGE']</div>
                        <div className="text-white/40">AUDITING: llama-3-med-70b</div>
                        <div className="text-white/40 tracking-widest">..........................................</div>
                        <div className="pt-4 space-y-1">
                            <p className="text-white font-bold tracking-widest">[[ AUDIT_SUMMARY ]]</p>
                            <p className="text-white/60">PII_LEAKAGE: <span className="text-green-500 font-bold">PASSED (0.02 VIS)</span></p>
                            <p className="text-white/60">DOSAGE_HALLUCINATION: <span className="text-red-500 font-bold">FAILED (0.78 VIS)</span></p>
                        </div>
                        <div className="pt-6 text-red-400 font-bold uppercase tracking-widest animate-pulse">
                            CRITICAL_RISK: LETHAL_DOSAGE_TRIGGER_DETECTED
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
