import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

const Portfolio = () => {
    const [filter, setFilter] = useState('All')
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
        }, containerRef)

        return () => ctx.revert()
    }, [filter])

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.industry === filter)

    const industries = ['All', ...new Set(projects.map(p => p.industry))]

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '60vh' }}>
                <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>OUR <span className="gradient-text">WORK</span></h1>
                <p className="reveal hero-p" style={{ maxWidth: '800px' }}>
                    Showcasing our track record of transforming ambitious ideas into robust
                    technological realities across multiple industries.
                </p>
            </section>

            <section>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                    {industries.map(ind => (
                        <button
                            key={ind}
                            onClick={() => setFilter(ind)}
                            className={`btn ${filter === ind ? 'btn-primary' : 'btn-secondary'}`}
                        >
                            {ind}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 450px), 1fr))', gap: 'clamp(1rem, 5vw, 3rem)' }}>
                    {filteredProjects.map((project, idx) => (
                        <div key={idx} className="reveal glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                            <div style={{
                                height: '350px',
                                background: project.color,
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '2rem'
                                }}>
                                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--sc))', fontWeight: 'bold' }}>{project.industry.toUpperCase()}</div>
                                    <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: 'white' }}>{project.title}</h3>
                                </div>
                                <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
                                    <ArrowUpRight color="white" size={32} />
                                </div>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <p style={{ opacity: 0.6, marginBottom: '2rem' }}>{project.shortDesc}</p>

                                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', marginBottom: '0.25rem' }}>IMPACT</div>
                                        <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{project.caseStudy.impact}</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tech.slice(0, 2).map(t => (
                                            <span key={t} style={{ fontSize: '0.65rem', opacity: 0.4, border: '1px solid var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to={`/project/${project.id}`} className="btn btn-secondary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.75rem' }}>
                                        VIEW CASE STUDY
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ textAlign: 'center' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '2rem' }}>[ CASE STUDIES ]</h2>
                <h3 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '3rem' }}>Deep Dives into <span className="gradient-text">Success.</span></h3>
                <div className="glass-card reveal" style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    textAlign: 'left',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <div style={{ padding: '3rem' }}>
                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>LATEST PUBLICATION</div>
                        <h4 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Scaling Fintech Infrastructure to 10M Concurrent Users</h4>
                        <p style={{ opacity: 0.6 }}>A comprehensive breakdown of how we optimized the backend architecture for a Tier 1 financial institution.</p>
                        <Link to="/project/fintech-scaling" className="btn btn-secondary" style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                            Read Case Study <ExternalLink size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Portfolio
