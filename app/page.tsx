import HeroSlider from "./components/HeroSlider";
import ProductSlider from "./components/ProductSlider";
import products from "./data/products";
import ClothesSlider from './components/ClothesSlider';
import clothes from './data/clothes';
import MainBanner from "./components/MainBanner";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSlider />

      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Tailor Shop</h1>
        <p className="text-center text-gray-600 mb-12">
          Explore our collection of custom clothing and fabrics.
        </p>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <ProductSlider products={products} />
        <div className="my-12 border-t border-gray-300"></div>
        <h2 className="text-2xl font-semibold mt-12 mb-6">Featured Clothes</h2>
        <ClothesSlider clothes={clothes} />
        <div className="my-12"></div>
        <MainBanner />
      </div>
    </div>
  );
}
