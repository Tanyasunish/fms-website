import React from 'react';
import { openWhatsApp } from '@/utils/whatsapp';
import { FORMATION_EVENTS } from '@/data/events';
import type { FormationEvent } from '@/types';

export const Formation: React.FC = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 24px' }}>
      <h2 className="serif" style={{ fontSize: '1.8rem', color: 'var(--fms-navy)', textAlign: 'center', marginBottom: '24px' }}>RETREATS & SACRED PILGRIMAGES</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {FORMATION_EVENTS.map((ev: FormationEvent) => (
          <div key={ev.id} className="formation-card">
            <div>
              <h4 className="serif" style={{ color: 'var(--fms-navy)' }}>{ev.title}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📅 {ev.date} | 📍 {ev.loc}</p>
            </div>
            <button 
              type="button"
              onClick={() => openWhatsApp(`Registering for ${ev.title}`)} 
              className="btn btn-wa" 
              style={{ width: 'auto' }}
            >
              Register via WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
