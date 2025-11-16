# BIBA - YÖM Koleji Tanıtım Web Sitesi

YÖM Okulları için özel olarak geliştirilen yapay zeka destekli çoklu dil konuşma asistanı BIBA'nın profesyonel tanıtım web sitesi. 15 farklı dil desteği ile öğrencilerinizin dil becerilerini geliştirin.

## 🎨 Özellikler

- ✨ Modern ve kurumsal tasarım
- 🎭 3D hover efektli kart animasyonları
- 📱 Tam responsive tasarım (mobil, tablet, desktop)
- ⚡ Framer Motion ile akıcı animasyonlar
- 🎨 Gradient ve glassmorphism efektleri
- 📸 public/resim klasöründeki tüm görseller entegre
- 🧩 Shadcn/ui ile modern UI bileşenleri
- 🔄 Smooth scroll navigasyon
- 📋 Interaktif FAQ (Accordion)

## 🛠️ Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript
- **Styling:** Tailwind CSS
- **Animasyonlar:** Framer Motion
- **UI Kütüphanesi:** Shadcn/ui
- **İkonlar:** Lucide React

## 📂 Proje Yapısı

```
biba-tanitim/
├── app/
│   ├── globals.css          # Global stiller
│   ├── layout.tsx            # Ana layout
│   └── page.tsx              # Ana sayfa
├── components/
│   ├── sections/             # Sayfa bölümleri
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CharacterSection.tsx
│   │   ├── UsageSection.tsx
│   │   ├── TechnologySection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/                   # UI bileşenleri
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── 3d-card.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/
│   └── resim/                # Tüm görseller ve videolar
└── lib/
    └── utils.ts              # Yardımcı fonksiyonlar
```

## 🚀 Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

## 📱 Sayfalar ve Bölümler

### 1. Hero Section
- Büyük başlık ve açıklama
- CTA butonları (Demo İste, Detaylı Bilgi)
- Animasyonlu arka plan
- YÖM öğrenci kullanım görseli
- İstatistik kartları (100+ öğrenci, 24/7 erişim)

### 2. Features Section
- 8 ana özellik 3D hover kartlarla
- Her kartda ikon, başlık, açıklama ve görsel
- Gerçek zamanlı konuşma, görme yeteneği, karakterler vb.

### 3. Character Section
- BIBA karakterlerinin tanıtımı
- 3 farklı baykuş karakteri
- "Kendi karakterini oluştur" bölümü
- Her karakter için detaylı kart

### 4. Usage Section
- Sınıf içi kullanım senaryoları
- Akıllı tahta kullanımı
- Evden erişim
- Öğretmen avantajları

### 5. Technology Section
- 6 teknoloji kategorisi
- Konuşma tanıma ve sentezi
- Görsel zeka
- Güvenlik ve gizlilik
- Sistem mimarisi açıklaması

### 6. FAQ Section
- 10 sık sorulan soru
- Accordion (açılır-kapanır) tasarım
- İletişim bilgileri

### 7. CTA Section
- Son harekete geçirici bölüm
- İstatistikler
- İletişim butonları
- BIBA karakteri görseli

### 8. Footer
- Hızlı bağlantılar
- Sosyal medya linkleri
- İletişim bilgileri
- Copyright ve gizlilik politikası

## 🎨 Tasarım Özellikleri

- **Renkler:** Mavi, mor, pembe gradient tonları
- **Font:** Inter (Google Fonts)
- **Animasyonlar:**
  - Fade in/out
  - Slide up/in
  - Float efekti
  - 3D tilt efekti
  - Hover transformasyonlar
- **Responsive:** Mobile-first yaklaşım

## 🖼️ Kullanılan Görseller

Tüm görseller `public/resim/` klasöründe:
- BIBA baykuş karakterleri
- YÖM okul fotoğrafları
- Öğrenci kullanım görselleri
- Kiosk ve sınıf içi kullanım

## 📦 Build ve Deploy

1. **Production build oluşturun:**
   ```bash
   npm run build
   ```

2. **Production sunucusunu başlatın:**
   ```bash
   npm start
   ```

## 🔧 Geliştirme

- Yeni bir bölüm eklemek için `components/sections/` klasörüne yeni component oluşturun
- Ana sayfaya eklemek için `app/page.tsx` dosyasını düzenleyin
- Stil değişiklikleri için `tailwind.config.ts` ve `app/globals.css` kullanın

## 📄 Lisans

© 2025 BIBA - YÖM Okulları. Tüm hakları saklıdır.

## 📞 İletişim

- **Email:** info@yomokullari.com
- **Telefon:** +90 (212) 123 45 67
- **Website:** http://localhost:3000
