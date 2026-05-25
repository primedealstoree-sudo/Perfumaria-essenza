'use client'

import Link from 'next/link'

export default function Banner() {
  return (
    <section className="mt-20 relative h-96 md:h-screen bg-gradient-to-br from-black via-gray-900 to-dark-teal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
      </div>

      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Perfumaria Essenza
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Descubra fragrâncias que contam histórias de elegância, sofisticação e luxo. 
            Cada aroma é uma experiência sensorial única.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/femininos" className="btn-primary">
              Explorar Femininos
            </Link>
            <Link href="/masculinos" className="btn-secondary">
              Explorar Masculinos
            </Link>
          </div>

          <p className="text-accent text-sm md:text-base font-semibold">
            ✨ Seleção Premium de Perfumes Importados
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
