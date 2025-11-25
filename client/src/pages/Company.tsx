import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, Globe, HeartHandshake, Trophy } from "lucide-react";
import officeImg from "@assets/generated_images/modern_high_tech_security_operations_center.png";
import GlitchText from "@/components/GlitchText";

export default function Company() {
  const stats = [
    { label: "Founded", value: "2002" }, // Updated based on >20 years experience
    { label: "Employees", value: "130+" },
    { label: "Experience", value: ">20 Yrs" },
    { label: "Offices", value: "Global" },
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
            We Are <span className="text-primary"><GlitchText text="IDware" /></span>
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto mt-16 mb-16">
            <div className="bg-card/30 p-8 rounded-xl border border-white/5">
              <h3 className="text-2xl font-bold font-display mb-4 text-primary">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner with our customers and provide state-of-the-art identity and access management solutions for physical access.
              </p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl border border-white/5">
              <h3 className="text-2xl font-bold font-display mb-4 text-primary">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                The protection of resources and costs – whether human or material – is key for any organisation. Only if these resources and assets are available in complete and intact form, an organisation is enabled to constantly operate.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-display mb-6">Leader in PIAM Solutions</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With more than 130 employees worldwide, ID-ware is a leading global provider of state-of-the-art Physical Identity and Access Management (PIAM) solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 20 years of experience, we are a specialised expert for smart identification and authentication processes, delivering software and services as well as related hardware.
            </p>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block">
              <p className="text-sm text-primary font-mono">
                We are an international company group with entities around the world, holding relevant quality management certifications such as <span className="font-bold">ISO 9001</span> and <span className="font-bold">27001</span>, and work according to the highest security and compliance standards.
              </p>
            </div>
          </div>
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
