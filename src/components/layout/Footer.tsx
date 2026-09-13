import { useState, type FC, type FormEvent } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import { WhatsAppIcon } from '@/components/ui/Icon/WhatsAppIcon';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;
    openWhatsApp(`Subscribing to updates with email: ${cleanEmail}`);
    setEmail('');
    setStatusMessage('✓ WhatsApp opened with your subscription request');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h5 className={`${styles.columnTitle} serif`}>GET OUR UPDATES</h5>
          <p className={`${styles.muted} ${styles.newsletterLead}`}>Stay connected with the latest from FMS.</p>
          <form onSubmit={handleSubscribe} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              aria-label="Email address"
              className={styles.emailInput}
            />
            <Button type="submit" variant="goldDeep" small>
              SUBSCRIBE
            </Button>
          </form>
          {statusMessage && <p className={styles.success}>{statusMessage}</p>}
        </div>

        <div className={styles.center}>
          <div className={`${styles.brandMark} serif`}>FMS</div>
          <p className={styles.muted}>Feeding hearts. Forming disciples. Transforming the world.</p>
        </div>

        <div>
          <h5 className={`${styles.columnTitle} serif`}>CONTACT US</h5>
          <p className={styles.contact}>
            <span className={styles.contactRow}>
              <Icon icon={WhatsAppIcon} size={14} className={styles.contactIcon} />
              WhatsApp: +91 9847 9847 46
            </span>
            <span className={styles.contactRow}>
              <Icon icon={Mail} size={14} className={styles.contactIcon} />
              info@feedmysheep.org
            </span>
            <span className={styles.contactRow}>
              <Icon icon={MapPin} size={14} className={styles.contactIcon} />
              Zion Retreat Centre, Kerala, India
            </span>
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>© 2026 Feed My Sheep Media Ministry. All Rights Reserved.</div>
        <div className="serif">One Mission. Infinite Impact.</div>
      </div>
    </footer>
  );
};
