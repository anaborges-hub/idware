import { Building2, Landmark, Stethoscope, Plane, Factory, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Government",
    description: "Secure sensitive facilities with PIV-compliant access control and automated clearance workflows."
  },
  {
    icon: Building2,
    title: "Corporate Enterprise",
    description: "Manage global workforce identities across multiple campuses with a single unified policy."
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Protect patient areas and manage staff credentials with complex shift-based access rules."
  },
  {
    icon: Plane,
    title: "Aviation & Transport",
    description: "Ensure TSA/regulatory compliance for airports and transit hubs with identity assurance."
  },
  {
    icon: Factory,
    title: "Critical Infrastructure",
    description: "Hardened security protocols for power plants, data centers, and high-risk facilities."
  },
  {
    icon: GraduationCap,
    title: "Higher Education",
    description: "Flexible access for students and faculty while securing research labs and dormitories."
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Trusted Across Vital Sectors</h2>
          <p className="text-muted-foreground text-lg">
            Our PIAM solutions are tailored to meet the rigorous compliance and security standards of the world's most demanding industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-white/5 bg-card hover:bg-card/80 transition-colors group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
