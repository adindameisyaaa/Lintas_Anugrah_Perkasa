"use client";

import Hero from "@/components/Hero";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { title: t("about.values.v1.title"), desc: t("about.values.v1.desc"), icon: ShieldCheck, color: "text-blue-600 dark:text-secondary" },
    { title: t("about.values.v2.title"), desc: t("about.values.v2.desc"), icon: ShieldCheck, color: "text-blue-600 dark:text-primary" },
    { title: t("about.values.v3.title"), desc: t("about.values.v3.desc"), icon: ShieldCheck, color: "text-blue-600 dark:text-secondary" },
  ];

  const teamMembers = [
    { name: "Andi Wijaya", position: "Chief Executive Officer" },
    { name: "Siti Aminah", position: "Operations Manager" },
    { name: "Budi Santoso", position: "Technical Lead" },
    { name: "Dewi Lestari", position: "Customer Relations" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <Hero
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      {/* Story Section - bg-white */}
      <section className="py-24 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-foreground">
                {t("about.story.title")}
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-foreground/70 leading-relaxed text-lg">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 rounded-2xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 shadow-sm">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 dark:text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground">
                    {t("about.mission.title")}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-foreground/60 text-lg">
                  {t("about.mission.desc")}
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 shadow-sm">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 dark:text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground">
                    {t("about.vision.title")}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-foreground/60 text-lg">
                  {t("about.vision.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - bg-blue-50 */}
      <section className="py-24 bg-blue-50 dark:bg-white/[0.02]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-foreground">
            {t("about.values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <value.icon className={cn("w-12 h-12 mx-auto mb-6", value.color)} />
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-foreground">{value.title}</h3>
                <p className="text-gray-600 dark:text-foreground/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - bg-white */}
      <section className="py-24 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              {t("about.team.title")}
            </h2>
            <p className="text-gray-600 dark:text-foreground/60 text-lg">
              {t("about.team.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-blue-200 dark:hover:border-secondary/30"
              >
                <div className="aspect-[4/5] bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-200 dark:text-foreground/10 font-bold italic text-2xl">
                  PHOTO
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-foreground group-hover:text-blue-600 dark:group-hover:text-secondary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 dark:text-foreground/50 text-sm font-medium">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
