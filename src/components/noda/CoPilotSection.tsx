"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

/**
 * CoPilot Product Section
 */
export function CoPilotSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text content with fromTo
            const textItems = document.querySelectorAll(".product-text > *");
            textItems.forEach((item, i) => {
                gsap.fromTo(item,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                        },
                    }
                );
            });

            // Animate visual
            gsap.fromTo(".product-visual",
                { x: 40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        "Real-time energy optimization",
        "Predictive maintenance",
        "Carbon footprint tracking",
        "Seamless integration",
    ];

    return (
        <section
            ref={sectionRef}
            id="product"
            className="py-24 bg-[var(--noda-black)] relative overflow-hidden"
        >
            {/* Accent glow */}
            <div className="absolute top-1/2 -right-[20%] w-[40%] aspect-square bg-[var(--noda-burgundy)]/10 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="product-text">
                        <Badge variant="outline" className="mb-4 text-[var(--noda-burgundy)] border-[var(--noda-burgundy)]/30 bg-[var(--noda-burgundy)]/5">
                            NEW
                        </Badge>

                        <h2 className="text-h1 text-[var(--noda-white)] mb-4">
                            Meet NODA CoPilot
                        </h2>

                        <p className="text-h3 text-[var(--noda-gray-200)] font-light mb-4">
                            Advanced analytics at your fingertips
                        </p>

                        <p className="text-body-lg text-[var(--noda-gray-300)] mb-8 leading-relaxed max-w-lg">
                            An AI-powered module designed for energy and utility companies.
                            Transform complex operational data into actionable insights for
                            smarter thermal energy management decisions.
                        </p>

                        <ul className="space-y-3 mb-8">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-[var(--noda-gray-200)]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--noda-burgundy)]" />
                                    <span className="text-body">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="/product" className="btn btn-primary inline-flex gap-2">
                            <span>Learn More</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Visual */}
                    <div className="product-visual relative">
                        <Card className="bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)] overflow-hidden">
                            <CardContent className="p-0">
                                {/* Fake Dashboard UI */}
                                <div className="p-5 border-b border-[var(--noda-dark-4)]">
                                    <div className="flex gap-2 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-[var(--noda-burgundy)]/60" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                                    </div>
                                    <div className="h-2 w-32 bg-[var(--noda-dark-4)] rounded" />
                                </div>

                                <div className="p-5 space-y-5">
                                    {/* Metrics Row */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { label: "Efficiency", value: "94.2%", trend: "+2.1%" },
                                            { label: "Savings", value: "€24K", trend: "+12%" },
                                            { label: "CO₂ Cut", value: "18T", trend: "+8.4%" },
                                        ].map((metric, i) => (
                                            <div key={i} className="p-3 bg-[var(--noda-dark-3)] rounded-lg">
                                                <p className="text-xs text-[var(--noda-gray-400)] mb-1">{metric.label}</p>
                                                <p className="text-lg font-light text-[var(--noda-white)]">{metric.value}</p>
                                                <p className="text-xs text-emerald-400 mt-1">{metric.trend}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chart Placeholder */}
                                    <div className="h-32 bg-[var(--noda-dark-3)] rounded-lg p-3">
                                        <div className="flex items-end justify-around h-full gap-1">
                                            {[35, 55, 40, 70, 50, 80, 65, 90, 75, 85, 95, 80].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="w-full bg-gradient-to-t from-[var(--noda-burgundy)] to-[var(--noda-burgundy-light)] rounded-t opacity-80"
                                                    style={{ height: `${h}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Glow behind card */}
                        <div className="absolute -inset-4 bg-[var(--noda-burgundy)]/5 rounded-xl blur-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
