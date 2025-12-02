import { motion, AnimatePresence } from "framer-motion";
import { Scan, Fingerprint, ShieldCheck, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SecurityClearanceModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function SecurityClearanceModal({ isOpen, onClose, jobTitle }: SecurityClearanceModalProps) {
    const [stage, setStage] = useState<'scan' | 'analyze' | 'granted' | 'form'>('scan');
    const [scanProgress, setScanProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        if (isOpen) {
            setStage('scan');
            setScanProgress(0);
            setLogs([]);

            // Sequence
            const timer1 = setTimeout(() => setStage('analyze'), 2000);

            return () => clearTimeout(timer1);
        }
    }, [isOpen]);

    useEffect(() => {
        if (stage === 'scan') {
            const interval = setInterval(() => {
                setScanProgress(prev => Math.min(prev + 2, 100));
            }, 30);
            return () => clearInterval(interval);
        }
    }, [stage]);

    useEffect(() => {
        if (stage === 'analyze') {
            const logMessages = [
                "Connecting to Global Identity Database...",
                "Verifying biometric signature...",
                "Cross-referencing technical skills...",
                "Checking security clearance level...",
                "Analyzing cultural fit parameters...",
                "Validating PIAM knowledge base...",
                "Identity confirmed."
            ];

            let i = 0;
            const interval = setInterval(() => {
                if (i < logMessages.length) {
                    setLogs(prev => [...prev, logMessages[i]]);
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setStage('granted'), 500);
                }
            }, 400);

            return () => clearInterval(interval);
        }
    }, [stage]);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-md bg-black border-primary/30 text-primary font-mono p-0 overflow-hidden">
                <DialogTitle className="sr-only">Security Clearance Check</DialogTitle>
                <div className="relative h-[400px] flex flex-col items-center justify-center p-6">

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                    <AnimatePresence mode="wait">

                        {/* STAGE 1: BIOMETRIC SCAN */}
                        {stage === 'scan' && (
                            <motion.div
                                key="scan"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center gap-6 relative z-10 w-full"
                            >
                                <div className="relative">
                                    <Fingerprint className="w-24 h-24 text-primary/20 animate-pulse" />
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_15px_rgba(245,156,0,0.8)]"
                                        animate={{ top: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                                <div className="w-full space-y-2">
                                    <div className="flex justify-between text-xs uppercase tracking-widest">
                                        <span>Scanning Identity</span>
                                        <span>{scanProgress}%</span>
                                    </div>
                                    <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-primary"
                                            style={{ width: `${scanProgress}%` }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STAGE 2: ANALYSIS LOGS */}
                        {stage === 'analyze' && (
                            <motion.div
                                key="analyze"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full max-w-sm relative z-10"
                            >
                                <div className="flex items-center gap-3 mb-4 text-primary border-b border-primary/30 pb-2">
                                    <Scan className="w-5 h-5 animate-spin-slow" />
                                    <span className="text-sm font-bold uppercase tracking-widest">System Analysis</span>
                                </div>
                                <div className="space-y-2 font-mono text-xs h-48 overflow-hidden">
                                    {logs.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="text-primary/50">{`>`}</span>
                                            {log}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STAGE 3: ACCESS GRANTED */}
                        {stage === 'granted' && (
                            <motion.div
                                key="granted"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center text-center relative z-10"
                            >
                                <motion.div
                                    initial={{ scale: 2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                    className="mb-6"
                                >
                                    <ShieldCheck className="w-24 h-24 text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                </motion.div>
                                <h2 className="text-3xl font-bold text-emerald-500 mb-2 tracking-tighter">ACCESS GRANTED</h2>
                                <p className="text-primary/70 text-sm mb-8">
                                    Clearance Level 1 Verified for:<br />
                                    <span className="text-white font-bold mt-1 block">{jobTitle}</span>
                                </p>
                                <Button
                                    onClick={() => setStage('form')}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-400/30"
                                >
                                    Proceed to Application
                                </Button>
                            </motion.div>
                        )}

                        {/* STAGE 4: SUCCESS / CONTACT INFO */}
                        {stage === 'form' && (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center w-full px-4 relative z-10"
                            >
                                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Submit Credentials</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Please send your CV and cover letter to our secure recruit channel.
                                </p>
                                <div className="p-4 bg-white/5 rounded border border-white/10 mb-6 select-all">
                                    <code className="text-primary">careers@id-ware.com</code>
                                </div>
                                <Button variant="outline" onClick={() => onClose()} className="w-full border-primary/30 hover:bg-primary/10">
                                    Close Terminal
                                </Button>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
}
