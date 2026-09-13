export const CATEGORIES = ['publications', 'living'] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATALOG_FILTERS = ['all', ...CATEGORIES] as const;
export type CatalogFilter = (typeof CATALOG_FILTERS)[number];

export const isCategory = (value: string | null): value is Category =>
  value !== null && CATEGORIES.includes(value as Category);

export const isCatalogFilter = (value: string | null): value is CatalogFilter =>
  value !== null && CATALOG_FILTERS.includes(value as CatalogFilter);
