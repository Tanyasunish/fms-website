export interface Pillar {
  num: number;
  icon: string;
  name: string;
  sub: string;
  desc: string;
}

export interface UpcomingEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  loc: string;
}

export interface FormationEvent {
  id: string;
  title: string;
  date: string;
  loc: string;
}

export interface Product {
  id: number;
  category: 'publications' | 'living';
  title: string;
  price: string;
  image: string;
}

export interface MediaSeries {
  id: string;
  title: string;
  episodes: string;
  img: string;
}
