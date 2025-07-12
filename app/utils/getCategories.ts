import clothes from '../data/clothes';

export function getUniqueCategories(): string[] {
  const categories = clothes.map((c) => c.category);
  return Array.from(new Set(categories));
}
