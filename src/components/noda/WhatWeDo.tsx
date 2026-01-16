"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

/**
 * What We Do Section
 * Process explanation with animated steps
 */
export function WhatWeDo() {
    const sectionRef = useRef<HTMLElement>(null);

    const steps = [
        {
            num: "01",
            title: "Connect",
            desc: "Seamlessly integrate with your existing infrastructure and data sources."
        },
        {
            num: "02",
            title: "Monitor",
            desc: "Real-time visibility across your entire thermal network in one dashboard."
        },
        {
            num: "03",
            title: "Optimize",
            desc: "AI-powered decisions for maximum efficiency and cost reduction."
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text content
            gsap.from(".whatwedo-text > *", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });

            // Steps stagger
            gsap.from(".step-item", {
                scrollTrigger: {
                    trigger: ".steps-container",
                    start: "top 80%",
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
            });

            // Visual element
            gsap.from(".whatwedo-visual", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                scale: 0.95,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-[var(--noda-dark-1)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Visual */}
                    <div className="whatwedo-visual relative order-2 lg:order-1">
                        <div className="aspect-square bg-[var(--noda-dark-2)] rounded-2xl border border-[var(--noda-dark-4)] p-8 relative overflow-hidden">
                            {/* Abstract graphic */}
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
                                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--noda-gray-400)] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <div className="whatwedo-text mb-12">
                            <p className="text-label text-[var(--noda-burgundy)] mb-4">What We Do</p>
                            <h2 className="text-h1 text-white mb-6">
                                AI-Driven Energy Management
                            </h2>
                            <p className="text-body-lg text-[var(--noda-gray-300)] leading-relaxed">
                                We provide intelligent solutions for smart heating and cooling systems.
                                Our platform connects, monitors, and optimizes thermal networks in real-time.
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="steps-container space-y-8">
                            {steps.map((step, i) => (
                                <div key={i} className="step-item flex gap-6 group">
                                    <div className="flex-shrink-0">
                                        <span className="block text-3xl font-extralight text-[var(--noda-burgundy)] group-hover:text-[var(--noda-burgundy-light)] transition-colors duration-300">
                                            {step.num}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">{step.title}</h4>
                                        <p className="text-[var(--noda-gray-300)]">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button asChild className="mt-12">
                            <Link href="#success" className="inline-flex gap-2">
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
