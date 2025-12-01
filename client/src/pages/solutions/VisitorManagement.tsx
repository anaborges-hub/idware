import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisitorManagement() {
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
                            Visitor Management
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Secure, efficient, and professional visitor management for modern enterprises.
                            Create a seamless welcome experience while maintaining the highest security standards.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="p-8 rounded-xl bg-card border border-white/5">
                                <h3 className="text-xl font-bold mb-4">Features</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Pre-registration & self-service kiosks</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Automated host notifications</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Watchlist screening & compliance checks</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Digital & physical badge issuance</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-xl bg-primary/5 border border-primary/10 flex flex-col justify-center items-start">
                                <h3 className="text-xl font-bold mb-4 text-primary">Streamline Access</h3>
                                <p className="text-muted-foreground mb-6">
                                    Reduce reception workload and enhance security with our automated solutions.
                                </p>
                                <Button className="gap-2">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}
