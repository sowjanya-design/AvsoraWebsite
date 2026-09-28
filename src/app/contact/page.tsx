import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Avsora Software',
  description: 'Ready to start your SAP transformation? Reach out for project consultations, service inquiries, or partnership opportunities.',
};

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'white' }} aria-labelledby="contact-h">
      <div className="container">
        <h2 id="contact-h">Get In Touch</h2>
        <p className="section-sub">Ready to start your SAP transformation? Reach out for project consultations, service inquiries, or partnership opportunities.</p>
        <div className="grid" style={{ marginBottom: '36px' }}>
          <div className="card contact-card">
            <div className="contact-icon"><Mail size={32} /></div>
            <b>Email Us</b>
            <p><a href="mailto:Info@avsorasoftware.com">Info@avsorasoftware.com</a></p>
          </div>
          <div className="card contact-card">
            <div className="contact-icon"><Phone size={32} /></div>
            <b>Call Us</b>
            <p><a href="tel:+917075481224">+91 7075481224</a></p>
          </div>
          <div className="card contact-card">
            <div className="contact-icon"><Clock size={32} /></div>
            <b>Business Hours</b>
            <p>Mon – Fri, 9:00 AM – 6:00 PM IST</p>
          </div>
        </div>
        
        <ContactForm />

      </div>
    </section>
  );
}
