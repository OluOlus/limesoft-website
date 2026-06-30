'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const fd = new FormData(e.currentTarget)
    const body = {
      firstName: fd.get('firstName'),
      lastName:  fd.get('lastName'),
      email:     fd.get('email'),
      company:   fd.get('company'),
      service:   fd.get('service'),
      message:   fd.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-12 rounded-full border border-cyan-neon/40 flex items-center justify-center mx-auto mb-6">
          <svg className="w-5 h-5 text-cyan-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold mb-2">Message sent</p>
        <p className="text-white/40 text-sm">We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">First Name</label>
          <input type="text" name="firstName" required placeholder="John"
            className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-neon transition-colors" />
        </div>
        <div>
          <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">Last Name</label>
          <input type="text" name="lastName" required placeholder="Doe"
            className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-neon transition-colors" />
        </div>
      </div>

      <div>
        <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">Email Address</label>
        <input type="email" name="email" required placeholder="john@company.com"
          className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-neon transition-colors" />
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">Organisation</label>
          <input type="text" name="company" placeholder="Your Company"
            className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-neon transition-colors" />
        </div>
        <div>
          <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">Service</label>
          <select name="service"
            className="w-full bg-[#09172e] border-b border-white/15 pb-3 text-white/60 text-sm focus:outline-none focus:border-cyan-neon transition-colors appearance-none cursor-pointer">
            <option value="">Select a service...</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Applications">Applications</option>
            <option value="Managed Services">Managed Services</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">Message</label>
        <textarea name="message" rows={6} required placeholder="Tell us about your project or challenge..."
          className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-neon transition-colors resize-none" />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-xs">Something went wrong — please try again or email us directly.</p>
      )}

      <div className="pt-2">
        <button type="submit" disabled={status === 'sending'}
          className="group inline-flex items-center gap-4 text-cyan-neon font-semibold text-sm tracking-wide hover:gap-6 transition-all duration-300 disabled:opacity-50">
          {status === 'sending' ? 'Sending…' : 'Send Message'}
          <span className="w-10 h-px bg-cyan-neon group-hover:w-16 transition-all duration-300" />
        </button>
      </div>
    </form>
  )
}
