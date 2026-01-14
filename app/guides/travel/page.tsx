import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Süreç Rehberi | Diş Tedavi Rehberi",
    description: "Randevu, süreç ve şehir seçimi konusunda kısa rehber.",
};

const destinations = [
    {
        city: "Antalya",
        desc: "Randevu erisimini ve ulasimi planlarken bu şehirler sık tercih edilir.",
        airport: "Antalya",
        bullets: ["Şehir ici ulaşım", "Klinik yoğunluğu", "Randevu bulunurlugu"],
    },
    {
        city: "İstanbul",
        desc: "Genis klinik agi ve laboratuvar altyapisi bulunur.",
        airport: "İstanbul",
        bullets: ["Ulaşım seçenekleri", "Randevu yoğunluğu", "Şehir ici erişim"],
    },
    {
        city: "İzmir",
        desc: "Daha sakin tempo ve ulaşım kolayligi ile tercih edilir.",
        airport: "İzmir",
        bullets: ["Şehir merkezine yakinlik", "Ulaşım kolayligi", "Klinik seçenekleri"],
    },
];

const stayCards = [
    {
        title: "Lamina / Kaplama",
        badge: "Ortalama",
        points: ["Muayene ve planlama", "Prova ve uyum kontrolü"],
    },
    {
        title: "İmplant (tek/coklu)",
        badge: "Degisir",
        points: ["Muayene ve görüntüleme", "İyileşme ve protez asamasi"],
    },
    {
        title: "All-on-4 / Tam Çene",
        badge: "Degisir",
        points: ["Cerrahi ve geçici disler", "Kontroller ve kapanis ayari"],
    },
    {
        title: "Diş Eti / Temizlik",
        badge: "Kısa süre",
        points: ["Değerlendirme", "Kontrol randevusu"],
    },
];

const faqItems = [
    {
        q: "Süreç ne kadar surer?",
        a: "Tedavi turu ve vakaniza göre degisir; kesin plan muayenede netlesir.",
    },
    {
        q: "Randevu araligini nasıl belirlemeliyim?",
        a: "Kliniğin onerisine göre planlama yapmak en dogrusudur.",
    },
    {
        q: "Şehir seçimi neden önemli?",
        a: "Ulaşım ve randevu bulunurlugu süreci etkileyebilir.",
    },
    {
        q: "Klinikleri listeliyor musunuz?",
        a: "Hayir. Talebiniz sadece uygun görülen bağımsız kliniklerle paylasilir.",
    },
];

const steps = [
    { title: "İlk görüşme", body: "Hekim muayenesi ve görüntüleme ile plan netlesir." },
    { title: "Tedavi adimi", body: "Islemler planlanan gunlerde uygulanir." },
    { title: "Kontrol", body: "Uygunluk ve uyum kontrolleri yapılir." },
    { title: "Takip", body: "Bakım ve kontrol planina göre ilerlenir." },
];

const checklist = [
    "Kimlik ve iletişim bilgileri",
    "Randevu saatleri ve konum",
    "Röntgen ve onceki islemler (varsa)",
    "Kullandiginiz ilac listesi",
    "Sorularınızı not edin",
];

