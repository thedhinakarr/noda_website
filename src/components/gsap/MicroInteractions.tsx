"use client";

/**
 * ============================================================================
 * GSAP Hover & Click Animations - Micro-interactions
 * ============================================================================
 * 
 * Micro-interactions are small, subtle animations that:
 * - Provide feedback to user actions
 * - Make interfaces feel alive and responsive
 * - Guide users' attention
 * 
 * GSAP is perfect for these because:
 * - Interruptible: If user hovers in/out quickly, GSAP handles it gracefully
 * - Consistent: Same timing across all browsers
 * - Powerful: Can animate things CSS can't (like SVG morphing)
 */

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Magnetic Button Effect
 * 
 * This creates a button that "follows" your cursor,
 * as if magnetically attracted to it.
 */
export function MagneticButton({ children }: { children: React.ReactNode }) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    /**
     * The key insight here is we're animating TO a calculated position
     * based on the mouse position relative to the button center.
     */
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!buttonRef.current) return;

        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();

        // Calculate center of the button
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center to mouse
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        // Move button towards mouse (scaled down for subtlety)
        gsap.to(button, {
            x: deltaX * 0.3,
            y: deltaY * 0.3,
            duration: 0.3,
            ease: "power2.out",
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!buttonRef.current) return;

        // Spring back to original position
        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
        });
    }, []);

    return (
        <Button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative"
            size="lg"
        >
            {children}
        </Button>
    );
}

/**
 * Glitch Text Effect
 * 
 * Creates a cyberpunk-style glitch effect on hover.
 * Uses GSAP's ability to animate CSS custom properties.
 */
export function GlitchText({ text }: { text: string }) {
    const textRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const handleMouseEnter = useCallback(() => {
        if (!textRef.current) return;

        // Kill any existing animation
        tlRef.current?.kill();

        // Create a glitch timeline
        tlRef.current = gsap.timeline();

        // Rapid glitch effect
        for (let i = 0; i < 5; i++) {
            tlRef.current
                .to(textRef.current, {
                    x: gsap.utils.random(-5, 5),
                    skewX: gsap.utils.random(-10, 10),
                    filter: `hue-rotate(${gsap.utils.random(0, 360)}deg)`,
                    duration: 0.05,
                })
                .to(textRef.current, {
                    x: gsap.utils.random(-3, 3),
                    skewX: gsap.utils.random(-5, 5),
                    duration: 0.05,
                });
        }

        // Return to normal
        tlRef.current.to(textRef.current, {
            x: 0,
            skewX: 0,
            filter: "hue-rotate(0deg)",
            duration: 0.2,
            ease: "power2.out",
        });
    }, []);

    return (
        <div
            ref={textRef}
            onMouseEnter={handleMouseEnter}
            className="text-4xl font-bold cursor-pointer select-none bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
            {text}
        </div>
    );
}

/**
 * Bouncing Card on Click
 * 
 * Demonstrates using gsap.to() with ease functions
 * to create playful bounce effects.
 */
export function BouncyCard({ children, title }: { children: React.ReactNode; title: string }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleClick = useCallback(() => {
        if (!cardRef.current) return;

        /**
         * gsap.fromTo() - Specify BOTH start and end values
         * 
         * Useful when you want complete control over the animation,
         * rather than relying on current CSS state.
         */
        gsap.fromTo(
            cardRef.current,
            // From values
            { scale: 0.95 },
            // To values
            {
                scale: 1,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)", // Bouncy!
            }
        );
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (!cardRef.current) return;

        gsap.to(cardRef.current, {
            y: -8,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            duration: 0.3,
            ease: "power2.out",
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!cardRef.current) return;

        gsap.to(cardRef.current, {
            y: 0,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            duration: 0.3,
            ease: "power2.out",
        });
    }, []);

    return (
        <Card
            ref={cardRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer transition-colors hover:border-primary/50"
        >
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}

/**
 * Ripple Button Effect
 * 
 * Creates a Material Design-style ripple effect on click.
 * This demonstrates creating and animating DOM elements dynamically.
 */
export function RippleButton({ children }: { children: React.ReactNode }) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = useCallback((e: React.MouseEvent) => {
        if (!buttonRef.current) return;

        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();

        // Calculate click position relative to button
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create ripple element
        const ripple = document.createElement("span");
        ripple.className = "absolute rounded-full bg-white/30 pointer-events-none";
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        button.appendChild(ripple);

        // Animate the ripple
        gsap.fromTo(
            ripple,
            {
                width: 0,
                height: 0,
                opacity: 1,
                x: 0,
                y: 0,
            },
            {
                width: 200,
                height: 200,
                x: -100, // Center the ripple
                y: -100,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => {
                    // Clean up the ripple element
                    ripple.remove();
                },
            }
        );
    }, []);

    return (
        <Button
            ref={buttonRef}
            onClick={handleClick}
            className="relative overflow-hidden"
            size="lg"
        >
            {children}
        </Button>
    );
}

/**
 * Interactive Showcase Component
 * 
 * Combines all the micro-interactions in one demo section.
 */
export function MicroInteractionsShowcase() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Micro-interactions</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Small animations that make your UI feel alive. Try hovering and clicking!
                </p>
            </div>

            {/* Glitch Text Demo */}
            <div className="flex justify-center">
                <GlitchText text="HOVER FOR GLITCH" />
            </div>

            {/* Button Demos */}
            <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>Magnetic Button ✨</MagneticButton>
                <RippleButton>Click for Ripple 💧</RippleButton>
            </div>

            {/* Card Demos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BouncyCard title="Click Me!">
                    <p className="text-sm text-muted-foreground">
                        Click this card to see the bounce animation. The elastic ease creates a playful feel.
                    </p>
                </BouncyCard>
                <BouncyCard title="Hover Effect">
                    <p className="text-sm text-muted-foreground">
                        Watch how the card lifts up on hover with a smooth shadow transition.
                    </p>
                </BouncyCard>
                <BouncyCard title="GSAP Power">
                    <p className="text-sm text-muted-foreground">
                        These effects would need complex CSS - GSAP makes them simple!
                    </p>
                </BouncyCard>
            </div>
        </div>
    );
}
