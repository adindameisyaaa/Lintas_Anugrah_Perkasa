"use client";

import Hero from "@/components/Hero";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    { 
      title: t("contact.info.loc"), 
      content: "Jl. Kesatriaan Cilincing, Jakarta Utara, Indonesia", 
      icon: MapPin, 
      color: "bg-blue-100 dark:bg-primary/10", 
      iconColor: "text-blue-600 dark:text-primary" 
    },
    { 
      title: t("contact.info.phone"), 
      content: "+62 812 9182 6692", 
      icon: Phone, 
      color: "bg-blue-100 dark:bg-secondary/10", 
      iconColor: "text-blue-600 dark:text-secondary" 
    },
    { 
      title: t("contact.info.email"), 
      content: "lintasanugrahperkasa88@gmail.com", 
      icon: Mail, 
      color: "bg-blue-100 dark:bg-primary/10", 
      iconColor: "text-blue-600 dark:text-primary" 
    },
    { 
      title: t("contact.info.hours"), 
      content: "Mon - Fri: 08:00 - 17:00", 
      icon: Clock, 
      color: "bg-blue-100 dark:bg-secondary/10", 
      iconColor: "text-blue-600 dark:text-secondary" 
    },
  ];

  const subjects = [
    { label: t("contact.form.opt1"), value: "GPS" },
    { label: t("contact.form.opt2"), value: "Trucking" },
    { label: t("contact.form.opt3"), value: "General" },
    { label: t("contact.form.opt4"), value: "Partnership" },
    { label: t("contact.form.opt5"), value: "Support" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <Hero
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <section className="py-24 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-foreground">
                {t("contact.get.title")}
              </h2>
              <p className="text-gray-600 dark:text-foreground/60 mb-12 text-lg">
                {t("contact.get.desc")}
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mr-6 shrink-0 shadow-sm border border-blue-200/50 dark:border-transparent", info.color)}>
                      <info.icon className={cn("w-7 h-7", info.iconColor)} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-gray-900 dark:text-foreground text-lg">{info.title}</h4>
                      <p className="text-gray-600 dark:text-foreground/60 font-medium">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-100/50 dark:shadow-none">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-foreground/70">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
                      placeholder={t("contact.form.placeholder.name")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-foreground/70">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
                      placeholder={t("contact.form.placeholder.email")}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-foreground/70">
                    {t("contact.form.subject")}
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all appearance-none cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10 shadow-sm font-medium">
                      {subjects.map((s, i) => (
                        <option key={i} className="bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-foreground" value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 dark:text-foreground/50">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-foreground/70">
                    {t("contact.form.msg")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all resize-none shadow-sm"
                    placeholder={t("contact.form.placeholder.msg")}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-200 dark:hover:shadow-none active:scale-[0.98]"
                >
                  {t("contact.form.btn")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
