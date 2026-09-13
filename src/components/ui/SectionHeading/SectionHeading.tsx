import type { ReactNode } from 'react';
import styles from './SectionHeading.module.scss';

export interface SectionHeadingProps {
  title: ReactNode;
  tagline?: ReactNode;
  lead?: ReactNode;
  compact?: boolean;
  className?: string;
}

export function SectionHeading({ title, tagline, lead, compact = false, className }: SectionHeadingProps) {
  const classes = [styles.heading, compact && styles.compact, className].filter(Boolean).join(' ');

  return (
    <header className={classes}>
      <h2 className={`${styles.title} serif`}>{title}</h2>
      {tagline && <div className={styles.tagline}>{tagline}</div>}
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  );
}