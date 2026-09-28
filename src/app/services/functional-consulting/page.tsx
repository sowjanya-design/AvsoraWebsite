import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Functional Consulting | Avsora Software',
  description: 'Deep domain expertise across Finance (FI), Sales & Distribution (SD), and Materials Management (MM).',
};

export default function FunctionalService() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/functional_banner_1790612384025.jpg" alt="Functional Consulting" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Functional Consulting</h2>
      <p className="section-sub">Deep Domain Expertise across Core Modules</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Technology is only as good as the business processes it supports. Our functional consultants bring decades of industry-specific experience in bridging the gap between business requirements and SAP capabilities.</p>
        <p style={{ marginBottom: '16px' }}>We specialize in optimizing Financial Accounting (FI), Sales & Distribution (SD), and Materials Management (MM) to ensure compliance, efficiency, and scalability.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>Business process mapping and blueprinting</li>
          <li style={{ marginBottom: '8px' }}>System configuration and customization</li>
          <li style={{ marginBottom: '8px' }}>User training and change management</li>
        </ul>
      </div>
    </section>
  );
}
