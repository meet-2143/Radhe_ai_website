import React, { useEffect, useRef, Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Menu, X } from 'lucide-react'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

gsap.registerPlugin(ScrollTrigger)

const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
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
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Work</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{
                    padding: '0.6rem 1.5rem',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    borderRadius: '100px'
                }}>
                    Get Started
                </Link>

                <button className="menu-toggle" onClick={onToggle}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
    </nav>
)

const MobileNav = ({ isOpen, onToggle }) => (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={onToggle}>Home</Link>
        <Link to="/about" onClick={onToggle}>About Us</Link>
        <Link to="/services" onClick={onToggle}>Services</Link>
        <Link to="/portfolio" onClick={onToggle}>Work</Link>
        <Link to="/contact" onClick={onToggle}>Contact</Link>
        <button className="btn btn-primary" onClick={() => { onToggle(); window.location.href = '/contact' }}>Get Started</button>
    </div>
)

const Footer = () => (
    <footer style={{ background: 'hsl(var(--card))', paddingTop: '100px', borderTop: '1px solid var(--border)' }}>
        <div style={{ padding: '0 5% 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
            <div style={{ gridColumn: 'span 2' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: 'white' }}>
                    RADHE<span className="gradient-text">AI</span>
                </Link>
                <p style={{ marginTop: '1.5rem', opacity: 0.6, maxWidth: '300px', lineHeight: '1.6' }}>
                    Providing cutting-edge AI architectures and secure digital transformations for global enterprises.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                    {/* Placeholder social icons for cleaner look */}
                    <span style={{ opacity: 0.5, cursor: 'pointer', hover: { opacity: 1 } }}>Twitter</span>
                    <span style={{ opacity: 0.5, cursor: 'pointer' }}>LinkedIn</span>
                    <span style={{ opacity: 0.5, cursor: 'pointer' }}>Dribbble</span>
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '0.9rem', color: 'hsl(var(--pc))', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Navigation</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link to="/" style={{ opacity: 0.6, textDecoration: 'none', color: 'white' }}>Home</Link>
                    <Link to="/about" style={{ opacity: 0.6, textDecoration: 'none', color: 'white' }}>About Us</Link>
                    <Link to="/services" style={{ opacity: 0.6, textDecoration: 'none', color: 'white' }}>Services</Link>
                    <Link to="/portfolio" style={{ opacity: 0.6, textDecoration: 'none', color: 'white' }}>Our Work</Link>
                    <Link to="/contact" style={{ opacity: 0.6, textDecoration: 'none', color: 'white' }}>Contact</Link>
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '0.9rem', color: 'hsl(var(--pc))', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <span style={{ opacity: 0.6 }}>AI & Neural Networks</span>
                    <span style={{ opacity: 0.6 }}>Cloud Infrastructure</span>
                    <span style={{ opacity: 0.6 }}>Cyber Security</span>
                    <span style={{ opacity: 0.6 }}>Custom Software</span>
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '0.9rem', color: 'hsl(var(--pc))', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', opacity: 0.6 }}>
                    <p>mavanimeet71@gmail.com</p>
                    <p>+91 7359788131</p>
                    <p>424, Apple square ,Yogichowk,<br />Punagam,Surat 395010</p>
                </div>
            </div>
        </div>

        <div style={{ padding: '2rem 5%', borderTop: '1px solid hsla(0, 0%, 100%, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', opacity: 0.4 }}>
            <p>© 2026 Radhe AI. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    </footer>
)

const App = () => {
    useSmoothScroll()
    const cursorRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    useEffect(() => {
        // Custom Cursor Logic
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            })
        }
        window.addEventListener('mousemove', moveCursor)

        // Preloader Animation
        const preloaderTimeline = gsap.timeline()
        preloaderTimeline.to('.preloader', {
            yPercent: -100,
            duration: 1.2,
            ease: 'power4.inOut',
            delay: 2
        })

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
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
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                </Routes>
            </Suspense>

            <Footer />
        </Router>
    )
}

export default App
