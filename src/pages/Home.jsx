import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2, Users, ShoppingCart, Globe, Briefcase } from 'lucide-react'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    { name: 'Sheryl Erixson', role: 'Founder @ ProcessRun', industry: 'SaaS', text: 'Radhe AI played a pivotal role in developing our core infrastructure. They delivered exactly on time and provided incredible clarity for our daily operations, allowing us to scale without technical friction.', rating: 5 },
    { name: 'Elvia', role: 'Chief Marketing Officer', industry: 'eCommerce', text: 'Their support in streamlining our business logic was exceptional. The team ensured every delivery milestone was met, giving us the operational confidence we needed to expand our market reach.', rating: 5 },
    { name: 'Sanat Koshiya', role: 'Founder @ Apna Indian Bazaar', industry: 'Retail', text: 'Working with Radhe AI brought much-needed structure to our projects. Their ability to deliver complex features on time while maintaining transparent communication is what sets them apart.', rating: 5 },
    { name: 'Mat Calica', role: 'Manager @ Alliance Virtual Offices', industry: 'B2B', text: 'Radhe AI didn\'t just build software; they contributed to our business growth. Their technical support and strategic operational clarity helped us optimize our SEO workflows significantly.', rating: 5 },
    { name: 'Anita Desai', role: 'Head of AI', industry: 'Healthcare', text: 'Security and privacy were our top concerns. Radhe AI exceeded all healthcare compliance standards with zero delays in implementation.', rating: 5 },
    { name: 'Michael Chen', role: 'VP Engineering', industry: 'FinTech', text: 'Professional, innovative, and incredibly fast. The predictive models they built saved us millions through operational optimization.', rating: 5 },
]

const funnelStages = [
    {
        stage: 'BoFU', label: 'Bottom of Funnel', color: 'var(--pc)',
        intent: 'Ready to buy  comparing options',
        content: 'Service pages, product pages, comparison pages, pricing pages, "hire" pages',
        outcome: 'Direct leads, demo requests, purchases, quote submissions'
    },
    {
        stage: 'MoFU', label: 'Middle of Funnel', color: 'var(--sc)',
        intent: 'Evaluating solutions  building trust',
        content: 'Case studies, webinars, whitepapers, ROI calculators, expert guides',
        outcome: 'Email signups, MQL nurture, retargeting audiences'
    },
    {
        stage: 'ToFU', label: 'Top of Funnel', color: 'var(--pc)',
        intent: 'Discovering the problem  seeking information',
        content: 'Blog posts, how-to guides, informational content, industry reports',
        outcome: 'Brand awareness, organic traffic, audience building'
    },
]

const audiences = [
    {
        icon: <Briefcase size={28} color="hsl(var(--pc))" />,
        segment: 'Marketing Agencies',
        tag: 'White-Label SEO',
        problem: 'Your clients need SEO but you don\'t have the in-house capacity to deliver it.',
        solution: 'We act as your silent SEO team  delivering under your brand with full white-label reporting.',
        outcome: 'Expand your service offering, retain more clients, and grow revenue without hiring.',
        cta: 'Explore White-Label SEO'
    },
    {
        icon: <Globe size={28} color="hsl(var(--sc))" />,
        segment: 'Online Businesses',
        tag: 'Organic Growth',
        problem: 'You\'re spending too much on paid ads and need a sustainable, lower-cost traffic channel.',
        solution: 'We build an organic search engine that generates qualified traffic 24/7 without ad spend.',
        outcome: 'Reduce CAC, build long-term brand equity, and generate leads while you sleep.',
        cta: 'Grow My Organic Traffic'
    },
    {
        icon: <ShoppingCart size={28} color="hsl(var(--pc))" />,
        segment: 'eCommerce Businesses',
        tag: 'Revenue SEO',
        problem: 'Your store is invisible in organic search and you\'re 100% dependent on paid ads for revenue.',
        solution: 'We optimize product and category pages to rank for high-intent buyer keywords.',
        outcome: 'Organic revenue that grows month over month without increasing ad spend.',
        cta: 'Grow My Store Organically'
    },
    {
        icon: <Users size={28} color="hsl(var(--sc))" />,
        segment: 'Freelancers',
        tag: 'Personal Brand SEO',
        problem: 'You rely on referrals and platforms like Upwork  you have no inbound lead channel.',
        solution: 'We build your personal brand\'s search presence so clients find you directly.',
        outcome: 'Inbound client inquiries, higher rates, and independence from third-party platforms.',
        cta: 'Build My SEO Presence'
    },
]

