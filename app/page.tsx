import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import About from "@/components/About";
import Services from "@/components/Services";
import ToolsStack from "@/components/ToolsStack";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero + ProofBar share the first viewport so the counters are on screen when they run. */}
        <div className="flex min-h-[calc(100svh-3.5rem)] flex-col">
          <Hero />
          <ProofBar />
        </div>
        <About />
        <Services />
        <ToolsStack />
        <CaseStudies />
        <Contact />
      </main>
    </>
  );
}
