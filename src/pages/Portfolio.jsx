import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'

const Portfolio = () => {
    const [filter, setFilter] = useState('All')
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' })
        }, containerRef)
        return () => ctx.revert()
    }, [filter])

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)
    const categories = ['All', ...new Set(projects.map(p => p.category))]

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '60vh' }}>
                <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>OUR <span className="gradient-text">WORK</span></h1>
                <p className="reveal hero-p" style={{ maxWidth: '800px' }}>
                    A look at the kind of projects we deliver for small businesses and online retailers, from POS rollouts
                    and Microsoft 365 migrations to Shopify stores and workflow automation.
                </p>
                <p className="reveal" style={{ fontSize: '0.8rem', opacity: 0.45, maxWidth: '640px' }}>
                    These are example projects showing the typical scope of each service. Ask us for references relevant to your business.
                </p>
            </section>

            <section>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setFilter(cat)} className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 450px), 1fr))', gap: 'clamp(1rem, 5vw, 3rem)' }}>
                    {filteredProjects.map(project => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className="reveal glass-card"
                            style={{ padding: '0', overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block' }}
                        >
                            <div style={{ height: '350px', background: project.color, position: 'relative', overflow: 'hidden' }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem'
                                }}>
                                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--sc))', fontWeight: 'bold' }}>{project.category.toUpperCase()}</div>
                                    <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: 'white' }}>{project.title}</h3>
                                </div>
                                <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
                                    <ArrowUpRight color="white" size={32} />
                                </div>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <p style={{ opacity: 0.6, marginBottom: '2rem' }}>{project.shortDesc}</p>

                                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'hsl(var(--pc))', marginBottom: '0.25rem' }}>OUTCOME</div>
                                    <p style={{ fontSize: '1rem', fontWeight: '600', lineHeight: '1.6' }}>{project.caseStudy.impact}</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tech.slice(0, 2).map(t => (
                                            <span key={t} style={{ fontSize: '0.65rem', opacity: 0.4, border: '1px solid var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{t}</span>
                                        ))}
                                    </div>
                                    <span className="btn btn-secondary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.75rem' }}>VIEW PROJECT</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section style={{ textAlign: 'center', background: 'linear-gradient(to bottom, transparent, hsla(var(--pc)/0.05))' }}>
                <h2 className="reveal" style={{ fontSize: '1rem', color: 'hsl(var(--pc))', marginBottom: '2rem' }}>[ YOUR PROJECT ]</h2>
                <h3 className="reveal" style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '1.5rem' }}>Have a Project <span className="gradient-text">in Mind?</span></h3>
                <p className="reveal" style={{ opacity: 0.6, maxWidth: '560px', margin: '0 auto 3rem' }}>
                    Whether it's a new POS, a website, a cloud migration, or automating the work your team does by hand, we'll scope it and give you a clear quote.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Start a Project <ArrowRight size={16} /></Link>
                    <Link to="/services" className="btn btn-secondary" style={{ padding: '1.2rem 3rem' }}>Browse Services</Link>
                </div>
            </section>
        </main>
    )
}

export default Portfolio
