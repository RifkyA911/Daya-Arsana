import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
        <main className="space-y-24 py-12">
            <div className="relative z-10 xcontainer mx-auto px-4 py-8 lg:py-12 space-y-16">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Services</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Software Development</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <section className="relative lg:min-h-[900px] p-4">
                    <div className="relative lg:mb-[50px] flex flex-col gap-4 md:gap-12 lg:flex-row items-start mb-8">
                        <div className="hero-heading">
                            <h1 className="text-5xl lg:text-7xl 2xl:text-8xl leading-[1.1] mb-8">
                                <span className={``}>BESPOKE </span>
                                <span className={`${playfair.className} italic`}>SOFTWARE</span>
                                <br />
                                <span className="font-sans">ENGINEERING </span>
                                <br />
                                <span className="font-sans">&amp; MANAGED</span>
                                <br />
                                <span className={`${playfair.className} italic`}>ECOSYSTEMS</span>
                            </h1>
                        </div>
                        {/* <div className="md:absolute flex flex-col gap-8 md:right-[-160px] md:top-[380px] -translate-x-1/2 -translate-y-1/2 text-sm md:text-xl md:max-w-[400px]"> */}
                        <div className="flex flex-col gap-4">
                            <div className="span">
                                Our Software Development service is a high-velocity engineering framework focused on delivering customized solutions and managed services.
                            </div>
                            <div className="span">
                                We specialize in building scalable, secure, and high-availability digital products.
                            </div>
                            <Link href={`#features`} rel="noopener noreferrer" className="">
                                <Button className="bg-orange-400 w-full rounded-none text-dark px-0 py-4 text-white my-2">
                                    Discuss with us <ChevronRight size={20} className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4 text-4xl leading-[1.1] my-8 md:text-right">
                            <h3>Governance.</h3>
                            <div className="flex gap-2">
                                <h3 className={`${playfair.className} italic text-[#FF8D28]`}>Integration.</h3>
                                <h3>Impact.</h3>
                            </div>
                        </div>
                        <div className="flex flex-col text-2xl text-gray-800 gap-4">
                            <p className="font-extralight">Every project is <span className="font-semibold">governed</span> by the dual-standard framework of <span className="font-semibold">ISO 27001</span> for information security and <span className="font-semibold">ISO/IEC 20000-1:2018</span> for IT service management. </p>
                            <p className="font-light">We <span className="font-semibold">integrate</span> robust backend architectures with intuitive user interfaces to ensure that technology serves as a primary driver for business growth, not a <span className="font-semibold">bottleneck</span>.</p>
                        </div>
                    </div>
                    {/* <div className="absolute flex flex-col gap-8 left-[300px] bottom-[-80px] -translate-x-1/2 -translate-y-1/2 text-xl max-w-[600px]">
                            <div className="span">
                                Every project is governed by the dual-standard framework of ISO 27001 for information security and ISO/IEC 20000-1:2018 for IT service management.
                            </div>
                            <div className="span">
                                We integrate robust backend architectures with intuitive user interfaces to ensure that technology serves as a primary driver for business growth, not a bottleneck.
                            </div>
                    </div> */}
                </section>
                <section className="relative lg:min-h-[900px] p-4">
                    <div className="space-y-4">
                        <h2 className="text-4xl sm:text-5xl text-[#FF8D28] font-medium">
                            Our <span className="text-foreground">Software Development</span> Scope
                        </h2>
                        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="grid items-center align-middle">
                                {cards.map((card) => (
                                    <div
                                        key={card.title}
                                        className={`h-[270px] my-auto p-8 ${card.variant === "primary" ? "bg-[#FF8D28] text-white" : "bg-white text-slate-900 border border-slate-200"}`}
                                    >
                                        <h4 className="text-xl font-medium">{card.title}</h4>
                                        <p className={`mt-8 text-base  ${card.variant === "primary" ? "text-white" : "text-slate-600"}`}>{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
}
