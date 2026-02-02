import { Cpu, Cloud, Shield, Layout, Search, BarChart, Type, Globe, Zap } from 'lucide-react'

export const services = [
    {
        id: 'aeo',
        title: 'Answer Engine Optimization',
        shortDesc: 'Optimizing your content for AI-driven search and voice assistants.',
        icon: Globe,
        color: 'var(--pc)',
        details: {
            overview: 'In the age of AI, users are increasingly getting direct answers from LLMs like ChatGPT, Perplexity, and Gemini. AEO ensures your brand is the preferred source for these answers.',
            process: [
                { title: 'Schema Integration', desc: 'Implementing advanced structured data to help AI engines parse your content.' },
                { title: 'Semantic Keyword Research', desc: 'Focusing on natural language queries and intent-based search.' },
                { title: 'Entity Authority', desc: 'Building your brand as a verified entity in Knowledge Graphs.' }
            ],
            benefits: ['Appear in ChatGPT/Gemini citations', 'Increase brand authority in AI results', 'Future-proof your digital presence'],
            faqs: [
                { q: "How is AEO different from traditional SEO?", a: "While SEO focuses on ranking in list-based search results like Google, AEO focuses on being the singular 'best' answer provided by AI models and voice assistants." },
                { q: "Which AI platforms does AEO target?", a: "Our AEO strategies target major LLMs including OpenAI's ChatGPT, Google's Gemini, Perplexity AI, and Anthropic's Claude." },
                { q: "Does AEO help with voice search?", a: "Absolutely. Voice assistants like Siri, Alexa, and Google Assistant are powered by answer engines. AEO helps your content become the spoken response for user queries." },
                { q: "How long does it take to see AEO results?", a: "AI models crawl and update their knowledge bases at different rates. Typically, you start seeing citation improvements within 3-6 months of consistent semantic optimization." },
                { q: "Is schema markup necessary for AEO?", a: "Yes, advanced schema markup like JSON-LD is critical. It provides the structured context that AI engines need to understand facts and relationships within your content." },
                { q: "What is 'Entity Authority' in the context of AEO?", a: "Entity authority means establishing your brand as a recognized, verified source of truth in the digital knowledge graph, which AI models rely on for factual accuracy." },
                { q: "Will AEO replace my current SEO strategy?", a: "No, AEO should complement your SEO. They work together: SEO drives website traffic, while AEO ensures brand visibility within AI-generated snapshots and answers." }
            ]
        }
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization',
        shortDesc: 'Driving organic growth through data-backed SEO strategies.',
        icon: Search,
        color: 'var(--sc)',
        details: {
            overview: 'Our SEO strategy goes beyond keywords. We focus on technical excellence, content depth, and backlink authority to dominate the Search Engine Results Pages (SERPs).',
            process: [
                { title: 'Technical Audit', desc: 'Comprehensive analysis of site speed, core web vitals, and indexability.' },
                { title: 'Content Clustering', desc: 'Creating topical authority through strategic internal linking.' },
                { title: 'Off-Page Authority', desc: 'High-quality backlink acquisition from industry-leading domains.' }
            ],
            benefits: ['Sustainable organic traffic', 'Lower customer acquisition cost', 'Long-term market dominance'],
            faqs: [
                { q: "Do you guarantee #1 rankings?", a: "No reputable agency can guarantee #1 rankings due to constant algorithm changes, but we guarantee a data-backed strategy that consistently improves visibility and organic traffic." },
                { q: "How do you handle Google Core Updates?", a: "We follow White-Hat SEO principles. By focusing on User Experience, E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness), and technical health, our clients typically stay stable or grow during updates." },
                { q: "Is technical SEO more important than content?", a: "They are two sides of the same coin. Technical SEO ensures your site can be indexed, while content ensures it's worth indexing. You need both to succeed." },
                { q: "What are Core Web Vitals and why do they matter?", a: "Core Web Vitals are Google metrics that measure loading speed, interactivity, and visual stability. High scores improve user experience and are a confirmed ranking factor." },
                { q: "How do you choose keywords for my business?", a: "We analyze competitor gaps, search volume, user intent, and 'difficulty' scores to find high-value terms that actually lead to conversions, not just clicks." },
                { q: "What is your link-building philosophy?", a: "We focus on 'Quality over Quantity.' One high-authority link from a relevant industry site is worth more than 100 low-quality directories." },
                { q: "When will I see a return on my SEO investment?", a: "SEO is a long-term compounder. Initial technical fixes show impact in weeks, but major growth usually happens between the 6-12 month mark." }
            ]
        }
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing Services',
        shortDesc: 'Multi-channel marketing campaigns that convert leads into loyal customers.',
        icon: Zap,
        color: 'var(--pc)',
        details: {
            overview: 'We blend creative storytelling with data analytics to deliver performance marketing that actually works. From PPC to social strategy, we cover it all.',
            process: [
                { title: 'Market Research', desc: 'Deep dive into competitor strategies and audience personas.' },
                { title: 'Campaign Execution', desc: 'A/B testing and optimization across Google, Meta, and LinkedIn.' },
                { title: 'Conversion Tracking', desc: 'Full-funnel attribution to measure every dollar spent.' }
            ],
            benefits: ['High ROI on ad spend', 'Targeted audience reach', 'Scalable growth models'],
            faqs: [
                { q: "Should I focus on PPC or Organic marketing?", a: "PPC is great for immediate results and product launches. Organic marketing (SEO) builds long-term equity. For most businesses, a balanced 70/30 split is the most effective." },
                { q: "What is a 'Full-Funnel' marketing strategy?", a: "It's a strategy that targets users at every stage: Awareness (top), Consideration (middle), and Conversion (bottom) using different content and ad formats for each." },
                { q: "How do you track conversion attribution?", a: "We use advanced tracking setups with GA4 and pixel integration to understand which touchpoints (an ad, an email, or a search) led to a sale." },
                { q: "Why isn't my social media advertising converting?", a: "Most failures stem from either 'Ad Fatigue', poor audience targeting, or a disconnect between the ad's promise and the landing page experience. We optimize all three." },
                { q: "What budget should I start with for digital ads?", a: "Budgets depend on your industry and goals. We recommend starting with a minimum 'test budget' for 30 days to gather enough data for scale." },
                { q: "How often do you report on performance?", a: "We provide real-time dashboards for constant visibility, plus monthly deep-dive reports with strategic recommendations for the following month." },
                { q: "Do you handle creative asset production?", a: "Yes, our team handles ad copywriting, graphic design, and video production to ensure your brand's message is consistent across all channels." }
            ]
        }
    },
    {
        id: 'content-marketing',
        title: 'Content Marketing',
        shortDesc: 'Creating high-value content that builds trust and authority.',
        icon: Type,
        color: 'var(--sc)',
        details: {
            overview: 'Content is the heartbeat of digital presence. We create thought-leadership pieces, case studies, and engaging visuals that resonate with your target audience.',
            process: [
                { title: 'Content Strategy', desc: 'Defining the voice, tone, and editorial calendar for your brand.' },
                { title: 'Premium Execution', desc: 'Writing, designing, and producing high-quality assets.' },
                { title: 'Distribution', desc: 'Ensuring your content reaches the right people at the right time.' }
            ],
            benefits: ['Increased user engagement', 'Better SEO rankings', 'Enhanced brand recall'],
            faqs: [
                { q: "Why is 'Thought Leadership' important?", a: "Thought leadership establishes you as the expert in your field. This builds massive trust, making it easier for clients to choose you over a generic competitor." },
                { q: "How do you maintain my brand's voice?", a: "We begin every project by developing a Brand Voice Guide that defines your tone, vocabulary, and values to ensure every piece of content sounds like you." },
                { q: "Should I post content daily?", a: "Consistency is better than frequency. One high-value, deep-dive article per week is far more effective than five shallow daily updates." },
                { q: "How does content marketing support lead generation?", a: "We create 'Lead Magnets' like E-books, Whitepapers, and Webinars that provide value in exchange for a prospect's contact information." },
                { q: "Do you optimize content for AI search (AEO)?", a: "Yes, every piece of content we produce is structured semantically to ensure it's readable by both human users and AI answer engines." },
                { q: "What is 'Content Repurposing'?", a: "It's the process of turning one major asset (like a long video) into multiple small assets (blogs, social snippets, emails) to maximize your reach and ROI." },
                { q: "How do you measure content success?", a: "We look at engagement metrics (time on page, shares) and conversion metrics (email signups, form fills) to see what content actually drives business value." }
            ]
        }
    },
    {
        id: 'analytics',
        title: 'Analytics & Reporting',
        shortDesc: 'Turning raw data into actionable business insights.',
        icon: BarChart,
        color: 'var(--pc)',
        details: {
            overview: 'Stop guessing and start knowing. Our analytics services provide crystal-clear visibility into your business performance and user behavior.',
            process: [
                { title: 'GA4/GTM Setup', desc: 'Advanced event tracking and infrastructure configuration.' },
                { title: 'Custom Dashboards', desc: 'Visualizing KPIs in real-time through Looker Studio or Power BI.' },
                { title: 'Predictive Insights', desc: 'Using historical data to forecast future trends.' }
            ],
            benefits: ['Data-driven decision making', 'Identified growth opportunities', 'Transparency in performance'],
            faqs: [
                { q: "Why did my traffic drop in the move to GA4?", a: "GA4 uses a different measurement model (Events) compared to Universal Analytics (Sessions). Usually, it's not a traffic drop, but a more accurate way of measuring user behavior." },
                { q: "What are 'Actionable Insights'?", a: "Insights are useless if you can't act on them. We don't just give you numbers; we tell you precisely what to change on your site to increase profit." },
                { q: "How do you handle user data privacy (GDPR)?", a: "We implement advanced consent management platforms and server-side tracking to ensure you remain compliant with global privacy laws while still gathering essential data." },
                { q: "Can you track offline conversions?", a: "Yes, we can bridge the gap by importing offline data (like CRM sales) into your digital analytics tools to give you a true ROAS (Return on Ad Spend)." },
                { q: "What's the difference between a KPI and a Metric?", a: "Metrics are just numbers (like page views). KPIs (Key Performance Indicators) are specific metrics that directly impact your business goals (like conversion rate)." },
                { q: "Do you provide real-time reporting?", a: "Yes, we build live interactive dashboards that update automatically, allowing you to check your performance 24/7 without waiting for a monthly report." },
                { q: "How do you use data to predict future trends?", a: "We use statistical modeling on your historical data to identify seasonal patterns and forecast future sales, helping you plan your inventory and marketing spend." }
            ]
        }
    },
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        shortDesc: 'Automating complex tasks with intelligent neural architectures.',
        icon: Cpu,
        color: 'var(--sc)',
        details: {
            overview: 'As an AI-first agency, we build custom LLMs, predictive models, and automation workflows that give your business a competitive technological edge.',
            process: [
                { title: 'Model Development', desc: 'Training custom AI models on your proprietary data.' },
                { title: 'NLP Integration', desc: 'Implementing advanced language processing for chatbots and analysis.' },
                { title: 'Computer Vision', desc: 'Building systems that can see, recognize, and interpret visual data.' }
            ],
            benefits: ['Reduced operational costs', 'Enhanced customer experience', 'Intelligent decision automation'],
            faqs: [
                { q: "What's the difference between AI and Machine Learning?", a: "AI is the broad concept of machines acting 'smart.' Machine Learning is a subset where machines learn from data rather than being programmed with specific rules." },
                { q: "Can you build a custom GPT for my business?", a: "Yes, we specialize in building private LLMs trained on your data that can handle internal knowledge management, customer support, or content creation safely." },
                { q: "Is my business data safe when using AI?", a: "Data security is our priority. We implement zero-trust architectures and local LLM deployments to ensure your proprietary information never leaves your secure environment." },
                { q: "What is 'Predictive Maintenance'?", a: "In manufacturing or IT, it's using ML to predict when a machine or server will fail before it actually stays, saving you thousands in downtime costs." },
                { q: "How can AI improve my customer service?", a: "We implement intelligent AI agents that can understand complex intent, provide 24/7 support, and hand off to humans only when absolutely necessary." },
                { q: "Do I need a massive amount of data to start with AI?", a: "Not necessarily. Modern techniques like 'Transfer Learning' allow us to take pre-trained models and fine-tune them on small blocks of your specific data with great results." },
                { q: "How do you measure the ROI of AI automation?", a: "We track the 'Man-Hours Saved' and 'Error Rate Reduction' after implementing automation to prove the exact cost-benefit of the technology." }
            ]
        }
    },
    {
        id: 'cloud-infra',
        title: 'Cloud Infrastructure',
        shortDesc: 'Scalable, secure, and high-performance cloud ecosystems.',
        icon: Cloud,
        color: 'var(--pc)',
        details: {
            overview: 'We design and manage zero-trust cloud architectures that scale with your growth. AWS, Azure, or GCP—we ensure 99.99% uptime and maximum security.',
            process: [
                { title: 'Architecture Design', desc: 'Designing resilient systems with auto-scaling capabilities.' },
                { title: 'Security Hardening', desc: 'Implementing enterprise-grade firewalls and encryption.' },
                { title: 'Performance Tuning', desc: 'Optimizing resource allocation for speed and cost-efficiency.' }
            ],
            benefits: ['Seamless scalability', 'Enterprise-grade security', 'Optimized cloud costs'],
            faqs: [
                { q: "Which cloud provider is best: AWS, Azure, or GCP?", a: "It depends on your existing tech stack. AWS is great for general scale, Azure is ideal for Windows-heavy enterprises, and GCP leads in AI/ML capabilities. We help you choose the right fit." },
                { q: "What is 'Zero-Trust' Architecture?", a: "It's a security model where no user or system is trusted by default, even if they are inside the network. Every access request is strictly verified." },
                { q: "How do you prevent high cloud bills?", a: "We implement 'Cloud Governance' and auto-scaling rules that automatically turn off unused resources and optimize instances for the lowest cost with maximum performance." },
                { q: "What is 'High Availability'?", a: "It's a system design that ensures your app stays online even if a whole data center goes down, by redundantly hosting your services across different geographical regions." },
                { q: "Can you help as migrate from a physical server to the cloud?", a: "Yes, we handle complete 'Lift and Shift' migrations or 'Refactoring' where we rebuild your app to take full advantage of cloud-native features." },
                { q: "What is 'Infrastructure as Code' (IaC)?", a: "It's a practice of managing your servers and networks using configuration files (like Terraform). This makes your infrastructure reproducible, version-controlled, and less prone to human error." },
                { q: "How do you manage database backups?", a: "We implement automated point-in-time recovery (PITR) systems that allow us to restore your data to almost any exact second in the past if a failure occurs." }
            ]
        }
    },
    {
        id: 'cyber-security',
        title: 'Cyber Security',
        shortDesc: 'Protecting your digital assets with advanced defense systems.',
        icon: Shield,
        color: 'var(--sc)',
        details: {
            overview: 'In an era of threats, we provide comprehensive security solutions. From penetration testing to 24/7 monitoring, your data is safe with us.',
            process: [
                { title: 'Vuln Analysis', desc: 'Identifying weaknesses before hackers do.' },
                { title: 'Incident Response', desc: '24/7 monitoring and rapid recovery protocols.' },
                { title: 'Compliance', desc: 'Ensuring your business meets SOC2, GDPR, and HIPAA standards.' }
            ],
            benefits: ['Data breach prevention', 'Customer trust preservation', 'Regulatory compliance'],
            faqs: [
                { q: "What is a 'Penetration Test'?", a: "It's a simulated cyber attack where our ethical hackers try to find gaps in your system to show you exactly how a real attacker could get in, so you can fix it first." },
                { q: "Why is multi-factor authentication (MFA) so important?", a: "Upto 80% of data breaches are due to stolen credentials. MFA adds a critical second layer: even if a hacker has your password, they still can't get in." },
                { q: "How do you handle Ransomware threats?", a: "Our strategy focuses on three pillars: Advanced Threat Detection (to stop it), Zero-Trust Access (to contain it), and Immutable Backups (to recover without paying the ransom)." },
                { q: "Is my small business really at risk for cyber attacks?", a: "Yes, over 40% of cyber attacks target small businesses because they often have weaker security. Hackers use automated tools to find any easy target, regardless of size." },
                { q: "What happens during an 'Incident Response'?", a: "Our team immediately isolates the infected systems, identifies the 'Patient Zero' source, cleans the environment, and restores services from safe backups within minutes." },
                { q: "How do you ensure our company meets SOC2 compliance?", a: "We perform a gaps analysis, implement the required security controls, and document all processes to ensure you are audit-ready and compliant with industry standards." },
                { q: "What is 'Social Engineering'?", a: "It's a psychological attack where hackers trick employees into giving up secrets (like phishing emails). We provide training to turn your staff into your strongest line of defense." }
            ]
        }
    },
    {
        id: 'ui-ux',
        title: 'UI/UX Design',
        shortDesc: 'Crafting digital experiences that users love to interact with.',
        icon: Layout,
        color: 'var(--pc)',
        details: {
            overview: 'Design is how it works. We create intuitive, beautiful, and accessible interfaces that drive engagement and conversion across all devices.',
            process: [
                { title: 'User Research', desc: 'Understanding user pain points through interviews and testing.' },
                { title: 'Prototyping', desc: 'High-fidelity wireframes and interactive prototypes.' },
                { title: 'Visual Identity', desc: 'Creating a cohesive design system for your brand.' }
            ],
            benefits: ['Increased conversion rates', 'Improved user retention', 'Strong visual brand identity'],
            faqs: [
                { q: "What is the difference between UI and UX?", a: "UX (User Experience) is the logic and 'feel' of the journey. UI (User Interface) is the aesthetic and 'look' of the elements. You need great UX for function and great UI for delight." },
                { q: "How does good design increase conversions?", a: "By removing 'friction'—making it incredibly easy for users to find what they need and take action. A clear, trustworthy design naturally leads to higher sales." },
                { q: "What is a 'Design System' and why do I need one?", a: "It's a library of reusable components and rules (colors, buttons, fonts). It ensures your brand looks identical whether a user is on your app, website, or email." },
                { q: "Do you design for mobile-first?", a: "Yes. Since most web traffic is now mobile, we design for the smallest screens first to ensure the core experience is perfect, then scale up for desktop." },
                { q: "How do you test your designs with real users?", a: "We use high-fidelity prototypes and 'Usability Testing' where we watch real people use the app to see where they get confused or frustrated." },
                { q: "What is 'Accessibility' in design?", a: "It's ensuring that people with disabilities (like vision impairment) can use your site easily. It's not just ethical; it's often a legal requirement and improves SEO." },
                { q: "How long does a typical redesign take?", a: "A full strategic redesign usually takes 4-8 weeks, depending on the complexity of the user journeys and the depth of the brand identity development." }
            ]
        }
    }
]
