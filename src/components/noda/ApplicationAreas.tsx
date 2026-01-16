"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

/**
 * Application Areas Grid
 */
export function ApplicationAreas() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    const translatedItems = t("appAreas.items") as any as Array<{ title: string, category: string, desc: string }>;

    const icons = [
        (
            <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        (
            <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        (
            <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        (
            <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    ];

    const areas = Array.isArray(translatedItems) ? translatedItems.map((item, i) => ({
        ...item,
        icon: icons[i] || icons[0]
    })) : [];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header with fromTo
            const headerItems = document.querySelectorAll(".areas-header > *");
            headerItems.forEach((item, i) => {
                gsap.fromTo(item,
                    { y: 25, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                        },
                    }
                );
            });

            // Cards stagger
            const areaCards = document.querySelectorAll(".area-card");
            areaCards.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.2 + i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".areas-grid",
                            start: "top 85%",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [translatedItems]);

    return (
        <section ref={sectionRef} className="py-24 bg-[var(--noda-black)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="areas-header text-center mb-16">
                    <p className="text-label text-[var(--noda-burgundy)] mb-3">{t("appAreas.label")}</p>
                    <h2 className="text-h1 text-[var(--noda-white)] mb-4">
                        {t("appAreas.title")}
                    </h2>
                    <p className="text-body-lg text-[var(--noda-gray-300)] max-w-2xl mx-auto">
                        {t("appAreas.desc")}
                    </p>
                </div>

                {/* Grid */}
                <div className="areas-grid grid grid-cols-1 md:grid-cols-2 gap-5">
                    {areas.map((area, i) => (
                        <Card
                            key={i}
                            className="area-card group bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)] hover:border-[var(--noda-burgundy)]/30 transition-all duration-500 cursor-pointer"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-11 h-11 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center text-[var(--noda-burgundy)] group-hover:bg-[var(--noda-burgundy)] group-hover:text-white transition-all duration-300">
                                        {area.icon}
                                    </div>
                                    <span className="text-xs tracking-widest text-[var(--noda-gray-400)] uppercase">
                                        {area.category}
                                    </span>
                                </div>

                                <h3 className="text-lg font-medium text-[var(--noda-white)] mb-2 group-hover:text-[var(--noda-burgundy-light)] transition-colors duration-300">
                                    {area.title}
                                </h3>

                                <p className="text-sm text-[var(--noda-gray-300)] mb-5">
                                    {area.desc}
                                </p>

                                <div className="flex items-center text-[var(--noda-burgundy)] text-sm font-medium">
                                    <span>{t("appAreas.learnMore")}</span>
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
