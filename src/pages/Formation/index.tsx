import type { FC } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { FORMATION_EVENTS } from '@/data/events';
import type { FormationEvent } from '@/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Icon } from '@/components/ui/Icon/Icon';
import styles from './Formation.module.scss';

const splitDate = (date: string): { day: string; month: string } => {
  const parts = date.trim().split(/[ ,]+/);
  return { day: parts[1] ?? '', month: parts[0]?.toUpperCase() ?? '' };
};

export const Formation: FC = () => {
  return (
    <section className={styles.section}>
      <SectionHeading
        title="RETREATS & SACRED PILGRIMAGES"
        lead="Moments of silence, teaching and encounter — journey with us and let the Lord meet you."
      />
      <div className={styles.list}>
        {FORMATION_EVENTS.map((ev: FormationEvent) => {
          const { day, month } = splitDate(ev.date);
          return (
            <article key={ev.id} className={styles.eventRow}>
              <span className={styles.eventDate}>
                <span className={styles.eventDay}>{day}</span>
                <span className={styles.eventMonth}>{month}</span>
              </span>
              <span className={styles.eventInfo}>
                <span className={`${styles.eventTitle} serif`}>{ev.title}</span>
                <span className={styles.eventMeta}>
                  <span className={styles.metaItem}>
                    <Icon icon={Calendar} size={15} />
                    {ev.date}
                  </span>
                  <span className={styles.metaItem}>
                    <Icon icon={MapPin} size={15} />
                    {ev.loc}
                  </span>
                </span>
              </span>
              <span className={styles.eventAction}>
                <Button variant="navy" onClick={() => openWhatsApp(`Registering for ${ev.title}`)}>
                  Register via WhatsApp
                </Button>
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
};
