"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTA({ title, subtitle, buttonText, buttonLink }: CTAProps) {
  const { t } = useLanguage();

  const isWhatsApp = buttonLink.startsWith("https://wa.me/");

  const ButtonComponent = isWhatsApp ? "a" : Link;

  return (
    <section className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 md:p-20 overflow-hidden text-center shadow-xl shadow-blue-100 dark:shadow-none">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto font-medium">
              {subtitle}
            </p>
            <ButtonComponent
              {...(isWhatsApp ? { href: buttonLink, target: "_blank", rel: "noopener noreferrer" } : { href: buttonLink })}
              className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              {buttonText}
            </ButtonComponent>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
