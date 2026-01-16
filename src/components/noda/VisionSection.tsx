"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

/**
 * Vision Section
 * Large typography statement with premium styling
 */
export function VisionSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split text reveal
            gsap.from(".vision-line", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: "100%",
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Side content
            gsap.from(".vision-content > *", {
                scrollTrigger: {
                    trigger: ".vision-content",
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });

            // Parallax on accent line
            gsap.to(".vision-accent", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                scaleY: 1.5,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="innovation"
            className="py-32 bg-[var(--noda-dark-1)] relative overflow-hidden"
        >
            {/* Grid Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Main Statement */}
                    <div>
                        <h2 className="text-h1 text-white leading-tight">
                            <span className="block overflow-hidden">
                                <span className="vision-line block">Serving the energy sector,</span>
                            </span>
                            <span className="block overflow-hidden">
                                <span className="vision-line block">with a particular focus on</span>
                            </span>
                            <span className="block overflow-hidden">
                                <span className="vision-line block">
                                    the <span className="gradient-text">complex thermal</span>
                                </span>
                            </span>
                            <span className="block overflow-hidden">
                                <span className="vision-line block gradient-text">energy landscape.</span>
                            </span>
                        </h2>
                    </div>

                    {/* Supporting Content */}
                    <div className="vision-content lg:pt-8">
                        <div className="flex gap-6 mb-8">
                            <div className="vision-accent w-[2px] bg-gradient-to-b from-[var(--noda-burgundy)] to-transparent origin-top" style={{ height: "120px" }} />
                            <div>
                                <p className="text-label text-[var(--noda-burgundy)] mb-4">Our Vision</p>
                                <p className="text-body-lg text-[var(--noda-gray-200)] leading-relaxed">
                                    Global energy demand is projected to increase by 21% by 2040.
                                    We believe the answer lies not in producing more energy, but
                                    in using what we have more intelligently.
                                </p>
                            </div>
                        </div>

                        <p className="text-body text-[var(--noda-gray-300)] leading-relaxed mb-8 pl-8">
                            Our AI-driven solutions optimize thermal networks, reduce waste,
                            and help organizations achieve sustainability goals—without
                            compromising comfort or reliability.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pl-8">
                            <Card className="bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)]">
                                <CardContent className="p-5">
                                    <div className="w-10 h-10 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-[var(--noda-burgundy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-white mb-1">Efficiency First</p>
                                    <p className="text-sm text-[var(--noda-gray-400)]">Maximize output, minimize waste</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)]">
                                <CardContent className="p-5">
                                    <div className="w-10 h-10 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-[var(--noda-burgundy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-white mb-1">Global Impact</p>
                                    <p className="text-sm text-[var(--noda-gray-400)]">Carbon-neutral future</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
