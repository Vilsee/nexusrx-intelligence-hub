import React from 'react';
import { Book, ChevronRight } from 'lucide-react';

const Endpoint = ({ method, path, desc }) => (
    <div className="py-6 border-b border-white/5 flex flex-col md:flex-row md:items-center gap-4 group">
        <div className="flex items-center gap-3 min-w-[200px]">
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest ${method === 'POST' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : method === 'GET' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                {method}
            </span>
            <span className="font-mono text-xs text-white/80 group-hover:text-white transition-colors">{path}</span>
        </div>
        <p className="text-sm text-white/40 font-sans flex-1">{desc}</p>
        <ChevronRight size={14} className="text-white/10 group-hover:text-plasma transition-all" />
    </div>
);

export default function DocsAPIReference() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-12">
        <h1 className="text-4xl font-sans font-black tracking-tight mb-4 text-white uppercase">API Reference</h1>
        <p className="text-white/40 leading-relaxed font-sans max-w-2xl">
          Integrate MedRedTeam-SDK directly into your backend services. Our REST API allows for remote scan execution and result retrieval.
        </p>
      </div>

      <section className="mb-16">
          <h2 className="text-xs font-mono font-bold tracking-[0.3em] text-plasma mb-8 uppercase">Scans</h2>
          <div className="border-t border-white/5">
              <Endpoint method="POST" path="/v1/scans" desc="Initialize a new adversarial audit against a target model." />
              <Endpoint method="GET" path="/v1/scans/{id}" desc="Retrieve results and safety scores for a specific scan." />
              <Endpoint method="GET" path="/v1/scans/{id}/report" desc="Generate and download a PDF compliance report." />
          </div>
      </section>

      <section className="mb-16">
          <h2 className="text-xs font-mono font-bold tracking-[0.3em] text-plasma mb-8 uppercase">Corpus</h2>
          <div className="border-t border-white/5">
              <Endpoint method="GET" path="/v1/templates" desc="List all 48 adversarial prompt templates." />
              <Endpoint method="GET" path="/v1/templates/{id}" desc="Get metadata and risk profile for a specific attack." />
          </div>
      </section>

      <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
          <h3 className="font-mono text-sm font-bold text-white mb-4 uppercase tracking-widest">Bearer Authentication</h3>
          <p className="text-xs text-white/40 leading-relaxed font-mono">
              Authorization: Bearer {'<'}YOUR_API_KEY{'>'}
          </p>
      </div>
    </div>
  );
}
