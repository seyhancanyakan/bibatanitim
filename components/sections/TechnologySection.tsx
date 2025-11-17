"use client";

import { motion } from "framer-motion";
import { Cpu, Mic2, Eye, Zap, Shield, Globe } from "lucide-react";

const technologies = [
  {
    icon: Mic2,
    title: "Konuşma Tanıma",
    description: "Sizi dinler ve metne çevirir",
    features: [
      "Çok hassas dinleme sistemi",
      "15 farklı dil desteği",
      "Gürültü filtreleme",
      "Farklı hız ve kalite motorları",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "Konuşma Sentezi",
    description: "Doğal sesle cevap verir",
    features: [
      "15 dilde doğal ses desteği",
      "Çoklu erkek ve kadın sesler",
      "Tonlama ve vurgu",
      "Gerçek insan gibi konuşma",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Görsel Zeka",
    description: "Kamera ile sizi görebilir",
    features: [
      "İnsanları tanır",
      "Kıyafetleri görür",
      "Mimikleri okur",
      "Sadece komutla aktif",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Gerçek Zamanlı",
    description: "Hızlı ve anında",
    features: [
      "Konuşma-cevap: 200-500ms",
      "Görsel analiz: 2-4 saniye",
      "Minimum gecikme",
      "Akıcı deneyim",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Güvenlik",
    description: "Gizlilik öncelikli",
    features: [
      "Kayıt yapılmaz",
      "Şifreli iletişim",
      "Kamera kaydedilmez",
      "Güvenli sunucular",
    ],
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Erişilebilirlik",
    description: "Her cihazda çalışır",
    features: [
      "Tarayıcı yeterli",
      "Uygulama yükleme yok",
      "PC, tablet, telefon",
      "Minimum 2 Mbps internet",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

export default function TechnologySection() {
  return (
    <section id="teknoloji" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Gelişmiş Teknoloji Altyapısı
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BiBA, birbirini tamamlayan akıllı sistemlerden oluşur. Her sistem,
            en iyi öğrenme deneyimi için optimize edilmiştir.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm`}></div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform`}>
                <tech.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {tech.title}
              </h3>
              <p className="text-gray-600 mb-4">{tech.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.color} mt-2 flex-shrink-0`}></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sistem Mimarisi
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                BiBA&apos;nın arkasındaki güçlü altyapı
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Konuşma Motoru", desc: "Dinler, anlar ve cevap oluşturur" },
                { title: "Görsel Zeka", desc: "Kamera görüntülerini analiz eder" },
                { title: "Konuşma Zekası", desc: "Diyalog yönetimi ve bağlam takibi" },
                { title: "Karakter Sistemi", desc: "Video oynatma ve karakter yönetimi" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </div>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
