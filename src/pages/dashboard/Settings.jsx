import React from 'react';
import { Settings as SettingsIcon, Shield, User, Key, Bell, CreditCard, ChevronRight } from 'lucide-react';

const SettingItem = ({ icon: Icon, title, desc, action }) => (
    <div className="p-6 border-b border-white/5 last:border-0 flex items-center justify-between group hover:bg-white/[0.01] transition-all">
        <div className="flex items-center gap-6">
            <div className="p-3 rounded-xl bg-white/5 text-white/40 group-hover:text-plasma group-hover:bg-plasma/10 transition-all">
                <Icon size={20} />
            </div>
            <div>
                <h3 className="text-sm font-sans font-bold text-white uppercase tracking-tight mb-1">{title}</h3>
                <p className="text-[11px] font-mono text-white/30 uppercase tracking-widest">{desc}</p>
            </div>
        </div>
        <button className="px-6 py-2 rounded-full border border-white/10 hover:border-plasma/40 text-[10px] font-mono uppercase text-white/40 hover:text-white transition-all">
            {action || 'Configure'}
        </button>
    </div>
);

export default function Settings() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-4xl">
            <header className="mb-12">
                <h1 className="text-4xl font-sans font-black tracking-tight text-white mb-2 uppercase">System Settings</h1>
                <p className="text-white/40 font-mono text-[11px] uppercase tracking-widest">MedRed-Shell Account Management // Protocol V4.1</p>
            </header>

            <div className="space-y-10">
                <section>
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-plasma mb-6 px-4">Account_Configuration</p>
                    <div className="card-surface p-0 flex flex-col overflow-hidden">
                        <SettingItem icon={User} title="Developer Profile" desc="DEV_SHANDILYA // Admin_Level_01" action="Edit Profile" />
                        <SettingItem icon={Shield} title="Security Protocol" desc="Two-Factor Authentication: ACTIVE" action="Update" />
                        <SettingItem icon={Key} title="API Access Tokens" desc="4 Active Keys // Last rotation 12d ago" action="Manage Keys" />
                    </div>
                </section>

                <section>
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-plasma mb-6 px-4">System_Alerts</p>
                    <div className="card-surface p-0 flex flex-col overflow-hidden">
                        <SettingItem icon={Bell} title="Audit Notifications" desc="Email + Webhook Push Alerts" />
                        <SettingItem icon={CreditCard} title="Billing & Credits" desc="Usage Plan: Research_Enterprise" action="Upgrade" />
                    </div>
                </section>

                <div className="p-8 rounded-2xl border border-red-500/10 bg-red-500/5 flex items-center justify-between">
                    <div>
                        <h4 className="font-mono text-xs font-bold text-red-500 mb-1 uppercase tracking-widest">Self-Destruct Account</h4>
                        <p className="text-[11px] text-red-500/40 font-mono tracking-tight uppercase">Irreversibly delete all audit history and API keys.</p>
                    </div>
                    <button className="px-6 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-mono text-[9px] uppercase font-bold hover:bg-red-500 hover:text-white transition-all">
                        Delete Data
                    </button>
                </div>
            </div>
        </div>
    );
}
