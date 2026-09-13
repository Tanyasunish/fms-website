import type { FC } from 'react';
import { openWhatsApp } from '@/utils/whatsapp';
import { MEDIA_SERIES } from '@/data/media';
import type { MediaSeries } from '@/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './Media.module.scss';

export const Media: FC = () => {
  return (
    <section className={styles.section}>
      <SectionHeading title="FMS MEDIA LIBRARY" />
      <div className={styles.grid}>
        {MEDIA_SERIES.map((s: MediaSeries) => (
          <article key={s.id} className={styles.card}>
            <img src={s.img} alt={s.title} loading="lazy" className={styles.thumb} />
            <div className={styles.body}>
              <h4 className={`${styles.title} serif`}>{s.title}</h4>
              <p className={styles.episodes}>{s.episodes}</p>
              <Button
                variant="navy"
                block
                small
                className={styles.watchBtn}
                onClick={() => openWhatsApp(`Requesting links for series: ${s.title}`)}
              >
                Watch / Access Series
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
