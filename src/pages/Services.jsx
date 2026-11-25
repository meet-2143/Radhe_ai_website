import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Search, Target, Wrench, LifeBuoy, CalendarCheck, Briefcase, Zap } from 'lucide-react'
import { itServices } from '../data/servicesData'
import ContactForm from '../components/ContactForm'

gsap.registerPlugin(ScrollTrigger)

const totalSubServices = itServices.reduce((sum, s) => sum + s.subServices.length, 0)

const processSteps = [
    { icon: <Search />, title: 'Assess', desc: 'We look at your current systems, devices, and pain points, and what your business needs to run smoothly.' },
    { icon: <Target />, title: 'Plan', desc: 'You get clear recommendations, a fixed quote, and a timeline, explained in plain English.' },
    { icon: <Wrench />, title: 'Implement', desc: 'We install, configure, migrate, and build, scheduled around your trading hours to minimise disruption.' },
    { icon: <LifeBuoy />, title: 'Support', desc: 'We stay on as your IT partner with ongoing support, maintenance, and improvements.' }
]

const platforms = [
    'Microsoft 365', 'Google Workspace', 'Windows & macOS', 'Shopify', 'WooCommerce', 'WordPress',
    'Stripe', 'PayPal', 'Square', 'Xero', 'MYOB', 'QuickBooks', 'Make.com', 'Zapier',
    'eBay', 'Amazon'
]

const engagementModels = [
    { icon: <CalendarCheck size={28} color="hsl(var(--pc))" />, title: 'Monthly IT Support Packages', desc: 'A fixed monthly fee for helpdesk access, remote and on-site support, maintenance, and security. Ideal for ongoing peace of mind.' },
    { icon: <Briefcase size={28} color="hsl(var(--sc))" />, title: 'Fixed-Price Projects', desc: 'Websites, online stores, POS installs, Microsoft 365 migrations, automation, and software, each scoped and quoted up front.' },
    { icon: <Zap size={28} color="hsl(var(--pc))" />, title: 'On-Demand Support', desc: 'Need help with a one-off issue? Book remote or on-site support when you need it, with no ongoing commitment.' }
]

