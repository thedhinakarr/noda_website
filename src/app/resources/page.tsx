"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ResourcesPage() {
    const { t } = useLanguage();
    const pageRef = useRef<HTMLDivElement>(null);

    // Placeholder Team Data
    // Team Data from Translations
    const team = t("resourcesPage.team") as any as Array<{ name: string; role: string; image: string }>;

    const translatedResources = t("resourcesPage.resources") as any as Array<{ title: string; desc: string; link: string }>;
    const resources = [
        {
            ...translatedResources?.[0], // Documentation
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            ),
            type: "list",
            itemIcon: "arrow",
            items: [
                { label: t("resourcesPage.subItems.apiDocs") || "API Docs", href: "https://docs.noda.se/energyview/api.html" },
                { label: t("resourcesPage.subItems.glossary") || "Glossary", href: "https://docs.noda.se/GLOSSARY.html" }
            ]
        },
        {
            ...translatedResources?.[1], // Downloads
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            ),
            type: "list",
            items: [
                { label: t("resourcesPage.subItems.whitepaper") || "White Paper: Energy Savings", href: "https://noda.se/hubfs/NODA%20Energy%20Saving.pdf?hsLang=en" },
                { label: t("resourcesPage.subItems.caseStudy") || "Case Study: Building Efficiency", href: "https://noda.se/hubfs/Building%20Case%20Study%20A4%20ENG.pdf?hsLang=en" }
            ]
        },
        {
            ...translatedResources?.[2], // Contact Support
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ),
            type: "link",
            link: <a href="mailto:info@noda.se" className="focus:outline-none">{translatedResources?.[2]?.link || "Contact Support"}</a>
        },
    ];

    return (
        <div ref={pageRef} className="bg-[var(--noda-bg-primary)]">
            <Navbar />

            {/* 1. Hero */}
            <section className="relative min-h-[60vh] flex flex-col justify-start pt-24 md:pt-32 bg-[var(--noda-bg-primary)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--noda-bg-primary)]/90 via-[var(--noda-bg-primary)]/60 to-transparent" />
                {/* Animated Grid Background */}
                <div className="absolute inset-0 grid-pattern opacity-[0.15] z-0" />

                <div className="container resources-hero relative z-10 px-6">
                    <div className="max-w-4xl mr-auto text-left">
                        <p className="text-sm font-medium text-[var(--noda-burgundy)] mb-6 tracking-wide uppercase">{t("resourcesPage.hero.label")}</p>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[var(--noda-text-primary)] mb-8 leading-[0.95] tracking-tight">
                            {t("resourcesPage.hero.titlePrefix")} <br /> <span className="text-[var(--noda-burgundy)]">{t("resourcesPage.hero.titleHighlight")}</span>
                        </h1>
                        <div className="max-w-3xl mt-10 space-y-8">
                            <p className="text-xl md:text-2xl text-[var(--noda-text-muted)] font-light leading-relaxed">
                                {t("resourcesPage.hero.desc")}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <p className="text-lg text-[var(--noda-text-primary)] font-medium">
                                    {t("resourcesPage.hero.teamLead")}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. Collage (Visual Section) */}
            <section className="py-24 overflow-hidden">
                <div className="container">
                    <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                        {/* 1. Main Head Office Image (Large) */}
                        <div className="w-full md:col-span-2 md:row-span-2 relative rounded-sm overflow-hidden group min-h-[300px] md:min-h-0">
                            <Image
                                src="/images/resources/netport.jpg"
                                alt="NODA Headquarters"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                <p className="text-[var(--noda-burgundy)] text-xs font-bold tracking-widest uppercase mb-2">{t("resourcesPage.collage.hq")}</p>
                                <h3 className="text-white text-2xl md:text-3xl font-light">{t("resourcesPage.collage.netport")}</h3>
                                <p className="text-white/70 mt-2 text-sm max-w-xs">{t("resourcesPage.collage.netportDesc")}</p>
                            </div>
                        </div>

                        {/* Mobile Wrapper for small cards to keep them side-by-side if desired, or just stack them */}
                        <div className="md:contents">
                            {/* 2. Est. Year (Expanded to fill row) */}
                            <div className="md:col-span-2 bg-[var(--noda-bg-surface)] border border-[var(--noda-border-color)] relative rounded-sm overflow-hidden flex flex-col items-center justify-center p-6 md:p-8 group hover:border-[var(--noda-burgundy)]/30 transition-colors min-h-[200px] md:min-h-0">
                                <span className="text-[var(--noda-burgundy)] font-display text-4xl md:text-6xl mb-2 group-hover:scale-110 transition-transform duration-500">{t("resourcesPage.collage.est")}</span>
                                <span className="text-[var(--noda-text-muted)] text-[10px] md:text-xs uppercase tracking-widest text-center">{t("resourcesPage.collage.estDesc")}</span>
                            </div>
                        </div>

                        {/* 4. Visit Us / Address (Wide) */}
                        <div className="md:col-span-2 bg-[var(--noda-bg-secondary)] border border-[var(--noda-border-color)] relative rounded-sm p-6 md:p-8 flex flex-col justify-between group hover:border-[var(--noda-burgundy)]/30 transition-colors">
                            <div>
                                <h4 className="text-[var(--noda-text-primary)] text-lg md:text-xl font-light mb-4 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[var(--noda-burgundy)] animate-pulse"></span>
                                    {t("resourcesPage.collage.visit")}
                                </h4>
                                <address className="text-[var(--noda-text-muted)] not-italic text-base md:text-lg leading-relaxed">
                                    Biblioteksgatan 4<br />
                                    374 35 Karlshamn<br />
                                    Sweden
                                </address>
                            </div>
                            <div className="flex justify-between items-end mt-6">
                                <a
                                    href="https://maps.google.com/?q=Netport+Science+Park,+Karlshamn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--noda-burgundy)] text-sm font-medium tracking-wide uppercase hover:underline underline-offset-4 flex items-center gap-2"
                                >
                                    {t("resourcesPage.collage.directions")}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Culture */}
            <section className="py-24 bg-[var(--noda-bg-secondary)] border-y border-[var(--noda-border-color)]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("resourcesPage.dna.label")}</span>
                            <h2 className="text-h1 text-[var(--noda-text-primary)] mb-6">
                                {t("resourcesPage.dna.title").split("Purpose")[0]} <br />{t("resourcesPage.dna.title").split("Engineers,")[1]}
                            </h2>
                            <p className="text-body-lg text-[var(--noda-text-muted)] mb-8">
                                {t("resourcesPage.dna.desc")}
                            </p>
                            <div className="space-y-4">
                                {(t("resourcesPage.dna.items") as any[]).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-12 h-px bg-[var(--noda-burgundy)]"></div>
                                        <span className="text-[var(--noda-text-primary)]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] bg-[var(--noda-bg-surface)] border border-[var(--noda-border-color)] group overflow-hidden">
                            <Image
                                src="/images/resources/martin.jpeg"
                                alt="NODA Headquarters - Netport Science Park"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.5 Company Values */}
            <section className="py-24 bg-[var(--noda-bg-primary)] border-b border-[var(--noda-border-color)]">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("resourcesPage.values.label")}</span>
                        <h2 className="text-h1 text-[var(--noda-text-primary)]">{t("resourcesPage.values.title")}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {(t("resourcesPage.values.items") as any[]).map((value, i) => (
                            <div key={i} className="group">
                                <h3 className="text-2xl font-mono text-[var(--noda-burgundy)] mb-4">
                                    {value.tag}
                                </h3>
                                <p className="text-[var(--noda-text-muted)] leading-relaxed text-sm md:text-base">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Team */}
            <section className="py-24 bg-[var(--noda-bg-primary)]">
                <div className="container">
                    <div className="text-center mb-20">
                        <span className="text-label text-[var(--noda-burgundy)] mb-4 block">{t("resourcesPage.teamList.label")}</span>
                        <h2 className="text-h1 text-[var(--noda-text-primary)]">{t("resourcesPage.teamList.title")}</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
                        {(t("resourcesPage.teamList.members") as any[]).map((member, i) => {
                            const images = [
                                "/images/resources/tatiana.jpg",
                                "/images/resources/christian.webp",
                                "/images/resources/charlotta.jpg",
                                "/images/resources/Martin.webp",
                                "/images/resources/karl.jpeg"
                            ];
                            return (
                                <div
                                    key={i}
                                    className="group flex flex-col w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-sm"
                                >
                                    {/* Image Container */}
                                    <div className="aspect-[3/4] bg-[var(--noda-gray-200)] mb-8 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <div className="absolute inset-0 bg-neutral-200" />
                                        <Image
                                            src={images[i]}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-left">
                                        <div className="flex flex-col mb-4 pt-2 border-t border-transparent group-hover:border-[var(--noda-burgundy)] transition-colors duration-500">
                                            <h3 className="text-2xl font-light text-[var(--noda-text-primary)] mb-1 group-hover:text-[var(--noda-burgundy)] transition-colors">
                                                {member.name}
                                            </h3>
                                            <span className="text-xs font-medium tracking-widest uppercase text-[var(--noda-burgundy)]">
                                                {member.role}
                                            </span>
                                        </div>
                                        <p className="text-[var(--noda-text-muted)] text-sm leading-relaxed">
                                            {member.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* 5. Other Resources (Downloads/Docs) */}
            <section className="py-24 bg-[var(--noda-bg-secondary)] border-t border-[var(--noda-border-color)]" >
                <div className="container">
                    <h2 className="text-h1 text-[var(--noda-text-primary)] mb-12">Resources & Downloads</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {resources.map((resource, i) => (
                            <ResourceCard key={i} {...resource} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section - Premium Swiss Layout */}
            <section id="contact" className="contact-section py-32 bg-[var(--noda-bg-primary)] border-t border-[var(--noda-border-color)]">
                <div className="container">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Left: Heading */}
                        <div className="lg:col-span-5">
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium text-[var(--noda-text-primary)] mb-8 leading-[0.9]">
                                {t("resourcesPage.contact.title")}
                            </h2>
                            <p className="text-xl text-[var(--noda-text-muted)] leading-relaxed max-w-sm">
                                {t("resourcesPage.contact.desc")}
                            </p>
                        </div>

                        {/* Right: Contact List */}
                        <div className="lg:col-span-7 flex flex-col justify-end">
                            <div className="border-t border-[var(--noda-border-color)]">
                                {/* Contact Item: Email */}
                                <div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-[var(--noda-border-color)] hover:bg-[var(--noda-bg-surface)] transition-colors px-4 -mx-4">
                                    <div className="mb-6 md:mb-0">
                                        <p className="text-xs font-medium text-[var(--noda-burgundy)] uppercase tracking-widest mb-2">{t("resourcesPage.contact.emailLabel")}</p>
                                        <a href={`mailto:${t("resourcesPage.contact.email")}`} className="text-3xl md:text-4xl font-light text-[var(--noda-text-primary)]">
                                            {t("resourcesPage.contact.email")}
                                        </a>
                                    </div>
                                    <Button asChild variant="outline" className="rounded-full">
                                        <a
                                            href="https://share-eu1.hsforms.com/2iYh-H5SDTuC1O9pyUgRa0w2eujy9?hsCtaAttrib=220908598517"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t("resourcesPage.contact.openForm")}
                                        </a>
                                    </Button>
                                </div>

                                {/* Contact Item: Customer Portal */}
                                <div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-[var(--noda-border-color)] hover:bg-[var(--noda-bg-surface)] transition-colors px-4 -mx-4">
                                    <div className="mb-6 md:mb-0">
                                        <p className="text-xs font-medium text-[var(--noda-burgundy)] uppercase tracking-widest mb-2">{t("resourcesPage.contact.portalLabel")}</p>
                                        <div className="text-3xl md:text-4xl font-light text-[var(--noda-text-primary)]">
                                            {t("resourcesPage.contact.portalTitle")}
                                        </div>
                                    </div>
                                    <Button asChild variant="outline" className="rounded-full">
                                        <a href="https://accounts.noda.se/trust/module.php/core/loginuserpass.php?AuthState=_a41c51b819c572b4172a26a35a15db4ad78b210d71%3Ahttps%3A%2F%2Faccounts.noda.se%2Ftrust%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmypages.noda.se%26RelayState%3D%252F%26cookieTime%3D1768589278" target="_blank" rel="noopener noreferrer">
                                            {t("resourcesPage.contact.accessPortal")}
                                        </a>
                                    </Button>
                                </div>

                                {/* Contact Item: Headquarters */}
                                <div className="group flex flex-col md:flex-row justify-between py-10 border-b border-[var(--noda-border-color)] hover:bg-[var(--noda-bg-surface)] transition-colors px-4 -mx-4">
                                    <div className="mb-6 md:mb-0">
                                        <p className="text-xs font-medium text-[var(--noda-burgundy)] uppercase tracking-widest mb-4">{t("resourcesPage.contact.hqLabel")}</p>
                                        <address className="text-3xl md:text-4xl font-light text-[var(--noda-text-primary)] not-italic mb-8 max-w-md leading-tight">
                                            {t("resourcesPage.contact.hqAddress").split(",").map((line: string, idx: number) => (
                                                <span key={idx}>{line.trim()}{idx < 2 ? <br /> : ""}</span>
                                            ))}
                                        </address>

                                    </div>
                                    <div className="flex items-start">
                                        <Button asChild variant="outline" className="rounded-full mt-2">
                                            <a href="https://maps.google.com/?q=Netport+Science+Park,+Karlshamn" target="_blank" rel="noopener noreferrer">
                                                {t("resourcesPage.contact.viewMap")}
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function ResourceCard({ title, desc, icon, type = "link", link, items, itemIcon = "download" }: any) {
    return (
        <div className="resource-card relative p-8 border border-[var(--noda-border-color)] bg-[var(--noda-bg-surface)] transition-all duration-300 flex flex-col items-start h-full">
            <div className="mb-6 text-[var(--noda-burgundy)]">
                <div className="w-10 h-10">{icon}</div>
            </div>

            <h3 className="text-2xl font-light text-[var(--noda-text-primary)] mb-3">
                {title}
            </h3>

            <p className="text-[var(--noda-text-muted)] mb-8 flex-grow leading-relaxed">
                {desc}
            </p>

            {type === "list" && (
                <div className="w-full mt-auto space-y-3">
                    {items.map((item: any, idx: number) => (
                        <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--noda-text-muted)] font-medium text-sm border-b border-transparent hover:text-[var(--noda-burgundy)] hover:border-[var(--noda-burgundy)] transition-all pb-0.5 w-fit">
                            <span className="truncate">{item.label}</span>
                            <svg className="w-4 h-4 flex-shrink-0 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {itemIcon === "arrow" ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                )}
                            </svg>
                        </a>
                    ))}
                </div>
            )}

            {type === "link" && (
                <div className="flex items-center gap-2 text-[var(--noda-text-muted)] font-medium text-sm border-b border-transparent hover:text-[var(--noda-burgundy)] hover:border-[var(--noda-burgundy)] transition-all pb-0.5 mt-auto w-fit cursor-pointer">
                    {link}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            )}
        </div>
    );
}
