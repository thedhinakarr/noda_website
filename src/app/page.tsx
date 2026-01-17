"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";

// Components
import { MeetCopilot } from "@/components/noda/MeetCopilot";
import { StatsSection } from "@/components/noda/StatsSection";
import { PartnersMarquee } from "@/components/noda/PartnersMarquee";
import { VisionSection } from "@/components/noda/VisionSection";
import { ApplicationAreas } from "@/components/noda/ApplicationAreas";
import { WhatWeDo } from "@/components/noda/WhatWeDo";
import { PatentedSoftware } from "@/components/noda/PatentedSoftware";
import { Testimonials } from "@/components/noda/Testimonials";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const { t } = useLanguage();
    const heroRef = useRef<HTMLDivElement>(null);
    const pageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animations
            gsap.from(".container > div > *", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2,
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="bg-[var(--noda-bg-primary)] min-h-screen">
            <Navbar />

            <main>
                {/* 1. Hero Section */}
                <section ref={heroRef} className="relative min-h-[85vh] flex flex-col justify-start pt-24 md:pt-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--noda-bg-primary)]/90 via-[var(--noda-bg-primary)]/70 to-transparent z-0" />

                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 grid-pattern opacity-[0.15] z-0" />

                    <div className="container relative z-10 px-6">
                        <div className="max-w-4xl mr-auto text-left">

                            {/* Statement Headline */}
                            <p className="text-sm font-medium text-[var(--noda-burgundy)] mb-6 tracking-wide uppercase">{t("hero.label")}</p>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium text-[var(--noda-text-primary)] leading-[0.95] tracking-tight mb-10">
                                {(t("hero.titleParts") as any[]).map((part, i) => (
                                    <span key={i} className={part.highlight ? "text-[var(--noda-burgundy)]" : ""}>
                                        {part.text}{" "}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-xl md:text-2xl text-[var(--noda-text-muted)] mt-12 max-w-xl leading-relaxed font-light">
                                {t("hero.subtitle")}
                            </p>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-10 animate-bounce">
                        <svg className="w-8 h-8 text-[var(--noda-text-muted)] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </section>

                {/* 2. Meet Copilot */}
                <MeetCopilot />

                {/* 3. Stats */}
                <StatsSection />

                {/* 4. Who all are using (Conveyor Belt) */}
                <PartnersMarquee />

                {/* 5. Vision */}
                <VisionSection />

                {/* 6. Our Patented Software */}
                <PatentedSoftware />

                {/* 7. What We Do */}
                <WhatWeDo />



                {/* 9. Reviews */}
                <Testimonials />

                {/* 9. Application Areas (Moved to end) */}
                <ApplicationAreas />

            </main>

            <Footer />
        </div>
    );
}
