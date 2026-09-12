import React, { useState } from 'react';
import { openWhatsApp } from '@/utils/whatsapp';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;
    openWhatsApp(`Subscribing to updates with email: ${cleanEmail}`);
    setEmail('');
    setStatusMessage('✓ WhatsApp opened with your subscription request');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <footer style={{ background: '#F4EFE6', borderTop: '1px solid var(--border-light)', padding: '40px 24px 20px' }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '30px',
        marginBottom: '30px'
      }}>
        <div>
          <h5 className="serif" style={{ fontSize: '0.85rem', marginBottom: '12px' }}>GET OUR UPDATES</h5>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Stay connected with the latest from FMS.</p>
          <form onSubmit={handleSubscribe} style={{ display: 'flex' }}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              required
              style={{ flex: 1, padding: '8px 10px', border: '1px solid var(--border-light)', fontSize: '0.75rem', outline: 'none' }}
            />
            <button type="submit" style={{ background: '#8F7241', color: '#fff', border: 'none', padding: '8px 14px', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer' }}>
              SUBSCRIBE
            </button>
          </form>
          {statusMessage && (
            <p style={{ fontSize: '0.7rem', color: '#166534', marginTop: '6px' }}>
              {statusMessage}
            </p>
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--fms-navy)' }}>FMS</div>
          <p style={{ fontSize: '0.75rem', marginTop: '6px', color: 'var(--text-muted)' }}>Feeding hearts. Forming disciples. Transforming the world.</p>
        </div>

        <div>
          <h5 className="serif" style={{ fontSize: '0.85rem', marginBottom: '12px' }}>CONTACT US</h5>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            💬 WhatsApp: +91 9847 9847 46<br />
            ✉️ Email: info@feedmysheep.org<br />
            📍 Zion Retreat Centre, Kerala, India
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid #E5DDCF', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
        <div>© 2026 Feed My Sheep Media Ministry. All Rights Reserved.</div>
        <div className="serif">One Mission. Infinite Impact.</div>
      </div>
    </footer>
  );
};
