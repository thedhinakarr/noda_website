"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CoPilotSection } from "@/components/noda/CoPilotSection";
import { ApplicationAreas } from "@/components/noda/ApplicationAreas";
import { PartnersMarquee } from "@/components/noda/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function ProductPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.from(".product-hero-content > *", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Features stagger
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: ".features-grid",
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            });

            // How it works steps
            gsap.from(".how-step", {
                scrollTrigger: {
                    trigger: ".how-section",
                    start: "top 80%",
                },
                x: -40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            title: "Real-time Optimization",
            desc: "AI continuously analyzes and optimizes your thermal network performance, reducing energy waste and costs.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: "Predictive Maintenance",
            desc: "Anticipate equipment failures before they happen with machine learning-powered diagnostics.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            title: "Carbon Tracking",
            desc: "Monitor and report on CO₂ emissions with automated sustainability dashboards.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
            ),
        },
    ];

    const steps = [
        { num: "01", title: "Connect", desc: "Integrate with your existing infrastructure and data sources seamlessly." },
        { num: "02", title: "Monitor", desc: "Real-time visibility across your entire thermal network in one dashboard." },
        { num: "03", title: "Optimize", desc: "AI-powered decisions for maximum efficiency and cost reduction." },
    ];

    return (
        <div ref={pageRef}>
            <Navbar />

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center bg-[var(--noda-black)]">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--noda-burgundy)]/5 to-transparent" />
                <div className="container product-hero-content relative z-10 pt-32">
                    <p className="text-label text-[var(--noda-burgundy)] mb-4">PRODUCT</p>
                    <h1 className="text-h1 text-white max-w-3xl mb-6">
                        Meet <span className="gradient-text">NODA CoPilot</span>
                    </h1>
                    <p className="text-body-lg text-[var(--noda-gray-300)] max-w-xl mb-8">
                        Advanced AI analytics for thermal energy optimization.
                        Transform complex operational data into actionable insights.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/resources">Request a Demo</Link>
                    </Button>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-[var(--noda-dark-1)]">
                <div className="container">
                    <div className="features-grid grid md:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <Card key={i} className="feature-card bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)] hover:border-[var(--noda-burgundy)]/30 transition-colors duration-300">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-6 text-[var(--noda-burgundy)]">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                                    <p className="text-[var(--noda-gray-300)]">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CoPilot Section */}
            <CoPilotSection />

            {/* How It Works */}
            <section className="how-section py-24 bg-[var(--noda-dark-1)]">
                <div className="container">
                    <h2 className="text-h1 text-white mb-16">How it works</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <div key={i} className="how-step">
                                <div className="text-4xl font-extralight text-[var(--noda-burgundy)] mb-4">{step.num}</div>
                                <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                                <p className="text-[var(--noda-gray-300)]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Areas */}
            <ApplicationAreas />

            {/* Partners */}
            <PartnersMarquee />

            {/* CTA */}
            <section className="py-24 bg-[var(--noda-dark-2)] text-center">
                <div className="container">
                    <h2 className="text-h1 text-white mb-6">See CoPilot in action</h2>
                    <p className="text-body-lg text-[var(--noda-gray-300)] max-w-md mx-auto mb-8">
                        Schedule a demo with our team to learn how CoPilot can work for you.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/resources">Request a demo</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
