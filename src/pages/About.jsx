import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Users, Target, Rocket, Award } from 'lucide-react'

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
            <section className="hero" style={{ minHeight: '80vh' }}>
                <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>OUR <span className="gradient-text">STORY</span></h1>
                <p className="reveal hero-p" style={{ maxWidth: '800px' }}>
                    Founded with a vision to democratize high-end intelligence, Radhe AI has grown
                    from a boutique consultancy to a global IT powerhouse. We believe in the power
                    of technology to solve the world's most complex challenges.
                </p>
            </section>

            <section style={{ background: 'hsla(0, 0%, 100%, 0.02)' }}>
                <div className="bento-grid">
                    <div className="bento-item large">
                        <Target size={32} color="hsl(var(--pc))" />
                        <h3 style={{ marginTop: '1.5rem' }}>Our Mission</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            To architect secure, intelligent, and scalable digital ecosystems that
                            empower businesses to lead in the age of AI.
                        </p>
                    </div>
                    <div className="bento-item large">
                        <Rocket size={32} color="hsl(var(--sc))" />
                        <h3 style={{ marginTop: '1.5rem' }}>Our Vision</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            A future where artificial intelligence and human ingenuity work in
                            perfect harmony to drive global progress.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 03 ] WHY CHOOSE US</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
                    {[
                        { title: 'Excellence', desc: 'We never settle for "good enough". Every line of code is a masterpiece.' },
                        { title: 'Security', desc: 'Security is not an afterthought. It is the foundation of everything we build.' },
                        { title: 'Innovation', desc: 'We stay ahead of the curve so you can lead the race.' }
                    ].map((item, idx) => (
                        <div key={idx} className="reveal">
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{item.title}</h3>
                            <p style={{ opacity: 0.5 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ background: 'black' }}>
                <h2 style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 04 ] MILESTONES</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {[
                        { year: '2021', text: 'Radhe AI founded in a small tech hub.' },
                        { year: '2022', text: 'Scaled to 50+ enterprise clients globally.' },
                        { year: '2023', text: 'Awarded "Top AI Innovator" by TechInsights.' },
                        { year: '2024', text: 'Launched the first zero-trust AI infrastructure.' }
                    ].map((m, i) => (
                        <div key={i} className="reveal" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                            <span className="gradient-text" style={{ fontSize: '3rem', fontWeight: '800', minWidth: '150px' }}>{m.year}</span>
                            <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>{m.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="partners" style={{ background: 'hsla(var(--pc) / 0.05)' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 06 ] PARTNERS & TRUST</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                    {['AWS Particle', 'Google Cloud Partner', 'NVIDIA Inception', 'ISO 27001', 'SOC2 Certified', 'Microsoft Silver'].map((partner, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '2rem', opacity: 0.6 }}>
                            <Award size={32} color="hsl(var(--pc))" style={{ marginBottom: '1rem' }} />
                            <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{partner}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="leadership">
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 05 ] OUR LEADERSHIP</h2>
                <div className="bento-grid">
                    <div className="bento-item large reveal">
                        <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}><Users size={32} color="hsl(var(--pc))" /></div>
                        <h3 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Parth Mavani</h3>
                        <p style={{ color: 'hsl(var(--pc))', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>FOUNDER & CEO</p>
                        <p style={{ opacity: 0.6, maxWidth: '500px', lineHeight: '1.7' }}>
                            A visionary technologist with a passion for architecting complex AI systems.
                            Parth founded Radhe AI to bridge the gap between advanced research and
                            enterprise-grade implementation, focusing on operational clarity and
                            uncompromised delivery.
                        </p>
                    </div>
                    <div className="bento-item wide reveal">
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Meet Mavani</h3>
                        <p style={{ color: 'hsl(var(--sc))', fontWeight: 'bold' }}>CO-FOUNDER & CTO</p>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            Specializing in large-scale infrastructure, Gen AI Profficency and Machine learning algorithms, Meet leads
                            the technical strategy, ensuring every solution is built for performance
                            and long-term scalability.
                        </p>
                    </div>
                    <div className="bento-item reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'hsl(var(--pc))' }}>10+</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>YEARS EXP</div>
                    </div>
                    <div className="bento-item reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'hsl(var(--sc))' }}>50+</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>CLIENTS</div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About
