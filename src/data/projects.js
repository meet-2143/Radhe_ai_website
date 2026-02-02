export const projects = [
    {
        id: "fintech-scaling",
        title: "Scaling Fintech Infrastructure",
        industry: "Fintech",
        shortDesc: "Architecting for 10M+ concurrent users with 99.999% uptime.",
        description: "A comprehensive overhaul of a Tier 1 financial institution's backend, transitioning from legacy monoliths to a highly-resilient, event-driven microservices architecture.",
        tech: ["Kubernetes", "Kafka", "Go", "GCP"],
        color: "linear-gradient(135deg, #1e40af, #3b82f6)",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        caseStudy: {
            problem: "A major financial platform was collapsing under the weight of 2M concurrent users, with database deadlocks and API timeouts becoming a daily occurrence during market open.",
            identifiedProblem: "System audit revealed a 'Death Star' architecture—tightly coupled services and a massive central database that created a single point of failure and extreme horizontal scaling bottlenecks.",
            solution: "We re-architected the system using a cell-based infrastructure. We implemented event-streaming via Kafka to decouple transactions and deployed a globally distributed CockroachDB cluster for zero-latency data consistency across regions.",
            impact: "The infrastructure now comfortably handles 10M+ concurrent transactions. Uptime increased to five-nines (99.999%) and operational costs were reduced by 40% through intelligent resource orchestration.",
            metrics: [
                { label: "Concurrent Users", value: "10M+" },
                { label: "Uptime", value: "99.999%" },
                { label: "DB Latency", value: "< 5ms" }
            ]
        }
    },
    {
        id: "neural_trade",
        title: "NeuralTrade V3",
        industry: "Fintech",
        shortDesc: "High-frequency AI trading engine with zero-latency execution.",
        description: "A state-of-the-art trading platform leveraging deep reinforcement learning to identify micro-patterns in global markets. Designed for institutional-grade reliability and lightning-fast execution.",
        tech: ["Python", "TensorFlow", "FastAPI", "RTX 4090 Optimizer"],
        color: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
        image: "/projects/fintech.png",
        caseStudy: {
            problem: "Legacy trading systems were experiencing 50ms latency, leading to significant slippage in high-volatility markets. This resulted in millions of dollars in 'invisible' losses annually for our client.",
            solution: "We engineered a C++ low-latency core wrapped in a high-performance Python API. The system uses a custom Transformer-based architecture to predict tick-by-tick price movements with 94% accuracy over 10-millisecond windows.",
            impact: "Reduced end-to-end latency to less than 2ms. The client reported a 12% increase in quarterly ROI and a 60% reduction in slippage-related losses.",
            metrics: [
                { label: "Latency", value: "< 2ms" },
                { label: "ROI Boost", value: "+12%" },
                { label: "Accuracy", value: "94%" }
            ]
        }
    },
    {
        id: "logi_flow",
        title: "LogiFlow AI",
        industry: "Logistics",
        shortDesc: "Predictive supply chain optimization for global shipping firms.",
        description: "An AI-driven logistics engine that optimizes global shipping routes in real-time. It processes millions of data points, including weather, port congestion, and fuel prices, to ensure maximum efficiency.",
        tech: ["React", "Node.js", "PostgreSQL", "Graph Neural Networks"],
        color: "linear-gradient(135deg, #111827, #374151)",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        caseStudy: {
            problem: "A global shipping leader was struggling with inefficient routing, with 15% of their container capacity remaining unutilized or traveling redundant paths due to static scheduling.",
            solution: "We developed a Graph Neural Network (GNN) that treats the global shipping network as a dynamic system. It suggests real-time re-routing and load balancing based on predictive demand spikes.",
            impact: "Successfully optimized over 500 global routes, saving $4.5M in annual fuel costs and increasing container utilization by 18%.",
            metrics: [
                { label: "Fuel Saved", value: "$4.5M" },
                { label: "Utilization", value: "+18%" },
                { label: "CO2 Reduced", value: "22%" }
            ]
        }
    },
    {
        id: "med_safe",
        title: "MedSafe Hub",
        industry: "Healthcare",
        shortDesc: "Zero-trust medical record storage with encrypted sharing.",
        description: "A secure, decentralized platform for medical professionals to share patient data without compromising privacy. Built on a zero-trust architecture to meet the most stringent global compliance standards.",
        tech: ["AWS", "Solidity", "Next.js", "ZKP"],
        color: "linear-gradient(135deg, #4c1d95, #8b5cf6)",
        image: "/projects/healthcare.png",
        caseStudy: {
            problem: "Hospitals were facing critical security vulnerabilities during patient data transfers, leading to HIPAA compliance risks and delayed treatments due to slow verification processes.",
            solution: "Implemented Zero-Knowledge Proof (ZKP) infrastructure on a private blockchain. This allows data verification without revealing sensitive patient information, ensuring 100% privacy.",
            impact: "Achieved zero data breaches over 18 months of operation. Data transfer speeds between partner hospitals increased by 95%, significantly improving emergency care response times.",
            metrics: [
                { label: "Breaches", value: "Zero" },
                { label: "Transfer Speed", value: "+95%" },
                { label: "Compliant", value: "100%" }
            ]
        }
    },
    {
        id: "secure_fin",
        title: "SecureFin Cloud",
        industry: "Cloud",
        shortDesc: "Zero-trust architecture for Tier 1 banking client.",
        description: "A massive migration and security overhaul for a national bank. We implemented a multi-cloud strategy with automated data sovereignty checks and real-time threat detection.",
        tech: ["Terraform", "Kubernetes", "Azure AD", "Sentinel"],
        color: "linear-gradient(135deg, #0f172a, #1e293b)",
        image: "/projects/cloud.png",
        caseStudy: {
            problem: "The client's local infrastructure was failing under peak loads, and their security perimeter was outdated, leaving them vulnerable to ransomware and data leaks.",
            solution: "Architected a hybrid cloud environment with automated scaling. We implemented a 'Perimeterless' security model using identity-based access controls and AI-monitored log analytics.",
            impact: "Zero downtime during peak seasonal traffic. Security audit scores improved by 40%, and operational costs were reduced by 30% through automation.",
            metrics: [
                { label: "Uptime", value: "99.99%" },
                { label: "Cost Savings", value: "30%" },
                { label: "Audit Score", value: "+40%" }
            ]
        }
    },
    {
        id: "streamline_crm",
        title: "StreamlineCRM",
        industry: "Fintech",
        shortDesc: "Enterprise lead-to-revenue automation system.",
        description: "A custom-built CRM solution for high-volume sales teams, integrating AI-driven lead scoring and automated follow-up sequences.",
        tech: ["React", "Node.js", "Redis", "OpenAI API"],
        color: "linear-gradient(135deg, #10b981, #059669)",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        caseStudy: {
            problem: "Sales teams were losing 40% of leads due to slow response times and manual data entry errors in their legacy CRM.",
            identifiedProblem: "Audit revealed that lead distribution was bottlenecked by a manual approval process, and 70% of rep time was spent on administrative tasks rather than selling.",
            solution: "Developed an automated scoring engine that routes leads in real-time. Integrated a GPT-4 powered assistant to draft personalized initial responses based on lead behavior.",
            impact: "Lead response time dropped from 4 hours to 90 seconds. Conversion rates increased by 35% within the first two months.",
            metrics: [
                { label: "Response Time", value: "-98%" },
                { label: "Conversion", value: "+35%" },
                { label: "Admin Work", value: "-70%" }
            ]
        }
    },
    {
        id: "nexus_pos",
        title: "NexusPOS",
        industry: "Retail",
        shortDesc: "Next-gen point of sale for multi-location scaling.",
        description: "A cloud-native POS system designed for franchises, offering real-time inventory syncing and unified customer loyalty programs across 500+ locations.",
        tech: ["TypeScript", "GraphQL", "AWS Lambda", "MongoDB"],
        color: "linear-gradient(135deg, #f59e0b, #d97706)",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
        caseStudy: {
            problem: "A rapidly growing retail chain faced 15% inventory discrepancy rates because their store-level systems didn't sync with the central warehouse in real-time.",
            identifiedProblem: "The legacy polling architecture caused race conditions during high-volume sales events (like Black Friday), leading to overselling and customer dissatisfaction.",
            solution: "Implemented an event-driven architecture using AWS AppSync and Lambda. Every transaction triggers an immediate, global inventory update via high-concurrency message queues.",
            impact: "Reduced inventory errors to <0.1%. The system handled 1.2M transactions in a single day during peak season without a single second of downtime.",
            metrics: [
                { label: "Inv. Accuracy", value: "99.9%" },
                { label: "Scale", value: "1.2M txn/day" },
                { label: "Sync Latency", value: "< 200ms" }
            ]
        }
    },
    {
        id: "rankwave_seo",
        title: "RankWave AI",
        industry: "SEO",
        shortDesc: "AI-powered content intelligence and ranking engine.",
        description: "An advanced SEO platform that uses semantic analysis to predict keyword difficulty and optimize content clusters for search dominance.",
        tech: ["Python", "Elasticsearch", "Next.js", "GPT-4"],
        color: "linear-gradient(135deg, #ec4899, #d946ef)",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        caseStudy: {
            problem: "An e-commerce giant saw a 25% drop in organic traffic after a major search engine algorithm update.",
            identifiedProblem: "Competitor analysis showed the client's content lacked 'Semantic Depth'—their pages were technically sound but lacked the topical authority needed for high-intent keywords.",
            solution: "Deployed a custom NLP engine to map the knowledge graph of their industry. Mass-optimized 5,000+ product descriptions using semantic entity enrichment.",
            impact: "Recovered all lost traffic within 90 days and surpassed previous peaks by 45%. 120 prioritized keywords moved from Page 3 to Top 3 results.",
            metrics: [
                { label: "Organic Growth", value: "+45%" },
                { label: "Top 3 Keywords", value: "120+" },
                { label: "Traffic Recovery", value: "100%" }
            ]
        }
    },
    {
        id: "locallink_seo",
        title: "LocalLink",
        industry: "SEO",
        shortDesc: "Hyper-local search dominance for service providers.",
        description: "Automated local SEO management for multi-unit home service brands, optimizing Google Business Profiles and local citations at scale.",
        tech: ["Go", "React", "Google Maps API", "PostgreSQL"],
        color: "linear-gradient(135deg, #3b82f6, #2563eb)",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200",
        caseStudy: {
            problem: "A national plumbing franchise was invisible in local 'near me' searches despite having 200+ physical locations.",
            identifiedProblem: "NAP (Name, Address, Phone) inconsistency across hundreds of directories was confusing search algorithms and depressing local rankings.",
            solution: "Built a centralized 'Command Center' to sync location data across 50+ platforms instantly. Implemented automated review management and localized landing page templates.",
            impact: "Increased 'Request a Quote' clicks by 210% across the franchise network. Monthly inbound leads increased by an average of 15 per location.",
            metrics: [
                { label: "Lead Gen", value: "+210%" },
                { label: "Local Rankings", value: "#1 Avg." },
                { label: "ROAS", value: "12x" }
            ]
        }
    }
]
