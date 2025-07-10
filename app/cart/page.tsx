'use client';
import { useState } from 'react';
import productsData from '../data/products';
import CartItem from '../components/CartItem';
import { Product } from '../data/products';

interface CartProduct {
  product: Product;
  quantity: number;
}

export default function CartPage() {
  // Start with 2 items in cart
  const [cart, setCart] = useState<CartProduct[]>([
    { product: productsData[0], quantity: 1 },
    { product: productsData[1], quantity: 2 },
  ]);

  const handleAdd = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleRemove = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity === 1) {
      updatedCart.splice(index, 1);
    } else {
      updatedCart[index].quantity -= 1;
    }
    setCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
              onAdd={() => handleAdd(index)}
              onRemove={() => handleRemove(index)}
            />
          ))}
          <div className="text-right mt-6 font-semibold text-xl">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
