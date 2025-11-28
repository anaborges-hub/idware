import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import RequestDemoDialog from "@/components/RequestDemoDialog";

const CURRENCIES = {
    GBP: { symbol: "£", rate: 1, name: "British Pound" },
    USD: { symbol: "$", rate: 1.27, name: "US Dollar" },
    EUR: { symbol: "€", rate: 1.17, name: "Euro" },
    JPY: { symbol: "¥", rate: 190, name: "Japanese Yen" },
};

type CurrencyCode = keyof typeof CURRENCIES;

export default function Pricing() {
    const [currency, setCurrency] = useState<CurrencyCode>("GBP");
    const [selectedPackage, setSelectedPackage] = useState<string>("Standard");

    const formatPrice = (basePrice: number) => {
        if (basePrice === 0) return "Custom";
        const value = Math.round(basePrice * CURRENCIES[currency].rate);
        return `${CURRENCIES[currency].symbol}${value.toLocaleString()}`;
    };

    const packages = [
        {
            name: "Basic",
            description: "Essential access control for small facilities",
            basePrice: 999,
            features: [
                "Access Control Core",
                "1 Site License",
                "Up to 500 Users",
                "Standard Reporting",
                "Email Support",
                "99.9% Uptime SLA"
            ],
            highlight: false
        },
        {
            name: "Standard",
            description: "Advanced management for growing organizations",
            basePrice: 2499,
            features: [
                "Everything in Basic",
                "Up to 5 Sites",
                "Up to 2,000 Users",
                "Visitor Management Module",
                "Advanced Analytics",
                "Priority Email Support",
                "AD/LDAP Integration"
            ],
            highlight: true
        },
        {
            name: "Pro",
            description: "Comprehensive security for large enterprises",
            basePrice: 4999,
            features: [
                "Everything in Standard",
                "Unlimited Sites",
                "Up to 10,000 Users",
                "Contractor Management",
                "Workflow Automation",
                "24/7 Phone Support",
                "API Access",
                "Custom Branding"
            ],
            highlight: false
        },
        {
            name: "Enterprise",
            description: "Tailored solutions for global infrastructure",
            basePrice: 0, // Custom
            features: [
                "Everything in Pro",
                "Unlimited Users",
                "Dedicated Success Manager",
                "On-premise Option",
                "Custom Integrations",
                "99.999% Uptime SLA",
                "Quarterly Security Audits",
                "White-glove Onboarding"
            ],
            highlight: false
        }
    ];

    return (
        <Layout>
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4"
                    >
                        FLEXIBLE LICENSING
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        Simple, Transparent <span className="text-primary">Pricing</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Choose the plan that fits your security needs. Scale seamlessly as your organization grows.
                    </p>

                    {/* Currency Switcher */}
                    <div className="flex justify-center items-center gap-3">
                        <span className="text-sm text-muted-foreground font-mono">DISPLAY CURRENCY:</span>
                        <Select value={currency} onValueChange={(v) => setCurrency(v as CurrencyCode)}>
                            <SelectTrigger className="w-[180px] bg-card border-primary/20 text-primary font-mono">
                                <SelectValue placeholder="Select Currency" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(CURRENCIES).map(([code, { symbol, name }]) => (
                                    <SelectItem key={code} value={code}>
                                        {code} ({symbol}) - {name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
                    {packages.map((pkg, i) => {
                        const isSelected = selectedPackage === pkg.name;

                        return (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedPackage(pkg.name)}
                                className={`relative flex flex-col p-6 rounded-xl border cursor-pointer transition-all duration-300 ${isSelected
                                        ? "bg-primary/10 border-primary shadow-[0_0_40px_-10px_rgba(245,156,0,0.4)] scale-105 z-20"
                                        : "bg-card/30 border-white/10 hover:border-white/20 hover:bg-card/50 scale-100"
                                    }`}
                            >
                                {(pkg.highlight || isSelected) && (
                                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full shadow-lg transition-colors ${isSelected ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary border border-primary/30"
                                        }`}>
                                        {isSelected ? "SELECTED PLAN" : "MOST POPULAR"}
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-2xl font-bold font-display mb-2 ${isSelected ? "text-primary" : "text-foreground"}`}>
                                        {pkg.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground min-h-[40px]">{pkg.description}</p>
                                </div>

                                <div className="mb-8">
                                    <div className="text-4xl font-bold text-foreground mb-1">
                                        {formatPrice(pkg.basePrice)}
                                    </div>
                                    {pkg.basePrice > 0 && (
                                        <div className="text-sm text-muted-foreground font-mono">/month billed annually</div>
                                    )}
                                </div>

                                <div className="flex-grow mb-8">
                                    <ul className="space-y-4">
                                        {pkg.features.map((feat, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm">
                                                <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${isSelected ? "text-primary" : "text-primary/50"}`} />
                                                <span className="text-muted-foreground">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <RequestDemoDialog>
                                    <Button
                                        className={`w-full font-bold transition-all ${isSelected
                                                ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                                                : "bg-[#133070] hover:bg-[#1a4299] text-white border border-white/5"
                                            }`}
                                    >
                                        {pkg.basePrice === 0 ? "Contact Sales" : "Get Started"}
                                    </Button>
                                </RequestDemoDialog>
                            </motion.div>
                        );
                    })}
                </div>

                {/* FAQ / Additional Info */}
                <div className="max-w-3xl mx-auto text-center bg-card/20 border border-white/5 rounded-2xl p-8 md:p-12">
                    <h3 className="text-2xl font-bold font-display mb-6">Need a custom deployment?</h3>
                    <p className="text-muted-foreground mb-8">
                        For government agencies and high-security facilities requiring on-premise deployment, air-gapped networks, or custom hardware integration, our engineering team is ready to assist.
                    </p>
                    <RequestDemoDialog>
                        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                            Contact Solutions Engineering <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </RequestDemoDialog>
                </div>
            </div>
        </Layout>
    );
}
