"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

/**
 * Vision Section
 */
export function VisionSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Split text reveal with fromTo
            const visionLines = document.querySelectorAll(".vision-line");
            visionLines.forEach((line, i) => {
                gsap.fromTo(line,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                        },
                    }
                );
            });

            // Side content
            const visionContent = document.querySelectorAll(".vision-content > *");
            visionContent.forEach((item, i) => {
                gsap.fromTo(item,
                    { y: 25, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.4 + i * 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".vision-content",
                            start: "top 85%",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="innovation"
            className="py-24 bg-[var(--noda-dark-1)] relative overflow-hidden"
        >
            {/* Grid Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Main Statement */}
                    <div>
                        <h2 className="text-h1 text-[var(--noda-white)] leading-tight">
                            <span className="vision-line block">Serving the energy sector,</span>
                            <span className="vision-line block">with a particular focus on</span>
                            <span className="vision-line block">
                                the <span className="gradient-text">complex thermal</span>
                            </span>
                            <span className="vision-line block gradient-text">energy landscape.</span>
                        </h2>
                    </div>

                    {/* Supporting Content */}
                    <div className="vision-content lg:pt-4">
                        <div className="flex gap-6 mb-6">
                            <div className="w-[2px] bg-gradient-to-b from-[var(--noda-burgundy)] to-transparent" style={{ minHeight: "100px" }} />
                            <div>
                                <p className="text-label text-[var(--noda-burgundy)] mb-3">Our Vision</p>
                                <p className="text-body-lg text-[var(--noda-gray-200)] leading-relaxed">
                                    Global energy demand is projected to increase by 21% by 2040.
                                    We believe the answer lies not in producing more energy, but
                                    in using what we have more intelligently.
                                </p>
                            </div>
                        </div>

                        <p className="text-body text-[var(--noda-gray-300)] leading-relaxed mb-6 pl-8">
                            Our AI-driven solutions optimize thermal networks, reduce waste,
                            and help organizations achieve sustainability goals—without
                            compromising comfort or reliability.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pl-8">
                            <Card className="bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)]">
                                <CardContent className="p-4">
                                    <div className="w-9 h-9 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-3">
                                        <svg className="w-4 h-4 text-[var(--noda-burgundy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-[var(--noda-white)] text-sm mb-1">Efficiency First</p>
                                    <p className="text-xs text-[var(--noda-gray-400)]">Maximize output, minimize waste</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)]">
                                <CardContent className="p-4">
                                    <div className="w-9 h-9 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-3">
                                        <svg className="w-4 h-4 text-[var(--noda-burgundy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-[var(--noda-white)] text-sm mb-1">Global Impact</p>
                                    <p className="text-xs text-[var(--noda-gray-400)]">Carbon-neutral future</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
