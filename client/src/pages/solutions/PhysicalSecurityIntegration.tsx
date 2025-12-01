import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PhysicalSecurityIntegration() {
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
                            Physical Security Integration
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Seamless integration with leading access control systems and security hardware.
                            Connect your PIAM workflows directly to your physical infrastructure.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="p-8 rounded-xl bg-card border border-white/5">
                                <h3 className="text-xl font-bold mb-4">Supported Systems</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Major PACS (Lenel, Honeywell, Siemens, etc.)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Biometric devices & scanners</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Smart lockers & key management</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>HR & IAM systems (SAP, AD, Okta)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-xl bg-primary/5 border border-primary/10 flex flex-col justify-center items-start">
                                <h3 className="text-xl font-bold mb-4 text-primary">Unified Architecture</h3>
                                <p className="text-muted-foreground mb-6">
                                    Bridge the gap between IT and Physical Security with our open integration platform.
                                </p>
                                <Button className="gap-2">
                                    View Integrations <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}