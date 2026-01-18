"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
                        <ScrollReveal>
                            <p className="text-sm font-medium text-[var(--noda-burgundy)] mb-6 tracking-wide uppercase">{t("successStoriesPage.hero.label")}</p>
                            <h1 className="text-6xl md:text-8xl font-medium text-[var(--noda-text-primary)] mb-8 leading-[0.95] tracking-tight">
                                {t("successStoriesPage.hero.titlePrefix")} <br />
                                <span className="text-[var(--noda-burgundy)]">{t("successStoriesPage.hero.titleHighlight")}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[var(--noda-text-muted)] max-w-xl mt-10 leading-relaxed font-light">
                                {t("successStoriesPage.hero.desc")}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 2. Use Cases (Case Studies Grid) */}
            <section className="py-24 bg-[var(--noda-bg-primary)]">
                <div className="container">
                    <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[var(--noda-border-color)] pb-8">
                        <div>
                            <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("successStoriesPage.headers.useCases") || "Use Cases"}</span>
                            <h2 className="text-h1 text-[var(--noda-text-primary)]">{t("successStoriesPage.headers.provenImpact") || "Proven Impact"}</h2>
                        </div>
                        <p className="text-[var(--noda-text-muted)] max-w-sm text-right mt-6 md:mt-0">
                            {t("successStoriesPage.headers.subtitle") || "Real-world results from energy networks worldwide."}
                        </p>
                    </ScrollReveal>

                    {/* Grid wrapper with border-t and border-l to complete the grid lines */}
                    <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--noda-border-color)]" stagger={0.15}>
                        {caseStudies.map((study, i) => (
                            <div key={i} className={`group relative bg-[var(--noda-bg-surface)] border-b border-r border-[var(--noda-border-color)] p-10 flex flex-col h-full hover:z-10 hover:border-[var(--noda-burgundy)]/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(165,28,71,0.15)] ${i === 0 || i === 6 ? 'md:col-span-2' : ''}`}>

                                {/* Card content container with flex-col for full height */}
                                <div className="flex flex-col h-full">

                                    {/* Header: Sector & Client */}
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="text-sm font-mono tracking-widest uppercase text-[var(--noda-burgundy)] font-medium">
                                            {study.sector}
                                        </span>
                                        {study.client && (
                                            <span className="text-sm font-medium text-[var(--noda-text-muted)] group-hover:text-[var(--noda-text-secondary)] transition-colors">
                                                {study.client}
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-light text-[var(--noda-text-primary)] mb-8 leading-tight group-hover:text-[var(--noda-burgundy-light)] transition-colors duration-300">
                                        {study.title}
                                    </h3>

                                    {/* Challenge / Solution Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                                        <div>
                                            <h4 className="text-[10px] uppercase text-[var(--noda-text-muted)] tracking-widest mb-3 font-semibold">
                                                {t("successStoriesPage.headers.challenge") || "Challenge"}
                                            </h4>
                                            <p className="text-sm text-[var(--noda-text-secondary)] leading-relaxed line-clamp-4 group-hover:text-[var(--noda-text-primary)] transition-colors duration-300">
                                                {study.challenge}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] uppercase text-[var(--noda-text-muted)] tracking-widest mb-3 font-semibold">
                                                {t("successStoriesPage.headers.solution") || "Solution"}
                                            </h4>
                                            <p className="text-sm text-[var(--noda-text-secondary)] leading-relaxed line-clamp-4 group-hover:text-[var(--noda-text-primary)] transition-colors duration-300">
                                                {study.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer: Result & Stats (Pushed to bottom) */}
                                    <div className="mt-auto border-t border-[var(--noda-border-color)]/30 pt-8">
                                        <div className="mb-8">
                                            <h4 className="text-[10px] uppercase text-[var(--noda-text-muted)] tracking-widest mb-3 font-semibold">
                                                {t("successStoriesPage.headers.keyResult") || "Key Result"}
                                            </h4>
                                            <p className="text-xl md:text-2xl text-[var(--noda-text-primary)] font-medium leading-normal">
                                                {study.result}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {(study.stats || []).slice(0, 3).map((stat: string, j: number) => (
                                                <span key={j} className="inline-flex items-center px-3 py-1.5 bg-[var(--noda-bg-secondary)] border border-[var(--noda-border-color)] text-xs text-[var(--noda-burgundy)] rounded-full group-hover:border-[var(--noda-burgundy)]/30 transition-colors duration-300">
                                                    {stat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </section>



            {/* CTA */}
            {/* CTA */}
            <section className="relative py-32 overflow-hidden border-t border-[var(--noda-border-color)]/30">
                {/* Background FX */}
                <div className="absolute inset-0 bg-[var(--noda-bg-primary)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--noda-burgundy)]/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container relative z-10 text-center max-w-4xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-light text-[var(--noda-text-primary)] mb-8 tracking-tight leading-[1.1]">
                            {t("successStoriesPage.ctaMain.title") || "Transform your energy network today."}
                        </h2>
                        <p className="text-xl text-[var(--noda-text-muted)] mb-10 font-light max-w-2xl mx-auto">
                            {t("successStoriesPage.ctaMain.subtitle") || "Join the leading energy providers who are setting new standards for efficiency and sustainability with Noda."}
                        </p>
                        <Button asChild size="lg" className="rounded-full px-10 h-14 text-base bg-[var(--noda-burgundy)] hover:bg-[var(--noda-burgundy)]/90 shadow-[0_0_30px_rgba(165,28,71,0.3)] hover:shadow-[0_0_50px_rgba(165,28,71,0.5)] transition-all duration-500">
                            <Link href="/resources#contact">{t("successStoriesPage.ctaMain.button") || "Get in Touch"}</Link>
                        </Button>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}
