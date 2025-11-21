import { Button } from "@/components/ui/button";
import RequestDemoDialog from "@/components/RequestDemoDialog";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
          Ready to modernize your security infrastructure?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join the world's leading organizations in securing their workforce and facilities with ID's intelligent platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RequestDemoDialog>
            <Button size="lg" className="text-lg h-14 px-8 bg-foreground text-background hover:bg-foreground/90">
              Talk to Sales
            </Button>
          </RequestDemoDialog>
          <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-white/10 hover:bg-white/5">
            Download Whitepaper
          </Button>
        </div>
      </div>
    </section>
  );
}
