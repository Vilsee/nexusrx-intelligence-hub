import React, { useState } from 'react';
import { Copy, Check, Terminal, ExternalLink } from 'lucide-react';

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group mt-4 mb-8">
      <div className="absolute top-3 right-3 z-10">
        <button onClick={copy} className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all border border-white/5">
          {copied ? <Check size={14} className="text-plasma" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="font-mono text-xs p-5 pt-10 rounded-xl bg-void border border-white/5 text-white/80 overflow-x-auto leading-relaxed shadow-lg">
          <div className="absolute top-3 left-4 flex gap-1.5 opacity-30">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <pre>{code}</pre>
      </div>
    </div>
  );
};

export default function DocsQuickstart() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-12">
        <h1 className="text-4xl font-sans font-black tracking-tight mb-4 text-white">Quickstart Guide</h1>
        <p className="text-white/40 leading-relaxed font-sans max-w-2xl">
          Get started with MedRedTeam-SDK in under 5 minutes. This guide covers installation, model configuration, and running your first adversarial audit.
        </p>
      </div>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 rounded flex items-center justify-center bg-plasma/10 text-plasma font-mono text-[10px] font-bold">01</span>
            <h2 className="text-lg font-mono font-bold tracking-widest text-white uppercase">Installation</h2>
        </div>
        <p className="text-sm text-white/40 mb-4 leading-relaxed">
            Install the core SDK and the DigitalOcean Gradient AI integration via pip. Ensure you have Python 3.9+ installed.
        </p>
        <CodeBlock code="pip install medrteam medrteam-gradient" />
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 rounded flex items-center justify-center bg-plasma/10 text-plasma font-mono text-[10px] font-bold">02</span>
            <h2 className="text-lg font-mono font-bold tracking-widest text-white uppercase">Authentication</h2>
        </div>
        <p className="text-sm text-white/40 mb-4 leading-relaxed font-sans">
            Set your DigitalOcean API key and Model ID as environment variables.
        </p>
        <CodeBlock code={`export GRADIENT_ACCESS_TOKEN='your_token_here'
export GRADIENT_WORKSPACE_ID='your_workspace_id_here'`} />
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 rounded flex items-center justify-center bg-plasma/10 text-plasma font-mono text-[10px] font-bold">03</span>
            <h2 className="text-lg font-mono font-bold tracking-widest text-white uppercase">Run First Audit</h2>
        </div>
        <p className="text-sm text-white/40 mb-4 leading-relaxed">
            Initialize the adversarial engine and execute a standard medical-tuned shell attack.
        </p>
        <CodeBlock code={`import medrteam
from medrteam.llm import MedicalAggregator

# Initialize Gradient inference
engine = medrteam.InferenceEngine(
    provider='digitalocean',
    model='llama-3-med-70b'
)

# Execute adversarial audit
audit = MedicalAggregator(engine)
report = audit.run_attack_pipeline(['pii', 'dosage'])
report.save('security_scan_v1.pdf')`} />
      </section>

      <div className="mt-20 p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
          <div>
              <p className="font-mono text-[11px] uppercase text-white/20 tracking-widest mb-1">Next Step</p>
              <h3 className="font-mono text-sm font-bold text-white uppercase">Attack Categories Deep-Dive</h3>
          </div>
          <button className="p-3 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all">
              <ExternalLink size={18} />
          </button>
      </div>
    </div>
  );
}
