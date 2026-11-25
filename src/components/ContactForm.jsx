import { useState } from 'react'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { itServices } from '../data/servicesData'

// Set in .env (see .env.example). The WEB3FORMS_ prefix is allowed in vite.config.js (envPrefix).
const WEB3FORMS_ACCESS_KEY = import.meta.env.WEB3FORMS_ACCESS_KEY
const NOT_SURE = 'Not sure, need a recommendation'

const inputStyle = {
    background: 'hsla(0,0%,100%,0.05)', border: '1px solid var(--glass-border)',
    padding: '0.9rem 1.1rem', borderRadius: '12px', color: 'white',
    outline: 'none', width: '100%', fontSize: '0.9rem', fontFamily: 'Inter'
}
const labelStyle = { fontSize: '0.72rem', opacity: 0.5, letterSpacing: '0.08em' }
const fieldStyle = { display: 'flex', flexDirection: 'column', gap: '0.4rem' }
const optionStyle = { background: '#0a0a0f' }

/**
 * Enquiry form shared by the Contact, Services and Service Detail pages.
 * Submissions are sent through Web3Forms.
 */
const ContactForm = ({ source = 'Website Inquiry', defaultService = '', submitLabel = 'Send Enquiry' }) => {
    const emptyForm = { name: '', email: '', phone: '', service: defaultService, message: '' }
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [form, setForm] = useState(emptyForm)
    const [submittedEmail, setSubmittedEmail] = useState('')

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        if (!WEB3FORMS_ACCESS_KEY) {
            console.error('WEB3FORMS_ACCESS_KEY is not set. Add it to .env and restart the dev server.')
            setStatus('error')
            return
        }
        setStatus('loading')
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    from_name: `Maharshi Technologies | ${source}`,
                    subject: `IT enquiry: ${form.service || 'General'}`,
                    ...form
                })
            })
            const result = await res.json()
            if (result.success) {
                setSubmittedEmail(form.email)
                setForm(emptyForm)
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    if (status === 'success') return (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <CheckCircle size={52} color="hsl(var(--sc))" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Message Sent!</h3>
            <p style={{ opacity: 0.6, marginBottom: '2rem' }}>
                Thanks for getting in touch. We'll reply to <strong style={{ color: 'white' }}>{submittedEmail}</strong> within 24 hours.
            </p>
            <button onClick={() => setStatus('idle')} className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>Send Another</button>
        </div>
    )

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={fieldStyle}>
                    <label htmlFor="cf-name" style={labelStyle}>YOUR NAME</label>
                    <input id="cf-name" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} />
                </div>
                <div style={fieldStyle}>
                    <label htmlFor="cf-email" style={labelStyle}>EMAIL ADDRESS</label>
                    <input id="cf-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@business.com" style={inputStyle} />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={fieldStyle}>
                    <label htmlFor="cf-phone" style={labelStyle}>PHONE (OPTIONAL)</label>
                    <input id="cf-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Best number to reach you" style={inputStyle} />
                </div>
                <div style={fieldStyle}>
                    <label htmlFor="cf-service" style={labelStyle}>SERVICE NEEDED</label>
                    <select id="cf-service" name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="" style={optionStyle}>Select a service...</option>
                        {itServices.map(s => <option key={s.id} value={s.title} style={optionStyle}>{s.title}</option>)}
                        <option value={NOT_SURE} style={optionStyle}>{NOT_SURE}</option>
                    </select>
                </div>
            </div>
            <div style={fieldStyle}>
                <label htmlFor="cf-message" style={labelStyle}>HOW CAN WE HELP?</label>
                <textarea id="cf-message" name="message" rows={4} required value={form.message} onChange={handleChange}
                    placeholder="e.g. Our shop's POS keeps dropping off the network, and we'd like to start selling online..."
                    style={{ ...inputStyle, resize: 'none' }} />
            </div>
            <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ padding: '1rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={16} /> {submitLabel}</>}
            </button>
            {status === 'error' && <p style={{ color: '#ff4444', fontSize: '0.8rem', textAlign: 'center' }}>Something went wrong. Please try again or email us directly.</p>}
        </form>
    )
}

export default ContactForm
