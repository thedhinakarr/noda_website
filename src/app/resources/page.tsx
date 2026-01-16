import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

export const metadata = {
    title: "Resources | NODA",
    description: "Documentation, downloads, and contact information",
};

export default function ResourcesPage() {
    return (
        <>
            <Navbar />

            {/* Hero */}
            <section className="hero" style={{ minHeight: "50vh" }}>
                <div className="hero-bg">
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(180deg, #1a1a1a 0%, #222 100%)",
                        }}
                    />
                </div>
                <div className="hero-overlay" style={{ background: "rgba(0,0,0,0.2)" }} />

                <div className="hero-content container">
                    <p className="text-small text-muted mb-4">RESOURCES</p>
                    <h1 className="heading-display hero-title">
                        How can we help?
                    </h1>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid-3 mb-16">
                        <div className="card">
                            <div className="card-title">Documentation</div>
                            <p className="card-text mb-6">
                                Technical guides, API reference, and integration documentation.
                            </p>
                            <a href="#" className="btn-link">View docs →</a>
                        </div>

                        <div className="card">
                            <div className="card-title">Downloads</div>
                            <p className="card-text mb-6">
                                Product sheets, whitepapers, and presentation materials.
                            </p>
                            <a href="#" className="btn-link">Browse downloads →</a>
                        </div>

                        <div className="card">
                            <div className="card-title">Support</div>
                            <p className="card-text mb-6">
                                Get help from our team with technical issues or questions.
                            </p>
                            <a href="#" className="btn-link">Contact support →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section" style={{ background: "var(--noda-bg-alt)" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
                        <div>
                            <h2 className="heading-2 mb-6">Get in touch</h2>
                            <p className="text-body text-muted mb-8">
                                Ready to learn more about NODA? Our team is here to help.
                            </p>

                            <div className="mb-8">
                                <div className="text-small text-muted mb-2">Email</div>
                                <a href="mailto:info@noda.se" className="text-body" style={{ color: "var(--noda-white)" }}>
                                    info@noda.se
                                </a>
                            </div>

                            <div className="mb-8">
                                <div className="text-small text-muted mb-2">Headquarters</div>
                                <p className="text-body">
                                    Malmö, Sweden
                                </p>
                            </div>

                            <div>
                                <div className="text-small text-muted mb-2">Customer Portal</div>
                                <a
                                    href="https://portal.noda.se"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                    style={{ marginTop: "8px" }}
                                >
                                    Access Portal →
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-title mb-6">Request a demo</div>
                            <form>
                                <div className="mb-4">
                                    <label className="text-small text-muted" style={{ display: "block", marginBottom: "8px" }}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px",
                                            background: "var(--noda-bg)",
                                            border: "1px solid var(--noda-border)",
                                            color: "var(--noda-white)",
                                            fontSize: "14px",
                                        }}
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-small text-muted" style={{ display: "block", marginBottom: "8px" }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px",
                                            background: "var(--noda-bg)",
                                            border: "1px solid var(--noda-border)",
                                            color: "var(--noda-white)",
                                            fontSize: "14px",
                                        }}
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="text-small text-muted" style={{ display: "block", marginBottom: "8px" }}>
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px",
                                            background: "var(--noda-bg)",
                                            border: "1px solid var(--noda-border)",
                                            color: "var(--noda-white)",
                                            fontSize: "14px",
                                        }}
                                        placeholder="Your company"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                                    Submit request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
