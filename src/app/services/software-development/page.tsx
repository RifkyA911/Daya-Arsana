import { dmSans2, playfair } from "@/app/layout";
import AnimatedBackground from "../../_components/AnimatedBackground";
import Navbar from "../../_components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const metadata = {
    title: "Daya Arsana - Software Development",
    description: "Daya Arsana Software Development service page with managed ecosystems and enterprise-grade solutions.",
};

const cards = [
    {
        title: "SOFTWARE DEVELOPMENT AUTOMATION",
        description: "Implementing CI/CD pipelines and automated QA (Manual & Automation) to accelerate time-to-market.",
        variant: "primary",
    },
    {
        title: "CUSTOM API DEVELOPMENT",
        description: "Building secure, scalable gateways for ecosystem integration and third-party alliances.",
        variant: "secondary",
    },
    {
        title: "SOFTWARE DEVELOPMENT COSTS",
        description: "Strategizing resource allocation (Intern to Senior levels) to maximize ROI.",
        variant: "primary",
    },
    {
        title: "AGILE CONSULTING SERVICES",
        description: "Transitioning organizations from Waterfall to Agile Methodologies for iterative value delivery.",
        variant: "secondary",
    },
    {
        title: "GDPR CONSULTING IN SOFTWARE",
        description: "Ensuring software architecture complies with global (GDPR) and local (PDP/OJK) data protection mandates.",
        variant: "primary",
    },
];

export default function SoftwareDevelopmentPage() {
    return (
        <div className="relative z-10 xcontainer mx-auto px-4 py-8 lg:py-12 space-y-16">
            <section className="relative lg:min-h-[900px] py-4 bg-red-500">
                <div className="relative lg:mb-[50px] flex flex-col gap-12 lg:flex-row items-start mb-8">
                    <div className="hero-heading">
                        <h1 className="text-5xl lg:text-7xl 2xl:text-8xl leading-[1.1] mb-8">
                            <span className={``}>BESPOKE </span>
                            <span className={`${playfair.className} italic`}>SOFTWARE</span>
                            <br />
                            <span className="font-sans">ENGINEERING &amp;</span>
                            <br />
                            <span className="font-sans">MANAGED</span>
                            <br />
                            <span className={`${playfair.className} italic`}>ECOSYSTEMS</span>
                        </h1>
                    </div>
                    <div className="absolute flex flex-col gap-8 right-[-160px] top-[380px] -translate-x-1/2 -translate-y-1/2 text-xl max-w-[400px]">
                        <div className="span">
                            Our Software Development service is a high-velocity engineering framework focused on delivering customized solutions and managed services.
                        </div>
                        <div className="span">
                            We specialize in building scalable, secure, and high-availability digital products.
                        </div>
                        <Link href={`#features`} rel="noopener noreferrer" className="hidden md:block">
                            <Button className="bg-transparent rounded-none text-dark px-0 py-8 text-base 2k:text-xl hover:bg-transparent hover:text-orange-400 hover:underline hover:underline-offset-4">
                                Discuss with us <ChevronRight size={20} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="space-y-4 text-5xl lg:text-7xl 2xl:text-8xl leading-[1.1] mb-8 text-right">
                    <h3>Governance. <span className={`${playfair.className} italic text-[#FF8D28]`}>Integration.</span></h3>
                    <h3>Impact.</h3>
                </div>
                <div className="absolute flex flex-col gap-8 left-[300px] bottom-[-80px] -translate-x-1/2 -translate-y-1/2 text-xl max-w-[600px]">
                    <div className="span">
                        Every project is governed by the dual-standard framework of ISO 27001 for information security and ISO/IEC 20000-1:2018 for IT service management.
                    </div>
                    <div className="span">
                        We integrate robust backend architectures with intuitive user interfaces to ensure that technology serves as a primary driver for business growth, not a bottleneck.
                    </div>
                </div>
            </section>
            <main className="space-y-24 py-12">
                <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center pt-8">
                    <div className="space-y-8 lg:pr-10">
                        <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Bespoke software engineering</p>
                        <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                            BESPOKE <span className="italic text-orange-500">SOFTWARE</span> ENGINEERING &amp; MANAGED <span className="italic text-orange-500">ECOSYSTEMS</span>
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                            Our Software Development service is a high-velocity engineering framework focused on delivering customized solutions and managed services.
                            We specialize in building scalable, secure, and high-availability digital products.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-orange-500 bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200/50 transition hover:shadow-xl">
                                Back to Home
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-4xl border border-slate-200 bg-white/90 p-10 shadow-2xl shadow-slate-200/40 backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Our approach</p>
                        <p className="mt-6 text-base leading-8 text-slate-700">
                            We integrate robust backend architectures with intuitive user interfaces to ensure that technology serves as a primary driver for business growth, not a bottleneck.
                        </p>
                        <div className="mt-8 space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold">Governance.</h2>
                                <p className="mt-3 text-slate-600">Every project is governed by the dual-standard framework of ISO 27001 for information security and ISO/IEC 20000-1:2018 for IT service management.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Integration.</h2>
                                <p className="mt-3 text-slate-600">We integrate enterprise systems, APIs, and workflows so your ecosystem scales reliably with your business.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Impact.</h2>
                                <p className="mt-3 text-slate-600">Our teams help create measurable digital outcomes across security, productivity, and operational continuity.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-12 lg:grid-cols-[0.9fr_1fr] items-start">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Why Daya Arsana?</p>
                        <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
                            Deep <span className="text-orange-500">Technical</span> Pedigree
                        </h2>
                        <p className="max-w-2xl text-lg leading-8 text-slate-700">
                            Our competitive advantage is rooted in our leadership&apos;s deep technical pedigree. Our founders combine over 12 years of collective experience in IT Project Management, DevOps, and Certified Penetration Testing.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {[
                            {
                                title: "SPECIALIZED LEADERSHIP",
                                description: "Managed by experts ensuring every project is overseen by veterans of the IT consultancy industry.",
                            },
                            {
                                title: "SCALABLE ELITE TALENT",
                                description: "We maintain a diverse manpower quantity and quality to specific project complexity.",
                            },
                            {
                                title: "REGULATORY MASTERY",
                                description: "We are among the few partners already aligning product development with 2026 OJK, PSE, and BSSN mandates.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-200/40">
                                <h3 className="text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
                                <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-10">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Our Software Development Scope</p>
                        <h2 className="text-4xl font-semibold sm:text-5xl">
                            Our Software <span className="text-orange-500">Development</span> Scope
                        </h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="rounded-4xl border border-orange-400/30 bg-orange-50 p-10">
                            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Scope summary</p>
                            <h3 className="mt-6 text-3xl font-semibold text-slate-900">Our Software Development Scope</h3>
                            <p className="mt-5 text-slate-600 leading-8">We combine automation, consulting, and secure architecture to deliver software that aligns with regulatory, operational and strategic goals.</p>
                        </div>

                        <div className="grid gap-6">
                            {cards.map((card) => (
                                <div
                                    key={card.title}
                                    className={`rounded-[28px] p-8 ${card.variant === "primary" ? "bg-orange-500 text-white" : "bg-white text-slate-900 border border-slate-200"}`}
                                >
                                    <h4 className="text-xl font-semibold tracking-tight">{card.title}</h4>
                                    <p className={`mt-4 text-base leading-7 ${card.variant === "primary" ? "text-orange-100" : "text-slate-600"}`}>{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
