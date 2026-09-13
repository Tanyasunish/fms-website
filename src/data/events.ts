import type { UpcomingEvent, FormationEvent } from '../types';

export const UPCOMING_EVENTS: readonly UpcomingEvent[] = [
  {
    id: 'event-teens-jeremiah-2026',
    day: '19',
    month: 'MAY',
    title: 'Teens – Jeremiah 2026',
    loc: 'Zion Retreat Centre',
  },
  { id: 'event-kids-samuel-2026', day: '26', month: 'MAY', title: 'Kids – Samuel 2026', loc: 'Zion Retreat Centre' },
  {
    id: 'event-couples-elkanah-hannah',
    day: '22',
    month: 'MAY',
    title: 'Couples – Elkanah Hannah',
    loc: 'Zion Retreat Centre',
  },
];

export const FORMATION_EVENTS: readonly FormationEvent[] = [
  { id: 'retreat-teens-2026', title: 'Teens – Jeremiah 2026', date: 'May 19, 2026', loc: 'Zion Retreat Centre' },
  { id: 'retreat-kids-2026', title: 'Kids – Samuel 2026', date: 'May 26, 2026', loc: 'Zion Retreat Centre' },
  { id: 'retreat-couples-2026', title: 'Couples – Elkanah Hannah', date: 'May 22, 2026', loc: 'Zion Retreat Centre' },
  {
    id: 'pilgrimage-holyland-2026',
    title: 'Holy Land Pilgrimage 2026',
    date: 'October 12, 2026',
    loc: '10 Days Sacred Travel',
  },
];
