import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import idWareLogo from "@assets/ID-ware Logo (solo) weiss_1763985113528.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/products", label: "Products" },
    { href: "/industries", label: "Industries" },
    { href: "/company", label: "Company" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer group">
            <img 
              src={idWareLogo} 
              alt="ID-ware" 
              className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}>
                {link.label}
              </span>
            </Link>
          ))}
          <RequestDemoDialog>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 shadow-[0_0_15px_rgba(245,156,0,0.4)] hover:shadow-[0_0_25px_rgba(245,156,0,0.6)] transition-all">
              Request Demo
            </Button>
          </RequestDemoDialog>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                className={cn(
                  "text-lg font-medium cursor-pointer",
                  location === link.href ? "text-primary" : "text-foreground"
                )} 
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <RequestDemoDialog>
            <Button className="w-full mt-4">Request Demo</Button>
          </RequestDemoDialog>
        </div>
      )}
    </nav>
  );
}
