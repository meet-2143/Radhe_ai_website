import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Cpu, Cloud, Shield, Database, Layout, Search, Layers, Repeat } from 'lucide-react'

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
                    We provide end-to-end digital solutions that transform businesses.
                    From AI integration to secure cloud infrastructure, our expertise is your advantage.
                </p>
            </section>

            <section id="services-grid">
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '3rem' }}>[ 01 ] CORE EXPERTISE</h2>
                <div className="bento-grid">
                    <div className="bento-item large">
                        <Cpu size={32} color="hsl(var(--pc))" />
                        <h3>AI & Machine Learning</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            Custom neural networks, natural language processing, and predictive models
                            designed to automate and optimize your core business logic.
                        </p>
                    </div>
                    <div className="bento-item wide">
                        <Cloud size={32} color="hsl(var(--sc))" />
                        <h3>Cloud Infrastructure</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            Scalable, zero-trust cloud architectures on AWS, Azure, and GCP.
                        </p>
                    </div>
                    <div className="bento-item">
                        <Shield size={24} />
                        <h3>Cyber Security</h3>
                    </div>
                    <div className="bento-item">
                        <Database size={24} />
                        <h3>Data Analytics</h3>
                    </div>
                    <div className="bento-item wide">
                        <Layout size={32} color="hsl(var(--pc))" />
                        <h3>UI/UX Design</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>
                            Premium, user-centric interfaces that blend aesthetic beauty with
                            functional excellence.
                        </p>
                    </div>
                    <div className="bento-item">
                        <Search size={24} />
                        <h3>SEO & Growth</h3>
                    </div>
                </div>
            </section>

            <section className="process-timeline" style={{ background: 'hsla(0, 0%, 100%, 0.01)' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '4rem' }}>[ 02 ] OUR PROCESS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {[
                        { icon: <Search />, title: 'Discovery', desc: 'Understanding your goals and technical requirements.' },
                        { icon: <Layers />, title: 'Architecture', desc: 'Designing the blueprint for a scalable solution.' },
                        { icon: <Cpu />, title: 'Development', desc: 'Agile sprints with continuous integration and testing.' },
                        { icon: <Repeat />, title: 'Optimization', desc: 'Monitoring and refining for peak performance.' }
                    ].map((step, idx) => (
                        <div key={idx} className="process-step glass-card" style={{ padding: '2.5rem' }}>
                            <div style={{ color: 'hsl(var(--pc))', marginBottom: '1.5rem' }}>{step.icon}</div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{step.title}</h4>
                            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '4rem' }}>[ 03 ] TECH STACK</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                    {['React', 'Next.js', 'Python', 'TensorFlow', 'PyTorch', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Vercel'].map((tech, i) => (
                        <div key={i} className="reveal glass-card" style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem' }}>
                            {tech}
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ textAlign: 'center', background: 'hsl(var(--card))' }}>
                <h3 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Flexible <span className="gradient-text">Pricing Models</span></h3>
                <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto 3rem' }}>
                    We offer tailored engagement models including Fixed-Price, Time & Material,
                    and Dedicated Development Teams.
                </p>
                <button className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>Request Quote</button>
            </section>
        </main>
    )
}

export default Services
