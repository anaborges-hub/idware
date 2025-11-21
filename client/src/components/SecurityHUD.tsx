import { useEffect, useState } from "react";
import { Lock, ShieldCheck, Wifi } from "lucide-react";

export default function SecurityHUD() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />

      {/* Top Status Bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full border border-white/5 text-[10px] font-mono text-primary">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3 w-3" />
          <span>SYSTEM_SECURE</span>
        </div>
        <div className="w-px h-3 bg-primary/30" />
        <div className="flex items-center gap-2">
          <Wifi className="h-3 w-3" />
          <span>NET_ACTIVE</span>
        </div>
        <div className="w-px h-3 bg-primary/30" />
        <div className="flex items-center gap-2">
          <Lock className="h-3 w-3" />
          <span>ENCRYPTED_256</span>
        </div>
      </div>

      {/* Side Data Streams (Decorative) */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-[8px] font-mono text-primary/30">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="opacity-50">0x{Math.random().toString(16).slice(2, 8).toUpperCase()}</div>
        ))}
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-[8px] font-mono text-primary/30 text-right">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="opacity-50">0x{Math.random().toString(16).slice(2, 8).toUpperCase()}</div>
        ))}
      </div>

      {/* Scanning Line Effect - subtle */}
      <div className="absolute left-0 w-full h-px bg-primary/10 shadow-[0_0_15px_rgba(245,156,0,0.2)] animate-scanline" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
