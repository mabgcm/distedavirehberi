import Link from "next/link";

export const metadata = {
  title: "Terimler | Diş Tedavi Rehberi",
  description: "Sık gecen diş hekimligi terimleri için kısa aciklamalar.",
};

const terms: Record<string, { term: string; meaning: string }[]> = {
  A: [
    { term: "Abutment", meaning: "Implanti ustteki kaplama veya kopruye baglayan parca." },
    { term: "All-on-4", meaning: "Dort implantla desteklenen tam çene sabit protez." },
    { term: "All-on-6", meaning: "Alti implantla desteklenen tam çene sabit protez." },
  ],
  B: [
    { term: "Bone graft", meaning: "Kemigi desteklemek için eklenen greft materyali." },
    { term: "Bridge", meaning: "Eksik disleri komsu dislere veya implanta baglayan kopru." },
    { term: "Bruxism", meaning: "Diş sikma veya gicirdatma aliskanligi." },
  ],
  C: [
    { term: "CBCT", meaning: "Diş ve kemik yapisini gösteren 3D görüntüleme." },
    { term: "Crown", meaning: "Dışı saran ve koruyan kaplama (kron)." },
    { term: "Framework", meaning: "Tam çene protezin altyapi yapisi." },
    { term: "Composite", meaning: "Diş renginde dolgu materyali." },
  ],
  F: [
    { term: "Full-arch bridge", meaning: "Tum ceneyi kapsayan sabit kopru protez." },
  ],
  E: [
    { term: "Enamel", meaning: "Disin sert diş tabakasi (mine)." },
  ],
  I: [
    { term: "IV sedation", meaning: "Damar yoluyla uygulanan sakinlestirme." },
  ],
  L: [
    { term: "Lithium disilicate", meaning: "E.max olarak bilinen estetik seramik." },
  ],
  N: [
    { term: "Night guard", meaning: "Gece plakki; diş sikmaya karsi koruyucu." },
  ],
  O: [
    { term: "OPG", meaning: "Panoramik röntgen." },
    { term: "Osseointegration", meaning: "Kemigin implant yuzeyine kaynamasi." },
    { term: "Overdenture", meaning: "İmplant ustu hareketli protez." },
  ],
  P: [
    { term: "Porcelain", meaning: "Porselen seramik materyal." },
    { term: "Provisional", meaning: "Geçici diş veya protez." },
    { term: "Porcelain-fused-to-metal (PFM)", meaning: "Metal destekli porselen kaplama." },
    { term: "Peri-implantitis", meaning: "İmplant cevresinde iltihap ve kemik kaybi." },
  ],
  S: [
    { term: "Sedation", meaning: "Sakinlestirme islemi." },
    { term: "Sinus lift", meaning: "Üst arka bolgeye kemik ekleme islemi." },
  ],
  T: [
    { term: "Titanium", meaning: "Implantlarda kullanılan biyouyumlu metal." },
  ],
  V: [
    { term: "Veneer", meaning: "On yuzde ince kaplama." },
  ],
  Z: [
    { term: "Zirconia", meaning: "Zirkonya seramik." },
  ],
};

export default function TerminologyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-10">
      <header className="space-y-3">
        <p className="uppercase tracking-[0.18em] text-xs md:text-sm text-[#1b76d1] font-semibold">
          Terimler
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#14233d]">Kısa Diş Sozlugu</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Harfe tiklayarak ilgili bolume atlayabilirsiniz.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {Object.keys(terms).sort().map((letter) => (
          <Link
            key={letter}
            href={`#${letter}`}
            className="inline-flex items-center justify-center rounded-full border border-[#1b76d1]/30 px-3 py-1 text-sm font-semibold text-[#1b76d1] hover:bg-[#e9f4ff] transition"
          >
            {letter}
          </Link>
        ))}
      </div>

      <div className="space-y-8">
        {Object.keys(terms).sort().map((letter) => (
          <section key={letter} id={letter} className="space-y-3">
            <h2 className="text-2xl font-bold text-[#14233d]">{letter}</h2>
            <ul className="space-y-2 text-gray-700">
              {terms[letter].map((item) => (
                <li key={item.term}>
                  <span className="font-semibold text-[#1b2a57]">{item.term}:</span>{" "}
                  <span>{item.meaning}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
