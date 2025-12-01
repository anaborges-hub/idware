import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <Layout>
            <div className="relative py-24 bg-background">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-6xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-foreground text-center">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-muted-foreground mb-16 leading-relaxed text-center max-w-2xl mx-auto">
                            Contact our global team for sales, support, or general inquiries.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="p-8 rounded-xl bg-card border border-white/5">
                                <h3 className="text-2xl font-bold mb-6 font-display">Send us a message</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">First Name</label>
                                            <Input placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Last Name</label>
                                            <Input placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email</label>
                                        <Input type="email" placeholder="john@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Message</label>
                                        <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
                                    </div>
                                    <Button className="w-full">Send Message</Button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-8">
                                <div className="p-8 rounded-xl bg-primary/5 border border-primary/10">
                                    <h3 className="text-xl font-bold mb-6 font-display text-primary">Global Headquarters</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3 text-muted-foreground">
                                            <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <p>
                                                ID-ware International B.V.<br />
                                                Lange Vijverberg 11<br />
                                                2513 AC Den Haag<br />
                                                The Netherlands
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            <Phone className="w-5 h-5 text-primary shrink-0" />
                                            <p>+31 (0) 88 000 4444</p>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            <Mail className="w-5 h-5 text-primary shrink-0" />
                                            <p>info@id-ware.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 rounded-xl bg-card/50 border border-white/5">
                                    <h3 className="text-xl font-bold mb-6 font-display">Support</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Existing customer? Visit our support portal or contact your dedicated account manager.
                                    </p>
                                    <Button variant="outline" className="gap-2">
                                        Visit Support Portal <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}