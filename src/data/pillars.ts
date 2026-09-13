import { Play, BookOpen, Home, Shirt, Baby, Church, Map, Clapperboard, HeartHandshake } from 'lucide-react';
import type { Pillar } from '../types';

export const PILLARS: readonly Pillar[] = [
  {
    num: 1,
    icon: Play,
    name: 'FMS MEDIA',
    sub: "Proclaiming the Word in Today's World",
    desc: '5:30 Blessing, YouTube series, and digital catechesis.',
  },
  {
    num: 2,
    icon: BookOpen,
    name: 'FMS PUBLICATIONS',
    sub: 'Books that Nurture Faith & Life',
    desc: 'Retreat books, prayer companions, novenas, and journals.',
  },
  {
    num: 3,
    icon: Home,
    name: 'FMS LIVING',
    sub: 'Christian Living, Beautifully Made',
    desc: 'Prayer corner collections, framed sacred art, home essentials.',
  },
  {
    num: 4,
    icon: Shirt,
    name: 'FMS APPAREL',
    sub: 'Wear Your Faith with Dignity',
    desc: 'Minimal Christian wear, clergy vestments, and altar linens.',
  },
  {
    num: 5,
    icon: Baby,
    name: 'FMS KIDS',
    sub: 'Building Little Hearts for a Great Faith',
    desc: "Catholic children's books, activity kits, and games.",
  },
  {
    num: 6,
    icon: Church,
    name: 'FMS RETREAT & FORMATION',
    sub: 'Forming Disciples, Equipping Leaders',
    desc: 'Youth, marriage, catechist, and priest renewal programs.',
  },
  {
    num: 7,
    icon: Map,
    name: 'FMS PILGRIMAGES',
    sub: 'Journeys of Faith, Memories for a Lifetime',
    desc: 'Holy Land journeys, shrine trails, and prayer expeditions.',
  },
  {
    num: 8,
    icon: Clapperboard,
    name: 'FMS STUDIO',
    sub: 'Creative Solutions for the Church',
    desc: 'Branding, video production, and websites for institutions.',
  },
  {
    num: 9,
    icon: HeartHandshake,
    name: 'FMS FOUNDATION',
    sub: 'Profits that Fuel Evangelisation',
    desc: 'Charity initiatives, seminary support, and Bible distribution.',
  },
];
