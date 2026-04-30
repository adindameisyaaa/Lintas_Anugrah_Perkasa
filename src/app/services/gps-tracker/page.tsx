"use client";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import GalleryCarousel from "@/components/GalleryCarousel";
import { Navigation, Shield, BarChart3, Bell, Smartphone, Map } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GPSTrackerPage() {
  const { t } = useLanguage();

  const galleryImages = [
    "/images/gps-1.jpg",
    "/images/gps-2.jpg",
    "/images/gps-3.jpg",
    "/images/gps-4.jpg",
  ];

  const features = [
    { title: t("services.gps.feat1.title"), desc: t("services.gps.feat1.desc"), icon: Map },
    { title: t("services.gps.feat2.title"), desc: t("services.gps.feat2.desc"), icon: Shield },
    { title: t("services.gps.feat3.title"), desc: t("services.gps.feat3.desc"), icon: BarChart3 },
    { title: t("services.gps.feat4.title"), desc: t("services.gps.feat4.desc"), icon: Bell },
    { title: t("services.gps.feat5.title"), desc: t("services.gps.feat5.desc"), icon: Smartphone },
    { title: t("services.gps.feat6.title"), desc: t("services.gps.feat6.desc"), icon: Navigation },
  ];

  return (
    <div className="bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <Hero
        title={t("services.gps.title")}
        subtitle={t("services.gps.subtitle")}
      />

      {/* Main Content Section - bg-white */}
      <section className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-foreground">
                {t("services.gps.why.title")}
              </h2>
              <p className="text-gray-600 dark:text-foreground/70 text-lg leading-relaxed mb-8">
                {t("services.gps.why.desc")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  t("services.gps.li1"),
                  t("services.gps.li2"),
                  t("services.gps.li3"),
                  t("services.gps.li4")
                ].map((item) => (
                  <li key={item} className="flex items-center p-4 bg-blue-50 dark:bg-white/5 rounded-xl text-gray-800 dark:text-foreground/80 font-medium border border-blue-100 dark:border-white/10">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 shadow-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 dark:from-primary/20 dark:to-secondary/20 rounded-3xl border border-blue-200 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-xl shadow-blue-100 dark:shadow-none">
                <Navigation className="w-32 h-32 text-blue-600/30 dark:text-secondary/30 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section - bg-blue-50 */}
      <section className="py-24 bg-blue-50 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-500 dark:hover:border-secondary/30 transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1">
                <feature.icon className="w-10 h-10 text-blue-600 dark:text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-foreground group-hover:text-blue-600 dark:group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-foreground/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - bg-white */}
      <section className="bg-white dark:bg-transparent transition-colors duration-300">
        <GalleryCarousel 
          images={galleryImages} 
          title={t("services.gps.gallery.title")} 
          subtitle={t("services.gps.gallery.subtitle")}
        />
      </section>

      <CTA
        title={t("services.gps.cta.title")}
        subtitle={t("services.gps.cta.subtitle")}
        buttonText={t("services.gps.cta.btn")}
        buttonLink="/contact"
      />
    </div>
  );
}
