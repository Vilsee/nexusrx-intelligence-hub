import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, Book, Terminal, Shield, Zap, Info, ArrowLeft, ArrowUpRight } from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all
      ${isActive 
        ? 'bg-plasma/10 text-plasma border border-plasma/20' 
        : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'}
    `}
  >
    <Icon size={16} />
    <span className="font-mono text-[11px] uppercase tracking-wider">{label}</span>
  </NavLink>
);

export default function DocsLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-void text-ghost">
      {/* Top Bar */}
      <nav className="h-16 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-50 bg-void/80 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors">
            <ArrowLeft size={18} />
          </button>
          <div className="h-4 w-px bg-white/10" />
          <span className="font-mono text-xs font-bold tracking-tighter text-white">
            MEDREDTEAM<span className="text-plasma">-SDK</span> docs
          </span>
        </div>

        <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" className="flex items-center gap-2 text-[10px] font-mono text-white/40 hover:text-white transition-colors">
                GITHUB <ArrowUpRight size={10} />
            </a>
            <button 
                onClick={() => navigate('/dashboard')}
                className="px-4 py-1.5 rounded bg-white text-void font-mono text-[10px] uppercase font-bold"
            >
                Dashboard
            </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 p-6 h-[calc(100vh-64px)] sticky top-16 hidden md:block">
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-4 px-4">Introduction</p>
              <div className="space-y-1">
                <SidebarItem to="/docs/quickstart" icon={Terminal} label="Quickstart" />
                <SidebarItem to="/docs/attacks" icon={Shield} label="Attacks" />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-4 px-4">Resources</p>
              <div className="space-y-1">
                <SidebarItem to="/docs/api" icon={Book} label="API Reference" />
                <SidebarItem to="/docs/ci-cd" icon={Zap} label="CI Integration" />
              </div>
            </div>

            <div className="pt-8">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="text-[9px] font-mono uppercase text-plasma mb-2">Build v1.0.4</p>
                    <p className="text-[10px] text-white/30 leading-relaxed">
                        Security testing via Gradient AI high-latency inference.
                    </p>
                </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8 md:p-12 max-w-4xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
