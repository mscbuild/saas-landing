import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitPullRequest,
  Cpu,
  ShieldCheck,
  GitMerge,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function HowItWorks({ t }) {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [GitPullRequest, Cpu, ShieldCheck, GitMerge];

  return (
    <section id="how-it-works" className="py-24 bg-slate-950/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {t.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || GitPullRequest;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${isActive
                  ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/40'
                  : 'bg-slate-950/40 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900/40'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                  />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-indigo-400' : 'text-slate-400'}`}>
                    {step.number}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${isActive ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                    {step.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="text-sm font-semibold text-white truncate">{step.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Step Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-2xl shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Description */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase">
                  <span>{t.stepLabel || 'STEP'} {t.steps[activeStep].number}</span>
                  <span>•</span>
                  <span>{t.steps[activeStep].tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {t.steps[activeStep].heading}
                </h3>

                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {t.steps[activeStep].description}
                </p>

                <div className="pt-4 space-y-2.5">
                  {t.steps[activeStep].items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Step Preview Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 font-mono text-xs shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <span className="text-slate-400">CodePulse Orchestrator</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[11px] font-sans font-semibold">
                      {t.steps[activeStep].badge}
                    </span>
                  </div>

                  {activeStep === 0 && (
                    <div className="space-y-3 font-sans text-xs">
                      <div className="p-3 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <GitPullRequest className="w-5 h-5 text-indigo-400" />
                          <div>
                            <div className="font-semibold text-white">GitHub Organization</div>
                            <div className="text-slate-400 text-[11px]">acme-technologies/*</div>
                          </div>
                        </div>
                        <span className="text-emerald-400 font-bold">Active ✓</span>
                      </div>
                      <div className="text-slate-400 text-[11px] font-mono">
                        Webhook latency: 42ms • Zero-Retention Enclave Active
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="text-slate-400">Trigger: git push origin feat/billing</div>
                      <div className="text-indigo-400">▶ AST Parser: 142 files in 1.4s</div>
                      <div className="text-cyan-400">▶ Taint Analysis: 0 security bypasses in auth</div>
                      <div className="text-emerald-400">✓ Security checks complete in 11.8s</div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-3 font-sans text-xs">
                      <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-white">eBPF Kernel Simulator</span>
                          <span className="text-[10px] text-cyan-400 font-mono">Isolated Container</span>
                        </div>
                        <p className="text-slate-400 text-[11px]">
                          Synthetic payload evaluated: <strong>Blocked by Prepared Statement</strong>.
                        </p>
                      </div>
                      <div className="text-emerald-400 font-semibold text-center py-1">
                        False Alarm Eliminated (Zero Noise Policy)
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-3 font-sans text-xs">
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                          <Sparkles className="w-4 h-4" />
                          <span>CodePulse AI Bot • Auto-Fix Ready</span>
                        </div>
                        <p className="text-slate-300 text-[11px] mb-2">
                          Patch compiled, unit tests passed. Ready for merge.
                        </p>
                        <div className="w-full py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-center">
                          Confirm Squash & Merge (Score 100/100)
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
