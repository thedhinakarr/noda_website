"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { VisionSection } from "@/components/noda/VisionSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function InnovationPage() {
    const { t } = useLanguage();
    const pageRef = useRef<HTMLDivElement>(null);

    // Sustainable Goals Mapping (Refined Values)
    const translatedValues = t("innovationPage.values.items") as any as Array<{ title: string; desc: string }>;
    const goals = [
        {
            ...translatedValues?.[0],
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            ...translatedValues?.[1],
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            ...translatedValues?.[2],
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
            ),
        },
    ];

    // R&D Projects Data (Merging translated content with links)
    const translatedProjects = (t("innovationPage.projects.items") as any[]) || [];
    const projectLinks = [
        "", // DIGICITY
        "https://enflate.eu/", // ENFLATE
        "https://collectief-project.eu/", // COLLECTiEF
        "https://www.flexisync.eu/", // FLEXISYNC
        "", // TEMPO
        "https://a.bth.se/bigdata/", // BIGDATA
        "https://www.hb.se/en/research/research-portal/projects/data-analytics-for-fault-detection-in-district-heating-dad/", // DAD
        "https://iotap.mau.se/projects/shine/", // SHINE
        "https://storm-dhc.eu/", // STORM
        "", // FLEXIBLE HEAT & POWER
        "https://www.arrowhead.eu/" // ARROWHEAD
    ];

    const projects = translatedProjects.map((p, i) => ({
        ...p,
        link: projectLinks[i]
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
                        <p className="text-sm font-medium text-[var(--noda-burgundy)] mb-6 tracking-wide uppercase">{t("innovationPage.hero.label")}</p>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[var(--noda-text-primary)] mb-8 leading-[0.95] tracking-tight">
                            {t("innovationPage.hero.titlePrefix")} <br />
                            <span className="text-[var(--noda-burgundy)]">{t("innovationPage.hero.titleHighlight")}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--noda-text-muted)] max-w-xl mt-10 leading-relaxed font-light">
                            {t("innovationPage.hero.desc")}
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Forefront of Innovation */}
            <section className="py-24 bg-[var(--noda-bg-primary)]">
                <div className="container text-center max-w-4xl">
                    <span className="text-label text-[var(--noda-burgundy)] mb-6 block">{t("innovationPage.position.label")}</span>
                    <h2 className="text-4xl md:text-5xl font-light text-[var(--noda-text-primary)] leading-tight mb-8">
                        {t("innovationPage.position.title").split("thermal AI")[0]}<span className="gradient-text">thermal AI</span>{t("innovationPage.position.title").split("thermal AI")[1]}
                    </h2>
                    <p className="text-body-lg text-[var(--noda-text-muted)] max-w-3xl mx-auto">
                        {t("innovationPage.position.desc")}
                    </p>
                </div>
            </section>

            {/* 3. R&D Projects */}
            <section className="py-24 bg-[var(--noda-bg-surface)]">
                <div className="container">
                    <div className="mb-16">
                        <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("innovationPage.projects.label")}</span>
                        <h2 className="text-h1 text-[var(--noda-text-primary)]">{t("innovationPage.projects.title")}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <div key={i} className="group flex flex-col p-8 border border-[var(--noda-border-color)] bg-[var(--noda-bg-surface)] hover:border-[var(--noda-burgundy)] transition-colors duration-300">
                                <span className="text-xs uppercase tracking-widest text-[var(--noda-burgundy)] mb-4 font-mono truncate">
                                    {project.focus}
                                </span>
                                <h3 className="text-2xl font-light text-[var(--noda-text-primary)] mb-4 group-hover:text-[var(--noda-burgundy)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--noda-text-muted)] text-sm leading-relaxed mb-8 flex-grow">
                                    {project.desc}
                                </p>

                                <div className="pt-6 border-t border-[var(--noda-border-color)] flex justify-between items-center mt-auto">
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--noda-text-primary)] hover:text-[var(--noda-burgundy)] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                            {t("innovationPage.projects.visitSite")} <span className="text-lg">→</span>
                                        </a>
                                    ) : (
                                        <span className="text-sm text-[var(--noda-text-muted)] italic">{t("innovationPage.projects.completed")}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Featured Domain Experts */}
            <section className="py-24 bg-[var(--noda-bg-primary)] border-t border-[var(--noda-border-color)]">
                <div className="container">
                    <p className="text-label text-[var(--noda-burgundy)] mb-4">{t("innovationPage.featuredExperts.label")}</p>
                    <h2 className="text-h1 text-[var(--noda-text-primary)] mb-12">{t("innovationPage.featuredExperts.title")}</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {(t("innovationPage.featuredExperts.experts") as any[]).map((expert, i) => (
                            <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-[var(--noda-gray-200)]">
                                {/* Image */}
                                <Image
                                    src={expert.image}
                                    alt={expert.name}
                                    fill
                                    className={cn(
                                        "transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700",
                                        expert.name.includes("Jens") ? "object-contain scale-[1.2]" : "object-cover"
                                    )}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                                    <h3 className="text-xl font-bold mb-1">{expert.name}</h3>
                                    <p className="text-sm text-white/80">{expert.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Sustainable Goals (Values) */}
            <section className="py-24 bg-[var(--noda-bg-secondary)]">
                <div className="container">
                    <h2 className="text-h1 text-[var(--noda-text-primary)] text-center mb-16">{t("innovationPage.values.title")}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {goals.map((goal, i) => (
                            <div key={i} className="group relative p-8 border border-[var(--noda-border-color)] bg-[var(--noda-bg-surface)] hover:border-[var(--noda-burgundy)]/50 transition-all duration-300 flex flex-col h-full rounded-none">
                                <div className="mb-6 text-[var(--noda-burgundy)] group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-10 h-10">
                                        {goal.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-light text-[var(--noda-text-primary)] mb-4 group-hover:text-[var(--noda-burgundy)] transition-colors">
                                    {goal.title}
                                </h3>
                                <p className="text-[var(--noda-text-muted)] leading-relaxed">
                                    {goal.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
