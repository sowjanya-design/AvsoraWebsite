"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import PrivacyModal from './PrivacyModal';

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer role="contentinfo">
        <div className="footer-grid container">
          <div className="footer-brand">
            <Image src="/logo2.png" alt="Avsora Software logo" width={100} height={36} style={{ height: '36px', width: 'auto', marginBottom: '12px' }} />
            <p>Enterprise SAP consulting delivering intelligent, scalable, and future-ready solutions powered by SAP BTP, AI, and S/4HANA.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/avsora_software" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram (@avsora_software)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>@avsora_software</span>
              </a>
              <a href="https://www.linkedin.com/company/avsora/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Avsora Software on LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <span>Avsora Software</span>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <Link href="/services/sap-s4hana">SAP S/4HANA</Link>
            <Link href="/services/sap-btp-ai">SAP BTP &amp; AI</Link>
            <Link href="/services/fiori-ui5">Fiori / UI5</Link>
            <Link href="/services/integration">Integration</Link>
            <Link href="/services/functional-consulting">Functional Consulting</Link>
          </div>
          <div className="footer-col">
            <h3>Company</h3>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <a href="mailto:Info@avsorasoftware.com">Info@avsorasoftware.com</a>
            <a href="tel:+917075481224">+91 7075481224</a>
            <p>Mon–Fri, 9 AM–6 PM IST</p>
          </div>
        </div>
        <div className="bottom container">
          <span>© 2026 Avsora Software. All rights reserved.</span>
          <div>
            <button onClick={() => setPrivacyOpen(true)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0, font: 'inherit' }}>Privacy Policy</button>
            &nbsp;·&nbsp;
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
