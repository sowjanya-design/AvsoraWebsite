import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Manufacturing SAP Solutions | Avsora Software',
  description: 'SAP solutions tailored for the manufacturing industry to improve efficiency, supply chain, and production planning.',
};

export default function ManufacturingIndustry() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/industry_banner_1790612409217.jpg" alt="Manufacturing Industry" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Manufacturing Industry</h2>
      <p className="section-sub">Optimizing Production and Supply Chain</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Avsora Software helps manufacturing enterprises streamline their operations using SAP S/4HANA. From shop floor to top floor, we ensure your data is integrated and actionable.</p>
        <p style={{ marginBottom: '16px' }}>Our AI-driven analytics provide predictive maintenance insights, reducing downtime and optimizing Overall Equipment Effectiveness (OEE).</p>
      </div>
    </section>
  );
}
