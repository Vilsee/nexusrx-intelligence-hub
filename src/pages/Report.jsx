import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import {
    ChevronLeft, Download, Info, FileText, Activity, Zap, 
    ShieldCheck, CheckCircle2, ArrowUpRight, AlertTriangle, Shield
} from 'lucide-react';
import { useScan } from '../context/ScanContext';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const StatCard = ({ label, value, sub, colorClass }) => (
    <div className="card-surface p-6 flex flex-col justify-between">
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">{label}</span>
        <div>
            <div className={cn("text-4xl font-black font-mono mb-1 tracking-tighter", colorClass)}>{value}</div>
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{sub}</div>
        </div>
    </div>
);

export default function Report() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { report: scanResult, generateMockReport } = useScan();

    useEffect(() => {
        if (!scanResult && id === 'demo-001') {
            generateMockReport('demo-001');
        }
    }, [id, scanResult, generateMockReport]);

    if (!scanResult) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-void">
                <div className="text-center space-y-4">
                    <Activity className="mx-auto text-plasma animate-spin" size={32} />
                    <p className="font-mono text-sm text-white/40 uppercase tracking-widest">Hydrating MedRed Protocol Data...</p>
                </div>
            </div>
        );
    }

    const isBreach = scanResult?.safety_score < 0.6; // Inverting logic for safety breach

    return (
        <div className="relative min-h-screen bg-void text-ghost overflow-x-hidden selection:bg-plasma selection:text-white">
            <nav className="flex items-center justify-between py-6 px-10 border-b border-white/5 bg-void/80 backdrop-blur-xl sticky top-0 z-[100]">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-white/40 hover:text-plasma transition-colors font-mono text-[10px] uppercase tracking-widest"
                >
                    <ChevronLeft size={14} /> Back to Dashboard
                </button>
                <div className="flex items-center gap-3">
                    <Shield size={16} className="text-plasma" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-white">MedRed Protocol: {scanResult?.id}</span>
                </div>
                <button
                    className="bg-plasma/10 hover:bg-plasma hover:text-white border border-plasma/20 text-plasma px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                    <Download size={14} /> Export PDF Report
                </button>
            </nav>

            <main className="relative z-10 p-10 max-w-screen-xl mx-auto space-y-8">
                {/* STATUS HERO */}
                <div className={cn(
                    "rounded-[2.5rem] p-16 relative overflow-hidden flex flex-col items-center justify-center text-center border ring-1 ring-white/5",
                    isBreach ? "bg-red-500/10 border-red-500/30" : "bg-green-500/10 border-green-500/30"
                )}>
                    <div className={cn(
                        "absolute inset-0 opacity-10 pointer-events-none",
                        isBreach ? "bg-[radial-gradient(circle_at_center,red_0%,transparent_70%)]" : "bg-[radial-gradient(circle_at_center,green_0%,transparent_70%)]"
                    )} />
                    <div className="relative z-10">
                        <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/40 mb-6 font-bold">Audit_Classification_Result</div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none inline-block font-sans text-white">
                            {isBreach ? "SECURITY_BREACH" : "COMPLIANT_MODEL"}
                        </h1>
                        <div className="flex items-center justify-center gap-4 mt-10">
                            <span className={cn(
                                "px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] shadow-lg",
                                isBreach ? "bg-red-500 text-white" : "bg-green-500 text-white"
                            )}>
                                {isBreach ? "CRITICAL RISK" : "NOMINAL STATUS"}
                            </span>
                            <span className="bg-white/5 border border-white/5 px-8 py-2.5 rounded-full text-[10px] font-mono text-white/60 uppercase tracking-widest">
                                Integrity Score: {scanResult?.safety_score * 100}%
                            </span>
                        </div>
                    </div>
                </div>

                {/* METRICS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <StatCard label="Attack Vectors" value="48" sub="Templates Executed" colorClass="text-plasma" />
                    <StatCard label="Target Entity" value="LLAMA-3" sub="Clinical_Tuned_v2" colorClass="text-white" />
                    <StatCard label="Inference Time" value="142ms" sub="Gradient AI Backend" colorClass="text-white" />
                    <StatCard label="Latency Jitter" value="< 2ms" sub="Sector 07 Stabilized" colorClass="text-white" />
                </div>

                {/* VISUALIZATIONS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="card-surface p-10 flex flex-col">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="font-bold uppercase tracking-widest text-xs text-white/40">Vulnerability Axis Breakdown</h3>
                            <Activity size={16} className="text-white/20" />
                        </div>
                        <div className="flex-1 h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                                    { name: 'PII', value: 92 },
                                    { name: 'Dosage', value: 45 },
                                    { name: 'Consent', value: 81 },
                                    { name: 'Jailbreak', value: 74 },
                                    { name: 'Hallucination', value: 62 }
                                ]}>
                                    <PolarGrid stroke="rgba(255,255,255,0.05)" />
                                    <PolarAngleAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10, fontFamily: 'monospace' }} />
                                    <Radar
                                        name="Safety %"
                                        dataKey="value"
                                        stroke="#ff0000"
                                        fill="#ff0000"
                                        fillOpacity={0.2}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="card-surface p-10 flex flex-col">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="font-bold uppercase tracking-widest text-xs text-white/40">Temporal Attack Severity</h3>
                            <Zap size={16} className="text-white/20" />
                        </div>
                        <div className="flex-1 h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={[
                                    { step: '01', val: 0.12 },
                                    { step: '02', val: 0.84 },
                                    { step: '03', val: 0.23 },
                                    { step: '04', val: 0.45 },
                                    { step: '05', val: 0.08 }
                                ]}>
                                    <XAxis dataKey="step" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontFamily: 'monospace' }} />
                                    <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                                        <Cell fill="#ff0000" />
                                        <Cell fill="#ef4444" />
                                        <Cell fill="#ff0000" />
                                        <Cell fill="#ff0000" />
                                        <Cell fill="#ff0000" />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* DETAILED LOGS */}
                <div className="card-surface p-10">
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-8 text-white">Raw Attack Sequence</h3>
                    <div className="space-y-4">
                        {[
                            { id: 'AV-01', type: 'DOSAGE', status: 'FAILED', val: '0.84 VIS' },
                            { id: 'AV-02', type: 'PII', status: 'PASSED', val: '0.02 VIS' },
                            { id: 'AV-03', type: 'CONSENT', status: 'PASSED', val: '0.11 VIS' }
                        ].map((log, i) => (
                            <div key={i} className="flex items-center justify-between p-6 bg-white/[0.01] rounded-2xl border border-white/5 group hover:border-plasma/30 transition-all">
                                <div className="flex items-center gap-6">
                                    <span className="font-mono text-xs text-white/20">[{log.id}]</span>
                                    <span className="font-mono text-sm font-bold text-white uppercase tracking-widest">{log.type}</span>
                                </div>
                                <div className="flex items-center gap-8">
                                    <span className={`font-mono text-[10px] font-black uppercase tracking-widest ${log.status === 'FAILED' ? 'text-red-500' : 'text-green-500'}`}>{log.status}</span>
                                    <span className="font-mono text-xs text-white/40">{log.val}</span>
                                    <ArrowUpRight size={14} className="text-white/10 group-hover:text-plasma transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
