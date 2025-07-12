'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MainBanner() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 to-white py-12 px-6 sm:px-12 lg:px-24 overflow-hidden rounded-xl shadow-md">
      <div className="absolute inset-0 opacity-10 z-0">
        <Image
          src="/images/banner-fabric.jpg" 
          alt="Tailor Fabric Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Custom Tailoring Starts Here
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover premium fabrics, perfect fits, and personal style — all from your local expert tailor.
        </p>
        <Link
          href="#fabrics"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Fabrics
        </Link>
      </div>

      {/* Optional Side Illustration */}
      <div className="hidden lg:block absolute right-12 bottom-0 w-72 h-72">
        <Image
          src="/images/illustration-tailor.jpg" // optional illustration
          alt="Tailor illustration"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
