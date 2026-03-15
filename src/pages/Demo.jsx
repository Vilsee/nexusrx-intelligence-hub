import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Play, RefreshCw, Terminal as TerminalIcon,
    Shield, CheckCircle2, Globe
} from 'lucide-react';
import { useScan } from '../context/ScanContext';
import ShaderAnimation from '../components/ShaderAnimation';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const DEMO_SCRIPT = [
    "[CORRELATOR] Initializing federated surveillance network...",
    "[CORRELATOR] Connecting to Sovereign Node: INDIA-01...",
    "[CORRELATOR] Connecting to Sovereign Node: VIETNAM-04...",
    "[CORRELATOR] Connecting to Sovereign Node: THAILAND-02...",
    "[CORRELATOR] Handshake complete. Encryption: AES-256-GCM.",
    "[SIGNAL] Region: Southeast Asia - Normal baseline detected.",
    "[SIGNAL] Region: South Asia - Normal baseline detected.",
    "⚠ [ALERT] Anomaly detected in Syndromic Feed (Respiratory).",
    "⚠ [ALERT] Cluster identified: 42 cases in 6 hours (Confidence: 0.62).",
    "[CORRELATOR] Cross-checking with Laboratory Information Systems...",
    "[CORRELATOR] Lab data correlation complete. Confidence: 0.84.",
    "✓ [SUCCESS] Outbreak hypothesis confirmed: ILI (Influenza-Like Illness).",
    "[SYSTEM] Generating GHS Autonomous Report: REP-8821...",
    "[SYSTEM] Uploading vector embeddings to ASI:One relay..."
];

