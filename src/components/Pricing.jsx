import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ t, onOpenAuth }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      data: t.developer,
      isPopular: false,
      ctaStyle: 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10',
    },
    {
      data: t.pro,
      isPopular: true,
      ctaStyle: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white shadow-xl shadow-indigo-500/30',
    },
    {
      data: t.enterprise,
      isPopular: false,
      ctaStyle: 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[160px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            {t.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            {t.title}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
              {t.titleGradient}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            {t.subtitle}
          </motion.p>

          {/* Billing Switcher */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white font-semibold' : 'text-slate-400'}`}>
              {t.monthly}
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 rounded-full bg-slate-800 p-1 border border-white/10 transition-colors focus:outline-none"
              aria-label="Toggle billing duration"
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-md"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>

            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-white font-semibold' : 'text-slate-400'}`}>
              {t.yearly}
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {t.discountBadge}
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tierItem, idx) => {
            const tier = tierItem.data;
            const isPop = tierItem.isPopular;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all backdrop-blur-xl ${
                  isPop
                    ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-indigo-500/60 shadow-2xl shadow-indigo-950/60 ring-1 ring-indigo-400/30'
                    : 'bg-slate-900/60 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular badge */}
                {isPop && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white text-xs font-bold shadow-lg shadow-indigo-500/40">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    {!isPop && (
                      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px] mb-6">
                    {tier.desc}
                  </p>

                  {/* Price Display */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    {typeof tier.priceMonthly === 'number' ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                          ${isAnnual ? tier.priceAnnual : tier.priceMonthly}
                        </span>
                        <span className="text-sm text-slate-400">
                          {tier.priceMonthly === 0 ? '' : '/ dev / month'}
                        </span>
                      </div>
                    ) : (
                      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {tier.priceMonthly}
                      </div>
                    )}

                    {isAnnual && typeof tier.priceMonthly === 'number' && tier.priceMonthly > 0 && (
                      <div className="text-xs text-emerald-400 font-medium mt-1.5">
                        {t.saveYearly}
                      </div>
                    )}
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div>
                  <motion.button
                    onClick={onOpenAuth}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${tierItem.ctaStyle}`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
          {t.guarantees.map((g, idx) => (
            <React.Fragment key={g}>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {g}
              </span>
              {idx < t.guarantees.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
