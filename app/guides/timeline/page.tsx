import Link from "next/link";
import type { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
    title: "Zamanlama | Diş Tedavi Rehberi",
    description: "Tedavi süreci, ortalama zamanlama ve iyileşme notlari için kısa rehber.",
};

const timelineCards = [
    {
        title: "Lamina / Kaplama",
        badge: "Ortalama",
        stay: "Degisir",
        points: ["Muayene ve planlama", "Prova ve uyum", "Kontrol randevusu"],
    },
    {
        title: "İmplant",
        badge: "Degisir",
        stay: "Vaka bazli",
        points: ["Cerrahi ve iyileşme", "Protez asamasi", "Kontrol"],
    },
    {
        title: "All-on-4 / Tam Çene",
        badge: "Degisir",
        stay: "Vaka bazli",
        points: ["Cerrahi ve geçici disler", "Kontroller", "Kapanis ayari"],
    },
    {
        title: "Diş Eti / Temizlik",
        badge: "Kısa süre",
        stay: "Degisir",
        points: ["Değerlendirme", "Temizlik", "Kısa kontrol"],
    },
];

const veneerWeek = [
    { day: "Gün 1", title: "Muayene", body: "Görüntüleme ve plan netlesir." },
    { day: "Gün 2", title: "Hazırlık", body: "Gerekli islem ve olcu." },
    { day: "Gün 3–4", title: "Laboratuvar", body: "Uretim ve prova." },
    { day: "Gün 5–6", title: "Uyum", body: "Prova ve ayarlar." },
    { day: "Gün 7", title: "Kontrol", body: "Bakım ve takip notlari." },
];

const implantVisits = [
    {
        visit: "1. Ziyaret – Cerrahi",
        stay: "Degisir",
        bullets: ["Muayene ve planlama", "Cerrahi uygulama", "Kontrol"],
    },
    {
        visit: "2. Ziyaret – Protez",
        stay: "Degisir",
        bullets: ["Olcu / tarama", "Prova", "Son uyum"],
    },
];

const healingBlocks = [
    {
        title: "İlk 24–48 Saat",
        body: "Hafif hassasiyet olabilir. Hekim onerilerine uyun.",
    },
    {
        title: "İlk Hafta",
        body: "Bakım ve hijyen talimatlari onemlidir.",
    },
    {
        title: "Uzun Donem",
        body: "Kontrollerle süreç izlenir.",
    },
];

const healingCompare = [
    {
        title: "Lamina / Kaplama",
        details: ["Kısa sureli hassasiyet", "Uygunluk kontrolleri"],
    },
    {
        title: "İmplant",
        details: ["İyileşme süreci degisir", "Kontrollerle izlenir"],
    },
    {
        title: "All-on-4",
        details: ["Geçici dislere uyum", "Son uyum ayarlari"],
    },
    {
        title: "Diş Eti Tedavisi",
        details: ["İlk gunlerde hassasiyet", "Kontrollerle duzelme"],
    },
];

const faqItems = [
    { q: "İyileşme ne kadar surer?", a: "Tedavi turu ve vakaya göre degisir; hekim netlestirir." },
    { q: "Ne zaman normal beslenebilirim?", a: "Hekimin talimatlarina göre ilerlenir." },
    { q: "Kontroller zorunlu mu?", a: "Uygunluk ve takip için onemlidir." },
    { q: "Hassasiyet normal mi?", a: "Kısa sureli hassasiyet olabilir." },
];

