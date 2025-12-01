import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";

export default function Contact() {
    return (
        <Layout>
            <div className="relative py-24 bg-background">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-7xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-16 text-foreground text-center">
                            Contact Us
                        </h1>

                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                            {/* Left Column: Addresses */}
                            <div className="lg:col-span-5 space-y-12">

                                {/* NL */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold font-display text-primary">ID-ware International B.V.</h3>
                                    <div className="text-muted-foreground space-y-1 text-lg leading-relaxed">
                                        <p>Rhone 30</p>
                                        <p>2491 AP The Hague</p>
                                        <p>The Netherlands</p>
                                        <p className="pt-2 text-foreground font-medium">Tel. +31 (0) 70 337 15 00</p>
                                    </div>
                                </div>

                                {/* DE */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold font-display text-primary">ID-ware Deutschland GmbH</h3>
                                    <div className="text-muted-foreground space-y-1 text-lg leading-relaxed">
                                        <p>Walther-von-Cronberg-Platz 2-18</p>
                                        <p>Zugang Haus-Nr. 6</p>
                                        <p>60594 Frankfurt on the Main</p>
                                        <p>Germany</p>
                                        <p className="pt-2 text-foreground font-medium">Tel. +49 (0) 69 210 85 56 0</p>
                                    </div>
                                </div>

                                {/* UK */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold font-display text-primary">ID-ware UK Ltd.</h3>
                                    <div className="text-muted-foreground space-y-1 text-lg leading-relaxed">
                                        <p>International House</p>
                                        <p>6 South Molton Street</p>
                                        <p>London, W1K 5QF</p>
                                        <p>United Kingdom</p>
                                        <p className="pt-2 text-foreground font-medium">Tel. +44 (0) 20 8050 2648</p>
                                    </div>
                                </div>

                            </div>

                            {/* Right Column: Form */}
                            <div className="lg:col-span-7">
                                <div className="p-8 md:p-12 rounded-2xl bg-card/50 border border-white/10 shadow-2xl">
                                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">Send us a message!</h2>
                                    <p className="text-muted-foreground mb-8 text-lg">
                                        Please fill out the form. We will contact you as soon as possible.
                                    </p>

                                    <form className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Your name</label>
                                            <Input className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Company</label>
                                            <Input className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Your e-mail</label>
                                                <Input type="email" className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Your phone no.</label>
                                                <Input type="tel" className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                            <Textarea className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary/50 resize-none" />
                                        </div>

                                        <div className="pt-4 space-y-6">
                                            <div className="space-y-3">
                                                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Privacy</h4>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    I agree that my details from the contact form will be collected and processed to answer my query. The data will be deleted after your request has been processed. Detailed information on how we handle user data can be found in our <Link href="/company/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                                                </p>
                                            </div>

                                            <div className="flex items-center space-x-3">
                                                <Checkbox id="privacy" />
                                                <Label htmlFor="privacy" className="text-sm font-medium cursor-pointer">
                                                    I accept privacy policy
                                                </Label>
                                            </div>

                                            <Button size="lg" className="w-full md:w-auto px-8 h-12 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_rgba(245,156,0,0.5)]">
                                                Send message
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}
