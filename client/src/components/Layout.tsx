import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import SecurityHUD from "@/components/SecurityHUD";
import CustomCursor from "@/components/CustomCursor";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 relative">
      {/* CustomCursor removed for performance */}
      {/* <CustomCursor /> */}
      <SecurityHUD />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
