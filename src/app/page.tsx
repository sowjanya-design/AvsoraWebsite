import type { Metadata } from 'next';
import Link from 'next/link';
import StatsBar from '@/components/home/StatsBar';

export const metadata: Metadata = {
  title: 'Avsora Software | SAP BTP, AI & S/4HANA Transformation Experts',
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-badge">SAP BTP · S/4HANA · AI Solutions</div>
        <h1>SAP BTP, AI &amp; S/4HANA<br />Transformation Experts</h1>
        <p>Avsora Software delivers intelligent SAP solutions powered by SAP Business Technology Platform, Artificial Intelligence, and advanced analytics. We help enterprises modernize, automate, and scale with future-ready architectures.</p>
        <div className="hero-btns">
          <Link href="/services" className="btn-primary">Explore Services</Link>
          <Link href="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </section>

      {/* STATS BAR */}
      <StatsBar />

      {/* CTA */}
      <div className="cta-wrap">
        <div className="cta container" aria-label="Call to action">
          <h2>Ready to Transform Your SAP Landscape?</h2>
          <p>Partner with Avsora Software to unlock business value with cutting-edge SAP BTP, AI, and S/4HANA solutions tailored to your industry.</p>
          <Link href="/contact" className="btn-primary">Start a Conversation</Link>
        </div>
      </div>
    </>
  );
}
