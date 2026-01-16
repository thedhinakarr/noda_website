"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
    { name: "Product", href: "/product" },
    { name: "Innovation", href: "/innovation" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Resources", href: "/resources" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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
                                    href="https://portal.noda.se"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Customer Portal
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </a>
                            </Button>

                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Button (Visible on mobile only) */}
                        <div className="flex items-center gap-2 md:hidden">
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
                        href="https://portal.noda.se"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-nav-link external"
                    >
                        Customer Portal
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}
