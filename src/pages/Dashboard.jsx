import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, PlayCircle, Trophy, Database, Settings, 
  Search, Bell, User, LogOut, ChevronLeft, Menu, Activity
} from 'lucide-react';

const SidebarLink = ({ to, icon: Icon, label, collapsed }) => (
    <NavLink
        to={to}
        end={to === "/dashboard"}
        className={({ isActive }) => `
            flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
            ${isActive 
                ? 'bg-plasma/10 text-plasma border border-plasma/20 shadow-[0_0_20px_rgba(255,0,0,0.1)]' 
                : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'}
        `}
    >
        <Icon size={20} className={isActive ? 'animate-pulse' : ''} />
        {!collapsed && <span className="font-mono text-[11px] uppercase tracking-[0.1em] font-bold">{label}</span>}
    </NavLink>
);

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-void text-ghost overflow-hidden">
            {/* Dashboard Sidebar */}
            <aside 
                className={`border-r border-white/5 bg-void/50 backdrop-blur-2xl transition-all duration-500 flex flex-col z-50
                    ${collapsed ? 'w-20' : 'w-64'}
                `}
            >
                {/* Logo Area */}
                <div className="h-20 flex items-center px-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-plasma flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                             <Shield size={20} className="text-void" />
                        </div>
                        {!collapsed && (
                            <span className="font-sans font-black tracking-tighter text-sm text-white uppercase">
                                MedRed<span className="text-plasma">Team</span>
                            </span>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 mt-4">
                    <SidebarLink to="/dashboard" icon={LayoutDashboard} label="Home" collapsed={collapsed} />
                    <SidebarLink to="/dashboard/new-scan" icon={PlayCircle} label="New Scan" collapsed={collapsed} />
                    <SidebarLink to="/leaderboard" icon={Trophy} label="Leaderboard" collapsed={collapsed} />
                    <SidebarLink to="/corpus" icon={Database} label="Corpus" collapsed={collapsed} />
                    <SidebarLink to="/dashboard/settings" icon={Settings} label="Settings" collapsed={collapsed} />
                </nav>

                {/* Footer / User */}
                <div className="p-4 border-t border-white/5 space-y-4">
                    {!collapsed && (
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <div className="flex items-center gap-2 mb-2">
                                <Activity size={12} className="text-green-500" />
                                <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest">Active nodes</span>
                            </div>
                            <p className="text-[10px] text-white/30 font-mono">GRADIENT_V3_CLUSTER_07</p>
                        </div>
                    )}
                    <button 
                        onClick={() => navigate('/')}
                        className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors"
                    >
                        <LogOut size={18} />
                        {!collapsed && <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Exit Portal</span>}
                    </button>
                    <button 
                        onClick={() => setCollapsed(!collapsed)}
                        className="hidden md:flex w-full items-center gap-3 px-4 py-3 text-white/20 hover:text-white transition-colors"
                    >
                        <ChevronLeft size={18} className={`transition-transform duration-500 ${collapsed ? 'rotate-180' : ''}`} />
                        {!collapsed && <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Collapse</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-void/30 backdrop-blur-md">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative max-w-md w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                            <input 
                                type="text" 
                                placeholder="SEARCH AUDITS, MODELS, OR REPORTS..."
                                className="w-full bg-white/[0.03] border border-white/5 rounded-full py-2.5 pl-10 pr-4 font-mono text-[10px] uppercase text-white placeholder:text-white/10 focus:outline-none focus:border-plasma/30 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-white/20 hover:text-white transition-colors">
                            <Bell size={18} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-plasma rounded-full border border-void" />
                        </button>
                        <div className="h-6 w-px bg-white/5" />
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">DEV_SHANDILYA</p>
                                <p className="text-[9px] font-mono text-plasma uppercase tracking-widest opacity-60">ADMIN_LEVEL_01</p>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-plasma/40 to-plasma flex items-center justify-center border border-plasma/20 shadow-[0_0_15px_rgba(255,0,0,0.2)]">
                                <User size={18} className="text-white" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Viewport */}
                <main className="flex-1 p-10 overflow-y-auto custom-scrollbar">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
