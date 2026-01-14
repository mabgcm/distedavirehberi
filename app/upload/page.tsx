import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import StartForm from "@/components/StartForm";

export const metadata: Metadata = {
    title: "Ön Değerlendirme | Diş Tedavi Rehberi",
    description: "Kısa talep formu ve varsa fotoğraf ile on bilgi alin; talebiniz bağımsız kliniklerle paylasilir.",
};

const steps = [
    {
        title: "On gülüş (disler kapali)",
        body: "On disleri net gösterecek şekilde, isik iyi olacak bicimde cekin.",
    },
    {
        title: "Sağ yan kapanis",
        body: "Dogal kapanisla sağ profilden net bir fotoğraf alin.",
    },
    {
        title: "Sol yan kapanis",
        body: "Sol profilden, kapanisi gösteren bir fotoğraf alin.",
    },
    {
        title: "Alt disler (yukardan)",
        body: "Agzi acip alt dislerin çiğneme yuzeyini gösterecek şekilde cekin.",
    },
    {
        title: "Üst disler (aşağıdan)",
        body: "Basi hafif geriye alarak üst dislerin çiğneme yuzeyini cekin.",
    },
];

export default function UploadPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-10 pb-14">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-3 space-y-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-brand-muted">Ön Değerlendirme</p>
                        <h1 className="text-3xl sm:text-4xl font-bold text-brand-secondary">
                            Fotoğraf Yükleyin (Varsa)
                        </h1>
                        <p className="text-lg text-gray-700">
                            Talebinizi daha iyi anlamak için varsa fotoğraf ekleyin. Talebiniz bağımsız kliniklerle paylasilir.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/start"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold shadow-sm transition"
                                style={{ backgroundColor: "#21CDC0" }}
                            >
                                Ön Değerlendirme Başlat
                            </Link>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-brand-primary text-brand-primary font-semibold hover:bg-brand-ring transition"
                            >
                                E-posta ile gonder
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden">
                            <Image
                                src="/images/dentalselfy.jpg"
                                alt="Örnek diş fotografi acilari"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                        <h2 className="text-2xl font-semibold text-brand-secondary">
                            Fotoğraflar Neden Istenir?
                        </h2>
                        <p className="text-gray-700">
                            Görsel bilgi, kliniklerin on degerlendirme yapmasini kolaylastirir.
                        </p>
                        <p className="text-gray-700">
                            Zorunlu degildir; muayenede netlesir.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                        <h2 className="text-2xl font-semibold text-brand-secondary">
                            Fotoğrafları Nasıl Gönderebilirim?
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-brand-ring bg-brand-surface p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">Form ile yükle</h3>
                                <p className="text-gray-700 text-sm">Asagidaki formdan birden fazla dosya ekleyin.</p>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">E-posta ile gonder</h3>
                                <p className="text-gray-700 text-sm">Dosyalarinizi <a className="text-brand-primary underline" href="mailto:dentalclinicturkiye@gmail.com">dentalclinicturkiye@gmail.com</a> adresine iletebilirsiniz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 space-y-6">
                <h2 className="text-2xl font-semibold text-brand-secondary">Evde Diş Fotoğrafı Çekimi</h2>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
                    <p className="text-gray-700">
                        Iyi isikta, titremeden ve net cekmeye calisin. Asagidaki bes aciyi alin.
                    </p>
                    <ol className="space-y-4">
                        {steps.map((step, idx) => (
                            <li key={step.title} className="flex gap-4">
                                <div className="flex-none h-10 w-10 rounded-full bg-brand-ring text-brand-secondary font-semibold grid place-items-center">
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

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-brand-secondary">Video: Fotoğraf Cekimi</h2>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                    <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ paddingBottom: "56.25%" }}>
                        <video
                            className="absolute inset-0 h-full w-full"
                            controls
                            preload="metadata"
                            poster="/images/dentalselfy.jpg"
                            controlsList="nodownload"
                        >
                            <source src="/images/howtophoto.mp4#t=5.3" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-brand-secondary">Panoramik Röntgen (Varsa)</h2>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-2">
                    <p className="text-gray-700">
                        Varsa son rontgeninizi ekleyebilirsiniz. Bu, kliniğin on bilgi almasina yardimci olur.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-brand-secondary">Sonraki Adim Nedir?</h2>
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-2">
                        <h3 className="text-lg font-semibold">Talep kontrolü</h3>
                        <p className="text-gray-700 text-sm">Talebiniz uygun kliniklerle paylasilir.</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-2">
                        <h3 className="text-lg font-semibold">Ön bilgi</h3>
                        <p className="text-gray-700 text-sm">Klinik size süreç ve uygunluk hakkında bilgi verir.</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-2">
                        <h3 className="text-lg font-semibold">Görüşme</h3>
                        <p className="text-gray-700 text-sm">Detaylar muayenede netlesir; karar size aittir.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-brand-secondary">Talep Formu</h2>
                        <p className="text-gray-700 text-sm">
                            Kısa bilgiler ve varsa dosyalarinizi ekleyin.
                        </p>
                    </div>
                    <StartForm />
                </div>
            </section>

            <section className="bg-brand-surface border-t border-brand-ring py-10">
                <div className="max-w-6xl mx-auto px-4 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold text-brand-secondary">Talebinizi gonderin</h2>
                            <p className="text-gray-700 text-sm">
                                Formu doldurun ya da e-posta iletin. Talebiniz uygun kliniklere aktarilir.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/start"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-brand-primary text-dark font-semibold hover:bg-brand-primary-dark transition"
                            >
                                Formu Başlat
                            </Link>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-brand-primary text-brand-primary font-semibold hover:bg-brand-ring transition"
                            >
                                E-posta Gonder
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
