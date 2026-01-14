"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CaseIntakeForm() {
    const router = useRouter();
    const [from, setFrom] = useState<string>("/guides/legal");
    const [fileNames, setFileNames] = useState("Dosya secilmedi");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        setFrom(sp.get("from") || "/guides/legal");
    }, []);

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
        const description = (form.elements.namedItem("issue_description") as HTMLTextAreaElement)?.value.trim();
        const treatment = (form.elements.namedItem("requested_treatment") as HTMLInputElement)?.value.trim();

        if (!name) return setError("Adinizi girin.");
        if (!phone) return setError("Telefon numaranizi girin.");
        if (!treatment) return setError("Talep turunu girin.");
        if (!description) return setError("Talebinizi kisaca yazin.");

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
        <form
            action="/api/contact"
            method="post"
            encType="multipart/form-data"
            noValidate
            onSubmit={onSubmit}
            className="grid gap-4 md:grid-cols-2"
        >
            <input type="hidden" name="requested_treatment" value="KVKK Talebi" />
            <input type="hidden" name="from_page" value="kvkk" />

            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Ad Soyad *</span>
                <input
                    name="name"
                    required
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">E-posta</span>
                <input
                    name="email"
                    type="email"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Şehir</span>
                <input
                    name="location"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Telefon *</span>
                <input
                    name="phone"
                    required
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <div className="md:col-span-2 space-y-2">
                <span className="text-sm font-semibold">Talep tipi</span>
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-700">
                    <label className="inline-flex items-center gap-2">
                        <input type="radio" name="our_patient" value="info" className="h-4 w-4 text-teal-600" />
                        <span>Bilgi talebi</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                        <input type="radio" name="our_patient" value="kvkk" className="h-4 w-4 text-teal-600" defaultChecked />
                        <span>KVKK talebi</span>
                    </label>
                </div>
            </div>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Klinik adi (opsiyonel)</span>
                <input
                    name="clinic_name"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Klinik sehri (opsiyonel)</span>
                <input
                    name="clinic_city"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Islem tarihi (opsiyonel)</span>
                <input
                    name="treatment_date"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    placeholder="or. Mart 2024"
                />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-sm font-semibold">Talep aciklamasi *</span>
                <textarea
                    name="issue_description"
                    rows={4}
                    required
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-sm font-semibold">Dosya yükle (opsiyonel)</span>
                <input
                    type="file"
                    name="files"
                    multiple
                    onChange={onFiles}
                    className="rounded-xl border border-dashed border-brand-primary bg-brand-surface px-3 py-3 text-sm text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    aria-label="Dosya yükle"
                />
                <span className="text-xs text-gray-600">{fileNames}</span>
                <span className="text-xs text-gray-600">Varsa ilgili belgeleri ekleyebilirsiniz.</span>
            </label>
            {error && <div className="md:col-span-2 text-sm text-red-600">{error}</div>}
            <div className="md:col-span-2 flex flex-wrap gap-3">
                <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition disabled:opacity-60"
                >
                    {sending ? "Gonderiliyor..." : "Talebi Gonder"}
                </button>
                <a
                    href="mailto:dentalclinicturkiye@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                >
                    Genel Soru
                </a>
            </div>
        </form>
    );
}
