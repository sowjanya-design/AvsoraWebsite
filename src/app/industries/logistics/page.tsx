import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Logistics SAP Solutions | Avsora Software',
  description: 'SAP solutions for logistics and supply chain optimization.',
};

export default function LogisticsIndustry() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/industry_banner_1790612409217.jpg" alt="Logistics Industry" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Logistics &amp; Supply Chain</h2>
      <p className="section-sub">End-to-End Supply Chain Visibility</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Avsora Software provides comprehensive SAP logistics solutions that optimize routing, reduce transportation costs, and improve delivery accuracy.</p>
        <p style={{ marginBottom: '16px' }}>Leveraging SAP BTP and predictive analytics, we enable real-time tracking and automated anomaly detection to prevent supply chain disruptions before they occur.</p>
      </div>
    </section>
  );
}
