import Link from "next/link";
import type { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";
import AftercareTabs from "./AftercareTabs";

export const metadata: Metadata = {
    title: "Bakım ve Takip | Diş Tedavi Rehberi",
    description: "Bakım, kontrol ve kliniklerle iletişim için kısa notlar.",
};

const coverageCards = [
    {
        title: "Lamina / Kaplama",
        duration: "Kliniğe göre degisir",
        bullets: ["Garanti sartlarini yazılı isteyin", "Materyal bilgisi"],
    },
    {
        title: "Kopru / Onlay",
        duration: "Kliniğe göre degisir",
        bullets: ["Bakım ve kontrol gerektirir", "Sartlari netlestirin"],
    },
    {
        title: "İmplant",
        duration: "Sartlar farklidir",
        bullets: ["Protez ve implant farki", "Bakım sartlari"],
    },
    {
        title: "All-on-4 / Tam Çene",
        duration: "Kliniğe göre degisir",
        bullets: ["Kontroller onemlidir", "Kapanis ayari takip edilir"],
    },
];

const responsibilities = [
    "Duzenli kontrol randevulari",
    "Gunluk hijyen ve bakım",
    "Diş sikma varsa gece plagi",
    "Sert gidalardan kacinin",
    "Sorun hissederseniz kliniğe bildirin",
];

const aftercareTabs = [
    {
        key: "veneers",
        title: "Lamina / Kaplama",
        points: [
            "İlk 24–48 saat: yumuşak gida, nazik bakım.",
            "İlk hafta: hassasiyet olabilir; sert gidalardan kacinin.",
            "Uzun donem: hijyen ve kontroller.",
        ],
    },
    {
        key: "implants",
        title: "İmplant",
        points: [
            "İlk 24–48 saat: hekim talimatlari.",
            "İlk hafta: hijyen ve gargaralar.",
            "Uzun donem: kontroller ve bakım.",
        ],
    },
    {
        key: "fullmouth",
        title: "All-on-4 / Tam Çene",
        points: [
            "İlk 24–48 saat: yumuşak gida, nazik bakım.",
            "İlk hafta: ayar ve kontroller gerekebilir.",
            "Uzun donem: planli kontroller.",
        ],
    },
    {
        key: "gum",
        title: "Diş Eti / Temizlik",
        points: [
            "İlk 24–48 saat: hafif hassasiyet olabilir.",
            "İlk hafta: yumuşak gida, nazik fircalama.",
            "Uzun donem: duzenli hijyen.",
        ],
    },
];

const homeCare = [
    {
        title: "Fircalama",
        body: "Yumuşak firca ve duzenli temizlik.",
    },
    {
        title: "Diş ipi",
        body: "Hekimin onerdigi şekilde kullanin.",
    },
    {
        title: "Gargara",
        body: "Önerilen gargaralari kullanin.",
    },
];

const faqItems = [
    { q: "Garanti sartlarini nerede gorurum?", a: "Kliniğin yazılı planinda yer alir." },
    { q: "Sorun yaşarsam ne yapmalıyim?", a: "Klinikle iletişime geçin ve talimat isteyin." },
    { q: "Kontroller neden önemli?", a: "Uyum ve bakım için gereklidir." },
    { q: "Sigara etkiler mi?", a: "Iyilesmeyi etkileyebilir; hekimle gorusun." },
    { q: "Hassasiyet ne kadar surer?", a: "Vaka bazli degisir; uzarsa kliniğe danisin." },
];

const normalVsContact = {
    normal: ["Kısa sureli hassasiyet", "Hafif kanama", "Geçici kapanis farki"],
    contact: [
        "Artan agri veya sislik",
        "Gevseme hissi",
        "Kapanista belirgin bozukluk",
        "Ates veya enfeksiyon belirtisi",
    ],
};

export default function WarrantyPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Nasıl Çalışır</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Bakım ve Takip</h1>
                    <p className="text-lg text-gray-700">
                        Klinik degiliz ve tedavi sunmayiz. Bu sayfa bakım ve kontrol başlıklarını ozetler.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Soru Sor
                        </a>
                        <Link
                            href="/guides/timeline"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            Zamanlama →
                        </Link>
                    </div>
                </section>

                {/* Commitment */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    <div className="md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">Net Bilgi</h2>
                            <p className="text-gray-700">Bakım ve kontrol konularini kısa ozetleriz.</p>
                            <p className="text-gray-700">Kliniğe sorulacaklari not alin.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Sorumluluklar</h3>
                            <p className="text-gray-700">Garanti ve bakım kliniğin sorumlulugundadir.</p>
                            <p className="text-gray-700">Sorun hissederseniz klinikle iletişime geçin.</p>
                        </div>
                    </div>
                </section>

                {/* Coverage */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Garanti Kapsami</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {coverageCards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-brand-secondary">{card.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{card.duration}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {card.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-700">
                        Kesin sartlar kliniginiz tarafindan yazılı olarak verilir.
                    </p>
                </section>

                {/* Not covered */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Garanti Dışı Durumlar</h2>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl space-y-2">
                        <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
                            <li>Travma ve kazalar</li>
                            <li>Bakım talimatlarina uyulmaması</li>
                            <li>Diş sikma ve gece plagi kullanmama</li>
                            <li>Sigara kaynakli sorunlar</li>
                        </ul>
                        <p className="text-xs text-amber-900">Detaylar kliniğin yazılı belgelerinde yer alir.</p>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Sorumluluklariniz</h2>
                    <div className="grid md:grid-cols-2 gap-3 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        {responsibilities.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-xs">✓</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Aftercare tabs/cards */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Tedaviye Göre Bakım</h2>
                    <AftercareTabs tabs={aftercareTabs} />
                </section>

                {/* Home care */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Gunluk Bakım</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {homeCare.map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-700">Duzenli bakım ve kontroller onemlidir.</p>
                </section>

                {/* When to contact */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Ne Zaman Kliniğe Ulasin?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">Normal</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {normalVsContact.normal.map((n) => (
                                    <li key={n}>{n}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">Kliniğe Ulasin</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {normalVsContact.contact.map((c) => (
                                    <li key={c}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-900">
                        Siddetli agri veya ates varsa acil sağlık destegi alin ve klinigi bilgilendirin.
                    </div>
                </section>

                {/* Remote support */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Uzaktan İletişim</h2>
                    <div className="md:grid md:grid-cols-2 md:gap-6 space-y-4 md:space-y-0">
                        <div className="space-y-2">
                            <p className="text-gray-700 text-sm">Klinikler fotoğraf veya video isteyebilir.</p>
                            <p className="text-gray-700 text-sm">Gerekli gorulurse kontrol randevusu planlanir.</p>
                            <p className="text-gray-700 text-sm">Sorularınızı onceden not alin.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 grid place-items-center text-sm text-gray-500">
                            Görsel alan
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Sık Sorulanlar</h2>
                    <FAQAccordion items={faqItems} />
                </section>
            </div>

            {/* CTA */}
            <section id="contact" className="bg-teal-600 text-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">Sorunuz mu var?</h2>
                            <p className="text-sm text-teal-50">Genel bilgi için bize yazabilirsiniz.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                E-posta Gonder
                            </a>
                            <Link
                                href="/guides/timeline"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                            >
                                Zamanlama
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
