import { Newspaper, Mail, Coffee, Fuel, Store, Calculator, Home, Stethoscope, Truck, ShoppingCart } from 'lucide-react'

/**
 * Target industries and the services most relevant to each.
 * `services` holds ids from itServices in servicesData.js.
 */
export const industries = [
    {
        id: 'newsagencies',
        name: 'Newsagencies',
        icon: Newspaper,
        focus: 'POS, EFTPOS support, networking, inventory',
        challenge: 'High-volume counters, lottery and bill-payment terminals, thousands of small SKUs, and no time for the POS or network to be down.',
        howWeHelp: 'We install and support POS and EFTPOS integration, keep the shop network stable, and set up inventory and stock management so ordering and returns are accurate.',
        services: ['pos-retail', 'networking-hardware', 'it-support']
    },
    {
        id: 'post-offices',
        name: 'Post Offices',
        icon: Mail,
        focus: 'Computer support, networking, hardware',
        challenge: 'Counter computers, printers, and scanners that must work every day, plus secure networks for the services you handle.',
        howWeHelp: 'We provide day-to-day computer support, maintain a reliable and secure network, and supply and install counter hardware, printers, and scanners.',
        services: ['it-support', 'networking-hardware', 'cybersecurity']
    },
    {
        id: 'cafes-restaurants',
        name: 'Cafes & Restaurants',
        icon: Coffee,
        focus: 'POS, Wi-Fi, online ordering, websites',
        challenge: 'Busy service periods, kitchen printers, guest Wi-Fi, online orders, and a menu that needs to look good online.',
        howWeHelp: 'We set up hospitality POS and receipt printers, separate staff and guest Wi-Fi, online ordering, and a mobile-friendly website with your menu and bookings.',
        services: ['pos-retail', 'networking-hardware', 'website-development', 'ecommerce-solutions']
    },
    {
        id: 'service-stations',
        name: 'Service Stations',
        icon: Fuel,
        focus: 'POS, networking, CCTV integration',
        challenge: 'Long trading hours, forecourt and shop POS, CCTV that must record reliably, and networks that cannot drop out.',
        howWeHelp: 'We install and support POS systems, build resilient networks, and integrate CCTV with your network for secure recording and remote viewing.',
        services: ['pos-retail', 'networking-hardware', 'cybersecurity']
    },
    {
        id: 'retail-stores',
        name: 'Retail Stores',
        icon: Store,
        focus: 'POS, eCommerce, inventory management',
        challenge: 'Keeping in-store and online stock in sync, running promotions, and understanding what is actually selling.',
        howWeHelp: 'We connect POS, inventory, and an online store so stock levels match, set up promotions, and deliver retail reporting across one or many stores.',
        services: ['pos-retail', 'ecommerce-solutions', 'software-development']
    },
    {
        id: 'accounting-firms',
        name: 'Accounting Firms',
        icon: Calculator,
        focus: 'Microsoft 365, cybersecurity, automation',
        challenge: 'Confidential client data, secure document sharing, and a heavy load of repetitive data entry in peak season.',
        howWeHelp: 'We set up and secure Microsoft 365, enforce MFA and email security, back up client data, and automate document and data-entry workflows.',
        services: ['cloud-microsoft-365', 'cybersecurity', 'automation-ai', 'backup-recovery']
    },
    {
        id: 'real-estate',
        name: 'Real Estate',
        icon: Home,
        focus: 'Websites, CRM, cloud solutions',
        challenge: 'Agents working on the road, leads arriving from many portals, and listings that must look great online.',
        howWeHelp: 'We build listing-ready websites, implement and automate your CRM, and set up cloud email and file sharing so agents can work from anywhere.',
        services: ['website-development', 'software-development', 'cloud-microsoft-365', 'automation-ai']
    },
    {
        id: 'medical-practices',
        name: 'Medical Practices',
        icon: Stethoscope,
        focus: 'IT support, security, cloud solutions',
        challenge: 'Sensitive patient records, practice software that must always be available, and strict privacy expectations.',
        howWeHelp: 'We provide responsive IT support, harden security around patient data, set up secure cloud systems, and run monitored backups with a recovery plan.',
        services: ['it-support', 'cybersecurity', 'cloud-microsoft-365', 'backup-recovery']
    },
    {
        id: 'wholesale',
        name: 'Wholesale Businesses',
        icon: Truck,
        focus: 'Inventory, ERP, eCommerce',
        challenge: 'Large product ranges, trade customers with their own pricing, and orders that need to flow through to warehouse and accounts.',
        howWeHelp: 'We integrate ERP and inventory systems, connect accounting software, and build B2B eCommerce so trade orders flow through without re-keying.',
        services: ['software-development', 'ecommerce-solutions', 'automation-ai']
    },
    {
        id: 'online-retailers',
        name: 'Online Retailers',
        icon: ShoppingCart,
        focus: 'Shopify, automation, integrations',
        challenge: 'Selling across several channels, and keeping up with order processing as volume grows.',
        howWeHelp: 'We build and manage Shopify stores, integrate marketplaces, payments, and shipping, and automate order and customer workflows.',
        services: ['ecommerce-solutions', 'automation-ai', 'software-development']
    }
]
