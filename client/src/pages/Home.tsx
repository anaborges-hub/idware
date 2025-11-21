import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import SecurityHUD from "@/components/SecurityHUD";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 relative">
      <SecurityHUD />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <Integrations />
        <Industries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
