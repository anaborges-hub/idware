import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Server, Shield, Users, Lock } from "lucide-react";
import GlitchText from "@/components/GlitchText";
import protectionImg from "@assets/generated_images/abstract_data_flow_protecting_a_building.png";

export default function Solutions() {
  const solutions = [
    {
      icon: Shield,
      title: "Physical Identity & Access",
      description: "Automate the entire identity lifecycle from on-boarding to off-boarding. Ensure the right people have the right access at the right time.",
      features: ["Automated Provisioning", "Policy Compliance", "Role-Based Access"]
    },
    {
      icon: Users,
      title: "Visitor Identity Management",
      description: "Secure, seamless visitor experiences. Pre-registration, watchlist screening, and self-service kiosks for modern facilities.",
      features: ["Watchlist Screening", "QR Code Check-in", "Host Notifications"]
    },
    {
      icon: Server,
      title: "PSIM & Situational Awareness",
      description: "Unify all your security sensors into a single pane of glass. Integrate video, access control, and intrusion detection.",
      features: ["Unified Command Center", "Incident Workflow", "Geo-spatial Mapping"]
    },
    {
      icon: Lock,
      title: "Insider Threat Prevention",
      description: "Detect anomalous behavior and potential threats from within your organization using AI-driven analytics.",
      features: ["Behavioral Analytics", "Risk Scoring", "Real-time Alerts"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            Enterprise <span className="text-primary"><GlitchText text="Security Solutions" /></span>
          </motion.h1>
          <p className="text-xl text-muted-foreground font-mono">
            Comprehensive protection for the modern physical-digital landscape.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-24 border border-primary/30">
          <div className="absolute inset-0 bg-primary/10 z-10" />
          <img src={protectionImg} alt="Security Shield" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-white/10 h-full hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <sol.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display mb-4">{sol.title}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {sol.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {sol.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
