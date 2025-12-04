import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, useMotionValue, useTransform } from "framer-motion";
import credImg from "@assets/generated_images/3d_smart_id_card_with_holographic_security_layers.webp";
import accessImg from "@assets/generated_images/abstract_visualization_of_secure_physical_access_control.webp";
import integrationImg from "@assets/generated_images/enterprise_software_integration_network_diagram.webp";

const features = [
  {
    title: "Credential Management",
    description: "Issue and manage smart credentials for employees, contractors, and visitors with a unified platform.",
    image: credImg,
  },
  {
    title: "Access Intelligence",
    description: "Real-time monitoring and policy-based access control across all your physical locations.",
    image: accessImg,
  },
  {
    title: "Seamless Integration",
    description: "Connects effortlessly with your existing PACS, HR databases, and IT security infrastructure.",
    image: integrationImg,
  },
];

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      if (window.innerWidth < 768) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }
  
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="solutions" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Comprehensive PIAM Platform</h2>
          <p className="text-muted-foreground text-lg">
            Streamline your physical security operations with our end-to-end identity management suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <TiltCard key={index} index={index}>
              <Card className="bg-card/50 border-white/10 overflow-hidden h-full hover:border-primary/50 transition-colors duration-300 group hover:shadow-[0_0_30px_-10px_rgba(245,156,0,0.3)]">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Grid */}
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-display mb-2 flex items-center justify-between">
                    {feature.title}
                    <div className="h-2 w-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(245,156,0,1)]" />
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
