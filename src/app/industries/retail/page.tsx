import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Retail SAP Solutions | Avsora Software',
  description: 'SAP solutions for the retail industry to enhance customer experience, inventory management, and omnichannel fulfillment.',
};

export default function RetailIndustry() {
  return (
    <section className="container">
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
        <Image src="/images/industry_banner_1790612409217.jpg" alt="Retail Industry" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <h2>Retail &amp; E-Commerce</h2>
      <p className="section-sub">Enhancing Customer Experience and Inventory Management</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>In the fast-paced retail sector, real-time inventory visibility and omnichannel fulfillment are critical. Avsora's SAP solutions provide the agility retailers need to adapt to changing consumer demands.</p>
        <p style={{ marginBottom: '16px' }}>We implement custom Fiori dashboards and BTP integrations to create seamless, personalized shopping experiences while maintaining robust backend inventory control.</p>
      </div>
    </section>
  );
}