const siteTypes = [
    { type: 'Affiliate Websites', challenge: 'Thin content, Google HCU penalties, and commission page over-optimization', approach: 'Content depth strategy, topical authority clusters, and natural link profile building', result: 'Stable rankings through algorithm updates and sustainable affiliate revenue' },
    { type: 'Business Websites', challenge: 'Low domain authority, generic service pages, and no local visibility', approach: 'Service page optimization, local SEO, and authority link building', result: 'More inbound inquiries and quote requests from organic search' },
    { type: 'eCommerce Websites', challenge: 'Duplicate content, thin product pages, and crawl budget waste', approach: 'Category page SEO, product schema, and faceted navigation management', result: 'Organic revenue growth and reduced dependence on paid ads' },
    { type: 'Blog Websites', challenge: 'Traffic without conversions, keyword cannibalization, and content decay', approach: 'Content pruning, internal linking strategy, and monetization-focused keyword targeting', result: 'Higher RPM, better affiliate conversions, and growing organic traffic' },
    { type: 'Portfolio Websites', challenge: 'No search visibility, generic "web designer" keywords, and no lead generation', approach: 'Niche keyword targeting, case study SEO, and local optimization', result: 'Inbound client inquiries from search without relying on social media' },
]

const AudienceCard = ({ a }) => (
    <div className="reveal-on-scroll glass-card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ background: 'hsla(var(--pc)/0.1)', padding: '0.6rem', borderRadius: '10px', flexShrink: 0 }}>{a.icon}</div>
                <h3 style={{ fontSize: '1.1rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700', margin: 0 }}>{a.segment}</h3>
            </div>
            <span style={{ fontSize: '0.65rem', background: 'hsla(var(--sc)/0.1)', color: 'hsl(var(--sc))', padding: '0.3rem 0.75rem', borderRadius: '100px', border: '1px solid hsla(var(--sc)/0.2)', fontWeight: '600', whiteSpace: 'nowrap', flexShrink: 0 }}>{a.tag}</span>
        </div>

        {/* Problem */}
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', opacity: 0.4, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>THE PROBLEM</div>
            <p style={{ fontSize: '0.875rem', opacity: 0.7, lineHeight: '1.6', margin: 0 }}>{a.problem}</p>
        </div>

        {/* Solution */}
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>OUR SOLUTION</div>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, lineHeight: '1.6', margin: 0 }}>{a.solution}</p>
        </div>

        {/* Outcome */}
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', background: 'hsla(var(--sc)/0.04)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--sc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>OUTCOME</div>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, lineHeight: '1.6', margin: 0 }}>{a.outcome}</p>
        </div>

        {/* CTA */}
        <div style={{ padding: '1.25rem 1.75rem' }}>
            <Link to="/contact" className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.7rem 1.4rem', width: '100%', justifyContent: 'center' }}>
                {a.cta} <ArrowRight size={14} />
            </Link>
        </div>
    </div>
)

