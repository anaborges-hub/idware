import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Industries from "@/components/Industries"; // Reusing the component we made earlier
import { Button } from "@/components/ui/button";
import RequestDemoDialog from "@/components/RequestDemoDialog";

export default function IndustriesPage() {
  return (
    <Layout>
      <div className="pt-12 pb-24">
        <div className="container mx-auto px-6 text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            Built for <span className="text-primary">Critical Sectors</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform is architected to meet the specific regulatory and operational demands of complex enterprise environments.
          </p>
        </div>

        <Industries />

        <div className="container mx-auto px-6 py-24">
          <div className="bg-card/30 border border-primary/20 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 z-0" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-display mb-6">Don't see your industry?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Our platform is highly configurable. We have deployed solutions for Data Centers, Logistics, Retail, and more.
              </p>
              <RequestDemoDialog>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Our Experts
                </Button>
              </RequestDemoDialog>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
