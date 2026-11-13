import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  GitPullRequest, 
  FileCode, 
  Zap, 
  RotateCcw,
  Terminal,
  Activity,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function Hero({ t, onOpenAuth }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeFile, setActiveFile] = useState('auth_service.py');
  const [activeTab, setActiveTab] = useState('diff');
  const [isPatchApplied, setIsPatchApplied] = useState(false);
  const [isFixing, setIsFixing] = useState(false);

  const handleApplyFix = () => {
    setIsFixing(true);
    setTimeout(() => {
      setIsFixing(false);
      setIsPatchApplied(true);
    }, 700);
  };

  const handleResetFix = () => {
    setIsPatchApplied(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background radial glows & mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 blur-[130px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-indigo-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Text */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs md:text-sm font-medium mb-6 shadow-inner backdrop-blur-md hover:border-indigo-400/50 transition-all cursor-default"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold text-white">{t.badgePrefix}</span>
            <span>{t.badgeText}</span>
            <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
          </motion.div>

          {/* Main H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            {t.titlePart1}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
              {t.titleGradient}
            </span>
            {t.titlePart2}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300/90 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            {t.subtitle}
          </motion.p>

          {/* Email Capture & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto mb-8"
          >
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-slate-900/90 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-xl">
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
                  className="w-full sm:w-auto whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{t.ctaButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-center justify-center gap-2 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>{t.successMessage}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Trust bullets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>{t.bullets.scanTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-400" />
              <span>{t.bullets.zeroRetention}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.bullets.soc2}</span>
            </div>
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE PRODUCT MOCKUP: Live Code Review & Auto-fix */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          {/* Subtle glow border aura */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-25 -z-10" />

          {/* Mockup Container */}
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl overflow-hidden font-sans">
            
            {/* Window Topbar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <GitPullRequest className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-slate-400">PR #482:</span>
                  <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-none">
                    {t.mockup.prTitle}
                  </span>
                </div>
              </div>

              {/* Status pill on top right */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors duration-300 bg-slate-950">
                  {isPatchApplied || activeFile !== 'auth_service.py' ? (
                    <span className="flex items-center gap-1.5 text-emerald-400 border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      {t.mockup.statusSecure}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-rose-400 border-rose-500/30">
                      <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                      {t.mockup.statusCritical}
                    </span>
                  )}
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <span>AI Engine:</span>
                  <span className="text-cyan-400 font-semibold">{t.mockup.engineName}</span>
                </div>
              </div>
            </div>

            {/* Sub-bar: File list & View Tabs */}
            <div className="px-4 py-2 bg-slate-900/60 border-b border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
              
              {/* Files changed selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                <button
                  onClick={() => setActiveFile('auth_service.py')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                    activeFile === 'auth_service.py'
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                  {t.mockup.fileAuth}
                  <span className={`text-[10px] px-1 py-0.2 rounded font-bold ${
                    isPatchApplied ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                  }`}>
                    {isPatchApplied ? '✓' : '!'}
                  </span>
                </button>

                <button
                  onClick={() => setActiveFile('database_queries.go')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                    activeFile === 'database_queries.go'
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-slate-400" />
                  {t.mockup.fileDb}
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-bold">
                    {t.mockup.fileDbStatus || 'Clean'}
                  </span>
                </button>

                <button
                  onClick={() => setActiveFile('webhook_dispatch.ts')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                    activeFile === 'webhook_dispatch.ts'
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-slate-400" />
                  {t.mockup.fileWebhook}
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-bold">
                    {t.mockup.fileWebhookStatus || 'Clean'}
                  </span>
                </button>
              </div>

              {/* View modes */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setActiveTab('diff')}
                  className={`px-2.5 py-1 rounded text-xs transition-all ${
                    activeTab === 'diff' ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.mockup.diffTab}
                </button>
                <button
                  onClick={() => setActiveTab('ast')}
                  className={`px-2.5 py-1 rounded text-xs transition-all ${
                    activeTab === 'ast' ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.mockup.astTab}
                </button>
              </div>

            </div>

            {/* Main Mockup Body */}
            <div className="p-4 sm:p-6 bg-slate-950/70 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[360px]">
              
              {activeTab === 'diff' ? (
                <div>
                  {activeFile === 'auth_service.py' ? (
                    <div className="space-y-1">
                      {/* File header banner */}
                      <div className="text-slate-500 text-xs pb-3 font-mono border-b border-slate-800/80 mb-3 flex items-center justify-between">
                        <span>@@ -42,12 +42,15 @@ def verify_session_token(token: str, secret_key: str):</span>
                        <span className="text-slate-400 font-sans text-xs">
                          {isPatchApplied ? t.mockup.aiPatchApplied : t.mockup.unverifiedCommit}
                        </span>
                      </div>

                      {/* Code Lines */}
                      <div className="flex items-start gap-3 text-slate-400 py-0.5">
                        <span className="w-8 text-right text-slate-600 select-none">42</span>
                        <span className="text-slate-500 select-none"> </span>
                        <span className="text-purple-400">import</span> <span className="text-slate-200">jwt, hmac, hashlib</span>
                      </div>

                      <div className="flex items-start gap-3 text-slate-400 py-0.5">
                        <span className="w-8 text-right text-slate-600 select-none">43</span>
                        <span className="text-slate-500 select-none"> </span>
                        <span className="text-blue-400">def</span> <span className="text-amber-300">verify_session_token</span>
                        <span className="text-slate-300">(token: str, secret_key: str):</span>
                      </div>

                      {/* Vulnerable vs Fixed Code */}
                      {!isPatchApplied ? (
                        <>
                          <div className="flex items-start gap-3 bg-rose-950/40 border-l-2 border-rose-500 text-rose-200 py-1.5 px-1 -mx-1 rounded-r">
                            <span className="w-8 text-right text-rose-400/80 select-none font-bold">44</span>
                            <span className="text-rose-400 select-none font-bold">-</span>
                            <span className="font-semibold">
                              payload = jwt.decode(token, options={'{'}<span className="text-rose-300">"verify_signature": False</span>{'}'})
                            </span>
                          </div>

                          {/* AI Security Alert Card */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="my-3 p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-rose-500/40 shadow-xl shadow-rose-950/30 font-sans"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0">
                                  <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase">
                                      {t.mockup.alertBadge}
                                    </span>
                                  </div>
                                  <h4 className="text-sm font-semibold text-white mb-1">
                                    {t.mockup.alertTitle}
                                  </h4>
                                  <p className="text-xs text-slate-300 leading-normal max-w-2xl mb-3">
                                    {t.mockup.alertDesc}
                                  </p>
                                  
                                  <div className="flex flex-wrap items-center gap-2.5">
                                    <button
                                      onClick={handleApplyFix}
                                      disabled={isFixing}
                                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                      {isFixing ? (
                                        <>
                                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                          <span>{t.mockup.applyingFix}</span>
                                        </>
                                      ) : (
                                        <>
                                          <Sparkles className="w-3.5 h-3.5 text-white" />
                                          <span>{t.mockup.applyFixBtn}</span>
                                        </>
                                      )}
                                    </button>
                                    
                                    <span className="text-[11px] text-slate-400 italic">
                                      {t.mockup.clickHint}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          <div className="flex items-start gap-3 text-slate-400 py-0.5">
                            <span className="w-8 text-right text-slate-600 select-none">45</span>
                            <span className="text-slate-500 select-none"> </span>
                            <span className="text-purple-400">return</span> <span className="text-slate-200">payload.get(<span className="text-emerald-300">"user_id"</span>)</span>
                          </div>
                        </>
                      ) : (
                        /* FIXED PATCH STATE */
                        <>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-1"
                          >
                            <div className="flex items-start gap-3 bg-emerald-950/40 border-l-2 border-emerald-400 text-emerald-200 py-1 px-1 -mx-1 rounded-r">
                              <span className="w-8 text-right text-emerald-400/80 select-none font-bold">44</span>
                              <span className="text-emerald-400 select-none font-bold">+</span>
                              <span className="font-semibold text-emerald-300">
                                # CodePulse Patch [SEC-AUTO-482]: HS256 enforcement & timestamp verification
                              </span>
                            </div>
                            <div className="flex items-start gap-3 bg-emerald-950/40 border-l-2 border-emerald-400 text-emerald-200 py-1 px-1 -mx-1 rounded-r">
                              <span className="w-8 text-right text-emerald-400 select-none font-bold">45</span>
                              <span className="text-emerald-400 select-none font-bold">+</span>
                              <span className="font-semibold">
                                payload = jwt.decode(token, secret_key, algorithms=[<span className="text-amber-300">"HS256"</span>], options={'{'}<span className="text-emerald-300">"require": ["exp", "sub"]</span>{'}'})
                              </span>
                            </div>
                            <div className="flex items-start gap-3 bg-emerald-950/40 border-l-2 border-emerald-400 text-emerald-200 py-1 px-1 -mx-1 rounded-r">
                              <span className="w-8 text-right text-emerald-400 select-none font-bold">46</span>
                              <span className="text-emerald-400 select-none font-bold">+</span>
                              <span className="font-semibold">
                                <span className="text-purple-400">if not</span> hmac.compare_digest(payload.get(<span className="text-amber-300">"issuer"</span>, <span className="text-amber-300">""</span>), <span className="text-amber-300">"codepulse.auth"</span>):
                              </span>
                            </div>
                          </motion.div>

                          {/* Success Card with Reset Option */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="my-3 p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-emerald-500/40 shadow-xl shadow-emerald-950/20 font-sans"
                          >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                                  <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-emerald-400 uppercase">
                                      {t.mockup.patchVerified}
                                    </span>
                                    <span className="text-xs text-slate-400 font-mono">{t.mockup.testsGenerated}</span>
                                  </div>
                                  <p className="text-xs text-slate-300">
                                    {t.mockup.patchDesc}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-end sm:self-center">
                                <button
                                  onClick={handleResetFix}
                                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 border border-white/5 transition-colors"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>{t.mockup.resetBtn}</span>
                                </button>
                                <span className="px-3 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                                  {t.mockup.prApproved}
                                </span>
                              </div>
                            </div>
                          </motion.div>

                          <div className="flex items-start gap-3 text-slate-400 py-0.5">
                            <span className="w-8 text-right text-slate-600 select-none">47</span>
                            <span className="text-slate-500 select-none"> </span>
                            <span className="text-purple-400">return</span> <span className="text-slate-200">payload.get(<span className="text-emerald-300">"sub"</span>)</span>
                          </div>
                        </>
                      )}
                    </div>
                  ) : activeFile === 'database_queries.go' ? (
                    /* Go File View */
                    <div className="space-y-1">
                      <div className="text-slate-500 text-xs pb-3 font-mono border-b border-slate-800/80 mb-3 flex items-center justify-between">
                        <span>@@ -18,10 +18,10 @@ func GetUserByID(ctx context.Context, db *sql.DB, id string)</span>
                        <span className="text-emerald-400 font-sans text-xs">✓ {t.mockup.fileDbStatus}</span>
                      </div>
                      <div className="text-slate-400 py-0.5">
                        <span className="w-8 inline-block text-right text-slate-600 mr-3 select-none">18</span>
                        <span className="text-blue-400">package</span> <span className="text-slate-200">db</span>
                      </div>
                      <div className="text-slate-400 py-0.5">
                        <span className="w-8 inline-block text-right text-slate-600 mr-3 select-none">19</span>
                        <span className="text-blue-400">func</span> <span className="text-amber-300">GetUserByID</span>(ctx context.Context, db *sql.DB, id string) (*User, error) &#123;
                      </div>
                      <div className="text-emerald-300 bg-emerald-950/30 py-1 px-1 -mx-1 rounded">
                        <span className="w-8 inline-block text-right text-emerald-400/80 mr-3 select-none">20</span>
                        <span>    row := db.QueryRowContext(ctx, <span className="text-amber-300">"SELECT id, email, role FROM users WHERE id = $1"</span>, id)</span>
                      </div>
                      <div className="text-slate-400 py-0.5">
                        <span className="w-8 inline-block text-right text-slate-600 mr-3 select-none">21</span>
                        <span>    <span className="text-purple-400">return</span> scanUser(row)</span>
                      </div>
                      <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-sans">
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{t.mockup.cleanFileHeading}</span>
                        </div>
                        <p className="text-slate-300 text-xs">{t.mockup.cleanFileDesc}</p>
                      </div>
                    </div>
                  ) : (
                    /* TypeScript Webhook View */
                    <div className="space-y-1">
                      <div className="text-slate-500 text-xs pb-3 font-mono border-b border-slate-800/80 mb-3 flex items-center justify-between">
                        <span>@@ -12,8 +12,8 @@ export async function dispatchWebhook(...)</span>
                        <span className="text-emerald-400 font-sans text-xs">✓ {t.mockup.fileWebhookStatus}</span>
                      </div>
                      <div className="text-slate-400 py-0.5">
                        <span className="w-8 inline-block text-right text-slate-600 mr-3 select-none">12</span>
                        <span className="text-purple-400">import</span> &#123; validateAllowlist &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'./security/ssrf'</span>;
                      </div>
                      <div className="text-slate-400 py-0.5">
                        <span className="w-8 inline-block text-right text-slate-600 mr-3 select-none">13</span>
                        <span className="text-blue-400">export async function</span> <span className="text-amber-300">dispatchWebhook</span>(url: string, payload: unknown) &#123;
                      </div>
                      <div className="text-emerald-300 bg-emerald-950/30 py-1 px-1 -mx-1 rounded">
                        <span className="w-8 inline-block text-right text-emerald-400/80 mr-3 select-none">14</span>
                        <span>    <span className="text-blue-400">const</span> safeUrl = validateAllowlist(url); <span className="text-slate-500">// SSRF mitigation</span></span>
                      </div>
                      <div className="text-slate-400 py-0.5">
                        <span className="w-8 inline-block text-right text-slate-600 mr-3 select-none">15</span>
                        <span>    <span className="text-purple-400">return</span> fetch(safeUrl, &#123; method: <span className="text-amber-300">'POST'</span>, body: JSON.stringify(payload) &#125;);</span>
                      </div>
                      <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-sans">
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{t.mockup.cleanFileHeading}</span>
                        </div>
                        <p className="text-slate-300 text-xs">{t.mockup.cleanFileDesc}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* AST TAINT FLOW VIEW */
                <div className="py-6 px-2 flex flex-col items-center justify-center font-sans">
                  <div className="w-full max-w-xl bg-slate-900 p-6 rounded-xl border border-white/10 text-center">
                    <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-base font-semibold text-white mb-2">{t.mockup.astTitle}</h4>
                    <p className="text-xs text-slate-400 mb-6">
                      {t.mockup.astSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-700 w-full sm:w-auto">
                        <span className="text-rose-400 block font-bold">SOURCE</span>
                        <span className="text-slate-300">{t.mockup.astSource}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
                      <div className="p-3 rounded-lg bg-slate-950 border border-indigo-500/40 w-full sm:w-auto">
                        <span className="text-indigo-400 block font-bold">TAINT ANALYSIS</span>
                        <span className="text-slate-300">{t.mockup.astTaint}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
                      <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/40 w-full sm:w-auto">
                        <span className="text-emerald-400 block font-bold">PATCH SINK</span>
                        <span className="text-slate-300">{t.mockup.astSink}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Mockup Footer bar */}
            <div className="px-4 py-2.5 bg-slate-950/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {t.mockup.ciPipeline} <strong className="text-slate-200">GitHub Actions #10492</strong>
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="hidden sm:inline text-slate-400">
                  {t.mockup.scanSpeed} <span className="text-cyan-400 font-semibold font-mono">2.8s</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-mono">CodePulse Bot:</span>
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[11px] font-semibold">
                  {t.mockup.botAuditActive}
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
