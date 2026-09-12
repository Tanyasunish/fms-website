import React, { useState } from 'react';
import { orderProductWhatsApp } from '../../utils/whatsapp';

interface Product {
  id: number;
  category: 'publications' | 'living';
  title: string;
  price: string;
  image: string;
}

export const Catalog: React.FC<{ initialCategory?: 'publications' | 'living' }> = ({ initialCategory = 'publications' }) => {
  const [tab, setTab] = useState<'all' | 'publications' | 'living'>(initialCategory);

  const products: Product[] = [
    { id: 1, category: 'publications', title: 'Walking with Mary Reflection Book', price: '₹350', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80' },
    { id: 2, category: 'publications', title: 'The Enemy Within Study Guide', price: '₹280', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80' },
    { id: 3, category: 'living', title: 'Sacred Heart Framed Canvas', price: '₹1,200', image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=500&q=80' },
    { id: 4, category: 'living', title: 'Handcrafted Olive Wood Rosary', price: '₹650', image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=500&q=80' },
  ];

  const filtered = tab === 'all' ? products : products.filter(p => p.category === tab);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '50px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <h2 className="serif" style={{ fontSize: '1.8rem', color: 'var(--fms-navy)', marginBottom: '8px' }}>PUBLICATIONS & LIVING</h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tap any item to order instantly via WhatsApp directly with our distribution team.</p>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          {(['all', 'publications', 'living'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                background: tab === t ? 'var(--fms-navy)' : '#fff',
                color: tab === t ? '#fff' : 'var(--text-dark)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src={p.image} alt={p.title} style={{ height: '220px', width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--fms-gold)', fontWeight: 700 }}>{p.category}</span>
              <h4 className="serif" style={{ fontSize: '0.95rem', margin: '6px 0 8px', color: 'var(--fms-navy)' }}>{p.title}</h4>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>{p.price}</div>
              <button 
                onClick={() => orderProductWhatsApp(p.title, p.price)}
                className="btn btn-wa" 
                style={{ marginTop: 'auto' }}
              >
                💬 Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};