export default function TimelinePage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Nasıl Çalışır</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Zamanlama ve İyileşme</h1>
                    <p className="text-lg text-gray-700">
                        Tedavi süreci ve iyileşme adimlari için kısa bir özet.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="#summary"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Tedavi Sureleri
                        </a>
                        <a
                            href="#sample-week"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            Örnek Akis →
                        </a>
                    </div>
                </section>

                {/* Why timelines */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    <div className="md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">Zamanlama Neden Önemli?</h2>
                            <p className="text-gray-700">Tedavi turu, randevu araliklarini belirler.</p>
                            <p className="text-gray-700">Planlama, süreci daha sakin yönetmenize yardimci olur.</p>
                            <p className="text-gray-700">Kesin plan hekim muayenesinde netlesir.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">İyileşme Notlari</h3>
                            <p className="text-gray-700">Hassasiyet ve kontroller için hekim talimatlarini izleyin.</p>
                            <p className="text-gray-700">Kontrolleri aksatmayin.</p>
                        </div>
                    </div>
                </section>

                {/* Summary cards */}
                <section id="summary" className="space-y-6">
                    <h2 className="text-2xl font-semibold">Tedavi Sureleri (Özet)</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {timelineCards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{card.badge}</span>
                                    <span className="text-sm font-semibold text-brand-secondary">{card.stay}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-brand-secondary">{card.title}</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {card.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sample week */}
                <section id="sample-week" className="space-y-6">
                    <h2 className="text-2xl font-semibold">Örnek 7 Gunluk Akis</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <ol className="relative border-l border-teal-100 pl-5 space-y-4">
                            {veneerWeek.map((item) => (
                                <li key={item.day} className="relative pl-4">
                                    <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-teal-600" aria-hidden />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <span className="text-sm font-semibold text-teal-700">{item.day}</span>
                                        <span className="text-base font-semibold text-brand-secondary">{item.title}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-1">{item.body}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Implants two-trip */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">İmplant Ziyaretleri</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {implantVisits.map((visit) => (
                            <div key={visit.visit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-brand-secondary">{visit.visit}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{visit.stay}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {visit.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-700 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3">
                        Ziyaretler arasi süre, vakaya göre degisir ve hekim tarafindan belirlenir.
                    </p>
                </section>

                {/* Healing expectations */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">İyileşme Notlari</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {healingBlocks.map((block) => (
                            <div key={block.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                                <div className="h-10 w-10 rounded-full bg-teal-50 text-teal-700 grid place-items-center font-semibold">ℹ</div>
                                <h3 className="text-lg font-semibold text-brand-secondary">{block.title}</h3>
                                <p className="text-gray-700 text-sm">{block.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pain & comfort */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Agri ve Konfor</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">Hassasiyet</h3>
                            <p className="text-gray-700 text-sm">Kısa sureli hassasiyet normal olabilir. Hekim talimatlarini izleyin.</p>
                            <p className="text-gray-700 text-sm">Dinlenme ve bakım onemlidir.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">Ne zaman kliniğe ulasin?</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Uzayan agri veya belirgin sislik.</li>
                                <li>Ates, siddetli kanama.</li>
                                <li>Kapanista belirgin degisiklik.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 text-sm text-teal-900">
                        Bu sayfa genel bilgilendirme amaclidir; kesin talimat hekim tarafindan verilir.
                    </div>
                </section>

                {/* Eating */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Beslenme</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Lamina / Kaplama</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>İlk gunlerde yumuşak gidalar.</li>
                                <li>Sert ve yapiskan gidalaru erteleyin.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">İmplant</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Hekimin onerilerine göre beslenin.</li>
                                <li>Bakım talimatlarini izleyin.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Diş Eti Tedavisi</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Asiri sicak veya sert gidalardan kacinin.</li>
                                <li>Önerilen gargaralari kullanin.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                        <h3 className="text-lg font-semibold">Dinlenme</h3>
                        <p className="text-gray-700 text-sm">İlk gunlerde agir efordan kacinin.</p>
                    </div>
                </section>

                {/* Oral care */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Bakım</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Fircalama</h3>
                            <p className="text-gray-700 text-sm">Yumuşak firca kullanin; hekim onermeden cerrahi bolgeye dokunmayin.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Gargara</h3>
                            <p className="text-gray-700 text-sm">Önerilen gargara ve bakım talimatlarini izleyin.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Diş ipi</h3>
                            <p className="text-gray-700 text-sm">Hekimin onayi ile baslayin.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Gece plakki</h3>
                            <p className="text-gray-700 text-sm">Diş sikma varsa hekimle gorusun.</p>
                        </div>
                    </div>
                </section>

                {/* Healing comparison */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Tedaviye Göre İyileşme</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {healingCompare.map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">{item.title}</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {item.details.map((d) => (
                                        <li key={d}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Sık Sorulanlar</h2>
                    <FAQAccordion items={faqItems} />
                </section>
            </div>

            {/* CTA */}
            <section className="bg-teal-600 text-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">Ön değerlendirme alin</h2>
                            <p className="text-sm text-teal-50">Kısa bilgi ve varsa fotoğraf ekleyin; süreç başlıklarını ozetleyelim.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/upload"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                Ön Değerlendirme
                            </Link>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                            >
                                E-posta ile sor
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
