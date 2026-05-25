'use client'

import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contato() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-center gradient-text">Entre em Contato</h1>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Tire suas dúvidas, faça pedidos personalizados ou conheça nossos serviços premium
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-accent/30">
            <h2 className="text-2xl font-bold mb-8 text-accent">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaWhatsapp className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/5511999999999" target="_blank" className="text-gray-300 hover:text-accent transition">
                    +55 11 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaInstagram className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Instagram</h3>
                  <a href="https://instagram.com" target="_blank" className="text-gray-300 hover:text-accent transition">
                    @perfumaria.essenza
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:contato@essenza.com" className="text-gray-300 hover:text-accent transition">
                    contato@essenza.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-300">
                    São Paulo, SP<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-accent/30">
            <h2 className="text-2xl font-bold mb-8 text-accent">Horário de Atendimento</h2>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span className="text-accent font-semibold">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span className="text-accent font-semibold">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span className="text-accent font-semibold">Fechado</span>
              </div>
              
              <hr className="border-gray-700 my-6" />
              
              <p className="text-sm">
                ✨ <strong>Atendimento Premium</strong><br />
                Consultoria de fragrâncias gratuita via WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="https://wa.me/5511999999999" target="_blank" className="btn-primary inline-block">
            Enviar Mensagem via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
