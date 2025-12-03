import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ghost } from "lucide-react";
import { Link } from "wouter";

export default function NothingToSee() {
    return (
        <Layout>
            <div className="min-h-screen flex items-start justify-center bg-background overflow-hidden relative pt-24">
                {/* Background chaotic elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-primary/30 text-4xl font-bold select-none"
                            style={{
                                fontSize: Math.random() * 100 + 20 + "px",
                                opacity: Math.random() * 0.5 + 0.02
                            }}
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
                            {["blah", "BLAH", "blah...", "blah blah", "bLaH", "blah?", "blah!", "BLAH BLAH"][Math.floor(Math.random() * 8)]}
                        </motion.div>
                    ))}
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="max-w-2xl mx-auto flex flex-col items-center"
                    >
                        <div className="w-full flex justify-start mb-8">
                            <Link href="/company/press">
                                <Button variant="ghost" className="pl-0 hover:pl-2 transition-all gap-2">
                                    <ArrowLeft className="w-4 h-4" /> Go back
                                </Button>
                            </Link>
                        </div>

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

                        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6 text-transparent bg-clip-text bg-primary">
                            Blah Blah Blah...
                        </h1>

                        <motion.p
                            className="text-2xl text-muted-foreground mb-12 font-mono"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Nothing to see here!
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}
