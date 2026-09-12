import React from 'react';
import { openWhatsApp } from '@/utils/whatsapp';
import { MEDIA_SERIES } from '@/data/media';
import type { MediaSeries } from '@/types';

export const Media: React.FC = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '50px 24px' }}>
      <h2 className="serif" style={{ fontSize: '1.8rem', color: 'var(--fms-navy)', textAlign: 'center', marginBottom: '24px' }}>FMS MEDIA LIBRARY</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {MEDIA_SERIES.map((s: MediaSeries) => (
          <div key={s.id} style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={s.img} alt={s.title} loading="lazy" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <h4 className="serif" style={{ color: 'var(--fms-navy)' }}>{s.title}</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{s.episodes}</p>
              <button 
                type="button"
                onClick={() => openWhatsApp(`Requesting links for series: ${s.title}`)} 
                className="btn btn-navy" 
                style={{ width: '100%', fontSize: '0.7rem' }}
              >
                Watch / Access Series
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
