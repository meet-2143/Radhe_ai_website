import {
    Headphones, Globe, ShoppingCart, Cloud, ShieldCheck, Network,
    Store, Bot, Code2, DatabaseBackup, Lightbulb
} from 'lucide-react'

/**
 * IT services for small businesses and eCommerce.
 * Each category maps to a detail page at /services/:id.
 * `subServices` is the full list of what is included in that category.
 */
export const itServices = [
    {
        id: 'it-support',
        title: 'IT Support & Managed IT Services',
        navTitle: 'IT Support & Managed IT',
        shortDesc: 'Day-to-day IT support, remote and on-site, with monthly support packages.',
        icon: Headphones,
        color: 'hsl(var(--pc))',
        bestFor: 'Small businesses without an in-house IT person who need someone reliable to call',
        outcome: 'Fewer interruptions, faster fixes, and computers that keep working the way they should',
        subServices: [
            'Day-to-day IT support',
            'Desktop and laptop troubleshooting',
            'Windows and Mac support',
            'Software installation and configuration',
            'Printer and scanner setup',
            'Email troubleshooting',
            'Remote IT support',
            'On-site IT support',
            'Computer maintenance and upgrades',
            'IT helpdesk services',
            'Monthly IT support packages'
        ],
        details: {
            overview: 'Your team should be serving customers, not fighting with printers, email, or slow laptops. We become your IT department: one number to call, remote fixes for most issues, on-site visits when hands are needed, and proactive maintenance that stops problems before they start.',
            process: [
                { title: 'Health Check', desc: 'We review every computer, device, and account in your business to understand what you have and what needs attention.' },
                { title: 'Stabilise & Standardise', desc: 'We fix outstanding issues, apply updates, and set up consistent configurations so every machine behaves predictably.' },
                { title: 'Ongoing Support', desc: 'Your team contacts our helpdesk for anything IT. We resolve issues remotely or on-site and keep systems maintained month to month.' }
            ],
            benefits: [
                'One point of contact for every IT issue',
                'Remote support for quick fixes, on-site visits when needed',
                'Predictable monthly cost with support packages',
                'Proactive maintenance instead of break-fix firefighting'
            ],
            faqs: [
                { q: 'Do you support both Windows and Mac?', a: 'Yes. We support Windows PCs, Macs, and the mix of both that most small offices have, along with printers, scanners, and the software your team uses every day.' },
                { q: 'How do monthly IT support packages work?', a: 'You pay a fixed monthly amount that covers helpdesk access, remote support, and routine maintenance for an agreed number of users or devices. We tailor the package to the size of your business.' },
                { q: 'Can you come to our office?', a: 'Yes. Most issues are fixed remotely within minutes, but we provide on-site IT support for hardware problems, new setups, and anything that needs hands on the equipment.' }
            ]
        }
    },
    {
        id: 'website-development',
        title: 'Website Design & Development',
        navTitle: 'Website Design & Development',
        shortDesc: 'Business websites on WordPress, Shopify and WooCommerce, built, hosted and maintained.',
        icon: Globe,
        color: 'hsl(var(--sc))',
        bestFor: 'Businesses that need a new website, a redesign, or someone to look after the site they already have',
        outcome: 'A fast, mobile-friendly website that represents your business properly and is easy to keep up to date',
        subServices: [
            'Business website development',
            'WordPress website development',
            'Shopify website development',
            'WooCommerce development',
            'Website redesign',
            'Landing page development',
            'Website maintenance',
            'Website speed optimisation',
            'Website hosting management',
            'Domain registration and management',
            'Website migration',
            'Mobile-responsive website development'
        ],
        details: {
            overview: 'Your website is often the first impression a customer has of your business. We design and build professional, mobile-responsive websites on the platforms small businesses rely on, and then take care of the hosting, domains, speed, and maintenance so you never have to think about it.',
            process: [
                { title: 'Plan', desc: 'We agree on your goals, pages, content, and platform (WordPress, Shopify, WooCommerce, or custom) before any design work begins.' },
                { title: 'Design & Build', desc: 'We design and develop a responsive site, set up hosting and your domain, and optimise it for speed.' },
                { title: 'Launch & Maintain', desc: 'We migrate any existing content, launch the site, and keep it updated, backed up, and secure afterwards.' }
            ],
            benefits: [
                'Mobile-responsive design that works on every device',
                'Built on platforms you can update yourself',
                'Hosting, domains, and maintenance handled for you',
                'Faster load times with speed optimisation'
            ],
            faqs: [
                { q: 'Which platform should my website use?', a: 'For most service businesses we recommend WordPress. If you sell products online, Shopify or WooCommerce is usually the better fit. We will recommend the right platform based on your needs and budget.' },
                { q: 'Can you redesign or move my existing website?', a: 'Yes. We handle website redesigns and migrations between hosts or platforms, keeping your content, domain, and email working throughout.' },
                { q: 'Do you look after the website after launch?', a: 'Yes. Our website maintenance covers updates, backups, security, hosting management, and small content changes so your site stays healthy.' }
            ]
        }
    },
    {
        id: 'ecommerce-solutions',
        title: 'eCommerce Solutions',
        navTitle: 'eCommerce Solutions',
        shortDesc: 'Online stores, payments, shipping, inventory and marketplace integrations.',
        icon: ShoppingCart,
        color: 'hsl(var(--pc))',
        bestFor: 'Retailers going online, and online stores that want to run more smoothly',
        outcome: 'An online store that takes payments, ships orders, and keeps stock in sync with less manual work',
        subServices: [
            'Online store setup',
            'Shopify store management',
            'WooCommerce store management',
            'Product listing and catalogue management',
            'Inventory management integration',
            'Order management automation',
            'Shipping and delivery integration',
            'Payment gateway integration',
            'Stripe, PayPal and Square integration',
            'Discount and promotional setup',
            'Customer account management',
            'eCommerce reporting and analytics',
            'Marketplace integration (eBay, Amazon)'
        ],
        details: {
            overview: 'Selling online involves far more than a product page. We set up and manage Shopify and WooCommerce stores end to end, from product catalogues and payment gateways to shipping, inventory sync, and selling on marketplaces like eBay and Amazon.',
            process: [
                { title: 'Store Setup', desc: 'We configure your store, load your product catalogue, and connect payment gateways such as Stripe, PayPal, and Square.' },
                { title: 'Integrate', desc: 'We connect shipping, inventory, and marketplaces so orders and stock levels flow automatically between systems.' },
                { title: 'Manage & Grow', desc: 'We manage listings, promotions, and customer accounts, and report on sales performance so you know what is working.' }
            ],
            benefits: [
                'Payments, shipping, and inventory connected in one flow',
                'Less manual order handling with automation',
                'Sell on eBay and Amazon alongside your own store',
                'Clear reporting on sales and products'
            ],
            faqs: [
                { q: 'Can you take over management of our existing store?', a: 'Yes. We provide ongoing Shopify and WooCommerce store management, including product listings, promotions, customer accounts, and troubleshooting.' },
                { q: 'Which payment gateways do you integrate?', a: 'We commonly integrate Stripe, PayPal, and Square, and can work with other gateways your bank or POS provider supports.' },
                { q: 'Can my online store share stock with my physical shop?', a: 'Yes. We integrate inventory management so online and in-store stock levels stay in sync, which pairs well with our POS & Retail Technology services.' }
            ]
        }
    },
    {
        id: 'cloud-microsoft-365',
        title: 'Cloud Services & Microsoft 365',
        navTitle: 'Cloud & Microsoft 365',
        shortDesc: 'Microsoft 365, Google Workspace, business email, Teams, SharePoint and OneDrive.',
        icon: Cloud,
        color: 'hsl(var(--sc))',
        bestFor: 'Businesses moving to the cloud or struggling with email, file sharing, and user accounts',
        outcome: 'Professional email and secure file sharing your team can use from anywhere',
        subServices: [
            'Microsoft 365 setup and management',
            'Business email configuration',
            'Outlook configuration',
            'Microsoft Teams setup',
            'SharePoint implementation',
            'OneDrive configuration',
            'Cloud file sharing',
            'Google Workspace setup',
            'Business email migration',
            'Cloud storage management',
            'User account management',
            'Microsoft 365 backup'
        ],
        details: {
            overview: 'Microsoft 365 and Google Workspace give small businesses the same tools as large enterprises, but only when they are set up properly. We configure business email, Teams, SharePoint, and OneDrive, migrate your existing mailboxes and files, and manage users as your team changes.',
            process: [
                { title: 'Plan the Move', desc: 'We review your current email, files, and accounts and plan a migration with minimal disruption.' },
                { title: 'Set Up & Migrate', desc: 'We configure Microsoft 365 or Google Workspace, migrate email and files, and set up Outlook, Teams, and shared folders.' },
                { title: 'Manage & Protect', desc: 'We manage user accounts, licences, and storage, and back up your Microsoft 365 data.' }
            ],
            benefits: [
                'Professional email on your own domain',
                'Secure file sharing with SharePoint and OneDrive',
                'Smooth migrations with minimal downtime',
                'Users added and removed properly as staff change'
            ],
            faqs: [
                { q: 'Microsoft 365 or Google Workspace, which is right for us?', a: 'Both are excellent. Microsoft 365 suits businesses that rely on Word, Excel, and Outlook; Google Workspace suits teams that prefer browser-based tools. We will recommend one based on how your team works.' },
                { q: 'Will we lose emails when migrating?', a: 'No. We migrate existing mailboxes, contacts, and calendars and plan the cut-over carefully so email keeps flowing throughout.' },
                { q: 'Does Microsoft back up our 365 data?', a: 'Microsoft keeps the service running, but it does not provide full long-term backups of your data. We add a dedicated Microsoft 365 backup so deleted or corrupted data can be restored.' }
            ]
        }
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity & Data Protection',
        navTitle: 'Cybersecurity & Data Protection',
        shortDesc: 'Antivirus, firewalls, MFA, email security, staff training and incident response.',
        icon: ShieldCheck,
        color: 'hsl(var(--pc))',
        bestFor: 'Any business that handles customer data, payments, or confidential records',
        outcome: 'Lower risk of breaches, scams, and ransomware, with a plan if something does go wrong',
        subServices: [
            'Antivirus installation and management',
            'Endpoint security',
            'Firewall configuration',
            'Network security',
            'Email security',
            'Spam and phishing protection',
            'Multi-factor authentication (MFA)',
            'Password management solutions',
            'Security assessments',
            'Data encryption',
            'Cybersecurity awareness training',
            'Security incident response'
        ],
        details: {
            overview: 'Small businesses are targeted by cybercriminals precisely because they often have weaker defences. We put practical, layered protection in place: endpoint security, firewalls, email filtering, multi-factor authentication, and staff training, so a single click does not become a business-stopping event.',
            process: [
                { title: 'Assess', desc: 'We run a security assessment covering devices, accounts, email, network, and how your team handles data.' },
                { title: 'Protect', desc: 'We deploy antivirus and endpoint security, configure firewalls, enable MFA, add email filtering, and encrypt sensitive data.' },
                { title: 'Train & Respond', desc: 'We train your staff to spot phishing and provide incident response if a security event occurs.' }
            ],
            benefits: [
                'Layered protection across devices, email, and network',
                'MFA and password management to stop account takeovers',
                'Staff who recognise phishing and scams',
                'A clear response plan if an incident happens'
            ],
            faqs: [
                { q: 'Is antivirus enough to protect my business?', a: 'Not on its own. Most attacks start with phishing emails or stolen passwords, so we combine endpoint security with email filtering, MFA, firewalls, and staff awareness training.' },
                { q: 'What is multi-factor authentication?', a: 'MFA requires a second check, such as a code on your phone, when logging in. It blocks the vast majority of account takeover attempts even if a password is stolen.' },
                { q: 'What happens if we get hacked?', a: 'Our security incident response service helps contain the threat, restore systems from backup, secure compromised accounts, and put measures in place to prevent it happening again.' }
            ]
        }
    },
    {
        id: 'networking-hardware',
        title: 'Networking & Hardware Services',
        navTitle: 'Networking & Hardware',
        shortDesc: 'Business Wi-Fi, cabling, routers, servers, NAS storage and office hardware.',
        icon: Network,
        color: 'hsl(var(--sc))',
        bestFor: 'New offices and shops, or businesses with slow, unreliable Wi-Fi and networks',
        outcome: 'A fast, reliable network and the right hardware installed and configured properly',
        subServices: [
            'Business Wi-Fi installation',
            'Router and modem configuration',
            'Network cabling',
            'LAN and WAN setup',
            'Network troubleshooting',
            'Firewall installation',
            'Network printer setup',
            'NAS storage installation',
            'Server installation',
            'CCTV network integration',
            'Office hardware supply and installation'
        ],
        details: {
            overview: 'Every other system in your business, from POS to cloud email, depends on the network underneath it. We design, install, and troubleshoot business-grade Wi-Fi, cabling, routers, firewalls, servers, and storage, and supply and install the office hardware you need.',
            process: [
                { title: 'Site Survey', desc: 'We assess your premises, coverage needs, devices, and existing equipment.' },
                { title: 'Install & Configure', desc: 'We run cabling, install Wi-Fi, routers, firewalls, servers, and NAS storage, and connect printers and CCTV.' },
                { title: 'Test & Support', desc: 'We test coverage and performance, document the setup, and troubleshoot any network issues going forward.' }
            ],
            benefits: [
                'Strong Wi-Fi coverage across your premises',
                'Business-grade equipment configured securely',
                'Hardware supplied and installed in one service',
                'Documented network that is easy to support'
            ],
            faqs: [
                { q: 'Our Wi-Fi keeps dropping out. Can you fix it?', a: 'Yes. We troubleshoot the cause, which is often consumer-grade equipment, poor placement, or interference, and install business Wi-Fi with proper coverage.' },
                { q: 'Do you supply the hardware as well?', a: 'Yes. We supply and install office hardware including computers, network equipment, servers, NAS storage, and printers.' },
                { q: 'Can you connect our CCTV to the network?', a: 'Yes. We integrate CCTV systems with your network so footage can be stored and viewed securely, including remotely.' }
            ]
        }
    },
    {
        id: 'pos-retail',
        title: 'POS & Retail Technology Solutions',
        navTitle: 'POS & Retail Technology',
        shortDesc: 'POS systems, EFTPOS, barcode scanners, stock control and multi-store retail tech.',
        icon: Store,
        color: 'hsl(var(--pc))',
        badge: 'Popular',
        bestFor: 'Retail stores, newsagencies, cafes, service stations, and multi-store retailers',
        outcome: 'Checkouts that work every time, accurate stock levels, and clear sales reporting',
        subServices: [
            'POS system installation',
            'POS software configuration',
            'EFTPOS terminal integration support',
            'Barcode scanner setup',
            'Receipt printer configuration',
            'Cash drawer installation',
            'Inventory and stock management systems',
            'Retail reporting solutions',
            'Multi-store POS management',
            'POS network troubleshooting',
            'Digital price tags and displays',
            'Retail software integration'
        ],
        details: {
            overview: 'When the POS goes down, the shop stops trading. We install and configure complete point-of-sale setups, from software, EFTPOS integration, and scanners to receipt printers and cash drawers, and connect them to stock management and reporting so you know exactly what is selling.',
            process: [
                { title: 'Choose & Plan', desc: 'We help you select POS software and hardware that suits your store, and plan the installation around trading hours.' },
                { title: 'Install & Integrate', desc: 'We install terminals, scanners, printers, and cash drawers, configure the software, and integrate EFTPOS, inventory, and your online store.' },
                { title: 'Support', desc: 'We troubleshoot POS and network issues, manage multiple stores, and keep everything running at the counter.' }
            ],
            benefits: [
                'Complete POS hardware and software setup',
                'EFTPOS, inventory, and reporting working together',
                'Multi-store management from one place',
                'Fast troubleshooting when the counter stops'
            ],
            faqs: [
                { q: 'Can you install a POS system without disrupting trading?', a: 'Yes. We plan installations around your trading hours, often after close or before opening, and test everything before your first sale.' },
                { q: 'Do you work with EFTPOS terminals from our bank?', a: 'Yes. We provide EFTPOS terminal integration support so your bank-supplied terminal works correctly with your POS software.' },
                { q: 'We have more than one store. Can you help?', a: 'Yes. We set up multi-store POS management so stock, pricing, and reporting can be managed across all locations.' }
            ]
        }
    },
    {
        id: 'automation-ai',
        title: 'Business Automation & AI Solutions',
        navTitle: 'Business Automation & AI',
        shortDesc: 'AI chatbots, workflow automation, Make.com and Zapier, CRM and document automation.',
        icon: Bot,
        color: 'hsl(var(--pc))',
        badge: 'Popular',
        bestFor: 'Businesses where staff spend hours on repetitive data entry, emails, invoices, or customer questions',
        outcome: 'Hours saved every week, faster responses to customers, and fewer manual errors',
        subServices: [
            'AI chatbot development',
            'Website customer support chatbots',
            'Automated email responses',
            'Invoice processing automation',
            'Document processing automation',
            'AI-powered customer service',
            'Workflow automation',
            'Make.com and Zapier integration',
            'CRM automation',
            'Data entry automation',
            'AI-powered business reporting',
            'Custom AI solutions using APIs'
        ],
        details: {
            overview: 'Small teams lose a surprising amount of time to repetitive work: re-typing invoices, answering the same customer questions, copying data between systems. We automate those tasks with tools like Make.com and Zapier, and build AI chatbots and assistants that handle routine enquiries around the clock.',
            process: [
                { title: 'Find the Time Drains', desc: 'We map your day-to-day workflows and identify the repetitive tasks that are best suited to automation or AI.' },
                { title: 'Build & Connect', desc: 'We build automations, chatbots, and AI tools and connect them to your email, CRM, accounting, and website.' },
                { title: 'Refine', desc: 'We monitor results, handle edge cases, and expand automation as your team gets comfortable with it.' }
            ],
            benefits: [
                'Hours of manual work removed every week',
                '24/7 answers to common customer questions',
                'Fewer data-entry errors between systems',
                'Automation built on tools you already use'
            ],
            faqs: [
                { q: 'What kinds of tasks can be automated?', a: 'Common examples include processing invoices and documents, copying data between systems, sending follow-up emails, updating your CRM, and generating regular reports.' },
                { q: 'Will an AI chatbot give customers wrong answers?', a: 'We build chatbots on your own business information, set clear limits on what they answer, and hand complex questions over to your staff.' },
                { q: 'Do we need to replace our current software?', a: 'Usually not. We connect the tools you already use, such as email, Xero, your CRM, and your website, using Make.com, Zapier, or direct API integrations.' }
            ]
        }
    },
    {
        id: 'software-development',
        title: 'Software Development & Business Integrations',
        navTitle: 'Software & Integrations',
        shortDesc: 'Custom software, CRM and ERP, Xero, MYOB and QuickBooks integrations, booking systems and apps.',
        icon: Code2,
        color: 'hsl(var(--sc))',
        bestFor: 'Businesses that have outgrown spreadsheets or need their systems to talk to each other',
        outcome: 'Software that fits how your business works, with systems that share data automatically',
        subServices: [
            'Custom business software development',
            'CRM system implementation',
            'ERP integration',
            'Accounting software integration',
            'Xero and MYOB integration',
            'QuickBooks integration',
            'API development and integration',
            'Database development',
            'Custom reporting dashboards',
            'Staff management systems',
            'Booking and appointment systems',
            'Employee attendance systems',
            'Custom mobile applications'
        ],
        details: {
            overview: 'Off-the-shelf software only goes so far. We implement CRM and ERP systems, integrate accounting platforms like Xero, MYOB, and QuickBooks, and build custom tools such as booking systems, staff and attendance systems, dashboards, and mobile apps when nothing on the market fits.',
            process: [
                { title: 'Discover', desc: 'We understand your processes, the systems you use today, and where data is getting stuck or duplicated.' },
                { title: 'Build & Integrate', desc: 'We implement or build the software, connect it to your accounting and other systems through APIs, and migrate your data.' },
                { title: 'Launch & Support', desc: 'We train your team, launch, and continue to support and improve the system as your business grows.' }
            ],
            benefits: [
                'Systems connected so data is entered once',
                'Accounting integrations with Xero, MYOB, and QuickBooks',
                'Custom tools shaped around your workflow',
                'Real-time dashboards instead of manual reports'
            ],
            faqs: [
                { q: 'Can you connect our online store or POS to Xero or MYOB?', a: 'Yes. Accounting software integration is one of our most common projects, so sales, invoices, and payments flow into your books automatically.' },
                { q: 'Should we buy software or have it built?', a: 'If a reliable product already meets most of your needs, we will recommend it and integrate it. We only suggest custom development when it will genuinely save time or money.' },
                { q: 'Do you build mobile apps?', a: 'Yes. We build custom mobile applications for staff and customers, typically connected to the same back-end systems as your website and business software.' }
            ]
        }
    },
    {
        id: 'backup-recovery',
        title: 'Backup, Recovery & Business Continuity',
        navTitle: 'Backup & Business Continuity',
        shortDesc: 'Automatic cloud backups, disaster recovery planning, data recovery and migration.',
        icon: DatabaseBackup,
        color: 'hsl(var(--pc))',
        bestFor: 'Any business whose records, files, or website would be costly or impossible to recreate',
        outcome: 'Confidence that your data can be restored quickly after hardware failure, deletion, or ransomware',
        subServices: [
            'Automatic cloud backups',
            'Computer and server backups',
            'Microsoft 365 backup',
            'Website backups',
            'Database backups',
            'Disaster recovery planning',
            'Data recovery assistance',
            'Business continuity planning',
            'Backup monitoring',
            'Data migration'
        ],
        details: {
            overview: 'Hardware fails, files get deleted, and ransomware happens. What matters is how quickly you can recover. We set up automatic, monitored backups for computers, servers, Microsoft 365, websites, and databases, and plan how your business keeps running if something goes wrong.',
            process: [
                { title: 'Identify Critical Data', desc: 'We work out what data and systems your business cannot operate without, and how quickly each needs to be restored.' },
                { title: 'Automate Backups', desc: 'We set up automatic, off-site cloud backups across computers, servers, Microsoft 365, websites, and databases.' },
                { title: 'Monitor & Test', desc: 'We monitor backups daily, test restores, and maintain your disaster recovery and continuity plans.' }
            ],
            benefits: [
                'Automatic backups with no one needing to remember',
                'Monitoring that catches failed backups early',
                'Tested restores, not just hopeful copies',
                'A documented plan to keep trading after an incident'
            ],
            faqs: [
                { q: 'We already copy files to a USB drive. Is that enough?', a: 'It is better than nothing, but manual backups are easily forgotten and stored in the same place as the original. Automatic off-site cloud backups protect you against theft, fire, and ransomware.' },
                { q: 'How do you know the backups actually work?', a: 'We monitor every backup job and regularly test restoring data, so problems are found before you need the backup.' },
                { q: 'Can you recover data from a failed drive?', a: 'We provide data recovery assistance and will advise on the best option. Recovery from damaged drives is never guaranteed, which is why ongoing backups matter.' }
            ]
        }
    },
    {
        id: 'it-consulting',
        title: 'IT Consulting & Business Technology',
        navTitle: 'IT Consulting & Strategy',
        shortDesc: 'IT assessments, budgets, software selection, cloud migration and digital transformation.',
        icon: Lightbulb,
        color: 'hsl(var(--sc))',
        bestFor: 'Owners and managers making technology decisions without in-house IT expertise',
        outcome: 'A clear technology plan, sensible spending, and projects that are delivered properly',
        subServices: [
            'IT infrastructure assessments',
            'IT budget planning',
            'Technology recommendations',
            'Software selection',
            'Hardware procurement',
            'IT project management',
            'Cloud migration consulting',
            'Business digital transformation',
            'IT policy development',
            'Staff IT training',
            'Technology vendor management'
        ],
        details: {
            overview: 'Technology decisions are business decisions. We give you independent, plain-English advice on what to buy, what to replace, and what to move to the cloud, then manage the vendors and projects so changes are delivered on time and on budget.',
            process: [
                { title: 'Assess', desc: 'We review your current infrastructure, software, costs, and risks to understand where you stand.' },
                { title: 'Roadmap', desc: 'We recommend technology priorities and a realistic IT budget aligned with your business goals.' },
                { title: 'Deliver', desc: 'We procure hardware and software, manage vendors and projects, write IT policies, and train your staff.' }
            ],
            benefits: [
                'Independent advice, not sales pitches',
                'A technology roadmap tied to business goals',
                'IT spending planned and predictable',
                'Projects and vendors managed on your behalf'
            ],
            faqs: [
                { q: 'We are not sure what we need. Where do we start?', a: 'Start with an IT infrastructure assessment. We review what you have and give you a prioritised list of recommendations with estimated costs.' },
                { q: 'Can you deal with our software and telco vendors?', a: 'Yes. Technology vendor management means we handle the calls, quotes, and support tickets with your providers so you do not have to.' },
                { q: 'Do you train staff on new systems?', a: 'Yes. Staff IT training is part of every rollout, and we also offer standalone sessions on tools like Microsoft 365 and cybersecurity awareness.' }
            ]
        }
    }
]

export const getServiceById = (id) => itServices.find(s => s.id === id)

/**
 * Old URLs from the previous SEO-focused site, mapped to the new service pages.
 * Used by the redirect routes in App.jsx so existing links keep working.
 */
export const legacyServiceRedirects = {
    // old /seo/:id pages
    'ecommerce-seo': 'ecommerce-solutions',
    'wordpress-seo': 'website-development',
    'shopify-seo': 'ecommerce-solutions',
    'magento-seo': 'ecommerce-solutions',
    // old /service/:id pages
    'ai-ml': 'automation-ai',
    'cloud-infra': 'cloud-microsoft-365',
    'cyber-security': 'cybersecurity',
    'ui-ux': 'website-development'
}
