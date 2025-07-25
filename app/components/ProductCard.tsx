'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../data/products";
import Image from "next/image";
import { ShoppingCart, CreditCard } from 'lucide-react';

interface Props {
  product: Product;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export default function ProductCard({ product }: Props) {
  const [cartMessage, setCartMessage] = useState('');
  const router = useRouter();

  const handleAddToCart = () => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: CartItem) => item.product.id === product.id);

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
    const cart: CartItem[] = [{ product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(cart));
    router.push('/cart');
  };

  return (
    <div className="border rounded-xl shadow-md p-4 m-4 w-72 bg-white hover:shadow-xl transition flex flex-col justify-between">
      {/* Image */}
      <Image
        width={300}
        height={480}
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Content area with flexible height */}
      <div className="flex-1 flex flex-col justify-between mt-2">
        <div>
          <h2 className="text-lg font-semibold min-h-[48px]">{product.name}</h2>
          <p className="text-gray-700">₹{product.price.toFixed(2)}</p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="cursor-pointer flex items-center justify-center gap-1 flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="cursor-pointer flex items-center justify-center gap-1 flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            <CreditCard className="w-4 h-4" />
            Buy Now
          </button>
        </div>

        {cartMessage && (
          <p className="text-sm text-green-600 mt-2">{cartMessage}</p>
        )}
      </div>
    </div>
  );
}
