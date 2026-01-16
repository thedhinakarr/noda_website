import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

export const metadata = {
    title: "Success Stories | NODA",
    description: "Case studies and customer testimonials",
};

const caseStudies = [
    {
        title: "European Energy Provider",
        sector: "Utilities",
        result: "35% reduction in energy waste",
        quote: "NODA's platform has revolutionized how we manage our district heating network.",
    },
    {
        title: "Nordic Municipality",
        sector: "Public Sector",
        result: "€2.4M annual savings",
        quote: "The integration was seamless, and the results were immediate.",
    },
    {
        title: "Real Estate Portfolio",
        sector: "Commercial Buildings",
        result: "40% efficiency improvement",
        quote: "We've achieved comfort optimization while significantly cutting costs.",
    },
    {
        title: "Industrial Complex",
        sector: "Manufacturing",
        result: "28% CO₂ reduction",
        quote: "NODA helped us meet our sustainability targets two years ahead of schedule.",
    },
];

export default function SuccessStoriesPage() {
    return (
        <>
            <Navbar />

            {/* Hero */}
            <section className="hero" style={{ minHeight: "60vh" }}>
                <div className="hero-bg">
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(180deg, #1a1a1a 0%, #252525 100%)",
                        }}
                    />
                </div>
                <div className="hero-overlay" style={{ background: "rgba(0,0,0,0.3)" }} />

                <div className="hero-content container">
                    <p className="text-small text-muted mb-4">SUCCESS STORIES</p>
                    <h1 className="heading-display hero-title">
                        See how NODA delivers results
                    </h1>
                    <p className="text-body hero-subtitle">
                        Real outcomes from organizations across industries.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        {caseStudies.map((study, i) => (
                            <div key={i} className="card">
                                <p className="text-small text-muted mb-4">{study.sector}</p>
                                <div className="card-title" style={{ fontSize: "1.5rem", marginBottom: "16px" }}>
                                    {study.title}
                                </div>
                                <p className="card-text mb-6" style={{ fontStyle: "italic" }}>
                                    &ldquo;{study.quote}&rdquo;
                                </p>
                                <div style={{
                                    padding: "12px 16px",
                                    background: "var(--noda-bg)",
                                    display: "inline-block",
                                    fontSize: "14px"
                                }}>
                                    {study.result}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-sm" style={{ background: "var(--noda-bg-alt)" }}>
                <div className="container">
                    <div className="grid-4 text-center">
                        {[
                            { value: "150+", label: "Customers Worldwide" },
                            { value: "€50M+", label: "Customer Savings" },
                            { value: "3MT", label: "CO₂ Reduced Annually" },
                            { value: "99.9%", label: "Platform Uptime" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="heading-2 mb-4">{stat.value}</div>
                                <div className="text-small text-muted">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section text-center">
                <div className="container">
                    <h2 className="heading-2 mb-6">Ready to write your success story?</h2>
                    <Link href="/resources" className="btn btn-primary">
                        Get in touch
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
