"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { PartnersMarquee } from "@/components/noda/PartnersMarquee";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function ProductPage() {
    const { t } = useLanguage();
    const pageRef = useRef<HTMLDivElement>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Building Units Icons (static)
    const buildingUnitIcons = useMemo(() => [
        (
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        (
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        (
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        (
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    ], []);

    // Merge translations with icons
    const buildingUnitsData = (t("productPage.buildingUnits.units") as any[]) || [];
    const buildingUnits = buildingUnitsData.map((unit: any, i: number) => ({
        ...unit,
        icon: buildingUnitIcons[i]
    }));

    return (
        <div ref={pageRef} className="bg-[var(--noda-bg-primary)]">
            <Navbar />

            {/* 1. Hero */}
            <section className="relative min-h-[60vh] flex flex-col justify-start pt-24 md:pt-32 pb-24 md:pb-32 bg-[var(--noda-bg-primary)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--noda-bg-primary)]/90 via-[var(--noda-bg-primary)]/60 to-transparent" />
                {/* Animated Grid Background */}
                <div className="absolute inset-0 grid-pattern opacity-[0.15] z-0" />

                <div className="container relative z-10 px-6">
                    <div className="max-w-4xl mr-auto text-left">
                        <ScrollReveal>
                            <p className="text-sm font-medium text-[var(--noda-burgundy)] mb-6 tracking-wide uppercase">{t("productPage.hero.label")}</p>
                            <h1 className="text-6xl md:text-8xl font-medium text-[var(--noda-text-primary)] mb-8 leading-[0.95] tracking-tight">
                                {t("productPage.hero.titlePrefix")}<span className="text-[var(--noda-burgundy)]">{t("productPage.hero.titleHighlight")}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[var(--noda-text-muted)] max-w-xl mt-10 leading-relaxed font-light">
                                {t("productPage.hero.desc")}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 2. Impact as a Service */}
            <section className="py-32">
                <div className="container">
                    <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div>
                            <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("productPage.impactService.label")}</span>
                            <h2 className="text-h1 text-[var(--noda-text-primary)] mb-6">{t("productPage.impactService.title")}</h2>
                            <p className="text-body-lg text-[var(--noda-text-muted)] mb-6">
                                {t("productPage.impactService.desc1")}
                            </p>
                            <p className="text-body text-[var(--noda-text-muted)]">
                                {t("productPage.impactService.desc2")}
                            </p>
                        </div>
                        <div className="relative aspect-auto min-h-[300px] md:aspect-[4/3] bg-[var(--noda-bg-surface)] border border-[var(--noda-border-color)] p-8 md:p-12 flex flex-col items-center justify-center gap-8 md:gap-12 group hover:border-[var(--noda-burgundy)]/30 transition-colors duration-500 overflow-hidden rounded-xl">
                            {/* Background Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--noda-burgundy)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Stamps Layout */}
                            <div className="relative z-10 text-center w-full">
                                <p className="text-sm font-medium text-[var(--noda-burgundy)] uppercase tracking-widest mb-8 md:mb-12">{t("productPage.impactService.stamp") || "Certified Excellence"}</p>
                                <div className="flex flex-row items-center justify-center gap-6 md:gap-16 w-full px-2">
                                    <div className="relative w-32 h-32 md:w-48 md:h-48 transition-transform duration-500 transform group-hover:scale-105 drop-shadow-2xl">
                                        <Image
                                            src="/images/product/Achilles Network Stamp Member.jpg"
                                            alt={t("productPage.impactService.stamps.achilles")}
                                            fill
                                            sizes="(max-width: 768px) 128px, 192px"
                                            className="object-contain rounded-xl"
                                        />
                                    </div>
                                    <div className="relative w-32 h-32 md:w-48 md:h-48 transition-transform duration-500 transform group-hover:scale-105 drop-shadow-2xl">
                                        <Image
                                            src="/images/product/AC0815 UNCE Stamp SILVER PLUS CMYK.jpg"
                                            alt={t("productPage.impactService.stamps.unce")}
                                            fill
                                            sizes="(max-width: 768px) 128px, 192px"
                                            className="object-contain rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. The Essence */}
            <section className="py-32 bg-[var(--noda-bg-primary)] overflow-hidden">
                <div className="container">
                    <ScrollReveal className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-last lg:order-first relative">
                            {/* Illustration Container */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--noda-border-color)] bg-black/5 dark:bg-white/5">
                                <Image
                                    src="/images/product/structure-illustration.webp"
                                    alt="Noda Essence Illustration"
                                    fill
                                    className="object-contain p-2 md:p-6"
                                    priority
                                />
                            </div>
                            <p className="text-center text-sm text-[var(--noda-text-muted)] mt-4 italic">{t("productPage.essence.caption")}</p>
                        </div>

                        <div className="max-w-xl">
                            <span className="text-label text-[var(--noda-burgundy)] mb-6 block">{t("productPage.essence.label") || "The Essence"}</span>
                            <h2 className="text-3xl md:text-5xl font-light text-[var(--noda-text-primary)] leading-tight mb-8">
                                "{t("productPage.essence.quote") || "Intelligence is not about collecting data. It's about knowing what to do with it before anyone else does."}"
                            </h2>
                            <p className="text-body-lg text-[var(--noda-text-muted)]">
                                {t("productPage.essence.desc") || "At Noda, we believe that the future of energy is autonomous. We strip away the complexity of thermal dynamics and replace it with elegant, self-driving efficiency. This is the essence of our engineering philosophy."}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. Building Units (Grid) */}
            <section className="py-32 bg-[var(--noda-bg-surface)]">
                <div className="container">
                    <ScrollReveal className="mb-16">
                        <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("productPage.buildingUnits.label") || "System Architecture"}</span>
                        <h2 className="text-h1 text-[var(--noda-text-primary)]">{t("productPage.buildingUnits.title") || "Building Units"}</h2>
                    </ScrollReveal>

                    <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--noda-border-color)] border border-[var(--noda-border-color)]" stagger={0.1}>
                        {buildingUnits.map((unit: any, i: number) => (
                            <div key={i} className="bg-[var(--noda-bg-surface)] p-10 hover:bg-[var(--noda-bg-secondary)] transition-colors duration-300 group">
                                <div className="w-12 h-12 text-[var(--noda-burgundy)] mb-8 group-hover:scale-110 transition-transform duration-300">
                                    {unit.icon}
                                </div>
                                <h3 className="text-xl font-medium text-[var(--noda-text-primary)] mb-4">{unit.title}</h3>
                                <p className="text-[var(--noda-text-muted)] text-sm leading-relaxed">
                                    {unit.desc}
                                </p>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </section>

            {/* 6. Vast Value Realization */}
            <section className="py-32 bg-[var(--noda-bg-secondary)] border-t border-[var(--noda-border-color)]">
                <div className="container">
                    <ScrollReveal className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("productPage.vastValue.label") || "Value Proposition"}</span>
                            <h2 className="text-h1 text-[var(--noda-text-primary)] mb-8">{t("productPage.vastValue.title") || "Vast Value Realization"}</h2>
                            <div className="space-y-8">
                                {(t("productPage.vastValue.items") || []).map((item: any, i: number) => (
                                    <div key={i} className="border-l-2 border-[var(--noda-burgundy)] pl-6">
                                        <h4 className="text-lg font-medium text-[var(--noda-text-primary)] mb-1">{item.k}</h4>
                                        <p className="text-[var(--noda-text-muted)]">{item.v}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="relative aspect-[16/10] bg-[var(--noda-bg-surface)] border border-[var(--noda-border-color)] rounded-sm overflow-hidden shadow-none cursor-zoom-in group"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                                    <svg className="w-6 h-6 text-[var(--noda-burgundy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                            <Image
                                src="/images/product/Snip 2025-04-06 22.47.14.png"
                                alt={t("productPage.vastValue.title")}
                                fill
                                className="object-contain bg-white"
                            />
                        </div>

                        {/* Lightbox Modal */}
                        {isLightboxOpen && (
                            <div
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
                                onClick={() => setIsLightboxOpen(false)}
                            >
                                <button
                                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                                    onClick={() => setIsLightboxOpen(false)}
                                >
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div
                                    className="relative w-full max-w-7xl h-auto max-h-[90vh] aspect-[16/9] rounded-sm overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src="/images/product/Snip 2025-04-06 22.47.14.png"
                                        alt={t("productPage.vastValue.title")}
                                        fill
                                        className="object-contain"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        )}
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}
