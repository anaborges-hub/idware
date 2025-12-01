import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CredentialManagement() {
    return (
        <Layout>
            <div className="relative py-24 bg-background">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link href="/solutions">
                            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all gap-2">
                                <ArrowLeft className="w-4 h-4" /> Back to Solutions
                            </Button>
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-foreground">
                            Credential Management
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Enterprise-grade credential lifecycle management for physical and logical access.
                            Our platform handles everything from issuance to revocation across complex global environments.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="p-8 rounded-xl bg-card border border-white/5">
                                <h3 className="text-xl font-bold mb-4">Key Capabilities</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Centralized issuance & lifecycle management</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Multi-technology smart card support</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Self-service portals for employees</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>Automated certificate management (PKI)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-xl bg-primary/5 border border-primary/10 flex flex-col justify-center items-start">
                                <h3 className="text-xl font-bold mb-4 text-primary">Why ID-ware?</h3>
                                <p className="text-muted-foreground mb-6">
                                    We manage millions of credentials for the world's most secure organizations.
                                </p>
                                <Button className="gap-2">
                                    Request Demo <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}