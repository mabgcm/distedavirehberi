import Link from "next/link";
import type { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";
import CaseIntakeForm from "./CaseIntakeForm";

export const metadata: Metadata = {
    title: "KVKK ve Gizlilik Özeti | Diş Tedavi Rehberi",
    description: "Verilerinizi nasıl toplar, kullanir ve paylastigimizi kısa ve sade şekilde anlatiriz.",
};

const helpCards = [
    { title: "Hangi veriler?", body: "Talep formu ve iletişim bilgileri gibi temel veriler." },
    { title: "Nasıl kullanilir?", body: "Talebi ilgili bağımsız kliniklere iletmek için." },
    { title: "Kimlerle paylasilir?", body: "Sadece uygun görülen bağımsız kliniklerle." },
    { title: "Saklama suresi", body: "Amacla sinirli süre boyunca." },
    { title: "Guvenlik", body: "Veri guvenligi için temel onlemler uygulanir." },
    { title: "Haklariniz", body: "Erişim, duzeltme ve silme talepleri." },
];

const processSteps = [
    { title: "Veri toplama", body: "Form ve iletişim bilgileri ile talep oluşturulur." },
    { title: "Talep iletimi", body: "Uygun kliniklerle kontrollu paylasim yapılir." },
    { title: "Saklama ve erişim", body: "Veriler amacla sinirli süre saklanir." },
    { title: "Talepler", body: "Erişim/duzeltme/silme talepleri alinabilir." },
];

const docsChecklist = [
    "Ad, soyad, iletişim bilgileri",
    "Talep konusu ve kısa açıklama",
    "Opsiyonel fotoğraf veya röntgen",
    "Tercih edilen şehir/ zaman",
];

const mediationVsLegal = [
    {
        title: "Paylasim",
        badge: "Kontrollu",
        points: ["Sadece ilgili klinikler", "Minimum veri prensibi", "Talep odakli iletim"],
    },
    {
        title: "Haklar",
        badge: "KVKK",
        points: ["Erişim talebi", "Duzeltme / silme", "İletişim kanali iletimi"],
    },
];

const faqItems = [
    {
        q: "Verilerim kimlerle paylasilir?",
        a: "Yalnizca uygun görülen bağımsız kliniklerle.",
    },
    {
        q: "Fotoğraf zorunlu mu?",
        a: "Hayir. Varsa ekleyebilirsiniz.",
    },
    {
        q: "Verilerim ne kadar saklanir?",
        a: "Amacla sinirli süre boyunca.",
    },
    {
        q: "Verilerim silinebilir mi?",
        a: "Evet, talep edebilirsiniz.",
    },
    {
        q: "Klinikleri neden listelemiyorsunuz?",
        a: "Vaka farkliliklari nedeniyle herkese açık liste sunmayiz.",
    },
    {
        q: "Platform tani koyar mi?",
        a: "Hayir. Tani ve tedavi yalnizca hekim tarafindan yapılir.",
    },
];

export default function LegalSupportPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="max-w-3xl mx-auto text-center space-y-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Gizlilik</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">KVKK ve Gizlilik Özeti</h1>
                    <p className="text-lg text-gray-700">
                        Verilerinizi nasıl toplar, kullanir ve paylastigimizi kısa şekilde ozetleriz.
                    </p>
                    <div className="bg-teal-50 border border-teal-100 text-teal-900 rounded-xl px-4 py-3 text-sm">
                        <p className="font-semibold">Diş Tedavi Rehberi tani ve tedavi sunmaz; yalnizca talep iletimi yapar.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="#case-review"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Genel Bilgi Al
                        </a>
                        <a
                            href="#who"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            Veri Paylasimi →
                        </a>
                    </div>
                </section>

                {/* Who this is for */}
                <section id="who" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl font-semibold">Veri Paylasimi</h2>
                    <p className="text-gray-700 text-sm">
                        Talebiniz, uygun görülen bağımsız kliniklerle kontrollu şekilde paylasilir.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Klinikleri herkese açık listelemeyiz</li>
                        <li>Minimum veri prensibi uygulanir</li>
                        <li>Talep odakli paylasim yapılir</li>
                        <li>Detaylar muayenede netlesir</li>
                    </ul>
                    <div className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                        Not: Platform tani ve tedavi sunmaz.
                    </div>
                </section>

                {/* Free vs paid */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Paylasim Ilkeleri</h2>
                    <p className="text-gray-700 text-sm">
                        Verileriniz sadece talep amaciyla ve gerekli oldugu kadar kullanilir.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-brand-secondary">Toplanan Veriler</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-teal-600 text-white">Temel bilgi</span>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Ad, soyad, iletişim</li>
                                <li>Talep konusu</li>
                                <li>Opsiyonel fotoğraf</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-brand-secondary">Paylasim</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">Kontrollu</span>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Sadece ilgili klinikler</li>
                                <li>Herkese açık liste yok</li>
                                <li>Geri donus kliniğe aittir</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-xs text-gray-700">Haklariniz için bizimle iletişime geçebilirsiniz.</p>
                </section>

                {/* What we can help */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Neleri Paylasiriz?</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {helpCards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">{card.title}</h3>
                                <p className="text-gray-700 text-sm">{card.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What we do not do */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Sunmadigimiz Hizmetler</h2>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl space-y-2">
                        <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
                            <li>Tani ve tedavi sunmayiz</li>
                            <li>Klinik onermeyiz</li>
                            <li>Net fiyat veremeyiz</li>
                            <li>Herkese açık klinik listesi sunmayiz</li>
                        </ul>
                        <p className="text-xs text-amber-900">Detaylar hekim muayenesinde belirlenir.</p>
                    </div>
                </section>

                {/* Process */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Veri Isleme Süreci</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <ol className="relative border-l border-teal-100 pl-5 space-y-4">
                            {processSteps.map((step, idx) => (
                                <li key={step.title} className="relative pl-4">
                                    <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-teal-600" aria-hidden />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <span className="text-sm font-semibold text-teal-700">Adim {idx + 1}</span>
                                        <span className="text-base font-semibold text-brand-secondary">{step.title}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-1">{step.body}</p>
                                </li>
                            ))}
                        </ol>
                        <p className="text-xs text-gray-700 mt-4">
                            Talepleriniz için bize ulasabilirsiniz.
                        </p>
                    </div>
                </section>

                {/* Documents */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Paylasilan Bilgiler</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <ul className="space-y-2">
                            {docsChecklist.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-xs">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Patient rights overview */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-3">
                    <h2 className="text-2xl font-semibold">KVKK Haklariniz</h2>
                    <p className="text-gray-700 text-sm">Verilerinize erişim, duzeltme ve silme haklariniz bulunur.</p>
                    <p className="text-gray-700 text-sm">Taleplerinizi bize iletebilirsiniz.</p>
                    <p className="text-gray-700 text-sm">Bu sayfa özet bilgilendirme amaclidir.</p>
                </section>

                {/* Mediation vs legal */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Paylasim ve Haklar</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {mediationVsLegal.map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-brand-secondary">{item.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{item.badge}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {item.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-700">Talepleriniz için bizimle iletişime geçebilirsiniz.</p>
                </section>

                {/* Confidentiality */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-3">
                    <h2 className="text-2xl font-semibold">Gizlilik</h2>
                    <p className="text-gray-700 text-sm">Verileriniz gizlilik prensipleriyle islenir.</p>
                    <p className="text-gray-700 text-sm">Yasal zorunluluklar hariçinde izinsiz paylasim yapılmaz.</p>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Sık Sorulanlar</h2>
                    <FAQAccordion items={faqItems} />
                    <p className="text-xs text-gray-700">
                        Bu sayfa özet bilgilendirme amaclidir.
                    </p>
                </section>

                {/* CTA + Form */}
                <section id="case-review" className="space-y-8">
                    <div className="bg-teal-600 text-white rounded-2xl shadow-sm p-6 md:p-8 space-y-3">
                        <h2 className="text-2xl font-semibold">KVKK Talebi Oluşturun</h2>
                        <p className="text-sm text-teal-50">
                            Veri taleplerinizi veya genel sorularınızı iletebilirsiniz.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#intake-form"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                Talep Formu
                            </a>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                            >
                                Genel Soru
                            </a>
                        </div>
                    </div>

                    <div id="intake-form" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-6">
                        <h3 className="text-xl font-semibold text-brand-secondary">Talep Formu</h3>
                        <CaseIntakeForm />
                        <p className="text-xs text-gray-700">
                            Talepleriniz için bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
