import products, { Product } from '../../data/products';
import Image from 'next/image';

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
   const { id } = await params;
  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <Image
          width={500}
          height={500}
          src={product.image}
          className="w-full h-90 object-cover rounded mb-4"
          alt={product.name}
        />
        <p className="mb-2">{product.description}</p>
        <p className="text-xl font-semibold">Price: ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
