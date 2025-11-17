"use client";

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <div>
                <div className="text-xl font-bold text-white">BiBA</div>
                <div className="text-xs text-gray-400">YÖM Special Edition</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Yapay zeka destekli İngilizce konuşma asistanı. Öğrencilerinizin
              başarısı için tasarlandı.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#ozellikler" className="text-sm hover:text-blue-400 transition-colors">
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#karakterler" className="text-sm hover:text-blue-400 transition-colors">
                  Karakterler
                </a>
              </li>
              <li>
                <a href="#kullanim" className="text-sm hover:text-blue-400 transition-colors">
                  Kullanım
                </a>
              </li>
              <li>
                <a href="#teknoloji" className="text-sm hover:text-blue-400 transition-colors">
                  Teknoloji
                </a>
              </li>
              <li>
                <a href="#sss" className="text-sm hover:text-blue-400 transition-colors">
                  S.S.S
                </a>
              </li>
            </ul>
          </div>

          {/* YÖM Schools */}
          <div>
            <h3 className="text-white font-semibold mb-4">YÖM Okulları</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Kampüslerimiz
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Eğitim Programları
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 BiBA - YÖM Okulları. Tüm hakları saklıdır.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
              Kullanım Koşulları
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
