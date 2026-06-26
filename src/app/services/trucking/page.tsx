"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import { 
  Anchor, 
  Truck, 
  Ship, 
  Globe, 
  Container, 
  HardHat, 
  ArrowRightLeft, 
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// WhatsApp links
const WHATSAPP_TRUCKING = "https://wa.me/6281110120863?text=Hello%20PT%20LAPS,%20I%20would%20like%20to%20inquire%20about%20trailer%20transportation%20services.";

// Client images
const clientImages = [
  "/gallery/client_1.jpg",
  "/gallery/client_2.png",
  "/gallery/client_3.jpg",
  "/gallery/client_4.jpg",
  "/gallery/client_5.jpg",
  "/gallery/client_6.jpg.svg",
  "/gallery/client_7.jpg",
  "/gallery/client_8.jpg",
  "/gallery/client_9.jpg",
];

// Fleet images (using placeholders for now, but with correct structure)
const fleetImages = [
  { src: "/gallery/armada1.jpeg", alt: "Fleet 1" },
  { src: "/gallery/armada2.jpeg", alt: "Fleet 2" },
  { src: "/gallery/armada3.jpeg", alt: "Fleet 3" },
];

export default function TruckingPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const truckingServices = [
    { title: t("services.p2d.title"), desc: t("services.p2d.desc"), icon: Anchor },
    { title: t("services.d2p.title"), desc: t("services.d2p.desc"), icon: Ship },
    { title: t("services.d2d.title"), desc: t("services.d2d.desc"), icon: ArrowRightLeft },
    { title: t("services.land.title"), desc: t("services.land.desc"), icon: Truck },
    { title: t("services.exim.title"), desc: t("services.exim.desc"), icon: Globe },
    { title: t("services.trailer.title"), desc: t("services.trailer.desc"), icon: Container },
    { title: t("services.charter.title"), desc: t("services.charter.desc"), icon: Ship },
    { title: t("services.stevedoring.title"), desc: t("services.stevedoring.desc"), icon: HardHat },
  ];

  const faqItems = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  return (
    <div className="bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <Hero
        title={t("services.trucking.title")}
        subtitle={t("services.trucking.subtitle")}
        ctaText={t("home.cta.btn")}
        ctaLink={WHATSAPP_TRUCKING}
      />

      {/* Service Grid Section */}
      <section className="py-24 bg-blue-50 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              {t("services.help_text")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">
              {t("services.trucking.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {truckingServices.map((service, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-200 dark:hover:border-secondary/30 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-primary transition-all duration-300 text-blue-600 dark:text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-foreground group-hover:text-blue-600 dark:group-hover:text-secondary transition-colors line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-foreground/60 text-sm leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trailer Fleet Section */}
      <section className="py-24 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              Our Fleet
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              {t("fleet.title")}
            </h2>
            <p className="text-gray-600 dark:text-foreground/60 text-lg max-w-2xl mx-auto">
              {t("fleet.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* 20 Feet Trailer */}
            <div className="p-8 bg-blue-50 dark:bg-white/[0.03] border border-blue-100 dark:border-white/10 rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-primary/10 flex items-center justify-center mb-6">
                <Container className="w-8 h-8 text-blue-600 dark:text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-foreground">
                {t("fleet.20ft.title")}
              </h3>
              <p className="text-gray-600 dark:text-foreground/60 mb-4">
                {t("fleet.20ft.desc")}
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-foreground/60">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                  {t("fleet.20ft.1")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                  {t("fleet.20ft.2")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                  {t("fleet.20ft.3")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                  {t("fleet.20ft.4")}
                </li>
              </ul>
            </div>

            {/* 40 Feet Trailer */}
            <div className="p-8 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-secondary/10 flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-blue-600 dark:text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-foreground">
                {t("fleet.40ft.title")}
              </h3>
              <p className="text-gray-600 dark:text-foreground/60 mb-4">
                {t("fleet.40ft.desc")}
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-foreground/60">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                  {t("fleet.40ft.1")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                  {t("fleet.40ft.2")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                  {t("fleet.40ft.3")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                  {t("fleet.40ft.4")}
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{t("fleet.why.title")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center">
                  <div className="text-left">
                    <p className="font-bold text-lg">{t("fleet.why.1")}</p>
                    <p className="text-blue-100">{t("fleet.why.1.desc")}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-left">
                    <p className="font-bold text-lg">{t("fleet.why.2")}</p>
                    <p className="text-blue-100">{t("fleet.why.2.desc")}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-left">
                    <p className="font-bold text-lg">{t("fleet.why.3")}</p>
                    <p className="text-blue-100">{t("fleet.why.3.desc")}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-left">
                    <p className="font-bold text-lg">{t("fleet.why.4")}</p>
                    <p className="text-blue-100">{t("fleet.why.4.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Gallery Section - Responsive Grid */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              Our Fleet Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              {t("fleet.gallery.title")}
            </h2>
            <p className="text-gray-600 dark:text-foreground/60 text-lg max-w-2xl mx-auto">
              {t("fleet.gallery.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetImages.map((img, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <Image 
                    src={img.src} 
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              {t("faq.title")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white dark:bg-white/[0.03] hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-colors"
                >
                  <span className="font-bold text-gray-900 dark:text-foreground text-lg">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 dark:text-foreground/60 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Hover for desktop, Marquee for mobile */}
      <section className="py-24 bg-blue-50 dark:bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-foreground">
              {t("clients.title")}
            </h2>
            <p className="text-gray-600 dark:text-foreground/60 text-base md:text-lg">
              {t("clients.subtitle")}
            </p>
          </div>

          {/* Desktop: Grid with hover */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
            {clientImages.map((img, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-blue-200 dark:hover:border-secondary/50 grayscale hover:grayscale-0 transform hover:-translate-y-2 shadow-sm hover:shadow-md"
              >
                <Image 
                  src={img} 
                  alt={`Client ${index + 1}`} 
                  width={120} 
                  height={60} 
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Mobile: Marquee */}
          <div className="md:hidden overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clientImages, ...clientImages].map((img, index) => (
                <div key={index} className="flex-shrink-0 p-4 mx-4">
                  <div className="p-6 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-sm">
                    <Image 
                      src={img} 
                      alt={`Client ${index + 1}`} 
                      width={100} 
                      height={50} 
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={t("services.trucking.cta.title")}
        subtitle={t("services.trucking.cta.subtitle")}
        buttonText={t("services.trucking.cta.btn")}
        buttonLink={WHATSAPP_TRUCKING}
      />
    </div>
  );
}
