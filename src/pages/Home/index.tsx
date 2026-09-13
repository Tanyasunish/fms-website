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
import heroImage from '@/assets/hero.jpg';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div>
      {/* Hero — opening statement of the ministry */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(108deg, rgba(15, 32, 24, 0.9) 0%, rgba(24, 53, 42, 0.72) 45%, rgba(24, 53, 42, 0.3) 100%), url(${heroImage})`,
        }}
      >
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>A Catholic Media &amp; Ministry Initiative</p>
          <h1 className={`${styles.heroBrand} serif`}>FEED MY SHEEP</h1>
          <h2 className={`${styles.heroTitle} serif`}>
            Feeding hearts.
            <br />
            Forming disciples.
            <br />
            <em className={styles.heroTitleGold}>Transforming the world.</em>
          </h2>
          <p className={styles.heroLead}>
            FMS proclaims the Gospel through media, formation, retreats and community — building a world where every
            heart is fed by the Word of God.
          </p>
          <div className={styles.heroActions}>
            <ButtonLink href="#pillars" variant="gold">
              Explore Our Mission
            </ButtonLink>
            <Button variant="outlineLight" onClick={() => openWhatsApp('Support Our Mission')}>
              Support Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Mission — why FMS exists */}
      <section className={styles.mission}>
        <div className={styles.missionGrid}>
          <div className={styles.missionCopy}>
            <p className={styles.eyebrow}>Why We Exist</p>
            <h2 className={`${styles.sectionTitle} serif`}>A mission rooted in the Gospel.</h2>
            <p className={styles.prose}>
              Feed My Sheep is a Catholic media &amp; ministry initiative founded on a simple command: “Feed my sheep.”
              Through stories, teaching and formation, we help people encounter Christ in the everyday.
            </p>
            <p className={styles.prose}>
              Every word we publish, every retreat we host and every life we accompany is an act of the same mission —
              leading souls to Christ.
            </p>
          </div>
          <div className={styles.missionImage} role="img" aria-label="Golden light through a peaceful forest"></div>
        </div>
      </section>

      {/* One Mission anchor */}
      <section className={styles.oneMission}>
        <p className={styles.oneMissionEyebrow}>One Mission</p>
        <h2 className={`${styles.oneMissionTitle} serif`}>
          Many
          <span className={styles.oneMissionGold}> expressions.</span>
        </h2>
        <p className={`${styles.oneMissionScript} script-text`}>
          Feeding hearts. Forming disciples. Transforming the world.
        </p>
      </section>

      {/* Nine Pillars */}
      <section className={styles.section} id="pillars">
        <SectionHeading
          title="9 PILLARS OF FMS"
          tagline="One mission. Nine expressions. Every one of them feeds the same flock."
        />
        <div className={styles.pillarGrid}>
          {PILLARS.map((p: Pillar, i: number) => (
            <Card
              key={p.num}
              as="button"
              variant="centered"
              className={i % 4 === 3 ? styles.pillarWide : undefined}
              aria-label={`Enquire about ${p.name}`}
              onClick={() => openWhatsApp(`Enquiry for Pillar ${p.num}: ${p.name}`)}
            >
              <span className={styles.pillarNum}>{String(p.num).padStart(2, '0')}</span>
              <span className={styles.pillarIcon}>
                <Icon icon={p.icon} size={26} />
              </span>
              <span className={`${styles.pillarName} serif`}>{p.name}</span>
              <em className={`${styles.pillarSub} script-text`}>{p.sub}</em>
              <span className={styles.pillarDesc}>{p.desc}</span>
              <span className={styles.pillarArrow} aria-hidden="true">
                <Icon icon={ArrowRight} size={16} />
              </span>
            </Card>
          ))}
        </div>
      </section>

      {/* Scripture break */}
      <section className={styles.scripture}>
        <p className={`${styles.scriptureQuote} serif`}>“Feed my sheep.”</p>
        <p className={styles.scriptureRef}>John 21:17</p>
      </section>

      {/* Latest from FMS */}
      <section className={styles.section}>
        <div className={styles.featureGrid}>
          <div className={styles.featureMedia}></div>
          <div className={styles.featureBody}>
            <p className={styles.eyebrow}>Latest From FMS</p>
            <h2 className={`${styles.featureTitle} serif`}>5:30 Blessing</h2>
            <p className={styles.prose}>
              Start your day with the Word and prayer. A short daily reflection to carry with you into the morning.
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp('5:30 Blessing link request')}
              className={styles.watchBtn}
            >
              WATCH LATEST
              <Icon icon={ArrowRight} size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className={`${styles.section} ${styles.eventsSection}`}>
        <SectionHeading title="UPCOMING EVENTS & RETREATS" tagline="An invitation to draw closer this season." />
        <div className={styles.eventList}>
          {UPCOMING_EVENTS.map((ev: UpcomingEvent) => (
            <button
              key={ev.id}
              type="button"
              className={styles.eventRow}
              onClick={() => openWhatsApp(`Enquiry for event: ${ev.title}`)}
            >
              <span className={styles.eventDate}>
                <span className={styles.eventDay}>{ev.day}</span>
                <span className={styles.eventMonth}>{ev.month}</span>
              </span>
              <span className={styles.eventInfo}>
                <span className={`${styles.eventTitle} serif`}>{ev.title}</span>
                <span className={styles.eventLoc}>{ev.loc}</span>
              </span>
              <span className={styles.eventArrow} aria-hidden="true">
                <Icon icon={ArrowRight} size={18} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Community / Impact */}
      <section className={styles.community}>
        <div className={styles.communityGrid}>
          <div className={styles.communityImage} role="img" aria-label="Warm light through calm trees"></div>
          <div className={styles.communityCopy}>
            <p className={styles.eyebrow}>Community &amp; Impact</p>
            <h2 className={`${styles.sectionTitle} serif`}>A mission lived together.</h2>
            <p className={styles.prose}>
              Through media, formation, retreats, pilgrimages and community, FMS seeks to bring the Gospel into everyday
              life — one heart at a time.
            </p>
            <Button variant="navy" onClick={() => openWhatsApp('Reading about the FMS story')}>
              Read Our Story
              <Icon icon={ArrowRight} size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finale}>
        <p className={styles.oneMissionEyebrow}>Support the Mission</p>
        <h2 className={`${styles.finaleTitle} serif`}>
          Every heart you help feed
          <br />
          helps form a disciple.
        </h2>
        <div className={styles.heroActions}>
          <Button variant="gold" onClick={() => openWhatsApp('Support Our Mission')}>
            Support Mission
          </Button>
          <ButtonLink href="#pillars" variant="outlineLight">
            Explore Our Work
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};
