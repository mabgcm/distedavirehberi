"use client";

import { useEffect, useState } from "react";
import { type Clinic } from "@/types/review";

type PageProps = {
    params?: Promise<{ slug: string }>;
};

type MinimalClinic = Pick<Clinic, "id" | "name" | "slug" | "city" | "country">;

const fetchClinicBySlug = async (slug: string): Promise<MinimalClinic> => {
    const humanName = slug
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

    // Placeholder fetch; replace with real data source as needed.
    return {
        id: slug,
        name: humanName || "Klinik",
        slug,
        city: "Bilinmiyor",
        country: "Bilinmiyor",
    };
};

export default function ClinicDetailPage({ params }: PageProps) {
    const [clinic, setClinic] = useState<MinimalClinic | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            const resolvedParams = params ? await params : null;
            const slug = resolvedParams?.slug;

            if (!slug) {
                setLoading(false);
                return;
            }

            setLoading(true);
            const clinicData = await fetchClinicBySlug(slug);
            if (cancelled) return;
            setClinic(clinicData);
            setLoading(false);
        };

        void load();
        return () => {
            cancelled = true;
        };
    }, [params]);

    return (
        <main className="max-w-4xl mx-auto p-4 space-y-6">
            <header className="space-y-2">
                <p className="text-sm text-gray-600">{clinic?.city}, {clinic?.country}</p>
                <h1 className="text-2xl font-bold">{clinic?.name ?? "Klinik"}</h1>
            </header>

            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Klinik Bilgisi</h2>
                {loading ? (
                    <p>Yükleniyor...</p>
                ) : (
                    <p className="text-sm text-gray-700">
                        Klinik yorumlari yayinlanmamaktadir. Talep iletimi, uygun kliniklerle sinirli olarak yapılir.
                    </p>
                )}
            </section>
        </main>
    );
}
