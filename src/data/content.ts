import { Discipline, Project, SocialLink } from '../types';

export const disciplinesData: Discipline[] = [
  {
    id: 'ecommerce',
    title: 'التجارة الإلكترونية',
    titleEn: 'E-Commerce & Digital Retail',
    category: 'E-Commerce',
    categoryEn: 'E-Commerce',
    iconName: 'ShoppingBag',
    description: 'تأسيس وتشغيل المتاجر الإلكترونية الحديثة، بدءاً من اختيار المنتجات وهندسة تجربة العميل وحتى مضاعفة المبيعات وتوسيع العمليات.',
    descriptionEn: 'End-to-end e-commerce store architecture, high-converting checkout flows, product positioning, and scalable retail growth.',
    highlights: [
      'بناء وتجهيز المتاجر الإلكترونية الحديثة (Modern Store Setup)',
      'تطوير واختيار المنتجات الرابحة (Product Research & Sourcing)',
      'تحسين مسارات الشراء ومعدلات التحويل (Conversion Optimization)',
      'تطوير وتوسيع المشاريع التجارية أونلاين (E-Commerce Scaling)'
    ],
    highlightsEn: [
      'Modern High-Performance Store Architecture',
      'Product Sourcing & Value Positioning',
      'Checkout Flow & Conversion Rate Optimization',
      'Sustainable Online Store Growth'
    ],
    quote: 'المتجر الناجح هو مزيج بين تجربة عميل سلسة، وعرض ذي قيمة حقيقية، واستراتيجية تسويق ذكية.',
    quoteEn: 'A thriving store merges frictionless customer experience, undeniable value proposition, and smart unit economics.'
  },
  {
    id: 'digital-business',
    title: 'الأعمال والمشاريع الرقمية',
    titleEn: 'Digital Business & Ventures',
    category: 'Digital Business',
    categoryEn: 'Digital Business',
    iconName: 'Globe',
    description: 'استكشاف الفرص الواعدة على شبكة الإنترنت، وبناء مصادر دخل رقمية متنوعة، وتحويل الأفكار الأولية إلى مشاريع عملية ذات قيمة.',
    descriptionEn: 'Identifying high-leverage internet opportunities, establishing scalable digital revenue streams, and transforming early concepts into operational ventures.',
    highlights: [
      'إطلاق وإدارة المشاريع أونلاين (Online Ventures Launch)',
      'هندسة الخدمات والمنتجات الرقمية (Digital Services Packaging)',
      'بناء وتطوير مصادر دخل رقمية مستدامة (Digital Income Systems)',
      'تطوير الأفكار من مرحلة التخطيط إلى التنفيذ (Idea Execution & Scaling)'
    ],
    highlightsEn: [
      'Online Venture Ideation & Launch',
      'Digital Services & Product Packaging',
      'Scalable Online Revenue Systems',
      'Pragmatic Execution from Concept to Reality'
    ],
    quote: 'الإنترنت يمنح قوة الرافعة المالية والتقنية لمن يمتلك الرؤية والإرادة للتنفيذ اليومي.',
    quoteEn: 'The internet provides unprecedented leverage to those who combine strategic vision with relentless execution.'
  },
  {
    id: 'digital-marketing',
    title: 'التسويق الرقمي واستراتيجيات النمو',
    titleEn: 'Digital Marketing & Growth',
    category: 'Digital Marketing',
    categoryEn: 'Digital Marketing',
    iconName: 'Megaphone',
    description: 'صياغة استراتيجيات تسويقية تعتمد على المحتوى القيم والانتشار المدروس عبر منصات التواصل لبناء جمهور مستهدف وزيادة المبيعات.',
    descriptionEn: 'Formulating high-resonance content strategies and data-driven social growth loops to acquire customers and build loyal audiences.',
    highlights: [
      'صناعة المحتوى الهادف والمؤثر (Strategic Content Creation)',
      'التسويق عبر وسائل التواصل الاجتماعي (Social Media Marketing)',
      'بناء الحضور وتأسيس العلامة على الإنترنت (Digital Brand Presence)',
      'استراتيجيات النمو وزيادة التفاعل والمبيعات (Organic & Paid Growth Tactics)'
    ],
    highlightsEn: [
      'Value-Driven Strategic Content Creation',
      'Social Distribution & Platform Strategy',
      'Digital Brand Presence Frameworks',
      'Audience Engagement & Acquisition Loops'
    ],
    quote: 'المحتوى الجيد يجذب الانتباه، لكن الاستراتيجية المتماسكة هي التي تبني الأثر وتولد النتائج.',
    quoteEn: 'Quality content captures attention, but coherent strategy builds authority and generates lasting results.'
  },
  {
    id: 'digital-services',
    title: 'الخدمات الرقمية وصناعة المحتوى',
    titleEn: 'Digital Services & Media',
    category: 'Digital Services',
    categoryEn: 'Digital Services',
    iconName: 'Zap',
    description: 'تقديم حلول رقمية مؤتمتة وتطوير أدوات ومحتوى تفاعلي يساعد الأفراد والشركات على توسيع حضورهم التجاري على الإنترنت.',
    descriptionEn: 'Delivering automated digital solutions, media systems, and streamlined workflows helping businesses expand their web footprint.',
    highlights: [
      'تجهيز باقات الخدمات الرقمية المتكاملة (Productized Services)',
      'صناعة المحتوى للمنصات الرقمية الحديثة (Cross-Platform Content)',
      'أتمتة التواصل واستقبال طلبات العملاء (Client Workflow Automation)',
      'تطوير مسارات المبيعات الرقمية (Sales Funnel Optimization)'
    ],
    highlightsEn: [
      'Productized Digital Service Offerings',
      'High-Impact Digital Media Production',
      'Client Onboarding & Workflow Automation',
      'Digital Sales Funnel Optimization'
    ],
    quote: 'القيمة الحقيقية للمشروع الرقمي تبدأ عندما تبني نظاماً يحل مشكلة حقيقية للعميل بأعلى كفاءة ممكنة.',
    quoteEn: 'The true value of a digital venture begins when you build an engine solving real customer pain points with maximum efficiency.'
  }
];

