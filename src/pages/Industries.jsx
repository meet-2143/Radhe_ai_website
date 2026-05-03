import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const industries = [
    {
        name: 'SaaS & IT',
        emoji: '💻',
        pain: 'High competition for generic software keywords, long sales cycles, and difficulty ranking against established players.',
        strategy: 'Bottom-of-funnel keyword targeting (comparison, alternative, pricing pages), technical SEO for app-heavy sites, and thought leadership content for MoFU nurture.',
        leads: 'Free trial signups, demo requests, and MQL form fills from organic search.'
    },
    {
        name: 'eCommerce & Retail',
        emoji: '🛒',
        pain: 'Competing with Amazon and large retailers, thin product descriptions, and duplicate content across thousands of SKUs.',
        strategy: 'Category page optimization, product schema for rich results, long-tail product keyword targeting, and faceted navigation management.',
        leads: 'Direct product purchases and add-to-cart events from organic product and category page traffic.'
    },
    {
        name: 'Digital Marketing Agencies',
        emoji: '📈',
        pain: 'Competing in a saturated market, proving ROI to clients, and ranking for high-intent "agency" keywords.',
        strategy: 'White-label SEO delivery, case study content for authority building, and local + national keyword targeting for agency discovery.',
        leads: 'Inbound client inquiries, white-label partnership requests, and consultation bookings.'
    },
    {
        name: 'Legal Services',
        emoji: '⚖️',
        pain: 'YMYL content standards, high keyword difficulty, and the need for E-E-A-T signals in a trust-sensitive niche.',
        strategy: 'E-E-A-T-focused content with attorney bylines, local SEO for practice area pages, and structured data for legal FAQs.',
        leads: 'Case consultation requests and phone calls from high-intent local and practice-area searches.'
    },
    {
        name: 'Healthcare & Wellness',
        emoji: '🏥',
        pain: 'Strict YMYL/E-E-A-T requirements, local competition, and patient privacy considerations in content.',
        strategy: 'Medically reviewed content, local SEO for clinic pages, Google Business Profile optimization, and patient FAQ schema.',
        leads: 'Appointment bookings, phone inquiries, and patient form submissions from local and condition-specific searches.'
    },
    {
        name: 'Jewelry & Luxury Products',
        emoji: '💎',
        pain: 'Visual-first products that are hard to rank organically, high competition from large retailers, and seasonal demand spikes.',
        strategy: 'Product schema with rich snippets, visual search optimization, long-tail product keyword targeting, and gift guide content for seasonal traffic.',
        leads: 'Direct product purchases and wishlist/inquiry submissions from high-intent product searches.'
    },
    {
        name: 'Hemp & CBD',
        emoji: '🌿',
        pain: 'Advertising restrictions on Google and Meta make organic SEO the primary growth channel  but the niche is competitive.',
        strategy: 'Educational content strategy for ToFU, compliance-aware product page optimization, and authoritative backlink building from health publications.',
        leads: 'Product purchases and subscription signups from informational and product-intent organic searches.'
    },
    {
        name: 'DIY & Fitness',
        emoji: '🏋️',
        pain: 'Massive content competition from YouTube and large media sites, and difficulty converting informational traffic into buyers.',
        strategy: 'Content cluster strategy around specific fitness goals, product comparison content for BoFU, and video SEO integration.',
        leads: 'Product sales, program enrollments, and email list signups from how-to and product-intent searches.'
    }
]

const Industries = () => {
    const containerRef = useRef(null)
    const [active, setActive] = useState(0)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out' })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '70vh' }}>
                <p className="reveal" style={{ fontSize: '0.85rem', color: 'hsl(var(--pc))', letterSpacing: '0.15em', marginBottom: '1rem' }}>INDUSTRY EXPERTISE</p>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>
                    SEO FOR YOUR <br /><span className="gradient-text">INDUSTRY</span>
                </h1>
                <p className="reveal" style={{ maxWidth: '650px', opacity: 0.6, fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                    Generic SEO doesn't work. We build strategies around your industry's specific search behavior, competition, and buyer journey.
                </p>
            </section>

            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 01 ] INDUSTRIES WE SERVE</h2>
                <div className="industries-layout" style={{ display: 'grid', gridTemplateColumns: 'clamp(200px, 30%, 280px) 1fr', gap: '2rem', alignItems: 'start' }}>
                    {/* Sidebar */}
                    <div className="industries-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'sticky', top: '120px' }}>
                        {industries.map((ind, i) => (
                            <button key={i} onClick={() => setActive(i)} style={{
                                background: active === i ? 'hsla(var(--pc)/0.12)' : 'transparent',
                                border: `1px solid ${active === i ? 'hsla(var(--pc)/0.3)' : 'transparent'}`,
                                borderRadius: '12px', padding: '0.9rem 1.25rem',
                                color: 'white', cursor: 'pointer', textAlign: 'left',
                                fontSize: '0.9rem', fontWeight: active === i ? '700' : '400',
                                opacity: active === i ? 1 : 0.6, transition: 'all 0.2s ease',
                                display: 'flex', alignItems: 'center', gap: '0.75rem'
                            }}>
                                <span>{ind.emoji}</span> {ind.name}
                            </button>
                        ))}
                    </div>

                    {/* Detail panel */}
                    <div className="glass-card" style={{ padding: '3rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '2.5rem' }}>
                            {industries[active].emoji} {industries[active].name}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ background: 'hsla(0,0%,100%,0.03)', padding: '1.5rem', borderRadius: '16px' }}>
                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>INDUSTRY PAIN POINTS</div>
                                <p style={{ opacity: 0.8, lineHeight: '1.7' }}>{industries[active].pain}</p>
                            </div>
                            <div style={{ background: 'hsla(var(--pc)/0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid hsla(var(--pc)/0.1)' }}>
                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>SEO STRATEGY WE USE</div>
                                <p style={{ opacity: 0.8, lineHeight: '1.7' }}>{industries[active].strategy}</p>
                            </div>
                            <div style={{ background: 'hsla(var(--sc)/0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid hsla(var(--sc)/0.1)' }}>
                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--sc))', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>TYPE OF LEADS GENERATED</div>
                                <p style={{ opacity: 0.8, lineHeight: '1.7' }}>{industries[active].leads}</p>
                            </div>
                        </div>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2.5rem', display: 'inline-flex' }}>
                            Get {industries[active].name} SEO Strategy <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <section style={{ textAlign: 'center', background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.05))' }}>
                <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', marginBottom: '1.5rem' }}>
                    Don't See Your Industry? <br /><span className="gradient-text">We Still Can Help.</span>
                </h2>
                <p className="reveal" style={{ opacity: 0.6, maxWidth: '500px', margin: '0 auto 3rem' }}>
                    We've worked across 12+ industries. If your niche isn't listed, reach out  we'll tell you honestly if we can deliver results.
                </p>
                <Link to="/contact" className="btn btn-primary reveal" style={{ padding: '1.2rem 3rem' }}>Talk to an SEO Expert</Link>
            </section>
        </main>
    )
}

export default Industries
