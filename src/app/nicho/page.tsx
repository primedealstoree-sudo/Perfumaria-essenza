'use client'

import ProductGrid from '@/components/ProductGrid'

export default function Nicho() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Perfumes Nicho & Luxo</h1>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Fragrâncias exclusivas e limitadas para os verdadeiros apreciadores de perfumaria fina
        </p>
        <ProductGrid category="nicho" />
      </div>
    </div>
  )
}
