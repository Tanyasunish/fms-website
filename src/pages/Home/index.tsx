import React from 'react';
import { openWhatsApp } from '@/utils/whatsapp';
import { PILLARS } from '@/data/pillars';
import { UPCOMING_EVENTS } from '@/data/events';
import type { Pillar, UpcomingEvent } from '@/types';

export const Home: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', minHeight: '440px' }}>
          <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 className="serif" style={{ fontSize: '1.25rem', color: 'var(--fms-navy)', marginBottom: '14px', lineHeight: 1.35 }}>
              FEEDING HEARTS. FORMING DISCIPLES.<br />TRANSFORMING THE WORLD.
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              FMS is a Catholic media & ministry initiative proclaiming the Gospel, forming disciples, and building a community of faith.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#pillars" className="btn btn-navy">Explore Our Mission</a>
              <button 
                type="button" 
                onClick={() => openWhatsApp('Support Our Mission')} 
                className="btn btn-outline"
              >
                Support Mission
              </button>
            </div>
          </div>

          <div style={{
            background: `linear-gradient(to bottom, rgba(10,25,47,0.4) 0%, rgba(10,25,47,0.15) 100%), url('https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1400&q=80') center/cover`,
            padding: '30px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end'
          }}>
            <div style={{ textAlign: 'right' }}>
              <h1 className="serif" style={{ fontSize: '1.4rem', color: 'var(--fms-navy)' }}>FEED MY SHEEP</h1>
              <div className="serif" style={{ fontSize: '0.95rem', color: '#2D3748' }}>One Mission. Infinite Impact.</div>
              <div className="script-text" style={{ fontSize: '1.1rem', color: '#926E28' }}>Leading souls to Christ. Enriching lives.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main 9 Pillars & Sidebar */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px' }} id="pillars">
        <div className="home-grid">
          
          {/* 9 Pillars Grid */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h2 className="serif" style={{ fontSize: '1.4rem', color: 'var(--fms-navy)' }}>9 PILLARS OF FMS</h2>
              <div style={{ fontSize: '0.65rem', letterSpacing: '3px', color: 'var(--fms-gold)', textTransform: 'uppercase', fontWeight: 700 }}>Nine Expressions. One Mission.</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {PILLARS.map((p: Pillar) => (
                <div 
                  key={p.num} 
                  role="button"
                  tabIndex={0}
                  onClick={() => openWhatsApp(`Enquiry for Pillar ${p.num}: ${p.name}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openWhatsApp(`Enquiry for Pillar ${p.num}: ${p.name}`);
                    }
                  }}
                  style={{
                    background: '#fff',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '16px',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--fms-navy)', color: '#fff', fontSize: '0.7rem', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.num}
                  </div>
                  <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{p.icon}</div>
                  <h4 className="serif" style={{ fontSize: '0.8rem', color: 'var(--fms-navy)', marginBottom: '4px' }}>{p.name}</h4>
                  <div className="script-text" style={{ fontSize: '0.75rem', color: '#8C6D37', marginBottom: '6px' }}>{p.sub}</div>
                  <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            {/* 5:30 Blessing Card */}
            <div style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>LATEST FROM FMS</div>
              <div style={{
                height: '160px',
                borderRadius: '6px',
                background: `linear-gradient(to top, rgba(10,25,47,0.9) 20%, rgba(10,25,47,0.3) 100%), url('https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=500&q=80') center/cover`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '14px',
                color: '#fff'
              }}>
                <h3 className="serif" style={{ fontSize: '1.3rem' }}>5:30 Blessing</h3>
                <p style={{ fontSize: '0.7rem', color: '#CBD5E1', marginBottom: '6px' }}>Start your day with the Word & prayer.</p>
                <span 
                  role="button"
                  tabIndex={0}
                  onClick={() => openWhatsApp("5:30 Blessing link request")} 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openWhatsApp("5:30 Blessing link request");
                    }
                  }}
                  style={{ color: 'var(--fms-gold)', fontSize: '0.68rem', fontWeight: 700, cursor: 'pointer', display: 'inline-block' }}
                >
                  WATCH LATEST ➔
                </span>
              </div>
            </div>

            {/* Upcoming Events */}
            <div style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>UPCOMING EVENTS</div>
              
              {UPCOMING_EVENTS.map((ev: UpcomingEvent) => (
                <div key={ev.id} style={{ display: 'flex', gap: '12px', padding: '8px 0', borderBottom: '1px solid #F1ECE3', alignItems: 'center' }}>
                  <div style={{ background: 'var(--fms-navy)', color: '#fff', textAlign: 'center', borderRadius: '4px', minWidth: '40px', padding: '4px' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{ev.day}</div>
                    <div style={{ fontSize: '0.55rem' }}>{ev.month}</div>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.78rem', color: 'var(--fms-navy)' }}>{ev.title}</h5>
                    <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{ev.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
