import { Server, Network, Cloud, Key, Database, ShieldCheck } from "lucide-react";

const integrationMethods = [
    {
        icon: Database,
        title: "Identity Management Systems",
        description: "Real-time sync with your HR and directory systems."
    },
    {
        icon: Server,
        title: "Physical Access Control (PACS)",
        description: "Works with a wide range of access control systems."
    },
    {
        icon: Network,
        title: "APIs and Data Bridges",
        description: "APIs and custom data bridges for system integration."
    },
    {
        icon: Cloud,
        title: "Cloud & On-Premise",
        description: "Deployable in private, public, or hybrid cloud environments."
    },
    {
        icon: Key,
        title: "Credential Technologies",
        description: "Supports common card technologies and encoding methods."
    },
    {
        icon: ShieldCheck,
        title: "Single Sign-On (SSO)",
        description: "Configurable for SSO using your existing enterprise authentication infrastructure."
    }
];

export default function Integrations() {
    return (
        <section className="py-24 border-y border-white/5 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                            Seamless Integration With Your Existing Infrastructure
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Designed to fit into your existing infrastructure without disruption. Delivers real-time data synchronisation and centralised control across connected systems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {integrationMethods.map((method, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-white/5 bg-card/30 hover:border-primary/20 transition-colors">
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                        <method.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1 text-foreground">{method.title}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {method.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-sm text-muted-foreground italic">
                                ID-ware's focus is on providing a central platform that unifies identity data and automates workflows across disparate systems.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full h-full flex items-center">
                        <div className="relative w-full rounded-xl border border-white/10 bg-card/50 p-8 overflow-hidden min-h-[600px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

                            {/* Option 3: Layered Stack / Integration Bridge - Resized */}
                            <div className="relative z-10 w-full max-w-lg flex flex-col gap-10">

                                {/* Top Layer: IT & Business Systems */}
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/80 border border-white/10 shadow-sm hover:border-primary/30 transition-colors">
                                        <Database className="w-6 h-6 text-blue-400" />
                                        <span className="text-xs font-bold text-muted-foreground">HR</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/80 border border-white/10 shadow-sm hover:border-primary/30 transition-colors">
                                        <Cloud className="w-6 h-6 text-blue-400" />
                                        <span className="text-xs font-bold text-muted-foreground">Directory</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/80 border border-white/10 shadow-sm hover:border-primary/30 transition-colors">
                                        <Network className="w-6 h-6 text-blue-400" />
                                        <span className="text-xs font-bold text-muted-foreground">API</span>
                                    </div>
                                </div>

                                {/* Connection Arrows Down */}
                                <div className="flex justify-around text-primary/30 -my-6">
                                    <div className="h-10 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                                    <div className="h-10 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                                    <div className="h-10 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                                </div>

                                {/* Middle Layer: ID-ware Platform */}
                                <div className="relative rounded-2xl bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border border-primary/30 p-8 text-center shadow-[0_0_40px_rgba(245,156,0,0.15)]">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse rounded-2xl" />
                                    <div className="relative z-10 flex items-center justify-center h-full">
                                        <h3 className="text-3xl font-bold font-display text-foreground">ID-ware</h3>
                                    </div>
                                </div>

                                {/* Connection Arrows Down */}
                                <div className="flex justify-around text-primary/30 -my-6">
                                    <div className="h-10 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                                    <div className="h-10 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                                    <div className="h-10 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                                </div>

                                {/* Bottom Layer: Physical Security & Hardware */}
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/80 border border-white/10 shadow-sm hover:border-emerald-500/30 transition-colors">
                                        <Server className="w-6 h-6 text-emerald-400" />
                                        <span className="text-xs font-bold text-muted-foreground">PACS</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/80 border border-white/10 shadow-sm hover:border-emerald-500/30 transition-colors">
                                        <Key className="w-6 h-6 text-emerald-400" />
                                        <span className="text-xs font-bold text-muted-foreground">Badging</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/80 border border-white/10 shadow-sm hover:border-emerald-500/30 transition-colors">
                                        <ShieldCheck className="w-6 h-6 text-emerald-400" />
                                        <span className="text-xs font-bold text-muted-foreground">Security</span>
                                    </div>
                                </div>

                            </div>

                            <div className="absolute bottom-6 left-0 right-0 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Centralized Management Layer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}