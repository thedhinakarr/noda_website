"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SuccessStoriesPage() {
    const { t } = useLanguage();
    const pageRef = useRef<HTMLDivElement>(null);
    const caseStudies = t("successStoriesPage.caseStudies") as any as Array<{
        title: string;
        sector: string;
        client?: string;
        challenge: string;
        solution: string;
        result: string;
        stats: string[];
    }>;

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
                        <p className="text-sm font-medium text-[var(--noda-burgundy)] mb-6 tracking-wide uppercase">{t("successStoriesPage.hero.label")}</p>
                        <h1 className="text-6xl md:text-8xl font-medium text-[var(--noda-text-primary)] mb-8 leading-[0.95] tracking-tight">
                            {t("successStoriesPage.hero.titlePrefix")} <br />
                            <span className="text-[var(--noda-burgundy)]">{t("successStoriesPage.hero.titleHighlight")}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--noda-text-muted)] max-w-xl mt-10 leading-relaxed font-light">
                            {t("successStoriesPage.hero.desc")}
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Use Cases (Case Studies Grid) */}
            <section className="py-24 bg-[var(--noda-bg-primary)]">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[var(--noda-border-color)] pb-8">
                        <div>
                            <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("successStoriesPage.headers.useCases") || "Use Cases"}</span>
                            <h2 className="text-h1 text-[var(--noda-text-primary)]">{t("successStoriesPage.headers.provenImpact") || "Proven Impact"}</h2>
                        </div>
                        <p className="text-[var(--noda-text-muted)] max-w-sm text-right mt-6 md:mt-0">
                            {t("successStoriesPage.headers.subtitle") || "Real-world results from energy networks worldwide."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, i) => (
                            <div key={i} className={`group relative bg-[var(--noda-bg-surface)] p-10 flex flex-col h-full hover:bg-[var(--noda-bg-primary)] transition-colors duration-500 ${i === 0 || i === 6 ? 'md:col-span-2' : ''}`}>

                                <div className="mb-12 flex justify-between items-start">
                                    <span className="text-xs font-mono tracking-widest uppercase text-[var(--noda-burgundy)]">
                                        {study.sector}
                                    </span>
                                    {study.client && (
                                        <span className="text-sm font-medium text-[var(--noda-text-primary)] opacity-50">
                                            {study.client}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-3xl md:text-3xl font-light text-[var(--noda-text-primary)] mb-6 leading-tight group-hover:text-[var(--noda-burgundy)] transition-colors duration-300">
                                    {study.title}
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <h4 className="text-xs uppercase text-[var(--noda-text-muted)] tracking-wider mb-2">{t("successStoriesPage.headers.challenge") || "Challenge"}</h4>
                                        <p className="text-sm text-[var(--noda-text-secondary)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            {study.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase text-[var(--noda-text-muted)] tracking-wider mb-2">{t("successStoriesPage.headers.solution") || "Solution"}</h4>
                                        <p className="text-sm text-[var(--noda-text-secondary)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            {study.solution}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="border-t border-[var(--noda-border-color)] pt-6 mb-6">
                                        <h4 className="text-xs uppercase text-[var(--noda-text-muted)] tracking-wider mb-2">{t("successStoriesPage.headers.keyResult") || "Key Result"}</h4>
                                        <p className="text-xl text-[var(--noda-text-primary)] font-medium">
                                            {study.result}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {(study.stats || []).slice(0, 3).map((stat: string, j: number) => (
                                            <span key={j} className="inline-flex items-center px-3 py-1 bg-[var(--noda-bg-primary)] border border-[var(--noda-border-color)] text-xs text-[var(--noda-burgundy)] rounded-full">
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA */}
            {/* CTA */}
            <section className="relative py-32 overflow-hidden border-t border-[var(--noda-border-color)]/30">
                {/* Background FX */}
                <div className="absolute inset-0 bg-[var(--noda-bg-primary)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--noda-burgundy)]/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-light text-[var(--noda-text-primary)] mb-8 tracking-tight leading-[1.1]">
                        {t("successStoriesPage.ctaMain.title") || "Transform your energy network today."}
                    </h2>
                    <p className="text-xl text-[var(--noda-text-muted)] mb-10 font-light max-w-2xl mx-auto">
                        {t("successStoriesPage.ctaMain.subtitle") || "Join the leading energy providers who are setting new standards for efficiency and sustainability with Noda."}
                    </p>
                    <Button asChild size="lg" className="rounded-full px-10 h-14 text-base bg-[var(--noda-burgundy)] hover:bg-[var(--noda-burgundy)]/90 shadow-[0_0_30px_rgba(165,28,71,0.3)] hover:shadow-[0_0_50px_rgba(165,28,71,0.5)] transition-all duration-500">
                        <Link href="/resources#contact">{t("successStoriesPage.ctaMain.button") || "Get in Touch"}</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
