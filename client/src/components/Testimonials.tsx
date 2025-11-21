import { Quote } from "lucide-react";
import directorImg from "@assets/generated_images/professional_headshot_of_a_corporate_security_director.png";

export default function Testimonials() {
  return (
    <section id="company" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 relative">
              <div className="absolute -top-4 -left-4 text-primary/20">
                <Quote size={64} />
              </div>
              <p className="text-2xl md:text-4xl font-display leading-tight font-medium relative z-10">
                "ID transformed how we manage access across our 45 global offices. We reduced badge provisioning time by 90% and finally achieved 100% audit compliance."
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-4">
              <img 
                src={directorImg} 
                alt="Marcus Chen" 
                className="h-14 w-14 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="text-left">
                <div className="font-bold text-lg text-foreground">Marcus Chen</div>
                <div className="text-sm text-primary">Chief Security Officer, Nexus Global</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
