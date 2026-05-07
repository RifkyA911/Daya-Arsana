
import { dmSans2, playfair } from "@/app/layout";
import AnimatedBackground from "../../_components/AnimatedBackground";
import Navbar from "../../_components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Award, Binoculars, Boxes, Bug, CalendarDays, ChevronRight, Code2, FileText, Gem, Infinity, Layers3, Shield, ShieldCheck, Target, UserPlus, Users, Wrench } from "lucide-react";
import CTA from "@/app/_components/CTA";
import Footer from "@/app/_components/Footer";

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
        <>
            <main className="space-y-24 pb-12">
                <div className="relative z-10 xcontainer mx-auto px-2 py-8 lg:py-12 space-y-16">
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
                            <div className="h-full md:h-[700px] md:w-[440px] flex flex-col gap-4 md:gap-8 md:justify-center ">
                                <div className="span">
                                    Our Software Development service is a high-velocity engineering framework focused on delivering customized solutions and managed services.
                                </div>
                                <div className="span">
                                    We specialize in building scalable, secure, and high-availability digital products.
                                </div>
                                <Link href={`#features`} rel="noopener noreferrer" className="md:p-0">
                                    <Button className="bg-orange-400 w-full md:bg-transparent md:w-auto md:p-0 md:text-black md:font-semibold rounded-none text-dark px-0 py-4 text-white my-2 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                                        Discuss with us <ChevronRight size={20} className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="space-y-4 text-4xl leading-[1.1] my-8 md:text-[96px]">
                                <div className="md:justify-end w-full flex gap-2 ">
                                    <h3>Governance.</h3>
                                    <h3 className={`hidden md:block ${playfair.className} italic text-[#FF8D28]`}>Integration.</h3>
                                </div>
                                <div className="md:justify-end flex gap-2 ">
                                    <h3 className={`block md:hidden ${playfair.className} italic text-[#FF8D28]`}>Integration.</h3>
                                    <h3 className={`text-right`}>Impact.</h3>
                                </div>
                            </div>
                            <div className="flex flex-col text-2xl md:text-xl text-gray-800 gap-4 w-full md:w-[680px]">
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

                    <section className="relative lg:min-h-[900px] p-4 flex flex-col justify-center font-sans">
                        <div className="max-w-7xl mx-auto w-full py-12">
                            {/* Header Content */}
                            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
                                <div className="max-w-xl">
                                    <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">
                                        WHY <span className="text-[#FF8D28]">DAYA ARSANA ?</span>
                                    </p>
                                    <h2 className="text-5xl lg:text-7xl font-semibold text-gray-900 leading-tight">
                                        Deep <span className="text-[#FF8D28]">Technical</span> <br /> Pedigree
                                    </h2>
                                </div>

                                <div className="max-w-md lg:mt-12">
                                    <p className="text-gray-600 leading-relaxed">
                                        Our competitive <strong className="text-gray-900">advantage</strong> is rooted in our leadership's deep technical pedigree.
                                        Our founders combine over 12 years of collective experience in
                                        <span className="font-bold text-gray-900"> IT Project Management, DevOps</span>, and
                                        <span className="font-bold text-gray-900"> Certified Penetration Testing</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Feature Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300 rounded-sm overflow-hidden">

                                {/* Card 1 */}
                                <div className="bg-white p-8 lg:p-12 border-b md:border-b-0 md:border-r border-gray-300 hover:bg-gray-50 transition-colors">
                                    <Award className="w-8 h-8 mb-6 text-[#FF8D28]" />
                                    <h4 className="text-lg font-bold tracking-tight text-gray-900 uppercase mb-4">
                                        Specialized Leadership
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Managed by experts ensuring every project is overseen by veterans of the IT consultancy industry.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white p-8 lg:p-12 border-b md:border-b-0 md:border-r border-gray-300 hover:bg-gray-50 transition-colors">
                                    <Users className="w-8 h-8 mb-6 text-[#FF8D28]" />
                                    <h4 className="text-lg font-bold tracking-tight text-gray-900 uppercase mb-4">
                                        Scalable Elite Talent
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We maintain a diverse manpower quantity and quality to specific project complexity.
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white p-8 lg:p-12 hover:bg-gray-50 transition-colors">
                                    <Shield className="w-8 h-8 mb-6 text-[#FF8D28]" />
                                    <h4 className="text-lg font-bold tracking-tight text-gray-900 uppercase mb-4">
                                        Regulatory Mastery
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We are among the few partners already aligning product development with 2026 OJK, PSE, and BSSN mandates.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="relative lg:min-h-[900px] p-4 flex items-center">
                        <div className="max-w-7xl mx-auto w-full">
                            <div className="grid grid-cols-1 md:grid-cols-3 border-collapse">
                                <div className="flex items-end md:items-center py-8 md:p-0 h-[350px] ">
                                    <h2 className="text-3xl md:text-5xl font-medium leading-tight uppercase">
                                        <span className="text-[#FF8D28]">Our</span> <span className="text-slate-900">Software</span><br />
                                        <span className="text-slate-900 ">Development</span><br />
                                        <span className="text-[#FF8D28]">Scope</span>
                                    </h2>
                                </div>

                                <div className="bg-[#FF8D28] text-white p-10 flex flex-col justify-center h-[350px]">
                                    <h4 className="text-xl font-bold uppercase mb-4 leading-tight">Software Development Automation</h4>
                                    <p className="text-sm opacity-90 leading-relaxed">
                                        Implementing CI/CD pipelines and automated QA (Manual & Automation) to accelerate time-to-market.
                                    </p>
                                </div>

                                <div className="bg-white text-slate-900 p-10 flex flex-col justify-center h-[350px] border-b md:border-b-0 border-slate-100">
                                    <h4 className="text-xl font-bold uppercase mb-4 leading-tight">Custom API Development</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Building secure, scalable gateways for ecosystem integration and third-party alliances.
                                    </p>
                                </div>

                                <div className="bg-[#FF8D28] text-white p-10 flex flex-col justify-center h-[350px]">
                                    <h4 className="text-xl font-bold uppercase mb-4 leading-tight">Software Development Costs</h4>
                                    <p className="text-sm opacity-90 leading-relaxed">
                                        Strategizing resource allocation (Intern to Senior levels) to maximize ROI.
                                    </p>
                                </div>

                                <div className="bg-white text-slate-900 p-10 flex flex-col justify-center h-[350px] border-b md:border-b-0 border-slate-100">
                                    <h4 className="text-xl font-bold uppercase mb-4 leading-tight">Agile Consulting Services</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Transitioning organizations from Waterfall to Agile Methodologies for iterative value delivery.
                                    </p>
                                </div>

                                <div className="bg-[#FF8D28] text-white p-10 flex flex-col justify-center h-[350px]">
                                    <h4 className="text-xl font-bold uppercase mb-4 leading-tight">GDPR Consulting in Software</h4>
                                    <p className="text-sm opacity-90 leading-relaxed">
                                        Ensuring software architecture complies with global (GDPR) and local (PDP/OJK) data protection mandates.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="relative lg:min-h-[900px] p-4">
                        <div className="max-w-7xl mx-auto w-full space-y-4 my-8 ">
                            <h3 className="text-2xl sm:text-5xl text-[#FF8D28] font-medium">
                                How We <span className="text-foreground">Work</span>
                            </h3>
                            <div className="flex flex-col">
                                <h2 className="text-4xl sm:text-5xl text-[#FF8D28] font-medium">
                                    Agile <span className="text-foreground"> Mastery.</span>
                                </h2>
                                <h2 className="text-4xl sm:text-5xl text-[#FF8D28] font-medium">
                                    Iterative <span className="text-foreground">Value</span>.
                                </h2>
                            </div>
                            <div className="flex flex-col text-base text-gray-800 gap-4">
                                <p className="font-extralight">We employ a rigorous <span className="font-semibold">Agile Methodology</span> across the entire development continuum to ensure <span className="font-semibold">transparency</span> and <span className="font-semibold">iterative</span> value delivery</p>
                            </div>
                            <div className="relative w-[340px] overflow-hidden bg-[#f7931e] px-4 py-6 ">
                                {/* 01 */}
                                <div className="mb-8 flex items-start gap-5">
                                    <h2 className="px-4 text-[28px] leading-none font-light text-white">
                                        01.
                                    </h2>

                                    <div>
                                        <h3 className="text-[18px] leading-[1.6] font-medium text-white">
                                            Pre–Development
                                        </h3>

                                        <p className="text-[18px] leading-[1.6] font-medium text-white">
                                            (Discovery & <br />
                                            Architecture)
                                        </p>
                                    </div>
                                </div>

                                {/* 02 */}
                                <div className="mb-8 flex items-start gap-5">
                                    <h2 className="px-4 text-[28px] leading-none font-light text-white">
                                        02.
                                    </h2>

                                    <div>
                                        <h3 className="text-[18px] leading-[1.6] font-medium text-white">
                                            Development
                                        </h3>

                                        <p className="text-[18px] leading-[1.6] font-medium text-white">
                                            (Sprints & CI/CD)
                                        </p>
                                    </div>
                                </div>

                                {/* 03 */}
                                <div className="mb-10 flex items-start gap-5">
                                    <h2 className="px-4 text-[28px] leading-none font-light text-white">
                                        03.
                                    </h2>

                                    <div>
                                        <h3 className="text-[18px] leading-[1.6] font-medium text-white">
                                            Quality
                                        </h3>

                                        <p className="text-[18px] leading-[1.6] font-medium text-white">
                                            Assurance (QA)
                                        </p>
                                    </div>
                                </div>

                                {/* White Box */}
                                <div className="bg-[#f5f5f5] px-4 pt-5 pb-8">
                                    {/* 04 */}
                                    <div className="mb-8 flex items-start gap-5">
                                        <h2 className="text-[28px] leading-none font-light text-[#f7931e]">
                                            04.
                                        </h2>

                                        <div>
                                            <h3 className="text-[16px] leading-[1.6] font-medium text-[#f7931e]">
                                                Post–Development
                                            </h3>

                                            <p className="text-[16px] leading-[1.6] font-medium text-[#f7931e]">
                                                (Managed Services & <br />
                                                Support):
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 1 */}
                                    <div className="mb-6 flex items-start gap-4">
                                        <Binoculars className="mt-1 h-5 w-5 shrink-0 text-[#555]" />

                                        <p className="text-[14px] leading-[1.8] text-[#555]">
                                            Continuous monitoring based on ISO/IEC 20000-1:2018.
                                        </p>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-start gap-4">
                                        <Wrench className="mt-1 h-5 w-5 shrink-0 text-[#555]" />

                                        <p className="text-[14px] leading-[1.8] text-[#555]">
                                            Regular security patching, performance tuning, and adaptive
                                            maintenance.
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Glow */}
                                {/* <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white/80 to-transparent" /> */}
                            </div>
                        </div>
                    </section>
                    <section className="relative p-4 lg:p-10 font-sans">
                        <div className="mx-auto max-w-7xl">

                            {/* HEADER SECTION (Luar Box Orange) */}
                            <div className="mb-12 lg:flex lg:items-end lg:justify-between">
                                <div>
                                    <p className="mb-4 text-[20px] text-[#2d2d2d]">
                                        Our <span className="text-[#f7931e]">Edge</span>
                                    </p>
                                    <h2 className="text-[32px] font-bold leading-[1.1] text-[#2d2d2d] lg:text-[48px]">
                                        Building Future–Proof
                                        <br />
                                        Systems, <span className="text-[#f7931e]">Beyond Code</span>
                                    </h2>
                                </div>
                                <p className="max-w-[400px] text-[16px] leading-[1.8] text-[#555] lg:mb-2">
                                    We follow <span className="font-semibold">best practices</span> at every stage of development, ensuring that each step is taken with <span className="font-semibold">precision</span> and care.
                                </p>
                            </div>

                            {/* CONTAINER UTAMA (ORANGE) */}
                            <div className="relative overflow-hidden rounded-[15px] bg-[#f7931e] px-6 py-12 lg:px-16 lg:py-20">
                                {/* Background Ornamen Lingkaran */}
                                <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/10" />
                                <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-white/10" />

                                {/* --- BAGIAN 1: COMMON INDUSTRY PROBLEMS --- */}
                                <div className="relative z-10 mb-20 text-center">
                                    <h3 className="mb-4 text-[32px] font-bold text-white lg:text-[42px]">Common Industry Problems We Solve</h3>
                                    <p className="mb-10 text-white/90">Without integrated oversight, businesses often encounter these critical issues</p>

                                    {/* Row 3 Card Putih */}
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                        {[
                                            { title: "Documentation Crisis", desc: "Systems become impossible to upgrade due to lack of ISO-standard documentation, creating technical debt.", icon: "📄" },
                                            { title: "Compliance Failures", desc: "Products fail BSSN or OJK audits because security was treated as an afterthought rather than core design.", icon: "🛡️" },
                                            { title: "Knowledge Loss", desc: "High turnover in freelance teams leads to lost institutional knowledge and project continuity issues.", icon: "📁" }
                                        ].map((item, i) => (
                                            <div key={i} className="rounded-[8px] bg-white p-6 text-left shadow-md">
                                                <div className="mb-4 text-2xl opacity-50">{item.icon}</div>
                                                <h4 className="mb-3 font-bold text-[#ff6b6b]">{item.title}</h4>
                                                <p className="text-sm leading-relaxed text-[#555]">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* --- BAGIAN 2: OUR COMPREHENSIVE SOLUTION --- */}
                                <div className="relative z-10 mb-10 text-center">
                                    <h3 className="mb-4 text-[32px] font-bold text-white lg:text-[42px]">Our Comprehensive Solution</h3>
                                    <p className="mb-10 text-white/90">Bridging the gap between rapid AI-driven deployment and sustained operational security</p>

                                    {/* Row 2 Card Besar */}
                                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                        {/* Card AI Efficiency (Putih) */}
                                        <div className="flex flex-col rounded-[12px] bg-white p-8 text-left shadow-lg">
                                            <div className="mb-6 flex items-center gap-3">
                                                <span className="text-2xl">⚙️</span>
                                                <h4 className="text-[24px] font-bold text-[#2d2d2d]">AI–Driven Efficiency</h4>
                                            </div>
                                            <p className="mb-8 text-[#555]">Unlike traditional consultancies, we integrate AI into our development workflow. This results in optimized source code and reduced long-term maintenance costs.</p>
                                            <div className="mt-auto rounded-[8px] border-l-[6px] border-[#f7931e] bg-[#fef1e3] p-6">
                                                <span className="text-[48px] font-black text-[#f7931e]">40%</span>
                                                <p className="font-bold text-[#2d2d2d]">Faster Deployment</p>
                                                <p className="text-xs text-[#777]">Cycles Optimization</p>
                                            </div>
                                        </div>

                                        {/* Card The Gap Protection (Orange Gelap) */}
                                        <div className="flex flex-col rounded-[12px] bg-[#cc7b14]/50 p-8 text-left text-white backdrop-blur-sm">
                                            <div className="mb-6 flex items-center gap-3">
                                                <span className="text-2xl">🛡️</span>
                                                <h4 className="text-[24px] font-bold">The "Gap" Protection</h4>
                                            </div>
                                            <p className="mb-8 text-white/90">Unlike competitors who exit post-deployment, we provide comprehensive end-to-end lifecycle management.</p>
                                            <div className="mt-auto rounded-[8px] border-l-[6px] border-white bg-[#d8841a] p-6 text-white">
                                                <span className="text-[48px] font-black leading-none">100%</span>
                                                <p className="font-bold">Coverage</p>
                                                <p className="text-xs opacity-80 uppercase tracking-widest">sustained success</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* --- BAGIAN 3: LIFECYCLE PARTNERSHIP (FULL WIDTH) --- */}
                                <div className="relative z-10 flex flex-col gap-8 rounded-[12px] bg-[#cc7b14]/50 p-8 lg:flex-row lg:items-center lg:justify-between">
                                    <div className="lg:max-w-md">
                                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/70">Integrated Oversight</p>
                                        <h4 className="mb-6 text-[36px] font-bold leading-tight text-white">Lifecycle Partnership Model</h4>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f7931e] text-[32px] text-white shadow-lg">∞</div>
                                    </div>

                                    <div className="lg:max-w-xl">
                                        <p className="mb-8 text-white/90">Our model ensures seamless continuity, combining dedicated resource management with a surplus-based scaling strategy to eliminate delivery gaps.</p>
                                        <div className="grid grid-cols-1 gap-4">
                                            {[
                                                { icon: "↻", text: "Continuous Delivery Oversight" },
                                                { icon: "🛡️", text: "Proactive Risk Mitigation" },
                                                { icon: "↗", text: "Surplus–Based Scaling" }
                                            ].map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 rounded-[8px] bg-white/10 p-3 text-white">
                                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-[#f7931e] text-sm">{feature.icon}</span>
                                                    <span className="text-xs font-medium leading-tight">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="relative p-4 lg:p-20 font-sans">
                        <div className="max-w-7xl mx-auto w-full">

                            {/* HEADER: Kiri (Title) & Kanan (Desc) */}
                            <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                                <div>
                                    <p className="mb-4 text-[20px] font-medium text-[#2d2d2d]">
                                        <span className="text-[#f7931e]">Bussiness</span> Context
                                    </p>
                                    <h2 className="text-[36px] lg:text-[48px] font-bold leading-[1.1] text-[#2d2d2d]">
                                        When You Need This
                                        <br />
                                        <span className="text-[#f7931e]">Service</span>
                                    </h2>
                                </div>
                                <p className="max-w-[400px] text-[16px] leading-[1.6] text-[#555] lg:mb-2">
                                    <span className="font-bold text-[#2d2d2d]">Understanding</span> when and how our services deliver maximum value to <span className="font-bold text-[#2d2d2d]">your organization</span>
                                </p>
                            </div>

                            {/* MAIN CONTENT BOX */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 border border-gray-300 overflow-hidden rounded-[4px]">

                                {/* KOLOM KIRI: Ideal For (Orange Section) */}
                                <div className="relative overflow-hidden bg-[#f7931e] p-10 text-white lg:col-span-1">
                                    {/* Ornamen Lingkaran sesuai gambar */}
                                    <div className="absolute top-10 right-10 h-16 w-16 rounded-full bg-white/10" />
                                    <div className="absolute bottom-20 -left-10 h-24 w-24 rounded-full bg-white/10" />
                                    <div className="absolute bottom-10 right-[-20px] h-32 w-32 rounded-full bg-white/10" />

                                    <div className="relative z-10">
                                        <h3 className="mb-6 text-[32px] font-semibold leading-none">Ideal For</h3>
                                        <p className="mb-12 text-sm opacity-90 leading-relaxed max-w-[250px]">
                                            Designed for organizations requiring elite engineering and robust security.
                                        </p>

                                        <div className="space-y-10">
                                            {/* Item 1 */}
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                                                    <span className="text-xl">🥞</span> {/* Ganti dengan icon SVG stack */}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg">Complex Architectures</h4>
                                                    <p className="text-xs opacity-80 leading-relaxed mt-1">Organizations requiring robust, multi-tenant architectures and complex API integrations.</p>
                                                </div>
                                            </div>
                                            {/* Item 2 */}
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                                                    <span className="text-xl">🔒</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg">Security by Design</h4>
                                                    <p className="text-xs opacity-80 leading-relaxed mt-1">Firms that demand "Security by Design" and audit-ready documentation.</p>
                                                </div>
                                            </div>
                                            {/* Item 3 */}
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                                                    <span className="text-xl">⚡</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg">Elite Engineering</h4>
                                                    <p className="text-xs opacity-80 leading-relaxed mt-1">Companies needing elite-level DevOps and Project Management without the immediate overhead.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* KOLOM KANAN: Grid 2x2 (White Section) */}
                                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 bg-white">
                                    {/* Card 1 */}
                                    <div className="border-b border-gray-200 p-8 md:border-r lg:p-12">
                                        <h3 className="mb-4 text-[22px] font-bold text-[#2d2d2d] tracking-tight">SYSTEM OBSOLESCENCE</h3>
                                        <p className="text-sm leading-[1.8] text-[#555]">
                                            When legacy systems can no longer support modern security protocols or handle current transaction volumes.
                                        </p>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="border-b border-gray-200 p-8 lg:p-12">
                                        <h3 className="mb-4 text-[22px] font-bold text-[#2d2d2d] tracking-tight">COMPLIANCE DEADLOCKS</h3>
                                        <p className="text-sm leading-[1.8] text-[#555]">
                                            When existing systems bottleneck growth or lack the security infrastructure to meet OJK/BSSN standards.
                                        </p>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="p-8 md:border-r lg:p-12">
                                        <h3 className="mb-4 text-[22px] font-bold text-[#2d2d2d] tracking-tight">AGILE SCALING</h3>
                                        <p className="text-sm leading-[1.8] text-[#555]">
                                            When a company needs to rapidly deploy a Minimum Viable Product (MVP) or scale a platform to handle high-concurrency traffic.
                                        </p>
                                    </div>
                                    {/* Card 4 */}
                                    <div className="p-8 lg:p-12">
                                        <h3 className="mb-4 text-[22px] font-bold text-[#2d2d2d] tracking-tight">SOVEREIGN COMPLIANCE</h3>
                                        <p className="text-sm leading-[1.8] text-[#555]">
                                            When businesses must pivot their digital infrastructure to comply with PSE Kominfo or specific industry mandates.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="relative p-8 lg:p-20 ">
                        <div className="max-w-7xl mx-auto w-full">
                            {/* Heading Section */}
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 border-b border-gray-100 pb-10">
                                <div className="max-w-2xl">
                                    <p className="mb-4 text-[20px] font-medium tracking-tight text-[#555]">
                                        Client Deliverables & <span className="text-[#ff922d]">Value Extraction</span>
                                    </p>
                                    <h2 className="mb-6 text-[48px] lg:text-[56px] leading-[1.05] font-bold text-[#2d2d2d]">
                                        Maximize <span className="text-[#ff922d]">Value.</span><br />
                                        <span className="text-[#ff922d]">Secure</span> Growth.
                                    </h2>
                                </div>
                                <div className="lg:max-w-[380px]">
                                    <p className="text-[16px] leading-[1.7] text-[#666]">
                                        Bridging the gap between <span className="font-bold text-[#2d2d2d]">flexible</span> resources and <span className="font-bold text-[#2d2d2d]">stabilized</span> operational
                                        excellence through strict quality protocols and <span className="font-bold text-[#2d2d2d]">modular</span> roadmaps.
                                    </p>
                                </div>
                            </div>

                            {/* Section 01: Business Perspective */}
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
                                <div className="lg:col-span-1">
                                    <p className="mb-2 text-[40px] font-bold text-[#ff922d]">01.</p>
                                    <h3 className="text-[32px] leading-[1.2] font-bold text-[#2d2d2d] mb-4">
                                        Business<br />Perspective
                                    </h3>
                                    <p className="text-[15px] leading-[1.6] text-[#666]">
                                        Strategic advantages focusing on cost stabilization, compliance, and ROI-driven product evolution.
                                    </p>
                                </div>

                                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Card 1 */}
                                    <div className="border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                                        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#fff1e7]">
                                            <ShieldCheck className="h-6 w-6 text-[#ff922d]" />
                                        </div>
                                        <h4 className="mb-3 text-[19px] font-bold text-[#2d2d2d]">Security Compliance</h4>
                                        <p className="text-[14px] leading-[1.7] text-[#666]">
                                            Full alignment with international security standards to significantly reduce data breach risks and regulatory fines.
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                                        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#fff1e7]">
                                            <ArrowUpRight className="h-6 w-6 text-[#ff922d]" />
                                        </div>
                                        <h4 className="mb-3 text-[19px] font-bold text-[#2d2d2d]">Operational Surplus</h4>
                                        <p className="text-[14px] leading-[1.7] text-[#666]">
                                            Transition to a stabilized cost structure ensuring a minimum 3x to 6x revenue-to-operational-cost surplus.
                                        </p>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                                        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#fff1e7]">
                                            <Layers3 className="h-6 w-6 text-[#ff922d]" />
                                        </div>
                                        <h4 className="mb-3 text-[19px] font-bold text-[#2d2d2d]">Modular Roadmap</h4>
                                        <p className="text-[14px] leading-[1.7] text-[#666]">
                                            Incremental feature releases based on market feedback, optimizing ROI at every development stage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 02: Implementation Perspective */}
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {/* Kolom Kanan (Desktop) atau Bawah (Mobile) untuk teks judul */}
                                <div className="lg:col-start-4 lg:col-span-1 lg:text-right order-first lg:order-last">
                                    <p className="mb-2 text-[40px] font-bold text-[#ff922d]">02.</p>
                                    <h3 className="text-[32px] leading-[1.2] font-bold text-[#2d2d2d] mb-4">
                                        Implementation<br />Perspective
                                    </h3>
                                    <p className="text-[15px] leading-[1.6] text-[#666]">
                                        Technical excellence ensured through high standards, rigorous testing, and future-proof architecture.
                                    </p>
                                </div>

                                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                                        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#fff1e7]">
                                            <FileText className="h-6 w-6 text-[#ff922d]" />
                                        </div>
                                        <h4 className="mb-3 text-[19px] font-bold text-[#2d2d2d]">Comprehensive Docs</h4>
                                        <p className="text-[14px] leading-[1.7] text-[#666]">
                                            Detailed documentation ensuring long-term maintainability and seamless knowledge transfer between teams.
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                                        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#fff1e7]">
                                            <Code2 className="h-6 w-6 text-[#ff922d]" />
                                        </div>
                                        <h4 className="mb-3 text-[19px] font-bold text-[#2d2d2d]">High-Standard Code</h4>
                                        <p className="text-[14px] leading-[1.7] text-[#666]">
                                            Source code developed under strict quality protocols with a focus on performance, clarity, and strict typing.
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                                        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#fff1e7]">
                                            <Boxes className="h-6 w-6 text-[#ff922d]" />
                                        </div>
                                        <h4 className="mb-3 text-[19px] font-bold text-[#2d2d2d]">AI-Optimized Core</h4>
                                        <p className="text-[14px] leading-[1.7] text-[#666]">
                                            Clean, modular, and AI-optimized source code designed for future scalability, adaptability, and speed.
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                                        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#fff1e7]">
                                            <Bug className="h-6 w-6 text-[#ff922d]" />
                                        </div>
                                        <h4 className="mb-3 text-[19px] font-bold text-[#2d2d2d]">Vulnerability Checks</h4>
                                        <p className="text-[14px] leading-[1.7] text-[#666]">
                                            Integrated assessments adhering to OWASP Top 10 throughout the entire development lifecycle.
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                                        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-[#fff1e7]">
                                            <Infinity className="h-6 w-6 text-[#ff922d]" />
                                        </div>
                                        <h4 className="mb-3 text-[19px] font-bold text-[#2d2d2d]">Robust DevOps</h4>
                                        <p className="text-[14px] leading-[1.7] text-[#666]">
                                            Pipelines designed for seamless deployment, minimizing downtime and human error in production environments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative py-20 px-4">
                        {/* Container Utama */}
                        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#ff922d] px-6 py-20">

                            {/* Background Decorative Circles - Desktop Optimized Position */}
                            <div className="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/10" />
                            <div className="absolute top-10 right-[-100px] h-[400px] w-[400px] rounded-full bg-white/10" />
                            <div className="absolute bottom-[-150px] left-1/4 h-[300px] w-[300px] rounded-full bg-white/5" />

                            {/* Heading Section */}
                            <div className="relative z-10 mb-16 text-center text-white">
                                <h2 className="mb-6 text-5xl font-bold leading-tight">
                                    Flexible ways to <br /> work together
                                </h2>
                                <p className="mx-auto max-w-2xl text-xl opacity-90">
                                    We offer two distinct engagement models, designed to align with your
                                    specific financial and operational requirements.
                                </p>
                            </div>

                            {/* Grid Layout untuk Desktop */}
                            <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">

                                {/* Card 1: Fixed Bid Model */}
                                <div className="flex flex-col rounded-2xl bg-[#f5f5f5] p-6 md:p-10 transition-transform hover:-translate-y-2 duration-300">
                                    <div className="mb-auto">
                                        <p className="mb-8 text-lg font-bold uppercase tracking-wider text-gray-500">
                                            Product–Centric Delivery
                                        </p>

                                        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#efe0d2]">
                                            <Target className="h-10 w-10 text-[#ff922d]" />
                                        </div>

                                        <h3 className="mb-6 text-4xl font-bold text-[#ff922d]">
                                            Fixed Bid Model
                                        </h3>

                                        <div className="mb-8 h-[1px] w-full bg-gray-200" />

                                        <p className="mb-10 text-lg leading-relaxed text-gray-700">
                                            Our MVP development process ensures your initial product is custom-fit
                                            to meet your exact business specifications with zero surprises.
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#efe0d2]">
                                                <Target className="h-7 w-7 text-[#ff922d]" />
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">Fixed Scope, Time & Budget</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#efe0d2]">
                                                <Boxes className="h-7 w-7 text-[#ff922d]" />
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">No Need To Micromanage</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#efe0d2]">
                                                <CalendarDays className="h-7 w-7 text-[#ff922d]" />
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">On Schedule & Fast Response</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Extended Team Model */}
                                <div className="flex flex-col rounded-2xl bg-[#905620]/30 p-6 md:p-10 text-white transition-transform hover:-translate-y-2 duration-300 shadow-2xl">
                                    <div className="mb-auto">
                                        <p className="mb-8 text-lg font-bold uppercase tracking-wider opacity-70">
                                            Talent–Centric Scaling
                                        </p>

                                        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff922d]">
                                            <Users className="h-10 w-10 text-white" />
                                        </div>

                                        <h3 className="mb-6 text-4xl font-bold text-white">
                                            Extended Team Model
                                        </h3>

                                        <div className="mb-8 h-[1px] w-full bg-white/20" />

                                        <p className="mb-10 text-lg leading-relaxed opacity-90">
                                            Gain a dedicated development team without the HR overhead, allowing you
                                            to stay focused on your core product vision and business growth.
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                                                <UserPlus className="h-7 w-7 text-[#f5c69b]" />
                                            </div>
                                            <p className="text-sm font-semibold">Flexible Resourcing (Intern to Senior)</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                                                <CalendarDays className="h-7 w-7 text-[#f5c69b]" />
                                            </div>
                                            <p className="text-sm font-semibold">Monthly Based Engagement</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                                                <Gem className="h-7 w-7 text-[#f5c69b]" />
                                            </div>
                                            <p className="text-sm font-semibold">Wide Variety Skillset Access</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <CTA />


                </div>
            </main>
            <Footer />
        </>
    );
}
