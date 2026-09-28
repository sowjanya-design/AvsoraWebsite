"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay for hydration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="loader" role="status" aria-label="Loading" className={!loading ? 'hidden' : ''}>
      <div className="loader-inner">
        <Image src="/logo2.png" alt="Avsora Software" width={60} height={60} style={{ width: 'auto', height: '60px' }} />
        <p>AVSORA SOFTWARE</p>
      </div>
    </div>
  );
}
