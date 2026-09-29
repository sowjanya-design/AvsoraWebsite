import type { Metadata } from 'next';
import CareersForm from '@/components/sections/CareersForm';
import { Rocket, BookOpen, TrendingUp, Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
        
        <div style={{ marginTop: '60px', marginBottom: '80px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '24px', letterSpacing: '-0.5px', textAlign: 'center' }}>Open Positions</h3>
          
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', transition: 'all 0.2s', cursor: 'pointer', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', marginBottom: '12px' }}>Senior SAP CPI Integration Expert</h4>
                <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '13px', flexWrap: 'wrap', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Briefcase size={16} /> 10+ Years Exp.</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> Remote / Hybrid</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> Full-Time</span>
                </div>
              </div>
              <Link href="/careers/sap-cpi-integration-expert" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 24px', background: '#2563eb', color: 'white', fontSize: '13px', borderRadius: '4px', textDecoration: 'none', fontWeight: '500' }}>
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