export const projectsData: Project[] = [
  {
    id: 'luxe-ecommerce-store',
    title: 'Aura Luxe Store — نموذج متجر رقمي متكامل',
    titleEn: 'Aura Luxe — High-Conversion E-Commerce Platform',
    discipline: 'ecommerce',
    disciplineLabel: 'التجارة الإلكترونية',
    disciplineLabelEn: 'E-Commerce',
    tagline: 'تصميم وهندسة متجر إلكتروني يجمع بين سرعة التصفح وتجربة الشراء السلسة ومعدلات التحويل العالية.',
    taglineEn: 'Store concept combining minimalist modern aesthetic with lightning-fast frictionless checkout.',
    overview: 'تطبيق عملي لتجربة تسوق إلكترونية معاصرة. تم التركيز على بساطة التصفح، إبراز تفاصيل المنتجات، وتسريع عملية الدفع والشحن على الهواتف الذكية.',
    overviewEn: 'A showcase of modern digital retail architecture focusing on clear product presentations, tactile browsing, and instant mobile load speeds.',
    challenge: 'المتاجر التقليدية تتكدس بالعناصر المشتتة والخطوات المعقدة مما يرفع معدل مغادرة السلة ويضعف المبيعات.',
    challengeEn: 'Cluttered e-commerce interfaces distract buyers, inflate cart abandonment, and reduce overall checkout completion.',
    solution: 'واجهة عصرية سريعة، صور نقية، ومسار شراء مبسط بخطوة واحدة مع وسائل دفع رقمية وشارات أمان واضحة.',
    solutionEn: 'Implemented a streamlined UI, crystal-clear product visual hierarchy, and an optimized one-page checkout flow.',
    deliverables: [
      'واجهة متجر متجاوبة بالكامل للهاتف وسطح المكتب (Responsive Store UX)',
      'هندسة صفحات المنتجات الأكثر طلباً (High-Conversion Product Layout)',
      'تكامل بوابات الدفع وشارات الأمان (Payment Gateway Architecture)',
      'خطة تحسين محركات البحث للمنتجات (E-Commerce Catalog SEO)'
    ],
    deliverablesEn: [
      'Full Mobile-First Store Experience',
      'High-Conversion Product Presentation Page',
      'Seamless Checkout Flow & Trust Signals',
      'E-Commerce Catalog SEO Strategy'
    ],
    gradient: 'from-[#14120B] via-[#0E0E12] to-[#08090D]',
    accentColor: '#D4AF37',
    imagePlaceholderType: 'store',
    livePreviewAvailable: true
  },
  {
    id: 'scale-ops-ecommerce',
    title: 'ScaleDrop Ops — منظومة التوريد والتشغيل للمتاجر',
    titleEn: 'ScaleDrop Ops — E-Commerce Supply & Fulfillment Matrix',
    discipline: 'ecommerce',
    disciplineLabel: 'التجارة الإلكترونية',
    disciplineLabelEn: 'E-Commerce Operations',
    tagline: 'هندسة عمليات شحن وتوريد المنتجات وإدارة المخزون لتقليل زمن التسليم ورفع رضا المشترين.',
    taglineEn: 'Operational fulfillment and logistics architecture designed to minimize delivery friction and maximize margin.',
    overview: 'مشروع لتنظيم دورة حياة المنتج في التجارة الإلكترونية، بدءاً من اختيار الموردين، وإدارة الطلبات الواردة، وحتى تتبع الشحن والدعم الفني.',
    overviewEn: 'Complete operational workflow for e-commerce, spanning supplier sourcing, incoming order fulfillment, and client satisfaction.',
    challenge: 'تأخر الشحن وسوء إدارة المخزون والموردين يؤديان إلى شكاوى العملاء وتراجع الأرباح.',
    challengeEn: 'Fulfillment delays and inefficient stock management lead to customer friction and operational margin loss.',
    solution: 'نظام إدارة موحد يربط الطلبات تلقائياً مع شركات التوصيل، مع متابعة فورية لحالة الشحنات وتأكيد الاستلام.',
    solutionEn: 'Automated fulfillment pipeline connecting order intake to dispatch couriers with automated delivery tracking.',
    deliverables: [
      'خريطة مسار معالجة الطلبات السريعة (Order Fulfillment Map)',
      'قوالب المتابعة مع شركات الشحن والتوصيل (Courier Integration Protocol)',
      'نظام قياس نسب التسليم والإرجاع (Delivery Success Analytics)',
      'دليل خدمة العملاء والدعم السريع (Customer Support Playbook)'
    ],
    deliverablesEn: [
      'High-Velocity Order Processing Protocol',
      'Logistics & Courier Integration Systems',
      'Delivery Rate & Return Analytics Dashboard',
      'Post-Purchase Customer Care Playbook'
    ],
    gradient: 'from-[#0E1A16] via-[#0A1210] to-[#08090D]',
    accentColor: '#10B981',
    imagePlaceholderType: 'operations',
    livePreviewAvailable: true
  },
  {
    id: 'digital-funnel-matrix',
    title: 'Apex Growth — مسار تسويق وتحويل للخدمات الرقمية',
    titleEn: 'Apex Growth — Digital Funnel & Acquisition Engine',
    discipline: 'marketing',
    disciplineLabel: 'التسويق الرقمي',
    disciplineLabelEn: 'Digital Marketing',
    tagline: 'صفحة هبوط واستراتيجية تسويقية موجهة لجلب العملاء المستهدفين وتحويلهم لطلبات فعلية.',
    taglineEn: 'High-intent acquisition funnel and landing experience engineered to turn traffic into qualified inquiries.',
    overview: 'بناء استراتيجية تسويق رقمي تركز على صفحات الهبوط السريعة وتقديم قيمة واضحة منذ الثواني الأولى لزيارة العميل.',
    overviewEn: 'Strategic marketing architecture built on fast, compelling landing page copy, value presentation, and low-friction inquiry paths.',
    challenge: 'انخفاض معدل التحويل في صفحات الهبوط التقليدية بسبب كثرة النصوص غير المفيدة وغياب مسار واضح لاتخاذ القرار.',
    challengeEn: 'Generic landing pages suffer from high bounce rates due to vague copy and weak value proposition communication.',
    solution: 'هيكلة صفحة هبوط ذات رسالة محددة، تبرز النتائج والفوائد الملموسة، مع زر تواصل وطلب مباشر وسريع دون تعقيد.',
    solutionEn: 'Engineered a hyper-focused value proposition section, frictionless contact gateway, and structured inquiry resolution.',
    deliverables: [
      'تصميم صفحة هبوط فائقة السرعة (Ultra-Fast Landing Page UX)',
      'صياغة نصوص بيعية مقنعة ومباشرة (Direct Response Copywriting)',
      'ربط نموذج الطلب المباشر وتتبع الزيارات (Inquiry Form & Event Setup)',
      'خطة حملات تسويقية لاختبار العرض (Campaign Testing Framework)'
    ],
    deliverablesEn: [
      'Ultra-Fast Responsive Landing UX',
      'Direct-Response Value-Focused Copywriting',
      'Seamless Inquiry Capture Flow',
      'Paid & Organic Testing Framework'
    ],
    gradient: 'from-[#17130F] via-[#0F0E0D] to-[#08090D]',
    accentColor: '#E2B857',
    imagePlaceholderType: 'funnel',
    livePreviewAvailable: true
  },
  {
    id: 'monetize-lab-ecosystem',
    title: 'MonetizeLab — نموذج إطلاق المنتجات والخدمات الرقمية',
    titleEn: 'MonetizeLab — Digital Product & Income Architecture',
    discipline: 'business',
    disciplineLabel: 'الأعمال الرقمية',
    disciplineLabelEn: 'Digital Business',
    tagline: 'خطة عمل ونظام أتمتة لتقديم المنتجات والخدمات الرقمية عبر الإنترنت بشكل مستقل ومستدام.',
    taglineEn: 'Blueprint and operational model for delivering digital services and knowledge assets autonomously.',
    overview: 'إطار عمل للأعمال الرقمية يوضح كيفية تحويل الخبرات والمهارات إلى منتجات رقمية (أدلة، قوالب، أدوات، استشارات) تباع بشكل متكرر.',
    overviewEn: 'Operational framework mapping how digital skills translate into recurring online products, downloadable assets, and advisory services.',
    challenge: 'صعوبة الانتقال من مقايضة الوقت بالمال إلى بناء أصول رقمية تولد قيمة مستمرة دون قيود جغرافية.',
    challengeEn: 'Transitioning from linear time-for-money tasks to scalable, leverage-enabled digital assets.',
    solution: 'توظيف أدوات الأتمتة الحديثة وتنسيق باقات الخدمات بنظام تسعير قائم على القيمة المضافة وليس الساعات.',
    solutionEn: 'Leveraged automation pipelines, productized service tiers, and value-based pricing methodologies.',
    deliverables: [
      'مخطط تسعير وباقات الخدمات الرقمية (Productized Service Architecture)',
      'دليل أتمتة استقبال وتجهيز طلبات العملاء (Client Onboarding Pipeline)',
      'استراتيجية المحتوى المغناطيسي لجذب العملاء (Lead Asset Strategy)',
      'نظام قياس العائد وإعادة الاستثمار (Venture Reinvestment Metrics)'
    ],
    deliverablesEn: [
      'Productized Service Tier Pricing Model',
      'Automated Client Onboarding System',
      'High-Leverage Lead Asset Strategy',
      'Venture Reinvestment Metrics'
    ],
    gradient: 'from-[#0A161C] via-[#091014] to-[#08090D]',
    accentColor: '#38BDF8',
    imagePlaceholderType: 'ecosystem',
    livePreviewAvailable: true
  },
  {
    id: 'media-growth-engine',
    title: 'GrowthMedia — استراتيجية صناعة المحتوى ونمو الحسابات',
    titleEn: 'GrowthMedia — Content Creation & Audience Scaling',
    discipline: 'marketing',
    disciplineLabel: 'التسويق وصناعة المحتوى',
    disciplineLabelEn: 'Content Strategy',
    tagline: 'هيكل منظم لصناعة مقاطع فيديو قصيرة ومنشورات رقمية تشرح مفاهيم التجارة والأعمال بأسلوب شيق وجذاب.',
    taglineEn: 'Structured editorial framework producing short-form video and posts explaining online business principles and digital commerce.',
    overview: 'منظومة إنتاج محتوى متعدد المنصات (إنستغرام، تيك توك، يوتيوب، إكس) لترسيخ الوعي بريادة الأعمال وبناء جمهور مهتم بالتجارة الإلكترونية.',
    overviewEn: 'Cross-platform content pipeline across Instagram, TikTok, YouTube, and X focused on practical digital commerce and venture building.',
    challenge: 'المحتوى الرقمي المنتشر غالباً ما يكون عشوائياً بدون استراتيجية واضحة للتحويل إلى عملاء أو مبيعات.',
    challengeEn: 'Most online business content lacks a strategic roadmap to convert audience engagement into tangible business results.',
    solution: 'تقديم محتوى عملي، أمين، بصري بامتياز، يشرح أدوات التجارة والتسويق وتطوير المشاريع دون مبالغات زائفة.',
    solutionEn: 'Created honest, actionable micro-lessons demystifying store building, marketing tactics, and real digital skills.',
    deliverables: [
      'تقويم محتوى شهري مدروس (Monthly Editorial Calendar)',
      'قوالب نصوص المقاطع القصيرة السريعة (Short-Form Video Scripts)',
      'هيكل إنتاج المنشورات والإنفوجرافيك التجاري (Commercial Visual Pack)',
      'خطة قياس معدلات التفاعل والمشاهدات (Audience Analytics Framework)'
    ],
    deliverablesEn: [
      'Monthly Editorial Content Grid',
      'Short-Form Video Script Frameworks',
      'Business Infographic Asset Systems',
      'Growth & Engagement Analytics Dashboard'
    ],
    gradient: 'from-[#140F1B] via-[#0E0C13] to-[#08090D]',
    accentColor: '#A855F7',
    imagePlaceholderType: 'media',
    livePreviewAvailable: true
  }
];

