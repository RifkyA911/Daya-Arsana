import DataTableExample from "@/components/examples/data-table-example";
import DynamicDialogFormExample from "@/components/examples/dialog-form-example";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AnimatedBackground from "./_components/AnimatedBackground";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Partnership from "./_components/Partnership";
import InfiniteMarquee from "./_components/InfiniteMarquee";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
export default function Home() {
  return (
    <div className="xcontainer mx-auto min-h-screen xmax-w-[1440px] font-sans">
      <div className="p-4">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <Features />
        <Partnership />
        <InfiniteMarquee />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

