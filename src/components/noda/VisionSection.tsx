"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Vision Section
 */
export function VisionSection() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    // Get vision title parts - cast as array
    const titleParts = t("vision.titleParts") as any as Array<{ text: string, highlight?: boolean, highlightText?: string, gradient?: boolean }>;

    // GSAP animations removed for better performance and reliability
    // Content will render immediately visible

    return (
        <section
            ref={sectionRef}
            id="innovation"
            className="py-24 bg-[var(--noda-bg-secondary)] relative overflow-hidden"
        >
            {/* Grid Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Main Statement */}
                    <div>
                        <h2 className="text-h1 text-[var(--noda-text-primary)] leading-tight">
                            {Array.isArray(titleParts) && titleParts.map((part, i) => (
                                <span key={i} className={`vision-line block ${part.gradient ? "gradient-text" : ""}`}>
                                    {part.text}
                                    {part.highlight && (
                                        <span className="gradient-text">{part.highlightText}</span>
                                    )}
                                </span>
                            ))}
                        </h2>
                    </div>

                    {/* Supporting Content */}
                    <div className="vision-content lg:pt-4">
                        <div className="flex gap-6 mb-6">
                            <div className="w-[2px] bg-gradient-to-b from-[var(--noda-burgundy)] to-transparent" style={{ minHeight: "100px" }} />
                            <div>
                                <p className="text-label text-[var(--noda-burgundy)] mb-3">{t("vision.label")}</p>
                                <p className="text-body-lg text-[var(--noda-text-secondary)] leading-relaxed">
                                    {t("vision.mainText")}
                                </p>
                            </div>
                        </div>

                        <p className="text-body text-[var(--noda-text-muted)] leading-relaxed mb-6 pl-8">
                            {t("vision.subText")}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pl-8">
                            <Card className="bg-[var(--noda-bg-surface)] border-[var(--noda-border-color)]">
                                <CardContent className="p-4">
                                    <div className="w-9 h-9 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-3">
                                        <svg className="w-4 h-4 text-[var(--noda-burgundy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-[var(--noda-text-primary)] text-sm mb-1">{t("vision.cards.efficiency.title")}</p>
                                    <p className="text-xs text-[var(--noda-text-muted)]">{t("vision.cards.efficiency.desc")}</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-[var(--noda-bg-surface)] border-[var(--noda-border-color)]">
                                <CardContent className="p-4">
                                    <div className="w-9 h-9 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-3">
                                        <svg className="w-4 h-4 text-[var(--noda-burgundy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-[var(--noda-text-primary)] text-sm mb-1">{t("vision.cards.impact.title")}</p>
                                    <p className="text-xs text-[var(--noda-text-muted)]">{t("vision.cards.impact.desc")}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
