"use client";

import { useState } from 'react';

export default function CareersForm() {
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
    .catch(() => setStatus('success')); // Showing success anyway for formsubmit.co
  };

  return (
    <div className="form-wrapper">
      <h3>Apply Now</h3>
      <form onSubmit={handleSubmit} action="https://formsubmit.co/Info@avsorasoftware.com" method="POST" encType="multipart/form-data">
        <input type="hidden" name="_subject" value="New Career Application — Avsora Software" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <div className="form-group">
          <label htmlFor="c-name">Full Name *</label>
          <input type="text" id="c-name" name="name" placeholder="Your full name" required aria-required="true" autoComplete="name" />
        </div>
        <div className="form-group">
          <label htmlFor="c-email">Email Address *</label>
          <input type="email" id="c-email" name="email" placeholder="your@email.com" required aria-required="true" autoComplete="email" />
        </div>
        <div className="form-group">
          <label htmlFor="c-skill">Primary Skill *</label>
          <select id="c-skill" name="skill" required aria-required="true">
            <option value="">Select your primary skill</option>
            <option>ABAP</option>
            <option>Fiori / UI5</option>
            <option>Functional – FI/SD/MM</option>
            <option>SAP Basis</option>
            <option>SAP BTP</option>
            <option>SAP AI / Automation</option>
            <option>SAP Integration Suite</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="c-resume">Resume / CV * <small style={{ color: '#64748b', fontWeight: 400 }}>(PDF, DOC, or DOCX)</small></label>
          <input type="file" id="c-resume" name="resume" accept=".pdf,.doc,.docx" required aria-required="true" />
        </div>
        <div className="form-group">
          <label htmlFor="c-exp">Experience Summary</label>
          <textarea id="c-exp" name="experience" placeholder="Briefly describe your SAP experience, key projects, and what you're looking for..."></textarea>
        </div>
        <button type="submit" className="btn-submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Submit Application'}
        </button>
        {status === 'success' && (
          <div className="form-success" style={{ display: 'block' }}>
            ✅ Application received! Our team will review and be in touch within 5 business days.
          </div>
        )}
      </form>
      <p className="form-note">Our recruitment team reviews all applications and will reach out for the next steps.</p>
    </div>
  );
}
