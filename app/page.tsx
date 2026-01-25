"use client";

import React, { useState } from "react";

export default function HomePage() {
    const [selectedTopic, setSelectedTopic] = useState("");

    const scrollToCta = () => {
        const el = document.getElementById("cta");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSelect = (topic: string) => {
        setSelectedTopic(topic);
        scrollToCta();
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <section id="hero" className="pt-14 pb-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid gap-10 md:grid-cols-2 items-center">
                        <div>
                            <p className="text-sm font-semibold tracking-wide text-slate-500">
                                DİŞ TEDAVİLERİ REHBERİ
                            </p>
                            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                Diş Tedavileri Rehberi
                            </h1>
                            <p className="mt-4 text-lg text-slate-700">
                                Diş kliniği aramana gerek yok.
                            </p>
                            <p className="text-lg text-slate-700">
                                Şikâyetini anlat, tedavi seçenekleri hakkında ön bilgi al.
                            </p>

                            <div className="mt-6 space-y-2 text-slate-700">
                                <p>Diş problemini bizimle paylaşırsın.</p>
                                <p>Talebini, ilgili bağımsız kliniklere iletiriz.</p>
                                <p>Klinikler seninle iletişime geçer.</p>
                            </div>

                            <p className="mt-4 text-sm text-slate-500">
                                Klinik veya hekim önermiyoruz. Tedavi uygulamıyoruz.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={scrollToCta}
                                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                    aria-label="Ön değerlendirme al"
                                >
                                    Ön değerlendirme al
                                </button>
                                <a
                                    href="#treatments"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-white"
                                >
                                    Tedavileri incele
                                </a>
                            </div>
                            <p className="mt-3 text-sm text-slate-500">
                                Fotoğraf yüklemek zorunlu değildir.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <img
                                    src="https://placehold.co/600x420"
                                    alt="Diş sağlığı bilgilendirme görseli yer tutucu"
                                    className="w-full rounded-xl border border-slate-200"
                                />
                                <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm text-slate-700">
                                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                                        Ön bilgi
                                    </div>
                                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                                        Talep iletimi
                                    </div>
                                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                                        Klinik iletişimi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="platform" className="py-14 border-t border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Bu platform ne yapar?</h2>
                    <p className="mt-3 text-slate-700">
                        Diş tedavisiyle ilgili bir sorunun varsa ama nereden başlayacağını bilmiyorsan, burası bunun için var.
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <div className="md:col-span-2 grid gap-6">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                <h3 className="text-lg font-semibold">Ne yapıyoruz?</h3>
                                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                                    <li>Diş şikâyetini ve beklentilerini alıyoruz</li>
                                    <li>Olası tedavi seçenekleri hakkında ön bilgi sunuyoruz</li>
                                    <li>Talebini, ilgili kliniklere iletiyoruz</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                <h3 className="text-lg font-semibold">Ne yapmıyoruz?</h3>
                                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                                    <li>Klinik veya hekim önermiyoruz</li>
                                    <li>Tedavi planı dayatmıyoruz</li>
                                    <li>Karar vermen için baskı yapmıyoruz</li>
                                </ul>
                                <p className="mt-4 text-sm text-slate-600">
                                    Karar her zaman hasta ve hekim arasındadır.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold">Özet</h3>
                            <div className="mt-4 space-y-3 text-sm text-slate-700">
                                <p>Bilgilendirme ve yönlendirme sağlar.</p>
                                <p>Kararı kullanıcı ve klinik verir.</p>
                                <p>Tanı veya tedavi uygulamaz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h4 className="font-semibold">Ne yapıyoruz</h4>
                                <p className="mt-2 text-sm text-slate-700">
                                    Şikâyeti alır, seçenekleri sade şekilde anlatır, talebi iletir.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h4 className="font-semibold">Ne yapmıyoruz</h4>
                                <p className="mt-2 text-sm text-slate-700">
                                    Klinik ya da hekim seçmeyiz, yönlendirme yapmayız.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h4 className="font-semibold">Neden</h4>
                                <p className="mt-2 text-sm text-slate-700">
                                    Tarafsız ve şeffaf bir karar süreci için.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="treatments" className="py-14">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Hangi konuda bilgi almak istiyorsun?</h2>
                    <p className="mt-3 text-slate-700">
                        Diş tedavileri hakkında temel bilgileri inceleyebilir veya doğrudan ön değerlendirme alabilirsin.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "İmplant",
                            "Kaplama (Kron)",
                            "Lamina / Veneer",
                            "Diş Eti Tedavileri",
                            "All-on-4 / All-on-6",
                            "Ortodonti (Tel / Şeffaf Plak)",
                        ].map((treatment) => (
                            <button
                                key={treatment}
                                onClick={() => handleSelect(treatment)}
                                className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                aria-label={`${treatment} için ön değerlendirme al`}
                            >
                                <div className="text-sm text-slate-500">Tedavi</div>
                                <div className="mt-2 text-lg font-semibold text-slate-900">
                                    {treatment}
                                </div>
                                <div className="mt-3 text-sm text-slate-600">
                                    Ön değerlendirme için tıkla
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-slate-700">Her tedavi sayfasında:</p>
                        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                            <li>Kimler için uygun olduğu</li>
                            <li>Kimler için uygun olmadığı</li>
                            <li>Süreç ve genel riskler</li>
                            <li>Fiyatı etkileyen faktörler</li>
                        </ul>
                        <p className="mt-2 text-slate-700">net ve sade şekilde anlatılır.</p>
                    </div>
                </div>
            </section>

            <section id="symptoms" className="py-14 border-t border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Bu belirtiler sende var mı?</h2>
                    <p className="mt-3 text-slate-700">Bazı diş problemleri ağrı yapmadan ilerleyebilir.</p>
                    <p className="text-slate-700">
                        Aşağıdaki belirtilerden biri veya birkaçı sende varsa, ön bilgi almak faydalı olabilir.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Diş eti kanaması",
                            "Soğuk veya sıcak hassasiyeti",
                            "Çiğnerken ağrı",
                            "Diş sallanması",
                            "Kırık veya çatlak diş",
                            "Ağız kokusu",
                        ].map((symptom) => (
                            <button
                                key={symptom}
                                onClick={() => handleSelect(symptom)}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left shadow-sm transition hover:border-slate-300 hover:bg-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                aria-label={`${symptom} için ön değerlendirme al`}
                            >
                                <div className="text-sm text-slate-500">Belirti</div>
                                <div className="mt-2 text-lg font-semibold text-slate-900">
                                    {symptom}
                                </div>
                                <div className="mt-3 text-sm text-slate-600">
                                    Ön değerlendirme için tıkla
                                </div>
                            </button>
                        ))}
                    </div>

                    <p className="mt-6 text-slate-700">
                        Belirtiye göre bilgi alabilir veya doğrudan ön değerlendirme başlatabilirsin.
                    </p>
                </div>
            </section>

            <section id="how" className="py-14">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Nasıl çalışır?</h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="text-sm text-slate-500">Adım 1</div>
                            <h3 className="mt-2 text-lg font-semibold">1. Talebini oluştur</h3>
                            <p className="mt-2 text-slate-700">
                                Şikâyetini seç, varsa fotoğraf veya röntgen yükle.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="text-sm text-slate-500">Adım 2</div>
                            <h3 className="mt-2 text-lg font-semibold">2. Talebin iletilir</h3>
                            <p className="mt-2 text-slate-700">
                                Bilgilerin, ilgili bağımsız kliniklere yönlendirilir.
                            </p>
                            <p className="text-slate-700">Klinik isimleri sitede yer almaz.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="text-sm text-slate-500">Adım 3</div>
                            <h3 className="mt-2 text-lg font-semibold">
                                3. Klinikler seninle iletişime geçer
                            </h3>
                            <p className="mt-2 text-slate-700">
                                Uygunluk, süreç ve maliyetle ilgili detayları doğrudan klinikten öğrenirsin.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                        <p className="text-slate-700">Biz sadece aracı platformuz.</p>
                        <p className="text-slate-700">Tedavi yapmayız, klinik seçmeyiz.</p>
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-14 border-t border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Fiyatlar neden değişken?</h2>
                    <p className="mt-3 text-slate-700">
                        Diş tedavilerinde net bir fiyat, muayene ve görüntüleme sonrası belirlenir.
                    </p>
                    <p className="text-slate-700">
                        Ancak fiyatı etkileyen bazı temel faktörler vardır:
                    </p>

                    <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
                        <li>Tedavi türü</li>
                        <li>Kullanılacak malzeme</li>
                        <li>Gerekli ek işlemler</li>
                        <li>Tedavi süresi ve seans sayısı</li>
                    </ul>

                    <p className="mt-4 text-slate-700">
                        Bu faktörleri anlamak, doğru karar vermene yardımcı olur.
                    </p>
                </div>
            </section>

            <section id="why-no-clinic" className="py-14">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Neden sitede klinik adı yok?</h2>
                    <p className="mt-3 text-slate-700">Çünkü tarafsız kalmak istiyoruz.</p>

                    <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
                        <li>Klinik reklamı yapmıyoruz</li>
                        <li>Klinik veya hekim önermiyoruz</li>
                        <li>Hastayı belirli bir yere yönlendirmiyoruz</li>
                    </ul>

                    <div className="mt-4 text-slate-700">
                        <p>Talep hastadan gelir, klinik geri dönüş yapar.</p>
                        <p>Bu sayede karar süreci daha şeffaf ve rahat ilerler.</p>
                    </div>
                </div>
            </section>

            <section id="who" className="py-14 border-t border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Bu platform kimler için uygundur?</h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h3 className="text-lg font-semibold">Uygundur:</h3>
                            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                                <li>Diş tedavisiyle ilgili bilgi almak isteyenler</li>
                                <li>Birden fazla kliniği tek tek aramak istemeyenler</li>
                                <li>Hem fonksiyonel hem estetik çözüm arayanlar</li>
                                <li>Acele karar vermek istemeyenler</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h3 className="text-lg font-semibold">Uygun değildir:</h3>
                            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                                <li>Acil müdahale gerektiren durumlar</li>
                                <li>Klinik ismi görmeden ilerlemek istemeyenler</li>
                                <li>Sadece randevu arayanlar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold">Ön değerlendirme almak ister misin?</h2>
                        <div className="mt-3 text-slate-700 space-y-1">
                            <p>Satış baskısı yok.</p>
                            <p>Klinik önerisi yok.</p>
                            <p>Şikâyetini anlat, süreci netleştir.</p>
                        </div>

                        {selectedTopic && (
                            <p className="mt-4 text-sm text-slate-600">
                                Seçimin: <span className="font-semibold">{selectedTopic}</span>
                            </p>
                        )}

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <button
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                aria-label="Ön değerlendirme al"
                            >
                                Ön değerlendirme al
                            </button>
                            <p className="text-sm text-slate-500 flex items-center">
                                Fotoğraf yüklemek isteğe bağlıdır.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="py-14 border-t border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Sık Sorulan Sorular</h2>

                    <div className="mt-6 space-y-3">
                        {[
                            {
                                q: "Bu site bir diş kliniği mi?",
                                a: "Hayır. Tedavi sunmuyoruz.",
                            },
                            {
                                q: "Tedavi satıyor musunuz?",
                                a: "Hayır. Talep toplar ve iletiriz.",
                            },
                            {
                                q: "Klinik nasıl belirleniyor?",
                                a: "Biz klinik seçmeyiz. Talep, ilgili kliniklere iletilir.",
                            },
                            {
                                q: "Bilgilerim kimlerle paylaşılır?",
                                a: "Sadece talebinle ilgili kliniklerle.",
                            },
                            {
                                q: "Ön değerlendirme ücretli mi?",
                                a: "Hayır. Ücretsizdir.",
                            },
                        ].map((item) => (
                            <details
                                key={item.q}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                            >
                                <summary className="cursor-pointer list-none font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500">
                                    {item.q}
                                </summary>
                                <p className="mt-3 text-slate-700">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
