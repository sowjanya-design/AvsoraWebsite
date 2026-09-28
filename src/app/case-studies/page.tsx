import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Avsora Software',
  description: 'A snapshot of the types of SAP engagements we deliver — from core migrations to AI-powered enterprise innovation.',
};

export default function CaseStudies() {
  return (
    <>
      <section id="case" style={{ background: 'white' }} aria-labelledby="case-h">
        <div className="container">
          <h2 id="case-h">Project Capabilities</h2>
          <p className="section-sub">A snapshot of the types of SAP engagements we deliver — from core migrations to AI-powered enterprise innovation.</p>
          <div className="grid">
            <div className="case-card">
              <span className="case-tag">Manufacturing</span>
              <b>S/4HANA Migration &amp; AI Production Planning</b>
              <p>Greenfield S/4HANA migration with AI-driven production planning automation, reducing downtime and improving OEE across plant operations.</p>
              <div className="case-metric">📈 30% reduction in unplanned downtime</div>
            </div>
            <div className="case-card">
              <span className="case-tag">Retail</span>
              <b>SAP Fiori &amp; BTP Integration</b>
              <p>Custom Fiori apps integrated with SAP BTP event mesh, improving customer engagement workflows and enabling real-time inventory visibility.</p>
              <div className="case-metric">🚀 40% faster order processing</div>
            </div>
            <div className="case-card">
              <span className="case-tag">Logistics</span>
              <b>Real-Time Tracking &amp; Predictive Analytics</b>
              <p>End-to-end supply chain visibility built on SAP BTP with predictive delivery analytics, reducing SLA breaches and improving dispatch accuracy.</p>
              <div className="case-metric">📦 25% improvement in delivery accuracy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" aria-labelledby="testimonials-h">
        <div className="container">
          <h2 id="testimonials-h">What Clients Say</h2>
          <p className="section-sub">Trusted by enterprises to deliver high-impact SAP solutions that drive measurable business value.</p>
          <div className="grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Avsora played a key role in our S/4HANA transformation. Their expertise in SAP BTP and AI-driven solutions significantly improved our operational efficiency."</p>
              <h3>— Manufacturing Industry Leader</h3>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Strong technical and functional expertise across SAP modules. Their Fiori and BTP solutions enhanced our user experience and business agility considerably."</p>
              <h3>— Retail Enterprise</h3>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Reliable, professional, and highly skilled SAP consultants. Their integration and automation capabilities helped us modernize our logistics operations end-to-end."</p>
              <h3>— Logistics Company</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
