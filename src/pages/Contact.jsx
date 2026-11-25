import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const contactItems = [
    { icon: <Mail color="hsl(var(--pc))" />, label: 'EMAIL US', value: 'contact@radhe-ai.com', href: 'mailto:contact@radhe-ai.com' }
]

const Contact = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal', { y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '60vh' }}>
                <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>GET IN <span className="gradient-text">TOUCH</span></h1>
                <p className="reveal hero-p" style={{ maxWidth: '800px' }}>
                    Need IT support, a new website, a POS setup, or help moving to the cloud? Tell us what's going on
                    and we'll get back to you with practical next steps.
                </p>
            </section>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 500px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', padding: '80px 5%' }}>
                <div className="reveal">
                    <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '2rem', lineHeight: '1.1' }}>Let's Sort Out <br /> <span className="gradient-text">Your IT</span></h2>
                    <p style={{ opacity: 0.6, marginBottom: '3rem' }}>
                        Whether you need urgent help, a quote for a project, or advice on where to start,
                        our team is ready to help. Initial consultations are free.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {contactItems.map(item => {
                            const content = (
                                <>
                                    <div className="glass-card" style={{ padding: '1rem', borderRadius: '12px', flexShrink: 0 }}>{item.icon}</div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{item.label}</div>
                                        <div style={{ fontSize: '1.1rem' }}>{item.value}</div>
                                    </div>
                                </>
                            )
                            const rowStyle = { display: 'flex', gap: '1.5rem', alignItems: 'center', color: 'white', textDecoration: 'none' }
                            return item.href
                                ? <a key={item.label} href={item.href} style={rowStyle} {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{content}</a>
                                : <div key={item.label} style={rowStyle}>{content}</div>
                        })}
                    </div>
                </div>

                <div className="reveal glass-card" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                    <ContactForm source="Contact Page" submitLabel="Send Message" />
                </div>
            </section>
        </main>
    )
}

export default Contact
