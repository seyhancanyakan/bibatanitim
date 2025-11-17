"use client";

import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Sparkles, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const characters = [
  {
    name: "BiBA Character 1",
    description: "Akıllı ve sevimli karakter. Öğrencilerin favorisi!",
    image: "/resim/21.jpg",
    personality: "Dostça, Öğretici",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "BiBA Character 2",
    description: "Eğlenceli ve enerjik karakter. İlgi çekici konuşmalar için ideal.",
    image: "/resim/22.jpg",
    personality: "Enerjik, Eğlenceli",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "BiBA Character 3",
    description: "Deneyimli ve sabırlı karakter. Başlangıç seviyesi için mükemmel.",
    image: "/resim/23.jpg",
    personality: "Sabırlı, Destekleyici",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "BiBA Character 4",
    description: "Profesyonel ve bilgili karakter. İleri seviye konuşmalar için harika.",
    image: "/resim/24.jpg",
    personality: "Profesyonel, Bilgili",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "BiBA Character 5",
    description: "Yaratıcı ve ilham verici karakter. Yaratıcı konuşmalar için mükemmel.",
    image: "/resim/31.jpg",
    personality: "Yaratıcı, İlham Verici",
    color: "from-pink-500 to-rose-500",
  },
];

export default function CharacterSection() {
  return (
    <section id="karakterler" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Karakterler</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Farklı Karakterlerle Konuş
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her karakter BiBA&apos;nın farklı bir görünümü. Animasyonlu videolar,
            mimikler ve doğal konuşma ile etkileşime geçin.
          </p>
        </motion.div>

        {/* Characters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {characters.map((character, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CardContainer className="w-full">
                <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-full rounded-2xl p-6 border-2 border-gray-200">
                  {/* Character Image */}
                  <CardItem
                    translateZ="100"
                    className="w-full mb-4 relative"
                  >
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={character.image}
                        alt={character.name}
                        fill
                        className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${character.color} opacity-20`}></div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <span className="text-xs font-semibold text-gray-700">
                        {character.personality}
                      </span>
                    </div>
                  </CardItem>

                  {/* Character Name */}
                  <CardItem
                    translateZ="60"
                    className="text-2xl font-bold text-gray-800 mb-2"
                  >
                    {character.name}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    translateZ="40"
                    className="text-gray-600 mb-4 leading-relaxed"
                  >
                    {character.description}
                  </CardItem>

                  {/* Features */}
                  <CardItem translateZ="30" className="w-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        İdle Modu
                      </span>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Konuşuyor Modu
                      </span>
                    </div>
                  </CardItem>

                  {/* Button */}
                  <CardItem translateZ="50" className="w-full">
                    <Button
                      className={`w-full bg-gradient-to-r ${character.color} text-white hover:shadow-lg transition-all`}
                    >
                      Karakteri İncele
                    </Button>
                  </CardItem>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${character.color} opacity-0 group-hover/card:opacity-10 transition-opacity duration-300`}
                  ></div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Custom Character Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6 shadow-xl">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                Kendi Karakterinizi Oluşturun
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                BiBA&apos;ya kendi özel karakterinizi ekleyebilirsiniz! Karakter adı,
                görünüm ve kişilik özelliklerini belirleyin. Sistem otomatik olarak
                karakterinizi canlandırır ve öğrencilerinizle etkileşime geçmesini sağlar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl"
                >
                  Karakter Ekle
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Rehberi İncele
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
