import Layout from "@/components/Layout";

export default function Imprint() {
    return (
        <Layout>
            <div className="py-24 bg-background min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-12">Imprint</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* ID-ware International B.V. */}
                        <div className="bg-card/50 p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                            <h2 className="text-xl font-bold mb-6 text-primary font-display">ID-ware International B.V.</h2>
                            <address className="not-italic text-muted-foreground space-y-1 text-sm">
                                <p>Rhone 30</p>
                                <p>2491 AP Den Haag</p>
                                <p>The Netherlands</p>
                                <div className="pt-4 space-y-1">
                                    <p><span className="text-foreground font-medium">Tel:</span> +31 (0) 70 337 15 00</p>
                                    <p><span className="text-foreground font-medium">E-Mail:</span> <a href="mailto:info@idware.nl" className="hover:text-primary transition-colors">info@idware.nl</a></p>
                                </div>
                                <div className="pt-4 space-y-1">
                                    <p><span className="text-foreground font-medium">VAT-ID:</span> NL815009434B01</p>
                                    <p><span className="text-foreground font-medium">KVK No:</span> 08137628</p>
                                    <p><span className="text-foreground font-medium">Managing Directors:</span> Bernd Dieckmann, Reinier Hasselman</p>
                                </div>
                            </address>
                        </div>

                        {/* ID-ware Deutschland GmbH */}
                        <div className="bg-card/50 p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                            <h2 className="text-xl font-bold mb-6 text-primary font-display">ID-ware Deutschland GmbH</h2>
                            <address className="not-italic text-muted-foreground space-y-1 text-sm">
                                <p>Walther-von-Cronberg-Platz 2-18</p>
                                <p>Zugang Haus Nr. 6</p>
                                <p>60594 Frankfurt am Main</p>
                                <div className="pt-4 space-y-1">
                                    <p><span className="text-foreground font-medium">Tel:</span> +49 (0) 69 210 85 56 0</p>
                                    <p><span className="text-foreground font-medium">E-Mail:</span> <a href="mailto:info@idware.com" className="hover:text-primary transition-colors">info@idware.com</a></p>
                                </div>
                                <div className="pt-4 space-y-1">
                                    <p><span className="text-foreground font-medium">VAT-ID:</span> DE239554473</p>
                                    <p><span className="text-foreground font-medium">AG Frankfurt am Main,</span> HRB 129239</p>
                                    <p><span className="text-foreground font-medium">Managing Directors:</span> Bernd Dieckmann, Reinier Hasselman</p>
                                </div>
                            </address>
                        </div>

                        {/* ID-ware UK Ltd */}
                        <div className="bg-card/50 p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-colors md:col-span-2 md:w-1/2 md:mx-auto">
                            <h2 className="text-xl font-bold mb-6 text-primary font-display">ID-ware UK Ltd</h2>
                            <address className="not-italic text-muted-foreground space-y-1 text-sm">
                                <p>International House</p>
                                <p>6 South Molton Street</p>
                                <p>London, W1K 5QF</p>
                                <div className="pt-4 space-y-1">
                                    <p><span className="text-foreground font-medium">Tel:</span> +44 (0) 20 8050 2648</p>
                                    <p><span className="text-foreground font-medium">E-Mail:</span> <a href="mailto:enquiries@id-ware.co.uk" className="hover:text-primary transition-colors">enquiries@id-ware.co.uk</a></p>
                                </div>
                                <div className="pt-4 space-y-1">
                                    <p><span className="text-foreground font-medium">VAT-ID:</span> GB331462822</p>
                                    <p><span className="text-foreground font-medium">Company No.</span> 11949489</p>
                                    <p><span className="text-foreground font-medium">Place of Registration:</span> England & Wales</p>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}