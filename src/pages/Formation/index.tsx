import type { FC } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { FORMATION_EVENTS } from '@/data/events';
import type { FormationEvent } from '@/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Icon } from '@/components/ui/Icon/Icon';
import { Card, CardAction, CardTitle } from '@/components/ui/Card/Card';
import styles from './Formation.module.scss';

export const Formation: FC = () => {
  return (
    <section className={styles.section}>
      <SectionHeading title="RETREATS & SACRED PILGRIMAGES" />
      <div className={styles.list}>
        {FORMATION_EVENTS.map((ev: FormationEvent) => (
          <Card key={ev.id} variant="row">
            <div>
              <CardTitle>{ev.title}</CardTitle>
              <p className={styles.cardMeta}>
                <span className={styles.metaItem}>
                  <Icon icon={Calendar} size={14} />
                  {ev.date}
                </span>
                <span className={styles.metaItem}>
                  <Icon icon={MapPin} size={14} />
                  {ev.loc}
                </span>
              </p>
            </div>
            <CardAction>
              <Button variant="whatsapp" onClick={() => openWhatsApp(`Registering for ${ev.title}`)}>
                Register via WhatsApp
              </Button>
            </CardAction>
          </Card>
        ))}
      </div>
    </section>
  );
};
