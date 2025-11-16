"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    src: "/video/1(1).mp4",
    title: "BIBA Demo 1",
  },
  {
    src: "/video/2.mp4",
    title: "BIBA Demo 2",
  },
  {
    src: "/video/3.mp4",
    title: "BIBA Demo 3",
  },
  {
    src: "/video/4.mp4",
    title: "BIBA Demo 4",
  },
  {
    src: "/video/5.mp4",
    title: "BIBA Demo 5",
  },
];

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              BIBA Kullanım Videoları
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BIBA&apos;yı çalışırken izleyin ve öğrencilerinizin nasıl öğrendiğini görün
          </p>
        </motion.div>

        {/* Video Grid - Portrait/Vertical Videos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gray-900">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  poster={`${video.src}#t=15`}
                  style={{ objectFit: 'contain' }}
                >
                  <source src={video.src} type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2">
                      <Play className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold text-sm">
                        {video.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
