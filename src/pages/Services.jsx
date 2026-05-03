import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { Layout, Search, BarChart, Type, Globe, Zap, Layers, Repeat, Target } from 'lucide-react'

const Services = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out'
            })

            gsap.from('.process-step', {
                scrollTrigger: {
                    trigger: '.process-timeline',
                    start: 'top 80%',
                },
                x: -50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out'
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '60vh' }}>
                <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>OUR <span className="gradient-text">SERVICES</span></h1>
                <p className="reveal hero-p" style={{ maxWidth: '800px' }}>
                    We provide end-to-end digital marketing solutions that grow your brand online.
                    From SEO and content strategy to paid media and design, we cover every channel that matters.
                </p>
            </section>

            <section id="services-grid">
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 01 ] CORE EXPERTISE</h2>
                <div className="bento-grid">
                    <Link to="/service/digital-marketing" className="bento-item large" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Zap size={32} color="hsl(var(--pc))" />
                        <h3>Digital Marketing Services</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            Multi-channel performance campaigns across Google, Meta, and LinkedIn —
                            built to convert and scale.
                        </p>
                    </Link>
                    <Link to="/service/seo" className="bento-item wide" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Search size={32} color="hsl(var(--sc))" />
                        <h3>Search Engine Optimization</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            Technical SEO, content clustering, and authority link building for sustainable organic growth.
                        </p>
                    </Link>
                    <Link to="/service/aeo" className="bento-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Globe size={24} color="hsl(var(--pc))" />
                        <h3>Answer Engine Optimization</h3>
                    </Link>
                    <Link to="/service/content-marketing" className="bento-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Type size={24} color="hsl(var(--sc))" />
                        <h3>Content Marketing</h3>
                    </Link>
                    <Link to="/service/analytics" className="bento-item wide" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <BarChart size={32} color="hsl(var(--pc))" />
                        <h3>Analytics & Reporting</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            GA4, custom dashboards, and predictive insights that turn data into decisions.
                        </p>
                    </Link>
                    <Link to="/service/ui-ux" className="bento-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Layout size={24} color="hsl(var(--sc))" />
                        <h3>UI/UX Design</h3>
                    </Link>
                </div>
            </section>

            <section className="process-timeline" style={{ background: 'hsla(0, 0%, 100%, 0.01)' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '4rem' }}>[ 02 ] OUR PROCESS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 100%, 300px), 1fr))', gap: '2rem' }}>
                    {[
                        { icon: <Search />, title: 'Discovery', desc: 'Auditing your current presence and identifying the highest-impact opportunities.' },
                        { icon: <Target />, title: 'Strategy', desc: 'Building a data-backed roadmap tailored to your goals and competitive landscape.' },
                        { icon: <Layers />, title: 'Execution', desc: 'Delivering campaigns, content, and optimizations with precision and speed.' },
                        { icon: <Repeat />, title: 'Optimization', desc: 'Continuous monitoring, reporting, and refinement to compound results over time.' }
                    ].map((step, idx) => (
                        <div key={idx} className="process-step glass-card" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                            <div style={{ color: 'hsl(var(--pc))', marginBottom: '1.5rem' }}>{step.icon}</div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{step.title}</h4>
                            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '4rem' }}>[ 03 ] TOOLS WE USE</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                    {['Ahrefs', 'Semrush', 'Surfer SEO', 'Google Search Console', 'GA4', 'Screaming Frog', 'HubSpot', 'Klaviyo', 'Meta Ads', 'Google Ads', 'Looker Studio'].map((tool, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem' }}>
                            {tool}
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ textAlign: 'center', background: 'hsl(var(--card))', padding: '100px 5%' }}>
                <h3 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '2rem', lineHeight: '1.1' }}>Flexible <span className="gradient-text">Engagement Models</span></h3>
                <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Whether you need a full-service retainer, a one-time SEO audit, or dedicated content writers,
                    we have a model that fits your budget and goals.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>Request a Quote</Link>
            </section>
        </main>
    )
}

export default Services
