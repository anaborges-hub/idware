import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import credImg from "@assets/generated_images/3d_smart_id_card_with_holographic_security_layers.png";
import accessImg from "@assets/generated_images/abstract_visualization_of_secure_physical_access_control.png";
import integrationImg from "@assets/generated_images/enterprise_software_integration_network_diagram.png";

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

export default function Features() {
  return (
    <section id="solutions" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Comprehensive PIAM Platform</h2>
          <p className="text-muted-foreground text-lg">
            Streamline your physical security operations with our end-to-end identity management suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-white/10 overflow-hidden h-full hover:border-primary/50 transition-colors duration-300 group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-display mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
