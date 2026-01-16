"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

/**
 * Customer Segments / Success Stories
 * Large image cards with gradient overlays
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header
            gsap.from(".segments-header > *", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });

            // Cards stagger
            gsap.from(".segment-card", {
                scrollTrigger: {
                    trigger: ".segments-grid",
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="success" className="py-32 bg-[var(--noda-black)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="segments-header text-center mb-20">
                    <p className="text-label text-[var(--noda-burgundy)] mb-4">Success Stories</p>
                    <h2 className="text-h1 text-white mb-6">
                        Trusted Across Industries
                    </h2>
                    <p className="text-body-lg text-[var(--noda-gray-300)] max-w-2xl mx-auto">
                        From energy providers to real estate portfolios, NODA delivers
                        measurable impact.
                    </p>
                </div>

                {/* Grid */}
                <div className="segments-grid grid md:grid-cols-2 gap-6">
                    {segments.map((segment, i) => (
                        <Card
                            key={i}
                            className={`segment-card relative group aspect-[4/3] overflow-hidden cursor-pointer bg-gradient-to-br ${segment.gradient} border-0`}
                        >
                            <CardContent className="absolute inset-0 p-8 flex flex-col justify-end">
                                <p className="text-label text-white/60 mb-2">{segment.title}</p>
                                <p className="text-h3 text-white font-light leading-snug max-w-xs">
                                    "{segment.quote}"
                                </p>

                                {/* Arrow */}
                                <div className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300">
                                    <span className="text-sm">Read case study</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </CardContent>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-[var(--noda-burgundy)]/0 group-hover:bg-[var(--noda-burgundy)]/10 transition-colors duration-500" />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
