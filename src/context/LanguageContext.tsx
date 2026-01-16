"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('language') as Language;
        if (stored && ['en', 'sv', 'da'].includes(stored)) {
            setLanguage(stored);
        }
        setIsLoaded(true);
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (path: string): any => {
        const keys = path.split('.');

        const getValue = (obj: any) => {
            let current = obj;
            for (const key of keys) {
                if (current === undefined || current === null) return undefined;
                current = current[key];
            }
            return current;
        };

        // 1. Try current language
        let value = getValue(translations[language]);

        // 2. Fallback to English
        if (value === undefined && language !== 'en') {
            value = getValue(translations['en']);
        }

        // 3. Return value or path
        if (value === undefined) {
            console.warn(`Translation missing for key: ${path}`);
            return path;
        }

        return value;
    };

    if (!isLoaded) {
        return null; // Or a loading spinner to prevent hydration mismatch
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
