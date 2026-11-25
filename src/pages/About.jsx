import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Users, Target, Rocket, Award, Layers, LifeBuoy, ShieldCheck } from 'lucide-react'
import { itServices } from '../data/servicesData'
import { industries } from '../data/industriesData'

const totalSubServices = itServices.reduce((sum, s) => sum + s.subServices.length, 0)

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
                    Working closely with small business owners showed us how much time they lose to technology
                    that doesn't work. Radhe AI exists to fix that: we're a complete IT services partner for
                    small businesses and eCommerce.
                </p>
            </section>

            {/* Mission & Vision */}
            <section style={{ background: 'hsla(0, 0%, 100%, 0.02)' }}>
                <div className="bento-grid">
                    <div className="bento-item large">
                        <Target size={32} color="hsl(var(--pc))" />
                        <h3 style={{ marginTop: '1.5rem' }}>Our Mission</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            To give small businesses and online retailers dependable, affordable technology,
                            with support, security, and systems that let owners focus on customers
                            instead of computers.
                        </p>
                    </div>
                    <div className="bento-item large">
                        <Rocket size={32} color="hsl(var(--sc))" />
                        <h3 style={{ marginTop: '1.5rem' }}>Our Vision</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            A future where every small business has the same quality of IT as a large
                            enterprise: secure, connected, automated, and supported by people who
                            understand how the business runs.
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
                            icon: <Layers size={28} color="hsl(var(--pc))" />,
                            title: 'Everything Under One Roof',
                            desc: 'From the front-counter POS to the cloud, websites, security, and automation, one team looks after your whole setup.'
                        },
                        {
                            icon: <LifeBuoy size={28} color="hsl(var(--sc))" />,
                            title: 'Support That Shows Up',
                            desc: 'Remote help for quick fixes and on-site visits when needed, with monthly packages that make costs predictable.'
                        },
                        {
                            icon: <ShieldCheck size={28} color="hsl(var(--pc))" />,
                            title: 'Secure by Default',
                            desc: 'MFA, endpoint protection, email security, and monitored backups are built into how we set things up.'
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
                        { year: '2021', text: 'Radhe AI founded.' },
                        { year: '2025', text: 'Introduced AI-powered services for our clients.' },
                        { year: '2026', text: 'Launched complete IT services for small businesses and eCommerce.' }
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
                        { value: String(itServices.length), label: 'Service Areas' },
                        { value: `${totalSubServices}+`, label: 'IT Services Offered' },
                        { value: String(industries.length), label: 'Industries Covered' }
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
                        <h3 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '1rem' }}>Founder & CEO</h3>
                        <p style={{ color: 'hsl(var(--pc))', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.1em', fontSize: '0.9rem' }}>STRATEGY & GROWTH</p>
                        <p style={{ opacity: 0.6, maxWidth: '500px', lineHeight: '1.7', fontSize: '1rem' }}>
                            Our founder started Radhe AI to give small businesses access to the kind of
                            technology and support usually reserved for large companies, without
                            the enterprise price tag.
                        </p>
                    </div>
                    <div className="bento-item wide reveal">
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Co-Founder</h3>
                        <p style={{ color: 'hsl(var(--sc))', fontWeight: 'bold' }}>DELIVERY & OPERATIONS</p>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            Our co-founder leads delivery and operations, making sure every project, from
                            websites and automation to support plans, is delivered on time and
                            keeps working long after launch.
                        </p>
                    </div>
                    <div className="bento-item reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'hsl(var(--pc))' }}>4+</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>YEARS IN BUSINESS</div>
                    </div>
                    <div className="bento-item reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'hsl(var(--sc))' }}>50+</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>CLIENTS</div>
                    </div>
                </div>
            </section>

            {/* Partners & Certifications */}
            <section id="partners" style={{ background: 'hsla(var(--pc) / 0.05)' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 07 ] PLATFORMS WE SUPPORT</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                    {[
                        'Microsoft 365',
                        'Google Workspace',
                        'Shopify',
                        'WooCommerce',
                        'Xero & MYOB',
                        'Make.com & Zapier'
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
