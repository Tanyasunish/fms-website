import type { Product } from '../types';

export const PRODUCTS: readonly Product[] = [
  {
    id: 1,
    category: 'publications',
    title: 'Walking with Mary Reflection Book',
    price: '₹350',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    category: 'publications',
    title: 'The Enemy Within Study Guide',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    category: 'living',
    title: 'Sacred Heart Framed Canvas',
    price: '₹1,200',
    image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    category: 'living',
    title: 'Handcrafted Olive Wood Rosary',
    price: '₹650',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=500&q=80',
  },
];
