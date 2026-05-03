import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { seoServices } from '../data/servicesData'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'

const SEOServiceDetail = () => {
    const { id } = useParams()
    const service = seoServices.find(s => s.id === id)
    const containerRef = useRef(null)
    const [activeFaq, setActiveFaq] = useState(null)

    useEffect(() => {
        if (!service) return
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 40, opacity: 0, stagger: 0.15, duration: 1, ease: 'power4.out', clearProps: 'all' })
        }, containerRef)
        return () => ctx.revert()
    }, [id, service])

    if (!service) return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Service Not Found</h2>
            <Link to="/seo-services" className="btn btn-secondary" style={{ marginTop: '2rem' }}>Back to SEO Services</Link>
        </div>
    )

    const Icon = service.icon

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '80vh', textAlign: 'center' }}>
                <div className="reveal" style={{ background: 'hsla(var(--pc)/0.1)', padding: '1rem', borderRadius: '20px', display: 'inline-flex', marginBottom: '2rem', border: '1px solid hsla(var(--pc)/0.2)' }}>
                    <Icon size={40} color={service.color} />
                </div>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: '1.1' }}>
                    {service.title}
                </h1>
                <p className="reveal" style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', opacity: 0.6, maxWidth: '750px', margin: '2rem auto' }}>
                    {service.details.overview}
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Hire {service.title} Expert</Link>
                    <Link to="/seo-services" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>All SEO Services</Link>
                </div>
            </section>

            {/* Info cards */}
            <section style={{ background: 'hsla(var(--pc)/0.02)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { label: 'BEST WHEN YOU WANT TO', value: service.bestFor, color: 'var(--pc)' },
                        { label: 'WHAT WE OPTIMIZE', value: service.optimizes, color: 'var(--sc)' },
                        { label: 'BUSINESS OUTCOME', value: service.outcome, color: 'var(--pc)' }
                    ].map((item, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '0.7rem', color: `hsl(${item.color})`, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.label}</div>
                            <p style={{ opacity: 0.85, lineHeight: '1.6' }}>{item.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Our <span className="gradient-text">Process</span></h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {service.details.process.map((step, idx) => (
                        <div key={idx} className="reveal glass-card" style={{ padding: '3rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: '900', opacity: 0.1, marginBottom: '1rem', fontFamily: 'Outfit' }}>0{idx + 1}</div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ opacity: 0.6, lineHeight: '1.7' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits + CTA */}
            <section style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>
                            Why choose our <br /><span className="gradient-text">{service.title}</span>?
                        </h2>
                        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {service.details.benefits.map((b, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <CheckCircle2 color="hsl(var(--pc))" size={22} />
                                    <span style={{ fontSize: '1.05rem', opacity: 0.8 }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal glass-card" style={{ padding: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '140%', height: '140%', background: 'radial-gradient(circle, hsla(var(--pc)/0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                        <h3 style={{ marginBottom: '1.5rem' }}>Ready to get more leads from search?</h3>
                        <p style={{ opacity: 0.6, marginBottom: '3rem' }}>Book a free strategy call and we'll show you exactly what's holding your rankings back.</p>
                        <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                            Book Free Strategy Call <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 5%' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Common <span className="gradient-text">Questions</span></h2>
                </div>
                <div className="reveal faq-container">
                    {service.details.faqs.map((faq, idx) => (
                        <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                            <div className="faq-question">
                                <h3>{faq.q}</h3>
                                <div className="faq-toggle"><ChevronDown size={18} className="faq-icon" /></div>
                            </div>
                            <div className="faq-answer"><p>{faq.a}</p></div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default SEOServiceDetail
