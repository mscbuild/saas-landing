export const translations = {
  en: {
    langName: 'ENG',
    langFull: 'English',
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      bento: 'Bento Grid',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      githubStars: '4.9k',
      startFree: 'Start Free',
      signIn: 'Sign In',
    },
    hero: {
      badgePrefix: 'CodePulse 2.0:',
      badgeText: 'Deep AST Analysis & 1-Click Auto-Fixes',
      titlePart1: 'Autonomous Code Review & ',
      titleGradient: 'SecOps-Grade Security',
      titlePart2: ' in Every PR',
      subtitle: 'CodePulse detects hidden architectural vulnerabilities (OWASP, memory leaks, CVEs) and automatically generates verified patches with unit tests directly in your Git repository in 15 seconds.',
      emailPlaceholder: 'Enter your work email for GitHub/GitLab...',
      ctaButton: 'Connect Repository',
      successMessage: 'Great! Access link has been sent to your email.',
      bullets: {
        scanTime: 'Scans in < 15 seconds',
        zeroRetention: 'Zero-Data Retention (code is never stored)',
        soc2: 'SOC 2 Type II & OWASP Ready',
      },
      mockup: {
        prTitle: 'feat(auth): migrate token parser to v2',
        statusCritical: '1 Critical Vulnerability',
        statusSecure: 'Secure (Score 99/100)',
        engineName: 'Pulse-70B-Sec',
        fileAuth: 'auth_service.py',
        fileDb: 'database_queries.go',
        fileWebhook: 'webhook_dispatch.ts',
        diffTab: 'Diff & AI Fix',
        astTab: 'AST Taint Flow',
        unverifiedCommit: 'Unverified author commit',
        aiPatchApplied: 'Patched by CodePulse AI Bot',
        alertBadge: 'CRITICAL CWE-347 & CWE-327 (CVSS 9.8)',
        alertTitle: 'JWT Signature Verification Disabled (Signature Bypass)',
        alertDesc: 'Allows an attacker to forge an administrative claim by crafting an untrusted token without a secret key. Confirmed by CodePulse eBPF simulation.',
        applyFixBtn: '✨ Apply AI Auto-Fix with Tests',
        applyingFix: 'Generating verified patch in sandbox...',
        clickHint: '(Click button to watch live AI remediation)',
        patchVerified: '✓ Patch successfully verified',
        testsGenerated: '12 unit tests generated',
        patchDesc: 'Vulnerability CWE-347 eliminated. Branch is clean and ready for squash & merge.',
        resetBtn: 'Reset Test',
        prApproved: 'PR Approved',
        astTitle: 'Semantic Data Flow Graph (AST Taint Tracking)',
        astSubtitle: 'CodePulse tracks tainted untrusted variables from network sockets to database sinks:',
        astSource: 'HTTP Header: Auth',
        astTaint: 'jwt_verifier.py:44',
        astSink: 'Sanitized Validator',
        ciPipeline: 'CI Pipeline:',
        scanSpeed: 'Scan time:',
        botAuditActive: 'Automated Audit Active',
      }
    },
    trustedBy: {
      headline: 'Trusted by leading engineering teams and DevSecOps pioneers',
      metricText: 'Over 18,400,000 lines of code scanned last month',
      zeroBreaches: '0 confirmed breaches',
    },
    bento: {
      badge: 'Next-Gen Security Engineering',
      title: 'Bento Architecture of ',
      titleGradient: 'CodePulse AI',
      subtitle: 'No more noisy static linters with 500 false positives. CodePulse understands business logic and architectural context.',
      card1: {
        tag: 'AST Depth: 34 Levels',
        title: 'Deep Contextual AST & Code Semantics Analysis',
        desc: 'CodePulse parses code into Abstract Syntax Trees (AST) and tracks tainted data movement across microservices, Kafka topics, and databases.',
        interactiveTitle: 'Interactive Data Flow Chain:',
        clickHint: 'Click a node to inspect',
        nodes: [
          { id: 1, title: 'HTTP Request', type: 'Source', desc: 'User input parameters (JWT Token, Request Body)', status: 'untrusted' },
          { id: 2, title: 'Auth Interceptor', type: 'Middleware', desc: 'Signature algorithm verification & schema decoding', status: 'analyzed' },
          { id: 3, title: 'eBPF Sandbox', type: 'Execution', desc: 'Synthetic exploit simulation in kernel sandbox', status: 'safe' },
          { id: 4, title: 'PostgreSQL Sink', type: 'Database', desc: 'Parameterized query with zero SQLi risk', status: 'secure' },
        ],
        sanitizedBadge: 'Taint Sanitized ✓',
        footer: ['Polymorphic calls', 'Cross-service binding', 'Memory leak detection']
      },
      card2: {
        badge: '0.1% False Positives',
        title: 'Validation in eBPF Sandbox',
        desc: 'CodePulse automatically runs synthetic exploits in an isolated virtualized kernel container to prove exploitability before alerting developers.',
        accuracyLabel: 'Detection Precision',
        accuracySub: 'Every single alert is validated for exploitability',
        footerLeft: 'Linux eBPF Kernel',
        footerRight: 'Zero Noise Policy',
      },
      card3: {
        title: '1-Click AI Auto-Fixes with Tests',
        desc: 'Don’t waste hours writing patches. CodePulse generates production-ready code with regression pytest/jest tests proving the flaw is gone.',
        patchStatus: 'Passed (4/4)',
        footerLeft: 'Pytest & Jest Suites',
        footerRight: '100% Green CI',
      },
      card4: {
        title: 'Continuous Real-Time Compliance & Audit Exports',
        desc: 'Automated compliance evidence collection on every release. Instant export to SARIF, PDF, and Jira for CISO and external auditors.',
        standards: {
          owasp: [
            { id: 'A01', name: 'Broken Access Control', status: 'Protected', score: '100%' },
            { id: 'A02', name: 'Cryptographic Failures', status: 'Protected', score: '100%' },
            { id: 'A03', name: 'Injection (SQL/NoSQL/Command)', status: 'Protected', score: '100%' },
            { id: 'A04', name: 'Insecure Design', status: 'Audit Passed', score: '98%' },
          ],
          soc2: [
            { id: 'CC6.1', name: 'Logical & Physical Access Controls', status: 'Active', score: '100%' },
            { id: 'CC6.6', name: 'Protection Against Vulnerabilities', status: 'Continuous', score: '100%' },
            { id: 'CC7.1', name: 'Vulnerability Detection & Remediation', status: 'Automated', score: '100%' },
            { id: 'CC8.1', name: 'Change Management & PR Approvals', status: 'Integrated', score: '100%' },
          ],
          pci: [
            { id: 'Req 6.2', name: 'Software Security Lifecycle', status: 'Compliant', score: '100%' },
            { id: 'Req 6.3', name: 'Vulnerability Remediation within SLA', status: 'In-PR Fixes', score: '100%' },
            { id: 'Req 6.4', name: 'Public-Facing Web App Protection', status: 'Protected', score: '100%' },
            { id: 'Req 6.5', name: 'Mitigation of Common Coding Flaws', status: 'Auto-Tests', score: '100%' },
          ]
        },
        footerLeft: 'Auto-export to SARIF, Jira, Slack, ISO 27001',
        footerRight: '100% Audit Readiness',
      },
      card5: {
        badge: 'Setup in 60 seconds',
        title: 'Seamlessly Integrates into Your CI/CD Without Friction',
        desc: 'Install the official GitHub App or GitLab integration in one step. No 500-line configuration YAML files required.',
        copyBtn: 'Copy',
        copiedBtn: 'Copied!',
        terminalLogs: [
          'npx codepulse init --repo acme/backend',
          '🔍 Authenticating via GitHub App... Success [✓]',
          '📦 Detected: 14 microservices (Python, TypeScript, Go)',
          '⚙️ Activating eBPF sandbox & OWASP 2026 rule pack...',
          '✨ CodePulse active! All future PRs are protected.'
        ]
      }
    },
    howItWorks: {
      badge: 'Simple & Transparent Flow',
      title: 'How CodePulse Protects Your Codebase',
      subtitle: 'From branch creation to production deploy in 4 automated steps.',
      steps: [
        {
          number: '01',
          title: 'Repository Connect',
          tag: '60 seconds',
          heading: 'One-click setup via GitHub App or GitLab OAuth',
          description: 'CodePulse requests only minimal required read permissions for Pull Requests. Never clones private code to external storage — strict Zero Data Retention.',
          badge: 'OAuth 2.0 Verified',
          items: ['GitHub App installation', 'Branch policy selection (main, staging)', 'Security policy tuning']
        },
        {
          number: '02',
          title: 'PR Background Scan',
          tag: '< 15 seconds',
          heading: 'Automatic analysis on every git push without blocking CI',
          description: 'CodePulse analyzes the Abstract Syntax Tree (AST) of changes in parallel with your build, matching diffs against whole-project architecture.',
          badge: 'Parallel CI Execution',
          items: ['AST diff analysis', 'Dependency graph correlation', 'CVE and secret leak audit']
        },
        {
          number: '03',
          title: 'AI Triage & Simulation',
          tag: '99.9% precision',
          heading: 'Exploit verification inside an isolated eBPF sandbox',
          description: 'Specialized code LLM verifies actual exploitability. If an attack vector is blocked by upstream WAF or input sanitizers, false alarms are suppressed.',
          badge: 'eBPF Kernel Enclave',
          items: ['Payload attack simulation', 'Boundary condition analysis', 'False-positive elimination']
        },
        {
          number: '04',
          title: 'Auto-Fix & Merge',
          tag: '1 Click',
          heading: 'Ready-to-merge Pull Request with code patches and tests',
          description: 'Developers receive an inline PR comment explaining the flaw with a single-click button to apply the verified patch. No review bottlenecks.',
          badge: 'Green CI Passed',
          items: ['Compiled patch code', '100% regression test coverage', 'Auto-approval from SecOps bot']
        }
      ]
    },
    pricing: {
      badge: 'Transparent & Honest Pricing',
      title: 'Invest in Reliability, ',
      titleGradient: 'Not Incident Firefighting',
      subtitle: '14-day free trial on the Pro plan. No credit card required.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      discountBadge: '20% OFF',
      saveYearly: 'Save $120/year per developer',
      developer: {
        name: 'Developer',
        badge: 'Free Forever',
        desc: 'Ideal for individual developers, side projects, and open-source maintainers.',
        priceMonthly: 0,
        priceAnnual: 0,
        features: [
          'Up to 3 public or private repositories',
          'Up to 60 PR scans per month',
          'Basic CVE detection & API key leak audit',
          'Supports Python, JS, TS, Go',
          'GitHub Actions integration',
          'Community Discord support'
        ],
        cta: 'Start for Free'
      },
      pro: {
        name: 'Team (Pro)',
        badge: '🔥 Most Popular Choice',
        desc: 'For fast-moving engineering teams needing maximum velocity and zero vulnerability risk.',
        priceMonthly: 49,
        priceAnnual: 39,
        features: [
          'Unlimited repositories & PR scans',
          'Deep contextual AST taint-flow analysis',
          '1-Click AI Auto-Fixes with unit tests',
          'eBPF isolated sandbox verification',
          'Continuous compliance: OWASP, SOC 2, PCI',
          'Integrations: GitHub, GitLab, Slack, Jira',
          'Priority SLA support (response < 2h)'
        ],
        cta: 'Start 14-Day Free Pro Trial'
      },
      enterprise: {
        name: 'Enterprise',
        badge: 'On-Premise & Air-Gapped',
        desc: 'For enterprise orgs, banks, and fintech teams with strict governance requirements.',
        priceMonthly: 'Custom',
        priceAnnual: 'Custom',
        features: [
          'Deploy in private cloud (AWS VPC, GCP, Azure)',
          'Complete On-Premises isolation (Kubernetes)',
          'Air-Gapped mode without internet connectivity',
          'Custom LLM fine-tuning on your private codebase',
          'SSO / SAML / Okta, RBAC & full audit trails',
          'Dedicated DevSecOps engineer & 99.99% SLA'
        ],
        cta: 'Request Enterprise Demo'
      },
      guarantees: [
        '30-day money-back guarantee',
        'Invoice billing (Wire/SEPA) available',
        '1-click subscription cancellation anytime'
      ]
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Everything You Need to Know Before Starting',
      subtitle: 'Detailed technical answers regarding security, privacy, and architecture.',
      items: [
        {
          q: 'Does CodePulse train on my private source code?',
          a: 'Strictly no. We enforce a zero-data retention (ZDR) policy. Source code is processed strictly inside volatile memory in hardware-isolated Secure Enclaves and immediately discarded after scanning. Your code is never used to train public or foundational models.'
        },
        {
          q: 'Does CodePulse slow down CI/CD pipeline runs?',
          a: 'No. CodePulse runs asynchronously in parallel as soon as a PR is created or updated. Average deep AST analysis takes only 12-25 seconds, meaning your build and deploy pipelines are never blocked.'
        },
        {
          q: 'How does CodePulse differ from legacy SAST tools (SonarQube, Snyk)?',
          a: 'Legacy tools match rigid regex patterns and inundate teams with hundreds of false alarms. CodePulse combines whole-repo AST semantic graphs with LLM triage and executes synthetic exploits in an eBPF sandbox to confirm vulnerability. Moreover, CodePulse generates ready-to-merge patches with regression tests.'
        },
        {
          q: 'How does CodePulse achieve 99.9% precision without false positives?',
          a: 'We use dual-phase verification: first, the model identifies the tainted flow; then, a virtualized eBPF sandbox verifies exploitability given the actual execution environment. If upstream sanitizers or WAF rules mitigate the flaw, the alert is automatically dropped.'
        },
        {
          q: 'Which programming languages and frameworks are supported?',
          a: 'TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, C#, PHP, Ruby, Swift, as well as IaC templates: Terraform, Dockerfile, CloudFormation, and Kubernetes manifests.'
        },
        {
          q: 'Can CodePulse be deployed On-Premises or Air-Gapped?',
          a: 'Yes. Enterprise customers receive Helm charts for Kubernetes (EKS, GKE, OpenShift, Bare Metal). It can operate in complete network isolation with local weights (Llama 3, DeepSeek-Coder).'
        }
      ],
      speakToArchitect: 'Have specific security or compliance questions? Talk to our Chief Security Architect'
    },
    cta: {
      badge: 'Setup in 60 seconds • No credit card required',
      title: 'Stop vulnerabilities before they ever hit ',
      titleGradient: 'production',
      subtitle: 'Connect your repository right now. CodePulse will analyze your next Pull Request and provide verified auto-fixes.',
      emailPlaceholder: 'Enter your work email...',
      submitBtn: 'Start 14-Day Free Pro Trial',
      successMsg: 'GitHub setup link has been sent to your email!',
      zeroRetention: 'Zero-Retention Policy',
      soc2: 'SOC 2 Type II Certified',
      reviews: '★ 4.9/5 based on 480+ engineer reviews'
    },
    contactModal: {
      title: 'Contact CodePulse Team',
      subtitle: 'Have questions about enterprise deployment, custom compliance, or integrations? Send us a message and our security engineers will reach out within 2 hours.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Alex Henderson',
      emailLabel: 'Work Email',
      emailPlaceholder: 'alex@company.com',
      subjectLabel: 'Inquiry Topic',
      subjectPlaceholder: 'Select topic...',
      subjects: ['Enterprise Demo & Pricing', 'Technical Security & Compliance', 'Integration Support', 'Partnership'],
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your team size, tech stack, and goals...',
      consentText: 'I agree to the processing of personal data in accordance with the ',
      consentLink: 'Privacy Policy',
      submitBtn: 'Send Message',
      sendingBtn: 'Sending...',
      successTitle: 'Message Received!',
      successDesc: 'Thank you for reaching out. A DevSecOps specialist will contact you shortly.',
      closeBtn: 'Close'
    },
    authModal: {
      title: 'Start Free with CodePulse',
      subtitle: 'Connect your Git provider or create an account with work email. 14 days free Pro included.',
      githubBtn: 'Continue with GitHub',
      gitlabBtn: 'Continue with GitLab',
      googleBtn: 'Continue with Google',
      orEmail: 'or continue with work email',
      emailLabel: 'Work Email',
      emailPlaceholder: 'name@company.com',
      passwordLabel: 'Password',
      passwordPlaceholder: '••••••••',
      forgotPassword: 'Forgot password?',
      submitBtn: 'Create Account & Start Free',
      hasAccount: 'Already have an account?',
      signInLink: 'Sign In',
      termsNote: 'By continuing, you agree to our Terms of Service and Privacy Policy. Zero-Data Retention guaranteed.'
    },
    footer: {
      bio: 'Autonomous platform for code review, vulnerability detection, and automated patch generation in Git Pull Requests.',
      statusNormal: 'All systems operational',
      uptime: '99.99% Uptime',
      colProduct: 'Product',
      colIntegrations: 'Integrations',
      colSecurity: 'Security',
      copyright: 'CodePulse Inc. All rights reserved. Built for modern DevSecOps teams.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      hallOfFame: 'Security Hall of Fame'
    }
  },

  ru: {
    langName: 'RU',
    langFull: 'Русский',
    nav: {
      features: 'Возможности',
      howItWorks: 'Как это работает',
      bento: 'Bento-обзор',
      pricing: 'Тарифы',
      faq: 'FAQ',
      contact: 'Контакты',
      githubStars: '4.9k',
      startFree: 'Начать бесплатно',
      signIn: 'Войти',
    },
    hero: {
      badgePrefix: 'CodePulse 2.0:',
      badgeText: 'Глубокий AST-анализ & автофиксы в 1 клик',
      titlePart1: 'Автономное ревью кода и безопасность уровня ',
      titleGradient: 'SecOps в каждом PR',
      titlePart2: '',
      subtitle: 'CodePulse находит скрытые логические уязвимости (OWASP, утечки памяти, CVE) и автоматически генерирует проверенные патчи с юнит-тестами прямо в вашем Git-репозитории за 15 секунд.',
      emailPlaceholder: 'Введите рабочий email для GitHub/GitLab...',
      ctaButton: 'Подключить репозиторий',
      successMessage: 'Отлично! Ссылка доступа отправлена на ваш email.',
      bullets: {
        scanTime: 'Сканирование за 15 секунд',
        zeroRetention: 'Zero-Data Retention (код не сохраняется)',
        soc2: 'SOC 2 Type II & OWASP Ready',
      },
      mockup: {
        prTitle: 'feat(auth): migrate token parser to v2',
        statusCritical: '1 Критическая уязвимость',
        statusSecure: 'Безопасно (Score 99/100)',
        engineName: 'Pulse-70B-Sec',
        fileAuth: 'auth_service.py',
        fileDb: 'database_queries.go',
        fileWebhook: 'webhook_dispatch.ts',
        diffTab: 'Diff & AI Fix',
        astTab: 'AST Taint Flow',
        unverifiedCommit: 'Непроверенный коммит автора',
        aiPatchApplied: 'Патч применен CodePulse Bot',
        alertBadge: 'CRITICAL CWE-347 & CWE-327 (CVSS 9.8)',
        alertTitle: 'Отключение верификации подписи JWT (Signature Bypass)',
        alertDesc: 'Позволяет атакующему создать токен с ролью администратора без знания секретного ключа. Подтверждено eBPF-симуляцией CodePulse.',
        applyFixBtn: '✨ Применить AI-автофикс с тестами',
        applyingFix: 'Генерация безопасного патча в песочнице...',
        clickHint: '(Нажмите кнопку для живой демонстрации)',
        patchVerified: '✓ Патч успешно верифицирован',
        testsGenerated: '12 юнит-тестов сгенерировано',
        patchDesc: 'Уязвимость CWE-347 устранена. Ветка готова к слиянию (Merge).',
        resetBtn: 'Сбросить тест',
        prApproved: 'PR Одобрен',
        astTitle: 'Семантический граф потока данных (AST Dataflow)',
        astSubtitle: 'CodePulse отслеживает происхождение недоверенных переменных от сетевого сокета до выполнения в базе данных:',
        astSource: 'HTTP Header: Auth',
        astTaint: 'jwt_verifier.py:44',
        astSink: 'Sanitized Validator',
        ciPipeline: 'CI Pipeline:',
        scanSpeed: 'Время сканирования:',
        botAuditActive: 'Автоматический аудит включен',
      }
    },
    trustedBy: {
      headline: 'Доверяют ведущие инженерные команды и DevSecOps лидеры',
      metricText: 'Более 18,400,000 строк кода проанализировано за последний месяц',
      zeroBreaches: '0 подтвержденных утечек',
    },
    bento: {
      badge: 'Инженерия безопасности нового поколения',
      title: 'Bento-архитектура ',
      titleGradient: 'CodePulse AI',
      subtitle: 'Никаких бесполезных статических сканеров со списком из 500 ложных алертов. CodePulse понимает бизнес-логику и контекст вашего приложения.',
      card1: {
        tag: 'AST Depth: 34 Levels',
        title: 'Глубокий контекстный анализ AST & семантика кода',
        desc: 'CodePulse разбирает код в абстрактное синтаксическое дерево (AST) и отслеживает перемещение «грязных» данных (Taint Analysis) между контроллерами, очередями Kafka и базами данных.',
        interactiveTitle: 'Интерактивная цепочка потока данных:',
        clickHint: 'Кликните для выбора узла',
        nodes: [
          { id: 1, title: 'HTTP Request', type: 'Source', desc: 'Входные данные от пользователя (JWT Token, Body)', status: 'untrusted' },
          { id: 2, title: 'Auth Interceptor', type: 'Middleware', desc: 'Декодирование и верификация алгоритма подписи', status: 'analyzed' },
          { id: 3, title: 'eBPF Sandbox', type: 'Execution', desc: 'Проверка эксплойта в виртуализированном ядре', status: 'safe' },
          { id: 4, title: 'PostgreSQL Sink', type: 'Database', desc: 'Параметризованный запрос без риска SQLi', status: 'secure' },
        ],
        sanitizedBadge: 'Taint Sanitized ✓',
        footer: ['Полиморфные вызовы', 'Кросс-модульное связывание', 'Анализ утечек памяти']
      },
      card2: {
        badge: '0.1% False Positives',
        title: 'Валидация в eBPF-песочнице',
        desc: 'CodePulse автоматически запускает синтетический эксплойт в изолированной песочнице, чтобы доказать реальную уязвимость перед отправкой алерта.',
        accuracyLabel: 'Точность детекции',
        accuracySub: 'Каждый алерт проверен на эксплойт',
        footerLeft: 'Ядро Linux eBPF',
        footerRight: 'Zero Noise Policy',
      },
      card3: {
        title: '1-Click AI Автофиксы с тестами',
        desc: 'CodePulse генерирует готовый коммит с исправлением и регрессионными pytest/jest тестами, подтверждающими устранение бага.',
        patchStatus: 'Passed (4/4)',
        footerLeft: 'Pytest & Jest',
        footerRight: '100% Green CI',
      },
      card4: {
        title: 'Непрерывный комплаенс и экспорт аудиторских отчетов',
        desc: 'Автоматическая фиксация подтверждений соответствия (Compliance Evidence) при каждом релизе. Экспорт в SARIF и Jira в 1 клик.',
        standards: {
          owasp: [
            { id: 'A01', name: 'Broken Access Control', status: 'Защищено', score: '100%' },
            { id: 'A02', name: 'Cryptographic Failures', status: 'Защищено', score: '100%' },
            { id: 'A03', name: 'Injection (SQL/NoSQL)', status: 'Защищено', score: '100%' },
            { id: 'A04', name: 'Insecure Design', status: 'Аудит пройден', score: '98%' },
          ],
          soc2: [
            { id: 'CC6.1', name: 'Logical Access Controls', status: 'Активно', score: '100%' },
            { id: 'CC6.6', name: 'Protection Against Flaws', status: 'Мониторинг', score: '100%' },
            { id: 'CC7.1', name: 'Vulnerability Remediation', status: 'Автоматизировано', score: '100%' },
            { id: 'CC8.1', name: 'Change Management in PR', status: 'Интегрировано', score: '100%' },
          ],
          pci: [
            { id: 'Req 6.2', name: 'Software Security Lifecycle', status: 'Соответствует', score: '100%' },
            { id: 'Req 6.3', name: 'Vulnerability SLA in PR', status: 'С фиксами', score: '100%' },
            { id: 'Req 6.4', name: 'Web App Protection', status: 'Защищено', score: '100%' },
            { id: 'Req 6.5', name: 'Common Coding Flaws Fix', status: 'Авто-тесты', score: '100%' },
          ]
        },
        footerLeft: 'Экспорт в SARIF, Jira, Slack',
        footerRight: '100% Audit Readiness',
      },
      card5: {
        badge: 'Подключение за 60 секунд',
        title: 'Встраивается в ваш существующий CI/CD без трения',
        desc: 'Установите официальное приложение для GitHub, GitLab или подключите CLI-утилиту в один шаг без громоздких конфигураций.',
        copyBtn: 'Копировать',
        copiedBtn: 'Скопировано!',
        terminalLogs: [
          'npx codepulse init --repo acme/backend',
          '🔍 Аутентификация через GitHub App... Успешно [✓]',
          '📦 Обнаружено: 14 микросервисов (Python, TypeScript, Go)',
          '⚙️ Активация eBPF-песочницы и базы правил OWASP 2026...',
          '✨ CodePulse активен! Все будущие PR защищены.'
        ]
      }
    },
    howItWorks: {
      badge: 'Простой и прозрачный флоу',
      title: 'Как CodePulse защищает ваш код',
      subtitle: 'От создания ветки до безопасного деплоя в продакшн за 4 автоматических шага.',
      steps: [
        {
          number: '01',
          title: 'Подключение репозитория',
          tag: '60 сек',
          heading: 'Установка в один клик через GitHub App или GitLab OAuth',
          description: 'CodePulse запрашивает только минимально необходимые права для чтения Pull Request. Никакого клонирования закрытого кода на сторонние сервера — строгая политика Zero Data Retention.',
          badge: 'OAuth 2.0 Verified',
          items: ['Установка GitHub App', 'Выбор веток (main, staging)', 'Настройка политик безопасности']
        },
        {
          number: '02',
          title: 'Фоновое сканирование PR',
          tag: '< 15 сек',
          heading: 'Автоматический анализ при каждом git push без блокировки CI',
          description: 'CodePulse параллельно со сборкой анализирует синтаксическое дерево (AST) изменений, сопоставляя их с архитектурным контекстом всего приложения.',
          badge: 'Parallel CI Execution',
          items: ['Анализ AST-диффа', 'Сопоставление с графом зависимостей', 'Аудит CVE и утечек секрета']
        },
        {
          number: '03',
          title: 'ИИ-триаж и симуляция',
          tag: '99.9% точность',
          heading: 'Верификация эксплойта в eBPF-песочнице',
          description: 'Специализированная LLM-модель проверяет реальную эксплуатируемость уязвимости. Если вектор атаки заблокирован внешним WAF, ложный алерт отсекается.',
          badge: 'eBPF Kernel Enclave',
          items: ['Симуляция полезной нагрузки (Payload)', 'Проверка граничных условий', 'Отсечение ложных срабатываний']
        },
        {
          number: '04',
          title: 'Авто-фикс и слияние',
          tag: 'В 1 клик',
          heading: 'Готовый Pull Request с исправлением и юнит-тестами',
          description: 'Разработчик получает комментарий прямо в PR с пояснением уязвимости и кнопкой применения безопасного патча. Никаких споров на код-ревью.',
          badge: 'Green CI Passed',
          items: ['Сгенерированный патч кода', '100% покрытие регрессионными тестами', 'Авто-аппрув от SecOps бота']
        }
      ]
    },
    pricing: {
      badge: 'Прозрачные и честные тарифы',
      title: 'Инвестируйте в надежность, ',
      titleGradient: 'а не в тушение пожаров',
      subtitle: '14 дней бесплатного пробного периода на плане Pro. Кредитная карта не требуется.',
      monthly: 'Ежемесячно',
      yearly: 'Ежегодно',
      discountBadge: 'Скидка 20%',
      saveYearly: 'Экономия $120 в год на каждого разработчика',
      developer: {
        name: 'Developer',
        badge: 'Бесплатно навсегда',
        desc: 'Для индивидуальных разработчиков, пет-проектов и соло-создателей.',
        priceMonthly: 0,
        priceAnnual: 0,
        features: [
          'До 3 репозиториев',
          '60 PR проверок в месяц',
          'Поиск CVE и утечек ключей',
          'Поддержка Python, JS, TS, Go',
          'GitHub Actions интеграция',
          'Комьюнити-поддержка в Discord'
        ],
        cta: 'Начать бесплатно'
      },
      pro: {
        name: 'Team (Pro)',
        badge: '🔥 Самый популярный выбор',
        desc: 'Для растущих продуктовых команд, которым нужна максимальная скорость и нулевой риск.',
        priceMonthly: 49,
        priceAnnual: 39,
        features: [
          'Неограниченно репозиториев и PR',
          'Глубокий AST-анализ потока данных',
          '1-Click AI автофиксы с тестами',
          'Валидация в eBPF-песочнице',
          'OWASP Top 10 & SOC 2 отчеты',
          'Интеграции: GitHub, GitLab, Slack, Jira',
          'Приоритетная поддержка (< 2ч)'
        ],
        cta: 'Попробовать 14 дней бесплатно'
      },
      enterprise: {
        name: 'Enterprise',
        badge: 'On-Premise & Air-Gapped',
        desc: 'Для крупных технологических компаний и финтеха со строгими требованиями.',
        priceMonthly: 'Custom',
        priceAnnual: 'Custom',
        features: [
          'Развертывание в AWS VPC / Kubernetes',
          'Air-Gapped режим без интернета',
          'Дообучение моделей на вашей кодовой базе',
          'SSO / SAML / Okta, RBAC и аудит',
          'Выделенный инженер DevSecOps и SLA 99.99%'
        ],
        cta: 'Запросить демо для компании'
      },
      guarantees: [
        '30-дневная гарантия возврата средств',
        'Оплата по счету (Безналичный расчет)',
        'Отмена подписки в 1 клик в любое время'
      ]
    },
    faq: {
      badge: 'Часто задаваемые вопросы',
      title: 'Все, что нужно знать перед стартом',
      subtitle: 'Ответы на ключевые технические вопросы об архитектуре и безопасности.',
      items: [
        {
          q: 'Обучается ли CodePulse на моем закрытом исходном коде?',
          a: 'Категорически нет. Мы придерживаемся строгой политики Zero-Data Retention (ZDR). Исходный код обрабатывается в защищенных изолированных анклавах (Secure Enclaves) в оперативной памяти и немедленно уничтожается после завершения сканирования.'
        },
        {
          q: 'Замедляет ли CodePulse скорость сборки и прохождения CI/CD?',
          a: 'Нет. CodePulse запускается асинхронно в параллельном потоке при создании или обновлении Pull Request. Среднее время глубокого анализа составляет 12-25 секунд. Ваши деплой-пайплайны не блокируются.'
        },
        {
          q: 'Чем CodePulse отличается от традиционных SAST (SonarQube, Snyk)?',
          a: 'Традиционные сканеры генерируют сотни ложных алертов по regex-паттернам. CodePulse понимает семантику AST, запускает симуляцию эксплойта в eBPF-песочнице и выдает готовый PR с исправлением и тестами.'
        },
        {
          q: 'Как CodePulse достигает 99.9% точности и отсекает ложные срабатывания?',
          a: 'Мы используем двухэтапную верификацию: сначала нейросеть выявляет потенциальную уязвимость и поток данных, затем в eBPF-песочнице эмулируется запуск эксплойта. Если эксплойт невозможно применить, алерт отсекается.'
        },
        {
          q: 'Какие языки программирования и фреймворки поддерживаются?',
          a: 'TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, C#, PHP, Ruby, Swift, а также Terraform, Dockerfile и Kubernetes YAML.'
        },
        {
          q: 'Возможно ли развернуть CodePulse локально в On-Premises контуре?',
          a: 'Да. На тарифе Enterprise доступно развертывание в вашем Kubernetes кластере (AWS EKS, GCP GKE, OpenShift) с поддержкой полностью изолированного air-gapped режима.'
        }
      ],
      speakToArchitect: 'Остались вопросы по безопасности? Поговорите с нашим ведущим архитектором'
    },
    cta: {
      badge: 'Старт за 60 секунд • Без кредитной карты',
      title: 'Остановите уязвимости до того, как они попадут в ',
      titleGradient: 'продакшн',
      subtitle: 'Подключите репозиторий прямо сейчас. CodePulse автоматически проанализирует первый Pull Request и сгенерирует готовые исправления.',
      emailPlaceholder: 'Введите рабочий email...',
      submitBtn: 'Начать 14 дней Pro',
      successMsg: 'Ссылка для подключения репозитория отправлена на почту!',
      zeroRetention: 'Zero-Retention Policy',
      soc2: 'SOC 2 Type II Сертифицировано',
      reviews: '★ 4.9 из 5 на основе 480+ отзывов'
    },
    contactModal: {
      title: 'Связаться с командой CodePulse',
      subtitle: 'Есть вопросы по внедрению в Enterprise, кастомному комплаенсу или интеграциям? Отправьте сообщение, и наши DevSecOps инженеры свяжутся с вами в течение 2 часов.',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Константин Смирнов',
      emailLabel: 'Рабочий email',
      emailPlaceholder: 'k.smirnov@company.ru',
      subjectLabel: 'Тема обращения',
      subjectPlaceholder: 'Выберите тему...',
      subjects: ['Демонстрация Enterprise и тарифы', 'Техническая безопасность и комплаенс', 'Помощь с интеграцией CI/CD', 'Партнерство'],
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Расскажите о размере команды, технологическом стеке и задачах...',
      consentText: 'Я даю согласие на обработку персональных данных в соответствии с ',
      consentLink: 'Политикой конфиденциальности',
      submitBtn: 'Отправить сообщение',
      sendingBtn: 'Отправка...',
      successTitle: 'Сообщение успешно отправлено!',
      successDesc: 'Спасибо за обращение. Наш ведущий специалист свяжется с вами в течение 2 часов.',
      closeBtn: 'Закрыть'
    },
    authModal: {
      title: 'Регистрация и вход в CodePulse',
      subtitle: 'Подключите ваш Git-провайдер или войдите с рабочим email. 14 дней тарифа Pro бесплатно.',
      githubBtn: 'Продолжить через GitHub',
      gitlabBtn: 'Продолжить через GitLab',
      googleBtn: 'Продолжить через Google',
      orEmail: 'или используйте рабочий email',
      emailLabel: 'Рабочий email',
      emailPlaceholder: 'name@company.com',
      passwordLabel: 'Пароль',
      passwordPlaceholder: '••••••••',
      forgotPassword: 'Забыли пароль?',
      submitBtn: 'Создать аккаунт и начать бесплатно',
      hasAccount: 'Уже есть аккаунт?',
      signInLink: 'Войти',
      termsNote: 'Продолжая, вы соглашаетесь с Условиями обслуживания и Политикой Zero-Data Retention.'
    },
    footer: {
      bio: 'Автономная платформа для ревью кода, поиска логических уязвимостей и автоматического создания проверенных патчей в Pull Request.',
      statusNormal: 'Все системы работают штатно',
      uptime: '99.99% Uptime',
      colProduct: 'Продукт',
      colIntegrations: 'Интеграции',
      colSecurity: 'Безопасность',
      copyright: 'CodePulse Inc. Все права защищены. Разработано для современных DevSecOps команд.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      hallOfFame: 'Security Hall of Fame'
    }
  },

  lv: {
    langName: 'LV',
    langFull: 'Latviešu',
    nav: {
      features: 'Iespējas',
      howItWorks: 'Kā tas strādā',
      bento: 'Bento pārskats',
      pricing: 'Cenas',
      faq: 'BUJ',
      contact: 'Kontakti',
      githubStars: '4.9k',
      startFree: 'Sākt bez maksas',
      signIn: 'Pieslēgties',
    },
    hero: {
      badgePrefix: 'CodePulse 2.0:',
      badgeText: 'Dziļā AST analīze & 1-klikšķa labojumi',
      titlePart1: 'Autonoma koda pārskatīšana un ',
      titleGradient: 'SecOps līmeņa drošība',
      titlePart2: ' katrā PR',
      subtitle: 'CodePulse atklāj slēptās arhitektūras ievainojamības (OWASP, atmiņas noplūdes, CVE) un 15 sekunžu laikā automātiski ģenerē pārbaudītus labojumus ar vienībtestiem tieši jūsu Git repozitorijā.',
      emailPlaceholder: 'Ievadiet darba e-pastu GitHub/GitLab...',
      ctaButton: 'Pieslēgt repozitoriju',
      successMessage: 'Lieliski! Piekļuves saite ir nosūtīta uz jūsu e-pastu.',
      bullets: {
        scanTime: 'Skenēšana < 15 sekundēs',
        zeroRetention: 'Zero-Data Retention (kods netiek saglabāts)',
        soc2: 'SOC 2 Type II & OWASP Gatavība',
      },
      mockup: {
        prTitle: 'feat(auth): migrate token parser to v2',
        statusCritical: '1 Kritiska ievainojamība',
        statusSecure: 'Drošs (Vērtējums 99/100)',
        engineName: 'Pulse-70B-Sec',
        fileAuth: 'auth_service.py',
        fileDb: 'database_queries.go',
        fileWebhook: 'webhook_dispatch.ts',
        diffTab: 'Diff & AI Labojums',
        astTab: 'AST Taint Plūsma',
        unverifiedCommit: 'Autora nepārbaudīts komits',
        aiPatchApplied: 'Labots ar CodePulse AI Botu',
        alertBadge: 'KRITISKS CWE-347 & CWE-327 (CVSS 9.8)',
        alertTitle: 'JWT paraksta verifikācija atslēgta (Signature Bypass)',
        alertDesc: 'Ļauj uzbrucējam viltot administratora lomu bez slepenās atslēgas. Apstiprināts ar CodePulse eBPF simulāciju.',
        applyFixBtn: '✨ Piemērot AI automātisko labojumu',
        applyingFix: 'Droša labojuma ģenerēšana smilškastē...',
        clickHint: '(Nospiediet pogu, lai redzētu tiešraides labojumu)',
        patchVerified: '✓ Labojums veiksmīgi pārbaudīts',
        testsGenerated: 'Ģenerēti 12 vienībtesti',
        patchDesc: 'Ievainojamība CWE-347 novērsta. Zars ir gatavs sapludināšanai (Merge).',
        resetBtn: 'Atiestatīt testu',
        prApproved: 'PR Apstiprināts',
        astTitle: 'Semantiskais datu plūsmas grafs (AST Taint Tracking)',
        astSubtitle: 'CodePulse izseko neuzticamu mainīgo kustību no tīkla ligzdas līdz datubāzes izpildei:',
        astSource: 'HTTP Galvene: Auth',
        astTaint: 'jwt_verifier.py:44',
        astSink: 'Sanitizēts validators',
        ciPipeline: 'CI Konveijers:',
        scanSpeed: 'Skenēšanas laiks:',
        botAuditActive: 'Automātiskais audits aktīvs',
      }
    },
    trustedBy: {
      headline: 'Uzticas vadošās inženieru komandas un DevSecOps līderi',
      metricText: 'Pagājušajā mēnesī noskenēts vairāk nekā 18 400 000 koda rindiņu',
      zeroBreaches: '0 apstiprinātu datu noplūžu',
    },
    bento: {
      badge: 'Nākamās paaudzes drošības inženierija',
      title: 'Bento arhitektūra no ',
      titleGradient: 'CodePulse AI',
      subtitle: 'Nekādu bezjēdzīgu statisko skeneru ar 500 viltus trauksmēm. CodePulse saprot lietojumprogrammas biznesa loģiku un arhitektūras kontekstu.',
      card1: {
        tag: 'AST Dziļums: 34 Līmeņi',
        title: 'Dziļā kontekstuālā AST & koda semantikas analīze',
        desc: 'CodePulse parsē kodu abstraktā sintakses kokā (AST) un izseko "inficēto" datu plūsmu (Taint Analysis) starp mikropakalpojumiem, Kafka rindām un datubāzēm.',
        interactiveTitle: 'Interaktīvā datu plūsmas ķēde:',
        clickHint: 'Uzklikšķiniet uz mezgla, lai pārbaudītu',
        nodes: [
          { id: 1, title: 'HTTP Pieprasījums', type: 'Avots', desc: 'Lietotāja ievaddati (JWT Token, Pieprasījuma pamatteksts)', status: 'untrusted' },
          { id: 2, title: 'Autentifikācijas pārtvērējs', type: 'Starpprogrammatūra', desc: 'Paraksta algoritma pārbaude un dekodēšana', status: 'analyzed' },
          { id: 3, title: 'eBPF Smilškaste', type: 'Izpilde', desc: 'Sintētiskā eksploita pārbaude izolētā kodolā', status: 'safe' },
          { id: 4, title: 'PostgreSQL Izpilde', type: 'Datubāze', desc: 'Parametrizēts vaicājums bez SQLi riska', status: 'secure' },
        ],
        sanitizedBadge: 'Dati sanitizēti ✓',
        footer: ['Polimorfie izsaukumi', 'Starpmoduļu saistīšana', 'Atmiņas noplūžu analīze']
      },
      card2: {
        badge: '0.1% Viltus trauksmes',
        title: 'Validācija eBPF smilškastē',
        desc: 'CodePulse automātiski palaiž sintētisko eksploitu izolētā smilškastē, lai pierādītu reālu ievainojamību pirms brīdinājuma nosūtīšanas programmētājam.',
        accuracyLabel: 'Atklāšanas precizitāte',
        accuracySub: 'Katra trauksme ir reāli pārbaudīta',
        footerLeft: 'Linux eBPF Kodols',
        footerRight: 'Nulles trokšņa politika',
      },
      card3: {
        title: '1-Klikšķa AI labojumi ar testiem',
        desc: 'Netērējiet laiku labojumu rakstīšanai. CodePulse ģenerē gatavu komitu ar drošu kodu un regresijas vienībtestiem.',
        patchStatus: 'Nokārtots (4/4)',
        footerLeft: 'Pytest & Jest testu komplekti',
        footerRight: '100% Zaļš CI',
      },
      card4: {
        title: 'Nepārtraukta atbilstība un audita atskaišu eksports',
        desc: 'Automātiska atbilstības pierādījumu vākšana katrā laidienā. Tūlītējs eksports uz SARIF, PDF un Jira drošības vadītājiem un auditoriem.',
        standards: {
          owasp: [
            { id: 'A01', name: 'Broken Access Control', status: 'Aizsargāts', score: '100%' },
            { id: 'A02', name: 'Cryptographic Failures', status: 'Aizsargāts', score: '100%' },
            { id: 'A03', name: 'Injection (SQL/NoSQL)', status: 'Aizsargāts', score: '100%' },
            { id: 'A04', name: 'Insecure Design', status: 'Audits nokārtots', score: '98%' },
          ],
          soc2: [
            { id: 'CC6.1', name: 'Logical Access Controls', status: 'Aktīvs', score: '100%' },
            { id: 'CC6.6', name: 'Protection Against Flaws', status: 'Nepārtraukts', score: '100%' },
            { id: 'CC7.1', name: 'Vulnerability Remediation', status: 'Automatizēts', score: '100%' },
            { id: 'CC8.1', name: 'Change Management in PR', status: 'Integrēts', score: '100%' },
          ],
          pci: [
            { id: 'Req 6.2', name: 'Software Security Lifecycle', status: 'Atbilst', score: '100%' },
            { id: 'Req 6.3', name: 'Vulnerability Remediation in PR', status: 'Ar labojumiem', score: '100%' },
            { id: 'Req 6.4', name: 'Public-Facing Web App Protection', status: 'Aizsargāts', score: '100%' },
            { id: 'Req 6.5', name: 'Mitigation of Common Flaws', status: 'Auto-testi', score: '100%' },
          ]
        },
        footerLeft: 'Eksports uz SARIF, Jira, Slack, ISO 27001',
        footerRight: '100% Audita gatavība',
      },
      card5: {
        badge: 'Uzstādīšana 60 sekundēs',
        title: 'Viegli iekļaujas jūsu CI/CD bez berzes',
        desc: 'Instalējiet oficiālo GitHub App vai GitLab integrāciju vienā solī. Nav nepieciešami 500 rindiņu konfigurācijas faili.',
        copyBtn: 'Kopēt',
        copiedBtn: 'Nokopēts!',
        terminalLogs: [
          'npx codepulse init --repo acme/backend',
          '🔍 Autentifikācija caur GitHub App... Veiksmīgi [✓]',
          '📦 Atklāti: 14 mikropakalpojumi (Python, TypeScript, Go)',
          '⚙️ Aktivizē eBPF smilškasti un OWASP 2026 noteikumu pakotni...',
          '✨ CodePulse ir aktīvs! Visi turpmākie PR ir aizsargāti.'
        ]
      }
    },
    howItWorks: {
      badge: 'Vienkārša un caurspīdīga darbplūsma',
      title: 'Kā CodePulse aizsargā jūsu kodu',
      subtitle: 'No zara izveides līdz drošai izvietošanai produkcijā 4 automatizētos soļos.',
      steps: [
        {
          number: '01',
          title: 'Repozitorija pieslēgšana',
          tag: '60 sekundes',
          heading: 'Uzstādīšana ar vienu klikšķi caur GitHub App vai GitLab OAuth',
          description: 'CodePulse pieprasa tikai minimālās lasīšanas tiesības Pull Request pārbaudei. Kods netiek saglabāts uz ārējiem serveriem — stingra Zero Data Retention politika.',
          badge: 'OAuth 2.0 Verificēts',
          items: ['GitHub App uzstādīšana', 'Zaru izvēle (main, staging)', 'Drošības politiku iestatīšana']
        },
        {
          number: '02',
          title: 'PR skenēšana fonā',
          tag: '< 15 sekundes',
          heading: 'Automātiska analīze katrā git push bez CI aizkaves',
          description: 'CodePulse paralēli būvēšanas procesam analizē izmaiņu sintakses koku (AST), salīdzinot tās ar visas sistēmas arhitektūras kontekstu.',
          badge: 'Paralēla CI Izpilde',
          items: ['AST diff analīze', 'Atkarību grafa saskaņošana', 'CVE un noslēpumu noplūdes audits']
        },
        {
          number: '03',
          title: 'AI triāža un simulācija',
          tag: '99.9% precizitāte',
          heading: 'Eksploita verifikācija izolētā eBPF smilškastē',
          description: 'Specializēts koda LLM modelis pārbauda ievainojamības reālo izmantojamību. Ja uzbrukuma vektors ir bloķēts ar ārēju WAF vai filtriem, viltus trauksme tiek atcelta.',
          badge: 'eBPF Kodola Enklāvs',
          items: ['Uzbrukuma slodzes simulācija', 'Robežnosacījumu pārbaude', 'Viltus trauksmju atcelšana']
        },
        {
          number: '04',
          title: 'Auto-labojums un sapludināšana',
          tag: '1 Klikšķis',
          heading: 'Gatavs Pull Request ar labojumiem un vienībtestiem',
          description: 'Izstrādātājs saņem komentāru tieši PR ar ievainojamības skaidrojumu un pogu droša labojuma piemērošanai. Nekādu strīdu koda pārskatīšanā.',
          badge: 'Zaļš CI Nokārtots',
          items: ['Sastādīts labojuma kods', '100% regresijas testu pārklājums', 'Automātisks SecOps bota apstiprinājums']
        }
      ]
    },
    pricing: {
      badge: 'Caurspīdīgas un godīgas cenas',
      title: 'Ieguldiet uzticamībā, ',
      titleGradient: 'nevis ugunsgrēku dzēšanā',
      subtitle: '14 dienu bezmaksas izmēģinājums Pro plānam. Kredītkarte nav nepieciešama.',
      monthly: 'Mēnesī',
      yearly: 'Gadā',
      discountBadge: '20% ATLAIDE',
      saveYearly: 'Ietaupiet $120/gadā par katru izstrādātāju',
      developer: {
        name: 'Developer',
        badge: 'Bezmaksas uz visiem laikiem',
        desc: 'Ideāli piemērots individuāliem programmētājiem un atvērtā koda uzturētājiem.',
        priceMonthly: 0,
        priceAnnual: 0,
        features: [
          'Līdz 3 publiskiem vai privātiem repozitorijiem',
          'Līdz 60 PR skenēšanām mēnesī',
          'Pamata CVE un atslēgu noplūžu audits',
          'Atbalsts Python, JS, TS, Go',
          'GitHub Actions integrācija',
          'Kopienas atbalsts Discord'
        ],
        cta: 'Sākt bez maksas'
      },
      pro: {
        name: 'Team (Pro)',
        badge: '🔥 Populārākā izvēle',
        desc: 'Strauji augošām komandām, kurām nepieciešams maksimāls ātrums un nulles drošības risks.',
        priceMonthly: 49,
        priceAnnual: 39,
        features: [
          'Neierobežots repozitoriju un PR skaits',
          'Dziļā kontekstuālā AST taint plūsmas analīze',
          '1-Klikšķa AI automātiskie labojumi ar testiem',
          'eBPF izolētas smilškastes verifikācija',
          'Nepārtraukta atbilstība: OWASP, SOC 2, PCI',
          'Integrācijas: GitHub, GitLab, Slack, Jira',
          'Prioritārs SLA atbalsts (atbilde < 2h)'
        ],
        cta: 'Izmēģināt 14 dienas bez maksas'
      },
      enterprise: {
        name: 'Enterprise',
        badge: 'On-Premise & Air-Gapped',
        desc: 'Lieliem uzņēmumiem, bankām un fintech komandām ar stingrām drošības prasībām.',
        priceMonthly: 'Pielāgots',
        priceAnnual: 'Pielāgots',
        features: [
          'Izvietošana privātajā mākonī (AWS VPC, GCP, Azure)',
          'Pilnīga On-Premises izolācija (Kubernetes)',
          'Air-Gapped režīms bez interneta pieslēguma',
          'Pielāgotu LLM modeļu apmācība uz jūsu koda bāzes',
          'SSO / SAML / Okta, RBAC un pilns audita žurnāls',
          'Veltīts DevSecOps inženieris un 99.99% SLA'
        ],
        cta: 'Pieteikt Enterprise demonstrāciju'
      },
      guarantees: [
        '30 dienu naudas atgriešanas garantija',
        'Apmaksa ar rēķinu (Bankas pārskaitījums)',
        'Abonementa atcelšana ar 1 klikšķi jebkurā laikā'
      ]
    },
    faq: {
      badge: 'Biežāk uzdotie jautājumi',
      title: 'Viss, kas jums jāzina pirms darba sākšanas',
      subtitle: 'Detalizētas tehniskās atbildes par drošību, privātumu un arhitektūru.',
      items: [
        {
          q: 'Vai CodePulse tiek apmācīts uz mana privātā koda?',
          a: 'Kategoriski nē. Mēs ievērojam stingru Zero-Data Retention (ZDR) politiku. Izejas kods tiek apstrādāts tikai operatīvajā atmiņā aparatūras izolētos Secure Enclaves un nekavējoties tiek izdzēsts pēc skenēšanas.'
        },
        {
          q: 'Vai CodePulse palēnina CI/CD procesus?',
          a: 'Nē. CodePulse darbojas asinhroni un paralēli uzreiz pēc PR izveides vai atjaunināšanas. Vidējais analīzes laiks ir 12-25 sekundes, tāpēc jūsu būvēšanas un izvietošanas konveijeri netiek bloķēti.'
        },
        {
          q: 'Ar ko CodePulse atšķiras no tradicionālajiem SAST rīkiem (SonarQube, Snyk)?',
          a: 'Tradicionālie rīki izmanto stingrus regex šablonus un rada simtiem viltus trauksmju. CodePulse apvieno visa repozitorija AST semantisko grafu ar eBPF smilškastes simulāciju un uzreiz piedāvā gatavu Pull Request ar labojumu un testiem.'
        },
        {
          q: 'Kā CodePulse sasniedz 99.9% precizitāti bez viltus trauksmēm?',
          a: 'Mēs izmantojam divu posmu verifikāciju: vispirms neironu tīkls atklāj ievainojamību, pēc tam eBPF smilškastē tiek emulēts reāls eksploita uzbrukums. Ja ievainojamību reāli nav iespējams ekspluatēt, trauksme tiek atcelta.'
        },
        {
          q: 'Kādas programmēšanas valodas un ietvari tiek atbalstīti?',
          a: 'TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, C#, PHP, Ruby, Swift, kā arī Terraform, Dockerfile un Kubernetes YAML.'
        },
        {
          q: 'Vai CodePulse ir iespējams izvietot lokāli (On-Premises / VPC)?',
          a: 'Jā. Enterprise plānā mēs nodrošinām Helm charts izvietošanai jūsu Kubernetes klasterī (AWS EKS, GCP GKE, OpenShift) ar pilnu air-gapped atbalstu bez interneta pieslēguma.'
        }
      ],
      speakToArchitect: 'Vai jums ir jautājumi par drošību vai atbilstību? Konsultējieties ar mūsu galveno drošības arhitektu'
    },
    cta: {
      badge: 'Uzstādīšana 60 sekundēs • Bez kredītkartes',
      title: 'Apturiet ievainojamības pirms tās nonāk ',
      titleGradient: 'produkcijā',
      subtitle: 'Pieslēdziet savu repozitoriju tūlīt. CodePulse automātiski analizēs pirmo Pull Request un sagatavos pārbaudītus labojumus.',
      emailPlaceholder: 'Ievadiet darba e-pastu...',
      submitBtn: 'Sākt 14 dienu Pro izmēģinājumu',
      successMsg: 'Pieslēgšanas saite ir nosūtīta uz jūsu e-pastu!',
      zeroRetention: 'Zero-Retention Politika',
      soc2: 'SOC 2 Type II Sertificēts',
      reviews: '★ 4.9 no 5 (vairāk nekā 480 inženieru atsauksmju)'
    },
    contactModal: {
      title: 'Sazināties ar CodePulse komandu',
      subtitle: 'Vai jums ir jautājumi par Enterprise ieviešanu, atbilstības standartiem vai integrācijām? Nosūtiet ziņu, un mūsu DevSecOps inženieri sazināsies ar jums 2 stundu laikā.',
      nameLabel: 'Vārds, Uzvārds',
      namePlaceholder: 'Jānis Bērziņš',
      emailLabel: 'Darba e-pasts',
      emailPlaceholder: 'janis@uznemums.lv',
      subjectLabel: 'Temats',
      subjectPlaceholder: 'Izvēlieties tematu...',
      subjects: ['Enterprise demonstrācija un cenas', 'Tehniskā drošība un atbilstība', 'CI/CD integrācijas palīdzība', 'Partnerība'],
      messageLabel: 'Ziņojums',
      messagePlaceholder: 'Pastāstiet par savu komandu, tehnoloģiju steku un mērķiem...',
      consentText: 'Es piekrītu personas datu apstrādei saskaņā ar ',
      consentLink: 'Privātuma politiku',
      submitBtn: 'Nosūtīt ziņu',
      sendingBtn: 'Nosūta...',
      successTitle: 'Ziņa veiksmīgi nosūtīta!',
      successDesc: 'Paldies par saziņu. Mūsu drošības speciālists sazināsies ar jums tuvāko 2 stundu laikā.',
      closeBtn: 'Aizvērt'
    },
    authModal: {
      title: 'Sāciet bez maksas ar CodePulse',
      subtitle: 'Pieslēdziet savu Git nodrošinātāju vai reģistrējieties ar darba e-pastu. Iekļauts 14 dienu Pro izmēģinājums.',
      githubBtn: 'Turpināt ar GitHub',
      gitlabBtn: 'Turpināt ar GitLab',
      googleBtn: 'Turpināt ar Google',
      orEmail: 'vai turpināt ar darba e-pastu',
      emailLabel: 'Darba e-pasts',
      emailPlaceholder: 'vards@uznemums.lv',
      passwordLabel: 'Parole',
      passwordPlaceholder: '••••••••',
      forgotPassword: 'Aizmirsi paroli?',
      submitBtn: 'Izveidot kontu un sākt bez maksas',
      hasAccount: 'Jau ir konts?',
      signInLink: 'Pieslēgties',
      termsNote: 'Turpinot, jūs piekrītat mūsu Pakalpojumu sniegšanas noteikumiem un Zero-Data Retention politikai.'
    },
    footer: {
      bio: 'Autonoma platforma koda pārskatīšanai, ievainojamību meklēšanai un automātiskai labojumu ģenerēšanai Git Pull Requestos.',
      statusNormal: 'Visas sistēmas darbojas nevainojami',
      uptime: '99.99% Uptime',
      colProduct: 'Produkts',
      colIntegrations: 'Integrācijas',
      colSecurity: 'Drošība',
      copyright: 'CodePulse Inc. Visas tiesības aizsargātas. Izstrādāts modernām DevSecOps komandām.',
      privacy: 'Privātuma politika',
      terms: 'Lietošanas noteikumi',
      hallOfFame: 'Drošības Slavas zāle'
    }
  }
};

