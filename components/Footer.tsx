// components/Footer.tsx

"use client";

import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#f9fafb] border-t border-gray-200 text-[#14233d]">
            <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid gap-10 md:grid-cols-4">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-extrabold mb-4 text-[#1b76d1]">Diş Tedavi Rehberi</h2>
                    <div className="mt-3 text-gray-600 text-sm md:text-sm leading-relaxed space-y-1">
                        <p>Bu platform sağlık hizmeti sunmaz, teşhis veya tedavi yapmaz, klinik ya da hekim önermez. Kullanıcı taleplerini, bağımsız kliniklere ileten bir aracı platformdur.</p>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <Link href="https://www.facebook.com/profile.php?id=61584497004756" className="hover:text-[#21CDC0]" aria-label="Facebook">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.instagram.com/turkiyedentalguide/" className="hover:text-[#21CDC0]" aria-label="Instagram">
                            <Instagram className="h-5 w-5" />
                        </Link>

                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link href="/" className="hover:text-[#1b76d1]">Anasayfa</Link></li>
                        <li><Link href="/treatments" className="hover:text-[#1b76d1]">Tedaviler</Link></li>
                        <li><Link href="/about" className="hover:text-[#1b76d1]">Hakkımızda</Link></li>
                        <li><Link href="/start" className="hover:text-[#1b76d1]">Ön Değerlendirme</Link></li>
                        <li><Link href="/guides/legal" className="hover:text-[#1b76d1]">KVKK Özeti</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">İletişim</h3>
                    <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                        <li className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-[#1b76d1] mt-0.5" />
                            <a href="mailto:distedavirehberi@gmail.com" className="hover:text-[#1b76d1]">
                                distedavirehberi@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="h-5 w-5 text-[#1b76d1] mt-0.5" />
                            <a href="tel:+14372662552">+1 437 266 2552</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-[#1b76d1] mt-0.5" />
                            <span>Turkiye</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter / CTA */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Güncellemeler</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                        Kısa bilgilendirmeler ve rehber guncellemeleri için e-posta birakin.
                    </p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row items-center gap-3"
                    >
                        <input
                            type="email"
                            placeholder="E-posta adresiniz"
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#21CDC0] focus:ring-1 focus:ring-[#21CDC0]"
                        />
                        <button
                            type="submit"
                            className="bg-[#21CDC0] hover:bg-[#1bb5a9] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
                        >
                            Kaydol
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-5 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Diş Tedavi Rehberi. Tum haklari saklidir.
            </div>
        </footer>
    );
}
