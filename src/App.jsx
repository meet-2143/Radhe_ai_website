import { useEffect, useRef, Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll, getLenis } from './hooks/useSmoothScroll'
import { Menu, X, ChevronDown, MessageCircle, Phone } from 'lucide-react'
import { services, seoServices } from './data/servicesData'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const SEOServices = lazy(() => import('./pages/SEOServices'))
const SEOServiceDetail = lazy(() => import('./pages/SEOServiceDetail'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Results = lazy(() => import('./pages/Results'))
const Industries = lazy(() => import('./pages/Industries'))
const WhyUs = lazy(() => import('./pages/WhyUs'))

gsap.registerPlugin(ScrollTrigger)

const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        const lenis = getLenis()
        if (lenis) lenis.scrollTo(0, { immediate: true })
        else window.scrollTo(0, 0)
    }, [pathname])
    return null
}

const Navbar = ({ onToggle, isOpen }) => (
    <nav>
        <div className="nav-container shadow-pill">
            <Link to="/" style={{ fontSize: '1.1rem', fontWeight: '900', textDecoration: 'none', color: 'white', letterSpacing: '-0.02em' }}>
                RADHE<span className="gradient-text">AI</span>
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>

                {/* SEO Services dropdown */}
                <div className="nav-item-dropdown">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '500', opacity: 0.7, whiteSpace: 'nowrap' }}>
                        SEO Services <ChevronDown size={14} />
                    </span>
                    <div className="dropdown-menu" data-lenis-prevent>
                        {seoServices.map(svc => (
                            <Link key={svc.id} to={`/seo/${svc.id}`} className="dropdown-item">
                                <div style={{ color: svc.color }}><svc.icon size={18} /></div>
                                <div className="dropdown-item-content">
                                    <h5>{svc.title}</h5>
                                    <p>{svc.shortDesc}</p>
                                </div>
                            </Link>
                        ))}
                        <Link to="/seo-services" style={{ marginTop: '0.5rem', fontSize: '0.75rem', textAlign: 'center', opacity: 0.5, textDecoration: 'none', color: 'white', display: 'block', padding: '0.5rem' }}>
                            View All SEO Services →
                        </Link>
                    </div>
                </div>

                {/* Other Services dropdown */}
                <div className="nav-item-dropdown">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '500', opacity: 0.7 }}>
                        Services <ChevronDown size={14} />
                    </span>
                    <div className="dropdown-menu" data-lenis-prevent>
                        {services.filter(s => !['ai-ml', 'cloud-infra', 'cyber-security'].includes(s.id)).map(service => (
                            <Link key={service.id} to={`/service/${service.id}`} className="dropdown-item">
                                <div style={{ color: service.color }}><service.icon size={18} /></div>
                                <div className="dropdown-item-content">
                                    <h5>{service.title}</h5>
                                    <p>{service.shortDesc}</p>
                                </div>
                            </Link>
                        ))}
                        <Link to="/services" style={{ marginTop: '0.5rem', fontSize: '0.75rem', textAlign: 'center', opacity: 0.5, textDecoration: 'none', color: 'white', display: 'block', padding: '0.5rem' }}>
                            View All Services →
                        </Link>
                    </div>
                </div>

                <Link to="/results">Results</Link>
                <Link to="/why-us">Why Us</Link>
                <Link to="/portfolio">Work</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem', fontWeight: '700', borderRadius: '100px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    Contact Us
                </Link>
                <button className="menu-toggle" onClick={onToggle}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
    </nav>
)

