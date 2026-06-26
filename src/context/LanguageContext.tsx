"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.lang": "Language",

    // Home Page
    "hero.title": "Leading Logistics & Tracking Solutions",
    "hero.subtitle": "PT. Lintas Anugrah Perkasa is a trusted trucking and logistics partner, providing efficient, secure, and on-time delivery solutions, enhanced by GPS tracking technology to ensure full visibility and security throughout every shipment.",
    "hero.cta": "Explore Our Services",
    "home.services.title": "Our Core Services",
    "home.services.subtitle": "We specialize in two main areas to help your business thrive in a fast-paced environment.",
    "home.why.title": "Why Choose Us?",
    "home.why.subtitle": "We combine technology with expertise to deliver unparalleled value to our clients.",
    "home.why.feat1.title": "Professional Team",
    "home.why.feat1.desc": "Our experts are dedicated to providing the best service for your logistics needs.",
    "home.why.feat2.title": "24/7 Monitoring",
    "home.why.feat2.desc": "Round-the-clock tracking and support to keep your assets safe.",
    "home.why.feat3.title": "On-Time Delivery",
    "home.why.feat3.desc": "We prioritize punctuality to keep your supply chain running smoothly.",
    "home.why.feat4.title": "Certified Quality",
    "home.why.feat4.desc": "Our services meet the highest industry standards for quality and safety.",
    "home.cta.title": "Ready to Secure Your Assets?",
    "home.cta.subtitle": "Contact us today to find the perfect logistics and tracking solution for your business.",
    "home.cta.btn": "Get in Touch",

    // Services General
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive solutions designed to keep your business moving and your assets secure.",
    "services.help_text": "Not sure which service you need? Explore the options below.",
    "services.tailored.title": "Tailored Solutions for Your Business",
    "services.tailored.desc": "Don't see exactly what you're looking for? We offer customized logistics and tracking packages to meet the unique needs of your operation. Contact our team to discuss your requirements.",
    "services.custom.fleet": "Custom Fleet Management",
    "services.custom.transport": "Specialized Transport",
    "services.custom.api": "API Integration",

    // Trucking Page
    "services.trucking.title": "Trucking & Logistics",
    "services.trucking.subtitle": "Reliable transportation solutions for your business. We move your goods with precision and care.",
    "services.trucking.expert.title": "Expert Logistics for Modern Businesses",
    "services.trucking.expert.desc": "PT. Lintas Anugrah Perkasa offers a comprehensive range of trucking and logistics services designed to streamline your supply chain. We specialize in point-to-point delivery, distribution, and specialized cargo handling.",
    "services.trucking.feat1": "FCL & LCL Shipments",
    "services.trucking.feat2": "Last-mile Delivery",
    "services.trucking.feat3": "Cross-docking Services",
    "services.trucking.feat4": "Specialized Cargo",
    "services.trucking.gallery.title": "Our Fleet in Action",
    "services.trucking.gallery.subtitle": "Experience our reliable logistics operations through these captured moments.",
    "services.trucking.clients.title": "Our Clients",
    "services.trucking.clients.subtitle": "Trusted by leading companies across the industry.",
    "services.trucking.cta.title": "Move Your Goods with Confidence",
    "services.trucking.cta.subtitle": "Get a competitive quote for your next shipment and experience the difference of professional logistics.",
    "services.trucking.cta.btn": "Book a Shipment",

    // 8 Trucking Services
    "services.p2d.title": "Port to Door",
    "services.p2d.desc": "Delivery from port directly to client location.",
    "services.d2p.title": "Door to Port",
    "services.d2p.desc": "Pickup from client and delivery to port.",
    "services.d2d.title": "Door to Door",
    "services.d2d.desc": "Full end-to-end logistics service.",
    "services.land.title": "Land Cargo",
    "services.land.desc": "Domestic delivery via land transportation.",
    "services.exim.title": "Export & Import",
    "services.exim.desc": "International shipping (FCL & LCL).",
    "services.trailer.title": "Trucking (Trailer)",
    "services.trailer.desc": "Heavy cargo transport using trailer trucks.",
    "services.charter.title": "Ship Charter",
    "services.charter.desc": "Vessel rental for large-scale logistics.",
    "services.stevedoring.title": "Specialist Stevedoring",
    "services.stevedoring.desc": "Professional loading/unloading services.",

    // GPS Page
    "services.gps.title": "GPS Tracker Rental",
    "services.gps.subtitle": "Secure your fleet with our high-performance tracking solutions. Reliable monitoring for peace of mind.",
    "services.gps.why.title": "Why Use Our GPS Tracking?",
    "services.gps.why.desc": "In the logistics and transportation industry, visibility is key. Our GPS tracking rental service provides you with the tools you need to manage your fleet effectively, reduce operational costs, and enhance the security of your assets.",
    "services.gps.li1": "No upfront hardware costs",
    "services.gps.li2": "Maintenance and support included",
    "services.gps.li3": "Flexible monthly rental plans",
    "services.gps.li4": "Easy installation and setup",
    "services.gps.gallery.title": "Our Equipment & Dashboard",
    "services.gps.gallery.subtitle": "Take a look at our high-quality GPS hardware and intuitive tracking platform.",
    "services.gps.cta.title": "Start Tracking Today",
    "services.gps.cta.subtitle": "Contact us to get a quote for your fleet size and start monitoring your vehicles in no time.",
    "services.gps.cta.btn": "Get a Quote",

    // GPS Features
    "services.gps.feat1.title": "Real-time Tracking",
    "services.gps.feat1.desc": "Monitor your vehicle's location with high precision updates every few seconds.",
    "services.gps.feat2.title": "Geofencing",
    "services.gps.feat2.desc": "Set virtual boundaries and receive instant alerts when vehicles enter or exit designated areas.",
    "services.gps.feat3.title": "Historical Data",
    "services.gps.feat3.desc": "Access up to 90 days of route history and movement logs for complete accountability.",
    "services.gps.feat4.title": "Instant Alerts",
    "services.gps.feat4.desc": "Receive notifications for overspeeding, engine status, and unauthorized movement.",
    "services.gps.feat5.title": "Mobile App",
    "services.gps.feat5.desc": "Track your assets on the go with our user-friendly mobile application for iOS and Android.",
    "services.gps.feat6.title": "Route Optimization",
    "services.gps.feat6.desc": "Analyze historical data to optimize routes and reduce fuel consumption.",

    // About Page
    "about.title": "About Our Company",
    "about.subtitle": "PT. Lintas Anugrah Perkasa is a dedicated partner in logistics and vehicle security.",
    "about.story.title": "Our Story",
    "about.story.p1": "Founded with a vision to revolutionize the logistics industry in Indonesia, PT. Lintas Anugrah Perkasa has grown into a trusted provider of comprehensive transport and tracking solutions.",
    "about.story.p2": "We understand that in today's fast-paced world, security and efficiency are paramount. That's why we leverage the latest GPS technology and a modern fleet to ensure that our clients' assets are always protected and their goods are delivered on time.",
    "about.mission.title": "Our Mission",
    "about.mission.p1": "To provide efficient, secure, and on-time trucking and logistics services for all types of cargo.",
    "about.mission.p2": "To prioritize safety, professionalism, and customer satisfaction in every operational aspect.",
    "about.mission.p3": "To continuously innovate and adopt technology to enhance service quality and operational visibility.",
    "about.vision.title": "Our Vision",
    "about.vision.statement": "To be Indonesia's leading trucking and logistics partner, delivering excellence, reliability, and innovation in every shipment.",
    "about.values.title": "Our Values",
    "about.values.v1.title": "Integrity",
    "about.values.v1.desc": "We build trust through honest communication and ethical business practices.",
    "about.values.v2.title": "Innovation",
    "about.values.v2.desc": "We continuously adapt to new technologies to provide the best solutions.",
    "about.values.v3.title": "Reliability",
    "about.values.v3.desc": "Our clients can count on us to deliver results, no matter the challenge.",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Meet the professionals behind PT. Lintas Anugrah Perkasa.",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? Our team is here to help you find the right solutions.",
    "contact.get.title": "Get in Touch",
    "contact.get.desc": "Whether you're interested in our GPS tracking services or need reliable trucking logistics, we're ready to discuss how we can support your business.",
    "contact.info.loc": "Office Location",
    "contact.info.phone": "Phone Number",
    "contact.info.email": "Email Address",
    "contact.info.hours": "Business Hours",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.subject": "Subject",
    "contact.form.msg": "Message",
    "contact.form.placeholder.name": "John Doe",
    "contact.form.placeholder.email": "john@example.com",
    "contact.form.placeholder.msg": "How can we help you?",
    "contact.form.btn": "Send Message",
    "contact.form.opt1": "GPS Tracker Inquiry",
    "contact.form.opt2": "Trucking Services",
    "contact.form.opt3": "General Question",
    "contact.form.opt4": "Partnership",
    "contact.form.opt5": "Support",

    // Footer
    "footer.desc": "Providing professional logistics and GPS tracking solutions to empower your business operations and security.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.copy": "All rights reserved.",

    // Coming Soon
    "coming.title": "New Service Coming Soon",
    "coming.desc": "We're working hard to bring you more comprehensive logistics and security solutions. Stay tuned for our upcoming warehouse and distribution services.",
    "coming.btn.back": "Back to Services",
    "coming.btn.notify": "Notify Me",

    // Trailer Fleet Section
    "fleet.title": "Our Trailer Fleet",
    "fleet.subtitle": "PT LAPS provides transportation services using various trailer configurations for industrial and heavy cargo transportation.",
    "fleet.20ft.title": "20 Feet Trailer",
    "fleet.20ft.desc": "Suitable for:",
    "fleet.20ft.1": "Steel products",
    "fleet.20ft.2": "Construction materials",
    "fleet.20ft.3": "Industrial equipment",
    "fleet.20ft.4": "Medium-sized cargo",
    "fleet.40ft.title": "40 Feet Trailer",
    "fleet.40ft.desc": "Suitable for:",
    "fleet.40ft.1": "Long steel products",
    "fleet.40ft.2": "Heavy industrial cargo",
    "fleet.40ft.3": "Large construction materials",
    "fleet.40ft.4": "Project logistics",
    "fleet.why.title": "Why Choose Our Trailers?",
    "fleet.why.1": "Capacity up to 60 tons",
    "fleet.why.1.desc": "Heavy cargo ready",
    "fleet.why.2": "Cargo length up to 12 meters",
    "fleet.why.2.desc": "Long items supported",
    "fleet.why.3": "Experienced drivers",
    "fleet.why.3.desc": "Professional team",
    "fleet.why.4": "Reliable scheduling",
    "fleet.why.4.desc": "On-time delivery",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How much does trailer rental or transportation cost?",
    "faq.a1": "The cost depends on the route, cargo type, and trailer unit required. Simply send your cargo details and destination through WhatsApp and our team will provide a quotation.",
    "faq.q2": "What types of cargo can be transported?",
    "faq.a2": "We specialize in steel and metal transportation, including rebar, steel plates, coils, pipes, H-beams, and wire mesh. We also handle industrial cargo such as cement, ceramic products, machinery, and construction materials, with capacities up to 60 tons and cargo lengths up to 12 meters.",
    "faq.q3": "Which areas do you serve?",
    "faq.a3": "We provide pickup and delivery services within Jabodetabek, Central Java, Lampung, and Palembang. Areas outside these regions are currently not available.",
    "faq.q4": "Can you provide official invoices for companies?",
    "faq.a4": "Yes. PT LAPS is a registered company and can provide official invoices and transportation documents for corporate administrative requirements.",
    "faq.q5": "How quickly can a trailer be arranged?",
    "faq.a5": "Trailer availability changes daily. Contact our team via WhatsApp to check the nearest available schedule. We will do our best to accommodate your transportation needs.",

    // Fleet Gallery
    "fleet.gallery.title": "Fleet Gallery",
    "fleet.gallery.subtitle": "Our trailer fleet is ready to support steel transportation, construction materials, and industrial cargo with professional operational standards.",

    // Our Clients
    "clients.title": "Our Clients",
    "clients.subtitle": "Trusted by various companies and industrial businesses for transportation and logistics needs.",
  },
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.services": "Layanan",
    "nav.contact": "Kontak",
    "nav.lang": "Bahasa",

    // Home Page
    "hero.title": "Solusi Logistik & Pelacakan Terkemuka",
    "hero.subtitle": "PT. Lintas Anugrah Perkasa adalah mitra truk dan logistik tepercaya, yang menyediakan solusi pengiriman yang efisien, aman, dan tepat waktu, yang diperkuat oleh teknologi pelacakan GPS untuk memastikan visibilitas dan keamanan penuh di setiap pengiriman.",
    "hero.cta": "Jelajahi Layanan Kami",
    "home.services.title": "Layanan Utama Kami",
    "home.services.subtitle": "Kami mengkhususkan diri dalam dua area utama untuk membantu bisnis Anda berkembang di lingkungan yang cepat.",
    "home.why.title": "Mengapa Memilih Kami?",
    "home.why.subtitle": "Kami menggabungkan teknologi dengan keahlian untuk memberikan nilai yang tak tertandingi bagi klien kami.",
    "home.why.feat1.title": "Tim Profesional",
    "home.why.feat1.desc": "Para ahli kami berdedikasi untuk memberikan layanan terbaik bagi kebutuhan logistik Anda.",
    "home.why.feat2.title": "Pemantauan 24/7",
    "home.why.feat2.desc": "Pelacakan dan dukungan sepanjang waktu untuk menjaga aset Anda tetap aman.",
    "home.why.feat3.title": "Pengiriman Tepat Waktu",
    "home.why.feat3.desc": "Kami mengutamakan ketepatan waktu untuk menjaga kelancaran rantai pasokan Anda.",
    "home.why.feat4.title": "Kualitas Bersertifikat",
    "home.why.feat4.desc": "Layanan kami memenuhi standar industri tertinggi untuk kualitas dan keamanan.",
    "home.cta.title": "Siap Mengamankan Aset Anda?",
    "home.cta.subtitle": "Hubungi kami hari ini untuk menemukan solusi logistik dan pelacakan yang tepat untuk bisnis Anda.",
    "home.cta.btn": "Hubungi Kami",

    // Services General
    "services.title": "Layanan Kami",
    "services.subtitle": "Solusi komprehensif yang dirancang untuk menjaga kelancaran bisnis dan keamanan aset Anda.",
    "services.help_text": "Tidak yakin layanan mana yang Anda butuhkan? Jelajahi opsi di bawah ini.",
    "services.tailored.title": "Solusi Khusus untuk Bisnis Anda",
    "services.tailored.desc": "Tidak melihat apa yang Anda cari? Kami menawarkan paket logistik dan pelacakan khusus untuk memenuhi kebutuhan unik operasional Anda. Hubungi tim kami untuk mendiskusikan kebutuhan Anda.",
    "services.custom.fleet": "Manajemen Armada Khusus",
    "services.custom.transport": "Transportasi Khusus",
    "services.custom.api": "Integrasi API",

    // Trucking Page
    "services.trucking.title": "Logistik & Transportasi",
    "services.trucking.subtitle": "Solusi transportasi andal untuk bisnis Anda. Kami memindahkan barang Anda dengan presisi dan hati-hati.",
    "services.trucking.expert.title": "Logistik Ahli untuk Bisnis Modern",
    "services.trucking.expert.desc": "PT. Lintas Anugrah Perkasa menawarkan berbagai layanan transportasi dan logistik yang dirancang untuk merampingkan rantai pasokan Anda. Kami spesialis dalam pengiriman point-to-point, distribusi, dan penanganan kargo khusus.",
    "services.trucking.feat1": "Pengiriman FCL & LCL",
    "services.trucking.feat2": "Pengiriman Last-mile",
    "services.trucking.feat3": "Layanan Cross-docking",
    "services.trucking.feat4": "Kargo Khusus",
    "services.trucking.gallery.title": "Armada Kami Beraksi",
    "services.trucking.gallery.subtitle": "Lihat momen operasional logistik andal kami melalui tangkapan momen ini.",
    "services.trucking.clients.title": "Klien Kami",
    "services.trucking.clients.subtitle": "Dipercaya oleh perusahaan terkemuka di berbagai industri.",
    "services.trucking.cta.title": "Pindahkan Barang Anda dengan Percaya Diri",
    "services.trucking.cta.subtitle": "Dapatkan penawaran kompetitif untuk pengiriman Anda berikutnya dan rasakan perbedaan logistik profesional.",
    "services.trucking.cta.btn": "Pesan Pengiriman",

    // 8 Trucking Services
    "services.p2d.title": "Port to Door",
    "services.p2d.desc": "Pengiriman dari pelabuhan langsung ke lokasi klien.",
    "services.d2p.title": "Door to Port",
    "services.d2p.desc": "Penjemputan dari klien dan pengiriman ke pelabuhan.",
    "services.d2d.title": "Door to Door",
    "services.d2d.desc": "Layanan logistik lengkap dari ujung ke ujung.",
    "services.land.title": "Kargo Darat",
    "services.land.desc": "Pengiriman domestik melalui transportasi darat.",
    "services.exim.title": "Ekspor & Impor",
    "services.exim.desc": "Pengiriman internasional (FCL & LCL).",
    "services.trailer.title": "Trucking (Trailer)",
    "services.trailer.desc": "Transportasi kargo berat menggunakan truk trailer.",
    "services.charter.title": "Sewa Kapal",
    "services.charter.desc": "Penyewaan kapal untuk logistik skala besar.",
    "services.stevedoring.title": "Spesialis Bongkar Muat",
    "services.stevedoring.desc": "Layanan bongkar muat profesional.",

    // GPS Page
    "services.gps.title": "Sewa Pelacak GPS",
    "services.gps.subtitle": "Amankan armada Anda dengan solusi pelacakan berkinerja tinggi kami. Pemantauan andal untuk ketenangan pikiran.",
    "services.gps.why.title": "Mengapa Menggunakan Pelacakan GPS Kami?",
    "services.gps.why.desc": "Dalam industri logistik dan transportasi, visibilitas adalah kunci. Layanan sewa pelacakan GPS kami memberikan alat yang Anda butuhkan untuk mengelola armada secara efektif, mengurangi biaya operasional, dan meningkatkan keamanan aset Anda.",
    "services.gps.li1": "Tanpa biaya perangkat keras di muka",
    "services.gps.li2": "Pemeliharaan dan dukungan termasuk",
    "services.gps.li3": "Paket sewa bulanan yang fleksibel",
    "services.gps.li4": "Pemasangan dan pengaturan yang mudah",
    "services.gps.gallery.title": "Peralatan & Dasbor Kami",
    "services.gps.gallery.subtitle": "Lihat perangkat keras GPS berkualitas tinggi dan platform pelacakan intuitif kami.",
    "services.gps.cta.title": "Mulai Melacak Hari Ini",
    "services.gps.cta.subtitle": "Hubungi kami untuk mendapatkan penawaran sesuai ukuran armada Anda dan mulai pantau kendaraan Anda dalam sekejap.",
    "services.gps.cta.btn": "Dapatkan Penawaran",

    // GPS Features
    "services.gps.feat1.title": "Pelacakan Real-time",
    "services.gps.feat1.desc": "Pantau lokasi kendaraan Anda dengan pembaruan presisi tinggi setiap beberapa detik.",
    "services.gps.feat2.title": "Geofencing",
    "services.gps.feat2.desc": "Tetapkan batas virtual dan terima peringatan instan saat kendaraan masuk atau keluar area tertentu.",
    "services.gps.feat3.title": "Data Riwayat",
    "services.gps.feat3.desc": "Akses riwayat rute dan log pergerakan hingga 90 hari untuk akuntabilitas lengkap.",
    "services.gps.feat4.title": "Peringatan Instan",
    "services.gps.feat4.desc": "Terima notifikasi untuk kecepatan berlebih, status mesin, dan pergerakan tidak sah.",
    "services.gps.feat5.title": "Aplikasi Seluler",
    "services.gps.feat5.desc": "Lacak aset Anda di mana saja dengan aplikasi seluler kami yang ramah pengguna untuk iOS dan Android.",
    "services.gps.feat6.title": "Optimasi Rute",
    "services.gps.feat6.desc": "Analisis data riwayat untuk mengoptimalkan rute dan mengurangi konsumsi bahan bakar.",

    // About Page
    "about.title": "Tentang Perusahaan Kami",
    "about.subtitle": "PT. Lintas Anugrah Perkasa adalah mitra berdedikasi dalam logistik dan keamanan kendaraan.",
    "about.story.title": "Kisah Kami",
    "about.story.p1": "Didirikan dengan visi untuk merevolusi industri logistik di Indonesia, PT. Lintas Anugrah Perkasa telah berkembang menjadi penyedia solusi transportasi dan pelacakan yang terpercaya.",
    "about.story.p2": "Kami memahami bahwa di dunia yang cepat saat ini, keamanan dan efisiensi adalah hal yang utama. Itulah sebabnya kami memanfaatkan teknologi GPS terbaru dan armada modern untuk memastikan aset klien kami selalu terlindungi dan barang mereka sampai tepat waktu.",
    "about.mission.title": "Misi Kami",
    "about.mission.p1": "Menyediakan layanan truk dan logistik yang efisien, aman, dan tepat waktu untuk semua jenis kargo.",
    "about.mission.p2": "Mengutamakan keamanan, profesionalisme, dan kepuasan pelanggan di setiap aspek operasional.",
    "about.mission.p3": "Terus berinovasi dan mengadopsi teknologi untuk meningkatkan kualitas layanan dan visibilitas operasional.",
    "about.vision.title": "Visi Kami",
    "about.vision.statement": "Menjadi mitra truk dan logistik terdepan di Indonesia, menghadirkan keunggulan, keandalan, dan inovasi di setiap pengiriman.",
    "about.values.title": "Nilai-Nilai Kami",
    "about.values.v1.title": "Integritas",
    "about.values.v1.desc": "Kami membangun kepercayaan melalui komunikasi yang jujur dan praktik bisnis yang etis.",
    "about.values.v2.title": "Inovasi",
    "about.values.v2.desc": "Kami terus beradaptasi dengan teknologi baru untuk memberikan solusi terbaik.",
    "about.values.v3.title": "Keandalan",
    "about.values.v3.desc": "Klien kami dapat mengandalkan kami untuk memberikan hasil, apa pun tantangannya.",
    "about.team.title": "Tim Kami",
    "about.team.subtitle": "Kenali para profesional di balik PT. Lintas Anugrah Perkasa.",

    // Contact Page
    "contact.title": "Hubungi Kami",
    "contact.subtitle": "Punya pertanyaan? Tim kami siap membantu Anda menemukan solusi yang tepat.",
    "contact.get.title": "Mari Berdiskusi",
    "contact.get.desc": "Baik Anda tertarik dengan layanan pelacakan GPS kami atau membutuhkan logistik transportasi yang andal, kami siap mendiskusikan cara kami mendukung bisnis Anda.",
    "contact.info.loc": "Lokasi Kantor",
    "contact.info.phone": "Nomor Telepon",
    "contact.info.email": "Alamat Email",
    "contact.info.hours": "Jam Operasional",
    "contact.form.name": "Nama Lengkap",
    "contact.form.email": "Alamat Email",
    "contact.form.subject": "Subjek",
    "contact.form.msg": "Pesan",
    "contact.form.placeholder.name": "Budi Santoso",
    "contact.form.placeholder.email": "budi@contoh.com",
    "contact.form.placeholder.msg": "Bagaimana kami bisa membantu Anda?",
    "contact.form.btn": "Kirim Pesan",
    "contact.form.opt1": "Pertanyaan Pelacak GPS",
    "contact.form.opt2": "Layanan Transportasi",
    "contact.form.opt3": "Pertanyaan Umum",
    "contact.form.opt4": "Kemitraan",
    "contact.form.opt5": "Dukungan",

    // Footer
    "footer.desc": "Menyediakan solusi logistik profesional dan pelacakan GPS untuk memberdayakan operasional dan keamanan bisnis Anda.",
    "footer.links": "Tautan Cepat",
    "footer.contact": "Hubungi Kami",
    "footer.copy": "Hak cipta dilindungi undang-undang.",

    // Coming Soon
    "coming.title": "Layanan Baru Segera Hadir",
    "coming.desc": "Kami sedang bekerja keras untuk menghadirkan solusi logistik dan keamanan yang lebih komprehensif. Nantikan layanan gudang dan distribusi kami yang akan datang.",
    "coming.btn.back": "Kembali ke Layanan",
    "coming.btn.notify": "Beritahu Saya",

    // Trailer Fleet Section
    "fleet.title": "Armada Trailer Kami",
    "fleet.subtitle": "PT LAPS menyediakan layanan transportasi menggunakan berbagai konfigurasi trailer untuk pengangkutan barang industri dan berat.",
    "fleet.20ft.title": "Trailer 20 Kaki",
    "fleet.20ft.desc": "Cocok untuk:",
    "fleet.20ft.1": "Produk baja",
    "fleet.20ft.2": "Material konstruksi",
    "fleet.20ft.3": "Peralatan industri",
    "fleet.20ft.4": "Muatan berukuran sedang",
    "fleet.40ft.title": "Trailer 40 Kaki",
    "fleet.40ft.desc": "Cocok untuk:",
    "fleet.40ft.1": "Produk baja panjang",
    "fleet.40ft.2": "Muatan industri berat",
    "fleet.40ft.3": "Material konstruksi besar",
    "fleet.40ft.4": "Logistik proyek",
    "fleet.why.title": "Mengapa Memilih Trailer Kami?",
    "fleet.why.1": "Kapasitas hingga 60 ton",
    "fleet.why.1.desc": "Siap untuk muatan berat",
    "fleet.why.2": "Panjang muatan hingga 12 meter",
    "fleet.why.2.desc": "Dukungan untuk barang panjang",
    "fleet.why.3": "Sopir berpengalaman",
    "fleet.why.3.desc": "Tim profesional",
    "fleet.why.4": "Jadwal yang andal",
    "fleet.why.4.desc": "Pengiriman tepat waktu",

    // FAQ Section
    "faq.title": "Pertanyaan yang Sering Diajukan",
    "faq.q1": "Berapa biaya sewa atau transportasi trailer?",
    "faq.a1": "Biaya tergantung pada rute, jenis muatan, dan unit trailer yang dibutuhkan. Kirimkan detail muatan dan tujuan Anda melalui WhatsApp dan tim kami akan memberikan penawaran.",
    "faq.q2": "Jenis muatan apa saja yang bisa diangkut?",
    "faq.a2": "Kami spesialis dalam pengangkutan baja dan logam, termasuk besi beton, pelat baja, coil, pipa, H-beam, dan jaring kawat. Kami juga menangani muatan industri seperti semen, produk keramik, mesin, dan material konstruksi, dengan kapasitas hingga 60 ton dan panjang muatan hingga 12 meter.",
    "faq.q3": "Area mana saja yang kami layani?",
    "faq.a3": "Kami menyediakan layanan penjemputan dan pengiriman di Jabodetabek, Jawa Tengah, Lampung, dan Palembang. Area di luar wilayah tersebut saat ini belum tersedia.",
    "faq.q4": "Bisakah Anda menyediakan faktur resmi untuk perusahaan?",
    "faq.a4": "Ya. PT LAPS adalah perusahaan yang terdaftar dan dapat menyediakan faktur resmi serta dokumen transportasi untuk kebutuhan administrasi perusahaan.",
    "faq.q5": "Seberapa cepat trailer bisa diatur?",
    "faq.a5": "Ketersediaan trailer berubah setiap hari. Hubungi tim kami via WhatsApp untuk memeriksa jadwal terdekat yang tersedia. Kami akan melakukan yang terbaik untuk menyesuaikan kebutuhan transportasi Anda.",

    // Fleet Gallery
    "fleet.gallery.title": "Galeri Armada",
    "fleet.gallery.subtitle": "Armada trailer kami siap mendukung pengangkutan baja, material konstruksi, dan muatan industri dengan standar operasional yang profesional.",

    // Our Clients
    "clients.title": "Klien Kami",
    "clients.subtitle": "Dipercaya oleh berbagai perusahaan dan pelaku industri untuk kebutuhan transportasi dan logistik.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "id")) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
