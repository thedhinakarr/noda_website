"use client";

/**
 * ============================================================================
 * GSAP ScrollTrigger Demo - Scroll-Based Animations
 * ============================================================================
 * 
 * ScrollTrigger is one of GSAP's most powerful plugins.
 * It allows you to trigger animations based on scroll position.
 * 
 * KEY CONCEPTS:
 * -------------
 * 1. trigger: The element that triggers the animation
 * 2. start: When the animation starts (e.g., "top center" = when top of 
 *    trigger hits center of viewport)
 * 3. end: When animation ends
 * 4. scrub: Links animation progress to scroll position (true or number)
 * 5. pin: "Pins" an element in place during scroll
 * 6. markers: Debug markers (remove in production!)
 */

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Register the ScrollTrigger plugin - MUST do this before using!
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimatedCardProps {
    title: string;
    description: string;
    delay?: number;
    badge?: string;
}

export function ScrollAnimatedCard({
    title,
    description,
    delay = 0,
    badge
}: ScrollAnimatedCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /**
             * gsap.from() - Animates FROM the specified values TO current CSS values
             * 
             * This is often more intuitive than gsap.to() because:
             * - Your final state is defined in CSS (the "correct" state)
             * - GSAP animates from the "animated" state to the CSS state
             */
            gsap.from(cardRef.current, {
                // Starting values (will animate TO current CSS values)
                y: 100,           // Start 100px below
                opacity: 0,       // Start invisible
                scale: 0.8,       // Start smaller
                rotation: -5,     // Start slightly rotated

                // Animation properties
                duration: 1,
                delay: delay,

                /**
                 * Easing functions control the "feel" of animations
                 * 
                 * Common eases:
                 * - "power1" through "power4" (higher = more dramatic)
                 * - ".in" = start slow, end fast
                 * - ".out" = start fast, end slow (most natural for UI)
                 * - ".inOut" = slow at both ends
                 * 
                 * Special eases:
                 * - "elastic" = bouncy, springy feel
                 * - "bounce" = bounces at the end
                 * - "back" = slight overshoot
                 */
                ease: "power3.out",

                // ScrollTrigger configuration
                scrollTrigger: {
                    trigger: cardRef.current,
                    /**
                     * start: "trigger viewport"
                     * - First value: position on the TRIGGER element
                     * - Second value: position in the VIEWPORT
                     * 
                     * "top 80%" means: when the TOP of the trigger 
                     * reaches 80% from the top of the viewport
                     */
                    start: "top 80%",

                    /**
                     * toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
                     * 
                     * Actions: "play" | "pause" | "resume" | "reset" | "restart" | 
                     *          "complete" | "reverse" | "none"
                     */
                    toggleActions: "play none none reverse",
                },
            });
        }, cardRef);

        return () => ctx.revert();
    }, [delay]);

    return (
        <Card
            ref={cardRef}
            className="group relative overflow-hidden backdrop-blur-sm bg-card/80 border-primary/20 hover:border-primary/50 transition-colors"
        >
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardHeader className="relative">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                    {badge && (
                        <Badge variant="secondary" className="text-xs">
                            {badge}
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent className="relative">
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}

/**
 * Staggered Animation Demo
 * 
 * STAGGER is one of GSAP's most satisfying features.
 * It automatically delays animations for each element in a group,
 * creating beautiful cascading effects.
 */
export function StaggeredCards() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /**
             * Selecting multiple elements with GSAP
             * 
             * When you pass a selector string to gsap.from/to,
             * it animates ALL matching elements.
             * The stagger property adds delay between each element.
             */
            gsap.from(".stagger-card", {
                y: 60,
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                ease: "back.out(1.7)", // Slight overshoot for playful feel

                /**
                 * stagger can be:
                 * - A number (delay in seconds between each element)
                 * - An object with advanced options:
                 *   - each: delay between elements
                 *   - from: "start" | "end" | "center" | "edges" | "random" | number
                 *   - grid: [rows, cols] for grid-based staggering
                 *   - axis: "x" | "y" for grid stagger direction
                 */
                stagger: {
                    each: 0.15,
                    from: "start",
                },

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        { icon: "⚡", title: "Lightning Fast", desc: "60fps animations, every time" },
        { icon: "🎯", title: "Precise Control", desc: "Frame-perfect timing" },
        { icon: "🔄", title: "Reversible", desc: "Play forward or backward" },
        { icon: "📱", title: "Mobile Ready", desc: "Touch-optimized gestures" },
        { icon: "🎨", title: "Any Property", desc: "Animate anything CSS can do" },
        { icon: "🔌", title: "Plugin System", desc: "Extend with powerful plugins" },
    ];

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
                <div
                    key={i}
                    className="stagger-card group p-6 rounded-2xl bg-gradient-to-br from-card via-card to-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
            ))}
        </div>
    );
}
