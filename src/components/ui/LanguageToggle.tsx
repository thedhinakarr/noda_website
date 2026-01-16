"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

const languages: { code: Language; name: string; label: string }[] = [
    { code: "en", name: "English", label: "EN" },
    { code: "sv", name: "Svenska", label: "SV" },
    { code: "da", name: "Dansk", label: "DA" },
];

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (code: Language) => {
        setLanguage(code);
        setIsOpen(false);
    };

    const activeLanguage = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 font-medium text-sm transition-colors hover:text-[var(--noda-white)]"
                aria-label="Select language"
            >
                {activeLanguage.label}
            </Button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 py-1 rounded-md bg-card border border-border shadow-lg z-50 animate-in fade-in zoom-in-95 duration-100">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-secondary
                                ${language === lang.code ? "text-[var(--noda-burgundy)] font-medium" : "text-muted-foreground hover:text-foreground"}
                            `}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
