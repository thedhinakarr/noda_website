"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function PatentedSoftware() {
    const { t } = useLanguage();
    const images = [
        "/images/home/active-demand-response.png",
        "/images/home/ssm-supply-side-management.png",
        "/images/home/screenshot-looker-5.png",
        "/images/home/screenshot-energy-chart-1.png",
        "/images/home/screenshot-energy-chart-2.png",
        "/images/home/screenshot-energy-chart-3.png",
        "/images/home/screenshot-energy-chart-4.png",
        "/images/home/screenshot-energy-chart-5.png",
        "/images/home/screenshot-energy-chart-6.png",
        "/images/home/snip-energy-graph.png",
        "/images/home/energy-graph-comparison.png"
    ];

    return (
        <section className="py-24 bg-[var(--noda-bg-secondary)] border-y border-[var(--noda-border-color)] overflow-hidden">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="text-label text-[var(--noda-burgundy)] mb-4 block">
                        {t("patentedSoftware.label")}
                    </span>
                    <h2 className="text-h1 text-[var(--noda-text-primary)] mb-8">
                        {t("patentedSoftware.title").split("Software")[0]}<span className="gradient-text">Software</span>{t("patentedSoftware.title").split("Software")[1]}
                    </h2>
                    <p className="text-body-lg text-[var(--noda-text-muted)]">
                        {t("patentedSoftware.desc")}
                    </p>
                </div>

                {/* Image Carousel */}
                <div className="mx-auto px-4 md:px-12 relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {images.map((src, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--noda-border-color)] bg-[var(--noda-bg-surface)] group">
                                        <Image
                                            src={src}
                                            alt={`Noda Software Interface ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 bg-[var(--noda-bg-surface)] border-[var(--noda-border-color)] text-[var(--noda-text-primary)] hover:bg-[var(--noda-burgundy)] hover:text-white transition-colors" />
                        <CarouselNext className="right-0 bg-[var(--noda-bg-surface)] border-[var(--noda-border-color)] text-[var(--noda-text-primary)] hover:bg-[var(--noda-burgundy)] hover:text-white transition-colors" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
