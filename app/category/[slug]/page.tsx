import { notFound } from 'next/navigation';
import { Clothes } from '@/app/data/clothes';
import clothes from '@/app/data/clothes';
import ClothesCard from '@/app/components/ClothesCard';


// 👇 Async function to handle dynamic `params`
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
   const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const filtered = clothes.filter(
    (item: Clothes) =>
      item.category.toLowerCase() === decodedSlug.toLowerCase()
  );

  if (filtered.length === 0) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {decodedSlug} Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((cloth) => (
          <ClothesCard key={cloth.id} cloth={cloth} />
        ))}
      </div>
    </div>
  );
}
