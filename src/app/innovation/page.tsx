"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VisionSection } from "@/components/noda/VisionSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function InnovationPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.from(".innovation-hero > *", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Values cards
            gsap.from(".value-card", {
                scrollTrigger: {
                    trigger: ".values-section",
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const values = [
        {
            title: "Efficiency First",
            desc: "Every decision optimizes for maximum output with minimum waste. We believe efficiency is the foundation of sustainability.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: "Customer Focus",
            desc: "Our solutions are built in close collaboration with energy companies, utilities, and building owners who face real challenges daily.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: "Global Impact",
            desc: "We're working toward a carbon-neutral future, one thermal network at a time. Our technology scales to meet global climate goals.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
            ),
        },
    ];

    return (
        <div ref={pageRef}>
            <Navbar />

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center bg-[var(--noda-black)]">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="container innovation-hero relative z-10 pt-32">
                    <p className="text-label text-[var(--noda-burgundy)] mb-4">INNOVATION</p>
                    <h1 className="text-h1 text-white max-w-4xl">
                        Serving the energy sector with a focus on{" "}
                        <span className="gradient-text">thermal excellence</span>
                    </h1>
                </div>
            </section>

            {/* Vision Section */}
            <VisionSection />

            {/* Values */}
            <section className="values-section py-24 bg-[var(--noda-dark-2)]">
                <div className="container">
                    <h2 className="text-h1 text-white text-center mb-16">What drives us</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((value, i) => (
                            <Card key={i} className="value-card bg-[var(--noda-dark-3)] border-[var(--noda-dark-4)] hover:border-[var(--noda-burgundy)]/30 transition-colors duration-300">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-6 text-[var(--noda-burgundy)]">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-3">{value.title}</h3>
                                    <p className="text-[var(--noda-gray-300)]">{value.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[var(--noda-black)] text-center">
                <div className="container">
                    <h2 className="text-h1 text-white mb-6">Join us in shaping the future</h2>
                    <p className="text-body-lg text-[var(--noda-gray-300)] max-w-md mx-auto mb-8">
                        We&apos;re always looking for talented people who share our vision.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/resources">View open positions</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
