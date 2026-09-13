import { useState, type FC, type FormEvent } from 'react';
import { openWhatsApp } from '@/utils/whatsapp';
import { Button } from '@/components/ui/Button/Button';
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
            💬 WhatsApp: +91 9847 9847 46<br />
            ✉️ Email: info@feedmysheep.org<br />
            📍 Zion Retreat Centre, Kerala, India
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