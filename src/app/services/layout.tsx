import AnimatedBackground from "../_components/AnimatedBackground";
import Navbar from "../_components/Navbar";


export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar minimal />
            <div className="relative mx-auto min-h-screen max-w-[1580px] font-sans overflow-hidden bg-white text-black">
                <AnimatedBackground />
                <div className="flex flex-col flex-1 min-w-0 ">{children}</div>
            </div>
        </>
    );
}