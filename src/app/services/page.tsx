import type { Metadata } from 'next';
import { Settings, Cpu, MonitorPlay, Link2, BarChart2, ShieldCheck, Factory, ShoppingCart, Truck, Landmark, Pill, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Avsora Software',
  description: 'End-to-end SAP consulting with deep expertise in BTP, AI-driven innovation, and intelligent enterprise solutions.',
};

export default function Services() {
  return (
    <>
      <section id="services" style={{ background: '#f8fafc' }} aria-labelledby="services-h">
        <div className="container">
          <h2 id="services-h">Our Services</h2>
          <p className="section-sub">End-to-end SAP consulting with deep expertise in BTP, AI-driven innovation, and intelligent enterprise solutions.</p>
          <div className="grid">
            <div className="card">
              <div className="card-icon"><Settings size={28} /></div>
              <b>SAP S/4HANA Implementation</b>
              <p>Greenfield, Brownfield, and hybrid migrations with optimized processes across FI, SD, and MM modules.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Cpu size={28} /></div>
              <b>SAP BTP &amp; AI Solutions</b>
              <p>Intelligent applications using SAP BTP with AI, automation, and advanced analytics to drive business agility.</p>
            </div>
            <div className="card">
              <div className="card-icon"><MonitorPlay size={28} /></div>
              <b>Fiori / UI5 Experience</b>
              <p>Intuitive SAP Fiori applications designed to enhance user productivity and streamline business workflows.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Link2 size={28} /></div>
              <b>Integration &amp; Automation</b>
              <p>Seamless integration using SAP Integration Suite, REST APIs, and AI-driven automation for connected ecosystems.</p>
            </div>
            <div className="card">
              <div className="card-icon"><BarChart2 size={28} /></div>
              <b>Functional Consulting</b>
              <p>Deep domain expertise across Finance (FI), Sales &amp; Distribution (SD), and Materials Management (MM).</p>
            </div>
            <div className="card">
              <div className="card-icon"><ShieldCheck size={28} /></div>
              <b>Support &amp; Optimization</b>
              <p>Ongoing SAP support, performance tuning, and system optimization for sustained long-term business value.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" aria-labelledby="industries-h">
        <div className="container">
          <h2 id="industries-h">Industries We Serve</h2>
          <p className="section-sub">Our SAP expertise spans diverse sectors, enabling domain-specific solutions that align with industry best practices and compliance requirements.</p>
          <div className="industry-grid">
            <div className="industry-card">
              <div className="ind-icon"><Factory size={32} /></div>
              <h3>Manufacturing</h3>
            </div>
            <div className="industry-card">
              <div className="ind-icon"><ShoppingCart size={32} /></div>
              <h3>Retail &amp; E-Commerce</h3>
            </div>
            <div className="industry-card">
              <div className="ind-icon"><Truck size={32} /></div>
              <h3>Logistics &amp; Supply Chain</h3>
            </div>
            <div className="industry-card">
              <div className="ind-icon"><Landmark size={32} /></div>
              <h3>Finance &amp; Banking</h3>
            </div>
            <div className="industry-card">
              <div className="ind-icon"><Pill size={32} /></div>
              <h3>Healthcare &amp; Pharma</h3>
            </div>
            <div className="industry-card">
              <div className="ind-icon"><Zap size={32} /></div>
              <h3>Energy &amp; Utilities</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
