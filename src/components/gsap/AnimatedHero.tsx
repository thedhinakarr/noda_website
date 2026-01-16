"use client";

/**
 * ============================================================================
 * GSAP Hero Animation - Entrance Animations
 * ============================================================================
 * 
 * Hero sections are the first thing users see.
 * GSAP helps create a stunning first impression with:
 * - Orchestrated entrance animations
 * - Split text effects
 * - Background animations
 * - Parallax effects
 */

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AnimatedHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Main entrance timeline
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            /**
             * Animation Sequence:
             * 1. Background gradient fades in
             * 2. Badge slides down
             * 3. Title words animate in one by one
             * 4. Subtitle fades up
             * 5. Buttons stagger in
             * 6. Floating elements start their loops
             */

            tl
                // Background
                .from(".hero-bg", {
                    opacity: 0,
                    scale: 1.1,
                    duration: 1.5,
                })

                // Badge
                .from(".hero-badge", {
                    y: -30,
                    opacity: 0,
                    duration: 0.6,
                }, "-=1")

                // Title - split into words for stagger effect
                .from(".hero-title .word", {
                    y: 100,
                    opacity: 0,
                    rotationX: -90,
                    stagger: 0.1,
                    duration: 0.8,
                }, "-=0.4")

                // Subtitle
                .from(".hero-subtitle", {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.3")

                // Buttons
                .from(".hero-cta", {
                    y: 20,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.5,
                }, "-=0.3")

                // Stats
                .from(".hero-stat", {
                    scale: 0,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "back.out(2)",
                }, "-=0.3");

            /**
             * Floating Animation
             * 
             * This creates a gentle, continuous floating effect.
             * Using yoyo: true makes it go back and forth.
             * repeat: -1 makes it loop forever.
             */
            gsap.to(".float-element", {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotation: "random(-5, 5)",
                duration: "random(3, 5)",
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                stagger: {
                    each: 0.5,
                    from: "random",
                },
            });

            /**
             * Gradient Animation
             * 
             * GSAP can animate CSS custom properties too!
             */
            gsap.to(".hero-bg", {
                "--gradient-rotation": "360deg",
                duration: 20,
                repeat: -1,
                ease: "none",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Split title into words for animation
    const titleWords = ["Create", "Stunning", "Animations"];

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background */}
            <div
                className="hero-bg absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20"
                style={{
                    ["--gradient-rotation" as string]: "0deg",
                }}
            />

            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="float-element absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
                <div className="float-element absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl" />
                <div className="float-element absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-gradient-to-br from-pink-500/20 to-transparent blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Badge */}
                <Badge className="hero-badge mb-6 px-4 py-1" variant="secondary">
                    ✨ GSAP + React + shadcn/ui
                </Badge>

                {/* Title */}
                <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 perspective-1000">
                    {titleWords.map((word, i) => (
                        <span
                            key={i}
                            className={`word inline-block mr-4 ${i === 1
                                    ? "bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
                                    : ""
                                }`}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {word}
                        </span>
                    ))}
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Learn how to create beautiful, performant animations using GSAP
                    with React components and shadcn/ui design system.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Button size="lg" className="hero-cta">
                        Get Started
                    </Button>
                    <Button size="lg" variant="outline" className="hero-cta">
                        View Examples
                    </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { value: "60fps", label: "Smooth" },
                        { value: "3KB", label: "Core Size" },
                        { value: "10M+", label: "Downloads" },
                    ].map((stat, i) => (
                        <div key={i} className="hero-stat text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
                    <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
                </div>
            </div>
        </div>
    );
}
