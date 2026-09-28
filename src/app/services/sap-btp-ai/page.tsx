import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SAP BTP & AI Solutions | Avsora Software',
  description: 'Intelligent applications using SAP BTP with AI, automation, and advanced analytics to drive business agility.',
};

export default function BtpAiService() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/ai_banner_1790612233105.jpg" alt="SAP BTP & AI Solutions" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>SAP BTP &amp; AI Solutions</h2>
      <p className="section-sub">Build, Integrate, and Innovate with AI</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Unlock the true potential of the SAP Business Technology Platform (BTP). We help organizations build extensions, integrate systems, and embed Artificial Intelligence directly into their business processes.</p>
        <p style={{ marginBottom: '16px' }}>From predictive analytics to intelligent automation, our BTP and AI solutions empower your workforce and optimize decision-making at scale.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>Custom application development on BTP</li>
          <li style={{ marginBottom: '8px' }}>Generative AI and machine learning integration</li>
          <li style={{ marginBottom: '8px' }}>Enterprise-wide automation workflows</li>
        </ul>
      </div>
    </section>
  );
}
