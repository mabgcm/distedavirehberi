import Link from "next/link";

export default function HomePage() {
    const primaryButtonClass =
        "inline-flex items-center justify-center rounded-full bg-[#21CDC0] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1bb5a9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21CDC0]";
    const primaryButtonSmClass =
        "inline-flex items-center justify-center rounded-full bg-[#21CDC0] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1bb5a9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21CDC0]";

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <section id="hero" className="pt-14 pb-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid gap-10 md:grid-cols-2 items-center">
                        <div>
                            <p className="text-sm font-semibold tracking-wide text-slate-500">
                                TÜRKIYE'NIN İLK
                            </p>
                            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                Diş Tedavileri Rehberi
                            </h1>
                            <p className="mt-4 text-lg text-slate-700">
                                Diş kliniği aramanıza gerek yok!
                            </p>
                            <p className="text-lg text-slate-700">
                                Şikâyetinizi anlatın, tedavi seçenekleri hakkında ön bilgi alın.
                            </p>

                            <div className="mt-6 space-y-2 text-slate-700">
                                <p>Diş probleminizi bizimle paylaşın.</p>
                                <p>Talebinizi, ilgili bağımsız kliniklere iletelim.</p>
                                <p>Klinikler sizinle iletişime geçsin.</p>
                            </div>

                            <p className="mt-4 text-xs text-slate-500">
                                Klinik veya hekim önermiyoruz. Tedavi uygulamıyoruz.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/start"
                                    className={primaryButtonClass}
                                    aria-label="Ön değerlendirme al"
                                >
                                    Ön değerlendirme al
                                </Link>
                                <a
                                    href="/treatments"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-white"
                                >
                                    Tedavileri incele
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl bg-white p-0">
                                <img
                                    src="/images/hero.jpg"
                                    alt="Diş sağlığı bilgilendirme"
                                    className="w-full rounded-xl"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="treatments" className="py-14">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Hangi konuda bilgi almak istiyorsunuz?</h2>
                    <p className="mt-3 text-slate-700">
                        Diş tedavileri hakkında temel bilgileri inceleyebilir veya doğrudan ön değerlendirme alabilirsiniz.
                    </p>

                    <div className="mt-6 grid gap-6 lg:grid-cols-2 items-center">
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {[
                                { label: "İmplant", href: "/treatments/dental-implants" },
                                { label: "Kaplama (Kron)", href: "/treatments/dental-crowns" },
                                { label: "Lamina / Veneer", href: "/treatments/veneers" },
                                { label: "Diş Eti Tedavileri", href: "/treatments" },
                                { label: "All-on-4 / All-on-6", href: "/treatments/allon4" },
                                { label: "Ortodonti (Tel / Şeffaf Plak)", href: "/treatments" },
                            ].map((treatment) => (
                                <Link
                                    key={treatment.href}
                                    href={treatment.href}
                                    className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:border-slate-400 hover:bg-slate-50"
                                >
                                    {treatment.label}
                                </Link>
                            ))}
                        </div>
                        <div className="rounded-2xl bg-white p-0">
                            <img
                                src="/images/treatment.jpg"
                                alt="Dis tedavileri"
                                className="w-full rounded-xl"
                            />
                        </div>
                    </div>


                </div>
            </section>

            <section id="how" className="py-14">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold">Süreç Nasıl çalışır?</h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="text-sm text-slate-500">Adım 1</div>
                            <h3 className="mt-2 text-lg font-semibold">1. Talebinizi oluşturun</h3>
                            <p className="mt-2 text-slate-700">
                                Şikâyetinizi seçin, varsa dişlerinizin fotoğrafı veya diş röntgeni yükleyin.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="text-sm text-slate-500">Adım 2</div>
                            <h3 className="mt-2 text-lg font-semibold">2. Talebiniz iletilir</h3>
                            <p className="mt-2 text-slate-700">
                                Bilgileriniz, ilgili bağımsız kliniklere yönlendirilir.
                            </p>
                            <p className="text-slate-700">Klinik isimleri sitede yer almaz.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="text-sm text-slate-500">Adım 3</div>
                            <h3 className="mt-2 text-lg font-semibold">
                                3. Klinikler sizinle iletişime geçer
                            </h3>
                            <p className="mt-2 text-slate-700">
                                Uygunluk, süreç ve maliyetle ilgili detayları doğrudan klinikten öğrenirsiniz.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <img
                            src="images/smile.jpg"
                            alt="Süreç adımlarını anlatan görsel yer tutucu"
                            className="w-full rounded-2xl"
                        />
                        <img
                            src="images/clinic.jpg"
                            alt="İletişim ve değerlendirme sürecini anlatan görsel yer tutucu"
                            className="w-full rounded-2xl"
                        />
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
                    <img
                        src="images/faktors.jpg"
                        alt="Fiyatı etkileyen faktörleri anlatan görsel yer tutucu"
                        className="mt-6 w-full rounded-2xl"
                    />

                    <p className="mt-4 text-slate-700">
                        Bu faktörleri anlamak, doğru karar vermenize yardımcı olur.
                    </p>
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
                        <h2 className="text-2xl font-semibold">Ön değerlendirme almak ister misiniz?</h2>
                        <div className="mt-3 text-slate-700 space-y-1">
                            <p>Satış baskısı yok.</p>
                            <p>Klinik önerisi yok.</p>
                            <p>Şikâyetinizi anlatın, süreci netleştirin.</p>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/start"
                                className={primaryButtonClass}
                                aria-label="Ön değerlendirme al"
                            >
                                Ön değerlendirme al
                            </Link>
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
                                a: "Hayır. Bu site bir diş kliniği değildir ve sağlık hizmeti sunmaz. Amacımız, diş tedavisiyle ilgili şikâyeti olan kişilerin süreci daha iyi anlamasına yardımcı olmak ve taleplerini ilgili kliniklere iletmektir. Tedavi, muayene ve karar süreci tamamen hasta ile hekim arasında gerçekleşir.",
                            },
                            {
                                q: "Tedavi satıyor musunuz?",
                                a: "Hayır. Biz tedavi satışı yapmayız ve tedavi planı sunmayız. Platformumuz, yalnızca ön bilgi ve yönlendirme amacıyla çalışır. Tedaviye dair tüm detaylar, kliniklerin kendi değerlendirmesi ve hasta ile doğrudan iletişimi sonucunda netleşir.",
                            },
                            {
                                q: "Klinik nasıl belirleniyor?",
                                a: "Biz klinik seçimi yapmayız ve belirli bir kliniği önermeyiz. Paylaştığınız talep, şikâyetiniz ve ihtiyaçlarınıza uygun olabilecek bağımsız kliniklere iletilir. Klinikler, uygunluk durumuna göre sizinle doğrudan iletişime geçer.",
                            },
                            {
                                q: "Bilgilerim kimlerle paylaşılır?",
                                a: "Paylaştığınız bilgiler, yalnızca talebinizle ilgili kliniklere iletilir. Kişisel verileriniz üçüncü kişilerle paylaşılmaz ve farklı amaçlarla kullanılmaz. Süreç, gizlilik ve KVKK kurallarına uygun şekilde yürütülür.",
                            },
                            {
                                q: "Ön değerlendirme ücretli mi?",
                                a: "Hayır. Ön değerlendirme tamamen ücretsizdir. Bu aşamada herhangi bir ödeme yapmanız gerekmez. Amaç, tedavi seçenekleri ve süreç hakkında genel bir çerçeve oluşturmanızdır. Olası maliyetler ve detaylar, kliniklerle yapacağınız görüşmelerde netleşir.",
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
