"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

/**
 * Stats Section with Counter Animation
 */
export function StatsSection() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    const stats = [
        { value: 20, suffix: "+", label: t("stats.years") },
        { value: 15, suffix: "K+", label: t("stats.connected") },
        { value: 40, suffix: "%", label: t("stats.efficiency") },
        { value: 3, suffix: "MT", label: t("stats.co2") },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in stats with fromTo for reliability
            const statItems = document.querySelectorAll(".stat-item");
            statItems.forEach((item, i) => {
                gsap.fromTo(item,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                        },
                    }
                );
            });

            // Counter animation
            stats.forEach((stat, index) => {
                const counter = { value: 0 };
                gsap.to(counter, {
                    value: stat.value,
                    duration: 2,
                    delay: 0.3 + index * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
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
    }, [stats]); // Update when stats (labels) change

    return (
        <section ref={sectionRef} className="py-20 bg-[var(--noda-bg-secondary)] border-y border-[var(--noda-border-color)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
                    {stats.map((stat, index) => (
                        <Card key={index} className="stat-item text-center bg-transparent border-0">
                            <CardContent className="p-0">
                                <div id={`stat-${index}`} className="stat-value text-[var(--noda-text-primary)]">
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


