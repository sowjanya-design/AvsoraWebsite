import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Loader from '@/components/layout/Loader';

export const metadata: Metadata = {
  title: 'Avsora Software | SAP BTP, AI & S/4HANA Transformation Experts',
  description: 'Avsora Software is a specialist SAP consulting firm delivering SAP BTP, S/4HANA, Fiori, AI-driven solutions and enterprise digital transformation across India.',
  keywords: 'SAP consulting, SAP BTP, SAP S/4HANA, SAP Fiori, AI in SAP, SAP implementation, SAP support, SAP India, SAP BTP consulting India',
  authors: [{ name: 'Avsora Software' }],
  openGraph: {
    title: 'Avsora Software | SAP BTP & AI Solutions',
    description: 'Expert SAP consulting in S/4HANA, BTP, AI-driven solutions and enterprise transformation.',
    type: 'website',
    url: 'https://avsorasoftware.com/',
    images: ['https://avsorasoftware.com/logo2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avsora Software | SAP Consulting',
    description: 'SAP S/4HANA, BTP, AI solutions and digital transformation experts.',
  },
  alternates: {
    canonical: 'https://avsorasoftware.com/',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        [{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Avsora Software",
          "url": "https://avsorasoftware.com",
          "logo": "https://avsorasoftware.com/logo2.png",
          "description": "SAP consulting company specializing in SAP BTP, S/4HANA, AI solutions and enterprise digital transformation",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7075481224",
            "contactType": "customer service",
            "email": "Info@avsorasoftware.com",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.instagram.com/avsora_software",
            "https://www.linkedin.com/company/avsora-software-0189073a2"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Avsora Software",
          "image": "https://avsorasoftware.com/logo2.png",
          "telephone": "+91-7075481224",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "TG",
            "addressCountry": "IN"
          }
        }]
        `}} />
      </head>
      <body>
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
