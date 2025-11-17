"use client";

import { motion } from "framer-motion";
import { Users, Home, School, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";

const usageScenarios = [
  {
    icon: School,
    title: "Sınıfta Kullanım",
    scenarios: [
      {
        name: "Warming-up (Isınma)",
        description: "Ders başında tüm sınıf BiBA ile selamlaşır. Her öğrenci kısa bir diyalog yapar.",
        duration: "5-10 dakika",
      },
      {
        name: "Grup Aktivitesi",
        description: "Öğrenciler ikişerli veya gruplar halinde BiBA ile konuşur. Belirli konular verilir - tanışma, alışveriş vb.",
        duration: "15-20 dakika",
      },
      {
        name: "Bireysel Pratik",
        description: "Bilgisayar laboratuvarında her öğrenci kendi temponda konuşur.",
        duration: "20-30 dakika",
      },
      {
        name: "Akıllı Tahta Gösterimi",
        description: "BiBA görüntüsü akıllı tahtada. Tüm sınıf görebilir ve takip edebilir.",
        duration: "Tüm ders",
      },
      {
        name: "Eşzamanlı Kullanım",
        description: "Onlarca öğrenci aynı anda kendi cihazlarından BiBA ile konuşabilir. Paralel pratik imkanı.",
        duration: "Sınırsız",
      },
    ],
    images: [
      "/resim/Gagrhgh3LMThocV0gvWxC.png",
      "/resim/QWuAzmS7qSyWtbIZu5Doz.png"
    ],
  },
  {
    icon: Home,
    title: "Evden Kullanım - Her Cihazda",
    scenarios: [
      {
        name: "Tablet ile Pratik",
        description: "Çocuklar evlerinde tablet ile rahatça BiBA ile konuşabilir. Mobilite ve kullanım kolaylığı.",
        duration: "İstediği kadar",
      },
      {
        name: "Laptop ile Ödev",
        description: "Masabaşında laptop ile konuşma pratiği. Not alırken aynı anda BiBA ile diyalog kurabilir.",
        duration: "20-30 dakika",
      },
      {
        name: "Görüntülü Etkileşim",
        description: "BiBA'nın görme özelliğini evden kullanarak etkileşimli pratik. Kamera ile görsel geri bildirim.",
        duration: "Sınırsız",
      },
      {
        name: "Çoklu Karakter Deneyimi",
        description: "Evden farklı BiBA karakterleri ile pratik yapma imkanı. Her karakter farklı kişilik.",
        duration: "İstediği kadar",
      },
      {
        name: "Rahat Ortamda Öğrenme",
        description: "Kendi odasında, rahat bir şekilde, oyuncakları ile birlikte BiBA ile konuşma pratiği.",
        duration: "Sınırsız",
      },
    ],
    images: [
      "/resim/39kSgwlMnMqHphgI7Bezn.png",
      "/resim/4f3cX3-GGSgJJgq6X-bHU.png",
      "/resim/adxF0VsB5L1vodhDRJEiX_upscayl_3x_realesrgan-x4plus.png",
      "/resim/pEqanPz3HLTEl8lP_jFqo_upscayl_3x_realesrgan-x4plus.png",
      "/resim/KA840yT2_Ccp320YmdAX8_upscayl_3x_realesrgan-x4plus.png",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Zaman Tasarrufu",
    description: "Öğretmenler her öğrenciyle birebir uğraşmak yerine BiBA'ya emanet edebilir",
  },
  {
    icon: Users,
    title: "Eşit Fırsat",
    description: "Her öğrenci eşit konuşma süresi ve dikkat alır. Utangaçlık sorunu kalmaz",
  },
  {
    icon: TrendingUp,
    title: "Hızlı Gelişim",
    description: "Düzenli pratik yapan öğrencilerde 2-3 ay içinde gözle görülür ilerleme",
  },
];

export default function UsageSection() {
  return (
    <section id="kullanim" className="py-20 bg-white">
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
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              BiBA Nerede Kullanılır?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sınıf içi, laboratuvar, evden erişim... BiBA her ortamda
            öğrencilerinize destek verir.
          </p>
        </motion.div>

        {/* Usage Scenarios */}
        <div className="space-y-16 mb-20">
          {usageScenarios.map((usage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                  <usage.icon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{usage.title}</span>
                </div>

                <div className="space-y-6">
                  {usage.scenarios.map((scenario, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-800">
                          {scenario.name}
                        </h4>
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          {scenario.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {scenario.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                {/* Classroom Images - Simple Grid */}
                {index === 0 && (
                  <div className="space-y-4">
                    {usage.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-50">
                        <Image
                          src={img}
                          alt={`${usage.title} ${imgIdx + 1}`}
                          fill
                          className="object-contain hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Home Usage Images - Balanced Grid Layout */}
                {index === 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {/* First Row - 2 Images */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-50"
                    >
                      <Image
                        src={usage.images[0]}
                        alt="Tablet ile pratik"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-50"
                    >
                      <Image
                        src={usage.images[1]}
                        alt="Laptop ile ödev"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>

                    {/* Second Row - 2 Images */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-50"
                    >
                      <Image
                        src={usage.images[2]}
                        alt="Görüntülü etkileşim"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-50"
                    >
                      <Image
                        src={usage.images[3]}
                        alt="Çoklu karakter"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>

                    {/* Third Row - 1 Large Image (Full Width) */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="col-span-2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-50 ring-4 ring-blue-100"
                    >
                      <Image
                        src={usage.images[4]}
                        alt="Rahat ortamda öğrenme"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Öğretmenler İçin Avantajlar
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              BiBA, öğretmenlerin iş yükünü azaltır ve öğrenci başarısını artırır
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
