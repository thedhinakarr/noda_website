import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    product: [
        { name: "CoPilot", href: "/product" },
        { name: "Platform", href: "/product" },
        { name: "Integrations", href: "/product" },
    ],
    company: [
        { name: "About", href: "/innovation" },
        { name: "News", href: "/resources" },
    ],
    resources: [
        { name: "Case Studies", href: "/success-stories" },
        { name: "Documentation", href: "/resources" },
        { name: "Support", href: "/resources" },
    ],
    legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookies", href: "#" },
    ],
};

export function Footer() {
    const year = new Date().getFullYear();

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
                                className="h-7 w-auto"
                            />
                        </div>
                        <p className="text-small text-muted" style={{ maxWidth: "280px" }}>
                            Intelligent thermal energy systems for a sustainable future.
                        </p>
                    </div>

                    <div>
                        <div className="footer-title">Product</div>
                        {footerLinks.product.map((link) => (
                            <Link key={link.name} href={link.href} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <div className="footer-title">Company</div>
                        {footerLinks.company.map((link) => (
                            <Link key={link.name} href={link.href} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <div className="footer-title">Resources</div>
                        {footerLinks.resources.map((link) => (
                            <Link key={link.name} href={link.href} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <div className="footer-title">Legal</div>
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {year} NODA Intelligent Systems AB</span>
                    <span>Karlshamn, Sweden</span>
                </div>
            </div>
        </footer>
    );
}
