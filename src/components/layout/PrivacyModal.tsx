"use client";

import { useEffect } from 'react';

export default function PrivacyModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" role="dialog" aria-labelledby="privacy-title" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h3 id="privacy-title">Privacy Policy</h3>
        <p><strong>Last updated:</strong> June 2026</p>
        <p>Avsora Software ("we", "our", or "us") is committed to protecting your personal information. This policy describes how we collect, use, and safeguard data submitted through this website.</p>
        <p><strong>Information We Collect</strong></p>
        <ul>
          <li>Contact inquiries: name, email, company name, and message content</li>
          <li>Career applications: name, email, skill area, resume file, and experience description</li>
        </ul>
        <p><strong>How We Use Your Data</strong></p>
        <ul>
          <li>To respond to your service inquiries and consultation requests</li>
          <li>To process and evaluate career applications</li>
          <li>We do not sell, rent, or share your data with third parties for marketing purposes</li>
        </ul>
        <p><strong>Data Storage</strong></p>
        <p>Form submissions are processed via FormSubmit.co. We retain submission data only as long as necessary for the stated purpose.</p>
        <p><strong>Your Rights</strong></p>
        <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us.</p>
        <p><strong>Contact</strong></p>
        <p>For privacy-related queries: <a href="mailto:Info@avsorasoftware.com" style={{ color: '#2563eb' }}>Info@avsorasoftware.com</a></p>
      </div>
    </div>
  );
}
