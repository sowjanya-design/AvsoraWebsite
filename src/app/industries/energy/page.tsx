import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Energy & Utilities SAP Solutions | Avsora Software',
  description: 'SAP solutions for the energy and utilities sector.',
};

export default function EnergyIndustry() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/industry_banner_1790612409217.jpg" alt="Energy Industry" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Energy &amp; Utilities</h2>
      <p className="section-sub">Asset Management and Grid Optimization</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>The energy sector faces unique challenges in asset maintenance and grid management. Our SAP solutions help utilities optimize Enterprise Asset Management (EAM) and field service operations.</p>
        <p style={{ marginBottom: '16px' }}>By integrating IoT data with SAP BTP, we enable predictive maintenance models that extend asset lifecycles and ensure continuous service delivery to customers.</p>
      </div>
    </section>
  );
}
