import BlogCard, { type BlogCardProps } from "./BlogCard";

const posts: BlogCardProps[] = [
    {
        title: "Uyku Kalitesi ve Agiz Sagligi",
        description: "Uyku, diş eti ve genel agiz sagligini nasıl etkiler? Kısa özet ve pratik ipuclari.",
        href: "/blog/how-sleep-influences-oral-dental-health",
        date: "08 Ara 2025",
        tag: "Sağlık",
        image: "/images/sleep.jpeg",
    },
    {
        title: "Abartili Vaadlere Dikkat",
        description: "Gercek dışı vaatleri nasıl ayirt edersiniz? Teklifleri kontrol ederken dikkat edilmesi gerekenler.",
        href: "/blog/free-hotel-cheap-dental-scam-guide",
        date: "20 Kas 2025",
        tag: "Guven",
        image: "/images/scam.png",
    },
    {
        title: "Tedavi Sürecini Planlamak",
        description: "Randevu ve iyileşme planini nasıl netlestirirsiniz? Kısa rehber.",
        href: "/guides/travel",
        date: "16 Eyl 2025",
        tag: "Süreç",
        image: "/images/istanbul-travel.jpeg",
    }
];

export default function BlogSection() {
    return (
        <section className="bg-brand-surface text-brand-secondary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
                <div className="space-y-2 text-center md:text-left">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Kısa Bilgiler</p>
                    <h2 className="text-3xl sm:text-4xl font-bold">Hasta Bilgi Merkezi</h2>
                    <p className="text-gray-700">Süreç, uygunluk ve doktorla görüşmede sorulacaklar için kısa notlar.</p>
                </div>
                <div className="space-y-6">
                    {posts.map((post) => (
                        <BlogCard key={post.title} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
