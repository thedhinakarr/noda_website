"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function MeetCopilot() {
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-[var(--noda-bg-primary)] overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <span className="text-label text-[var(--noda-burgundy)] mb-4 block">
                            {t("copilot.label")}
                        </span>
                        <h2 className="text-h1 text-[var(--noda-text-primary)] mb-6">
                            {t("copilot.title").split("NODA CoPilot")[0]}<span className="gradient-text">NODA CoPilot</span>{t("copilot.title").split("NODA CoPilot")[1]}
                        </h2>
                        <p className="text-body-lg text-[var(--noda-text-muted)] mb-8 max-w-lg">
                            {t("copilot.desc")}
                        </p>

                        <div className="flex gap-4">
                            <Button asChild size="lg">
                                <Link href="/product">
                                    {t("copilot.explore")}
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/resources">
                                    {t("copilot.bookDemo")}
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right: Visual - Custom Dashboard UI */}
                    <div className="relative">
                        {/* Dashboard Container - Mac Window Style */}
                        <div className="relative rounded-xl overflow-hidden border border-[var(--noda-border-color)] bg-[#0A0A0A] shadow-2xl">
                            {/* Window Header */}
                            <div className="h-12 bg-[#141414] border-b border-[var(--noda-border-color)] flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" /> {/* Red */}
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" /> {/* Yellow */}
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" /> {/* Green */}

                                <div className="ml-4 w-32 h-1.5 bg-[#242424] rounded-full" /> {/* Fake URL bar */}
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-6">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {/* Stat 1: Efficiency */}
                                    <div className="p-4 rounded-lg bg-[#141414] border border-[var(--noda-border-color)]">
                                        <p className="text-xs text-[var(--noda-text-muted)] mb-1">{t("copilot.metrics.efficiency")}</p>
                                        <p className="text-2xl font-normal text-white mb-2">94.2%</p>
                                        <p className="text-xs font-medium text-[#27C93F]">+2.1%</p>
                                    </div>
                                    {/* Stat 2: Savings */}
                                    <div className="p-4 rounded-lg bg-[#141414] border border-[var(--noda-border-color)]">
                                        <p className="text-xs text-[var(--noda-text-muted)] mb-1">{t("copilot.metrics.savings")}</p>
                                        <p className="text-2xl font-normal text-white mb-2">€24K</p>
                                        <p className="text-xs font-medium text-[#27C93F]">+12%</p>
                                    </div>
                                    {/* Stat 3: CO2 Cut */}
                                    <div className="p-4 rounded-lg bg-[#141414] border border-[var(--noda-border-color)]">
                                        <p className="text-xs text-[var(--noda-text-muted)] mb-1">{t("copilot.metrics.co2")}</p>
                                        <p className="text-2xl font-normal text-white mb-2">18T</p>
                                        <p className="text-xs font-medium text-[#27C93F]">+8.4%</p>
                                    </div>
                                </div>

                                {/* Chart Area */}
                                <div className="p-6 rounded-lg bg-[#141414] border border-[var(--noda-border-color)]">
                                    <div className="flex items-end justify-between h-32 gap-2 mt-4">
                                        {/* Bars */}
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[25%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[40%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[30%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[55%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[45%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[65%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[50%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[75%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[60%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[68%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[85%] rounded-sm" />
                                        <div className="w-full bg-[var(--noda-burgundy)] opacity-80 h-[70%] rounded-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glow effect back drop */}
                        <div className="absolute -inset-1 bg-[var(--noda-burgundy)] opacity-10 blur-2xl -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
