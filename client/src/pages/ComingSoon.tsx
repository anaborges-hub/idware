import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { HardHat, Hammer, Construction, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import builderImg from "@assets/generated_images/under_construction_builder.png";

export default function ComingSoon() {
    return (
        <Layout>
            <div className="container mx-auto px-6 py-12">

                <div className="flex flex-col items-center justify-center text-center min-h-[60vh] pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto flex flex-col items-center"
                    >
                <div className="w-full flex justify-start mb-8">
                    <Link href="/products">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all gap-2">
                            <ArrowLeft className="w-4 h-4" /> Go back
                        </Button>
                    </Link>
                </div>
                        <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_50px_rgba(245,156,0,0.2)] bg-black/40">
                            <img
                                src={builderImg}
                                alt="Under Construction"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                            <Construction className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 text-primary animate-bounce" />
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 font-mono text-sm mb-6">
                            <HardHat className="w-4 h-4" />
                            <span>AUTHORIZED_ONLY</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                            Access <span className="text-transparent bg-clip-text bg-primary">Restricted</span> // Development Zone
                        </h1>

                        <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto">
                            This module is currently being architected by our engineers. Authorized personnel only.
                        </p>

                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto font-mono text-xs text-primary/70">
                            <div className="bg-card/30 border border-white/5 p-3 rounded flex flex-col items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                                <span>COMPILING</span>
                            </div>
                            <div className="bg-card/30 border border-white/5 p-3 rounded flex flex-col items-center gap-2">
                                <Hammer className="w-4 h-4 animate-pulse" />
                                <span>BUILDING</span>
                            </div>
                            <div className="bg-card/30 border border-white/5 p-3 rounded flex flex-col items-center gap-2">
                                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-1.5">
                                    <div className="h-full bg-primary w-[70%] animate-[width_2s_ease-in-out_infinite]" />
                                </div>
                                <span>DEPLOYING</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}