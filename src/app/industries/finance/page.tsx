import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Finance SAP Solutions | Avsora Software',
  description: 'SAP solutions for the finance and banking sector.',
};

export default function FinanceIndustry() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/industry_banner_1790612409217.jpg" alt="Finance Industry" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Finance &amp; Banking</h2>
      <p className="section-sub">Compliance, Security, and Real-Time Reporting</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Financial institutions require absolute precision, security, and compliance. Our SAP S/4HANA Finance (FI) implementations deliver real-time financial reporting and streamlined closing processes.</p>
        <p style={{ marginBottom: '16px' }}>We help organizations automate their financial workflows, ensuring regulatory compliance while providing actionable insights for strategic planning.</p>
      </div>
    </section>
  );
}
