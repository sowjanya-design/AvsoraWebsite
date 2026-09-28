"use client";

import { useEffect, useRef, useState } from 'react';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const step = target / (1600 / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) {
            setCount(target);
            clearInterval(t);
          } else {
            setCount(Math.floor(cur));
          }
        }, 16);
        observer.unobserve(e.target);
      });
    }, { threshold: 0.6 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="counter">{count}</span>;
}

export default function StatsBar() {
  return (
    <div className="stats-bar" aria-label="Key statistics">
      <div className="stats-grid container">
        <div className="stat-item">
          <div className="stat-num"><Counter target={50} /><sup>+</sup></div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat-item">
          <div className="stat-num"><Counter target={15} /><sup>+</sup></div>
          <div className="stat-label">SAP Experts</div>
        </div>
        <div className="stat-item">
          <div className="stat-num"><Counter target={6} /><sup>+</sup></div>
          <div className="stat-label">Industry Verticals</div>
        </div>
        <div className="stat-item">
          <div className="stat-num"><Counter target={100} /><sup>%</sup></div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
}
