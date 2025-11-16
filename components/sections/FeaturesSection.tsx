"use client";

import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  Mic,
  Eye,
  Languages,
  Users,
  Smartphone,
  MessageSquare,
  Video,
  Zap,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Mic,
    title: "Gerçek Zamanlı Konuşma",
    description:
      "Push-to-talk sistemiyle anında konuşun. BIBA sizi dinler ve saniyeler içinde cevap verir. Doğal diyalog akışı.",
    color: "from-blue-500 to-blue-600",
    image: "/resim/39kSgwlMnMqHphgI7Bezn.png",
  },
  {
    icon: Eye,
    title: "Görme Yeteneği",
    description:
      "BIBA sizi kamera ile görebilir! 'How do I look?' dediğinizde size bakıp İngilizce yorum yapar. Çevrenizi analiz eder.",
    color: "from-purple-500 to-purple-600",
    image: "/resim/4f3cX3-GGSgJJgq6X-bHU.png",
  },
  {
    icon: Languages,
    title: "15 Dil Desteği",
    description:
      "İngilizce, Türkçe, Almanca, Fransızca, İspanyolca ve 10+ dil desteği. Dilden dile geçiş yapabilir, çoklu dilde pratik yapabilirsiniz.",
    color: "from-green-500 to-green-600",
    image: "/resim/PPxr5CIf7uf7rqvgB25HM_upscayl_3x_realesrgan-x4plus.png",
  },
  {
    icon: Video,
    title: "Farklı Karakterler",
    description:
      "Birden fazla animasyonlu karakter arasından seçim yapın. Kendi karakterinizi bile ekleyebilirsiniz!",
    color: "from-orange-500 to-orange-600",
    image: "/resim/pEqanPz3HLTEl8lP_jFqo_upscayl_3x_realesrgan-x4plus.png",
  },
  {
    icon: Smartphone,
    title: "Her Cihazda Çalışır",
    description:
      "Bilgisayar, tablet, telefon... Tarayıcınız varsa yeterli! Uygulama yüklemeye gerek yok.",
    color: "from-pink-500 to-pink-600",
    image: "/resim/adxF0VsB5L1vodhDRJEiX_upscayl_3x_realesrgan-x4plus.png",
  },
  {
    icon: MessageSquare,
    title: "Esnek İletişim",
    description:
      "İki şekilde iletişim: Sesli veya yazılı. Gürültülü ortamdaysanız chat kullanın, sessiz ortamdaysanız konuşun.",
    color: "from-cyan-500 to-cyan-600",
    image: "/resim/KA840yT2_Ccp320YmdAX8_upscayl_3x_realesrgan-x4plus.png",
  },
  {
    icon: Users,
    title: "Öğretmen Kontrolü",
    description:
      "Öğretmenler öğrenci gelişimini takip edebilir. Konuşma geçmişi, süre ve ilerleme raporları.",
    color: "from-indigo-500 to-indigo-600",
    image: "/resim/Rb4ofpAT7wXBOb-57YlgB.png",
  },
  {
    icon: Zap,
    title: "Hızlı ve Güvenli",
    description:
      "200-500ms gecikme ile gerçek zamanlı deneyim. Verileriniz güvende, kayıt yapılmaz, gizlilik öncelikli.",
    color: "from-red-500 to-red-600",
    image: "/resim/_AbYGAfzmWC-xb4A0ab64_upscayl_3x_realesrgan-x4plus.png",
  },
];

export default function FeaturesSection() {
  return (
    <section id="ozellikler" className="py-20 bg-white">
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BIBA&apos;nın Güçlü Özellikleri
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yapay zeka destekli sistemimiz, öğrencilerinizin İngilizce
            konuşma becerilerini geliştirmek için özel olarak tasarlanmıştır.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContainer className="w-full">
                <CardBody className="bg-gradient-to-br from-gray-50 to-white relative group/card hover:shadow-2xl w-full h-full rounded-xl p-6 border border-gray-200">
                  {/* Icon */}
                  <CardItem
                    translateZ="50"
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-gray-800 mb-2"
                  >
                    {feature.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    translateZ="40"
                    className="text-sm text-gray-600 leading-relaxed mb-4"
                  >
                    {feature.description}
                  </CardItem>

                  {/* Image Preview */}
                  <CardItem translateZ="80" className="w-full mt-4">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover/card:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-20`}></div>
                    </div>
                  </CardItem>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-0 group-hover/card:opacity-5 transition-opacity duration-300`}
                  ></div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