const Services = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' })
            gsap.utils.toArray('.service-card').forEach((el, i) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
                    y: 40, opacity: 0, duration: 0.7, delay: (i % 3) * 0.08, ease: 'power3.out', clearProps: 'transform,opacity'
                })
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '70vh' }}>
                <p className="reveal" style={{ fontSize: '0.85rem', color: 'hsl(var(--pc))', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                    IT SERVICES FOR SMALL BUSINESS & ECOMMERCE
                </p>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>
                    ALL YOUR IT, <br /><span className="gradient-text">ONE PARTNER</span>
                </h1>
                <p className="reveal hero-p" style={{ maxWidth: '760px', opacity: 0.6, fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                    From everyday IT support and business Wi-Fi to websites, online stores, POS systems, cybersecurity, and AI automation,
                    we look after the technology so you can look after your customers.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#all-services" className="btn btn-primary">Browse Services</a>
                    <Link to="/contact" className="btn btn-secondary">Get a Free Consultation</Link>
                </div>
            </section>

            {/* Trust bar */}
            <div style={{ background: 'hsla(var(--pc)/0.06)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.5rem 5%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', rowGap: '0.75rem' }}>
                    {[`${itServices.length} Service Categories`, `${totalSubServices}+ IT Services`, 'Remote & On-site Support', 'Monthly Support Packages', 'Small Business & eCommerce'].map((t, i, arr) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: '600', opacity: 0.7, letterSpacing: '0.05em', padding: '0 2rem' }}>{t}</span>
                            {i < arr.length - 1 && <span style={{ width: '1px', height: '1.2rem', background: 'hsla(0,0%,100%,0.2)', flexShrink: 0 }} />}
                        </div>
                    ))}
                </div>
            </div>

            {/* All services */}
            <section id="all-services">
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 01 ] WHAT WE DO</h2>
                <p className="reveal" style={{ opacity: 0.5, marginBottom: '4rem', maxWidth: '620px' }}>
                    {itServices.length} service areas covering everything a small business or online store needs from IT. Choose a service to see everything that's included.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
                    {itServices.map(svc => {
                        const Icon = svc.icon
                        const preview = svc.subServices.slice(0, 5)
                        const remaining = svc.subServices.length - preview.length
                        return (
                            <Link key={svc.id} to={`/services/${svc.id}`} className="service-card glass-card"
                                style={{ padding: '2rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ background: 'hsla(var(--pc)/0.1)', padding: '0.75rem', borderRadius: '12px', display: 'inline-flex' }}>
                                        <Icon size={24} color={svc.color} />
                                    </div>
                                    {svc.badge && (
                                        <span style={{ fontSize: '0.65rem', background: 'hsla(var(--sc)/0.1)', color: 'hsl(var(--sc))', padding: '0.3rem 0.75rem', borderRadius: '100px', border: '1px solid hsla(var(--sc)/0.2)', fontWeight: '600' }}>
                                            {svc.badge}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700' }}>{svc.title}</h3>
                                    <p style={{ opacity: 0.55, fontSize: '0.9rem', lineHeight: '1.6' }}>{svc.shortDesc}</p>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {preview.map(item => (
                                        <span key={item} style={{ fontSize: '0.72rem', opacity: 0.7, border: '1px solid var(--glass-border)', padding: '0.3rem 0.65rem', borderRadius: '100px' }}>{item}</span>
                                    ))}
                                    {remaining > 0 && (
                                        <span style={{ fontSize: '0.72rem', color: 'hsl(var(--pc))', padding: '0.3rem 0.4rem' }}>+{remaining} more</span>
                                    )}
                                </div>
                                <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.06em' }}>
                                    EXPLORE SERVICE <ArrowRight size={14} />
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </section>

            {/* Process */}
            <section style={{ background: 'hsla(0, 0%, 100%, 0.01)' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '4rem' }}>[ 02 ] HOW WE WORK</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
                    {processSteps.map((step, idx) => (
                        <div key={idx} className="reveal glass-card" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                            <div style={{ color: 'hsl(var(--pc))', marginBottom: '1.5rem' }}>{step.icon}</div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{step.title}</h4>
                            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Platforms */}
            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '4rem' }}>[ 03 ] PLATFORMS WE WORK WITH</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                    {platforms.map(tool => (
                        <div key={tool} className="reveal glass-card" style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem' }}>
                            {tool}
                        </div>
                    ))}
                </div>
            </section>

            {/* Engagement models */}
            <section style={{ background: 'hsl(var(--card))' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 04 ] FLEXIBLE ENGAGEMENT</h2>
                <h3 className="reveal" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '3rem', lineHeight: '1.1' }}>
                    Work With Us <span className="gradient-text">Your Way</span>
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
                    {engagementModels.map(m => (
                        <div key={m.title} className="reveal glass-card" style={{ padding: '2.5rem' }}>
                            <div style={{ marginBottom: '1.25rem' }}>{m.icon}</div>
                            <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700' }}>{m.title}</h4>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: '1.6' }}>{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Enquiry */}
            <section style={{ background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.05))' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem', alignItems: 'start' }}>
                    <div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Not Sure Which Service <span className="gradient-text">You Need?</span>
                        </h2>
                        <p className="reveal" style={{ opacity: 0.6, lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Tell us what's going on with your technology and we'll recommend the right mix of services. No jargon, no obligation.
                        </p>
                        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Free initial consultation', 'Response within 24 hours', 'Clear, fixed quotes', 'Remote and on-site support'].map(item => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', opacity: 0.8 }}>
                                    <span style={{ color: 'hsl(var(--pc))', fontSize: '1rem' }}>✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal glass-card" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700' }}>Request a Free Consultation</h3>
                        <p style={{ opacity: 0.5, fontSize: '0.85rem', marginBottom: '2rem' }}>Fill in your details and we'll get back to you within 24 hours.</p>
                        <ContactForm source="Services Page" submitLabel="Request Consultation" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Services
