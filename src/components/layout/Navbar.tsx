"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

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
                    <Link href="/" className="nav-logo">
                        Noda
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${pathname === link.href ? "opacity-100" : ""}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Button asChild variant="ghost" className="nav-link nav-link-external p-0 h-auto">
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
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn md:hidden"
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