export const socialLinksData: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@ayoub.elmaissouri',
    url: 'https://instagram.com/ayoub.elmaissouri?dlrf=eGEyeGZ6MGtpcmx3',
    icon: 'Instagram',
    badge: 'حساب موثق ومباشر'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    handle: '+212 660-177093',
    url: 'https://wa.me/212660177093',
    icon: 'MessageCircle',
    badge: 'محادثة سريعة'
  },
  {
    id: 'email',
    name: 'البريد الإلكتروني',
    handle: 'Aelmaissouri@gmail.com',
    url: 'mailto:Aelmaissouri@gmail.com',
    icon: 'Send',
    badge: 'تواصل رسمي'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Ayoub El Maissouri',
    url: 'https://linkedin.com/in/ayoub-elmaissouri',
    icon: 'Linkedin',
    badge: 'شبكة مهنية'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@ayoub.elmaissouri',
    url: 'https://tiktok.com/@ayoub.elmaissouri',
    icon: 'Video',
    badge: 'مقاطع أعمال'
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@AyoubElmaissouri',
    url: 'https://x.com/AyoubElmaissouri',
    icon: 'Twitter',
    badge: 'أفكار وتحديثات'
  }
];

export const philosophyPillars = [
  {
    id: 'tech',
    title: 'التكنولوجيا والأتمتة',
    titleEn: 'Technology & Automation',
    subtitle: 'الرافعة الرقمية وتوفير الوقت',
    subtitleEn: 'Digital leverage & infrastructure',
    description: 'تسخير البرمجيات والمنصات الحديثة لأتمتة العمليات وتوسيع نطاق النشاط التجاري بأعلى كفاءة.',
    descriptionEn: 'Harnessing modern web platforms and automation pipelines to scale operations with precision.'
  },
  {
    id: 'commerce',
    title: 'التجارة الإلكترونية',
    titleEn: 'E-Commerce',
    subtitle: 'تبادل القيمة ونماذج الأعمال',
    subtitleEn: 'Value exchange & retail funnels',
    description: 'فهم متطلبات السوق وتقديم منتجات تلبي رغبات العملاء وتولد تدفقات مالية مستدامة.',
    descriptionEn: 'Understanding real market demands and packaging products that solve problems and drive sustainable revenue.'
  },
  {
    id: 'marketing',
    title: 'التسويق الرقمي',
    titleEn: 'Digital Marketing',
    subtitle: 'الوصول للجمهور واكتساب العملاء',
    subtitleEn: 'Audience reach & customer acquisition',
    description: 'تحويل الانتباه الرقمي إلى عملاء فعليين عبر رسائل تسويقية واضحة ومسارات تحويل عالية الأداء.',
    descriptionEn: 'Converting digital attention into loyal buyers through high-intent copywriting and optimized funnels.'
  },
  {
    id: 'execution',
    title: 'التنفيذ والتشغيل',
    titleEn: 'Operations & Execution',
    subtitle: 'الانضباط اليومي والنتائج العملية',
    subtitleEn: 'Daily discipline & operational delivery',
    description: 'الانتقال السريع من التفكير والتخطيط إلى بناء المتاجر الفعلية وإدارة العمليات على أرض الواقع.',
    descriptionEn: 'Moving swiftly from ideation to operational execution, store management, and reliable delivery.'
  },
  {
    id: 'learning',
    title: 'التعلم المستمر',
    titleEn: 'Continuous Learning',
    subtitle: 'التطور الذاتي ومواكبة السوق',
    subtitleEn: 'Relentless personal evolution',
    description: 'سوق الأعمال الرقمية يتغير بسرعة؛ والتعلم المستمر وتجربة الأدوات الجديدة هو المحرك الحقيقي للنمو.',
    descriptionEn: 'The digital business ecosystem moves fast; ongoing curiosity and adaptation form the bedrock of enduring growth.'
  }
];

