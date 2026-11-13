import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Terminal, 
  Workflow, 
  Lock, 
  Copy, 
  Check, 
  Sparkles,
  FileCheck,
  Zap,
  Binary
} from 'lucide-react';

export default function BentoGrid({ t }) {
  const [copied, setCopied] = useState(false);
  const [selectedCompliance, setSelectedCompliance] = useState('owasp');
  const [activeAstNode, setActiveAstNode] = useState(1);

  const handleCopy = () => {
    navigator.clipboard?.writeText('npx codepulse init --repo acme/backend');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const astNodes = t.card1.nodes;
  const complianceStandards = t.card4.standards;

  return (
    <section id="bento" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 blur-[140px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            {t.title}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
              {t.titleGradient}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 (SPAN 2): Deep AST Context */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-3xl bg-slate-900/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/40 transition-all shadow-xl"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[90px] pointer-events-none rounded-full" />

            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {t.card1.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {t.card1.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl mb-6">
                  {t.card1.desc}
                </p>

                {/* Interactive AST Flow Inspector */}
                <div className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-white/5 font-sans mb-4">
                  <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                    <span className="font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                      <Binary className="w-4 h-4" />
                      {t.card1.interactiveTitle}
                    </span>
                    <span>{t.card1.clickHint}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {astNodes.map((node) => (
                      <button
                        key={node.id}
                        onClick={() => setActiveAstNode(node.id)}
                        className={`text-left p-3 rounded-xl border transition-all text-xs ${
                          activeAstNode === node.id
                            ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-950/50'
                            : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-indigo-300">
                            {node.type}
                          </span>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            node.status === 'safe' || node.status === 'secure' ? 'bg-emerald-400' : 'bg-cyan-400'
                          }`} />
                        </div>
                        <div className="font-semibold text-slate-200 truncate">{node.title}</div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-3.5 p-3 rounded-xl bg-slate-900/90 border border-white/5 text-xs flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-slate-300">
                        {astNodes.find(n => n.id === activeAstNode)?.desc}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-400 font-semibold shrink-0">
                      {t.card1.sanitizedBadge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-white/5">
                {t.card1.footer.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {idx < t.card1.footer.length - 1 && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 2 (SPAN 1): 0.1% False Positives */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 rounded-3xl bg-slate-900/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-xl"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {t.card2.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {t.card2.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {t.card2.desc}
                </p>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono mb-1">
                    99.9%
                  </div>
                  <div className="text-xs font-semibold text-slate-300">{t.card2.accuracyLabel}</div>
                  <div className="text-[11px] text-slate-400">{t.card2.accuracySub}</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>{t.card2.footerLeft}</span>
                <span className="text-emerald-400 font-semibold font-mono">{t.card2.footerRight}</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 (SPAN 1): 1-Click AI Auto-Fixes */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 rounded-3xl bg-slate-900/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all shadow-xl"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {t.card3.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {t.card3.desc}
                </p>

                <div className="bg-slate-950/90 rounded-2xl p-3.5 border border-white/5 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400 text-[11px]">
                    <span>bot/security-patch-412.patch</span>
                    <span className="text-emerald-400 font-bold">{t.card3.patchStatus}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-rose-400 bg-rose-950/30 px-2 py-0.5 rounded truncate">
                      - cursor.execute(f"SELECT * ... {'{id}'}")
                    </div>
                    <div className="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded truncate">
                      + cursor.execute("SELECT * ... %s", (id,))
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-xs text-slate-400 flex items-center justify-between">
                <span>{t.card3.footerLeft}</span>
                <span className="text-purple-300 font-semibold font-mono">{t.card3.footerRight}</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 4 (SPAN 2): Real-Time Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 rounded-3xl bg-slate-900/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-xl"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Lock className="w-6 h-6" />
                  </div>
                  
                  {/* Standard Switcher */}
                  <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-white/10 text-xs">
                    {['owasp', 'soc2', 'pci'].map((std) => (
                      <button
                        key={std}
                        onClick={() => setSelectedCompliance(std)}
                        className={`px-3 py-1 rounded-lg font-medium uppercase transition-colors ${
                          selectedCompliance === std ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {std === 'owasp' ? 'OWASP Top 10' : std === 'soc2' ? 'SOC 2 Type II' : 'PCI-DSS 4.0'}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {t.card4.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl mb-6">
                  {t.card4.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {complianceStandards[selectedCompliance]?.map((item) => (
                    <div 
                      key={item.id}
                      className="p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="font-mono font-bold text-emerald-400 shrink-0">{item.id}</span>
                        <span className="text-slate-300 truncate">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  {t.card4.footerLeft}
                </span>
                <span className="text-emerald-400 font-semibold font-mono">{t.card4.footerRight}</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 5 (SPAN 3): 60-Second Integration */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 rounded-3xl bg-slate-900/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
                  <Zap className="w-3.5 h-3.5" />
                  {t.card5.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {t.card5.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {t.card5.desc}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300 font-medium">
                  {['GitHub Actions', 'GitLab CI', 'Bitbucket', 'VS Code', 'JetBrains', 'Slack Notifications', 'Jira Sync'].map((eco) => (
                    <span key={eco} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10">
                      {eco}
                    </span>
                  ))}
                </div>
              </div>

              {/* Terminal */}
              <div className="rounded-2xl bg-slate-950 border border-white/10 overflow-hidden font-mono text-xs shadow-2xl">
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    <span>terminal ~ quickstart</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">{t.card5.copiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.card5.copyBtn}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 sm:p-5 space-y-2 text-slate-300">
                  <div className="text-slate-400 font-semibold">
                    <span className="text-indigo-400">$</span> {t.card5.terminalLogs[0]}
                  </div>
                  <div className="text-cyan-400">
                    {t.card5.terminalLogs[1]}
                  </div>
                  <div className="text-slate-400">
                    {t.card5.terminalLogs[2]}
                  </div>
                  <div className="text-slate-400">
                    {t.card5.terminalLogs[3]}
                  </div>
                  <div className="text-emerald-400 font-semibold pt-1">
                    {t.card5.terminalLogs[4]}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
