"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

/**
 * Testimonials Carousel
 */
export function Testimonials() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = t("testimonials") as any as Array<{ quote: string, author: string, company: string }>;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonials-container",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            if (testimonials && testimonials.length > 0) {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials]);

    return (
        <section ref={sectionRef} className="py-20 bg-[var(--noda-dark-1)]">
            <div className="max-w-3xl mx-auto px-6 lg:px-12">
                <div className="testimonials-container text-center">
                    {/* Quote Icon */}
                    <div className="mb-6">
                        <svg className="w-10 h-10 mx-auto text-[var(--noda-burgundy)]/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>

                    {/* Quote */}
                    <div className="relative h-32 mb-8">
                        {testimonials.map((testimonial, index) => (
                            <blockquote
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ${index === activeIndex
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    }`}
                            >
                                <p className="text-lg md:text-2xl text-[var(--noda-white)] font-light leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </blockquote>
                        ))}
                    </div>

                    {/* Author */}
                    <div className="mb-8">
                        <p className="text-[var(--noda-gray-200)] font-medium">
                            {testimonials[activeIndex].author}
                        </p>
                        <p className="text-[var(--noda-gray-400)] text-sm">
                            {testimonials[activeIndex].company}
                        </p>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <Button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                variant="ghost"
                                size="icon"
                                className={`w-2 h-2 rounded-full p-0 min-w-0 transition-all duration-300 ${index === activeIndex
                                    ? "bg-[var(--noda-burgundy)] w-6"
                                    : "bg-[var(--noda-dark-4)] hover:bg-[var(--noda-gray-400)]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
