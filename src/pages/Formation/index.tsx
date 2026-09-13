import type { FC } from 'react';
import { openWhatsApp } from '@/utils/whatsapp';
import { FORMATION_EVENTS } from '@/data/events';
import type { FormationEvent } from '@/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './Formation.module.scss';

export const Formation: FC = () => {
  return (
    <section className={styles.section}>
      <SectionHeading title="RETREATS & SACRED PILGRIMAGES" />
      <div className={styles.list}>
        {FORMATION_EVENTS.map((ev: FormationEvent) => (
          <div key={ev.id} className={styles.card}>
            <div>
              <h4 className={`${styles.cardTitle} serif`}>{ev.title}</h4>
              <p className={styles.cardMeta}>
                📅 {ev.date} | 📍 {ev.loc}
              </p>
            </div>
            <Button variant="whatsapp" onClick={() => openWhatsApp(`Registering for ${ev.title}`)}>
              Register via WhatsApp
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};