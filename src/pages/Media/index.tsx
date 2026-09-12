import React from 'react';
import { openWhatsApp } from '../../utils/whatsapp';

export const Media: React.FC = () => {
  const series = [
    { title: 'Walking with Mary', episodes: '15 Episodes', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80' },
    { title: 'Emmanuel', episodes: '25-Day TV Series', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80' },
    { title: 'Margam – The Way', episodes: 'Lenten Series', img: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=400&q=80' },
    { title: 'TED: The Eighth Day', episodes: 'Easter Octave', img: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '50px 24px' }}>
      <h2 className="serif" style={{ fontSize: '1.8rem', color: 'var(--fms-navy)', textAlign: 'center', marginBottom: '24px' }}>FMS MEDIA LIBRARY</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {series.map((s, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={s.img} alt={s.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <h4 className="serif" style={{ color: 'var(--fms-navy)' }}>{s.title}</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{s.episodes}</p>
              <button onClick={() => openWhatsApp(`Requesting links for series: ${s.title}`)} className="btn btn-navy" style={{ width: '100%', fontSize: '0.7rem' }}>
                Watch / Access Series
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};