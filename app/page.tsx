import ProductCard from "./components/ProductCard";
import products from "./data/products";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSlider />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Tailor Shop</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
