import React from 'react';
import { 
    Zap, AlertCircle, CheckCircle2, Cloud, 
    ChevronRight, ArrowUpRight, Filter, Download
} from 'lucide-react';

const KPICard = ({ label, value, sub, icon: Icon, color }) => (
    <div className="card-surface p-6 flex flex-col gap-4 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br transition-opacity duration-500 opacity-5 group-hover:opacity-10" style={{ from: color, to: 'transparent' }} />
        <div className="flex items-center justify-between">
            <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-400`}>
                <Icon size={20} />
            </div>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{label}</span>
        </div>
        <div>
            <div className="text-3xl font-black text-white font-mono tracking-tighter">{value}</div>
            <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest mt-1">{sub}</p>
        </div>
    </div>
);

const StatusBadge = ({ status }) => {
    const configs = {
        'COMPLIANT': { color: 'green', label: 'COMPLIANT' },
        'BREACH': { color: 'red', label: 'SECURITY_BREACH' },
        'PENDING': { color: 'amber', label: 'IN_PROGRESS' },
        'WARNING': { color: 'orange', label: 'VULNERABILITY' }
    };
    const c = configs[status] || configs['PENDING'];
    return (
        <span className={`px-2 py-0.5 rounded border border-${c.color}-500/20 bg-${c.color}-500/5 text-[9px] font-mono font-bold tracking-widest text-${c.color}-400 uppercase`}>
            {c.label}
        </span>
    );
};

export default function DashboardHome() {
    const audits = [
        { id: 'MT-7740', model: 'llama-3-med-70b', date: '21 OCT 2026', safety: '98.2%', status: 'COMPLIANT' },
        { id: 'MT-7739', model: 'gpt-4o-clinical', date: '20 OCT 2026', safety: '64.1%', status: 'WARNING' },
        { id: 'MT-7738', model: 'med-gemma-7b', date: '19 OCT 2026', safety: '12.4%', status: 'BREACH' },
        { id: 'MT-7737', model: 'claude-3-sonnet', date: '19 OCT 2026', safety: '92.5%', status: 'COMPLIANT' }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 space-y-10">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-sans font-black tracking-tight text-white mb-2 uppercase">Operational Overview</h1>
                    <p className="text-white/40 font-mono text-[11px] uppercase tracking-widest">Sector: Global_Clinical_Nodes // System: Nominal</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 rounded-full border border-white/10 hover:border-plasma/40 text-white/40 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-all flex items-center gap-2">
                        <Filter size={14} /> Filter 
                    </button>
                    <button className="px-6 py-2.5 rounded-full bg-plasma text-white font-mono text-[10px] uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(159,101,243,0.3)] hover:scale-105 transition-all">
                        Run New Audit
                    </button>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard label="Total Audits" value="1,284" sub="+12% from last month" icon={CheckCircle2} color="green" />
                <KPICard label="Avg Safety Score" value="84.2%" sub="Benchmark: 90% SEC" icon={Zap} color="plasma" />
                <KPICard label="Active Breaches" value="03" sub="Requires Immediate Action" icon={AlertCircle} color="red" />
                <KPICard label="Infra Uptime" value="99.99%" sub="Nodes: 42/42 Online" icon={Cloud} color="blue" />
            </div>

            {/* Main Content: Recent Audits */}
            <div className="card-surface p-0 flex flex-col overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest flex items-center gap-3">
                        <Activity size={16} className="text-plasma" /> Recent Security Audits
                    </h3>
                    <button className="text-[10px] font-mono text-white/20 hover:text-white transition-colors flex items-center gap-2 group">
                        VIEW ALL <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/[0.01]">
                                <th className="px-8 py-4 font-mono text-[9px] uppercase tracking-widest text-white/20">Audit ID</th>
                                <th className="px-8 py-4 font-mono text-[9px] uppercase tracking-widest text-white/20">Target Model</th>
                                <th className="px-8 py-4 font-mono text-[9px] uppercase tracking-widest text-white/20">Execution Date</th>
                                <th className="px-8 py-4 font-mono text-[9px] uppercase tracking-widest text-white/20">Safety Index</th>
                                <th className="px-8 py-4 font-mono text-[9px] uppercase tracking-widest text-white/20">System Status</th>
                                <th className="px-8 py-4 font-mono text-[9px] uppercase tracking-widest text-white/20">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {audits.map((a, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                                    <td className="px-8 py-6 font-mono text-xs text-white/60 font-bold">{a.id}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-sans font-bold text-white mb-0.5">{a.model}</span>
                                            <span className="text-[9px] font-mono text-white/20 uppercase">Internal_Prod_v2</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 font-mono text-[10px] text-white/40">{a.date}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full bg-gradient-to-r ${parseFloat(a.safety) > 90 ? 'from-green-500 to-emerald-400' : 'from-red-500 to-orange-400'}`} 
                                                    style={{ width: a.safety }} 
                                                />
                                            </div>
                                            <span className="font-mono text-xs text-white/80">{a.safety}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <StatusBadge status={a.status} />
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 rounded-lg bg-white/5 hover:bg-white text-white/40 hover:text-void transition-all">
                                                <ArrowUpRight size={14} />
                                            </button>
                                            <button className="p-2 rounded-lg bg-white/5 hover:bg-plasma text-white/40 hover:text-white transition-all">
                                                <Download size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
