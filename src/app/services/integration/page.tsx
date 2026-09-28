import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Integration & Automation | Avsora Software',
  description: 'Seamless integration using SAP Integration Suite, REST APIs, and AI-driven automation for connected ecosystems.',
};

export default function IntegrationService() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/integration_banner_1790612357029.jpg" alt="Integration & Automation" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Integration &amp; Automation</h2>
      <p className="section-sub">Connect Your Enterprise Ecosystem</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Break down data silos with robust SAP Integration Suite capabilities. We connect SAP with non-SAP systems, third-party APIs, and cloud applications to create a unified data landscape.</p>
        <p style={{ marginBottom: '16px' }}>Combined with our automation expertise, we streamline repetitive tasks, enabling your team to focus on strategic initiatives rather than manual data entry.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>SAP to Non-SAP seamless integrations</li>
          <li style={{ marginBottom: '8px' }}>API management and architecture</li>
          <li style={{ marginBottom: '8px' }}>Robotic Process Automation (RPA)</li>
        </ul>
      </div>
    </section>
  );
}
