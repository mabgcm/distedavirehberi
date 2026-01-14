"use client";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">


            {/* Sol taraf: görsel */}
            <div className="flex-1 mt-1 md:mt-0 relative z-10">
                <Image
                    src="/img/slider.jpg"  // 👈 leading slash
                    alt="Gulumen hasta"
                    width={550}
                    height={520}
                />
            </div>

            {/* Sağ taraf: yazı */}
            <div className="flex-1 text-center md:text-left space-y-6 z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#2B3A55] leading-tight">
                    Sade ve Tarafsız <br /> <span className="text-[#3FB8FF]">Bilgi</span>
                    <br /> ile Net Karar
                </h1>
                <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
                    Diş Tedavi Rehberi, klinik dışı ve tarafsız bilgi sunar. <br />
                    Talebinizi uygun bağımsız kliniklerle paylasir; tani ve tedavi sunmaz.
                </p>

            </div>
        </section>
    );
}
