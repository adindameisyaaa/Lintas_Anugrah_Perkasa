"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="/gallery/logo.png" 
            alt="PT. Lintas Anugrah Perkasa" 
            className="h-10 md:h-12 w-auto object-contain" 
            
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  pathname === link.href 
                    ? "text-blue-600 dark:text-secondary" 
                    : "text-gray-600 dark:text-foreground/70 hover:text-blue-600 dark:hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-gray-200 dark:bg-white/10" />

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100 dark:bg-white/5 rounded-lg p-1 border border-gray-200 dark:border-transparent">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-2 py-1 text-[10px] font-bold rounded-md transition-all",
                  lang === "en" 
                    ? "bg-white dark:bg-white/10 shadow-sm text-blue-600 dark:text-secondary" 
                    : "text-gray-400"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("id")}
                className={cn(
                  "px-2 py-1 text-[10px] font-bold rounded-md transition-all",
                  lang === "id" 
                    ? "bg-white dark:bg-white/10 shadow-sm text-blue-600 dark:text-secondary" 
                    : "text-gray-400"
                )}
              >
                ID
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-foreground/70 border border-gray-200 dark:border-transparent"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-foreground/70 border border-gray-200 dark:border-transparent"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="text-gray-600 dark:text-foreground/70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background border-b border-gray-200 dark:border-white/10 py-6 px-4 space-y-6 animate-in fade-in slide-in-from-top-4 shadow-xl">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block text-lg font-semibold",
                  pathname === link.href 
                    ? "text-blue-600 dark:text-secondary" 
                    : "text-gray-600 dark:text-foreground/70"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-400">{t("nav.lang")}</span>
            <div className="flex items-center bg-gray-100 dark:bg-white/5 rounded-lg p-1 border border-gray-200 dark:border-transparent">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold rounded-md transition-all",
                  lang === "en" 
                    ? "bg-white dark:bg-white/10 shadow-sm text-blue-600 dark:text-secondary" 
                    : "text-gray-400"
                )}
              >
                English
              </button>
              <button
                onClick={() => setLang("id")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold rounded-md transition-all",
                  lang === "id" 
                    ? "bg-white dark:bg-white/10 shadow-sm text-blue-600 dark:text-secondary" 
                    : "text-gray-400"
                )}
              >
                Indonesia
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
