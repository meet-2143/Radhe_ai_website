import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
    { title: 'One Partner for Everything', desc: 'IT support, websites, eCommerce, cloud, security, POS, and automation from one team. No finger-pointing between providers.' },
    { title: 'Remote & On-site Support', desc: 'Most issues are fixed remotely in minutes. When hands are needed on equipment, we come to you.' },
    { title: 'Built for Small Business', desc: 'Our services are designed for small businesses and online retailers, not scaled-down enterprise contracts.' },
    { title: 'Predictable Monthly Pricing', desc: 'Monthly IT support packages and fixed-price project quotes, so you know what technology will cost before you commit.' },
    { title: 'Plain-English Advice', desc: 'We explain options clearly, recommend only what you need, and never hide behind jargon.' },
    { title: 'Proactive, Not Reactive', desc: 'Updates, monitoring, backups, and security are handled routinely, so problems are prevented rather than just fixed.' },
    { title: 'Security Built In', desc: 'MFA, endpoint protection, email security, and backups are part of how we set things up, not an expensive add-on.' },
    { title: 'Retail & eCommerce Know-how', desc: 'We understand POS, EFTPOS, inventory, Shopify, WooCommerce, and marketplaces, as well as the office IT behind them.' },
]

const comparisons = [
    { aspect: 'Coverage', us: 'Every area of business IT', them: 'One specialty, refer you elsewhere' },
    { aspect: 'Approach', us: 'Proactive maintenance and monitoring', them: 'Break-fix: call when it is broken' },
    { aspect: 'Pricing', us: 'Monthly packages and fixed quotes', them: 'Open-ended hourly billing' },
    { aspect: 'Support', us: 'Remote and on-site', them: 'One or the other' },
    { aspect: 'Security', us: 'Included as standard', them: 'Only after an incident' },
    { aspect: 'Communication', us: 'Plain English, direct access', them: 'Technical jargon and tickets' },
    { aspect: 'Documentation', us: 'Your setup documented and handed over', them: "Knowledge stays in one person's head" },
]

const process = [
    { step: '01', title: 'Free Consultation', desc: 'We talk through your business, your current technology, and what is getting in the way.' },
    { step: '02', title: 'IT Assessment', desc: 'We review devices, network, accounts, security, website, and systems to see exactly where you stand.' },
    { step: '03', title: 'Recommendations & Quote', desc: 'You get a prioritised plan with clear, fixed pricing. No surprises and no obligation.' },
    { step: '04', title: 'Implementation', desc: 'We carry out the work, scheduled around your trading hours to keep disruption to a minimum.' },
    { step: '05', title: 'Handover & Training', desc: 'We document your setup and show your team how to get the most from the new systems.' },
    { step: '06', title: 'Ongoing Support', desc: 'We stay on as your IT partner with helpdesk support, maintenance, and regular reviews.' },
]

const WhyUs = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out' })
            gsap.utils.toArray('.process-card').forEach((el, i) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 88%' },
                    y: 30, opacity: 0, duration: 0.7, delay: i * 0.1, ease: 'power3.out'
                })
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '70vh' }}>
                <p className="reveal" style={{ fontSize: '0.85rem', color: 'hsl(var(--pc))', letterSpacing: '0.15em', marginBottom: '1rem' }}>WHY RADHE AI</p>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>
                    WHY BUSINESSES <br /><span className="gradient-text">CHOOSE US</span>
                </h1>
                <p className="reveal" style={{ maxWidth: '650px', opacity: 0.6, fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                    Technology should help your business run, not slow it down. Here's what makes working with us different.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                    <Link to="/services" className="btn btn-secondary">Our Services</Link>
                </div>
            </section>

            {/* Benefits grid */}
            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 01 ] WHAT YOU GET</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 45%, 350px), 1fr))', gap: '1.5rem' }}>
                    {benefits.map((b, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                            <CheckCircle2 size={22} color="hsl(var(--pc))" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700' }}>{b.title}</h3>
                                <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: '1.6' }}>{b.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison table */}
            <section style={{ background: 'hsla(0,0%,100%,0.01)' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 02 ] US VS. TYPICAL IT PROVIDERS</h2>
                <div className="reveal" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', opacity: 0.5, fontSize: '0.75rem', letterSpacing: '0.08em' }}>ASPECT</th>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: 'hsl(var(--pc))', fontSize: '0.75rem', letterSpacing: '0.08em' }}>RADHE AI</th>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', opacity: 0.5, fontSize: '0.75rem', letterSpacing: '0.08em' }}>TYPICAL IT PROVIDER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid hsla(255,255%,100%,0.04)' }}>
                                    <td style={{ padding: '1.25rem 1.5rem', opacity: 0.6, fontSize: '0.9rem', fontWeight: '600' }}>{row.aspect}</td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <CheckCircle2 size={16} color="hsl(var(--pc))" /> {row.us}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', opacity: 0.5 }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <XCircle size={16} color="#666" /> {row.them}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 6-step process */}
            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 03 ] HOW WE WORK</h2>
                <p className="reveal" style={{ opacity: 0.5, marginBottom: '4rem', maxWidth: '500px' }}>A simple six-step process from first conversation to ongoing support.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 45%, 320px), 1fr))', gap: '1.5rem' }}>
                    {process.map((p, i) => (
                        <div key={i} className="process-card glass-card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ fontSize: '4rem', fontWeight: '900', opacity: 0.06, position: 'absolute', top: '1rem', right: '1.5rem', fontFamily: 'Outfit', lineHeight: 1 }}>{p.step}</div>
                            <div style={{ fontSize: '0.75rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '1rem' }}>STEP {p.step}</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700' }}>{p.title}</h3>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: '1.6' }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ textAlign: 'center', background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.05))' }}>
                <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', marginBottom: '1.5rem' }}>
                    Ready for an IT Partner <br /><span className="gradient-text">You Can Rely On?</span>
                </h2>
                <p className="reveal" style={{ opacity: 0.6, maxWidth: '500px', margin: '0 auto 3rem' }}>
                    Start with a free consultation. We'll review your setup and give you honest, practical recommendations.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Book a Free Consultation <ArrowRight size={16} /></Link>
                    <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>See Our Work</Link>
                </div>
            </section>
        </main>
    )
}

export default WhyUs
