import type { Metadata } from 'next';
import CareersForm from '@/components/sections/CareersForm';
import { Briefcase, MapPin, Clock, Building2, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Senior SAP CPI Integration Expert | Careers',
  description: 'Apply for the Senior SAP CPI Integration Expert role at Avsora Software.',
};

export default function JobPosting() {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>
          <Link href="/careers" style={{ color: '#2563eb', textDecoration: 'none' }}>Careers</Link>
          <ChevronRight size={14} />
          <span>Senior SAP CPI Integration Expert</span>
        </div>

        {/* Job Header */}
        <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Senior SAP CPI Integration Expert</h1>
          
          <div style={{ display: 'flex', gap: '24px', color: '#475569', fontSize: '14px', flexWrap: 'wrap', fontWeight: '500', marginBottom: '32px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Briefcase size={18} color="#2563eb" /> 10+ Years Experience</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={18} color="#2563eb" /> Remote / Hybrid (India)</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={18} color="#2563eb" /> Full-Time</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Building2 size={18} color="#2563eb" /> Integration Services</span>
          </div>

          <a href="#apply" className="btn-primary" style={{ padding: '12px 32px', fontSize: '15px', borderRadius: '6px', display: 'inline-block' }}>Apply for this position</a>
        </div>

        {/* Job Description Body */}
        <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', marginBottom: '40px' }}>
          <div style={{ fontSize: '15px', color: '#334155', lineHeight: '1.8' }}>
            
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '16px', marginTop: '0' }}>About the Role</h3>
            <p style={{ marginBottom: '24px' }}>
              We are seeking a highly accomplished, strategic, and hands-on <strong>Senior SAP Integration Expert</strong> with 10+ years of experience to join our elite enterprise consulting division. In this role, you will be the lead architect and developer for complex global SAP and non-SAP integration landscapes. 
              <br/><br/>
              You will leverage the full capabilities of the <strong>SAP BTP Integration Suite (Cloud Platform Integration - CPI)</strong> to connect disparate systems, automate workflows, and drive digital transformation for our Fortune 500 clients. You will not only design technical architectures but also mentor junior consultants, define enterprise integration governance, and oversee the successful delivery of massive S/4HANA migration projects.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '16px', marginTop: '32px' }}>Key Responsibilities</h3>
            <ul style={{ listStyleType: 'none', padding: '0', marginBottom: '24px' }}>
              {[
                "Lead the architecture, design, and implementation of scalable integration solutions across cloud, hybrid, and on-premise environments.",
                "Serve as the primary Subject Matter Expert (SME) for SAP Integration Suite, encompassing Cloud Integration (CPI), API Management, Event Mesh, and Open Connectors.",
                "Architect complex integration flows (iFlows) to facilitate seamless data exchange between SAP S/4HANA, SuccessFactors, Ariba, Salesforce, and bespoke third-party applications.",
                "Lead large-scale migration projects transitioning legacy middleware (SAP PI/PO, Dell Boomi) to SAP CPI.",
                "Develop and enforce enterprise-wide integration patterns, technical standards, security protocols, and CI/CD governance procedures.",
                "Conduct code reviews, optimize integration performance, and resolve critical high-severity production incidents.",
                "Collaborate closely with enterprise architects, functional leads, and business stakeholders to translate complex business requirements into robust technical specifications.",
                "Provide thought leadership on modern integration architectures (event-driven architecture, microservices) and mentor junior integration developers."
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '16px', marginTop: '32px' }}>Required Qualifications &amp; Skills</h3>
            <ul style={{ listStyleType: 'none', padding: '0', marginBottom: '24px' }}>
              {[
                "10+ years of proven, hands-on experience in enterprise SAP integration and middleware technologies.",
                "4-5+ years of dedicated, advanced experience designing and deploying solutions using SAP Cloud Platform Integration (CPI) / Integration Suite.",
                "Extensive background in legacy SAP PI/PO, with demonstrable experience leading migration efforts from PI/PO to CPI.",
                "Expert-level proficiency in Graphical Mapping, XSLT, Java, and Groovy scripting for complex message transformations.",
                "In-depth technical knowledge of all major adapters (OData, REST, SOAP, IDoc, RFC, SFTP, HTTP, AS2, AMQP).",
                "Strong understanding of modern security artifacts, including OAuth, SAML, SSL/TLS certificates, and PGP Encryption.",
                "Solid understanding of core business processes (O2C, P2P, R2R) to effectively contextualize integration requirements.",
                "Excellent communication skills with the ability to articulate complex technical concepts to non-technical executive stakeholders."
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '16px', marginTop: '32px' }}>Preferred Qualifications</h3>
            <ul style={{ listStyleType: 'none', padding: '0', marginBottom: '24px' }}>
              {[
                "Active SAP Certified Development Associate - SAP Integration Suite certification.",
                "Experience with event-driven architectures using SAP Event Mesh.",
                "Familiarity with Agile/Scrum delivery methodologies.",
                "Bachelor’s or Master’s degree in Computer Science, Information Technology, or a related field."
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <GraduationCap size={18} color="#64748b" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <div id="apply">
          <CareersForm />
        </div>

      </div>
    </div>
  );
}
