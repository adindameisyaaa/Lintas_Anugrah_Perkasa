"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { Truck, Navigation, Shield, Clock, Users, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.gps.title"),
      description: t("services.gps.subtitle"),
      icon: Navigation,
      href: "/services/gps-tracker",
    },
    {
      title: t("services.trucking.title"),
      description: t("services.trucking.subtitle"),
      icon: Truck,
      href: "/services/trucking",
    },
  ];

  const features = [
    {
      title: t("home.why.feat1.title"),
      description: t("home.why.feat1.desc"),
      icon: Users,
    },
    {
      title: t("home.why.feat2.title"),
      description: t("home.why.feat2.desc"),
      icon: Shield,
    },
    {
      title: t("home.why.feat3.title"),
      description: t("home.why.feat3.desc"),
      icon: Clock,
    },
    {
      title: t("home.why.feat4.title"),
      description: t("home.why.feat4.desc"),
      icon: Award,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.cta")}
        ctaLink="/services"
      />

      {/* Services Summary Section - Layered with bg-blue-50 */}
      <section className="py-24 bg-blue-50 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-foreground">
              {t("home.services.title")}
            </h2>
            <p className="text-gray-600 dark:text-foreground/60 max-w-2xl mx-auto text-lg">
              {t("home.services.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Layered with bg-white */}
      <section className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-foreground">
              {t("home.why.title")}
            </h2>
            <p className="text-gray-600 dark:text-foreground/60 max-w-2xl mx-auto text-lg">
              {t("home.why.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 text-center group bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-primary transition-all duration-300 text-blue-600 dark:text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-foreground">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-foreground/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={t("home.cta.title")}
        subtitle={t("home.cta.subtitle")}
        buttonText={t("home.cta.btn")}
        buttonLink="/contact"
      />
    </div>
  );
}
