import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero" style={{ alignItems: "flex-start" }}>
                <div className="hero-bg">
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                        }}
                    />
                </div>
                <div className="hero-overlay" />

                <div className="hero-content container" style={{ paddingTop: "180px" }}>
                    <h1 className="heading-display hero-title">
                        We are dedicated to thermal excellence
                    </h1>
                    <p className="text-body hero-subtitle">
                        AI-driven energy management solutions for smart heating and cooling.
                        Unmatched precision and control.
                    </p>
                    <Link href="/product" className="btn btn-primary">
                        Learn about Noda
                    </Link>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section" style={{ borderBottom: "1px solid var(--noda-border)" }}>
                <div className="container">
                    <div className="grid-4">
                        {[
                            { value: "20+", label: "Years of Excellence" },
                            { value: "15K+", label: "Connected Systems" },
                            { value: "40%", label: "Efficiency Gains" },
                            { value: "3MT", label: "CO₂ Reduced Annually" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="heading-1" style={{ marginBottom: "8px" }}>{stat.value}</div>
                                <div className="text-small text-muted">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                        <div>
                            <h2 className="heading-1 mb-6">
                                Intelligent thermal energy management
                            </h2>
                            <p className="text-body text-muted mb-8">
                                NODA provides AI-driven solutions for smart heating and cooling systems.
                                We help energy companies, utilities, and building owners optimize their
                                thermal networks for maximum efficiency and sustainability.
                            </p>
                            <Link href="/product" className="btn btn-secondary">
                                Explore our platform
                            </Link>
                        </div>
                        <div className="card">
                            <div className="card-title">NODA CoPilot</div>
                            <p className="card-text mb-6">
                                Our flagship AI assistant for thermal energy optimization.
                                Real-time insights, predictive maintenance, and automated control.
                            </p>
                            <Link href="/product" className="btn-link">
                                Learn more →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Areas */}
            <section className="section" style={{ background: "var(--noda-bg-alt)" }}>
                <div className="container">
                    <h2 className="heading-2 mb-12 text-center">Application Areas</h2>
                    <div className="grid-4">
                        {[
                            { title: "District Heating", desc: "Optimize large-scale thermal networks" },
                            { title: "Building Clusters", desc: "Smart energy for campuses and complexes" },
                            { title: "Energy Providers", desc: "Solutions for utilities and ESCOs" },
                            { title: "Industrial", desc: "Manufacturing thermal optimization" },
                        ].map((area, i) => (
                            <div key={i} className="card">
                                <div className="card-title">{area.title}</div>
                                <p className="card-text">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section text-center">
                <div className="container">
                    <h2 className="heading-1 mb-6">Ready for smarter energy?</h2>
                    <p className="text-body text-muted mb-8" style={{ maxWidth: "500px", margin: "0 auto 32px" }}>
                        Let&apos;s discuss how NODA can transform your thermal energy management.
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                        <Link href="/resources" className="btn btn-primary">
                            Get in touch
                        </Link>
                        <Link href="/success-stories" className="btn btn-secondary">
                            View case studies
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
