'use client';

import Image from 'next/image';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { Clothes } from '../data/clothes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  cloth: Clothes;
}

interface CartItem {
  cloth: Clothes;
  quantity: number;
}

export default function ClothesCard({ cloth }: Props) {
  const router = useRouter();
  const [cartMessage, setCartMessage] = useState('');

  const handleAddToCart = () => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item) => item.cloth.id === cloth.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ cloth, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setCartMessage('Added to cart!');
    setTimeout(() => setCartMessage(''), 2000);
  };

  const handleBuyNow = () => {
    const cart: CartItem[] = [{ cloth, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(cart));
    router.push('/cart');
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 w-full max-w-xs mx-auto flex flex-col">
      <Image
        src={cloth.image}
        alt={cloth.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{cloth.name}</h3>
          <p className="text-sm text-gray-500">{cloth.category}</p>
          <p className="text-md text-gray-700 font-medium mt-1">
            ₹{cloth.price.toFixed(2)} / meter
          </p>
        </div>

        <div className="flex space-x-2 mt-4">
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
          <p className="text-xs text-green-600 mt-2">{cartMessage}</p>
        )}
      </div>
    </div>
  );
}
