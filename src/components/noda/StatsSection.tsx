"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

/**
 * Stats Section with GSAP Counter Animation
 */
export function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const stats = [
        { value: 20, suffix: "+", label: "Years of Excellence" },
        { value: 15, suffix: "K+", label: "Connected Systems" },
        { value: 40, suffix: "%", label: "Efficiency Gains" },
        { value: 3, suffix: "MT", label: "CO₂ Reduced Annually" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in stats
            gsap.from(".stat-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            });

            // Counter animation
            stats.forEach((stat, index) => {
                const counter = { value: 0 };
                gsap.to(counter, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                    value: stat.value,
                    duration: 2,
                    delay: index * 0.1,
                    ease: "power2.out",
                    onUpdate: () => {
                        const el = document.getElementById(`stat-${index}`);
                        if (el) {
                            el.textContent = `${Math.floor(counter.value)}${stat.suffix}`;
                        }
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[var(--noda-dark-1)] border-y border-[var(--noda-dark-4)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <Card key={index} className="stat-item text-center bg-transparent border-0">
                            <CardContent className="p-0">
                                <div id={`stat-${index}`} className="stat-value">
                                    0{stat.suffix}
                                </div>
                                <p className="stat-label">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Partner Logos Marquee
 */
export function PartnersMarquee() {
    const partners = [
        "VEOLIA", "DAIMLER", "ENGIE", "SIEMENS",
        "SCHNEIDER", "ABB", "VATTENFALL", "E.ON"
    ];

    return (
        <section className="py-16 bg-[var(--noda-black)] overflow-hidden">
            <div className="mb-8 text-center">
                <p className="text-label text-[var(--noda-gray-400)]">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="marquee-container">
                <div className="marquee">
                    {[...partners, ...partners].map((partner, i) => (
                        <span
                            key={i}
                            className="text-2xl font-light text-[var(--noda-gray-500)] hover:text-[var(--noda-gray-300)] transition-colors duration-300 whitespace-nowrap"
                        >
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
