import Link from "next/link";
import FAQ, { type FaqItem } from "@/components/FAQ";
import TreatmentCards, { type TreatmentItem } from "@/components/TreatmentCards";
import BlogSection from "@/components/blog/BlogSection";

const treatments: TreatmentItem[] = [
    {
        title: "İmplant",
        href: "/treatments/dental-implants",
        image: { src: "/images/full-mouth.jpg", alt: "Dental implant" },
        excerpt: "Süreç, uygunluk ve risk başlıklarını kısa ozetler.",
    },
    {
        title: "Kaplama (Kron)",
        href: "/treatments/dental-crowns",
        image: { src: "/images/preventive.jpg", alt: "Dental crowns" },
        excerpt: "Ne zaman dusunulur, hangi materyaller vardir, kisaca.",
    },
    {
        title: "Lamina / Veneer",
        href: "/treatments/veneers",
        image: { src: "/images/veneers.png", alt: "Veneers" },
        excerpt: "Estetik beklenti, sinirlar ve bakım notlari.",
    },
    {
        title: "All-on-4",
        href: "/treatments/allon4",
        image: { src: "/images/allon4.jpeg", alt: "All-on-4 implants" },
        excerpt: "Tam çene sabit cozumlerde süreç ve bakım ozetleri.",
    },
    {
        title: "All-on-6",
        href: "/treatments/allon6",
        image: { src: "/images/allon6.jpeg", alt: "All-on-6 implants" },
        excerpt: "Seçenekleri ve uygunluk kriterlerini kisaca anlatir.",
    },
];

const faqItems: FaqItem[] = [
    {
        q: "Siz klinik misiniz?",
        a: "Hayir. Diş Tedavi Rehberi klinik degildir; yalnizca bilgilendirme yapar ve talebinizi iletir.",
    },
    {
        q: "Tedavi planlarini karsilastirmama yardim eder misiniz?",
        a: "Genel farklari, süreci ve risk başlıklarını açıklarız; kesin plan hekimle belirlenir.",
    },
    {
        q: "Klinikler listeleniyor mu?",
        a: "Hayir. Talebiniz sadece uygun görülen bağımsız kliniklerle paylasilir.",
    },
    {
        q: "Fiyat bilgisi veriyor musunuz?",
        a: "Net fiyat vermez, fiyati nelerin belirledigini paylasiriz.",
    },
    {
        q: "Hangi bilgiler yeterli?",
        a: "Kısa sikayet özeti ve varsa fotoğraf yeterlidir; detaylar muayenede netlesir.",
    },
    {
        q: "Fotoğraf zorunlu mu?",
        a: "Hayir, varsa ekleyebilirsiniz.",
    },
    {
        q: "Talebim kimlerle paylasilir?",
        a: "Sadece ilgili bağımsız kliniklerle paylasilir.",
    },
    {
        q: "Tani veya tedavi sunuyor musunuz?",
        a: "Hayir. Tani ve tedavi yalnizca hekim tarafindan yapılir.",
    },
];

const howItWorksLinks = [
    { title: "Ön Değerlendirme Formu", href: "/upload", desc: "Kısa bir talep iletin, süreç hakkında bilgi alin." },
    { title: "Süreç Rehberi", href: "/guides/travel", desc: "Tedavi surecini adim adim ozetler." },
    { title: "Zamanlama", href: "/guides/timeline", desc: "Ortalama sureleri ve planlamayi anlatir." },
    { title: "Bakım ve Takip", href: "/guides/warranty", desc: "Bakım sorumluluklari ve kontrol notlari." },
    { title: "KVKK ve Gizlilik", href: "/guides/legal", desc: "Veri paylasimi ve haklariniza dair özet." },
];

const pillars = [
    { title: "Klinik dışı rehberlik", body: "Klinik degiliz; seçenekleri sade bir dille açıklarız." },
    { title: "Ön bilgi", body: "Uygunluk, süreç ve risk başlıklarını ozetleriz." },
    { title: "Tarafsız yaklasim", body: "Klinik onerisi yapmayiz; karar size aittir." },
    { title: "Gizlilik odakli", body: "Talebiniz sadece ilgili kliniklerle paylasilir." },
];

const resourceCards = [
    { title: "Süreç Rehberi", href: "/guides/travel", body: "Tedavi akisi ve randevu planlamasi." },
    { title: "Zamanlama", href: "/guides/timeline", body: "Ortalama sureler ve beklenen adimlar." },
    { title: "Bakım ve Takip", href: "/guides/warranty", body: "Bakım sorumluluklari ve kontrol notlari." },
    { title: "KVKK Özeti", href: "/guides/legal", body: "Veri paylasimi ve gizlilik prensipleri." },
];

