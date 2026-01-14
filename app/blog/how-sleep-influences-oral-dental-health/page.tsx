import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Uyku ve Agiz Sagligi | Diş Tedavi Rehberi",
    description: "Uyku kalitesinin agiz sagligina etkisine dair kısa özet.",
};

export default function SleepOralHealthPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Bilgi Notu</p>
                <h1 className="text-3xl sm:text-4xl font-bold">Uyku ve Agiz Sagligi</h1>
                <p className="text-gray-700">
                    Uyku kalitesi, diş eti sagligi ve diş sikma gibi konulari dolayli olarak etkileyebilir.
                </p>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Kısa Notlar</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                        <li>Diş sikma (bruksizm) uyku kalitesiyle iliskili olabilir.</li>
                        <li>Ağız kuruluğu, diş eti hassasiyetini artirabilir.</li>
                        <li>Düzenli bakım ve kontrol önemlidir.</li>
                    </ul>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Doktora Sorulacaklar</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                        <li>Gece plağı gerekli mi?</li>
                        <li>Hassasiyet için hangi bakım önerilir?</li>
                        <li>Kontrol sıklığı ne olmalı?</li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/upload"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                    >
                        Ön Değerlendirme Al
                    </Link>
                    <Link
                        href="/guides/timeline"
                        className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                    >
                        Zamanlama
                    </Link>
                </div>
                <p className="text-xs text-gray-600">Bu sayfa genel bilgilendirme amaclidir; tani ve tedavi sunmaz.</p>
            </section>
        </main>
    );
}
