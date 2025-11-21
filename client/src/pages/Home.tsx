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
import CustomCursor from "@/components/CustomCursor";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Features />
      <Integrations />
      <Industries />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