const steps = [
    { title: "Talep oluşturun", body: "Kısa bilgi girin, varsa fotoğraf ekleyin.", cta: "/upload" },
    { title: "Ön bilgi alin", body: "Secenekler ve süreç basliklari ozetlenir.", cta: "/guides/timeline" },
    { title: "Kliniğe iletim", body: "Talebiniz ilgili bağımsız kliniklerle paylasilir.", cta: "/guides/travel" },
];

export default function HomePage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-gray-50" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
                            Klinik dışı, tarafsız rehberlik
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                            Turkiye için diş tedavi seceneklerini sade ve tarafsız anlatir
                        </h1>
                        <p className="text-lg text-gray-700">
                            Kısa bir talep oluşturun; süreç, uygunluk ve risk başlıklarını netlestirin.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/upload"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Ön Değerlendirme Al
                            </Link>
                            <Link
                                href="/guides/timeline"
                                className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                Süreç ve Zamanlama
                            </Link>
                        </div>
                        <div className="text-sm text-gray-600">
                            Platform tani ve tedavi sunmaz; yalnizca talep iletir.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 space-y-3">
                        <h3 className="text-lg font-semibold">Kısaca Nasıl Çalışır?</h3>
                        <ul className="space-y-3">
                            {howItWorksLinks.slice(0, 4).map((item) => (
                                <li key={item.href} className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                                    <div>
                                        <Link href={item.href} className="text-sm font-semibold text-brand-secondary hover:text-teal-700 transition">
                                            {item.title}
                                        </Link>
                                        <p className="text-sm text-gray-700">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                            <li className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                                <div>
                                    <Link href="/guides/legal" className="text-sm font-semibold text-brand-secondary hover:text-teal-700 transition">
                                        KVKK ve Gizlilik
                                    </Link>
                                    <p className="text-sm text-gray-700">Veri paylasimi ve haklariniza dair kısa özet.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Neden Diş Tedavi Rehberi</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Hastanin yanında, sade ve tarafsız</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">Kısa bilgi, süreç özeti ve doktorla görüşmede sorulacaklar tek yerde.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {pillars.map((item) => (
                        <div key={item.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">{item.title}</h3>
                            <p className="text-sm text-gray-700">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Steps */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Basit Akis</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Talep oluştur, net adimlari gor</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {steps.map((step, idx) => (
                        <div key={step.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-800 text-sm font-semibold">{idx + 1}</span>
                            <h3 className="text-lg font-semibold text-brand-secondary">{step.title}</h3>
                            <p className="text-sm text-gray-700">{step.body}</p>
                            <Link href={step.cta} className="text-sm font-semibold text-teal-700 hover:text-teal-800 transition">
                                Incele →
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-sm text-gray-700 text-center">
                    Tani ve tedavi sunmayiz; yalnizca seçenekleri anlamaniza yardim eder ve talebinizi iletiriz.
                </div>
            </section>

            {/* Treatments */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Tedavi Rehberleri</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Doğru rehberle baslayin</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">Kimler için uygun, süreç nasıl ilerler, kısa ozetler.</p>
                </div>
                <TreatmentCards items={treatments} className="py-1" />
            </section>

            {/* Resources */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Kaynaklar</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Kısa ve pratik rehberler</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">Süreç, zamanlama ve bakım başlıklarına hizlica bakın.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {resourceCards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2 hover:border-teal-200 hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold text-brand-secondary">{card.title}</h3>
                            <p className="text-sm text-gray-700">{card.body}</p>
                            <span className="text-sm font-semibold text-teal-700">Incele →</span>
                        </Link>
                    ))}
                </div>
            </section>

            <BlogSection />

            {/* FAQ */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Sık Sorulanlar</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Kısa yanitlar</h2>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10">
                    <FAQ items={faqItems} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-teal-600 text-white py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">Ön değerlendirme alin</h3>
                        <p className="text-sm text-teal-50">Kısa bir talep oluşturun, genel bilgi alin.</p>
                        <p className="text-xs text-teal-50">Platform tani ve tedavi sunmaz; yalnizca talep iletir.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/upload"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                        >
                            Ön Değerlendirme Al
                        </Link>
                        <Link
                            href="/guides/warranty"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                        >
                            Bakım ve Takip
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
