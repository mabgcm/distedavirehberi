type PageProps = {
    params?: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
    await params;
    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-brand-secondary">
            <h1 className="text-3xl sm:text-4xl font-bold">Klinik Yorumlari</h1>
            <p className="text-gray-700 mt-3">
                Klinik yorumlari ve puanlari yayinlanmamaktadir. Talep iletimi, uygun kliniklerle sinirli olarak yapılir.
            </p>
        </main>
    );
}
