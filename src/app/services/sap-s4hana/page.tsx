import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SAP S/4HANA Implementation | Avsora Software',
  description: 'Greenfield, Brownfield, and hybrid migrations with optimized processes across FI, SD, and MM modules.',
};

export default function S4HanaService() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/s4hana_banner_1790612208910.jpg" alt="SAP S/4HANA Implementation" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>SAP S/4HANA Implementation</h2>
      <p className="section-sub">End-to-End Core Enterprise Transformation</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Whether you are planning a Greenfield implementation or a Brownfield migration, Avsora Software delivers tailored SAP S/4HANA solutions designed to accelerate your digital transformation.</p>
        <p style={{ marginBottom: '16px' }}>Our deep functional expertise across Finance (FI), Sales & Distribution (SD), and Materials Management (MM) ensures that your core business processes are optimized, integrated, and ready for the future.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>Seamless legacy data migration</li>
          <li style={{ marginBottom: '8px' }}>Process optimization and redesign</li>
          <li style={{ marginBottom: '8px' }}>Real-time analytics and reporting</li>
        </ul>
      </div>
    </section>
  );
}
