import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Healthcare SAP Solutions | Avsora Software',
  description: 'SAP solutions for healthcare and pharmaceuticals.',
};

export default function HealthcareIndustry() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/industry_banner_1790612409217.jpg" alt="Healthcare Industry" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Healthcare &amp; Pharma</h2>
      <p className="section-sub">Traceability, Compliance, and Patient Care</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>In healthcare and pharmaceuticals, data accuracy and traceability are matters of public safety. Avsora's SAP solutions provide end-to-end batch traceability and strict compliance management.</p>
        <p style={{ marginBottom: '16px' }}>By optimizing supply chains and administrative workflows, we help healthcare providers focus on what matters most: patient care.</p>
      </div>
    </section>
  );
}
