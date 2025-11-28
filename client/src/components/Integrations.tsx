import { Check } from "lucide-react";

const systems = [
    "LenelS2 OnGuard",
    "Software House C-CURE",
    "Genetec Security Center",
    "AMAG Technology",
    "Microsoft Active Directory",
    "Workday HR",
    "SAP SuccessFactors",
    "ServiceNow",
    "Okta",
    "Splunk"
];

export default function Integrations() {
    return (
        <section className="py-24 border-y border-white/5 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                            Connects with your existing infrastructure
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Don't rip and replace. ID-ware acts as the intelligent orchestration layer that sits on top of your existing PACS, HR, and IT systems. We support over 200+ native integrations out of the box.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {systems.map((sys, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check className="h-3 w-3 text-primary" />
                                    </div>
                                    <span className="font-medium text-sm">{sys}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-sm text-muted-foreground">
                                Plus generic support for REST APIs, SQL, LDAP, and CSV integration.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="relative rounded-xl border border-white/10 bg-card/50 p-8 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

                            {/* Abstract visualization of the "Central Hub" */}
                            <div className="relative z-10 flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-4 text-center">
                                {/* Left side: Sources */}
                                <div className="flex flex-row md:flex-col gap-2 md:gap-4 justify-center flex-wrap md:flex-nowrap">
                                    <div className="flex-1 md:flex-none min-w-[100px] p-3 md:p-4 rounded border border-white/5 bg-background/50 text-xs font-mono text-muted-foreground flex items-center justify-center">HR Systems</div>
                                    <div className="flex-1 md:flex-none min-w-[100px] p-3 md:p-4 rounded border border-white/5 bg-background/50 text-xs font-mono text-muted-foreground flex items-center justify-center">IT Directory</div>
                                    <div className="flex-1 md:flex-none min-w-[100px] p-3 md:p-4 rounded border border-white/5 bg-background/50 text-xs font-mono text-muted-foreground flex items-center justify-center">Contractors</div>
                                </div>

                                {/* Center: The ID Platform */}
                                <div className="flex items-center justify-center py-4 md:py-0">
                                    <div className="h-24 w-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative animate-pulse">
                                        <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" />
                                        <span className="font-bold font-display text-2xl text-primary">ID</span>
                                    </div>
                                </div>

                                {/* Right side: Targets */}
                                <div className="flex flex-row md:flex-col gap-2 md:gap-4 justify-center flex-wrap md:flex-nowrap">
                                    <div className="flex-1 md:flex-none min-w-[100px] p-3 md:p-4 rounded border border-white/5 bg-background/50 text-xs font-mono text-muted-foreground flex items-center justify-center">PACS 1</div>
                                    <div className="flex-1 md:flex-none min-w-[100px] p-3 md:p-4 rounded border border-white/5 bg-background/50 text-xs font-mono text-muted-foreground flex items-center justify-center">PACS 2</div>
                                    <div className="flex-1 md:flex-none min-w-[100px] p-3 md:p-4 rounded border border-white/5 bg-background/50 text-xs font-mono text-muted-foreground flex items-center justify-center">Badging</div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                                    Real-time Synchronization Active
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
