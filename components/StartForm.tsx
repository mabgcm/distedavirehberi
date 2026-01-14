"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StartPage() {
    const router = useRouter();

    // read ?from= only on client to avoid SSR constraints
    const [from, setFrom] = useState<string>("/");
    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        setFrom(sp.get("from") || "/");
    }, []);

    const [fileNames, setFileNames] = useState("Dosya secilmedi");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showMedical, setShowMedical] = useState(false);
    const [showTravel, setShowTravel] = useState(false);

    const onFiles: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const arr = e.target.files ? Array.from(e.target.files) : [];
        setFileNames(arr.length ? arr.map((f) => f.name).join(", ") : "Dosya secilmedi");
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setError(null);

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
        const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim();
        const treatment = (form.elements.namedItem("requested_treatment") as HTMLSelectElement)?.value.trim();

        if (!name) return setError("Adinizi girin.");
        if (!phone) return setError("Telefon numaranizi girin.");
        if (!treatment) return setError("Talep edilen tedaviyi secin.");

        setSending(true);
        try {
            const res = await fetch(form.action, { method: "POST", body: new FormData(form) });
            const data = await res.json().catch(() => ({}));
            if (res.ok && data?.ok) {
                router.push(`/thank?from=${encodeURIComponent(from)}`);
            } else {
                setError(data?.error || "Gonderilemedi. Lutfen tekrar deneyin.");
            }
        } catch (err) {
            console.error(err);
            setError("Sunucu hatasi. Lutfen daha sonra deneyin.");
        } finally {
            setSending(false);
        }
    };

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-[#2B3A55]">Ücretsiz Ön Değerlendirme Talebi</h1>
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mt-2">
                    Kısa bilgileri paylasin. Talebiniz uygun bağımsız kliniklerle iletilir.
                </p>
            </header>

            <section className="bg-white border border-gray-200/80 shadow-sm rounded-2xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-[#3FB8FF] via-[#21CDC0] to-[#3FB8FF]" />

                <form
                    action="/api/contact"
                    method="post"
                    encType="multipart/form-data"
                    noValidate
                    onSubmit={onSubmit}
                    className="p-6 md:p-8 space-y-10"
                >
                    {/* PERSONAL */}
                    <div>
                        <div className="mb-3">
                            <h2 className="text-xl font-semibold text-[#2B3A55]">
                                Temel Bilgiler <span className="text-red-500">*</span>
                            </h2>
                            <p className="text-sm text-gray-600">Geri donus için gerekli temel bilgiler.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Ad Soyad *</label>
                                <input id="name" name="name" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">E-posta</label>
                                <input id="email" name="email" type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefon *</label>
                                <input id="phone" name="phone" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="requested-treatment" className="text-sm font-medium text-gray-700">Talep Edilen Tedavi *</label>
                                <select id="requested-treatment" name="requested_treatment" required defaultValue="" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]">
                                    <option value="" disabled>Secin…</option>
                                    <option>İmplant</option>
                                    <option>All-on-4 / All-on-6</option>
                                    <option>Lamina / Veneer</option>
                                    <option>Kaplama (Kron)</option>
                                    <option>Kanal Tedavisi</option>
                                    <option>Diş Eti Tedavisi</option>
                                    <option>Ortodonti</option>
                                    <option>Diğer</option>
                                </select>
                            </div>
                        </div>

                        {/* Files */}
                        <div className="mt-4">
                            <label className="text-sm font-medium text-gray-700">Dosyalar (Fotoğraf, Röntgen, PDF)</label>
                            <div className="mt-2 flex items-center gap-3">
                                <label htmlFor="files" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15V7a5 5 0 0 0-10 0v10a3 3 0 0 0 6 0V8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Dosya Sec</span>
                                </label>
                                <input id="files" name="files" type="file" multiple accept="image/*,.pdf,.jpg,.jpeg,.png,.webp,.heic" className="hidden" onChange={onFiles} />
                                <span className="text-sm text-gray-500">{fileNames}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <button
                                type="submit"
                                disabled={sending}
                                className="inline-flex items-center justify-center rounded-full bg-[#21CDC0] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#1BB5A9] transition disabled:opacity-60"
                            >
                                {sending ? "Gonderiliyor..." : "Talebi Gonder"}
                            </button>
                            {!showMedical && (
                                <button
                                    type="button"
                                    onClick={() => setShowMedical(true)}
                                    className="inline-flex items-center justify-center rounded-full border border-[#1b76d1]/40 px-5 py-2.5 text-sm font-semibold text-[#1b76d1] hover:bg-[#e9f4ff] transition"
                                >
                                    Sağlık Bilgisi Ekle
                                </button>
                            )}
                        </div>
                    </div>

                    {/* MEDICAL */}
                    {showMedical && (
                        <div>
                            <div className="mb-3">
                                <h2 className="text-xl font-semibold text-[#2B3A55]">Opsiyonel Sağlık Bilgileri</h2>
                                <p className="text-sm text-gray-600">Daha fazla bilgi, kliniğin degerlendirmesine destek olur.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2 flex flex-col gap-1">
                                    <label htmlFor="chronic" className="text-sm font-medium text-gray-700">1) Kronik hastaliklar / ilaclar / HbA1c</label>
                                    <textarea id="chronic" name="chronic" rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                    <small className="text-xs text-gray-500">İmplant için hedef degerler hekimle belirlenir.</small>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="oral-issues" className="text-sm font-medium text-gray-700">2) Agri / kanama / diş eti sorunu</label>
                                    <textarea id="oral-issues" name="oral_issues" rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="mobile-teeth" className="text-sm font-medium text-gray-700">3) Sallanan diş var mi? Hangileri?</label>
                                    <textarea id="mobile-teeth" name="mobile_teeth" rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="missing-duration" className="text-sm font-medium text-gray-700">4) Eksik diş suresi</label>
                                    <input id="missing-duration" name="missing_duration" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="smoking" className="text-sm font-medium text-gray-700">5) Sigara kullanımı</label>
                                    <input id="smoking" name="smoking" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-1">
                                    <label htmlFor="medications" className="text-sm font-medium text-gray-700">Gunluk ilaclar ve doz</label>
                                    <textarea id="medications" name="medications" rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-1">
                                    <label htmlFor="medical-conditions" className="text-sm font-medium text-gray-700">Sağlık durumlari</label>
                                    <textarea id="medical-conditions" name="medical_conditions" rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-1">
                                    <label htmlFor="allergies" className="text-sm font-medium text-gray-700">Alerjiler</label>
                                    <textarea id="allergies" name="allergies" rows={2} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="last-gp" className="text-sm font-medium text-gray-700">Son doktor gorusmesi</label>
                                    <input id="last-gp" name="last_gp" type="date" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="last-blood-test" className="text-sm font-medium text-gray-700">Son kan testi</label>
                                    <input id="last-blood-test" name="last_blood_test" type="date" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-1">
                                    <label htmlFor="surgeries" className="text-sm font-medium text-gray-700">Geçmiş ameliyatlar</label>
                                    <textarea id="surgeries" name="surgeries" rows={2} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-1">
                                    <label htmlFor="insurance" className="text-sm font-medium text-gray-700">Sigorta</label>
                                    <textarea id="insurance" name="insurance" rows={2} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="inline-flex items-center justify-center rounded-full bg-[#21CDC0] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#1BB5A9] transition disabled:opacity-60"
                                >
                                    {sending ? "Gonderiliyor..." : "Talebi Gonder"}
                                </button>
                                {!showTravel && (
                                    <button
                                        type="button"
                                        onClick={() => setShowTravel(true)}
                                        className="inline-flex items-center justify-center rounded-full border border-[#1b76d1]/40 px-5 py-2.5 text-sm font-semibold text-[#1b76d1] hover:bg-[#e9f4ff] transition"
                                    >
                                        Diğer Bilgiler Ekle
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* TRAVEL */}
                    {showTravel && (
                        <div>
                            <div className="mb-3">
                                <h2 className="text-xl font-semibold text-[#2B3A55]">Opsiyonel Tercih Bilgileri</h2>
                                <p className="text-sm text-gray-600">Tarih ve konum tercihleriniz varsa yazabilirsiniz.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="md:col-span-3 flex flex-col gap-1">
                                    <label htmlFor="travel-dates" className="text-sm font-medium text-gray-700">Dusenulen tarihler</label>
                                    <input id="travel-dates" name="travel_dates" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="city" className="text-sm font-medium text-gray-700">Bulundugunuz şehir</label>
                                    <input id="city" name="city" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="postcode" className="text-sm font-medium text-gray-700">Posta kodu</label>
                                    <input id="postcode" name="postcode" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="departure-airport" className="text-sm font-medium text-gray-700">Tercih edilen ulaşım</label>
                                    <input id="departure-airport" name="departure_airport" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="inline-flex items-center justify-center rounded-full bg-[#21CDC0] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#1BB5A9] transition disabled:opacity-60"
                                >
                                    {sending ? "Gonderiliyor..." : "Talebi Gonder"}
                                </button>
                            </div>
                        </div>
                    )}
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                </form>
            </section>
        </main>
    );
}
