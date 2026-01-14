import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "İstanbul | Diş Tedavi Rehberi",
  description: "İstanbul için şehir seçimi, süreç ve randevu notlari.",
};

export default function IstanbulPage() {
  return (
    <main className="bg-gray-50 text-brand-secondary">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Şehirler</p>
            <h1 className="text-3xl sm:text-4xl font-bold">İstanbul</h1>
            <p className="text-gray-700">
              Randevu bulunurlugu ve ulaşım seçenekleri nedeniyle sık tercih edilir.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/upload"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Ön Değerlendirme Al
              </Link>
              <Link
                href="/guides/travel"
                className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
              >
                Süreç Rehberi
              </Link>
            </div>
          </div>
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/istanbul-old-town.jpg"
              alt="İstanbul"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-14">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Şehir Özeti</h2>
          <p className="text-gray-700 leading-relaxed">
            İstanbul, genis klinik agi ve ulaşım secenekleriyle one cikar. Randevu planlamasi için zaman ayirmak faydalidir.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Neden İstanbul?</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Klinik ve laboratuvar cesitliligi</li>
              <li>Ulaşım seçenekleri</li>
              <li>Randevu bulunurlugu</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Dikkat Edilecekler</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Ulaşım suresi ve trafik</li>
              <li>Kontrol randevulari</li>
              <li>Klinikten yazılı plan isteyin</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Fiyatı Neler Belirler?</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Vaka zorlugu</li>
              <li>Kullanılan materyal</li>
              <li>Ek islemler</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">Sık Sorulanlar</h2>
          <div className="space-y-3 text-gray-700 text-sm">
            <div>
              <p className="font-semibold text-brand-secondary">Randevu nasıl planlanir?</p>
              <p>Talebinizi iletin; klinik size uygun zamanlari paylasir.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Klinikler listeleniyor mu?</p>
              <p>Hayir. Talebiniz sadece ilgili kliniklerle paylasilir.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-secondary">Fiyat bilgisi veriyor musunuz?</p>
              <p>Net fiyat veremeyiz; faktörleri ozetleriz.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