export default function Demo() {
    const navigate = useNavigate();
    const { generateMockReport } = useScan();
    const [act, setAct] = useState(0); // 0: Idle, 1: Activation, 2: Signals, 3: Transition, 4: Done
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState([]);
    const [configSteps, setConfigSteps] = useState({ regions: false, syndromes: [] });
    const terminalRef = useRef(null);

    const startDemo = () => {
        setAct(1);
        setProgress(10);
        setTimeout(() => setConfigSteps(prev => ({ ...prev, regions: true })), 1000);
        setTimeout(() => {
            setConfigSteps(prev => ({ ...prev, syndromes: ['ILI', 'Respiratory'] }));
            setProgress(30);
        }, 2000);
        setTimeout(() => setAct(2), 3500);
    };

    const restartDemo = () => {
        setAct(0);
        setProgress(0);
        setLogs([]);
        setConfigSteps({ regions: false, syndromes: [] });
    };

    useEffect(() => {
        if (act === 2) {
            let i = 0;
            const interval = setInterval(() => {
                if (i < DEMO_SCRIPT.length) {
                    setLogs(prev => [...prev, DEMO_SCRIPT[i]]);
                    setProgress(30 + ((i + 1) / DEMO_SCRIPT.length) * 60);
                    i++;
                } else {
                    clearInterval(interval);
                    setProgress(100);
                    setAct(3);
                }
            }, 800);
            return () => clearInterval(interval);
        }
    }, [act, generateMockReport, navigate]);

    useEffect(() => {
        if (act === 3) {
            const report = generateMockReport('demo-001');
            setTimeout(() => navigate(`/report/${report.id}`), 3000);
        }
    }, [act, generateMockReport, navigate]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="relative min-h-screen bg-[#0D0D12] overflow-hidden flex flex-col">
            <ShaderAnimation />
            <div className="relative z-10 p-10 max-w-7xl mx-auto min-h-screen flex flex-col w-full">
                <nav className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#F59E0B] rounded-xl rotate-45 flex items-center justify-center">
                            <Globe size={20} className="text-[#0D0D12] -rotate-45" />
                        </div>
                        <div>
                            <h1 className="font-black uppercase tracking-tighter text-xl leading-none">Global Surveillance Demo</h1>
                            <span className="text-[10px] font-mono text-[#F59E0B] uppercase tracking-[0.3em]">Scripted Simulation v1.0.4</span>
                        </div>
                    </div>
                    <button
                        onClick={restartDemo}
                        className="text-[10px] font-mono uppercase tracking-widest text-[#FAF8F5]/40 hover:text-[#FAF8F5] transition-colors flex items-center gap-2"
                    >
                        <RefreshCw size={12} /> Restart Simulation
                    </button>
                </nav>

                {/* PROGRESS BAR */}
                <div className="w-full bg-[#FAF8F5]/5 h-1 rounded-full overflow-hidden relative mb-10">
                    <div className="absolute inset-y-0 left-0 bg-[#F59E0B] transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>

                {/* MAIN DEMO STAGE */}
                <main className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">

                    {/* LEFT: CONFIG / ACTIVATION */}
                    <div className="space-y-8">
                        <div className={cn(
                            "bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 rounded-[2.5rem] p-10 transition-all duration-700",
                            act >= 1 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
                        )}>
                            <div className="text-[10px] font-mono text-[#F59E0B] uppercase tracking-[0.4em] mb-8">Act 1: Agent Activation</div>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold uppercase tracking-tight">Focus Region</span>
                                    <span className={cn("text-xs font-mono", configSteps.regions ? "text-green-500" : "text-[#FAF8F5]/20")}>
                                        {configSteps.regions ? "SOUTHEAST ASIA (10 COUNTRS)" : "SELECTING..."}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[9px] font-mono uppercase text-[#FAF8F5]/30">Syndrome Suite</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['ILI', 'Respiratory', 'GI', 'Haemorrhagic', 'Neurological', 'Unknown'].map((s, i) => (
                                            <div key={i} className={cn(
                                                "px-4 py-2 rounded-lg border text-[10px] font-mono flex items-center justify-between transition-all duration-500",
                                                configSteps.syndromes.includes(s)
                                                    ? "bg-[#F59E0B]/10 border-[#F59E0B]/30 text-[#F59E0B]"
                                                    : "bg-transparent border-[#FAF8F5]/5 text-[#FAF8F5]/20"
                                            )}>
                                                {s}
                                                {configSteps.syndromes.includes(s) && <CheckCircle2 size={10} />}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={startDemo}
                                disabled={act > 0}
                                className={cn(
                                    "magnetic-button w-full mt-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all",
                                    act === 0 ? "bg-[#F59E0B] text-[#0D0D12] shadow-[0_0_30px_rgba(245,158,11,0.3)]" : "bg-[#FAF8F5]/5 text-[#FAF8F5]/20 border border-[#FAF8F5]/10"
                                )}
                            >
                                {act === 0 ? <Play size={16} fill="currentColor" /> : <Shield size={16} className="text-green-500" />}
                                {act === 0 ? "▶ Run Surveillance Demo" : "Network Encrypted & Active"}
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: TERMINAL FEED */}
                    <div className={cn(
                        "transition-all duration-1000",
                        act >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}>
                        <div className="bg-[#0D0D12] border border-[#FAF8F5]/10 rounded-3xl overflow-hidden flex flex-col h-[600px] shadow-2xl">
                            <div className="flex items-center justify-between px-8 py-5 border-b border-[#FAF8F5]/5 bg-[#FAF8F5]/5">
                                <div className="flex items-center gap-3 text-[#F59E0B]">
                                    <TerminalIcon size={14} />
                                    <span className="text-[10px] font-mono uppercase tracking-widest">GlobalCorrelator Matrix Feed</span>
                                </div>
                            </div>
                            <div ref={terminalRef} className="flex-1 overflow-y-auto p-10 font-mono text-[13px] leading-relaxed space-y-3 custom-scrollbar">
                                {logs.map((log, i) => (
                                    <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
                                        <span className={cn(
                                            "font-bold",
                                            log.includes('⚠') ? "text-red-500" : log.includes('✓') ? "text-green-500" : log.includes('[CORRELATOR]') ? "text-[#F59E0B]" : "text-[#FAF8F5]/60"
                                        )}>
                                            {log}
                                        </span>
                                    </div>
                                ))}
                                {act === 2 && logs.length < DEMO_SCRIPT.length && (
                                    <div className="inline-block w-2 h-4 bg-[#F59E0B] animate-pulse ml-2" />
                                )}
                            </div>
                        </div>
                    </div>
                </main>

                {/* FOOTER ACTIONS */}
                {act === 3 && (
                    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <div className="bg-[#FAF8F5]/10 backdrop-blur-3xl border border-[#FAF8F5]/10 rounded-full px-10 py-5 flex items-center gap-8 shadow-2xl">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-green-500" />
                                <span className="text-xs font-bold uppercase tracking-widest">Outbreak Successfully Detected</span>
                            </div>
                            <div className="w-px h-6 bg-[#FAF8F5]/10" />
                            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[#FAF8F5]/60">
                                Auto-navigating to report in 3s...
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
