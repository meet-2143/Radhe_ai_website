/**
 * Example projects illustrating the typical scope of each service.
 * These describe representative engagements, not specific named clients,
 * so they deliberately contain no client names or performance figures.
 * Replace or extend with real case studies (and real metrics) as they become available.
 */
export const projects = [
    {
        id: 'managed-it-small-office',
        title: 'Managed IT for a Small Office',
        category: 'IT Support',
        clientType: 'Professional services office',
        shortDesc: 'Turning ad-hoc, break-fix IT into a stable, supported office on a monthly plan.',
        tech: ['Windows & Mac', 'Remote Support Tools', 'Microsoft 365', 'Network Printers'],
        services: ['it-support', 'networking-hardware', 'cybersecurity'],
        color: 'linear-gradient(135deg, #0f766e, #14b8a6)',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=1200',
        caseStudy: {
            problem: 'A typical small office relies on whoever is "good with computers" to fix problems. Machines are on different update levels, printers drop off the network, and nobody knows which accounts still belong to former staff.',
            identifiedProblem: 'The root cause is no ownership: no inventory of devices, no consistent configuration, and no routine maintenance, so every issue is handled from scratch.',
            solution: 'We audit every device and account, standardise configurations, fix outstanding issues, and move the office onto a monthly IT support package with helpdesk access, remote support, on-site visits, and scheduled maintenance.',
            impact: 'Staff have one place to go for any IT problem, issues are fixed remotely in most cases, and the office runs on a predictable monthly IT cost instead of emergency call-outs.',
            deliverables: ['Device and account audit', 'Standardised laptop and desktop setup', 'Helpdesk and remote support', 'Scheduled maintenance and updates']
        }
    },
    {
        id: 'multi-store-pos-rollout',
        title: 'Multi-Store POS Rollout',
        category: 'POS & Retail',
        clientType: 'Retail chain',
        shortDesc: 'Installing a connected POS across several stores with shared stock and reporting.',
        tech: ['POS Software', 'EFTPOS Integration', 'Barcode Scanners', 'Receipt Printers'],
        services: ['pos-retail', 'networking-hardware', 'ecommerce-solutions'],
        color: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200',
        caseStudy: {
            problem: 'Retailers with several locations often run a different till setup in each store. Stock is counted separately, prices drift between stores, and head office cannot see sales until the end of the week.',
            identifiedProblem: 'Each store operates as an island: standalone POS software, inconsistent hardware, and store networks that were never designed for connected systems.',
            solution: 'We select and configure one POS platform, install terminals, scanners, receipt printers, and cash drawers, integrate the bank EFTPOS terminals, and stabilise each store network. Stock and pricing are managed centrally with multi-store reporting.',
            impact: 'Every store sells from the same product and price list, stock levels are visible across locations, and management has same-day sales reporting.',
            deliverables: ['POS software configuration', 'Counter hardware installation', 'EFTPOS integration support', 'Multi-store stock and reporting']
        }
    },
    {
        id: 'microsoft-365-migration',
        title: 'Microsoft 365 Migration',
        category: 'Cloud & Microsoft 365',
        clientType: 'Growing small business',
        shortDesc: 'Moving email and files from an old host and shared drive into Microsoft 365.',
        tech: ['Microsoft 365', 'Outlook', 'Teams', 'SharePoint & OneDrive'],
        services: ['cloud-microsoft-365', 'backup-recovery', 'cybersecurity'],
        color: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
        image: '/projects/cloud.png',
        caseStudy: {
            problem: 'Many small businesses still use email from their web host and keep files on one office computer or USB drive. Mailboxes fill up, files cannot be reached from home, and nothing is properly backed up.',
            identifiedProblem: 'Email and files depend on a single provider and a single machine, with no central account management or backup.',
            solution: 'We set up Microsoft 365, migrate every mailbox, contact, and calendar, move shared files into SharePoint and OneDrive, configure Outlook and Teams on each device, enable MFA, and add a Microsoft 365 backup.',
            impact: 'The team gets professional email on their own domain, files are available securely from anywhere, and accounts are protected and backed up.',
            deliverables: ['Business email migration', 'SharePoint and OneDrive setup', 'Teams and Outlook configuration', 'MFA and Microsoft 365 backup']
        }
    },
    {
        id: 'shopify-store-launch',
        title: 'Shopify Store Launch',
        category: 'eCommerce',
        clientType: 'Retailer going online',
        shortDesc: 'Launching a Shopify store with payments, shipping, and marketplace sales.',
        tech: ['Shopify', 'Stripe & PayPal', 'Shipping Integration', 'eBay & Amazon'],
        services: ['ecommerce-solutions', 'website-development'],
        color: 'linear-gradient(135deg, #059669, #34d399)',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        caseStudy: {
            problem: 'A bricks-and-mortar retailer wants to sell online but does not know where to start: which platform, how to take payments, how to ship, and how to keep stock in line with the shop.',
            identifiedProblem: 'Without a plan, stores launch with incomplete product data, manual shipping, and stock that is never in sync.',
            solution: 'We build a Shopify store, load the product catalogue, connect payment gateways and shipping, integrate inventory with the in-store POS, and list products on eBay and Amazon.',
            impact: 'The business can take orders online and on marketplaces from one catalogue, with payments, shipping labels, and stock handled automatically.',
            deliverables: ['Shopify store setup', 'Payment gateway integration', 'Shipping and inventory integration', 'Marketplace listings']
        }
    },
    {
        id: 'accounting-workflow-automation',
        title: 'Accounting Workflow Automation',
        category: 'Automation & AI',
        clientType: 'Accounting firm',
        shortDesc: 'Automating invoice capture, data entry, and client follow-ups.',
        tech: ['Make.com', 'Zapier', 'Xero', 'AI Document Processing'],
        services: ['automation-ai', 'software-development', 'cloud-microsoft-365'],
        color: 'linear-gradient(135deg, #c2410c, #fb923c)',
        image: '/projects/fintech.png',
        caseStudy: {
            problem: 'Accounting teams spend hours re-typing invoices and receipts, chasing clients for documents by email, and copying data between systems, especially in peak season.',
            identifiedProblem: 'Documents arrive in many formats through email, and every step from capture to entry to follow-up is manual.',
            solution: 'We build an automated pipeline: incoming documents are captured from email, read with AI document processing, entered into the accounting system, and filed. Automated emails chase missing documents, and the CRM updates itself.',
            impact: 'Staff spend their time reviewing and advising instead of typing, and clients receive consistent, timely reminders.',
            deliverables: ['Invoice and document processing automation', 'Accounting software integration', 'Automated client follow-up emails', 'CRM automation']
        }
    },
    {
        id: 'medical-practice-security',
        title: 'Medical Practice Security Upgrade',
        category: 'Cybersecurity',
        clientType: 'Medical practice',
        shortDesc: 'Hardening a practice network and protecting patient data.',
        tech: ['Endpoint Security', 'Firewall', 'MFA', 'Encrypted Backups'],
        services: ['cybersecurity', 'backup-recovery', 'it-support'],
        color: 'linear-gradient(135deg, #be123c, #fb7185)',
        image: '/projects/healthcare.png',
        caseStudy: {
            problem: 'Medical practices hold highly sensitive patient records but often run on ageing equipment, shared passwords, and email with no filtering.',
            identifiedProblem: 'A security assessment typically finds missing endpoint protection, no MFA, a basic consumer router, and backups that have never been tested.',
            solution: 'We deploy managed endpoint security, install and configure a business firewall, enable MFA and a password manager, add email and phishing protection, encrypt devices, set up monitored backups, and run staff awareness training.',
            impact: 'Patient data is protected by multiple layers of security, staff know how to spot phishing, and the practice has a tested plan to recover if something goes wrong.',
            deliverables: ['Security assessment', 'Endpoint security and firewall', 'MFA and password management', 'Staff awareness training']
        }
    },
    {
        id: 'wholesale-erp-integration',
        title: 'Wholesale ERP & eCommerce Integration',
        category: 'Software & Integrations',
        clientType: 'Wholesale distributor',
        shortDesc: 'Connecting ERP, accounting, and a B2B ordering portal.',
        tech: ['ERP Integration', 'MYOB / Xero', 'API Development', 'B2B eCommerce'],
        services: ['software-development', 'ecommerce-solutions', 'automation-ai'],
        color: 'linear-gradient(135deg, #0e7490, #22d3ee)',
        image: '/projects/logistics.png',
        caseStudy: {
            problem: 'Wholesalers commonly take trade orders by phone and email, re-key them into the ERP, and then again into accounting, which is slow and error-prone.',
            identifiedProblem: 'The ERP, accounting software, and any online ordering are not connected, so the same order is typed in several times.',
            solution: 'We build a B2B ordering portal with customer-specific pricing, integrate it with the ERP through APIs, connect invoicing to the accounting software, and add reporting dashboards.',
            impact: 'Trade customers can order online at any time, orders flow straight to the warehouse and accounts, and management can see sales and stock in one place.',
            deliverables: ['B2B ordering portal', 'ERP and API integration', 'Accounting software integration', 'Custom reporting dashboards']
        }
    },
    {
        id: 'cafe-website-and-online-ordering',
        title: 'Cafe Website & Online Ordering',
        category: 'Websites',
        clientType: 'Cafe & restaurant',
        shortDesc: 'A mobile-friendly website with online ordering connected to the cafe POS.',
        tech: ['WordPress', 'Online Ordering', 'POS Integration', 'Website Hosting'],
        services: ['website-development', 'pos-retail'],
        color: 'linear-gradient(135deg, #a16207, #facc15)',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
        caseStudy: {
            problem: 'Many cafes have an outdated website or just a social media page. The menu is hard to find on a phone, there is no online ordering, and orders taken by phone are re-keyed into the POS by hand.',
            identifiedProblem: 'The website is not built for mobile and is not connected to the POS, so customers cannot order online and staff double-handle every phone order.',
            solution: 'We build a fast, mobile-responsive website with the menu and online ordering connected to the POS, then host, secure, and maintain the site so menus and hours stay current.',
            impact: 'Customers can view the menu and order from their phone, online orders go straight to the POS, and the website stays fast and up to date.',
            deliverables: ['Mobile-responsive website', 'Online ordering integration', 'POS connection', 'Hosting and maintenance']
        }
    }
]
