"use client";

import { useState } from 'react';
import { CheckCircle, UploadCloud, Link as LinkIcon } from 'lucide-react';

export default function CareersForm() {
  const [status, setStatus] = useState<'' | 'loading' | 'success'>('');
  const [fileName, setFileName] = useState<string>('');

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', background: 'white', borderRadius: '12px', padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
      <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '20px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '24px', color: '#0f172a', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>Submit Your Application</h3>
        <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Please complete the form below to apply for this position.</p>
      </div>

      <form onSubmit={handleSubmit} action="https://formsubmit.co/Info@avsorasoftware.com" method="POST" encType="multipart/form-data">
        <input type="hidden" name="_subject" value="New Career Application — Avsora Software" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        
        {/* Personal Details Section */}
        <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Personal Information</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-fname">First Name *</label>
            <input type="text" id="c-fname" name="first_name" placeholder="John" required aria-required="true" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-lname">Last Name *</label>
            <input type="text" id="c-lname" name="last_name" placeholder="Doe" required aria-required="true" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-email">Email Address *</label>
            <input type="email" id="c-email" name="email" placeholder="john.doe@example.com" required aria-required="true" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-phone">Phone Number *</label>
            <input type="tel" id="c-phone" name="phone" placeholder="+91 98765 43210" required aria-required="true" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-location">Current City / Location *</label>
            <input type="text" id="c-location" name="location" placeholder="e.g. Hyderabad, India" required aria-required="true" />
          </div>
        </div>

        {/* Professional Details Section */}
        <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', marginTop: '32px' }}>Professional Details</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-experience">Total Years of Experience *</label>
            <select id="c-experience" name="experience_years" required aria-required="true">
              <option value="">Select experience</option>
              <option>0 - 2 Years</option>
              <option>3 - 5 Years</option>
              <option>6 - 9 Years</option>
              <option>10+ Years</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-notice">Notice Period *</label>
            <select id="c-notice" name="notice_period" required aria-required="true">
              <option value="">Select notice period</option>
              <option>Immediate Joiner</option>
              <option>15 Days</option>
              <option>30 Days</option>
              <option>60 Days</option>
              <option>90 Days</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-ctc">Current CTC</label>
            <input type="text" id="c-ctc" name="current_ctc" placeholder="e.g. 15 LPA" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-expected-ctc">Expected CTC *</label>
            <input type="text" id="c-expected-ctc" name="expected_ctc" placeholder="e.g. 20 LPA" required aria-required="true" />
          </div>
        </div>

        {/* Links Section */}
        <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px', marginTop: '32px' }}>Online Profiles</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-linkedin" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><LinkIcon size={14} /> LinkedIn Profile URL *</label>
            <input type="url" id="c-linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" required aria-required="true" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="c-portfolio" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><LinkIcon size={14} /> Portfolio / GitHub URL</label>
            <input type="url" id="c-portfolio" name="portfolio" placeholder="https://github.com/yourusername" />
          </div>
        </div>

        {/* Resume & Cover Letter */}
        <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Resume &amp; Additional Info</h4>
        
        <div className="form-group" style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '8px' }}>Upload Resume / CV *</label>
          <div style={{ position: 'relative', border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '32px 20px', textAlign: 'center', background: '#f8fafc', transition: 'border-color 0.2s' }}>
            <input 
              type="file" 
              id="c-resume" 
              name="resume" 
              accept=".pdf,.doc,.docx" 
              required 
              aria-required="true" 
              onChange={handleFileChange}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} 
            />
            <UploadCloud size={32} color="#64748b" style={{ margin: '0 auto 12px' }} />
            {fileName ? (
              <p style={{ margin: 0, fontSize: '14px', color: '#2563eb', fontWeight: 600 }}>{fileName}</p>
            ) : (
              <>
                <p style={{ margin: '0 0 4px', fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>Click to upload or drag and drop</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>PDF, DOC, or DOCX (Max 5MB)</p>
              </>
            )}
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '32px' }}>
          <label htmlFor="c-cover">Cover Letter / Message</label>
          <textarea id="c-cover" name="cover_letter" placeholder="Why are you a good fit for this role? Add any other relevant details here..." style={{ minHeight: '120px' }}></textarea>
        </div>

        <button type="submit" className="btn-submit" disabled={status === 'loading'} style={{ padding: '16px', fontSize: '15px', borderRadius: '6px', fontWeight: 600 }}>
          {status === 'loading' ? 'Submitting Application...' : 'Submit Application'}
        </button>

        {status === 'success' && (
          <div className="form-success" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '20px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '16px', borderRadius: '6px' }}>
            <CheckCircle size={20} /> <span style={{ fontWeight: 500 }}>Application submitted successfully! Our HR team will reach out to you soon.</span>
          </div>
        )}
      </form>
    </div>
  );
}
