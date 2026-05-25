'use client'

import Banner from '@/components/Banner'
import ProductGrid from '@/components/ProductGrid'
import Categories from '@/components/Categories'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Destaques da Coleção
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Descubra nossos perfumes mais procurados, selecionados com excelência e sofisticação
          </p>
          <ProductGrid category="todos" />
        </div>
      </section>
      <Testimonials />
    </div>
  )
}
