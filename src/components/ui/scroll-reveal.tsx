"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
    duration?: number;
}

export function ScrollReveal({
    children,
    className,
    stagger = 0,
    delay = 0,
    duration = 0.8,
}: ScrollRevealProps) {
    const el = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!el.current) return;

        const mm = gsap.matchMedia();

        mm.add({
            // reduced motion
            isReduced: "(prefers-reduced-motion: reduce)",
            // desktop/tablet
            isDesktop: "(min-width: 768px)",
            // mobile
            isMobile: "(max-width: 767px)",
        }, (context) => {
            const { isReduced, isDesktop, isMobile } = context.conditions as { [key: string]: boolean };
            const targets = el.current!.children;

            if (isReduced) {
                // No animation for reduced motion users
                gsap.set(targets, { autoAlpha: 1, y: 0, filter: "none" });
                return;
            }

            // Initial state
            gsap.set(targets, {
                autoAlpha: 0,
                y: 30,
                // Only apply blur on desktop for performance
                filter: isDesktop ? "blur(4px)" : "none"
            });

            // Animation
            gsap.to(targets, {
                autoAlpha: 1,
                y: 0,
                filter: isDesktop ? "blur(0px)" : "none",
                duration: duration,
                delay: delay,
                stagger: stagger,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        });

        return () => {
            mm.revert(); // Automatically kills animations & clears props
        };
    }, [stagger, delay, duration]);


    return (
        <div ref={el} className={cn(className)}>
            {children}
        </div>
    );
}
