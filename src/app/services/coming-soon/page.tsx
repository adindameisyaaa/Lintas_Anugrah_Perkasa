"use client";

import Link from "next/link";
import { Hammer, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ComingSoonPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-20 bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/10 mb-8">
          <Hammer className="w-12 h-12 text-secondary animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-white/60">
          {t("coming.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-foreground/60 mb-12 max-w-2xl mx-auto">
          {t("coming.desc")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {t("coming.btn.back")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-white/10 transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            {t("coming.btn.notify")}
          </Link>
        </div>
      </div>
    </div>
  );
}
