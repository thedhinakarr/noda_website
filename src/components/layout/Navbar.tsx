"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: t("nav.product"), href: "/product" },
        { name: t("nav.innovation"), href: "/innovation" },
        { name: t("nav.successStories"), href: "/success-stories" },
        { name: t("nav.resources"), href: "/resources" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
                <div className="container nav-content">
                    {/* Logo */}
                    <Link href="/" className="nav-logo flex items-center gap-2">
                        <Image
                            src="/NODA-logo-2017-10-13.png"
                            alt="NODA"
                            width={160}
                            height={42}
                            className="h-10 md:h-11 w-auto"
                        />
                    </Link>

                    {/* RIGHT SIDE: Navigation + Actions */}
                    <div className="flex items-center gap-8">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`nav-link ${pathname === link.href ? "opacity-100 font-medium" : "opacity-70"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Button asChild variant="ghost" className="nav-link nav-link-external p-0 h-auto opacity-70 hover:opacity-100">
                                <a
                                    href="https://accounts.noda.se/trust/module.php/core/loginuserpass.php?AuthState=_a41c51b819c572b4172a26a35a15db4ad78b210d71%3Ahttps%3A%2F%2Faccounts.noda.se%2Ftrust%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmypages.noda.se%26RelayState%3D%252F%26cookieTime%3D1768589278"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("nav.portal")}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </a>
                            </Button>

                            <LanguageToggle />
                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Button (Visible on mobile only) */}
                        <div className="flex items-center gap-2 md:hidden">
                            <LanguageToggle />
                            <ThemeToggle />
                            <button
                                className="mobile-menu-btn"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                <div className="mobile-menu-content">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://accounts.noda.se/trust/module.php/core/loginuserpass.php?AuthState=_a41c51b819c572b4172a26a35a15db4ad78b210d71%3Ahttps%3A%2F%2Faccounts.noda.se%2Ftrust%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmypages.noda.se%26RelayState%3D%252F%26cookieTime%3D1768589278"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-nav-link external"
                    >
                        {t("nav.portal")}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}