const MobileNav = ({ isOpen, onToggle }) => (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`} data-lenis-prevent>
        <Link to="/" onClick={onToggle}>Home</Link>
        <Link to="/about" onClick={onToggle}>About Us</Link>
        <Link to="/why-us" onClick={onToggle}>Why Us</Link>
        <Link to="/results" onClick={onToggle}>Results</Link>
        <Link to="/industries" onClick={onToggle}>Industries</Link>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>SEO Services</span>
            <div className="mobile-services-grid">
                {seoServices.map(s => (
                    <Link key={s.id} to={`/seo/${s.id}`} onClick={onToggle} className="mobile-service-link">{s.title}</Link>
                ))}
            </div>
        </div>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Other Services</span>
            <div className="mobile-services-grid">
                {services.filter(s => !['ai-ml', 'cloud-infra', 'cyber-security'].includes(s.id)).map(s => (
                    <Link key={s.id} to={`/service/${s.id}`} onClick={onToggle} className="mobile-service-link">{s.title}</Link>
                ))}
            </div>
        </div>

        <Link to="/portfolio" onClick={onToggle} style={{ marginTop: '1rem' }}>Work</Link>
        <Link to="/contact" onClick={onToggle}>Contact</Link>
        <button className="btn btn-primary" onClick={() => { onToggle(); window.location.href = '/contact' }}>Contact Us</button>
    </div>
)

const Footer = () => (
    <footer style={{ background: 'hsl(var(--card))', paddingTop: '100px', borderTop: '1px solid var(--border)' }}>
        <div style={{ padding: '0 5% 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem' }}>
            <div style={{ gridColumn: 'span 2' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: 'white' }}>
                    RADHE<span className="gradient-text">AI</span>
                </Link>
                <p style={{ marginTop: '1.5rem', opacity: 0.6, maxWidth: '300px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                    SEO strategies built to generate leads, not just traffic. Serving SMEs across 12+ industries worldwide.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.75rem' }}>Contact Us</Link>
                    <Link to="/contact" className="btn btn-secondary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.75rem' }}>Hire SEO Experts</Link>
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--pc))', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {[['/', 'Home'], ['/about', 'About Us'], ['/why-us', 'Why Hire Us'], ['/results', 'Results & Proof'], ['/industries', 'Industries'], ['/portfolio', 'Case Studies'], ['/contact', 'Contact']].map(([to, label]) => (
                        <Link key={to} to={to} style={{ opacity: 0.6, textDecoration: 'none', color: 'white', fontSize: '0.9rem' }}>{label}</Link>
                    ))}
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--pc))', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SEO Services</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {seoServices.map(s => (
                        <Link key={s.id} to={`/seo/${s.id}`} style={{ opacity: 0.6, textDecoration: 'none', color: 'white', fontSize: '0.85rem' }}>{s.title}</Link>
                    ))}
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--pc))', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Other Services</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {services.filter(s => !['ai-ml', 'cloud-infra', 'cyber-security'].includes(s.id)).map(s => (
                        <Link key={s.id} to={`/service/${s.id}`} style={{ opacity: 0.6, textDecoration: 'none', color: 'white', fontSize: '0.85rem' }}>{s.title}</Link>
                    ))}
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--pc))', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', opacity: 0.6 }}>
                    <p>mavanimeet71@gmail.com</p>
                    <p>parthmavani101@gmail.com</p>
                    <p>+91 7359788131</p>
                    <p>424, Apple Square, Yogichowk,<br />Punagam, Surat 395010</p>
                </div>
                <a href="https://wa.me/917359788131" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', fontSize: '0.8rem', padding: '0.7rem 1.25rem', display: 'inline-flex', gap: '0.5rem' }}>
                    <MessageCircle size={16} /> WhatsApp Us
                </a>
            </div>
        </div>

        <div style={{ padding: '2rem 5%', borderTop: '1px solid hsla(0,0%,100%,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', opacity: 0.4, flexWrap: 'wrap', gap: '1rem' }}>
            <p>© 2026 Radhe AI. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    </footer>
)

// Sticky conversion CTAs
const StickyCTAs = () => (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 999 }}>
        <a href="https://wa.me/917359788131" target="_blank" rel="noopener noreferrer"
            title="Chat on WhatsApp"
            style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', transition: 'transform 0.2s ease', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <MessageCircle size={24} color="white" />
        </a>
        <a href="tel:+917359788131"
            title="Call Us"
            style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, hsl(var(--pc)), hsl(var(--sc)))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px hsla(var(--pc)/0.4)', transition: 'transform 0.2s ease', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <Phone size={22} color="white" />
        </a>
    </div>
)

const App = () => {
    useSmoothScroll()
    const cursorRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 })
        }
        window.addEventListener('mousemove', moveCursor)

        gsap.timeline().to('.preloader', { yPercent: -100, duration: 1.2, ease: 'power4.inOut', delay: 2 })

        return () => window.removeEventListener('mousemove', moveCursor)
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <div className="preloader">
                <div style={{ overflow: 'hidden' }}>
                    <h2 className="preloader-text">RADHE AI</h2>
                </div>
            </div>
            <div ref={cursorRef} className="custom-cursor" />

            <Navbar onToggle={toggleMenu} isOpen={isMenuOpen} />
            <MobileNav isOpen={isMenuOpen} onToggle={toggleMenu} />

            <Suspense fallback={<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/service/:id" element={<ServiceDetail />} />
                    <Route path="/seo-services" element={<SEOServices />} />
                    <Route path="/seo/:id" element={<SEOServiceDetail />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/why-us" element={<WhyUs />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                </Routes>
            </Suspense>

            <Footer />
            <StickyCTAs />
        </Router>
    )
}

export default App
