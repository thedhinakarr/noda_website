"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

/**
 * What We Do Section
 */
export function WhatWeDo() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    // Get steps from translation - cast as any to handle array type
    const steps = t("whatWeDo.steps") as any as Array<{ num?: string, title: string, desc: string }>;
    // Add numbers back since they aren't in translation (or mapped index+1)
    const stepsWithNum = Array.isArray(steps) ? steps.map((step, i) => ({
        ...step,
        num: `0${i + 1}`
    })) : [];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Text content with fromTo
            const textItems = document.querySelectorAll(".whatwedo-text > *");
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

            // Steps stagger
            const stepItems = document.querySelectorAll(".step-item");
            stepItems.forEach((item, i) => {
                gsap.fromTo(item,
                    { x: -20, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.3 + i * 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".steps-container",
                            start: "top 85%",
                        },
                    }
                );
            });

            // Visual element
            gsap.fromTo(".whatwedo-visual",
                { scale: 0.95, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [stepsWithNum]); // Re-run when steps change

    return (
        <section ref={sectionRef} className="py-24 bg-[var(--noda-bg-secondary)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Visual */}
                    <div className="whatwedo-visual relative order-first lg:order-1 mb-8 lg:mb-0">
                        <div className="aspect-square bg-[var(--noda-bg-surface)] rounded-2xl border border-[var(--noda-border-color)] p-8 relative overflow-hidden group">
                            {/* Neural Network Visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full max-w-sm max-h-sm">
                                    {/* Central Hub */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[var(--noda-burgundy)]/10 rounded-full border border-[var(--noda-burgundy)] z-20 flex items-center justify-center shadow-[0_0_30px_rgba(165,28,71,0.2)]">
                                        <div className="w-8 h-8 text-[var(--noda-burgundy)]">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Satellite Nodes */}
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <div key={i}
                                            className="absolute w-12 h-12 bg-[var(--noda-bg-primary)] border border-[var(--noda-border-color)] rounded-xl flex items-center justify-center z-10 animate-float"
                                            style={{
                                                top: `${50 + 35 * Math.sin(i * 1.25)}%`,
                                                left: `${50 + 35 * Math.cos(i * 1.25)}%`,
                                                transform: 'translate(-50%, -50%)',
                                                animationDelay: `${i * 0.5}s`
                                            }}
                                        >
                                            <div className="w-1.5 h-1.5 bg-[var(--noda-text-muted)] rounded-full" />

                                            {/* Connection Lines (CSS) */}
                                            <div className="absolute top-1/2 left-1/2 w-[100px] h-[1px] bg-gradient-to-r from-[var(--noda-burgundy)]/20 to-transparent -z-10 origin-left"
                                                style={{
                                                    transform: `rotate(${180 + i * 72}deg)`,
                                                    width: '120px'
                                                }}
                                            />
                                        </div>
                                    ))}

                                    {/* Pulse Rings */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[var(--noda-burgundy)]/20 rounded-full animate-ping-slow pointer-events-none" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[var(--noda-border-color)]/30 rounded-full pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-last lg:order-2">
                        <div className="whatwedo-text mb-10">
                            <p className="text-label text-[var(--noda-burgundy)] mb-3">{t("whatWeDo.label")}</p>
                            <h2 className="text-h1 text-[var(--noda-text-primary)] mb-4">
                                {t("whatWeDo.title")}
                            </h2>
                            <p className="text-body-lg text-[var(--noda-text-muted)] leading-relaxed">
                                NODA powers the efficient energy systems of tomorrow. Our Intelligent Platform and AI agents adapt in real-time, appearing in buildings and networks worldwide to reduce fossil dependence and optimize capacity. We've championed self-learning systems long before AI was mainstream, empowering you to always make the right energy choice.
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="steps-container space-y-6">
                            {stepsWithNum.map((step, i) => (
                                <div key={i} className="step-item flex gap-5 group">
                                    <div className="flex-shrink-0">
                                        <span className="block text-2xl font-extralight text-[var(--noda-burgundy)] group-hover:text-[var(--noda-burgundy-light)] transition-colors duration-300">
                                            {step.num}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-[var(--noda-text-primary)] mb-1">{step.title}</h4>
                                        <p className="text-[var(--noda-text-muted)] text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button asChild className="mt-12 rounded-full px-8 h-12 bg-[var(--noda-burgundy)] hover:bg-[var(--noda-burgundy)]/90 text-white shadow-[0_4px_20px_rgba(165,28,71,0.2)] hover:shadow-[0_6px_25px_rgba(165,28,71,0.3)] transition-all duration-300 group">
                            <Link href="/success-stories" className="inline-flex items-center gap-2">
                                <span>{t("whatWeDo.button")}</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
