import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function RtsSpectrumEvent() {
    return (
        <Layout>
            <div className="relative py-24 bg-background">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <Link href="/company/press">
                            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all gap-2">
                                <ArrowLeft className="w-4 h-4" /> Go back
                            </Button>
                        </Link>

                        <span className="text-primary font-mono text-sm mb-4 block">December 1, 2025</span>
                        <h1 className="text-3xl md:text-5xl font-bold font-display mb-8 text-foreground">
                            Review: RTS Spectrum Event 2025 in Gent
                        </h1>

                        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                            <p className="mb-6">
                                Last Thursday, on 27 November 2025, we were part of the RTS Spectrum 2025 event, hosted by our partner RTS in Gent/Belgium.
                            </p>
                            <p className="mb-6">
                                The closed event offered a platform to learn more about recent innovations in video surveillance, but also contained breakout sessions regarding other security technologies. Our Account Manager Manon van den Enden was on site, holding two sessions about our innovative Physical Identity & Access Management (PIAM) solutions and Secure Contractor Management with regard to the NIS2 directive.
                            </p>
                            <p>
                                It was a great opportunity to exchange about these topics with the audience! Many thanks to RTS for organising this outstanding event.
                            </p>
                        </div>
                        <Link href="/company/press">
                            <Button variant="ghost" className="mt-12 pl-0 hover:pl-2 transition-all gap-2">
                                <ArrowLeft className="w-4 h-4" /> Go back
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}
