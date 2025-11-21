import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 cursor-pointer">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-display tracking-tight">ID</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
          <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Products</a>
          <a href="#company" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Company</a>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white font-medium px-6">
            Request Demo
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#solutions" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Solutions</a>
          <a href="#products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#company" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Company</a>
          <Button className="w-full mt-4">Request Demo</Button>
        </div>
      )}
    </nav>
  );
}
