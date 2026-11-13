import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, t }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleOAuth = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl z-10 my-8 overflow-hidden font-sans"
        >
          {/* Subtle glow aura */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/15 blur-[80px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/15 blur-[80px] pointer-events-none rounded-full" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white border border-white/5 transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px]">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] p-2 text-indigo-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {t.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {t.subtitle}
              </p>

              {/* OAuth Providers */}
              <div className="space-y-2.5 mb-6">
                <button
                  onClick={() => handleOAuth('GitHub')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold border border-white/10 flex items-center justify-center gap-2.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{t.githubBtn}</span>
                </button>

                <button
                  onClick={() => handleOAuth('GitLab')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold border border-white/10 flex items-center justify-center gap-2.5 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m23.6 9.6-1-3.2a1 1 0 0 0-1.8-.1l-1.9 5.8H5.1L3.2 6.3a1 1 0 0 0-1.8.1l-1 3.2a1 1 0 0 0 .3 1.1L12 21.8l11.3-11.1a1 1 0 0 0 .3-1.1z" fill="#FC6D26"/>
                  </svg>
                  <span>{t.gitlabBtn}</span>
                </button>

                <button
                  onClick={() => handleOAuth('Google')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold border border-white/10 flex items-center justify-center gap-2.5 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.7 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.6c-.3 1.5-1.1 2.8-2.4 3.7v3.1h3.9c2.3-2.1 3.6-5.2 3.6-9z"/>
                    <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.9-3.1c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.2v3.2C3.2 21.3 7.3 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.3 14.1c-.2-.7-.4-1.4-.4-2.1s.2-1.4.4-2.1V6.7H1.2C.4 8.3 0 10.1 0 12s.4 3.7 1.2 5.3l4.1-3.2z"/>
                    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.3 0 3.2 2.7 1.2 6.7l4.1 3.2c.9-2.9 3.6-5.1 6.7-5.1z"/>
                  </svg>
                  <span>{t.googleBtn}</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-6">
                <div className="border-t border-white/10 w-full" />
                <span className="bg-slate-900 px-3 text-[11px] text-slate-400 font-mono uppercase whitespace-nowrap">
                  {t.orEmail}
                </span>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1 font-mono">
                    {t.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                      {t.passwordLabel}
                    </label>
                    <a href="#" className="text-[11px] text-indigo-400 hover:text-indigo-300">
                      {t.forgotPassword}
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t.passwordPlaceholder}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t.submitBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Terms note */}
              <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-slate-400 text-center leading-relaxed">
                {t.termsNote}
              </div>
            </div>
          ) : (
            /* Success confirmation */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-950/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                {t.successTitle || 'Welcome to CodePulse!'}
              </h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                {t.successDesc || 'Account created successfully. 14-day Pro trial is active.'}
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-semibold shadow-lg"
                >
                  {t.goToDashboard || 'Go to Dashboard →'}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
