import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';

export default function Footer({ t, onOpenContact }) {
  const footerLinks = {
    product: [
      { name: 'AST Semantic Engine', href: '#bento' },
      { name: 'eBPF Sandbox', href: '#bento' },
      { name: '1-Click Auto-Fixes', href: '#bento' },
      { name: 'OWASP & SOC 2 Compliance', href: '#bento' },
      { name: 'Pricing', href: '#pricing' },
    ],
    integrations: [
      { name: 'GitHub Actions', href: '#' },
      { name: 'GitLab CI/CD', href: '#' },
      { name: 'Bitbucket Pipelines', href: '#' },
      { name: 'VS Code Extension', href: '#' },
      { name: 'JetBrains Plugin', href: '#' },
      { name: 'Slack & Jira Bot', href: '#' },
    ],
    security: [
      { name: 'Zero Data Retention', href: '#' },
      { name: 'SOC 2 Type II Report', href: '#' },
      { name: 'ISO 27001 Certification', href: '#' },
      { name: 'Vulnerability Disclosure', href: '#' },
      { name: 'Sandbox Security Architecture', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Logo & Bio Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Code<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">Pulse</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              {t.bio}
            </p>

            {/* Live System Status & Contact Button */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-white/5 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.statusNormal}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 font-mono">{t.uptime}</span>
              </div>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:text-white text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t.contactBtn || 'Contact Sales'}</span>
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              {t.colProduct}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              {t.colIntegrations}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {footerLinks.integrations.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              {t.colSecurity}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {footerLinks.security.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.copyright}
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.hallOfFame}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
