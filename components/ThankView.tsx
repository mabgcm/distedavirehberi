// components/ThankView.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankView() {
    const router = useRouter();
    const [from, setFrom] = useState<string>("/");
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        setFrom(sp.get("from") || "/");
    }, []);

    useEffect(() => {
        const tick = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
        const go = setTimeout(() => router.replace(from), 5000);
        return () => {
            clearInterval(tick);
            clearTimeout(go);
        };
    }, [from, router]);

    return (
        <main className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-[#2B3A55]">Tesekkurler!</h1>
            <p className="text-gray-700 mt-3">
                Talebiniz alinmistir. Uygun bağımsız kliniklerle paylasilacaktir.
            </p>

            <p className="text-gray-500 mt-6">
                <strong>{seconds}</strong> saniye içinde onceki sayfaya yonlendiriliyorsunuz…
            </p>
            <p className="mt-4">
                <Link href={from} className="text-[#3FB8FF] hover:underline">Simdi geri don</Link>
            </p>
        </main>
    );
}
