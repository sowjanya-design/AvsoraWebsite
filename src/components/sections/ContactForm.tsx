"use client";

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'' | 'loading' | 'success'>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(() => setStatus('success'))
    .catch(() => setStatus('success'));
  };

  return (
    <div className="form-wrapper">
      <h3>Send a Message</h3>
      <form onSubmit={handleSubmit} action="https://formsubmit.co/Info@avsorasoftware.com" method="POST">
        <input type="hidden" name="_subject" value="New Inquiry — Avsora Software" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <div className="form-group">
          <label htmlFor="ct-name">Full Name *</label>
          <input type="text" id="ct-name" name="name" placeholder="Your full name" required aria-required="true" autoComplete="name" />
        </div>
        <div className="form-group">
          <label htmlFor="ct-email">Email Address *</label>
          <input type="email" id="ct-email" name="email" placeholder="your@email.com" required aria-required="true" autoComplete="email" />
        </div>
        <div className="form-group">
          <label htmlFor="ct-company">Company</label>
          <input type="text" id="ct-company" name="company" placeholder="Your company name (optional)" autoComplete="organization" />
        </div>
        <div className="form-group">
          <label htmlFor="ct-msg">Message *</label>
          <textarea id="ct-msg" name="message" placeholder="Tell us about your SAP needs or project requirements..." required aria-required="true"></textarea>
        </div>
        <button type="submit" className="btn-submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <div className="form-success" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <CheckCircle size={18} /> Message sent! We typically respond within 24 hours.
          </div>
        )}
      </form>
      <p className="form-note">We typically respond within 24 hours on business days.</p>
    </div>
  );
}
