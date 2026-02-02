import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowLeft, CheckCircle, Target, TrendingUp, Cpu } from 'lucide-react'
import { projects } from '../data/projects'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProjectDetail = () => {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)
    const containerRef = useRef(null)

    useEffect(() => {
        if (!project) return

        const ctx = gsap.context(() => {
            gsap.from('.reveal', {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out'
            })

            gsap.from('.metric-card', {
                scrollTrigger: {
                    trigger: '.metrics-grid',
                    start: 'top 80%',
                },
                scale: 0.8,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'back.out(1.7)'
            })
        }, containerRef)

        return () => ctx.revert()
    }, [project])

    if (!project) {
        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ fontSize: '3rem' }}>Project Not Found</h1>
                <Link to="/portfolio" className="btn btn-secondary" style={{ marginTop: '2rem' }}>Back to Portfolio</Link>
            </div>
        )
    }

    return (
        <main ref={containerRef} style={{ padding: '120px 0 0' }}>
            {/* Header / Hero */}
            <section style={{ padding: '0 5% 80px' }}>
                <Link to="/portfolio" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--pc))', textDecoration: 'none', marginBottom: '3rem', fontWeight: 'bold' }}>
                    <ArrowLeft size={20} /> BACK TO PORTFOLIO
                </Link>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div className="reveal" style={{ fontSize: '0.9rem', color: 'hsl(var(--pc))', fontWeight: 'bold', marginBottom: '1rem' }}>{project.industry.toUpperCase()}</div>
                        <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', marginBottom: '2rem', lineHeight: '1' }}>{project.title}</h1>
                        <p className="reveal" style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '2.5rem', maxWidth: '500px' }}>{project.shortDesc}</p>
                        <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {project.tech.map(t => (
                                <span key={t} className="glass-card" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '100px' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="reveal glass-card" style={{ padding: '0', overflow: 'hidden', height: '500px', border: 'none' }}>
                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            {/* Case Study Preview (The Impact Summary) */}
            <section style={{ background: 'hsla(var(--pc) / 0.05)', padding: '100px 5%' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '2rem' }}>[ 01 ] CASE STUDY PREVIEW</h2>
                    <h3 className="reveal" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>How we delivered <span className="gradient-text">exceptional value</span> to {project.title}.</h3>
                    <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {project.caseStudy.metrics.map((m, i) => (
                            <div key={i} className="metric-card glass-card" style={{ padding: '2.5rem' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'hsl(var(--pc))', marginBottom: '0.5rem' }}>{m.value}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Breakdown - Complete Project Lifecycle */}
            <section style={{ padding: '120px 5%' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '4rem', textAlign: 'center' }}>[ 02 ] PROJECT LIFECYCLE OVERVIEW</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Phase 1: The Problem */}
                        <div className="reveal">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Target color="hsl(var(--pc))" size={32} />
                                <h4 style={{ fontSize: '1.5rem' }}>01. THE PROBLEM</h4>
                            </div>
                            <p style={{ opacity: 0.6, fontSize: '1.1rem', lineHeight: '1.8' }}>{project.caseStudy.problem}</p>
                        </div>

                        {/* Phase 2: The Identification (Condition rendering) */}
                        {project.caseStudy.identifiedProblem && (
                            <div className="reveal">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <Cpu color="hsl(var(--sc))" size={32} />
                                    <h4 style={{ fontSize: '1.5rem' }}>02. THE ROOT CAUSE</h4>
                                </div>
                                <p style={{ opacity: 0.6, fontSize: '1.1rem', lineHeight: '1.8' }}>{project.caseStudy.identifiedProblem}</p>
                            </div>
                        )}

                        {/* Phase 3: The Solution */}
                        <div className="reveal">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <CheckCircle color="hsl(var(--pc))" size={32} />
                                <h4 style={{ fontSize: '1.5rem' }}>{project.caseStudy.identifiedProblem ? '03.' : '02.'} THE SOLUTION</h4>
                            </div>
                            <p style={{ opacity: 0.6, fontSize: '1.1rem', lineHeight: '1.8' }}>{project.caseStudy.solution}</p>
                        </div>

                        {/* Phase 4: The Impact */}
                        <div className="reveal">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <TrendingUp color="hsl(var(--sc))" size={32} />
                                <h4 style={{ fontSize: '1.5rem' }}>{project.caseStudy.identifiedProblem ? '04.' : '03.'} THE SUCCESS</h4>
                            </div>
                            <p style={{ opacity: 0.6, fontSize: '1.1rem', lineHeight: '1.8' }}>{project.caseStudy.impact}</p>
                        </div>
                    </div>

                    {/* Tech Stack Highlights */}
                    <div className="reveal glass-card" style={{ marginTop: '6rem', padding: '4rem', background: 'hsl(var(--card))' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <Cpu color="hsl(var(--pc))" size={32} />
                            <h4 style={{ fontSize: '1.5rem' }}>CORE TECHNOLOGY STACK</h4>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            {project.tech.map((t, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8 }}>
                                    <CheckCircle size={20} color="hsl(var(--sc))" /> {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ textAlign: 'center', paddingBottom: '160px' }}>
                <h3 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Want results like <span className="gradient-text">these?</span></h3>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>LET'S BUILD YOUR PROJECT</Link>
            </section>
        </main>
    )
}

export default ProjectDetail
