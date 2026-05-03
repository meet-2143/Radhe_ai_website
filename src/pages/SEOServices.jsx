import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, ArrowRight, Send, Loader2, CheckCircle } from 'lucide-react'
import { seoServices } from '../data/servicesData'

gsap.registerPlugin(ScrollTrigger)

const ContactForm = () => {
    const [status, setStatus] = useState('idle')
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('loading')
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: '7ca39139-e9f4-4f22-bc8e-3c051763c7fe',
                    from_name: 'SEO Services Page Inquiry',
                    ...form
                })
            })
            const result = await res.json()
            setStatus(result.success ? 'success' : 'error')
            if (result.success) setForm({ name: '', email: '', service: '', message: '' })
        } catch {
            setStatus('error')
        }
    }

    const inputStyle = {
        background: 'hsla(0,0%,100%,0.05)', border: '1px solid var(--glass-border)',
        padding: '0.9rem 1.1rem', borderRadius: '12px', color: 'white',
        outline: 'none', width: '100%', fontSize: '0.9rem', fontFamily: 'Inter'
    }

    if (status === 'success') return (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
            <CheckCircle size={52} color="hsl(var(--sc))" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Message Sent!</h3>
            <p style={{ opacity: 0.6, marginBottom: '2rem' }}>We'll get back to you within 24 hours.</p>
            <button onClick={() => setStatus('idle')} className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>Send Another</button>
        </div>
    )

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.72rem', opacity: 0.5, letterSpacing: '0.08em' }}>YOUR NAME</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.72rem', opacity: 0.5, letterSpacing: '0.08em' }}>EMAIL ADDRESS</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" style={inputStyle} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.72rem', opacity: 0.5, letterSpacing: '0.08em' }}>SEO SERVICE NEEDED</label>
                <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="" style={{ background: '#0a0a0f' }}>Select a service...</option>
                    {seoServices.map(s => <option key={s.id} value={s.title} style={{ background: '#0a0a0f' }}>{s.title}</option>)}
                    <option value="Not sure  need a recommendation" style={{ background: '#0a0a0f' }}>Not sure  need a recommendation</option>
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.72rem', opacity: 0.5, letterSpacing: '0.08em' }}>TELL US YOUR GOAL</label>
                <textarea name="message" rows={4} required value={form.message} onChange={handleChange}
                    placeholder="e.g. We want to rank for 'SEO agency London' and generate 20+ leads/month from organic search..."
                    style={{ ...inputStyle, resize: 'none' }} />
            </div>
            <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ padding: '1rem', marginTop: '0.5rem' }}>
                {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={16} /> Get My Free SEO Audit</>}
            </button>
            {status === 'error' && <p style={{ color: '#ff4444', fontSize: '0.8rem', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
        </form>
    )
}

const SEOServices = () => {
    const containerRef = useRef(null)
    const [expanded, setExpanded] = useState(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out' })
            gsap.utils.toArray('.service-block').forEach((el, i) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 85%' },
                    y: 40, opacity: 0, duration: 0.8, delay: i * 0.05, ease: 'power3.out'
                })
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '70vh' }}>
                <p className="reveal" style={{ fontSize: '0.85rem', color: 'hsl(var(--pc))', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                    SEARCH ENGINE OPTIMIZATION
                </p>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>
                    SEO SERVICES THAT <br /><span className="gradient-text">GENERATE LEADS</span>
                </h1>
                <p className="reveal" style={{ maxWidth: '700px', opacity: 0.6, fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                    We don't chase traffic vanity metrics. Every SEO strategy we build is designed to bring in qualified buyers, increase conversions, and grow your revenue from organic search.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                    <Link to="/contact" className="btn btn-secondary">Hire SEO Experts</Link>
                </div>
            </section>

            {/* Trust bar */}
            <div style={{ background: 'hsla(var(--pc)/0.06)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.5rem 5%' }}>
                <div style={{ display: 'flex', gap: '0', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                    {['50+ Clients Served', '12 Industries', '3x Avg. Traffic Growth', '35+ Top-5 Keywords', 'White-Hat Only'].map((t, i, arr) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: '600', opacity: 0.7, letterSpacing: '0.05em', padding: '0 2rem' }}>{t}</span>
                            {i < arr.length - 1 && <span style={{ width: '1px', height: '1.2rem', background: 'hsla(0,0%,100%,0.2)', flexShrink: 0 }} />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Services accordion */}
            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 01 ] ALL SEO SERVICES</h2>
                <p className="reveal" style={{ opacity: 0.5, marginBottom: '4rem', maxWidth: '600px' }}>
                    Click any service to see what we optimize, the best use case, and the business outcome you can expect.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {seoServices.map((svc, idx) => {
                        const Icon = svc.icon
                        const isOpen = expanded === idx
                        return (
                            <div key={svc.id} className="service-block" style={{
                                background: isOpen ? 'hsla(var(--pc)/0.06)' : 'var(--glass)',
                                border: `1px solid ${isOpen ? 'hsla(var(--pc)/0.3)' : 'var(--glass-border)'}`,
                                borderRadius: '20px', overflow: 'hidden',
                                transition: 'all 0.3s ease', cursor: 'pointer'
                            }} onClick={() => setExpanded(isOpen ? null : idx)}>
                                <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ background: 'hsla(var(--pc)/0.1)', padding: '0.75rem', borderRadius: '12px', flexShrink: 0 }}>
                                            <Icon size={22} color={svc.color} />
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '0.25rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700' }}>{svc.title}</h3>
                                            <p style={{ opacity: 0.5, fontSize: '0.85rem', margin: 0 }}>{svc.shortDesc}</p>
                                        </div>
                                    </div>
                                    <ChevronDown size={20} style={{ opacity: 0.5, flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                                </div>
                                {isOpen && (
                                    <div style={{ padding: '0 2rem 2rem', borderTop: '1px solid var(--glass-border)' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
                                            <div style={{ background: 'hsla(var(--pc)/0.05)', padding: '1.25rem', borderRadius: '12px' }}>
                                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>BEST WHEN YOU WANT TO</div>
                                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{svc.bestFor}</p>
                                            </div>
                                            <div style={{ background: 'hsla(var(--sc)/0.05)', padding: '1.25rem', borderRadius: '12px' }}>
                                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--sc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>WHAT WE OPTIMIZE</div>
                                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{svc.optimizes}</p>
                                            </div>
                                            <div style={{ background: 'hsla(0,0%,100%,0.03)', padding: '1.25rem', borderRadius: '12px' }}>
                                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>BUSINESS OUTCOME</div>
                                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{svc.outcome}</p>
                                            </div>
                                        </div>
                                        <Link to={`/seo/${svc.id}`} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.75rem 1.75rem' }}
                                            onClick={e => e.stopPropagation()}>
                                            Hire {svc.title} Expert <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Contact Us inline */}
            <section style={{ background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.05))' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45%, 480px), 1fr))', gap: '4rem', alignItems: 'start' }}>
                    {/* Left  copy */}
                    <div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Not Sure Which SEO Service <span className="gradient-text">You Need?</span>
                        </h2>
                        <p className="reveal" style={{ opacity: 0.6, lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Tell us your goal and we'll recommend the right mix of services to get you there. Free audit included  no commitment required.
                        </p>
                        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                'Free SEO audit with every inquiry',
                                'Response within 24 hours',
                                'No lock-in contracts',
                                'White-hat strategies only'
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', opacity: 0.8 }}>
                                    <span style={{ color: 'hsl(var(--pc))', fontSize: '1rem' }}>✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right  form */}
                    <div className="reveal glass-card" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700' }}>Get a Free SEO Audit</h3>
                        <p style={{ opacity: 0.5, fontSize: '0.85rem', marginBottom: '2rem' }}>Fill in your details and we'll get back to you within 24 hours.</p>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SEOServices
