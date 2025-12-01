import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Careers() {
    const positions = [
        { title: "Senior Full Stack Developer", loc: "The Hague, Netherlands", type: "Full-time" },
        { title: "Project Manager PIAM", loc: "Frankfurt, Germany", type: "Full-time" },
        { title: "Security Solutions Architect", loc: "Remote / Hybrid", type: "Full-time" },
    ];

    return (
        <Layout>
            <div className="relative py-24 bg-background">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-foreground">
                            Careers at ID-ware
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Join our global team and shape the future of physical identity management.
                            We are always looking for talented individuals to help us secure the world's most critical assets.
                        </p>

                        <div className="mb-16">
                            <h2 className="text-2xl font-bold mb-8 font-display">Open Positions</h2>
                            <div className="grid gap-4">
                                {positions.map((pos, i) => (
                                    <div key={i} className="p-6 rounded-xl bg-card border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-primary/50 transition-colors cursor-pointer group">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{pos.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {pos.loc}</span>
                                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{pos.type}</span>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="mt-4 md:mt-0 border-primary/20 hover:bg-primary/10">
                                            Apply Now
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-xl bg-primary/5 border border-primary/10 text-center">
                            <h3 className="text-xl font-bold mb-4 text-primary">Don't see the right role?</h3>
                            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                We are growing fast. Send us your open application and we will keep you in mind for future opportunities.
                            </p>
                            <Button className="gap-2">
                                Send Open Application <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}
