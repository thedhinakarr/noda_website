"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomerSegments } from "@/components/noda/CustomerSegments";
import { Testimonials } from "@/components/noda/Testimonials";
import { StatsSection } from "@/components/noda/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);



export default function SuccessStoriesPage() {
    const { t } = useLanguage();
    const pageRef = useRef<HTMLDivElement>(null);
    const caseStudies = t("successStoriesPage.caseStudies") as any as Array<{ title: string; sector: string; result: string; quote: string }>;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance - immediate animation
            gsap.from(".success-hero > *", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Case study cards - animate in on scroll
            const caseCards = document.querySelectorAll(".case-card");
            caseCards.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                        },
                    }
                );
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef}>
            <Navbar />

            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center bg-[var(--noda-black)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--noda-burgundy)]/5 to-transparent" />
                <div className="container success-hero relative z-10 pt-32">
                    <p className="text-label text-[var(--noda-burgundy)] mb-4">{t("successStoriesPage.hero.label")}</p>
                    <h1 className="text-h1 text-white max-w-3xl mb-6">
                        {t("successStoriesPage.hero.titlePrefix")} <span className="gradient-text">{t("successStoriesPage.hero.titleHighlight")}</span>
                    </h1>
                    <p className="text-body-lg text-[var(--noda-gray-300)] max-w-xl">
                        {t("successStoriesPage.hero.desc")}
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-[var(--noda-dark-1)]">
                <div className="container">
                    <div className="cases-grid grid md:grid-cols-2 gap-6">
                        {caseStudies.map((study, i) => (
                            <Card key={i} className="case-card bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)] hover:border-[var(--noda-burgundy)]/30 transition-all duration-300 group">
                                <CardContent className="p-8">
                                    <p className="text-label text-[var(--noda-gray-400)] mb-4">{study.sector}</p>
                                    <h3 className="text-xl font-medium text-white mb-4">{study.title}</h3>
                                    <p className="text-[var(--noda-gray-300)] italic mb-6">
                                        &ldquo;{study.quote}&rdquo;
                                    </p>
                                    <div className="inline-block px-4 py-2 bg-[var(--noda-burgundy)]/10 text-[var(--noda-burgundy)] text-sm font-medium rounded">
                                        {study.result}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Segments */}
            <CustomerSegments />

            {/* Stats */}
            <StatsSection />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA */}
            <section className="py-24 bg-[var(--noda-black)] text-center">
                <div className="container">
                    <h2 className="text-h1 text-white mb-6">{t("successStoriesPage.cta.title")}</h2>
                    <Button asChild size="lg">
                        <Link href="/resources">{t("successStoriesPage.cta.button")}</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
