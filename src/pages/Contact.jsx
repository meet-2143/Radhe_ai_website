import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Loader2 } from 'lucide-react'

const Contact = () => {
    const containerRef = useRef(null)
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

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
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            // Using Web3Forms - a free service for serverless forms
            // The destination email is mavanimeet71@gmail.com
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "7ca39139-e9f4-4f22-bc8e-3c051763c7fe", // User needs to replace this, or I can use a placeholder
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: "Radhe AI Website Inquiry"
                })
            })

            const result = await response.json()
            if (result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error("Form error:", error)
            setStatus('error')
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <main ref={containerRef}>
            <section className="hero" style={{ minHeight: '60vh' }}>
                <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>GET IN <span className="gradient-text">TOUCH</span></h1>
                <p className="reveal hero-p" style={{ maxWidth: '800px' }}>
                    Have a project in mind? We'd love to hear from you. Let's discuss
                    how we can build the next generation of your business together.
                </p>
            </section>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                <div className="reveal">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Let's start a <br /> <span className="gradient-text">Conversation</span></h2>
                    <p style={{ opacity: 0.6, marginBottom: '3rem' }}>
                        Whether you're looking for a consultation, a quote, or just want to
                        say hello, our team is ready to assist you.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div className="glass-card" style={{ padding: '1rem', borderRadius: '12px' }}><Mail color="hsl(var(--pc))" /></div>
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>EMAIL US</div>
                                <div style={{ fontSize: '1.1rem' }}>mavanimeet71@gmail.com</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div className="glass-card" style={{ padding: '1rem', borderRadius: '12px' }}><Phone color="hsl(var(--pc))" /></div>
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>CALL US</div>
                                <div style={{ fontSize: '1.1rem' }}>+91 7359788131</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div className="glass-card" style={{ padding: '1rem', borderRadius: '12px' }}><MapPin color="hsl(var(--pc))" /></div>
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>VISIT US</div>
                                <div style={{ fontSize: '1.1rem' }}>424, Apple square ,Yogichowk, Punagam,Surat 395010</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reveal glass-card" style={{ padding: '3rem' }}>
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <CheckCircle size={64} color="hsl(var(--sc))" style={{ marginBottom: '2rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Sent!</h2>
                            <p style={{ opacity: 0.6, marginBottom: '2rem' }}>Thank you for reaching out. We'll get back to you at mavanimeet71@gmail.com shortly.</p>
                            <button onClick={() => setStatus('idle')} className="btn btn-secondary">Send another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', opacity: 0.6 }}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '12px', color: 'white', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', opacity: 0.6 }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '12px', color: 'white', outline: 'none' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.8rem', opacity: 0.6 }}>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '12px', color: 'white', outline: 'none' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.8rem', opacity: 0.6 }}>Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '12px', color: 'white', outline: 'none', resize: 'none' }}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="btn btn-primary"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1.25rem' }}
                            >
                                {status === 'loading' ? (
                                    <>Sending... <Loader2 size={18} className="animate-spin" /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                            {status === 'error' && (
                                <p style={{ color: '#ff4444', fontSize: '0.8rem', textAlign: 'center' }}>Something went wrong. Please try again or email us directly.</p>
                            )}
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Contact
