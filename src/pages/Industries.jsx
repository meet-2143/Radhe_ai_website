import { useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { industries } from '../data/industriesData'
import { getServiceById } from '../data/servicesData'

gsap.registerPlugin(ScrollTrigger)

const Industries = () => {
    const containerRef = useRef(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const activeIndex = Math.max(0, industries.findIndex(ind => ind.id === searchParams.get('i')))
    const active = industries[activeIndex]
    const ActiveIcon = active.icon

    const selectIndustry = id => setSearchParams({ i: id }, { replace: true, preventScrollReset: true })

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
                    IT FOR YOUR <br /><span className="gradient-text">INDUSTRY</span>
                </h1>
                <p className="reveal" style={{ maxWidth: '650px', opacity: 0.6, fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                    A newsagency, a medical practice, and an online store need very different things from their technology.
                    We tailor our services to how your business actually runs.
                </p>
            </section>

            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 01 ] INDUSTRIES WE SERVE</h2>
                <div className="industries-layout" style={{ display: 'grid', gridTemplateColumns: 'clamp(200px, 30%, 280px) 1fr', gap: '2rem', alignItems: 'start' }}>
                    {/* Sidebar */}
                    <div className="industries-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'sticky', top: '120px' }}>
                        {industries.map((ind, i) => {
                            const Icon = ind.icon
                            const isActive = activeIndex === i
                            return (
                                <button key={ind.id} onClick={() => selectIndustry(ind.id)} style={{
                                    background: isActive ? 'hsla(var(--pc)/0.12)' : 'transparent',
                                    border: `1px solid ${isActive ? 'hsla(var(--pc)/0.3)' : 'transparent'}`,
                                    borderRadius: '12px', padding: '0.9rem 1.25rem',
                                    color: 'white', cursor: 'pointer', textAlign: 'left',
                                    fontSize: '0.9rem', fontWeight: isActive ? '700' : '400',
                                    opacity: isActive ? 1 : 0.6, transition: 'all 0.2s ease',
                                    display: 'flex', alignItems: 'center', gap: '0.75rem'
                                }}>
                                    <Icon size={18} style={{ flexShrink: 0 }} /> {ind.name}
                                </button>
                            )
                        })}
                    </div>

                    {/* Detail panel */}
                    <div className="glass-card" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <ActiveIcon size={36} color="hsl(var(--pc))" style={{ flexShrink: 0 }} /> {active.name}
                        </h2>
                        <p style={{ opacity: 0.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>Key services: {active.focus}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ background: 'hsla(0,0%,100%,0.03)', padding: '1.5rem', borderRadius: '16px' }}>
                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>COMMON TECHNOLOGY CHALLENGES</div>
                                <p style={{ opacity: 0.8, lineHeight: '1.7' }}>{active.challenge}</p>
                            </div>
                            <div style={{ background: 'hsla(var(--pc)/0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid hsla(var(--pc)/0.1)' }}>
                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>HOW WE HELP</div>
                                <p style={{ opacity: 0.8, lineHeight: '1.7' }}>{active.howWeHelp}</p>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: 'hsl(var(--sc))', letterSpacing: '0.1em', marginBottom: '1rem' }}>RECOMMENDED SERVICES</div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '0.75rem' }}>
                                    {active.services.map(getServiceById).filter(Boolean).map(svc => {
                                        const Icon = svc.icon
                                        return (
                                            <Link key={svc.id} to={`/services/${svc.id}`} className="dropdown-item" style={{ background: 'hsla(var(--sc)/0.05)', border: '1px solid hsla(var(--sc)/0.12)', marginBottom: 0 }}>
                                                <Icon size={18} color={svc.color} style={{ flexShrink: 0 }} />
                                                <div className="dropdown-item-content" style={{ flex: 1 }}><h5>{svc.navTitle}</h5></div>
                                                <ArrowRight size={14} style={{ opacity: 0.5, flexShrink: 0 }} />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2.5rem', display: 'inline-flex' }}>
                            Talk to Us About {active.name} IT <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <section style={{ textAlign: 'center', background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.05))' }}>
                <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', marginBottom: '1.5rem' }}>
                    Don't See Your Industry? <br /><span className="gradient-text">We Can Still Help.</span>
                </h2>
                <p className="reveal" style={{ opacity: 0.6, maxWidth: '520px', margin: '0 auto 3rem' }}>
                    Our services suit almost any small business or online retailer. Tell us how your business runs and we'll recommend the right setup.
                </p>
                <Link to="/contact" className="btn btn-primary reveal" style={{ padding: '1.2rem 3rem' }}>Book a Free Consultation</Link>
            </section>
        </main>
    )
}

export default Industries
