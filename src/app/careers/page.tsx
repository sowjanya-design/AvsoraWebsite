import type { Metadata } from 'next';
import CareersForm from '@/components/sections/CareersForm';
import { Rocket, BookOpen, TrendingUp, Briefcase, MapPin, Clock } from 'lucide-react';

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
            <div className="card-icon"><Rocket size={28} /></div>
            <b>Innovative Projects</b>
            <p>Work on advanced SAP BTP, AI, and S/4HANA engagements delivering real business impact for enterprise clients.</p>
          </div>
          <div className="card">
            <div className="card-icon"><BookOpen size={28} /></div>
            <b>Learning &amp; Certification</b>
            <p>Continuous upskilling through exposure to the latest SAP technologies, paid certifications, and industry best practices.</p>
          </div>
          <div className="card">
            <div className="card-icon"><TrendingUp size={28} /></div>
            <b>Career Growth</b>
            <p>Structured progression with mentorship, performance-driven growth, and clear pathways to leadership roles.</p>
          </div>
        </div>
        
        <div style={{ marginTop: '60px', marginBottom: '60px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '24px', letterSpacing: '-0.5px' }}>Open Positions</h3>
          
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '10px' }}>Senior SAP CPI Integration Expert</h4>
                <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '13px', flexWrap: 'wrap', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Briefcase size={16} /> 10+ Years Experience</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> Remote / Hybrid</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> Full-Time</span>
                </div>
              </div>
              <a href="#careers-form" className="btn-primary" style={{ padding: '10px 24px', fontSize: '13px', borderRadius: '4px' }}>Apply Now</a>
            </div>
            
            <div style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              <p style={{ marginBottom: '20px' }}>We are seeking a highly skilled Senior SAP Integration Expert with 10+ years of experience in SAP integration technologies to join our team. The ideal candidate will architect, design, and implement end-to-end integration solutions within complex SAP and non-SAP landscapes using the SAP BTP Integration Suite.</p>
              
              <b style={{ color: '#0f172a', display: 'block', marginBottom: '10px', fontSize: '15px' }}>Key Responsibilities:</b>
              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px' }}>Lead the design and implementation of scalable integration architectures for cloud, hybrid, and on-premise environments (e.g., S/4HANA transformations).</li>
                <li style={{ marginBottom: '8px' }}>Design, develop, test, and deploy complex integration flows (iFlows) using SAP Cloud Platform Integration (CPI).</li>
                <li style={{ marginBottom: '8px' }}>Act as a subject matter expert (SME) for SAP Integration Suite, including API Management, Event Mesh, and Open Connectors.</li>
                <li style={{ marginBottom: '8px' }}>Define and maintain reusable integration patterns, technical standards, and governance procedures.</li>
              </ul>
              
              <b style={{ color: '#0f172a', display: 'block', marginBottom: '10px', fontSize: '15px' }}>Required Skills &amp; Experience:</b>
              <ul style={{ paddingLeft: '20px', marginBottom: '0' }}>
                <li style={{ marginBottom: '8px' }}><strong>10+ years</strong> of total experience in SAP integration, with at least 4–5+ years of extensive, hands-on experience in SAP Cloud Integration (CPI) / Integration Suite.</li>
                <li style={{ marginBottom: '8px' }}>Solid background in SAP PI/PO (migration experience from PI/PO to CPI is highly desirable).</li>
                <li style={{ marginBottom: '8px' }}>Expert-level knowledge of Graphical Mapping, XSLT, Java, and Groovy scripting.</li>
                <li style={{ marginBottom: '8px' }}>In-depth knowledge of adapters (OData, REST, SOAP, IDoc, RFC, SFTP, HTTP) and security artifacts (OAuth, SAML, SSL/TLS).</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div id="careers-form">
          <CareersForm />
        </div>
        
      </div>
    </section>
  );
}
