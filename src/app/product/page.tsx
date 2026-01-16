import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

export const metadata = {
    title: "Product | NODA",
    description: "NODA CoPilot - AI-powered thermal energy management platform",
};

export default function ProductPage() {
    return (
        <>
            <Navbar />

            {/* Hero */}
            <section className="hero" style={{ minHeight: "70vh" }}>
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
                    <p className="text-small text-muted mb-4">PRODUCT</p>
                    <h1 className="heading-display hero-title">
                        Meet NODA CoPilot
                    </h1>
                    <p className="text-body hero-subtitle">
                        Advanced AI analytics for thermal energy optimization.
                        Transform complex operational data into actionable insights.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="container">
                    <div className="grid-3 mb-16">
                        {[
                            {
                                title: "Real-time Optimization",
                                desc: "AI continuously analyzes and optimizes your thermal network performance, reducing energy waste and costs."
                            },
                            {
                                title: "Predictive Maintenance",
                                desc: "Anticipate equipment failures before they happen with machine learning-powered diagnostics."
                            },
                            {
                                title: "Carbon Tracking",
                                desc: "Monitor and report on CO₂ emissions with automated sustainability dashboards."
                            },
                        ].map((feature, i) => (
                            <div key={i} className="card">
                                <div className="card-title">{feature.title}</div>
                                <p className="card-text">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section" style={{ background: "var(--noda-bg-alt)" }}>
                <div className="container">
                    <h2 className="heading-2 mb-12">How it works</h2>
                    <div className="grid-3">
                        {[
                            { num: "01", title: "Connect", desc: "Integrate with your existing infrastructure and data sources seamlessly." },
                            { num: "02", title: "Monitor", desc: "Real-time visibility across your entire thermal network in one dashboard." },
                            { num: "03", title: "Optimize", desc: "AI-powered decisions for maximum efficiency and cost reduction." },
                        ].map((step, i) => (
                            <div key={i}>
                                <div className="text-muted mb-4" style={{ fontSize: "32px", fontWeight: 200 }}>{step.num}</div>
                                <div className="heading-3 mb-4">{step.title}</div>
                                <p className="text-small text-muted">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Partners */}
            <section className="section">
                <div className="container text-center">
                    <p className="text-small text-muted mb-8">TRUSTED BY INDUSTRY LEADERS</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap", opacity: 0.5 }}>
                        {["VEOLIA", "ENGIE", "SIEMENS", "ABB", "E.ON"].map((partner) => (
                            <span key={partner} style={{ fontSize: "18px", fontWeight: 300, letterSpacing: "0.1em" }}>
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section text-center" style={{ background: "var(--noda-bg-alt)" }}>
                <div className="container">
                    <h2 className="heading-2 mb-6">See CoPilot in action</h2>
                    <p className="text-body text-muted mb-8" style={{ maxWidth: "400px", margin: "0 auto 32px" }}>
                        Schedule a demo with our team to learn how CoPilot can work for you.
                    </p>
                    <Link href="/resources" className="btn btn-primary">
                        Request a demo
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
