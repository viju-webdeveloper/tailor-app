import { Product } from '../data/products';
import Image from 'next/image';

interface CartItemProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function CartItem({ product, quantity, onAdd, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center space-x-4">
        <Image src={product.image} 
        width={96} height={96}
        alt={product.name} className="w-24 h-24 object-cover rounded" />
        <div>
          <h2 className="font-bold">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onRemove}
          className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
        >
          -
        </button>
        <span className="px-2">{quantity}</span>
        <button
          onClick={onAdd}
          className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
        >
          +
        </button>
      </div>
    </div>
  );
}
