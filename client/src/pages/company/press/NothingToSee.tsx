import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ghost } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function NothingToSee() {
    return (
        <Layout>
            <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative">
                {/* Background chaotic elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-primary/10 text-4xl font-bold select-none"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                rotate: Math.random() * 360
                            }}
                            animate={{
                                y: [null, Math.random() * -100],
                                rotate: [null, Math.random() * 360]
                            }}
                            transition={{
                                duration: 10 + Math.random() * 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            blah
                        </motion.div>
                    ))}
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <div className="mb-8 flex justify-center">
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Ghost className="w-32 h-32 text-primary" />
                            </motion.div>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6 text-transparent bg-clip-text bg-primary ">
                            Blah Blah Blah...
                        </h1>

                        <motion.p
                            className="text-2xl text-muted-foreground mb-12 font-mono"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Nothing to see here!
                        </motion.p>

                        <div className="flex justify-center gap-4">
                            <BackButton />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}

function BackButton() {
    const [, navigate] = useLocation();
    return (
        <Button size="lg" className="group" onClick={() => navigate("/company/press")}> 
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Go Back to Real News
        </Button>
    );
}
