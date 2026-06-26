import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "PT. Lintas Anugrah Perkasa",
  description: "Professional Logistics and GPS Tracker Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} bg-white dark:bg-background text-foreground min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
