"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import PrivacyModal from './PrivacyModal';
import { Instagram, Linkedin } from 'lucide-react';

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
                <Instagram size={18} />
                <span>@avsora_software</span>
              </a>
              <a href="https://www.linkedin.com/company/avsora-software" target="_blank" rel="noopener noreferrer" aria-label="Connect with Avsora Software on LinkedIn">
                <Linkedin size={18} />
                <span>Avsora Software</span>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <Link href="/services">SAP S/4HANA</Link>
            <Link href="/services">SAP BTP &amp; AI</Link>
            <Link href="/services">Fiori / UI5</Link>
            <Link href="/services">Integration</Link>
            <Link href="/services">Functional Consulting</Link>
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
