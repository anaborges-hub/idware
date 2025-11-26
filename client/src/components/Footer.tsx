import { Shield } from "lucide-react";
import idWareLogo from "@assets/ID-ware Logo (solo) weiss_1763985113528.png";

export default function Footer() {
    return (
        <footer className="bg-card border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={idWareLogo} alt="IDware" className="h-8 w-auto opacity-90" />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Global provider of Physical Identity and Access Management (PIAM) solutions, securing the world's largest organizations.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-foreground">Solutions</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Credential Management</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Visitor Management</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contractor Access</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Physical Security Integration</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-foreground">Connect</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="https://www.linkedin.com/company/cipher10/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; 2025 ID-ware Group. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground">Terms of Service</a>
                        <a href="#" className="hover:text-foreground">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
