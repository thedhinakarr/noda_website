"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

/**
 * Customer Segments / Success Stories
 */
export function CustomerSegments() {
    const sectionRef = useRef<HTMLElement>(null);

    const segments = [
        {
            title: "Energy Services",
            quote: "Proven energy savings across our entire portfolio.",
            gradient: "from-[var(--noda-burgundy)] to-[var(--noda-burgundy-dark)]",
        },
        {
            title: "Utility Companies",
            quote: "Real-time visibility and predictive insights.",
            gradient: "from-[#1a1a2e] to-[#16213e]",
        },
        {
            title: "Municipalities",
            quote: "Sustainable infrastructure for communities.",
            gradient: "from-[#1f1f1f] to-[#2d2d2d]",
        },
        {
            title: "Real Estate",
            quote: "Tenant comfort with reduced operational costs.",
            gradient: "from-[var(--noda-dark-3)] to-[var(--noda-dark-2)]",
        },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header with fromTo
            const headerItems = document.querySelectorAll(".segments-header > *");
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
            const segmentCards = document.querySelectorAll(".segment-card");
            segmentCards.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.2 + i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".segments-grid",
                            start: "top 85%",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="success" className="py-24 bg-[var(--noda-black)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="segments-header text-center mb-12">
                    <p className="text-label text-[var(--noda-burgundy)] mb-3">Success Stories</p>
                    <h2 className="text-h1 text-white mb-4">
                        Trusted Across Industries
                    </h2>
                    <p className="text-body-lg text-[var(--noda-gray-300)] max-w-xl mx-auto">
                        See how leading organizations leverage NODA to transform their thermal operations.
                    </p>
                </div>

                {/* Grid */}
                <div className="segments-grid grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {segments.map((segment, i) => (
                        <Card
                            key={i}
                            className={`segment-card group relative overflow-hidden cursor-pointer bg-gradient-to-br ${segment.gradient} border-0 hover:scale-[1.02] transition-transform duration-300`}
                        >
                            <CardContent className="p-5 h-48 flex flex-col justify-end relative z-10">
                                <h3 className="text-white font-medium mb-2 text-lg">
                                    {segment.title}
                                </h3>
                                <p className="text-white/70 text-sm">
                                    "{segment.quote}"
                                </p>

                                {/* Arrow */}
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
