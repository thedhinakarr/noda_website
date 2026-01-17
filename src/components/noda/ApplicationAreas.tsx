"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

/**
 * Application Areas Grid
 */
export function ApplicationAreas() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    const translatedItems = t("appAreas.items") as any as Array<{ title: string, category: string, desc: string }>;

    const areas = Array.isArray(translatedItems) ? translatedItems.map((item, i) => ({
        ...item,
        image: [
            "/images/success/district heating company-1.jpeg", // District Heating
            "/images/success/commercial real estate-1.jpeg",   // Building Clusters
            "/images/success/industrial infrastructure-3.jpeg", // Energy Providers
            "/images/success/manufacturing sector-3.jpeg"       // Industrial Entities
        ][i] || "/images/success/district heating company-1.jpeg"
    })) : [];

    return (
        <section ref={sectionRef} className="py-24 bg-[var(--noda-bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="areas-header text-center mb-16">
                    <p className="text-label text-[var(--noda-burgundy)] mb-3">{t("appAreas.label")}</p>
                    <h2 className="text-h1 text-[var(--noda-text-primary)] mb-4">
                        {t("appAreas.title")}
                    </h2>
                    <p className="text-body-lg text-[var(--noda-text-muted)] max-w-2xl mx-auto">
                        {t("appAreas.desc")}
                    </p>
                </div>

                {/* Grid */}
                <div className="areas-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--noda-border-color)] border border-[var(--noda-border-color)]">
                    {areas.map((area, i) => (
                        <Link
                            href="/product"
                            key={i}
                            className="area-card group relative h-[480px] bg-[var(--noda-bg-surface)] overflow-hidden cursor-pointer block"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0">
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--noda-bg-surface)] via-[var(--noda-bg-surface)]/20 to-transparent" />
                            </div>

                            <div className="relative h-full flex flex-col justify-end p-10 z-10">
                                <div className="mb-auto pt-4">
                                    <span className="text-xs font-mono tracking-widest uppercase border border-[var(--noda-border-color)] bg-[var(--noda-bg-surface)]/80 backdrop-blur-md px-3 py-1 text-[var(--noda-text-primary)]">
                                        {area.category}
                                    </span>
                                </div>

                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-4xl font-light mb-4 text-[var(--noda-text-primary)] leading-tight">
                                        {area.title}
                                    </h3>

                                    <div className="max-w-md">
                                        <p className="text-[var(--noda-text-muted)] text-lg leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            {area.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
