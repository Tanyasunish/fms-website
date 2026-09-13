import type { FC } from 'react';
import { openWhatsApp } from '@/utils/whatsapp';
import { MEDIA_SERIES } from '@/data/media';
import type { MediaSeries } from '@/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Card, CardAction, CardBody, CardImage, CardText, CardTitle } from '@/components/ui/Card/Card';
import styles from './Media.module.scss';

export const Media: FC = () => {
  return (
    <section className={styles.section}>
      <SectionHeading title="FMS MEDIA LIBRARY" />
      <div className={styles.grid}>
        {MEDIA_SERIES.map((s: MediaSeries) => (
          <Card key={s.id}>
            <CardImage src={s.img} alt={s.title} />
            <CardBody>
              <CardTitle>{s.title}</CardTitle>
              <CardText>{s.episodes}</CardText>
              <CardAction>
                <Button
                  variant="navy"
                  block
                  small
                  onClick={() => openWhatsApp(`Requesting links for series: ${s.title}`)}
                >
                  Watch / Access Series
                </Button>
              </CardAction>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};
