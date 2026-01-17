import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: t("footer.links.coPilot"), href: "/product" },
            { name: t("footer.links.platform"), href: "/product" },
            { name: t("footer.links.integrations"), href: "/product" },
        ],
        company: [
            { name: t("footer.links.about"), href: "/innovation" },
            { name: t("footer.links.news"), href: "/resources" },
        ],
        resources: [
            { name: t("footer.links.caseStudies"), href: "/success-stories" },
            { name: t("footer.links.documentation"), href: "/resources" },
            { name: t("footer.links.support"), href: "/resources" },
        ],
        legal: [
            { name: t("footer.links.privacy"), href: "#" },
            { name: t("footer.links.terms"), href: "#" },
            { name: t("footer.links.cookies"), href: "#" },
        ],
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="nav-logo" style={{ marginBottom: "16px" }}>
                            <Image
                                src="/NODA-logo-2017-10-13.png"
                                alt="NODA"
                                width={100}
                                height={26}
                                className="h-15 w-auto"
                            />
                        </div>
                        <p className="text-small text-muted" style={{ maxWidth: "280px" }}>
                            {t("footer.desc")}
                        </p>
                    </div>

                    <div>
                        <div className="footer-title">{t("footer.columns.product")}</div>
                        {footerLinks.product.map((link) => (
                            <Link key={link.name} href={link.href} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <div className="footer-title">{t("footer.columns.company")}</div>
                        {footerLinks.company.map((link) => (
                            <Link key={link.name} href={link.href} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <div className="footer-title">{t("footer.columns.resources")}</div>
                        {footerLinks.resources.map((link) => (
                            <Link key={link.name} href={link.href} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <div className="footer-title">{t("footer.columns.legal")}</div>
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {year} NODA Intelligent Systems AB</span>
                    <span>{t("footer.location")}</span>
                </div>
            </div>
        </footer>
    );
}
