import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImg from "@assets/generated_images/image.png";
import kioskImg from "@assets/generated_images/high_tech_biometric_scanning_kiosk_3d_render.png";
import GlitchText from "@/components/GlitchText";
import DecryptText from "@/components/DecryptText";

export default function Products() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4"
          >
            HARDWARE // SOFTWARE
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">Ecosystem</span>
          </h1>
        </div>

        {/* Product 1: Software */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-32">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-xl overflow-hidden border border-primary/30 group"
            >
              <img src={dashboardImg} alt="ID-Command Dashboard" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent pointer-events-none" />
            </motion.div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold font-display mb-4 flex items-center gap-3">
              <span className="text-primary">01.</span> ID-ware Command/Citadel
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              The central nervous system for your security operations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A unified command and control dashboard that aggregates data from all your subsystems. Visualize threats, manage identities, and enforce policy compliance in real-time.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8 font-mono text-sm">
              <div className="p-3 border border-white/10 rounded bg-card/30">
                <div className="text-primary mb-1">LATENCY</div>
                <div>&lt; 50ms</div>
              </div>
              <div className="p-3 border border-white/10 rounded bg-card/30">
                <div className="text-primary mb-1">UPTIME</div>
                <div>99.999%</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.location.href = "/coming-soon"}
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10"
                onClick={() => window.location.href = "/coming-soon"}
              >
                Prices
              </Button>
            </div>
          </div>
        </div>

        {/* Product 2: Hardware */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-xl overflow-hidden border border-primary/30 group"
            >
              <img src={kioskImg} alt="ID-Kiosk" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-l from-background/80 to-transparent pointer-events-none" />
            </motion.div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold font-display mb-4 flex items-center gap-3">
              <span className="text-primary">02.</span> ID-Entry Kiosk
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Autonomous, biometric-ready visitor processing.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Reduce lobby wait times with our self-service kiosks. Supports facial recognition, ID scanning, and instant badge printing. Built with tamper-resistant materials for high-security environments.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8 font-mono text-sm">
              <div className="p-3 border border-white/10 rounded bg-card/30">
                <div className="text-primary mb-1">SENSOR</div>
                <div>LiDAR + IR</div>
              </div>
              <div className="p-3 border border-white/10 rounded bg-card/30">
                <div className="text-primary mb-1">BUILD</div>
                <div>Aluminium</div>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Specs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
