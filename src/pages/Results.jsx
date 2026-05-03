import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const keywordData = [
    { keyword: 'SEO services for SaaS', position: 2, volume: '1,900', kd: 'Medium', change: '+14' },
    { keyword: 'hire SEO experts', position: 3, volume: '2,400', kd: 'Medium', change: '+9' },
    { keyword: 'ecommerce SEO agency', position: 4, volume: '3,600', kd: 'High', change: '+22' },
    { keyword: 'local SEO for plumbers', position: 1, volume: '880', kd: 'Low', change: '+31' },
    { keyword: 'technical SEO audit service', position: 3, volume: '1,300', kd: 'Medium', change: '+18' },
    { keyword: 'Shopify SEO optimization', position: 5, volume: '2,900', kd: 'High', change: '+11' },
    { keyword: 'WordPress SEO consultant', position: 2, volume: '1,600', kd: 'Medium', change: '+7' },
    { keyword: 'link building service', position: 4, volume: '4,400', kd: 'High', change: '+16' },
]

const caseStudies = [
    {
        client: 'SaaS Brand',
        industry: 'Software',
        before: { traffic: '4,200/mo', leads: '12/mo', rank: 'Page 3–5' },
        after: { traffic: '14,800/mo', leads: '67/mo', rank: 'Page 1 (35 keywords)' },
        duration: '6 months',
        highlight: '3x organic traffic, -50% ad spend'
    },
    {
        client: 'eCommerce Store',
        industry: 'Retail',
        before: { traffic: '8,100/mo', leads: '', rank: 'Page 2–4' },
        after: { traffic: '22,400/mo', leads: '+68% organic revenue', rank: 'Page 1 (120+ keywords)' },
        duration: '9 months',
        highlight: '+68% organic revenue, 1,200+ pages optimized'
    },
    {
        client: 'Legal Platform',
        industry: 'Legal Tech',
        before: { traffic: '40K impressions/mo', leads: 'Low', rank: 'Minimal page 1' },
        after: { traffic: '1.2M impressions/mo', leads: '180 page-1 articles', rank: 'Dominant in niche' },
        duration: '12 months',
        highlight: '30x impression growth, 960 articles delivered'
    }
]

const Results = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out' })
            gsap.utils.toArray('.result-row').forEach((el, i) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 90%' },
                    x: -30, opacity: 0, duration: 0.6, delay: i * 0.05, ease: 'power3.out'
                })
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '70vh' }}>
                <p className="reveal" style={{ fontSize: '0.85rem', color: 'hsl(var(--pc))', letterSpacing: '0.15em', marginBottom: '1rem' }}>PROOF OF PERFORMANCE</p>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>
                    REAL RESULTS, <br /><span className="gradient-text">REAL CLIENTS</span>
                </h1>
                <p className="reveal" style={{ maxWidth: '650px', opacity: 0.6, fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                    Rankings, traffic, and leads  not vanity metrics. Here's what our SEO work actually delivers.
                </p>
            </section>

            {/* Keyword ranking table */}
            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 01 ] KEYWORD RANKINGS</h2>
                <div className="reveal" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                {['Keyword', 'Position', 'Monthly Volume', 'Difficulty', 'Position Change'].map(h => (
                                    <th key={h} style={{ padding: '1rem 1.5rem', textAlign: 'left', opacity: 0.5, fontSize: '0.75rem', letterSpacing: '0.08em', fontWeight: '600', whiteSpace: 'nowrap' }}>{h.toUpperCase()}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {keywordData.map((row, i) => (
                                <tr key={i} className="result-row" style={{ borderBottom: '1px solid hsla(255,255%,100%,0.04)', transition: 'background 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'hsla(var(--pc)/0.04)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: '500' }}>{row.keyword}</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <span style={{ background: row.position <= 3 ? 'hsla(var(--pc)/0.15)' : 'var(--glass)', color: row.position <= 3 ? 'hsl(var(--pc))' : 'white', padding: '0.3rem 0.75rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700' }}>
                                            #{row.position}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', opacity: 0.7 }}>{row.volume}</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <span style={{ opacity: 0.6, fontSize: '0.8rem' }}>{row.kd}</span>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <span style={{ color: 'hsl(var(--sc))', fontWeight: '700', fontSize: '0.85rem' }}>↑ {row.change} positions</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Case study snapshots */}
            <section style={{ background: 'hsla(0,0%,100%,0.01)' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 02 ] CASE STUDY SNAPSHOTS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 400px), 1fr))', gap: '2rem' }}>
                    {caseStudies.map((cs, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '2.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{cs.industry.toUpperCase()}</div>
                                    <h3 style={{ fontSize: '1.4rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700' }}>{cs.client}</h3>
                                </div>
                                <span style={{ fontSize: '0.75rem', opacity: 0.5, background: 'var(--glass)', padding: '0.4rem 0.8rem', borderRadius: '100px', border: '1px solid var(--glass-border)', whiteSpace: 'nowrap' }}>{cs.duration}</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ background: 'hsla(0,0%,100%,0.03)', padding: '1rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '0.65rem', opacity: 0.4, marginBottom: '0.5rem', letterSpacing: '0.08em' }}>BEFORE</div>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>{cs.before.traffic}</div>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>{cs.before.rank}</div>
                                </div>
                                <div style={{ background: 'hsla(var(--pc)/0.08)', padding: '1rem', borderRadius: '12px', border: '1px solid hsla(var(--pc)/0.15)' }}>
                                    <div style={{ fontSize: '0.65rem', color: 'hsl(var(--pc))', marginBottom: '0.5rem', letterSpacing: '0.08em' }}>AFTER</div>
                                    <div style={{ fontSize: '0.85rem' }}>{cs.after.traffic}</div>
                                    <div style={{ fontSize: '0.85rem' }}>{cs.after.rank}</div>
                                </div>
                            </div>
                            <div style={{ background: 'hsla(var(--sc)/0.08)', border: '1px solid hsla(var(--sc)/0.2)', padding: '1rem', borderRadius: '12px' }}>
                                <TrendingUp size={16} color="hsl(var(--sc))" style={{ marginBottom: '0.4rem' }} />
                                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'hsl(var(--sc))' }}>{cs.highlight}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Growth metrics */}
            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 03 ] AGGREGATE RESULTS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                    {[
                        { value: '3x', label: 'Avg. Organic Traffic Growth', color: 'var(--pc)' },
                        { value: '+68%', label: 'Avg. Organic Revenue Lift', color: 'var(--sc)' },
                        { value: '35+', label: 'Top-5 Keywords Per Client', color: 'var(--pc)' },
                        { value: '-50%', label: 'Avg. Paid Ad Spend Reduction', color: 'var(--sc)' },
                        { value: '180', label: 'Page-1 Articles Delivered', color: 'var(--pc)' },
                        { value: '12x', label: 'Best ROAS Achieved', color: 'var(--sc)' },
                    ].map((s, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '2.5rem 1.5rem' }}>
                            <div style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '900', color: `hsl(${s.color})` }}>{s.value}</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.5rem', letterSpacing: '0.05em' }}>{s.label.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ textAlign: 'center', background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.05))' }}>
                <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', marginBottom: '1.5rem' }}>
                    You Could Be <span className="gradient-text">One Of Them</span>
                </h2>
                <p className="reveal" style={{ opacity: 0.6, maxWidth: '500px', margin: '0 auto 3rem' }}>
                    Book a free SEO audit and we'll show you exactly where your organic growth is being left on the table.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Get My Free Audit <ArrowRight size={16} /></Link>
                    <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>View Full Case Studies</Link>
                </div>
            </section>
        </main>
    )
}

export default Results
