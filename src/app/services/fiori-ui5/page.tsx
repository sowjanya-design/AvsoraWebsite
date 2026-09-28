import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fiori / UI5 Experience | Avsora Software',
  description: 'Intuitive SAP Fiori applications designed to enhance user productivity and streamline business workflows.',
};

export default function FioriService() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/fiori_banner_1790612317770.jpg" alt="Fiori & UI5 Experience" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Fiori / UI5 Experience</h2>
      <p className="section-sub">Modernize Your SAP User Experience</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Transform complex SAP transactions into simple, intuitive, and responsive role-based applications. Avsora Software specializes in designing and developing custom SAP Fiori and UI5 interfaces.</p>
        <p style={{ marginBottom: '16px' }}>By prioritizing the end-user experience, we significantly reduce training time, minimize data entry errors, and boost overall workforce productivity across desktop and mobile devices.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>Custom Fiori application development</li>
          <li style={{ marginBottom: '8px' }}>Role-based UX personalization</li>
          <li style={{ marginBottom: '8px' }}>Mobile-first responsive design</li>
        </ul>
      </div>
    </section>
  );
}
