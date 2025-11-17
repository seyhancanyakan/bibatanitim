"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "BIBA ChatGPT mi?",
    answer:
      "Hayır, BIBA ChatGPT değildir. BIBA özellikle dil eğitimi için tasarlanmış, gerçek zamanlı sesli konuşma yapabilen özel bir yapay zeka sistemidir. Temel farklar: (1) Etkileşim: ChatGPT metin tabanlı iken, BIBA sesli, görsel ve gerçek zamanlı konuşur - sizi duyar, dinler ve kamera ile görebilir. (2) Eğitim Odaklı: BIBA okul verileri ve ders müfredatı kapsamında konuşur, ChatGPT genel amaçlıdır. (3) Güvenlik: BIBA guardrail koruma kalkanı ile donatılmıştır - istenmeyen konuları tespit ettiğinde nazikçe konu değiştirir, yasaklı kelimelerde ise konuşmayı reddeder. (4) Simultane Çeviri: BIBA anlık eş zamanlı çeviri yapabilir, farklı diller arasında geçiş sağlar. (5) Raporlama: BIBA öğretmenlere öğrenci takibi ve gelişim raporlama özellikleri sunar. Özetle, ChatGPT ile sohbet edersiniz, BIBA ile güvenli ortamda dil pratiği yaparsınız.",
  },
  {
    question: "BIBA gerçek bir insan mı?",
    answer:
      "Hayır, BIBA yapay zeka destekli bir sistemdir. Ancak öyle doğal konuşur ki gerçek bir öğretmen gibi hissettirir. Gerçek zamanlı konuşma, mimikler ve görsel etkileşim sayesinde çok gerçekçi bir deneyim sunar.",
  },
  {
    question: "İnternet olmadan çalışır mı?",
    answer:
      "Şu anda BIBA'nın çalışması için internet bağlantısı gerekiyor. Minimum 2 Mbps hız önerilir, 5 Mbps ve üzeri ideal deneyim için yeterlidir. Gelecekte offline versiyonu planlanıyor.",
  },
  {
    question: "Kaç öğrenci aynı anda kullanabilir?",
    answer:
      "Sunucu kapasitesine göre 50-100 öğrenci aynı anda sorunsuzca kullanabilir. Daha fazla kullanıcı için sunucu kapasitesi artırılabilir. Sistemimiz ölçeklenebilir tasarımda.",
  },
  {
    question: "Hangi diller destekleniyor?",
    answer:
      "BIBA 15 farklı dili destekler: İngilizce, Türkçe, Almanca, Fransızca, İspanyolca, İtalyanca, Portekizce, Rusça, Arapça, Çince, Japonca, Korece, Hollandaca, Yunanca ve Lehçe. Dilden dile anında geçiş yapabilir, çoklu dilde pratik yapabilirsiniz.",
  },
  {
    question: "Öğrenci verileri saklanıyor mu?",
    answer:
      "Hayır, konuşmalar oturum bitiminde silinir. Kalıcı kayıt tutulmaz. Kamera görüntüleri kesinlikle kaydedilmez, sadece o an için analiz yapılır. Gizlilik bizim önceliğimizdir.",
  },
  {
    question: "Mobil cihazlarda çalışır mı?",
    answer:
      "Evet, BIBA akıllı telefon ve tabletlerde sorunsuz çalışır. Tarayıcınız varsa yeterli! Uygulama yüklemeye gerek yok. PC, tablet, telefon - her cihazda aynı deneyim.",
  },
  {
    question: "Görme yeteneği nasıl çalışır?",
    answer:
      "BIBA sadece özel komutlar söylediğinizde kamerayı açar. 'Can you see me?' veya 'Bugün nasılım?' gibi komutlarla aktif olur. Görsel yapay zeka ile sizi tanır, kıyafetlerinizi görür ve doğal dille yorum yapar.",
  },
  {
    question: "Öğretmenler gelişimi nasıl takip eder?",
    answer:
      "Öğretmenler hangi öğrencinin ne kadar pratik yaptığını, hangi konuları işlediğini, genel ilerlemeyi görebilir. Konuşma süreleri, kullanılan kelimeler ve cümle karmaşıklığı raporlanır.",
  },
  {
    question: "Kurulum zor mu?",
    answer:
      "Kurulum çok basit! Orta düzey bir bilgisayar yeterli (8 GB RAM, 4 çekirdekli işlemci). Otomatik kurulum sistemi sayesinde 30 dakikada hazır. Öğrenci kullanımı ise sadece tarayıcıda web adresini açmak kadar kolay.",
  },
];

export default function FAQSection() {
  return (
    <section id="sss" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Sıkça Sorulan Sorular
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Merak Ettikleriniz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BIBA hakkında en çok sorulan sorular ve cevapları
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl px-6 hover:border-orange-300 hover:shadow-lg transition-all"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-orange-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 max-w-2xl mx-auto border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Başka Sorunuz mu Var?
            </h3>
            <p className="text-gray-600 mb-6">
              Daha fazla bilgi için bizimle iletişime geçebilirsiniz. Teknik
              ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@yomokullari.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                E-posta Gönder
              </a>
              <a
                href="tel:+902121234567"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all"
              >
                Bizi Arayın
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
