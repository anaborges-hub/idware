import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, Globe, HeartHandshake, Trophy } from "lucide-react";
import officeImg from "@assets/generated_images/modern_high_tech_security_operations_center.png";
import GlitchText from "@/components/GlitchText";

export default function Company() {
  const stats = [
    { label: "Founded", value: "2010" },
    { label: "Employees", value: "850+" },
    { label: "Patents", value: "42" },
    { label: "Offices", value: "12" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We never compromise on the security of our platform or our customers' data."
    },
    {
      icon: HeartHandshake,
      title: "Customer Trust",
      description: "We build long-term partnerships based on transparency and reliability."
    },
    {
      icon: Trophy,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in physical security."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions protect critical infrastructure and millions of people worldwide."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-24 border-b border-white/10">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold font-display mb-8"
          >
            We Are <span className="text-primary"><GlitchText text="ID" /></span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            On a mission to secure the world's most critical assets through intelligent identity management. 
            We bridge the gap between physical and digital security.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay" />
        <img src={officeImg} alt="ID Security Operations Center" className="w-full h-full object-cover" />
      </div>

      {/* Stats Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 border border-white/10 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold font-display text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <val.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2">{val.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { Shield } from "lucide-react";
