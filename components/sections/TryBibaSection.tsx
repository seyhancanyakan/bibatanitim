"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

export default function TryBibaSection() {
  return (
    <section id="dene" className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Canlı Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              BIBA ile Konuş
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hemen şimdi BIBA ile İngilizce pratik yapın! Gerçek zamanlı konuşma deneyimini yaşayın.
          </p>
        </motion.div>

        {/* Iframe Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200 bg-white">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
                <span className="text-white font-semibold">BIBA Canlı Demo</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-white text-sm">Çevrimiçi</span>
              </div>
            </div>

            {/* Iframe */}
            <div className="relative w-full" style={{ height: "700px" }}>
              <iframe
                src="https://biba2.sozy.io"
                className="w-full h-full border-0"
                title="BIBA Interactive Demo"
                allow="camera; microphone; autoplay"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>Mikrofon ve kamera izni gerekebilir</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Sparkles className="w-4 h-4 text-orange-600" />
                    <span>15 Dil Desteği</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4 text-orange-600" />
                    <span>Gerçek Zamanlı Yanıt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 space-y-6"
          >
            {/* Language Switching Hint */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Dil Değiştirme
              </h3>
              <p className="text-sm text-purple-700 mb-3">
                Konuşmak istediğiniz dil adını söyleyerek otomatik dil değiştirebilirsiniz:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <span className="text-sm font-semibold text-purple-900">&quot;Speak English&quot;</span>
                  <p className="text-xs text-gray-600 mt-1">İngilizceye geçiş</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <span className="text-sm font-semibold text-purple-900">&quot;Speak Turkish&quot;</span>
                  <p className="text-xs text-gray-600 mt-1">Türkçeye geçiş</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <span className="text-sm font-semibold text-purple-900">&quot;Speak French&quot;</span>
                  <p className="text-xs text-gray-600 mt-1">Fransızcaya geçiş</p>
                </div>
              </div>
              <p className="text-xs text-purple-600 mt-3 italic">
                💡 İpucu: Diğer diller için de &quot;Speak [Dil Adı]&quot; formatını kullanabilirsiniz (Spanish, German, Italian, vb.)
              </p>
            </div>

            {/* Wake Words Section */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Wake Word&apos;ler (Uyandırma Kelimeleri)
              </h3>
              <p className="text-sm text-orange-700 mb-4">
                BIBA ile etkileşime geçmek için kullanabileceğiniz özel komutlar:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-2">
                      <Sparkles className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-orange-900 mb-1">&quot;Can you see me?&quot;</h4>
                      <p className="text-xs text-gray-600">Görüntü özelliğini aktif eder, BIBA sizi görebilir</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-2">
                      <MessageCircle className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-orange-900 mb-1">&quot;Hey BIBA&quot;</h4>
                      <p className="text-xs text-gray-600">BIBA&apos;nın dikkatini çeker ve konuşmayı başlatır</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-2">
                      <Sparkles className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-orange-900 mb-1">&quot;Stop listening&quot;</h4>
                      <p className="text-xs text-gray-600">BIBA&apos;nın dinlemeyi durdurmasını sağlar</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-2">
                      <MessageCircle className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-orange-900 mb-1">&quot;Start listening&quot;</h4>
                      <p className="text-xs text-gray-600">BIBA&apos;nın tekrar dinlemeye başlamasını sağlar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
