"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-background border-t border-gray-100 dark:border-white/10 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-foreground">
              PT. Lintas Anugrah Perkasa
            </h3>
            <p className="text-gray-500 dark:text-foreground/60 max-w-sm leading-relaxed text-lg">
              {t("footer.desc")}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-blue-600 dark:text-secondary uppercase tracking-wider text-sm">
              {t("footer.links")}
            </h4>
            <ul className="space-y-4 text-gray-600 dark:text-foreground/60 font-medium">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">{t("nav.home")}</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 transition-colors">{t("nav.services")}</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-blue-600 dark:text-secondary uppercase tracking-wider text-sm">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4 text-gray-600 dark:text-foreground/60 font-medium">
              <li className="flex items-start">
                <span>Jl. Kesatriaan Cilincing, Jakarta Utara, Indonesia</span>
              </li>
              <li>+62 812 9182 6692</li>
              <li>lintasanugrahperkasa88@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 text-center text-sm text-gray-400 dark:text-foreground/40 font-medium">
          <p>&copy; {new Date().getFullYear()} PT. Lintas Anugrah Perkasa. {t("footer.copy")}</p>
        </div>
      </div>
    </footer>
  );
}
