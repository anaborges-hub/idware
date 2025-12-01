import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_digital_security_network_background.png";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import LiveMonitor from "@/components/LiveMonitor";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Grid Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-grid-flow" />
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Digital Security Network"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="max-w-3xl flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span>SYSTEM_ONLINE // V 4.0</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-tight mb-6 tracking-tight">
                                Secure Your World with <br />
                                <span className="text-primary">
                                    Intelligent Identity
                                </span>
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-6 font-mono">
                                The global leader in Physical Identity and Access Management. We unify physical security, IT, and compliance to protect large-scale organizations.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <RequestDemoDialog>
                                    <Button size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_rgba(245,156,0,0.5)]">
                                        Initialize System <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </RequestDemoDialog>
                                <Button size="lg" variant="outline" className="text-base px-8 h-12 border-white/10 hover:bg-white/5 hover:border-primary/50 transition-all" asChild>
                                    <a href="#solutions">View Protocols</a>
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-mono">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-primary h-4 w-4" />
                                    <span>ENTERPRISE_GRADE</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-primary h-4 w-4" />
                                    <span>GDPR_COMPLIANT</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-primary h-4 w-4" />
                                    <span>GLOBAL_SUPPORT</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Monitor Visual */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-full hidden md:block perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotateY: -10 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <LiveMonitor />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
