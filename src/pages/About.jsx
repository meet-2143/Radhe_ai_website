import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Users, Target, Rocket, Award, TrendingUp, Search, BarChart2, Globe } from 'lucide-react'

const About = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', {
                y: 50,
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
            {/* Hero */}
            <section className="hero" style={{ minHeight: '80vh' }}>
                <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>OUR <span className="gradient-text">STORY</span></h1>
                <p className="reveal hero-p" style={{ maxWidth: '800px', fontSize: 'clamp(1rem, 4vw, 1.2rem)' }}>
                    Radhe AI started as a small SEO consultancy with one goal: help great businesses
                    get found online. Today we're a full-service digital marketing agency driving
                    measurable organic growth, content authority, and search dominance for brands worldwide.
                </p>
            </section>

            {/* Mission & Vision */}
            <section style={{ background: 'hsla(0, 0%, 100%, 0.02)' }}>
                <div className="bento-grid">
                    <div className="bento-item large">
                        <Target size={32} color="hsl(var(--pc))" />
                        <h3 style={{ marginTop: '1.5rem' }}>Our Mission</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            To help businesses of every size compete and win in search  through
                            data-driven SEO, compelling content, and performance marketing that
                            delivers real, lasting results.
                        </p>
                    </div>
                    <div className="bento-item large">
                        <Rocket size={32} color="hsl(var(--sc))" />
                        <h3 style={{ marginTop: '1.5rem' }}>Our Vision</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            A digital landscape where every brand has the visibility it deserves 
                            powered by intelligent SEO, authoritative content, and AI-driven
                            marketing strategies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section>
                <h2 style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 03 ] WHY CHOOSE US</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 100%, 300px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
                    {[
                        {
                            icon: <Search size={28} color="hsl(var(--pc))" />,
                            title: 'SEO-First Thinking',
                            desc: 'Every strategy starts with search intent. We build content and campaigns around what your audience is actually looking for.'
                        },
                        {
                            icon: <BarChart2 size={28} color="hsl(var(--sc))" />,
                            title: 'Results You Can Measure',
                            desc: 'No vanity metrics. We track rankings, organic traffic, leads, and revenue  and we report on all of it transparently.'
                        },
                        {
                            icon: <Globe size={28} color="hsl(var(--pc))" />,
                            title: 'Full-Funnel Coverage',
                            desc: 'From awareness to conversion, we cover SEO, content, paid media, and design  so nothing falls through the cracks.'
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="reveal">
                            <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '1.5rem' }}>{item.title}</h3>
                            <p style={{ opacity: 0.5 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Milestones */}
            <section style={{ background: 'black' }}>
                <h2 style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 04 ] MILESTONES</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {[
                        { year: '2021', text: 'Radhe AI founded as a boutique SEO consultancy.' },
                        { year: '2022', text: 'Expanded into content marketing and paid media, growing to 30+ clients.' },
                        { year: '2023', text: 'Launched our On-Demand SEO & Content service  500+ articles delivered.' },
                        { year: '2024', text: 'Recognized as a top digital marketing agency, serving clients across 12 industries.' },
                        { year: '2025', text: 'Introduced AI-powered AEO services to future-proof client visibility in LLM search.' }
                    ].map((m, i) => (
                        <div key={i} className="reveal" style={{
                            display: 'grid',
                            gridTemplateColumns: 'clamp(100px, 20vw, 150px) 1fr',
                            gap: 'clamp(1.5rem, 5vw, 4rem)',
                            alignItems: 'center'
                        }}>
                            <span className="gradient-text" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: '800' }}>{m.year}</span>
                            <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', opacity: 0.8 }}>{m.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section>
                <h2 style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 05 ] BY THE NUMBERS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    {[
                        { value: '50+', label: 'Clients Served' },
                        { value: '1,200+', label: 'Content Pieces Delivered' },
                        { value: '3x', label: 'Avg. Organic Traffic Growth' },
                        { value: '12', label: 'Industries Covered' }
                    ].map((stat, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '2.5rem 1.5rem' }}>
                            <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: '900', color: i % 2 === 0 ? 'hsl(var(--pc))' : 'hsl(var(--sc))' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '0.5rem', letterSpacing: '0.05em' }}>{stat.label.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Leadership */}
            <section id="leadership">
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 06 ] OUR LEADERSHIP</h2>
                <div className="bento-grid">
                    <div className="bento-item large reveal">
                        <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}><Users size={32} color="hsl(var(--pc))" /></div>
                        <h3 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '1rem' }}>Parth Mavani</h3>
                        <p style={{ color: 'hsl(var(--pc))', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.1em', fontSize: '0.9rem' }}>FOUNDER & CEO</p>
                        <p style={{ opacity: 0.6, maxWidth: '500px', lineHeight: '1.7', fontSize: '1rem' }}>
                            A digital marketing strategist with a deep background in SEO and content
                            growth. Parth founded Radhe AI to give ambitious brands access to
                            enterprise-level search strategy  without the enterprise price tag.
                        </p>
                    </div>
                    <div className="bento-item wide reveal">
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Meet Mavani</h3>
                        <p style={{ color: 'hsl(var(--sc))', fontWeight: 'bold' }}>CO-FOUNDER & HEAD OF GROWTH</p>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            Specializing in performance marketing, analytics, and AI-driven content
                            strategy, Meet leads growth operations  ensuring every campaign is
                            optimized for measurable ROI and long-term organic authority.
                        </p>
                    </div>
                    <div className="bento-item reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'hsl(var(--pc))' }}>4+</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>YEARS IN SEO</div>
                    </div>
                    <div className="bento-item reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'hsl(var(--sc))' }}>50+</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>CLIENTS</div>
                    </div>
                </div>
            </section>

            {/* Partners & Certifications */}
            <section id="partners" style={{ background: 'hsla(var(--pc) / 0.05)' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 07 ] TOOLS & CERTIFICATIONS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                    {[
                        'Google Partner',
                        'Semrush Certified',
                        'HubSpot Certified',
                        'Ahrefs Pro',
                        'GA4 Certified',
                        'Meta Business Partner'
                    ].map((partner, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '2rem', opacity: 0.7 }}>
                            <Award size={32} color="hsl(var(--pc))" style={{ marginBottom: '1rem' }} />
                            <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{partner}</div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default About
