import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Diş Tedavi Rehberi",
    description:
        "Diş Tedavi Rehberi, klinik dışı bilgi sunar ve hasta taleplerini bağımsız kliniklere iletir.",
};

const services = [
    {
        id: "service-1",
        label: "1. Bilgilendirme ve On Hazırlık",
        lead: "Tedavi turlerini, süreci ve uygunluk başlıklarını kısa ve tarafsız anlatiriz.",
        bullets: ["Seçeneklerin genel özeti", "Risk ve süreç basliklari", "Doktora sorulacaklar"],
        closing: "Amacimiz, gorusmeye hazır ve bilincli gitmenizi sağlamak.",
    },
    {
        id: "service-2",
        label: "2. Talep Iletimi",
        lead: "Kısa bilginizi alir, talebinizi uygun görülen bağımsız kliniklerle paylasiriz.",
        bullets: [
            "Klinik listesi yayinlamayiz",
            "Sadece ilgili kliniklerle paylasim",
            "Geri donus kliniğin insiyatifinde",
        ],
        closing: "Klinik seçimi ve tedavi karari her zaman size aittir.",
    },
    {
        id: "service-3",
        label: "3. Uygunluk ve Süreç Notlari",
        lead: "Kısa bir talep uzerinden uygunluk ve süreç notlarini paylasiriz.",
        bullets: [
            "Başlangıç bilgileri",
            "Ortalama zamanlama",
            "Bakım ve takip notlari",
        ],
        closing: "Detaylar hekim muayenesinde netlesir.",
    },
    {
        id: "service-4",
        label: "4. Gizlilik ve KVKK",
        lead: "Veri paylasiminda minimum ve gerekli bilgi prensibini benimseriz.",
        bullets: ["Kontrollu veri paylasimi", "Talep odakli iletim", "Gizlilik bilgilendirmesi"],
        closing: "Gizlilik haklariniza saygi duyariz.",
    },
];

const trustBullets = [
    "Klinik dışı ve tarafsız yaklasim",
    "Kısa, anlaşılır rehberlik",
    "Gizlilik ve veri guvenligi",
    "Seçim ve karar hastaya aittir",
    "Amac: bilincli karar destegi",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 space-y-14">
                {/* Hero */}
                <section className="space-y-6 text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-700">Tarafsız • Sade • Hasta Odakli</p>
                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Diş Tedavi Rehberi Hakkında</h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                            Diş Tedavi Rehberi, klinik dışı ve tarafsız bilgi sunar. Tani ve tedavi saglamaz.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                            Amacimiz, hastalarin seçenekleri anlamasi ve gorusmelere hazırlanmasidir.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 border border-teal-100">
                            Talep iletimi ucretsizdir
                        </span>
                        <Link
                            href="/upload"
                            className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                        >
                            Ön Değerlendirme Al
                        </Link>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-3">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                            <span className="h-2 w-2 rounded-full bg-teal-500" />
                            Misyonumuz
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Misyonumuz</h2>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            “Hastalarin seçenekleri anlamasi ve bilincli karar vermesi için tarafsız bilgi sunmak.”
                        </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-3">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <span className="h-2 w-2 rounded-full bg-slate-500" />
                            Vizyonumuz
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Vizyonumuz</h2>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            “Herkesin tedavi surecine net ve anlaşılır bilgiyle baslayabildigi bir deneyim.”
                        </p>
                    </div>
                </section>

                {/* What We Do */}
                <section className="space-y-4">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Ne Yapiyoruz</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Ne Yapiyoruz</h2>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">Diş Tedavi Rehberi, hastalar için su adimlari sunar:</p>
                    </div>
                </section>

                {/* Services Grid */}
                <section aria-label="Hizmetler" className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Temel Hizmetler</h3>
                    <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                        {services.map((service) => (
                            <article key={service.id} className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-3">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h2 className="text-xs font-semibold uppercase tracking-wide text-teal-700">{service.label}</h2>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed text-slate-700">{service.lead}</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
                                    {service.bullets.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <p className="text-sm md:text-base font-semibold text-slate-800">{service.closing}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Why Patients Trust */}
                <section className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-7 space-y-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Neden Guvenilir?</p>
                            <h3 className="text-2xl font-bold text-slate-900">Neden Diş Tedavi Rehberi?</h3>
                        </div>
                        <ul className="space-y-2 text-base md:text-lg text-slate-800">
                            {trustBullets.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold">
                                        ✓
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Promise */}
                <section className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 space-y-3">
                        <h3 className="text-2xl font-bold text-slate-900">Sozumuz</h3>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            Hastalara karsi açık, sade ve tarafsız bir bilgilendirme sunmayi taahhut ederiz.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            Karar her zaman size aittir; biz süreci anlaşılır hale getiririz.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/start"
                                className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                            >
                                İletişime Gecin
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
