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
          <p className="text-sm text-white/40 mb-6 leading-relaxed">
              Add the `medrteam` stage to your `.gitlab-ci.yml` to trigger automated audits on Every Merge Request.
          </p>
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] font-mono text-[11px] text-white/40 italic">
              // Documentation for GitLab Runners is currently in BETA.
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
