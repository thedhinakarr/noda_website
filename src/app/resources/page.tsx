"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

gsap.registerPlugin(ScrollTrigger);

export default function ResourcesPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.from(".resources-hero > *", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Resource cards - use fromTo for reliable animation
            const resourceCards = document.querySelectorAll(".resource-card");
            resourceCards.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                        },
                    }
                );
            });

            // Contact section
            gsap.from(".contact-info > *", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 80%",
                },
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const resources = [
        {
            title: "Documentation",
            desc: "Technical guides, API reference, and integration documentation.",
            link: "View docs",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            title: "Downloads",
            desc: "Product sheets, whitepapers, and presentation materials.",
            link: "Browse downloads",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            ),
        },
        {
            title: "Support",
            desc: "Get help from our team with technical issues or questions.",
            link: "Contact support",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <div ref={pageRef}>
            <Navbar />

            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center bg-[var(--noda-black)]">
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="container resources-hero relative z-10 pt-32">
                    <p className="text-label text-[var(--noda-burgundy)] mb-4">RESOURCES</p>
                    <h1 className="text-h1 text-white">How can we help?</h1>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-24 bg-[var(--noda-dark-1)]">
                <div className="container">
                    <div className="resources-grid grid md:grid-cols-3 gap-6">
                        {resources.map((resource, i) => (
                            <Card key={i} className="resource-card bg-[var(--noda-dark-2)] border-[var(--noda-dark-4)] hover:border-[var(--noda-burgundy)]/30 transition-all duration-300 group cursor-pointer">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--noda-burgundy)]/10 flex items-center justify-center mb-6 text-[var(--noda-burgundy)] group-hover:bg-[var(--noda-burgundy)]/20 transition-colors">
                                        {resource.icon}
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-3">{resource.title}</h3>
                                    <p className="text-[var(--noda-gray-300)] mb-6">{resource.desc}</p>
                                    <span className="text-[var(--noda-burgundy)] text-sm font-medium group-hover:underline">
                                        {resource.link} →
                                    </span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section py-24 bg-[var(--noda-dark-2)]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2 className="text-h1 text-white mb-6">Get in touch</h2>
                            <p className="text-body-lg text-[var(--noda-gray-300)] mb-10">
                                Ready to learn more about NODA? Our team is here to help.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <p className="text-label text-[var(--noda-gray-400)] mb-2">Email</p>
                                    <a href="mailto:info@noda.se" className="text-white hover:text-[var(--noda-burgundy)] transition-colors">
                                        info@noda.se
                                    </a>
                                </div>

                                <div>
                                    <p className="text-label text-[var(--noda-gray-400)] mb-2">Headquarters</p>
                                    <p className="text-white">Malmö, Sweden</p>
                                </div>

                                <div>
                                    <p className="text-label text-[var(--noda-gray-400)] mb-2">Customer Portal</p>
                                    <Button asChild variant="outline" className="mt-2">
                                        <a href="https://portal.noda.se" target="_blank" rel="noopener noreferrer">
                                            Access Portal →
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Demo Request Form */}
                        <Card className="bg-[var(--noda-dark-3)] border-[var(--noda-dark-4)]">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-medium text-white mb-8">Request a demo</h3>
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-[var(--noda-gray-300)]">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Your name"
                                            className="bg-[var(--noda-dark-1)] border-[var(--noda-dark-4)] text-white placeholder:text-[var(--noda-gray-500)] focus:border-[var(--noda-burgundy)]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[var(--noda-gray-300)]">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            className="bg-[var(--noda-dark-1)] border-[var(--noda-dark-4)] text-white placeholder:text-[var(--noda-gray-500)] focus:border-[var(--noda-burgundy)]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-[var(--noda-gray-300)]">Company</Label>
                                        <Input
                                            id="company"
                                            type="text"
                                            placeholder="Your company"
                                            className="bg-[var(--noda-dark-1)] border-[var(--noda-dark-4)] text-white placeholder:text-[var(--noda-gray-500)] focus:border-[var(--noda-burgundy)]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-[var(--noda-gray-300)]">Message (optional)</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your needs..."
                                            rows={4}
                                            className="bg-[var(--noda-dark-1)] border-[var(--noda-dark-4)] text-white placeholder:text-[var(--noda-gray-500)] focus:border-[var(--noda-burgundy)] resize-none"
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full">
                                        Submit request
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
