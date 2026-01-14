import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tedaviler | Diş Tedavi Rehberi",
    description: "İmplant, kaplama, lamina, All-on-4 ve All-on-6 gibi tedavilere dair kısa rehberler.",
};

const treatmentCards = [
    {
        title: "İmplant",
        href: "/treatments/dental-implants",
        desc: "Uygunluk, süreç ve risk başlıklarını kısa ozetler.",
        tag: "İmplant",
    },
    {
        title: "Kaplama (Kron)",
        href: "/treatments/dental-crowns",
        desc: "Ne zaman dusunulur, hangi materyaller vardir?",
        tag: "Kaplama",
    },
    {
        title: "Lamina / Veneer",
        href: "/treatments/veneers",
        desc: "Estetik beklenti, sinirlar ve bakım notlari.",
        tag: "Estetik",
    },
    {
        title: "All-on-4",
        href: "/treatments/allon4",
        desc: "Tam çene sabit cozumlerde süreç ve bakım.",
        tag: "Tam Çene",
    },
    {
        title: "All-on-6",
        href: "/treatments/allon6",
        desc: "Seçenekleri ve uygunluk kriterlerini ozetler.",
        tag: "Tam Çene",
    },
];

export default function TreatmentsIndex() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="space-y-3 text-center md:text-left">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Tedaviler</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Doğru tedavi rehberi</h1>
                    <p className="text-gray-700 max-w-3xl">
                        Klinik dışı ve tarafsız ozetler. Süreç, uygunluk ve doktorla sorulacaklari netlestirin.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {treatmentCards.map((card) => (
                        <Link
                            key={card.href}
                            href={card.href}
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2 hover:border-teal-200 hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-2 text-xs text-teal-700">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{card.tag}</span>
                            </div>
                            <h2 className="text-xl font-semibold text-brand-secondary">{card.title}</h2>
                            <p className="text-sm text-gray-700">{card.desc}</p>
                            <span className="text-sm font-semibold text-teal-700">Open guide →</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="bg-white border-t border-gray-200 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Need a second opinion?</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Ön değerlendirme alin</h2>
                    <p className="text-gray-700 text-sm">
                        Kısa bilgi ve varsa fotoğraf ekleyin; süreç ve sorulacaklari ozetleyelim.
                    </p>
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
                    </div>
                    <div className="bg-brand-surface rounded-2xl border border-gray-200 p-5 space-y-2">
                        <h3 className="text-lg font-semibold text-brand-secondary">Neler alin?</h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Seçeneklerin kısa özeti</li>
                            <li>Süreç ve zamanlama notlari</li>
                            <li>Doktora sorulacak sorular</li>
                            <li>Talep iletimi ve gizlilik</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
