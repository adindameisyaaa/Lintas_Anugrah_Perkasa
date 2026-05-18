"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Truck, Navigation, PackageSearch } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const allServices = [
    
    {
      title: t("services.trucking.title"),
      description: t("services.trucking.subtitle"),
      icon: Truck,
      href: "/services/trucking",
    },
    {
      title: t("services.gps.title"),
      description: t("services.gps.subtitle"),
      icon: Navigation,
      href: "/services/gps-tracker",
    },
    {
      title: t("coming.title"),
      description: t("coming.desc"),
      icon: PackageSearch,
      href: "/services/coming-soon",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <Hero
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      <section className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-foreground">
              {t("services.tailored.title")}
            </h2>
            <p className="text-gray-600 dark:text-foreground/60 text-xl mb-12 leading-relaxed">
              {t("services.tailored.desc")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-100 dark:shadow-none">
                {t("services.custom.fleet")}
              </div>
              <div className="px-8 py-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-bold shadow-sm">
                {t("services.custom.transport")}
              </div>
              <div className="px-8 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-foreground/60 font-bold shadow-sm">
                {t("services.custom.api")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
