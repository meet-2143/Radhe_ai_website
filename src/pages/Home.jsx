import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2, Briefcase, Store, ShoppingCart, Building2 } from 'lucide-react'
import { projects } from '../data/projects'
import { itServices, getServiceById } from '../data/servicesData'
import { industries } from '../data/industriesData'

gsap.registerPlugin(ScrollTrigger)

const totalSubServices = itServices.reduce((sum, s) => sum + s.subServices.length, 0)

const testimonials = [
    { name: 'Sheryl Erixson', role: 'Founder @ ProcessRun', industry: 'SaaS', text: 'Radhe AI played a pivotal role in developing our core infrastructure. They delivered exactly on time and provided incredible clarity for our daily operations, allowing us to scale without technical friction.', rating: 5 },
    { name: 'Elvia', role: 'Chief Marketing Officer', industry: 'eCommerce', text: 'Their support in streamlining our business logic was exceptional. The team ensured every delivery milestone was met, giving us the operational confidence we needed to expand our market reach.', rating: 5 },
    { name: 'Sanat Koshiya', role: 'Founder @ Apna Indian Bazaar', industry: 'Retail', text: 'Working with Radhe AI brought much-needed structure to our projects. Their ability to deliver complex features on time while maintaining transparent communication is what sets them apart.', rating: 5 },
    { name: 'Anita Desai', role: 'Head of AI', industry: 'Healthcare', text: 'Security and privacy were our top concerns. Radhe AI exceeded all healthcare compliance standards with zero delays in implementation.', rating: 5 },
    { name: 'Michael Chen', role: 'VP Engineering', industry: 'FinTech', text: 'Professional, innovative, and incredibly fast. The predictive models they built saved us millions through operational optimization.', rating: 5 },
]

const audiences = [
    {
        icon: <Briefcase size={20} color="hsl(var(--pc))" />,
        segment: 'Small Businesses & Offices',
        tag: 'Managed IT',
        problem: 'Nobody owns IT. Computers, email, printers, and Wi-Fi get fixed when they break, usually at the worst possible moment.',
        solution: 'We become your IT department with helpdesk support, Microsoft 365, security, backups, and maintenance on a monthly plan.',
        outcome: 'Fewer interruptions, predictable IT costs, and one number to call for everything.',
        cta: 'Explore IT Support',
        to: '/services/it-support'
    },
    {
        icon: <Store size={20} color="hsl(var(--pc))" />,
        segment: 'Retail & Hospitality',
        tag: 'POS & Networks',
        problem: 'When the POS, EFTPOS, or network goes down, you cannot trade, and stock levels never quite match what is on the shelf.',
        solution: 'We install and support POS systems, EFTPOS integration, barcode and receipt hardware, business Wi-Fi, and stock management.',
        outcome: 'Reliable checkouts, accurate inventory, and clear sales reporting across one store or many.',
        cta: 'Explore POS Solutions',
        to: '/services/pos-retail'
    },
    {
        icon: <ShoppingCart size={20} color="hsl(var(--pc))" />,
        segment: 'eCommerce & Online Retailers',
        tag: 'Shopify & WooCommerce',
        problem: 'Orders, stock, shipping, and marketplaces live in different systems, and someone spends hours keeping them in sync by hand.',
        solution: 'We build and manage Shopify and WooCommerce stores, integrate payments, shipping, eBay and Amazon, and automate order workflows.',
        outcome: 'A store that scales without adding admin, and more time spent on growing sales.',
        cta: 'Explore eCommerce',
        to: '/services/ecommerce-solutions'
    },
    {
        icon: <Building2 size={20} color="hsl(var(--pc))" />,
        segment: 'Professional Practices',
        tag: 'Cloud & Security',
        problem: 'Accounting firms, medical practices, and real estate agencies hold sensitive data and lose hours to repetitive admin.',
        solution: 'We secure Microsoft 365 with MFA and email protection, back up client data, and automate document and CRM workflows.',
        outcome: 'Confidential data protected, staff working from anywhere, and admin time cut back.',
        cta: 'Explore Cybersecurity',
        to: '/services/cybersecurity'
    }
]

