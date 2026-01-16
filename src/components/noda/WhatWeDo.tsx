"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

/**
 * What We Do Section
 */
export function WhatWeDo() {
    const sectionRef = useRef<HTMLElement>(null);

    const steps = [
        { num: "01", title: "Connect", desc: "Seamlessly integrate with your existing infrastructure and data sources." },
        { num: "02", title: "Monitor", desc: "Real-time visibility across your entire thermal network in one dashboard." },
        { num: "03", title: "Optimize", desc: "AI-powered decisions for maximum efficiency and cost reduction." },
    ];

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
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[var(--noda-dark-1)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Visual */}
                    <div className="whatwedo-visual relative order-first lg:order-1 mb-8 lg:mb-0">
                        <div className="aspect-square bg-[var(--noda-dark-2)] rounded-2xl border border-[var(--noda-dark-4)] p-8 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-64 h-64">
                                    {/* Orbiting circles */}
                                    <div className="absolute inset-0 border border-[var(--noda-dark-4)] rounded-full animate-[spin_20s_linear_infinite]" />
                                    <div className="absolute inset-8 border border-[var(--noda-burgundy)]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                    <div className="absolute inset-16 border border-[var(--noda-dark-4)] rounded-full animate-[spin_10s_linear_infinite]" />

                                    {/* Center */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-[var(--noda-burgundy)] rounded-full flex items-center justify-center glow-burgundy">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Dots on orbit */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--noda-burgundy)] rounded-full" />
                                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[var(--noda-gray-400)] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-last lg:order-2">
                        <div className="whatwedo-text mb-10">
                            <p className="text-label text-[var(--noda-burgundy)] mb-3">What We Do</p>
                            <h2 className="text-h1 text-[var(--noda-white)] mb-4">
                                AI-Driven Energy Management
                            </h2>
                            <p className="text-body-lg text-[var(--noda-gray-300)] leading-relaxed">
                                We provide intelligent solutions for smart heating and cooling systems.
                                Our platform connects, monitors, and optimizes thermal networks in real-time.
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="steps-container space-y-6">
                            {steps.map((step, i) => (
                                <div key={i} className="step-item flex gap-5 group">
                                    <div className="flex-shrink-0">
                                        <span className="block text-2xl font-extralight text-[var(--noda-burgundy)] group-hover:text-[var(--noda-burgundy-light)] transition-colors duration-300">
                                            {step.num}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-[var(--noda-white)] mb-1">{step.title}</h4>
                                        <p className="text-[var(--noda-gray-300)] text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button asChild className="mt-10">
                            <Link href="/success-stories" className="inline-flex gap-2">
                                <span>See Success Stories</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
