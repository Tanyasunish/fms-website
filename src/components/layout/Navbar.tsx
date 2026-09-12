import React from 'react';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  return (
    <header style={{
      backgroundColor: 'var(--fms-navy)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(197, 160, 89, 0.25)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="serif" style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '1px' }}>FEED MY SHEEP</span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/" style={linkStyle}>HOME</Link>
          <Link to="/media" style={linkStyle}>MEDIA</Link>
          <Link to="/publications" style={linkStyle}>PUBLICATIONS</Link>
          <Link to="/living" style={linkStyle}>LIVING</Link>
          <Link to="/retreats" style={linkStyle}>RETREATS & PILGRIMAGES</Link>
          <button 
            onClick={() => openWhatsApp('Donation / General Support')}
            style={{
              background: '#C49746',
              color: 'var(--fms-navy)',
              padding: '8px 18px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.75rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            DONATE
          </button>
        </nav>
      </div>
    </header>
  );
};

const linkStyle: React.CSSProperties = {
  color: '#E2E8F0',
  textDecoration: 'none',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '1px',
  textTransform: 'uppercase'
};