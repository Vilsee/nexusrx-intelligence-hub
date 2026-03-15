import React from 'react';
import ShaderAnimation from '../components/ShaderAnimation';

export default function ShaderShowcase() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0D0D12]">
            <ShaderAnimation />
            <div className="relative z-10 text-center space-y-4">
                <h1 className="pointer-events-none text-7xl font-black uppercase tracking-tighter text-[#FAF8F5] drop-shadow-2xl">
                    Shader Lines
                </h1>
                <p className="text-[#F59E0B] font-mono text-xs uppercase tracking-[0.4em] opacity-60">
                    Cinematic Asset v1.0.1
                </p>
            </div>

            <div className="absolute bottom-12 left-12 z-20 flex flex-col gap-2">
                <div className="text-[10px] font-mono text-[#FAF8F5]/20 uppercase tracking-widest">GHS Operational Subsystem</div>
                <div className="text-[10px] font-mono text-green-500/50 underline">ACTIVE_RELAY: SE_ASIA_MATRIX</div>
            </div>
        </div>
    );
}
