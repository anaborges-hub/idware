import Hero from "@/components/Hero";
import CustomerSlider from "@/components/CustomerSlider";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CustomerSlider />
      <Stats />
      <Features />
      <Integrations />
      <Industries />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
