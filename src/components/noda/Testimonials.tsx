"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

/**
 * Testimonials Carousel
 * Elegant quote display with auto-rotation
 */
export function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            quote: "NODA's AI platform has revolutionized how we manage our district heating network. The predictive analytics alone have saved us millions.",
            author: "R&D Lead",
            company: "Engie",
        },
        {
            quote: "The integration was seamless, and the results were immediate. We've seen a 35% improvement in thermal efficiency.",
            author: "Product Manager",
            company: "C4 Energi",
        },
        {
            quote: "Their expertise in thermal systems combined with cutting-edge AI is unmatched in the industry.",
            author: "Chief Operations Officer",
            company: "Umeå Energi",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonials-container", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section ref={sectionRef} className="py-32 bg-[var(--noda-dark-1)]">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <div className="testimonials-container text-center">
                    {/* Quote Icon */}
                    <div className="mb-8">
                        <svg className="w-12 h-12 mx-auto text-[var(--noda-burgundy)]/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>

                    {/* Quote */}
                    <div className="relative h-40 md:h-32 mb-10">
                        {testimonials.map((testimonial, index) => (
                            <blockquote
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ${index === activeIndex
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    }`}
                            >
                                <p className="text-h2 text-white font-light leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </blockquote>
                        ))}
                    </div>

                    {/* Author */}
                    <div className="h-12">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0 absolute"
                                    }`}
                            >
                                <p className="font-medium text-white">{testimonial.author}</p>
                                <p className="text-sm text-[var(--noda-gray-400)]">{testimonial.company}</p>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {testimonials.map((_, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="icon"
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 min-w-0 p-0 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? "bg-[var(--noda-burgundy)] w-6 hover:bg-[var(--noda-burgundy)]"
                                    : "bg-[var(--noda-gray-500)] hover:bg-[var(--noda-gray-400)]"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