const SiteTypeCard = ({ s }) => (
    <div className="reveal-on-scroll glass-card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Card header */}
        <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.05rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter', fontWeight: '700', color: 'hsl(var(--pc))', margin: 0 }}>{s.type}</h3>
        </div>

        {/* Challenge */}
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', opacity: 0.4, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>SEO CHALLENGE</div>
            <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: '1.6', margin: 0 }}>{s.challenge}</p>
        </div>

        {/* Approach */}
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--sc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>OUR APPROACH</div>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.6', margin: 0 }}>{s.approach}</p>
        </div>

        {/* Result */}
        <div style={{ padding: '1.25rem 1.75rem', background: 'hsla(var(--pc)/0.06)', flex: 1 }}>
            <div style={{ fontSize: '0.6rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>EXPECTED RESULT</div>
            <p style={{ fontSize: '0.85rem', opacity: 0.85, lineHeight: '1.6', margin: 0 }}>{s.result}</p>
        </div>
    </div>
)

const Home = () => {
    const mainRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-reveal', {
                y: 80, opacity: 0, duration: 1.2, stagger: 0.18,
                ease: 'power4.out', clearProps: 'all'
            })
            gsap.utils.toArray('.reveal-on-scroll').forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                    y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
                    clearProps: 'all'
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
                    STOP CHASING <br />
                    <span className="gradient-text">TRAFFIC.</span> <br />
                    START GETTING <br />
                    LEADS.
                </h1>
                <p className="hero-reveal" style={{ maxWidth: '620px', fontSize: 'clamp(1rem, 3vw, 1.25rem)', opacity: 0.6, marginBottom: '3rem' }}>
                    We build SEO strategies that bring in qualified buyers  not just clicks. More organic conversions, more calls, more revenue.
                </p>
                <div className="hero-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.9rem' }}>Contact Us</Link>
                    <Link to="/contact" className="btn btn-secondary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.9rem' }}>Hire SEO Experts</Link>
                </div>
                {/* Trust bar */}
                <div className="hero-reveal" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.5, fontSize: '0.8rem', letterSpacing: '0.08em' }}>
                    {['50+ Clients', '12 Industries', '3x Avg. Traffic Growth', '35+ Top-5 Keywords', 'White-Hat Only'].map((t, i) => (
                        <span key={i}>{t}</span>
                    ))}
                </div>
            </section>

            {/* ── WHY LEADS NOT TRAFFIC ── */}
            <section style={{ background: 'hsla(0,0%,100%,0.02)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45%, 500px), 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1.5rem' }}>[ 01 ] THE PROBLEM WITH MOST SEO</h2>
                        <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '2rem', lineHeight: '1.1' }}>
                            Traffic Without <span className="gradient-text">Conversions</span> Is Just a Vanity Metric
                        </h3>
                        <p className="reveal-on-scroll" style={{ opacity: 0.6, lineHeight: '1.8', marginBottom: '2rem' }}>
                            Most SEO agencies celebrate page views. We celebrate phone calls, form fills, and sales. Every strategy we build starts with one question: what does a qualified lead look like for your business?
                        </p>
                        <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Keyword groups ranked by revenue potential, not just volume', 'BoFU-first strategy  target buyers before browsers', 'Lead quality tracked alongside rankings and traffic'].map((p, i) => (
                                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    <CheckCircle2 size={18} color="hsl(var(--pc))" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ opacity: 0.8, fontSize: '0.95rem' }}>{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            { value: '3x', label: 'Avg. Traffic Growth', color: 'var(--pc)' },
                            { value: '+68%', label: 'Avg. Revenue Lift', color: 'var(--sc)' },
                            { value: '35+', label: 'Top-5 Keywords', color: 'var(--pc)' },
                            { value: '-50%', label: 'Paid Ad Spend Cut', color: 'var(--sc)' },
                        ].map((s, i) => (
                            <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', color: `hsl(${s.color})` }}>{s.value}</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.4rem', letterSpacing: '0.05em' }}>{s.label.toUpperCase()}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ORGANIC SEARCH FUNNEL ── */}
            <section>
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '2rem' }}>[ 02 ] ORGANIC SEARCH FUNNEL STRATEGY</h2>
                <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '2rem', lineHeight: '1.1' }}>
                    We Target Every Stage of <span className="gradient-text">Your Buyer's Journey</span>
                </h3>
                <p className="reveal-on-scroll" style={{ opacity: 0.5, maxWidth: '600px', marginBottom: '0' }}>
                    Most SEO only targets the top of the funnel. We build content for all three stages  so you capture buyers at every point of their decision.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
                    {funnelStages.map((f, i) => (
                        <div key={i} className="reveal-on-scroll glass-card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                            {/* Stage badge + label */}
                            <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ background: `hsla(${f.color}/0.15)`, border: `1px solid hsla(${f.color}/0.3)`, color: `hsl(${f.color})`, fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.12em', padding: '0.35rem 0.9rem', borderRadius: '100px' }}>{f.stage}</span>
                                <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{f.label}</span>
                            </div>

                            {/* User intent */}
                            <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', flex: 1 }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>USER INTENT</div>
                                <p style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.85, lineHeight: '1.5', margin: 0 }}>{f.intent}</p>
                            </div>

                            {/* Content type */}
                            <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--glass-border)', flex: 1 }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.4, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>CONTENT TYPE</div>
                                <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: '1.6', margin: 0 }}>{f.content}</p>
                            </div>

                            {/* Business outcome */}
                            <div style={{ padding: '1.25rem 1.75rem', background: `hsla(${f.color}/0.05)`, flex: 1 }}>
                                <div style={{ fontSize: '0.6rem', color: `hsl(${f.color})`, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>BUSINESS OUTCOME</div>
                                <p style={{ fontSize: '0.85rem', opacity: 0.85, lineHeight: '1.6', margin: 0 }}>{f.outcome}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* ── WHO WE SERVE ── */}
            <section style={{ background: 'hsla(0,0%,100%,0.02)' }}>
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 03 ] WHO WE SERVE</h2>
                <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '4rem', lineHeight: '1.1' }}>
                    Built for Businesses That <span className="gradient-text">Need Results</span>
                </h3>

                {/* Top row  3 cards */}
                <div className="audience-top" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    {audiences.slice(0, 3).map((a, i) => <AudienceCard key={i} a={a} />)}
                </div>

                {/* Bottom row  1 card, left-aligned at 1/3 width */}
                <div className="audience-bottom" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    <AudienceCard a={audiences[3]} />
                </div>
            </section>

            {/* ── SITE TYPES ── */}
            <section>
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 04 ] SITE TYPE EXPERTISE</h2>
                <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '4rem', lineHeight: '1.1' }}>
                    We Know Your Site Type <span className="gradient-text">Inside Out</span>
                </h3>

                {/* Top row  3 cards */}
                <div className="site-type-top" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    {siteTypes.slice(0, 3).map((s, i) => (
                        <SiteTypeCard key={i} s={s} />
                    ))}
                </div>

                {/* Bottom row  2 cards centered */}
                <div className="site-type-bottom" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: 'calc(66.66% + 0.5rem)' }}>
                    {siteTypes.slice(3).map((s, i) => (
                        <SiteTypeCard key={i + 3} s={s} />
                    ))}
                </div>
            </section>

            {/* ── FEATURED WORK ── */}
            <section style={{ background: 'hsla(0,0%,100%,0.02)' }}>
                <p style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem', fontFamily: 'Outfit', fontWeight: '800', letterSpacing: '-0.02em' }}>[ 05 ] FEATURED WORK</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                    {projects.slice(0, 2).map((project, idx) => (
                        <Link
                            key={idx}
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
                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--sc))', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>{project.industry.toUpperCase()}</div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'white', lineHeight: '1.2', fontFamily: 'Outfit', fontWeight: '800', letterSpacing: '-0.02em' }}>{project.title.toUpperCase()}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: '1.65' }}>{project.shortDesc}</p>
                                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                                    {project.caseStudy.metrics.map((m, mi) => (
                                        <div key={mi} style={{ background: 'hsla(var(--pc)/0.1)', border: '1px solid hsla(var(--pc)/0.25)', padding: '0.6rem 1rem', borderRadius: '10px' }}>
                                            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'hsl(var(--pc))' }}>{m.value}</div>
                                            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.15rem' }}>{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '0.82rem', color: 'white', letterSpacing: '0.06em', marginTop: 'auto' }}>
                                    VIEW CASE STUDY <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Centered CTA  not using .btn class to avoid global width:100% override */}
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
                        VIEW ALL CASE STUDIES
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
                    Ready to Turn Search <br />Into <span className="gradient-text">Revenue?</span>
                </h2>
                <p className="reveal-on-scroll" style={{ opacity: 0.6, maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                    Book a free SEO audit. We'll show you exactly where your organic growth is being left on the table.
                </p>
                <div className="reveal-on-scroll" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Get My Free Audit</Link>
                    <Link to="/why-us" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>Why Hire Us</Link>
                </div>
            </section>

        </main>
    )
}

export default Home
