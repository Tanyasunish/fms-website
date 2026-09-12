import React from 'react';
import { openWhatsApp } from '../../utils/whatsapp';

export const Formation: React.FC = () => {
  const events = [
    { title: 'Teens – Jeremiah 2026', date: 'May 19, 2026', loc: 'Zion Retreat Centre' },
    { title: 'Kids – Samuel 2026', date: 'May 26, 2026', loc: 'Zion Retreat Centre' },
    { title: 'Couples – Elkanah Hannah', date: 'May 22, 2026', loc: 'Zion Retreat Centre' },
    { title: 'Holy Land Pilgrimage 2026', date: 'October 12, 2026', loc: '10 Days Sacred Travel' },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 24px' }}>
      <h2 className="serif" style={{ fontSize: '1.8rem', color: 'var(--fms-navy)', textAlign: 'center', marginBottom: '24px' }}>RETREATS & SACRED PILGRIMAGES</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {events.map((ev, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 className="serif" style={{ color: 'var(--fms-navy)' }}>{ev.title}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📅 {ev.date} | 📍 {ev.loc}</p>
            </div>
            <button onClick={() => openWhatsApp(`Registering for ${ev.title}`)} className="btn btn-wa" style={{ width: 'auto' }}>
              Register via WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};