const AudienceCard = ({ a }) => (
    <div className="reveal-on-scroll glass-card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div className="audience-header" style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ background: 'hsla(var(--pc)/0.1)', padding: '0.6rem', borderRadius: '10px', flexShrink: 0 }}>{a.icon}</div>
                <h3 style={{ fontSize: '1.1rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700', margin: 0 }}>{a.segment}</h3>
            </div>
            <span style={{ fontSize: '0.65rem', background: 'hsla(var(--sc)/0.1)', color: 'hsl(var(--sc))', padding: '0.3rem 0.75rem', borderRadius: '100px', border: '1px solid hsla(var(--sc)/0.2)', fontWeight: '600', whiteSpace: 'nowrap', flexShrink: 0 }}>{a.tag}</span>
        </div>
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', opacity: 0.4, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>THE PROBLEM</div>
            <p style={{ fontSize: '0.875rem', opacity: 0.7, lineHeight: '1.6', margin: 0 }}>{a.problem}</p>
        </div>
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>HOW WE HELP</div>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, lineHeight: '1.6', margin: 0 }}>{a.solution}</p>
        </div>
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', background: 'hsla(var(--sc)/0.04)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--sc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>OUTCOME</div>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, lineHeight: '1.6', margin: 0 }}>{a.outcome}</p>
        </div>
        <div style={{ padding: '1.25rem 1.75rem' }}>
            <Link to={a.to} className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.7rem 1.4rem', width: '100%', justifyContent: 'center' }}>
                {a.cta} <ArrowRight size={14} />
            </Link>
        </div>
    </div>
)

