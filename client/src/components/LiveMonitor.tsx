import { useEffect, useState, useRef } from "react";
import worldMap from "@assets/generated_images/holographic_dotted_world_map_for_security_dashboard.png";
import { Shield, AlertTriangle, Activity, Lock, Wifi } from "lucide-react";

interface LogEntry {
  id: number;
  timestamp: string;
  type: "INFO" | "WARN" | "CRIT";
  message: string;
  location: string;
}

const LOCATIONS = ["London, UK", "New York, USA", "Tokyo, JP", "Berlin, DE", "Singapore, SG", "Sydney, AU"];
const MESSAGES = [
  "Access granted: User ID 8842",
  "Biometric verification successful",
  "Perimeter breach detected - Sector 4",
  "Firewall policy update initiated",
  "Credential revoked: User ID 9921",
  "System health check: Optimal",
  "Encryption key rotation complete",
  "Anomaly detected in access pattern"
];

export default function LiveMonitor() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        type: Math.random() > 0.8 ? (Math.random() > 0.5 ? "WARN" : "CRIT") : "INFO",
        message: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
        location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]
      };

      setLogs(prev => [...prev.slice(-6), newLog]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-1000">
      {/* Monitor Frame */}
      <div className="relative bg-black/80 border border-primary/30 rounded-lg overflow-hidden backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(245,156,0,0.3)] transform rotate-x-12 transition-transform hover:scale-[1.02] duration-500">
        
        {/* Header Bar */}
        <div className="h-8 bg-primary/10 border-b border-primary/20 flex items-center px-4 justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono text-primary uppercase tracking-wider">Live Threat Feed // ID-NET-V4</span>
          </div>
          <div className="flex gap-1">
            <div className="h-1 w-1 bg-primary/50" />
            <div className="h-1 w-1 bg-primary/50" />
            <div className="h-1 w-1 bg-primary/50" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-3 h-[300px]">
          
          {/* Left: World Map & Status */}
          <div className="col-span-2 border-r border-primary/20 p-4 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <img src={worldMap} alt="Global Status" className="w-full h-full object-contain opacity-80 mix-blend-screen" />
            
            {/* Floating Status Indicators */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="bg-black/60 border border-green-500/30 px-2 py-1 rounded flex items-center gap-2">
                <Wifi className="h-3 w-3 text-green-500" />
                <span className="text-[10px] font-mono text-green-500">ONLINE</span>
              </div>
              <div className="bg-black/60 border border-primary/30 px-2 py-1 rounded flex items-center gap-2">
                <Lock className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-mono text-primary">SECURE</span>
              </div>
            </div>

            {/* Scanning Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[20%] animate-scan" />
          </div>

          {/* Right: Logs */}
          <div className="col-span-1 bg-black/40 p-2 font-mono text-[10px] overflow-hidden flex flex-col">
            <div className="text-muted-foreground mb-2 border-b border-white/10 pb-1">SYSTEM LOGS</div>
            <div className="flex flex-col gap-2 overflow-hidden" ref={logContainerRef}>
              {logs.map((log) => (
                <div key={log.id} className="animate-in slide-in-from-left-2 fade-in duration-300">
                  <div className="flex justify-between text-gray-500 text-[9px]">
                    <span>{log.timestamp}</span>
                    <span>{log.location}</span>
                  </div>
                  <div className={`flex items-start gap-1 ${
                    log.type === "CRIT" ? "text-red-500" : 
                    log.type === "WARN" ? "text-yellow-500" : "text-primary"
                  }`}>
                    <span>{log.type === "CRIT" ? "!" : ">"}</span>
                    <span className="leading-tight">{log.message}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="h-12 border-t border-primary/20 bg-primary/5 grid grid-cols-4 divide-x divide-primary/20">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] text-muted-foreground uppercase">Threat Level</span>
            <span className="text-xs font-bold text-green-500">LOW</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] text-muted-foreground uppercase">Active User</span>
            <span className="text-xs font-bold text-primary">14,203</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] text-muted-foreground uppercase">Uptime</span>
            <span className="text-xs font-bold text-primary">99.99%</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Activity className="h-4 w-4 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
