"use client";


import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function PartnersMarquee() {
    const { t } = useLanguage();
    const partners = [
        "/images/home/brand_carousel/veolia.webp",
        "/images/home/brand_carousel/daimler-truck.webp",
        "/images/home/brand_carousel/ecopilot.webp",
        "/images/home/brand_carousel/engie.webp",
        "/images/home/brand_carousel/sh-energy.webp",
        "/images/home/brand_carousel/siemens.webp",
        "/images/home/brand_carousel/bravida.webp",
        "/images/home/brand_carousel/umea-energi.webp",
        // Including others generic named ones - assuming they are valid logos
        "/images/home/brand_carousel/partner-generic-1.webp",
        "/images/home/brand_carousel/partner-generic-2.webp",
        "/images/home/brand_carousel/partner-generic-3.webp",
        "/images/home/brand_carousel/partner-generic-4.webp",
        "/images/home/brand_carousel/partner-generic-5.webp",
        "/images/home/brand_carousel/partner-generic-6.webp",
        "/images/home/brand_carousel/partner-noda.webp",
        "/images/home/brand_carousel/partner-logotype.webp",
        "/images/home/brand_carousel/partner-generic-7.webp"
    ];

    return (
        <section className="py-24 bg-[var(--noda-bg-surface)] border-y border-[var(--noda-border-color)] overflow-hidden">
            <div className="container mb-12">
                <p className="text-label text-[var(--noda-text-muted)] text-center uppercase tracking-widest">
                    {t("stats.trustedBy")}
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* First loop */}
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
                    {partners.map((src, i) => (
                        <div key={i} className="relative h-12 w-40 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 dark:hover:grayscale dark:hover:opacity-100 transition-all duration-500">
                            <Image
                                src={src}
                                alt="Partner Logo"
                                fill
                                className="object-contain dark:brightness-0 dark:invert"
                            />
                        </div>
                    ))}
                </div>
                {/* Second loop (clone for infinite scroll) */}
                <div className="animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8 absolute top-0">
                    {partners.map((src, i) => (
                        <div key={`clone-${i}`} className="relative h-12 w-40 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 dark:hover:grayscale dark:hover:opacity-100 transition-all duration-500">
                            <Image
                                src={src}
                                alt="Partner Logo"
                                fill
                                className="object-contain dark:brightness-0 dark:invert"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Add global styles for marquee animation if not already present */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee2 25s linear infinite;
                }
                .group:hover .animate-marquee,
                .group:hover .animate-marquee2 {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
