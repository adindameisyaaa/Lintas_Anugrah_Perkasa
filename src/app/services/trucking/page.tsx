"use client";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import GalleryCarousel from "@/components/GalleryCarousel";
import { 
  Anchor, 
  Truck, 
  Ship, 
  Globe, 
  Container, 
  HardHat, 
  ArrowRightLeft 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TruckingPage() {
  const { t } = useLanguage();

  const galleryImages = [
    "/images/truck-1.jpg",
    "/images/truck-2.jpg",
    "/images/truck-3.jpg",
    "/images/truck-4.jpg",
  ];

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

  return (
    <div className="bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <Hero
        title={t("services.trucking.title")}
        subtitle={t("services.trucking.subtitle")}
      />

      {/* Service Grid Section - bg-blue-50 */}
      <section className="py-24 bg-blue-50 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              {t("services.help_text")}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-foreground">
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
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-foreground group-hover:text-blue-600 dark:group-hover:text-secondary transition-colors line-clamp-1">
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

      {/* Gallery Section - bg-white */}
      <section className="bg-white dark:bg-transparent">
        <GalleryCarousel 
          images={galleryImages} 
          title={t("services.trucking.gallery.title")} 
          subtitle={t("services.trucking.gallery.subtitle")}
        />
      </section>

      {/* Clients Section - bg-blue-50 */}
      <section className="py-24 bg-blue-50 dark:bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              {t("services.trucking.clients.title")}
            </h2>
            <p className="text-gray-600 dark:text-foreground/60 text-lg">
              {t("services.trucking.clients.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((client) => (
              <div 
                key={client} 
                className="group p-8 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-blue-200 dark:hover:border-secondary/50 grayscale hover:grayscale-0 transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                <div className="text-xl font-bold text-gray-300 dark:text-foreground/20 group-hover:text-blue-600/50 dark:group-hover:text-secondary/50 transition-colors">
                  LOGO {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={t("services.trucking.cta.title")}
        subtitle={t("services.trucking.cta.subtitle")}
        buttonText={t("services.trucking.cta.btn")}
        buttonLink="/contact"
      />
    </div>
  );
}
