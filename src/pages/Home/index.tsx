import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { PILLARS } from '@/data/pillars';
import { UPCOMING_EVENTS } from '@/data/events';
import type { Pillar, UpcomingEvent } from '@/types';
import { Button, ButtonLink } from '@/components/ui/Button/Button';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Icon } from '@/components/ui/Icon/Icon';
import { Card } from '@/components/ui/Card/Card';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h3 className={`${styles.heroEyebrow} serif`}>
              FEEDING HEARTS. FORMING DISCIPLES.
              <br />
              TRANSFORMING THE WORLD.
            </h3>
            <p className={styles.heroLead}>
              FMS is a Catholic media & ministry initiative proclaiming the Gospel, forming disciples, and building a
              community of faith.
            </p>
            <div className={styles.heroActions}>
              <ButtonLink href="#pillars" variant="navy">
                Explore Our Mission
              </ButtonLink>
              <Button variant="outline" onClick={() => openWhatsApp('Support Our Mission')}>
                Support Mission
              </Button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.heroCaption}>
              <h1 className={`${styles.heroTitle} serif`}>FEED MY SHEEP</h1>
              <div className={`${styles.heroSubtitle} serif`}>One Mission. Infinite Impact.</div>
              <div className={`${styles.heroScript} script-text`}>Leading souls to Christ. Enriching lives.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Pillars & Sidebar */}
      <section className={styles.section} id="pillars">
        <div className={styles.homeGrid}>
          <div>
            <SectionHeading compact title="9 PILLARS OF FMS" tagline="Nine Expressions. One Mission." />
            <div className={styles.pillarGrid}>
              {PILLARS.map((p: Pillar) => (
                <Card
                  key={p.num}
                  as="button"
                  variant="centered"
                  aria-label={`Enquire about ${p.name}`}
                  onClick={() => openWhatsApp(`Enquiry for Pillar ${p.num}: ${p.name}`)}
                >
                  <span className={styles.pillarNum}>{p.num}</span>
                  <span className={styles.pillarIcon}>
                    <Icon icon={p.icon} size={28} />
                  </span>
                  <span className={`${styles.pillarName} serif`}>{p.name}</span>
                  <em className={`${styles.pillarSub} script-text`}>{p.sub}</em>
                  <span className={styles.pillarDesc}>{p.desc}</span>
                </Card>
              ))}
            </div>
          </div>

          <aside>
            {/* 5:30 Blessing Card */}
            <div className={styles.sidebarCard}>
              <div className={styles.cardLabel}>LATEST FROM FMS</div>
              <div className={styles.blessingMedia}>
                <h3 className={`${styles.blessingTitle} serif`}>5:30 Blessing</h3>
                <p className={styles.blessingText}>Start your day with the Word & prayer.</p>
                <button
                  type="button"
                  onClick={() => openWhatsApp('5:30 Blessing link request')}
                  className={styles.watchBtn}
                >
                  WATCH LATEST
                  <Icon icon={ArrowRight} size={12} />
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className={styles.sidebarCard}>
              <div className={styles.cardLabel}>UPCOMING EVENTS</div>
              {UPCOMING_EVENTS.map((ev: UpcomingEvent) => (
                <div key={ev.id} className={styles.eventRow}>
                  <div className={styles.eventBadge}>
                    <div className={styles.eventDay}>{ev.day}</div>
                    <div className={styles.eventMonth}>{ev.month}</div>
                  </div>
                  <div>
                    <h5 className={styles.eventTitle}>{ev.title}</h5>
                    <p className={styles.eventLoc}>{ev.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
