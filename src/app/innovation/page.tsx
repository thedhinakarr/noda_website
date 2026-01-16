import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

export const metadata = {
    title: "Innovation | NODA",
    description: "Our vision for the future of thermal energy management",
};

export default function InnovationPage() {
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
                            background: "linear-gradient(180deg, #1a1a1a 0%, #222 100%)",
                        }}
                    />
                </div>
                <div className="hero-overlay" style={{ background: "rgba(0,0,0,0.3)" }} />

                <div className="hero-content container">
                    <p className="text-small text-muted mb-4">INNOVATION</p>
                    <h1 className="heading-display hero-title">
                        Serving the energy sector with a focus on thermal excellence
                    </h1>
                </div>
            </section>

            {/* Vision */}
            <section className="section">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
                        <div>
                            <h2 className="heading-1 mb-6">Our Vision</h2>
                            <p className="text-body text-muted mb-6">
                                Global energy demand is projected to increase by 21% by 2040.
                                We believe the answer lies not in producing more energy, but
                                in using what we have more intelligently.
                            </p>
                            <p className="text-body text-muted">
                                Our AI-driven solutions optimize thermal networks, reduce waste,
                                and help organizations achieve sustainability goals—without
                                compromising comfort or reliability.
                            </p>
                        </div>
                        <div>
                            <h2 className="heading-1 mb-6">Our Approach</h2>
                            <p className="text-body text-muted mb-6">
                                Built by subject matter experts. Refined with customers and partners.
                                NODA combines deep domain expertise in thermal systems with
                                cutting-edge artificial intelligence.
                            </p>
                            <p className="text-body text-muted">
                                The result is a platform that understands the unique challenges
                                of heating and cooling networks, delivering insights that matter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section" style={{ background: "var(--noda-bg-alt)" }}>
                <div className="container">
                    <h2 className="heading-2 mb-12 text-center">What drives us</h2>
                    <div className="grid-3">
                        {[
                            {
                                title: "Efficiency First",
                                desc: "Every decision optimizes for maximum output with minimum waste. We believe efficiency is the foundation of sustainability."
                            },
                            {
                                title: "Customer Focus",
                                desc: "Our solutions are built in close collaboration with energy companies, utilities, and building owners who face real challenges daily."
                            },
                            {
                                title: "Global Impact",
                                desc: "We're working toward a carbon-neutral future, one thermal network at a time. Our technology scales to meet global climate goals."
                            },
                        ].map((value, i) => (
                            <div key={i} className="card">
                                <div className="card-title">{value.title}</div>
                                <p className="card-text">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section text-center">
                <div className="container">
                    <h2 className="heading-2 mb-6">Join us in shaping the future</h2>
                    <p className="text-body text-muted mb-8" style={{ maxWidth: "450px", margin: "0 auto 32px" }}>
                        We&apos;re always looking for talented people who share our vision.
                    </p>
                    <Link href="/resources" className="btn btn-primary">
                        View open positions
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