const Home = () => {
    const mainRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-reveal', {
                y: 80, opacity: 0, duration: 1.2, stagger: 0.18,
                ease: 'power4.out', clearProps: 'transform,opacity'
            })
            gsap.utils.toArray('.reveal-on-scroll').forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                    y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
                    clearProps: 'transform,opacity'
                })
            })
        }, mainRef)
        return () => ctx.revert()
    }, [])

    return (
        <main ref={mainRef}>

            {/* ── HERO ── */}
            <section className="hero" style={{ minHeight: '100vh', gap: '0' }}>
                <h1 className="hero-reveal" style={{ lineHeight: '0.92', marginBottom: '2rem' }}>
                    TECHNOLOGY THAT <br />
                    <span className="gradient-text">KEEPS YOUR</span> <br />
                    BUSINESS RUNNING.
                </h1>
                <p className="hero-reveal" style={{ maxWidth: '660px', fontSize: 'clamp(1rem, 3vw, 1.25rem)', opacity: 0.6, marginBottom: '3rem' }}>
                    Complete IT services for small businesses and eCommerce. IT support, websites, online stores, Microsoft 365,
                    cybersecurity, POS systems, and AI automation, all from one trusted partner.
                </p>
                <div className="hero-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.9rem' }}>Get IT Help</Link>
                    <Link to="/services" className="btn btn-secondary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.9rem' }}>Explore Services</Link>
                </div>
            </section>

            {/* ── ONE PARTNER ── */}
            <section style={{ background: 'hsla(0,0%,100%,0.02)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45%, 500px), 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1.5rem' }}>[ 01 ] ONE PARTNER FOR ALL YOUR IT</h2>
                        <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '2rem', lineHeight: '1.1' }}>
                            Stop Juggling <span className="gradient-text">Five Different</span> IT Providers
                        </h3>
                        <p className="reveal-on-scroll" style={{ opacity: 0.6, lineHeight: '1.8', marginBottom: '2rem' }}>
                            Most small businesses have one person for computers, another for the website, a third for the POS, and nobody for security.
                            When something breaks, everyone points at someone else. We look after all of it, so you have one team that knows your whole setup.
                        </p>
                        <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Remote support for quick fixes, on-site visits when needed', 'Monthly support packages with predictable costs', 'Plain-English advice, with no jargon and no upselling'].map((p, i) => (
                                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    <CheckCircle2 size={18} color="hsl(var(--pc))" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ opacity: 0.8, fontSize: '0.95rem' }}>{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }}>
                        {[
                            { value: String(itServices.length), label: 'Service Areas', color: 'var(--pc)' },
                            { value: `${totalSubServices}+`, label: 'IT Services', color: 'var(--sc)' },
                            { value: '1', label: 'Point of Contact', color: 'var(--pc)' },
                            { value: '24h', label: 'Enquiry Response', color: 'var(--sc)' },
                        ].map((s, i) => (
                            <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', color: `hsl(${s.color})` }}>{s.value}</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.4rem', letterSpacing: '0.05em' }}>{s.label.toUpperCase()}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section>
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '2rem' }}>[ 02 ] OUR SERVICES</h2>
                <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                    Everything Your Business Needs <span className="gradient-text">From IT</span>
                </h3>
                <p className="reveal-on-scroll" style={{ opacity: 0.5, maxWidth: '600px', marginBottom: '3rem' }}>
                    {itServices.length} service areas, from the front counter to the cloud.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                    {itServices.map(svc => {
                        const Icon = svc.icon
                        return (
                            <Link key={svc.id} to={`/services/${svc.id}`} className="reveal-on-scroll glass-card"
                                style={{ padding: '1.75rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Icon size={26} color={svc.color} />
                                    {svc.badge && <span style={{ fontSize: '0.6rem', color: 'hsl(var(--sc))', border: '1px solid hsla(var(--sc)/0.25)', padding: '0.2rem 0.6rem', borderRadius: '100px' }}>{svc.badge}</span>}
                                </div>
                                <h4 style={{ fontSize: '1rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700', margin: 0 }}>{svc.title}</h4>
                                <p style={{ fontSize: '0.85rem', opacity: 0.55, lineHeight: '1.55', margin: 0 }}>{svc.shortDesc}</p>
                            </Link>
                        )
                    })}
                </div>
                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                    <Link to="/services" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>View All Services <ArrowRight size={16} /></Link>
                </div>
            </section>

            {/* ── WHO WE SERVE ── */}
            <section style={{ background: 'hsla(0,0%,100%,0.02)' }}>
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 03 ] WHO WE SERVE</h2>
                <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '4rem', lineHeight: '1.1' }}>
                    Built for Businesses That <span className="gradient-text">Can't Afford Downtime</span>
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '1.5rem' }}>
                    {audiences.map((a, i) => <AudienceCard key={i} a={a} />)}
                </div>
            </section>

            {/* ── INDUSTRIES ── */}
            <section>
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 04 ] INDUSTRIES</h2>
                <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '3rem', lineHeight: '1.1' }}>
                    IT That Fits <span className="gradient-text">Your Industry</span>
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
                    {industries.map(ind => {
                        const Icon = ind.icon
                        return (
                            <Link key={ind.id} to={`/industries?i=${ind.id}`} className="reveal-on-scroll glass-card"
                                style={{ padding: '1.5rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <Icon size={22} color="hsl(var(--pc))" />
                                <h4 style={{ fontSize: '0.95rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700', margin: 0 }}>{ind.name}</h4>
                                <p style={{ fontSize: '0.78rem', opacity: 0.5, lineHeight: '1.5', margin: 0 }}>{ind.focus}</p>
                            </Link>
                        )
                    })}
                </div>
            </section>

            {/* ── EXAMPLE WORK ── */}
            <section style={{ background: 'hsla(0,0%,100%,0.02)' }}>
                <p style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem', fontFamily: 'Outfit', fontWeight: '800', letterSpacing: '-0.02em' }}>[ 05 ] WHAT WE DELIVER</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                    {projects.slice(0, 2).map(project => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            style={{
                                display: 'flex', flexDirection: 'column',
                                textDecoration: 'none', color: 'white',
                                background: 'hsla(0,0%,100%,0.02)',
                                border: '1px solid hsla(0,0%,100%,0.08)',
                                borderRadius: '24px', overflow: 'hidden'
                            }}
                        >
                            <div style={{ height: '240px', background: project.color, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.45))' }} />
                            </div>
                            <div style={{ padding: '2rem 2.5rem 2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--sc))', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>{project.category.toUpperCase()} · EXAMPLE PROJECT</div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'white', lineHeight: '1.2', fontFamily: 'Outfit', fontWeight: '800', letterSpacing: '-0.02em' }}>{project.title.toUpperCase()}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: '1.65' }}>{project.shortDesc}</p>
                                <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                                    {project.services.map(sid => getServiceById(sid)).filter(Boolean).map(svc => (
                                        <span key={svc.id} style={{ background: 'hsla(var(--pc)/0.1)', border: '1px solid hsla(var(--pc)/0.25)', padding: '0.45rem 0.85rem', borderRadius: '10px', fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)' }}>
                                            {svc.navTitle}
                                        </span>
                                    ))}
                                </div>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '0.82rem', color: 'white', letterSpacing: '0.06em', marginTop: 'auto' }}>
                                    VIEW PROJECT <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <Link
                        to="/portfolio"
                        style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            padding: '1rem 3rem', borderRadius: '100px',
                            background: 'hsla(0,0%,100%,0.04)', border: '1px solid hsla(0,0%,100%,0.1)',
                            color: 'white', textDecoration: 'none',
                            fontFamily: 'Outfit', fontWeight: '600', fontSize: '0.85rem',
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            transition: 'all 0.3s ease', whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'hsla(0,0%,100%,0.08)'; e.currentTarget.style.borderColor = 'hsla(0,0%,100%,0.2)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'hsla(0,0%,100%,0.04)'; e.currentTarget.style.borderColor = 'hsla(0,0%,100%,0.1)' }}
                    >
                        VIEW ALL PROJECTS
                    </Link>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section>
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 06 ] CLIENT REVIEWS</h2>
                <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '4rem', lineHeight: '1.1' }}>
                    Trusted by <span className="gradient-text">Real Partners</span>
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30%, 380px), 1fr))', gap: '1.5rem' }}>
                    {testimonials.map((t, i) => (
                        <div key={i} className="reveal-on-scroll testimonial-card" style={{ borderRadius: '24px' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                                        {[...Array(t.rating)].map((_, si) => <span key={si} style={{ color: 'hsl(var(--pc))', fontSize: '1rem' }}>★</span>)}
                                    </div>
                                    <span style={{ fontSize: '0.7rem', background: 'hsla(var(--sc)/0.1)', color: 'hsl(var(--sc))', padding: '0.25rem 0.7rem', borderRadius: '100px', border: '1px solid hsla(var(--sc)/0.2)' }}>{t.industry}</span>
                                </div>
                                <p style={{ fontStyle: 'italic', opacity: 0.85, fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>"{t.text}"</p>
                            </div>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1rem', color: 'white' }}>{t.name}</strong>
                                <span style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '0.05em' }}>{t.role.toUpperCase()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section style={{ textAlign: 'center', background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.06))' }}>
                <h2 className="reveal-on-scroll" style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', marginBottom: '2rem', lineHeight: '1.05' }}>
                    Ready for IT That <br /><span className="gradient-text">Just Works?</span>
                </h2>
                <p className="reveal-on-scroll" style={{ opacity: 0.6, maxWidth: '520px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                    Book a free consultation. We'll review your current setup and show you what to fix first.
                </p>
                <div className="reveal-on-scroll" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Get a Free Consultation</Link>
                    <Link to="/why-us" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>Why Choose Us</Link>
                </div>
            </section>

        </main>
    )
}

export default Home
