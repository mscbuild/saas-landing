import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedBy({ t }) {
  const brands = [
    { name: 'Cloudflare', category: 'Edge Infrastructure' },
    { name: 'Supabase', category: 'Open Source Backend' },
    { name: 'GitKraken', category: 'Developer Tools' },
    { name: 'Datadog', category: 'Observability' },
    { name: 'Vercel', category: 'Frontend Cloud' },
    { name: 'Postman', category: 'API Platform' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
          {t.headline}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center justify-center p-3 w-full group cursor-default"
            >
              <div className="text-lg sm:text-xl font-bold tracking-tight text-slate-400 group-hover:text-white transition-colors duration-200">
                {brand.name}
              </div>
              <span className="text-[10px] text-slate-400 group-hover:text-cyan-400/80 transition-colors">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Live metric summary pill */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/5 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.metricText}</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-indigo-400 font-semibold hidden sm:inline">{t.zeroBreaches}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
