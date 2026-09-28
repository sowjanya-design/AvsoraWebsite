import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Avsora Software',
  description: 'Learn about Avsora Software, a specialist SAP consulting firm delivering SAP BTP, S/4HANA, and AI-driven solutions.',
};

export default function About() {
  return (
    <>
      <section id="about" aria-labelledby="about-h">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 id="about-h">About Avsora Software</h2>
              <p>Avsora Software is a specialist SAP consulting firm founded with one clear mission: to make enterprise-grade SAP transformation accessible, efficient, and genuinely impactful for businesses of all sizes.</p>
              <p>We combine deep technical expertise across SAP BTP, S/4HANA, and Fiori with strong functional domain knowledge in Finance, Sales &amp; Distribution, and Materials Management — delivering end-to-end solutions that drive measurable business outcomes.</p>
              <p>Our team brings together certified SAP professionals who are passionate about innovation, committed to quality, and focused on building long-term partnerships with every client we serve.</p>
              <div className="about-values">
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <div><h3>Outcome-Driven</h3><p>Every engagement is measured by real business results, not just deliverables.</p></div>
                </div>
                <div className="value-item">
                  <span className="value-icon">💡</span>
                  <div><h3>Innovation First</h3><p>We stay ahead of SAP roadmaps and bring cutting-edge AI capabilities to every project.</p></div>
                </div>
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <div><h3>Long-Term Partnership</h3><p>We invest in understanding your business to become a trusted technology advisor.</p></div>
                </div>
                <div className="value-item">
                  <span className="value-icon">🔒</span>
                  <div><h3>Quality &amp; Compliance</h3><p>Rigorous checks and adherence to SAP best practices on every engagement.</p></div>
                </div>
              </div>
            </div>
            <div className="about-visual" aria-hidden="true">
              <div className="about-visual-item">
                <div className="avi-icon">🚀</div>
                <h3>Founded 2025</h3>
                <p>Building the next generation of SAP consulting</p>
              </div>
              <div className="about-visual-item">
                <div className="avi-icon">🌐</div>
                <h3>India-Based, Global Ready</h3>
                <p>Serving clients across domestic and international markets</p>
              </div>
              <div className="about-visual-item">
                <div className="avi-icon">⚡</div>
                <h3>Agile Delivery</h3>
                <p>Sprint-based delivery with continuous feedback loops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" aria-labelledby="why-h">
        <div className="container">
          <h2 id="why-h">Why Choose Avsora?</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,.82)' }}>We don't just implement SAP — we become your long-term technology partner, ensuring every solution delivers lasting value.</p>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Certified SAP Professionals</h3>
              <p>Our consultants hold SAP certifications across BTP, S/4HANA, and functional modules — ensuring gold-standard delivery on every project.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔄</div>
              <h3>End-to-End Delivery</h3>
              <p>From blueprinting and build through testing, go-live, and hypercare — we own and manage the full project lifecycle.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Agile Methodology</h3>
              <p>Sprint-based delivery with regular demos and feedback loops keeps projects on time, on scope, and on budget.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📞</div>
              <h3>Post Go-Live Support</h3>
              <p>Dedicated hypercare and long-term support after go-live with proactive monitoring and fast response times.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
