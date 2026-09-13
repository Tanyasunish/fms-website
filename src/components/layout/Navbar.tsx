import { useState, type FC } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { openWhatsApp } from '@/utils/whatsapp';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import styles from './Navbar.module.scss';

const NAV_ITEMS = [
  { to: '/', label: 'HOME' },
  { to: '/media', label: 'MEDIA' },
  { to: '/publications', label: 'PUBLICATIONS' },
  { to: '/living', label: 'LIVING' },
  { to: '/retreats', label: 'RETREATS & PILGRIMAGES' },
];

const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
  [styles.navLink, isActive && styles.active].filter(Boolean).join(' ');

export const Navbar: FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);
  const handleDonate = () => openWhatsApp('Donation / General Support');

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" onClick={closeMobileMenu} className={styles.brand}>
          <span className={`${styles.brandTitle} serif`}>FEED MY SHEEP</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <Button variant="gold" small onClick={handleDonate}>
            DONATE
          </Button>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <Icon icon={isMobileOpen ? X : Menu} size={24} />
        </button>
      </div>

      {isMobileOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMobileMenu} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <Button variant="gold" small block onClick={handleDonate}>
            DONATE
          </Button>
        </nav>
      )}
    </header>
  );
};