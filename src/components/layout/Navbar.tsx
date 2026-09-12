import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { openWhatsApp } from '@/utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const getNavLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
    color: isActive ? 'var(--fms-gold)' : '#E2E8F0',
    textDecoration: 'none',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'color 0.2s ease',
  });

  const closeMobileMenu = () => setIsMobileOpen(false);

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
        <Link to="/" onClick={closeMobileMenu} style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="serif" style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '1px' }}>FEED MY SHEEP</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <NavLink to="/" style={getNavLinkStyle}>HOME</NavLink>
          <NavLink to="/media" style={getNavLinkStyle}>MEDIA</NavLink>
          <NavLink to="/publications" style={getNavLinkStyle}>PUBLICATIONS</NavLink>
          <NavLink to="/living" style={getNavLinkStyle}>LIVING</NavLink>
          <NavLink to="/retreats" style={getNavLinkStyle}>RETREATS & PILGRIMAGES</NavLink>
          <button 
            type="button"
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

        {/* Mobile Toggle Button */}
        <button 
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setIsMobileOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileOpen && (
        <nav className="nav-mobile-menu">
          <NavLink to="/" onClick={closeMobileMenu} style={getNavLinkStyle}>HOME</NavLink>
          <NavLink to="/media" onClick={closeMobileMenu} style={getNavLinkStyle}>MEDIA</NavLink>
          <NavLink to="/publications" onClick={closeMobileMenu} style={getNavLinkStyle}>PUBLICATIONS</NavLink>
          <NavLink to="/living" onClick={closeMobileMenu} style={getNavLinkStyle}>LIVING</NavLink>
          <NavLink to="/retreats" onClick={closeMobileMenu} style={getNavLinkStyle}>RETREATS & PILGRIMAGES</NavLink>
          <button 
            type="button"
            onClick={() => {
              closeMobileMenu();
              openWhatsApp('Donation / General Support');
            }}
            style={{
              background: '#C49746',
              color: 'var(--fms-navy)',
              padding: '10px 18px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.75rem',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              marginTop: '8px'
            }}
          >
            DONATE
          </button>
        </nav>
      )}
    </header>
  );
};
