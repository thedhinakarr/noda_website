"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import NODA components
import { StatsSection, PartnersMarquee } from "@/components/noda/StatsSection";
import { WhatWeDo } from "@/components/noda/WhatWeDo";
import { ApplicationAreas } from "@/components/noda/ApplicationAreas";
import { CustomerSegments } from "@/components/noda/CustomerSegments";
import { Testimonials } from "@/components/noda/Testimonials";
import { VisionSection } from "@/components/noda/VisionSection";
import { CoPilotSection } from "@/components/noda/CoPilotSection";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const heroRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance animation
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" }
            });

            tl
                // Background fade
                .from(".hero-bg-gradient", {
                    opacity: 0,
                    scale: 1.05,
                    duration: 1.2,
                })
                // Label
                .from(".hero-label", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.6")
                // Title words stagger
                .from(".hero-word", {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                }, "-=0.4")
                // Subtitle
                .from(".hero-subtitle", {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.4")
                // CTA buttons
                .from(".hero-cta", {
                    y: 20,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.5,
                }, "-=0.3")
                // Scroll indicator
                .from(".scroll-indicator", {
                    opacity: 0,
                    y: -20,
                    duration: 0.6,
                }, "-=0.2");

            // Floating animation for decorative elements
            gsap.to(".float-orb", {
                y: "random(-30, 30)",
                x: "random(-20, 20)",
                duration: "random(4, 6)",
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                stagger: {
                    each: 1,
                    from: "random",
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Split title into words for animation
    const titleWords = ["We", "are", "dedicated", "to", "thermal", "excellence"];

    return (
        <>
            <Navbar />

            {/* Hero Section - GSAP Animated */}
            <section ref={heroRef} className="hero relative" style={{ alignItems: "flex-start" }}>
                {/* Animated Background */}
                <div className="hero-bg">
                    <div
                        className="hero-bg-gradient w-full h-full"
                        style={{
                            background: "radial-gradient(ellipse at 30% 20%, rgba(165, 28, 71, 0.15) 0%, transparent 50%), linear-gradient(180deg, #0A0A0A 0%, #141414 100%)",
                        }}
                    />
                </div>

                {/* Floating Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="float-orb absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--noda-burgundy)]/10 to-transparent blur-3xl" />
                    <div className="float-orb absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full bg-gradient-to-br from-[var(--noda-burgundy)]/5 to-transparent blur-3xl" />
                </div>

                <div className="hero-overlay" />

                <div className="hero-content container relative z-10" style={{ paddingTop: "180px" }}>
                    {/* Label */}
                    <p className="hero-label text-label text-[var(--noda-burgundy)] mb-6">
                        AI-Powered Energy Management
                    </p>

                    {/* Animated Title */}
                    <h1 className="heading-display hero-title max-w-4xl mb-8">
                        {titleWords.map((word, i) => (
                            <span
                                key={i}
                                className={`hero-word inline-block mr-4 ${word === "thermal" || word === "excellence"
                                        ? "gradient-text"
                                        : ""
                                    }`}
                            >
                                {word}
                            </span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle text-body-lg text-[var(--noda-gray-300)] max-w-xl mb-10">
                        AI-driven energy management solutions for smart heating and cooling.
                        Unmatched precision and control for a sustainable future.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="hero-cta">
                            <Link href="/product">
                                Explore CoPilot
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="hero-cta">
                            <Link href="/success-stories">
                                View Case Studies
                            </Link>
                        </Button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2">
                        <div className="w-6 h-10 rounded-full border border-[var(--noda-gray-500)] flex justify-center pt-2">
                            <div className="w-1 h-2 rounded-full bg-[var(--noda-gray-400)] animate-bounce" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Counter Animation */}
            <StatsSection />

            {/* Vision Statement */}
            <VisionSection />

            {/* What We Do */}
            <WhatWeDo />

            {/* CoPilot Feature Section */}
            <CoPilotSection />

            {/* Application Areas */}
            <ApplicationAreas />

            {/* Customer Segments / Success Stories */}
            <CustomerSegments />

            {/* Testimonials */}
            <Testimonials />

            {/* Partners */}
            <PartnersMarquee />

            {/* CTA Section */}
            <section className="py-32 bg-[var(--noda-dark-1)] text-center">
                <div className="container">
                    <h2 className="text-h1 text-white mb-6">Ready for smarter energy?</h2>
                    <p className="text-body-lg text-[var(--noda-gray-300)] max-w-lg mx-auto mb-10">
                        Let&apos;s discuss how NODA can transform your thermal energy management.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button asChild size="lg">
                            <Link href="/resources">
                                Get in touch
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/product">
                                Learn more
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
