"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export default function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "group p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-secondary/50 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-blue-100 dark:group-hover:bg-secondary/20 transition-colors">
        <Icon className="w-6 h-6 text-blue-600 dark:text-secondary" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-foreground group-hover:text-blue-600 dark:group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-foreground/60 leading-relaxed mb-6 flex-grow line-clamp-3">
        {description}
      </p>
      <div className="text-blue-600 dark:text-secondary font-bold flex items-center text-sm">
        Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
