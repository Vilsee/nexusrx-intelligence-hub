import React from 'react';
import { Zap, Github, Gitlab, Terminal } from 'lucide-react';

export default function DocsCIIntegration() {
  const yaml = `name: MedRed Audit
on: [push]
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: MedRedTeam Security Scan
        uses: medredteam/scan-action@v1
        with:
          target: 'my-clinical-model-v2'
          gradient_token: \${{ secrets.GRADIENT_TOKEN }}
          fail_on_critical: true`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-12">
        <h1 className="text-4xl font-sans font-black tracking-tight mb-4 text-white uppercase">CI/CD Integration</h1>
        <p className="text-white/40 leading-relaxed font-sans max-w-2xl">
          Automate medical LLM safety audits. Block deployments if vulnerability scores exceed your clinical safety threshold.
        </p>
      </div>

      <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
              <Github className="text-white" size={20} />
              <h2 className="text-lg font-mono font-bold tracking-widest text-white uppercase">GitHub Actions</h2>
          </div>
          <div className="relative group">
              <div className="font-mono text-[11px] p-6 rounded-xl bg-void border border-white/5 text-white/60 leading-relaxed">
                  <pre className="text-plasma/80">{yaml}</pre>
              </div>
          </div>
      </section>

      <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
              <Gitlab className="text-[#FC6D26]" size={20} />
              <h2 className="text-lg font-mono font-bold tracking-widest text-white uppercase">GitLab CI</h2>
          </div>
          <div className="card-surface p-10 bg-[#000000] border border-red-500/20 shadow-[0_0_40px_rgba(255,0,0,0.05)]">
              <pre className="text-red-500 font-mono text-sm mb-4"># .github/workflows/medred.yml</pre>
              <pre className="text-white/60 font-mono text-sm leading-relaxed">
{`jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run MedRed Scan
        run: mrt scan --target llama-3-med --vis-threshold 0.15`}
              </pre>
          </div>
      </section>

      <div className="bg-plasma/10 border border-plasma/20 p-8 rounded-2xl flex items-start gap-6">
          <div className="p-3 rounded-xl bg-plasma/20 text-plasma">
              <Zap size={24} />
          </div>
          <div>
              <h3 className="font-mono text-sm font-bold text-white mb-2 uppercase tracking-widest">Enforce Safety Gates</h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                  Enable `fail_on_critical` to automatically exit CI processes with code 1 if lethal dosage hallucinations or PII leakage is detected.
              </p>
          </div>
      </div>
    </div>
  );
}
