'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaSearch, FaBars, FaTimes, FaShoppingCart, FaHeart } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="fixed w-full top-0 z-50 bg-black border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-accent hover:text-yellow-400 transition">
          ✨ ESSENZA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/masculinos" className="text-gray-300 hover:text-accent transition font-semibold">
            Masculinos
          </Link>
          <Link href="/femininos" className="text-gray-300 hover:text-accent transition font-semibold">
            Femininos
          </Link>
          <Link href="/nicho" className="text-gray-300 hover:text-accent transition font-semibold">
            Nicho & Luxo
          </Link>
          <Link href="/promocoes" className="text-gray-300 hover:text-accent transition font-semibold">
            Promoções
          </Link>
          <Link href="/contato" className="text-gray-300 hover:text-accent transition font-semibold">
            Contato
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-900 rounded-lg px-4 py-2 w-72">
          <input
            type="text"
            placeholder="Buscar perfume..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-white outline-none w-full text-sm"
          />
          <FaSearch className="text-accent cursor-pointer" />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-accent hover:text-yellow-400 transition text-xl">
            <FaHeart />
          </button>
          <button className="text-accent hover:text-yellow-400 transition text-xl relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-accent text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-accent/20 p-4 space-y-4">
          <Link href="/masculinos" className="block text-gray-300 hover:text-accent transition font-semibold">
            Masculinos
          </Link>
          <Link href="/femininos" className="block text-gray-300 hover:text-accent transition font-semibold">
            Femininos
          </Link>
          <Link href="/nicho" className="block text-gray-300 hover:text-accent transition font-semibold">
            Nicho & Luxo
          </Link>
          <Link href="/promocoes" className="block text-gray-300 hover:text-accent transition font-semibold">
            Promoções
          </Link>
          <Link href="/contato" className="block text-gray-300 hover:text-accent transition font-semibold">
            Contato
          </Link>
          <div className="flex items-center bg-gray-900 rounded-lg px-4 py-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent text-white outline-none w-full text-sm"
            />
            <FaSearch className="text-accent" />
          </div>
        </nav>
      )}
    </header>
  )
}
