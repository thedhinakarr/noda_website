"use client";

/**
 * ============================================================================
 * GSAP Timeline Demo - Orchestrating Complex Animations
 * ============================================================================
 * 
 * Timelines are GSAP's killer feature for complex animations.
 * 
 * Without timelines, you'd need to manually calculate delays:
 * ```js
 * gsap.to(".a", { x: 100, delay: 0 });
 * gsap.to(".b", { x: 100, delay: 0.5 });  // Manually calculated
 * gsap.to(".c", { x: 100, delay: 1.0 });  // If .a duration changes, this breaks!
 * ```
 * 
 * With timelines, animations are automatically sequenced:
 * ```js
 * const tl = gsap.timeline();
 * tl.to(".a", { x: 100 })
 *   .to(".b", { x: 100 })  // Automatically starts after .a
 *   .to(".c", { x: 100 }); // Automatically starts after .b
 * ```
 */

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function TimelineDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /**
             * Timeline Configuration
             * 
             * paused: true means the timeline won't auto-play
             * repeat: -1 means infinite loops
             * yoyo: true means it plays forward then backward
             */
            tlRef.current = gsap.timeline({
                paused: true,
                defaults: {
                    // These defaults apply to ALL tweens in the timeline
                    duration: 0.5,
                    ease: "power2.inOut",
                },
            });

            // Get our timeline reference
            const tl = tlRef.current;

            /**
             * Building the timeline
             * 
             * Each .to(), .from(), or .fromTo() returns the timeline,
             * allowing method chaining.
             */
            tl
                // First: Fade in the title
                .from(".hero-title", {
                    y: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                })

                // Then: Fade in subtitle (starts automatically after title)
                .from(".hero-subtitle", {
                    y: 20,
                    opacity: 0,
                })

                /**
                 * Position Parameter - The third argument
                 * 
                 * This is where timelines get POWERFUL:
                 * 
                 * No position: Start after previous tween ends
                 * "<": Start at the same time as previous tween
                 * ">": Start at the END of previous tween (same as no position)
                 * "-=0.3": Start 0.3 seconds BEFORE previous tween ends (overlap)
                 * "+=0.5": Start 0.5 seconds AFTER previous tween ends (gap)
                 * "1": Start at absolute time of 1 second
                 * "myLabel": Start at a named label
                 */

                // Stagger in the boxes, overlapping with subtitle
                .from(".timeline-box", {
                    scale: 0,
                    rotation: 180,
                    opacity: 0,
                    stagger: 0.1,
                    ease: "elastic.out(1, 0.5)",
                    duration: 0.8,
                }, "-=0.3") // Start 0.3s before subtitle finishes

                // Final flourish: All boxes pulse
                .to(".timeline-box", {
                    scale: 1.1,
                    duration: 0.2,
                    stagger: 0.05,
                })
                .to(".timeline-box", {
                    scale: 1,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "elastic.out(1, 0.3)",
                });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handlePlay = () => {
        if (tlRef.current) {
            if (isPlaying) {
                // Reverse the timeline smoothly
                tlRef.current.reverse();
            } else {
                // Play from the start
                tlRef.current.play(0);
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleRestart = () => {
        tlRef.current?.restart();
        setIsPlaying(true);
    };

    return (
        <Card className="p-8 bg-gradient-to-br from-background to-muted/30">
            <div ref={containerRef} className="space-y-8">
                {/* Title & Subtitle */}
                <div className="text-center space-y-2">
                    <h2 className="hero-title text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Timeline Magic ✨
                    </h2>
                    <p className="hero-subtitle text-muted-foreground">
                        Click play to see orchestrated animations
                    </p>
                </div>

                {/* Animated Boxes */}
                <div className="flex justify-center gap-4">
                    {["🎯", "⚡", "🎨", "🚀", "💫"].map((emoji, i) => (
                        <div
                            key={i}
                            className="timeline-box w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-2xl shadow-lg border border-primary/30"
                        >
                            {emoji}
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4">
                    <Button onClick={handlePlay} variant={isPlaying ? "destructive" : "default"}>
                        {isPlaying ? "Reverse" : "Play"}
                    </Button>
                    <Button onClick={handleRestart} variant="outline">
                        Restart
                    </Button>
                </div>

                {/* Code explanation */}
                <div className="text-xs text-muted-foreground text-center max-w-md mx-auto">
                    <p>
                        This demo shows a single timeline with 5 sequenced animations.
                        The &quot;-=0.3&quot; position parameter creates smooth overlaps.
                    </p>
                </div>
            </div>
        </Card>
    );
}

/**
 * Interactive Controls Demo
 * 
 * GSAP provides powerful playback controls:
 * - play() / pause() / resume()
 * - reverse() - plays backward
 * - seek(time) - jump to specific time
 * - progress(0-1) - set progress as percentage
 * - timeScale(n) - speed up (>1) or slow down (<1)
 */
export function TimelineControlsDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [progress, setProgress] = useState(0);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tlRef.current = gsap.timeline({ paused: true });

            tlRef.current
                .to(".control-box", {
                    x: "300%",
                    rotation: 360,
                    backgroundColor: "#8b5cf6",
                    borderColor: "#a78bfa",
                    duration: 2,
                    ease: "power1.inOut",
                })
                .to(".control-box", {
                    scale: 1.2,
                    duration: 0.3,
                })
                .to(".control-box", {
                    scale: 1,
                    duration: 0.3,
                });

            // Update progress state as timeline plays
            tlRef.current.eventCallback("onUpdate", () => {
                if (tlRef.current) {
                    setProgress(tlRef.current.progress() * 100);
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) / 100;
        tlRef.current?.progress(value).pause();
        setProgress(parseFloat(e.target.value));
    };

    return (
        <Card className="p-8 bg-gradient-to-br from-muted/50 to-background">
            <div ref={containerRef} className="space-y-6">
                <h3 className="text-xl font-semibold text-center">
                    Scrub the Timeline
                </h3>

                {/* The animated box */}
                <div className="h-20 relative">
                    <div
                        className="control-box absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg bg-primary border-2 border-primary flex items-center justify-center"
                    >
                        <span className="text-primary-foreground font-bold">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>

                {/* Progress slider */}
                <div className="space-y-2">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleProgressChange}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <p className="text-xs text-center text-muted-foreground">
                        Drag to scrub through the animation - just like a video editor!
                    </p>
                </div>

                {/* Playback buttons */}
                <div className="flex justify-center gap-2 flex-wrap">
                    <Button size="sm" onClick={() => tlRef.current?.play()} variant="outline">
                        ▶ Play
                    </Button>
                    <Button size="sm" onClick={() => tlRef.current?.pause()} variant="outline">
                        ⏸ Pause
                    </Button>
                    <Button size="sm" onClick={() => tlRef.current?.reverse()} variant="outline">
                        ◀ Reverse
                    </Button>
                    <Button size="sm" onClick={() => tlRef.current?.restart()} variant="outline">
                        ↺ Restart
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => tlRef.current?.timeScale(2)}
                        variant="outline"
                    >
                        2x Speed
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => tlRef.current?.timeScale(0.5)}
                        variant="outline"
                    >
                        0.5x Speed
                    </Button>
                </div>
            </div>
        </Card>
    );
}
