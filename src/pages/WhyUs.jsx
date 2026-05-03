import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
    { title: '3-in-1 Expertise', desc: 'SEO + Content + Dev in one team. No handoff delays, no miscommunication between agencies.' },
    { title: 'Manual Audits, Not Just Tools', desc: 'We review your site with human eyes. Tools find what\'s measurable; we find what\'s actually wrong.' },
    { title: '80/20 Revenue-Driven SEO', desc: 'We focus 80% of effort on the 20% of keywords and pages that drive actual revenue.' },
    { title: 'Actionable KPI Focus', desc: 'We track rankings, leads, and revenue  not impressions and vanity traffic numbers.' },
    { title: 'Daily Tracking & Fast Turnaround', desc: 'We monitor rankings daily and move fast when opportunities or issues arise.' },
    { title: 'Niche SEO Specialists', desc: 'We assign specialists with experience in your industry, not generalists learning on your dime.' },
    { title: 'Developer Collaboration', desc: 'Our SEO recommendations actually get implemented  we work directly with dev teams.' },
    { title: 'Transparency First', desc: 'Full access to your data, clear reporting, and honest communication about what\'s working and what\'s not.' },
]

const comparisons = [
    { aspect: 'Focus', us: 'Leads, conversions, revenue', them: 'Traffic volume and rankings' },
    { aspect: 'Reporting', us: 'Revenue impact + ranking data', them: 'Keyword rankings only' },
    { aspect: 'Audits', us: 'Manual + tool-assisted', them: 'Tool-generated reports only' },
    { aspect: 'Strategy', us: 'Custom to your business goals', them: 'Template-based packages' },
    { aspect: 'Communication', us: 'Direct access to your SEO lead', them: 'Account manager relay' },
    { aspect: 'Link Building', us: 'Editorial outreach, no PBNs', them: 'Bulk link packages' },
    { aspect: 'Content', us: 'Intent-mapped, conversion-focused', them: 'Keyword-stuffed articles' },
]

const process = [
    { step: '01', title: 'Understand Your Products & Services', desc: 'We learn your business, your buyers, and what makes you different before touching a single keyword.' },
    { step: '02', title: 'Target Audience Analysis', desc: 'Map the search behavior of your ideal customers  what they search, when, and with what intent.' },
    { step: '03', title: 'Requirement Mapping', desc: 'Identify the gap between where you are and where you need to be in search.' },
    { step: '04', title: 'SEO Recommendations', desc: 'Deliver a prioritized action plan: technical fixes, content opportunities, and link targets.' },
    { step: '05', title: 'SEO Execution', desc: 'Implement on-page, off-page, and technical changes with full developer collaboration.' },
    { step: '06', title: 'Monthly Reporting', desc: 'Clear reports on rankings, traffic, leads, and next-month priorities  no fluff.' },
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
                    WHY HIRE OUR <br /><span className="gradient-text">SEO EXPERTS</span>
                </h1>
                <p className="reveal" style={{ maxWidth: '650px', opacity: 0.6, fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                    Most SEO agencies optimize for traffic. We optimize for revenue. Here's what makes the difference.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                    <Link to="/contact" className="btn btn-secondary">Hire SEO Experts</Link>
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
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 02 ] US VS. TYPICAL AGENCIES</h2>
                <div className="reveal" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', opacity: 0.5, fontSize: '0.75rem', letterSpacing: '0.08em' }}>ASPECT</th>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: 'hsl(var(--pc))', fontSize: '0.75rem', letterSpacing: '0.08em' }}>RADHE AI</th>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', opacity: 0.5, fontSize: '0.75rem', letterSpacing: '0.08em' }}>TYPICAL AGENCY</th>
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
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 03 ] OUR SEO PROCESS</h2>
                <p className="reveal" style={{ opacity: 0.5, marginBottom: '4rem', maxWidth: '500px' }}>A structured 6-step workflow that turns your SEO investment into measurable business results.</p>
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
                    Ready to Work With <br /><span className="gradient-text">SEO Experts Who Deliver?</span>
                </h2>
                <p className="reveal" style={{ opacity: 0.6, maxWidth: '500px', margin: '0 auto 3rem' }}>
                    No long-term lock-ins. No vanity metrics. Just a clear strategy and measurable results.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Start My SEO Strategy <ArrowRight size={16} /></Link>
                    <Link to="/results" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>See Our Results</Link>
                </div>
            </section>
        </main>
    )
}

export default WhyUs
