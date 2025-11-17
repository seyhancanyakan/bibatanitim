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
              BiBA ile Konuş
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hemen şimdi BiBA ile İngilizce pratik yapın! Gerçek zamanlı konuşma deneyimini yaşayın.
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
                <span className="text-white font-semibold">BiBA Canlı Demo</span>
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
                title="BiBA Interactive Demo"
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
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-xl border border-blue-200">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">
                İpucu: BiBA&apos;ya &quot;Can you see me?&quot; diyerek görüş özelliğini aktif edebilirsiniz
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