export default function TravelGuidePage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="space-y-6">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Nasıl Çalışır</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Süreç Rehberi</h1>
                    <p className="text-lg text-gray-700">
                        Randevu, süreç ve şehir seçimi için kısa bir özet.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#cta"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Ön Değerlendirme Al
                        </a>
                        <a
                            href="#duration"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            Süreç notlari →
                        </a>
                    </div>
                </section>

                {/* Why Planning */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">Süreç Planlamasi Neden Önemli?</h2>
                            <p className="text-gray-700">Tedavi turu, randevu araliklarini ve toplam sureyi belirler.</p>
                            <p className="text-gray-700">Kısa bir plan, gereksiz gecikmeleri azaltir.</p>
                            <p className="text-gray-700">Kesin bilgi muayenede netlesir.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-brand-secondary">Randevu ve Süreç</h3>
                            <p className="text-gray-700">Randevu gunleri ve kontroller onemlidir.</p>
                            <p className="text-gray-700">Net tarihleri klinik ile teyit edin.</p>
                        </div>
                    </div>
                </section>

                {/* Cities */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Şehir Seçimi</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {destinations.map((city) => (
                            <div key={city.city} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-semibold">{city.city}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{city.airport}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{city.desc}</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {city.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Flights */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Ulaşım ve Erişim</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                            <h3 className="text-lg font-semibold">Şehir İçindeki Erişim</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Kliniğe ulaşım surelerini kontrol edin.</li>
                                <li>Toplu tasima veya özel araç seceneklerini planlayin.</li>
                                <li>Şehir ici mesafeler süreci etkileyebilir.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                            <h3 className="text-lg font-semibold">Randevu Gunleri</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Randevu araliklarini klinik belirler.</li>
                                <li>Kontrol randevularini ihmal etmeyin.</li>
                                <li>Takip planini yazılı olarak isteyin.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 text-sm text-teal-900">
                        <p className="font-semibold">Not</p>
                        <p>Bu sayfa genel bilgilendirme içindir; tani ve tedavi sunmaz.</p>
                    </div>
                </section>

                {/* Duration */}
                <section id="duration" className="space-y-6">
                    <h2 className="text-2xl font-semibold">Süreç ve Zamanlama</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {stayCards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">{card.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-600 text-white">{card.badge}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {card.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Örnek Akis</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
                        <ol className="space-y-4">
                            {steps.map((step, idx) => (
                                <li key={step.title} className="flex gap-4">
                                    <div className="flex-none h-10 w-10 rounded-full bg-teal-600 text-white font-semibold grid place-items-center">
                                        {idx + 1}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">{step.title}</h3>
                                        <p className="text-gray-700 text-sm">{step.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Accommodation */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Ulaşım ve Konum</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                            <h3 className="text-lg font-semibold">Konum seçimi</h3>
                            <p className="text-gray-700 text-sm">Kliniğe yakinlik randevu gunlerini kolaylastirir.</p>
                            <p className="text-gray-700 text-sm">Ulaşım suresi ve erişim oncelik olabilir.</p>
                            <p className="text-xs text-teal-900 bg-teal-50 border border-teal-100 rounded-lg px-3 py-2">Detaylari klinik ile netlestirebilirsiniz.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                            <h3 className="text-lg font-semibold">Şehir ici ulaşım</h3>
                            <p className="text-gray-700 text-sm">Ulaşım planini randevu saatlerine göre yapin.</p>
                            <p className="text-gray-700 text-sm">Toplu tasima veya özel araç seceneklerini kontrol edin.</p>
                            <p className="text-gray-700 text-sm">Gecikmeleri onlemek için süre ayirin.</p>
                        </div>
                    </div>
                </section>

                {/* Safety */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Guvenlik ve Konfor</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Hijyen</h3>
                            <p className="text-gray-700 text-sm">Kliniğin hijyen protokollerini sorabilirsiniz.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">İletişim</h3>
                            <p className="text-gray-700 text-sm">İletişim kanallarini netlestirin.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Materyal ve standart</h3>
                            <p className="text-gray-700 text-sm">Kullanılan materyal ve garanti sartlarini yazılı isteyin.</p>
                        </div>
                    </div>
                </section>

                {/* Packing */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Hazırlık Listesi</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
                        <ul className="space-y-2">
                            {checklist.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-xs">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Food & activities */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Beslenme ve Dinlenme</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold">Beslenme</h3>
                            <p className="text-gray-700 text-sm">Hekimin verdigi beslenme talimatlarini izleyin.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold">Dinlenme</h3>
                            <p className="text-gray-700 text-sm">Randevu gunlerinde asiri efordan kacinin.</p>
                        </div>
                    </div>
                </section>

                {/* After return */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Takip</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                        <p className="text-gray-700 text-sm">Kontrol randevularini ve bakım adimlarini not alin.</p>
                        <p className="text-gray-700 text-sm">Sorun hissederseniz klinikle iletişime geçin.</p>
                        <p className="text-gray-700 text-sm">
                            Detaylar için{" "}
                            <Link href="/guides/warranty" className="text-teal-700 underline">
                                Bakım ve Takip
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Sık Sorulanlar</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y">
                        {faqItems.map((item, idx) => (
                            <details key={item.q} className="group" {...(idx === 0 ? { open: true } : {})}>
                                <summary className="p-4 flex items-center justify-between cursor-pointer select-none">
                                    <span className="font-semibold text-brand-secondary">{item.q}</span>
                                    <span className="text-xl text-teal-700 transition group-open:rotate-90">+</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-gray-700">{item.a}</div>
                            </details>
                        ))}
                    </div>
                </section>
            </div>

            {/* CTA */}
            <section id="cta" className="bg-teal-50 border-t border-teal-100 py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold text-brand-secondary">Ön değerlendirme alin</h2>
                            <p className="text-gray-700 text-sm">Kısa bilgi ve varsa fotoğraf ekleyin. Süreç başlıklarını ozetleyelim.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/upload"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Ön Değerlendirme
                            </Link>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-teal-700 font-semibold hover:text-teal-800 transition"
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
