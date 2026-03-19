import React from 'react';
import { Trophy, Shield, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';

const LeaderboardRow = ({ rank, model, score, integrity, status }) => (
    <div className="group flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default">
        <div className="flex items-center gap-8">
            <span className="font-mono text-xl font-black text-white/10 group-hover:text-plasma transition-colors group-hover:drop-shadow-[0_0_5px_#ff0000]">{rank}</span>
            <div>
                <h3 className="text-white font-sans font-bold text-base mb-0.5">{model}</h3>
                <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Provider: DigitalOcean_Gradient</span>
                    <div className="h-3 w-px bg-white/10" />
                    <span className="text-[9px] font-mono text-plasma/60 uppercase tracking-widest font-bold">{integrity}% Integrity</span>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-12">
            <div className="text-right">
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Safety Score</p>
                <p className={`text-xl font-black font-mono tracking-tighter ${score > 0.9 ? 'text-green-500' : 'text-amber-500'}`}>{score}</p>
            </div>
            <button className="p-2 ml-4 rounded-lg bg-white/5 hover:bg-white text-white/40 hover:text-void transition-all">
                <ChevronRight size={16} />
            </button>
        </div>
    </div>
);

export default function Leaderboard() {
    const models = [
        { rank: '01', model: 'med-llama-3-70b', score: 0.982, integrity: 100, status: 'safe' },
        { rank: '02', model: 'gpt-4o-clinical', score: 0.941, integrity: 98, status: 'safe' },
        { rank: '03', model: 'claude-3.5-sonnet', score: 0.925, integrity: 99, status: 'safe' },
        { rank: '04', model: 'med-gemma-7b-v2', score: 0.884, integrity: 92, status: 'warning' },
        { rank: '05', model: 'mistral-large-med', score: 0.761, integrity: 85, status: 'warning' },
    ];

    return (
        <div className="min-h-screen bg-void pt-24 px-6 md:px-12 max-w-[1200px] mx-auto pb-32">
            <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <Trophy className="text-plasma" size={24} />
                        <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-plasma font-bold">Model_Safety_Rankings</span>
                    </div>
                    <h1 className="text-5xl font-sans font-black tracking-tight text-white mb-6 uppercase">The Red-Team Leaderboard</h1>
                    <p className="text-white/40 leading-relaxed font-sans text-lg">
                        Global safety rankings for medical-tuned LLMs based on their resistance to 48 adversarial threat vectors. Updated every 72 hours.
                    </p>
                </div>
                <div className="p-8 rounded-3xl bg-plasma/5 border border-plasma/20 min-w-[300px] shadow-[0_0_30px_rgba(255,0,0,0.05)]">
                    <p className="font-mono text-[10px] uppercase text-plasma/60 tracking-widest mb-2">Aggregate Suite Integrity</p>
                    <div className="text-4xl font-black text-white font-mono mb-2 tracking-tighter">97.4%</div>
                    <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest">Based on 14,284 simulation cycles</p>
                </div>
            </header>

            <div className="card-surface p-0 flex flex-col">
                <div className="p-6 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold px-4">Model_Profile</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold px-4">Audit_Metrics</span>
                </div>
                <div>
                    {models.map((m, i) => (
                        <LeaderboardRow key={i} {...m} />
                    ))}
                </div>
            </div>
        </div>
    );
}
