import type { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { orderProductWhatsApp } from '@/utils/whatsapp';
import { PRODUCTS } from '@/data/products';
import type { Product } from '@/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Icon } from '@/components/ui/Icon/Icon';
import { WhatsAppIcon } from '@/components/ui/Icon/WhatsAppIcon';
import styles from './Catalog.module.scss';

type Category = 'all' | 'publications' | 'living';

const CATEGORIES: readonly Category[] = ['all', 'publications', 'living'];

const isCategory = (value: string | null): value is Category =>
  value === 'all' || value === 'publications' || value === 'living';

export interface CatalogProps {
  initialCategory?: Exclude<Category, 'all'>;
}

export const Catalog: FC<CatalogProps> = ({ initialCategory = 'publications' }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const param = searchParams.get('category');
  const tab: Category = isCategory(param) ? param : initialCategory;

  const handleTabSelect = (selectedTab: Category) => {
    setSearchParams({ category: selectedTab });
  };

  const filtered = tab === 'all' ? PRODUCTS : PRODUCTS.filter((p: Product) => p.category === tab);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionHeading
          title="PUBLICATIONS & LIVING"
          lead="Tap any item to order instantly via WhatsApp directly with our distribution team."
        />
        <div className={styles.tabs} role="group" aria-label="Filter products">
          {CATEGORIES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleTabSelect(t)}
              aria-pressed={tab === t}
              className={[styles.tab, tab === t && styles.tabActive].filter(Boolean).join(' ')}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.map((p: Product) => (
          <article key={p.id} className={styles.productCard}>
            <img src={p.image} alt={p.title} loading="lazy" className={styles.thumb} />
            <div className={styles.productBody}>
              <span className={styles.category}>{p.category}</span>
              <h4 className={`${styles.productTitle} serif`}>{p.title}</h4>
              <div className={styles.price}>{p.price}</div>
              <Button variant="whatsapp" block className={styles.orderBtn} onClick={() => orderProductWhatsApp(p.title, p.price)}>
                <Icon icon={WhatsAppIcon} size={16} />
                Order via WhatsApp
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};