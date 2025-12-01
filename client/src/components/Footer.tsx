import { Shield } from "lucide-react";
import { Link } from "wouter";
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
                            <li><Link href="/solutions/credential-management" className="hover:text-primary transition-colors">Credential Management</Link></li>
                            <li><Link href="/solutions/visitor-management" className="hover:text-primary transition-colors">Visitor Management</Link></li>
                            <li><Link href="/solutions/contractor-access" className="hover:text-primary transition-colors">Contractor Access</Link></li>
                            <li><Link href="/solutions/physical-security-integration" className="hover:text-primary transition-colors">Physical Security Integration</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/company" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/company/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/company/press" className="hover:text-primary transition-colors">Press</Link></li>
                            <li><Link href="/company/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-foreground">Connect</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="https://www.linkedin.com/company/cipher10/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href="https://www.youtube.com/@ID-ware" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Youtube</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; 2025 ID-ware Group. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/company/imprint" className="hover:text-foreground">Imprint</Link>
                        <Link href="/company/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/company/cookie-policy" className="hover:text-foreground">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
