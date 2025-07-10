'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [cartMessage, setCartMessage] = useState('');
  const router = useRouter();

  const handleAddToCart = () => {
    // Simulate local cart addition (can be replaced with context later)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: any) => item.product.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setCartMessage('Added to cart!');
    setTimeout(() => setCartMessage(''), 2000);
  };

  const handleBuyNow = () => {
    // Clear cart and add current product only
    const cart = [{ product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(cart));
    router.push('/cart');
  };

  return (
    <div className="border rounded-xl shadow-md p-4 m-4 w-72 bg-white hover:shadow-xl transition flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>

      <div className="mt-4 space-y-2">
        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Buy Now
        </button>
        {cartMessage && <p className="text-sm text-green-600">{cartMessage}</p>}
      </div>
    </div>
  );
}
