import { Shield, Lock, Globe, Users } from "lucide-react";

const stats = [
  { label: "Global Enterprise Customers", value: "500+", icon: Globe },
  { label: "Identities Managed", value: "10M+", icon: Users },
  { label: "Countries Supported", value: "100+", icon: Shield },
  { label: "Uptime Reliability", value: "99.9%", icon: Lock },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-primary/60" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-display mb-2 text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
