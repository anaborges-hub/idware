import { Lock, ShieldCheck, Wifi } from "lucide-react";

export default function SecurityHUD() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
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

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
