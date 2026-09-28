"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header role="banner">
      <div className="nav container">
        <Link href="/" className="logo" aria-label="Avsora Software — home" onClick={closeMenu}>
          <Image src="/logo2.png" alt="Avsora Software logo" width={34} height={34} />
          <span>Avsora Software</span>
        </Link>
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation" 
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
          <Link href="/services" className={pathname === '/services' ? 'active' : ''} onClick={closeMenu}>Services</Link>
          <Link href="/case-studies" className={pathname === '/case-studies' ? 'active' : ''} onClick={closeMenu}>Case Studies</Link>
          <Link href="/careers" className={pathname === '/careers' ? 'active' : ''} onClick={closeMenu}>Careers</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
