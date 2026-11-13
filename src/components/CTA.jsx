import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Lock, Terminal } from 'lucide-react';

export default function CTA({ t, onOpenAuth }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-500/20 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-white/15 shadow-2xl backdrop-blur-2xl overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>{t.badge}</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            {t.title}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
              {t.titleGradient}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {t.subtitle}
          </p>

          {/* Form / CTA */}
          <div className="max-w-xl mx-auto mb-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-slate-950/90 border border-white/15 rounded-2xl shadow-2xl">
                <div className="relative w-full">
                  <Terminal className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={t.emailPlaceholder}
                    className="w-full pl-11 pr-4 py-3 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{t.submitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-sm flex items-center justify-center gap-2 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>{t.successMsg}</span>
              </motion.div>
            )}
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-indigo-400" />
              {t.zeroRetention}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {t.soc2}
            </span>
            <span>{t.reviews}</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
