import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Press() {
    const news = [
        {
            date: "March 15, 2025",
            title: "December 1, 2025",
            excerpt: "Last Thursday, on 27 November 2025, we were part of the RTS Spectrum 2025 event, hosted by our partner RTS in Gent/Belgium. The closed event offered a platform to learn more ...",
            link: "/company/press/rts-spectrum-event-2025"

        },
        {
            date: "February 10, 2025",
            title: "ID-ware Appoints Zak Habgood as New CTO",
            excerpt: "Industry veteran joins to lead the next generation of PIAM platform development.",
            link: "/company/press/nothing-to-see"

        },
        {
            date: "November 05, 2024",
            title: "ID-ware Expands Operations to UK",
            excerpt: "New London office opens to support growing demand from financial sector clients.",
            link: "/company/press/nothing-to-see"
        },
    ];

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
                            Press & News
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Latest news, press releases, and media resources from ID-ware.
                        </p>
                        <Link href="/company">
                            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all gap-2">
                                <ArrowLeft className="w-4 h-4" /> Back to Company
                            </Button>
                        </Link>


                        <div className="mb-16">
                            <div className="grid gap-8">
                                {news.map((item, i) => (
                                    <div key={i} className="p-8 rounded-xl bg-card border border-white/5 hover:bg-white/5 transition-colors">
                                        <p className="text-sm text-primary font-mono mb-2">{item.date}</p>
                                        <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">{item.excerpt}</p>
                                        <a href={item.link}>
                                            <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                                                Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-xl bg-card border border-white/5">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Newspaper className="w-5 h-5 text-primary" /> Media Inquiries
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    For press inquiries, interview requests, or brand assets, please contact our communications team.
                                </p>
                                <a href="mailto:press@id-ware.com" className="text-primary hover:underline">press@id-ware.com</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}