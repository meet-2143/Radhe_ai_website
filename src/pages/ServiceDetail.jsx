import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { services } from '../data/servicesData'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'

const ServiceDetail = () => {
    const { id } = useParams()
    const service = services.find(s => s.id === id)
    const containerRef = useRef(null)
    const [activeFaq, setActiveFaq] = React.useState(null)

    useEffect(() => {
        if (service) {
            const ctx = gsap.context(() => {
                gsap.from('.reveal', {
                    y: 40,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 1,
                    ease: 'power4.out',
                    clearProps: 'all'
                })

                gsap.from('.feature-card', {
                    opacity: 0,
                    y: 30,
                    stagger: 0.2,
                    duration: 0.8,
                    delay: 0.5,
                    ease: 'power3.out'
                })
            }, containerRef)
            return () => ctx.revert()
        }
    }, [id, service])

    if (!service) {
        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Service Not Found</h2>
                <Link to="/services" className="btn btn-secondary" style={{ marginTop: '2rem' }}>Back to Services</Link>
            </div>
        )
    }

    const Icon = service.icon

    return (
        <main ref={containerRef} style={{ background: 'hsl(var(--bg))' }}>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '80vh', textAlign: 'center' }}>
                <div className="reveal" style={{
                    background: `hsla(var(--pc) / 0.1)`,
                    padding: '1rem',
                    borderRadius: '20px',
                    display: 'inline-flex',
                    marginBottom: '2rem',
                    border: '1px solid hsla(var(--pc) / 0.2)'
                }}>
                    <Icon size={40} color={service.color} />
                </div>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: '1.1' }}>
                    {service.title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? 'gradient-text' : ''}>{word} </span>
                    ))}
                </h1>
                <p className="reveal" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', opacity: 0.6, maxWidth: '800px', margin: '2rem auto' }}>
                    {service.details.overview}
                </p>
                <div className="reveal">
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Get Started with {service.title}</Link>
                </div>
            </section>

            {/* Working Pattern / Process */}
            <section style={{ background: 'hsla(var(--pc) / 0.02)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Our Working <span className="gradient-text">Pattern</span></h2>
                    <p style={{ opacity: 0.5, marginTop: '1rem' }}>How we deliver excellence through a structured approach</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {service.details.process.map((step, idx) => (
                        <div key={idx} className="glass-card feature-card" style={{ padding: '3rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: '900', opacity: 0.1, marginBottom: '1rem', fontFamily: 'Outfit' }}>
                                0{idx + 1}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ opacity: 0.6, lineHeight: '1.7' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 5%' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Expert <span className="gradient-text">Insights</span></h2>
                    <p style={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Everything you need to know about our {service.title} expertise</p>
                </div>

                <div className="reveal faq-container">
                    {service.details.faqs.map((faq, idx) => (
                        <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                            <div className="faq-question">
                                <h3>{faq.q}</h3>
                                <div className="faq-toggle">
                                    <ChevronDown size={18} className="faq-icon" />
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits / Why Choose Us */}
            <section style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>
                            Why choose our <br /> <span className="gradient-text">{service.title}</span>?
                        </h2>
                        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {service.details.benefits.map((benefit, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <CheckCircle2 color="hsl(var(--pc))" size={24} />
                                    <span style={{ fontSize: '1.1rem', opacity: 0.8 }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal glass-card" style={{ padding: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '140%', height: '140%', background: `radial-gradient(circle, hsla(var(--pc) / 0.1) 0%, transparent 70%)`, pointerEvents: 'none' }} />
                        <h3 style={{ marginBottom: '1.5rem' }}>Ready to transform your business?</h3>
                        <p style={{ opacity: 0.6, marginBottom: '3rem' }}>Join the forward-thinking companies already leveraging our expertise.</p>
                        <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                            Book a Consultation <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServiceDetail
