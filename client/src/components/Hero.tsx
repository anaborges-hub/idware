import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_digital_security_network_background.png";
import RequestDemoDialog from "@/components/RequestDemoDialog";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digital Security Network" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next Gen PIAM Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6 tracking-tight">
              Secure Your World with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">Intelligent Identity</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              The global leader in Physical Identity and Access Management. 
              We unify physical security, IT, and compliance to protect large-scale organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <RequestDemoDialog>
                <Button size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </RequestDemoDialog>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-white/10 hover:bg-white/5" asChild>
                <a href="#solutions">View Solutions</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" />
                <span>Global Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