export const indicatorsData = [
  {
    title: 'تكامل التجارة والأعمال الرقمية',
    titleEn: 'Commerce & Venture Synergy',
    desc: 'الربط بين بناء المتاجر الإلكترونية، استراتيجيات التسويق، والخدمات الرقمية لإنشاء مشاريع متكاملة.',
    descEn: 'Bridging modern e-commerce stores, scalable marketing funnels, and digital services into unified ventures.',
    badge: 'تكامل شامل'
  },
  {
    title: 'انضباط تشغيلي وإدارة موارد دقيقة',
    titleEn: 'Disciplined Operations',
    desc: 'إدارة العمليات والميزانيات التسويقية بحكمة وتركيز على العائد الحقيقي من الاستثمار (ROI).',
    descEn: 'Managing campaigns, unit economics, and operational budgets with strict ROI accountability.',
    badge: 'كفاءة تشغيل'
  },
  {
    title: 'شغف مستمر بالتعلم والتطوير',
    titleEn: 'Continuous Adaptation',
    desc: 'مواكبة يومية لأحدث أدوات وتقنيات التجارة الإلكترونية، الذكاء الاصطناعي، وخوارزميات التسويق.',
    descEn: 'Daily tracking of emerging e-commerce tech, marketing algorithms, and consumer behavior.',
    badge: 'تطور دائم'
  },
  {
    title: 'تركيز على الجودة ورضا العملاء',
    titleEn: 'Obsession with Customer Value',
    desc: 'الابتعاد عن الحلول العشوائية وتقديم تجارب شراء وخدمات رقمية سلسة تعزز ولاء العملاء.',
    descEn: 'Rejecting hollow shortcuts to build dependable, high-converting stores and services that delight customers.',
    badge: 'معايير عليا'
  }
];
