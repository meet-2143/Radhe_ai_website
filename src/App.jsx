import { useEffect, useRef, Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll, getLenis } from './hooks/useSmoothScroll'
import { Menu, X, ChevronDown, MessageCircle, Mail } from 'lucide-react'
import { itServices, getServiceById, legacyServiceRedirects } from './data/servicesData'
import { CONTACT_EMAIL } from './data/siteConfig'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
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
            <Link to="/" aria-label="Maharshi Technologies home" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, textDecoration: 'none', color: 'white', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span style={{ fontSize: '1.1rem', fontWeight: '900', letterSpacing: '-0.02em' }}>MAHARSHI</span>
                <span className="gradient-text" style={{ fontSize: '0.55rem', fontWeight: '700', letterSpacing: '0.32em', marginTop: '0.2rem' }}>TECHNOLOGIES</span>
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>

                {/* Services mega-menu */}
                <div className="nav-item-dropdown has-mega">
                    <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        Services <ChevronDown size={14} />
                    </Link>
                    <div className="dropdown-menu mega-menu" data-lenis-prevent>
                        <div className="mega-grid">
                            {itServices.map(service => (
                                <Link key={service.id} to={`/services/${service.id}`} className="dropdown-item">
                                    <div style={{ color: service.color, flexShrink: 0, marginTop: '2px' }}><service.icon size={18} /></div>
                                    <div className="dropdown-item-content">
                                        <h5>{service.navTitle}</h5>
                                        <p>{service.shortDesc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link to="/services" className="mega-menu-footer">
                            View All IT Services →
                        </Link>
                    </div>
                </div>

                <Link to="/industries">Industries</Link>
                <Link to="/why-us">Why Us</Link>
                <Link to="/portfolio">Work</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem', fontWeight: '700', borderRadius: '100px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    Get IT Help
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
        <Link to="/industries" onClick={onToggle}>Industries</Link>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }}>
            <Link to="/services" onClick={onToggle} style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '0.1em' }}>IT Services</Link>
            <div className="mobile-services-grid">
                {itServices.map(s => (
                    <Link key={s.id} to={`/services/${s.id}`} onClick={onToggle} className="mobile-service-link">{s.navTitle}</Link>
                ))}
            </div>
        </div>

        <Link to="/portfolio" onClick={onToggle} style={{ marginTop: '1rem' }}>Work</Link>
        <Link to="/contact" onClick={onToggle}>Contact</Link>
        <Link to="/contact" onClick={onToggle} className="btn btn-primary">Get IT Help</Link>
    </div>
)

const footerLinkStyle = { opacity: 0.6, textDecoration: 'none', color: 'white', fontSize: '0.85rem' }
const footerHeadingStyle = { fontSize: '0.8rem', color: 'hsl(var(--pc))', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }

const Footer = () => (
    <footer style={{ background: 'hsl(var(--card))', paddingTop: '100px', borderTop: '1px solid var(--border)' }}>
        <div style={{ padding: '0 5% 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem' }}>
            <div style={{ gridColumn: 'span 2' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: 'white' }}>
                    MAHARSHI <span className="gradient-text">TECHNOLOGIES</span>
                </Link>
                <p style={{ marginTop: '1.5rem', opacity: 0.6, maxWidth: '320px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                    Complete IT services for small businesses and eCommerce: support, websites, online stores, cloud, cybersecurity, POS, automation and more.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.75rem' }}>Contact Us</Link>
                    <Link to="/services" className="btn btn-secondary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.75rem' }}>Our Services</Link>
                </div>
            </div>

            <div>
                <h4 style={footerHeadingStyle}>Company</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {[['/', 'Home'], ['/about', 'About Us'], ['/why-us', 'Why Choose Us'], ['/industries', 'Industries'], ['/portfolio', 'Our Work'], ['/contact', 'Contact']].map(([to, label]) => (
                        <Link key={to} to={to} style={{ ...footerLinkStyle, fontSize: '0.9rem' }}>{label}</Link>
                    ))}
                </div>
            </div>

            <div>
                <h4 style={footerHeadingStyle}>IT Services</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {itServices.slice(0, 6).map(s => (
                        <Link key={s.id} to={`/services/${s.id}`} style={footerLinkStyle}>{s.navTitle}</Link>
                    ))}
                </div>
            </div>

            <div>
                <h4 style={footerHeadingStyle}>More Services</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {itServices.slice(6).map(s => (
                        <Link key={s.id} to={`/services/${s.id}`} style={footerLinkStyle}>{s.navTitle}</Link>
                    ))}
                </div>
            </div>

            <div>
                <h4 style={footerHeadingStyle}>Contact</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', opacity: 0.6 }}>
                    <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'inherit', textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
                </div>
                <Link to="/contact" className="btn btn-secondary" style={{ marginTop: '1.5rem', fontSize: '0.8rem', padding: '0.7rem 1.25rem', display: 'inline-flex', gap: '0.5rem' }}>
                    <MessageCircle size={16} /> Send an Enquiry
                </Link>
            </div>
        </div>

        <div style={{ padding: '2rem 5%', borderTop: '1px solid hsla(0,0%,100%,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', opacity: 0.4, flexWrap: 'wrap', gap: '1rem' }}>
            <p>© 2026 Maharshi Technologies. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    </footer>
)

// Old /seo/:id and /service/:id URLs → matching new service page
const LegacyServiceRedirect = () => {
    const { id } = useParams()
    const target = getServiceById(id) ? id : legacyServiceRedirects[id]
    return <Navigate to={target ? `/services/${target}` : '/services'} replace />
}

// Sticky conversion CTAs
const StickyCTAs = () => (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 999 }}>
        <a href={`mailto:${CONTACT_EMAIL}`}
            title="Email Us"
            style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, hsl(var(--pc)), hsl(var(--sc)))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px hsla(var(--pc)/0.4)', transition: 'transform 0.2s ease', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <Mail size={22} color="white" />
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
                    <h2 className="preloader-text">MAHARSHI TECHNOLOGIES</h2>
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
                    <Route path="/services/:id" element={<ServiceDetail />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/why-us" element={<WhyUs />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />

                    {/* Legacy URLs from the previous SEO-focused site */}
                    <Route path="/service/:id" element={<LegacyServiceRedirect />} />
                    <Route path="/seo/:id" element={<LegacyServiceRedirect />} />
                    <Route path="/seo-services" element={<Navigate to="/services" replace />} />
                    <Route path="/results" element={<Navigate to="/portfolio" replace />} />
                </Routes>
            </Suspense>

            <Footer />
            <StickyCTAs />
        </Router>
    )
}

export default App
