import type { FC } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { orderProductWhatsApp } from '@/utils/whatsapp';
import { PRODUCTS } from '@/data/products';
import { CATALOG_FILTERS, isCatalogFilter, type CatalogFilter } from '@/data/categories';
import type { Product } from '@/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Icon } from '@/components/ui/Icon/Icon';
import { WhatsAppIcon } from '@/components/ui/Icon/WhatsAppIcon';
import { Card, CardAction, CardBody, CardEyebrow, CardImage, CardTitle } from '@/components/ui/Card/Card';
import styles from './Catalog.module.scss';

const defaultFilterFor = (pathname: string): Exclude<CatalogFilter, 'all'> =>
  pathname === '/living' ? 'living' : 'publications';

export const Catalog: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  const defaultFilter = defaultFilterFor(pathname);
  const param = searchParams.get('category');
  const tab: CatalogFilter = isCatalogFilter(param) ? param : defaultFilter;

  const handleTabSelect = (selectedTab: CatalogFilter) => {
    setSearchParams(selectedTab === defaultFilter ? {} : { category: selectedTab });
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
          {CATALOG_FILTERS.map((t) => (
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
          <Card key={p.id}>
            <CardImage src={p.image} alt={p.title} />
            <CardBody>
              <CardEyebrow>{p.category}</CardEyebrow>
              <CardTitle>{p.title}</CardTitle>
              <div className={styles.price}>{p.price}</div>
              <CardAction>
                <Button variant="whatsapp" block onClick={() => orderProductWhatsApp(p.title, p.price)}>
                  <Icon icon={WhatsAppIcon} size={16} />
                  Order via WhatsApp
                </Button>
              </CardAction>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};
