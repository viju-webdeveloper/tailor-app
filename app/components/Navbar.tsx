'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { getUniqueCategories } from '../utils/getCategories';

const categories = getUniqueCategories();

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TailorShop
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search fabrics..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </Link>
          <Link href="/login">
            <User className="w-6 h-6 text-gray-700" />
          </Link>
          <button onClick={toggleMenu} className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Desktop Categories */}
      <div className="hidden md:flex justify-center gap-8 bg-gray-100 py-2">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${encodeURIComponent(cat)}`}
            className="text-gray-700 hover:text-blue-600 capitalize"
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-2">
          <input
            type="text"
            placeholder="Search fabrics..."
            className="w-full px-4 py-2 border rounded-md mb-3"
          />
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${encodeURIComponent(cat)}`}
              className="block text-gray-700 hover:text-blue-600 capitalize"
            >
              {cat}
            </Link>
          ))}
          <Link href="/login" className="block text-gray-700 hover:text-blue-600">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
