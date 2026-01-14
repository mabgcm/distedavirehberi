import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Abartili Vaatler ve Dikkat Edilecekler | Diş Tedavi Rehberi",
    description: "Tedavi karari oncesi dikkat edilmesi gerekenlere dair kısa özet.",
};

export default function ScamGuidePage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Guven Notu</p>
                <h1 className="text-3xl sm:text-4xl font-bold">Abartili Vaatler ve Dikkat Edilecekler</h1>
                <p className="text-gray-700">
                    Tedavi karari oncesi yazılı plan, materyal ve süreç bilgilerini netlestirmek önemlidir.
                </p>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Dikkat Edilecekler</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                        <li>Yazılı tedavi plani ve islem listesi isteyin.</li>
                        <li>Kullanılan materyal ve garanti sartlarini sorun.</li>
                        <li>Kontrol randevulari ve takip planini netlestirin.</li>
                    </ul>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Doktora Sorulacaklar</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                        <li>Bu planin alternatifleri var mi?</li>
                        <li>Riskler ve beklenen süreç nedir?</li>
                        <li>Bakım ve kontrol sorumluluklari nelerdir?</li>
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
                        href="/guides/travel"
                        className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                    >
                        Süreç Rehberi
                    </Link>
                </div>
                <p className="text-xs text-gray-600">Bu sayfa genel bilgilendirme amaclidir; tani ve tedavi sunmaz.</p>
            </section>
        </main>
    );
}
