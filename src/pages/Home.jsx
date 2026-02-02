import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Rocket, Shield, Globe, Users, ArrowRight, Award } from 'lucide-react'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
    const mainRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animations
            gsap.from('.reveal', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.out'
            })

            // Section Reveals
            gsap.utils.toArray('section').forEach(section => {
                gsap.from(section.querySelectorAll('.reveal-on-scroll'), {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out'
                })
            })
        }, mainRef)

        return () => ctx.revert()
    }, [])

    return (
        <main ref={mainRef}>
            {/* Hero Section */}
            <section className="hero">
                <h1 className="reveal">
                    PIONEERING <br /> <span className="gradient-text">INTELLIGENT</span> <br /> SOLUTIONS
                </h1>
                <p className="reveal">
                    Radhe AI designs and deploys sophisticated AI architectures, secure cloud infrastructure,
                    and premium digital experiences for the next generation of global enterprises.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/contact" className="btn btn-primary">Book a Call</Link>
                    <Link to="/portfolio" className="btn btn-secondary">Our Work</Link>
                </div>
            </section>

            {/* Services Preview */}
            <section id="services">
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))' }}>[ 01 ] CORE EXPERTISE</h2>
                <div className="bento-grid">
                    <div className="bento-item large reveal-on-scroll">
                        <Cpu size={48} color="hsl(var(--pc))" />
                        <h3 style={{ fontSize: '2.5rem', marginTop: '2rem' }}>AI & Machine Learning</h3>
                        <p style={{ opacity: 0.6, marginTop: '1rem' }}>Custom neural networks and predictive models for enterprise automation.</p>
                    </div>
                    <div className="bento-item wide reveal-on-scroll">
                        <Shield size={32} color="hsl(var(--sc))" />
                        <h3>Secure Infrastructure</h3>
                    </div>
                    <div className="bento-item reveal-on-scroll">
                        <Globe size={32} />
                        <h3>Global Scale</h3>
                    </div>
                    <div className="bento-item reveal-on-scroll">
                        <Users size={32} />
                        <h3>Expert Teams</h3>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section id="work" style={{ background: 'hsla(0, 0%, 100%, 0.02)' }}>
                <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '4rem' }}>[ 02 ] FEATURED WORK</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 400px), 1fr))', gap: '2rem' }}>
                    {projects.slice(0, 2).map((project, idx) => (
                        <div key={idx} className="reveal-on-scroll glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                            <div style={{ height: '300px', background: project.color, overflow: 'hidden' }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title.toUpperCase()}</h3>
                                <p style={{ opacity: 0.5, marginBottom: '2rem' }}>{project.shortDesc}</p>
                                <Link to={`/project/${project.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                                    VIEW CASE STUDY <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="reveal-on-scroll" style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
                    <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '1.2rem 3.5rem', fontSize: '1rem', letterSpacing: '0.1em' }}>
                        VIEW ALL PROJECTS
                    </Link>
                </div>
            </section>


            {/* Testimonials */}
            <section id="testimonials">
                <div style={{ marginBottom: '4rem' }}>
                    <h2 className="reveal-on-scroll" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '1rem' }}>[ 03 ] REVIEWS</h2>
                    <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>Trusted by <span className="gradient-text">Real Partners</span></h3>
                </div>
                {/* ... (bento-grid content remains same) ... */}
                <div className="bento-grid">
                    {[
                        {
                            name: 'Sheryl Erixson',
                            role: 'Founder @ ProcessRun',
                            text: 'Radhe AI played a pivotal role in developing our core infrastructure. They delivered exactly on time and provided incredible clarity for our daily operations, allowing us to scale without technical friction.',
                            rating: 5,
                            size: 'large'
                        },
                        {
                            name: 'Shreejiv Gujarati',
                            role: 'Founder @ Apna Indian Bazaar',
                            text: 'Their support in streamlining our business logic was exceptional. The team ensured every delivery milestone was met, giving us the operational confidence we needed to expand our market reach.',
                            rating: 5,
                            size: 'tall'
                        },
                        {
                            name: 'Sanat Koshiya',
                            role: 'Founder @ Apna Indian Bazaar',
                            text: 'Working with Radhe AI brought much-needed structure to our projects. Their ability to deliver complex features on time while maintaining transparent communication is what sets them apart.',
                            rating: 5,
                            size: 'medium'
                        },
                        {
                            name: 'Parth Mavani',
                            role: 'Founder @ Semantic SEO',
                            text: 'Radhe AI didn’t just build software; they contributed to our business growth. Their technical support and strategic operational clarity helped us optimize our SEO workflows significantly.',
                            rating: 5,
                            size: 'wide'
                        },
                        {
                            name: 'Anita Desai',
                            role: 'Head of AI @ MedFront',
                            text: 'Security and privacy were our top concerns. Radhe AI exceeded all healthcare compliance standards with zero delays in implementation.',
                            rating: 5,
                            size: 'medium'
                        },
                        {
                            name: 'Michael Chen',
                            role: 'VP Engineering @ LogiHub',
                            text: 'Professional, innovative, and incredibly fast. The predictive models they built saved us millions through operational optimization.',
                            rating: 5,
                            size: 'medium'
                        }
                    ].map((item, idx) => (
                        <div key={idx} className={`bento-item ${item.size} testimonial-card reveal-on-scroll`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '2rem' }}>
                                    {[...Array(item.rating)].map((_, i) => <span key={i} style={{ color: 'hsl(var(--pc))', fontSize: '1.2rem' }}>★</span>)}
                                </div>
                                <p style={{ fontStyle: 'italic', opacity: 0.9, marginBottom: '3rem', fontSize: '1.3rem', lineHeight: '1.6', fontWeight: '500' }}>
                                    "{item.text}"
                                </p>
                            </div>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.2rem', color: 'white' }}>{item.name}</strong>
                                <span style={{ fontSize: '0.9rem', opacity: 0.5, letterSpacing: '0.05em' }}>{item.role.toUpperCase()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: 'center', background: 'linear-gradient(to bottom, transparent, hsla(var(--pc) / 0.05))' }}>
                <h3 className="reveal-on-scroll" style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', marginBottom: '3rem', lineHeight: '1.1' }}>
                    Ready to <span className="gradient-text">Augment</span> your Reality?
                </h3>
                <div className="reveal-on-scroll" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Start Your Project</Link>
                    <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>View Portfolio</Link>
                </div>
            </section>

        </main>
    )
}

export default Home
