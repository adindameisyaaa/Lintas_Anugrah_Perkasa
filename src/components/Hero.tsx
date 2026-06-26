"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  const isWhatsApp = ctaLink?.startsWith("https://wa.me/");
  const ButtonComponent = isWhatsApp ? "a" : Link;

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-transparent border-b border-gray-100 dark:border-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/30 dark:bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-50/20 dark:bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-white/60 leading-[1.1]">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-foreground/60 mb-10 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <ButtonComponent
              {...(isWhatsApp ? { href: ctaLink, target: "_blank", rel: "noopener noreferrer" } : { href: ctaLink })}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-200 dark:hover:shadow-none"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonComponent>
          )}
        </div>
      </div>
    </section>
  );
}
