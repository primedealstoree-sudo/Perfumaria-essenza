'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-accent/20 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">✨ ESSENZA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A mais refinada seleção de perfumes premium. Fragrâncias que contam histórias de elegância e sofisticação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/masculinos" className="hover:text-accent transition">Masculinos</Link></li>
              <li><Link href="/femininos" className="hover:text-accent transition">Femininos</Link></li>
              <li><Link href="/nicho" className="hover:text-accent transition">Nicho & Luxo</Link></li>
              <li><Link href="/promocoes" className="hover:text-accent transition">Promoções</Link></li>
              <li><Link href="/contato" className="hover:text-accent transition">Contato</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Atendimento</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-accent transition">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-accent transition">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-accent transition">Rastreamento</a></li>
              <li><a href="#" className="hover:text-accent transition">Devoluções</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Conecte-se</h4>
            <p className="text-gray-400 text-sm mb-4">
              📱 +55 11 99999-9999<br />
              📧 contato@essenza.com
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-accent text-xl transition">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-accent text-xl transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-accent text-xl transition">
                <FaTwitter />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" className="text-gray-400 hover:text-accent text-xl transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-gray-900 to-black border border-accent/30 rounded-lg p-8 mb-12">
          <h4 className="text-xl font-semibold text-white mb-2">Receba Nossas Novidades</h4>
          <p className="text-gray-400 mb-4">Promoções exclusivas, novos perfumes e dicas direto na sua caixa</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="btn-primary">Inscrever</button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 Perfumaria Essenza. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>💳 Parcelamos em até 12x</span>
            <span>🚚 Frete para todo Brasil</span>
            <span>🔒 Compra 100% Segura</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
