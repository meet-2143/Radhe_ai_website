import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import { itServices, getServiceById } from '../data/servicesData'
import { industries } from '../data/industriesData'
import ContactForm from '../components/ContactForm'

const ServiceDetail = () => {
    const { id } = useParams()
    const service = getServiceById(id)
    const containerRef = useRef(null)
    const [activeFaq, setActiveFaq] = useState(null)

    useEffect(() => {
        setActiveFaq(null)
        if (!service) return
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 40, opacity: 0, stagger: 0.12, duration: 1, ease: 'power4.out', clearProps: 'transform,opacity' })
        }, containerRef)
        return () => ctx.revert()
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
    const relevantIndustries = industries.filter(ind => ind.services.includes(service.id))
    // Related: services most often recommended alongside this one across industries, then fill in order
    const relatedIds = [...new Set(relevantIndustries.flatMap(ind => ind.services))].filter(sid => sid !== service.id)
    const related = [
        ...relatedIds.map(getServiceById),
        ...itServices.filter(s => s.id !== service.id && !relatedIds.includes(s.id))
    ].slice(0, 3)

    return (
        <main ref={containerRef} style={{ background: 'hsl(var(--bg))' }}>
            {/* Hero */}
            <section className="hero" style={{ minHeight: '80vh', textAlign: 'center' }}>
                <div className="reveal" style={{ background: 'hsla(var(--pc) / 0.1)', padding: '1rem', borderRadius: '20px', display: 'inline-flex', marginBottom: '2rem', border: '1px solid hsla(var(--pc) / 0.2)' }}>
                    <Icon size={40} color={service.color} />
                </div>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', lineHeight: '1.1' }}>
                    {service.title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? 'gradient-text' : ''}>{word} </span>
                    ))}
                </h1>
                <p className="reveal" style={{ fontSize: 'clamp(1rem, 3vw, 1.35rem)', opacity: 0.6, maxWidth: '820px', margin: '2rem auto' }}>
                    {service.details.overview}
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#enquire" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Get a Free Quote</a>
                    <Link to="/services" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>All IT Services</Link>
                </div>
            </section>

            {/* Info cards */}
            <section style={{ background: 'hsla(var(--pc)/0.02)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                    {[
                        { label: 'IDEAL FOR', value: service.bestFor, color: 'var(--pc)' },
                        { label: 'WHAT YOU GET', value: service.outcome, color: 'var(--sc)' },
                        { label: 'INDUSTRIES WE SUPPORT', value: relevantIndustries.length ? relevantIndustries.map(i => i.name).join(', ') : 'Small businesses and online retailers of every kind', color: 'var(--pc)' }
                    ].map((item, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '0.7rem', color: `hsl(${item.color})`, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.label}</div>
                            <p style={{ opacity: 0.85, lineHeight: '1.6' }}>{item.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What's included */}
            <section>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>What's <span className="gradient-text">Included</span></h2>
                    <p style={{ opacity: 0.5, marginTop: '1rem' }}>Everything we cover under {service.title}</p>
                </div>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                    {service.subServices.map(item => (
                        <div key={item} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                            <CheckCircle2 size={20} color="hsl(var(--pc))" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.95rem', opacity: 0.85 }}>{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section style={{ background: 'hsla(var(--pc) / 0.02)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>How We <span className="gradient-text">Deliver</span></h2>
                    <p style={{ opacity: 0.5, marginTop: '1rem' }}>A clear, structured approach from first conversation to ongoing support</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                    {service.details.process.map((step, idx) => (
                        <div key={idx} className="reveal glass-card" style={{ padding: '3rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: '900', opacity: 0.1, marginBottom: '1rem', fontFamily: 'Outfit' }}>0{idx + 1}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ opacity: 0.6, lineHeight: '1.7' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>
                            Why Choose Us for <br /><span className="gradient-text">{service.navTitle}</span>
                        </h2>
                        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {service.details.benefits.map((benefit, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <CheckCircle2 color="hsl(var(--pc))" size={24} style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '1.05rem', opacity: 0.8 }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal glass-card" style={{ padding: '3rem' }}>
                        <div style={{ fontSize: '0.7rem', color: 'hsl(var(--sc))', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>OFTEN PAIRED WITH</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {related.map(rel => {
                                const RelIcon = rel.icon
                                return (
                                    <Link key={rel.id} to={`/services/${rel.id}`} className="dropdown-item" style={{ background: 'hsla(0,0%,100%,0.03)', marginBottom: 0 }}>
                                        <div style={{ color: rel.color, flexShrink: 0 }}><RelIcon size={20} /></div>
                                        <div className="dropdown-item-content" style={{ flex: 1 }}>
                                            <h5>{rel.title}</h5>
                                            <p>{rel.shortDesc}</p>
                                        </div>
                                        <ArrowRight size={16} style={{ opacity: 0.5, flexShrink: 0 }} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 5%' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Common <span className="gradient-text">Questions</span></h2>
                    <p style={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>What businesses usually ask us about {service.navTitle}</p>
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

            {/* Enquiry */}
            <section id="enquire" style={{ borderTop: '1px solid var(--border)', background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.05))' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem', alignItems: 'start' }}>
                    <div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 6vw, 3.25rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Let's Talk About <span className="gradient-text">{service.navTitle}</span>
                        </h2>
                        <p className="reveal" style={{ opacity: 0.6, lineHeight: '1.8' }}>
                            Tell us a little about your business and what you need. We'll come back with practical recommendations and a clear quote.
                        </p>
                    </div>
                    <div className="reveal glass-card" style={{ padding: '2.5rem' }}>
                        <ContactForm key={service.id} source={`${service.title} Page`} defaultService={service.title} submitLabel="Get My Free Quote" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServiceDetail
