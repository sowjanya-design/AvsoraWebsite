import type { Metadata } from 'next';
import CareersForm from '@/components/sections/CareersForm';

export const metadata: Metadata = {
  title: 'Careers | Avsora Software',
  description: 'Join our growing team and work on cutting-edge SAP BTP, AI, and S/4HANA projects.',
};

export default function Careers() {
  return (
    <section id="careers" style={{ background: '#f8fafc' }} aria-labelledby="careers-h">
      <div className="container">
        <h2 id="careers-h">Careers</h2>
        <p className="section-sub">Join our growing team and work on cutting-edge SAP BTP, AI, and S/4HANA projects. We offer a collaborative environment with strong learning and growth opportunities.</p>
        <div className="grid" style={{ marginBottom: '36px' }}>
          <div className="card">
            <div className="card-icon">🚀</div>
            <b>Innovative Projects</b>
            <p>Work on advanced SAP BTP, AI, and S/4HANA engagements delivering real business impact for enterprise clients.</p>
          </div>
          <div className="card">
            <div className="card-icon">📚</div>
            <b>Learning &amp; Certification</b>
            <p>Continuous upskilling through exposure to the latest SAP technologies, paid certifications, and industry best practices.</p>
          </div>
          <div className="card">
            <div className="card-icon">📈</div>
            <b>Career Growth</b>
            <p>Structured progression with mentorship, performance-driven growth, and clear pathways to leadership roles.</p>
          </div>
        </div>
        
        <CareersForm />
        
      </div>
    </section>
  );
}
