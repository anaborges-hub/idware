import { useEffect, useState, useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Shield, AlertTriangle, Activity, Lock, Wifi, Camera, MapPin, Users, DoorClosed } from "lucide-react";
import cctv1 from "@assets/generated_images/cctv_1:_server_room.png";
import cctv2 from "@assets/generated_images/cctv_2:_corporate_lobby.png";
import cctv3 from "@assets/generated_images/cctv_3:_loading_dock.png";

interface LogEntry {
  id: number;
  timestamp: string;
  level: "INFO" | "WARN" | "CRIT";
  event: string;
  location: string;
  device: string;
}

const LOCATIONS = ["HQ Lobby", "Server Room B", "Loading Dock", "Exec Suite", "Parking Garage", "Data Center"];
const EVENTS = [
  { msg: "Badge Access Granted", level: "INFO" },
  { msg: "Door Forced Open", level: "CRIT" },
  { msg: "Motion Detected", level: "WARN" },
  { msg: "Invalid Credential", level: "WARN" },
  { msg: "Camera Offline", level: "CRIT" },
  { msg: "Perimeter Breach", level: "CRIT" },
  { msg: "Routine Patrol", level: "INFO" },
  { msg: "Door Held Open", level: "WARN" },
];

const INITIAL_DATA = Array.from({ length: 20 }, (_, i) => ({
  time: `${10 + Math.floor(i/4)}:${(i%4)*15}`,
  access: 40 + Math.random() * 30,
  threats: Math.random() * 10
}));

export default function LiveMonitor() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [chartData, setChartData] = useState(INITIAL_DATA);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCam, setActiveCam] = useState(0);

  // Simulate live logs
  useEffect(() => {
    const interval = setInterval(() => {
      const eventType = EVENTS[Math.floor(Math.random() * EVENTS.length)];
      const newLog: LogEntry = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        level: eventType.level as any,
        event: eventType.msg,
        location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
        device: `DEV-${Math.floor(Math.random() * 999)}`
      };
      setLogs(prev => [newLog, ...prev].slice(0, 15));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Simulate live chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev.slice(1), {
          time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          access: 40 + Math.random() * 30,
          threats: Math.random() * 15
        }];
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Camera cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCam(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto perspective-1000">
      {/* Dashboard Container */}
      <div className="bg-[#0b1221] border border-primary/30 rounded-lg overflow-hidden shadow-[0_0_50px_-12px_rgba(245,156,0,0.3)] transform rotate-x-6 transition-all hover:rotate-0 duration-700">
        
        {/* Top Bar */}
        <div className="bg-black/40 border-b border-white/10 p-3 flex justify-between items-center backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary animate-pulse" />
            <h3 className="font-mono font-bold text-sm tracking-widest text-primary">GLOBAL SECURITY COMMAND</h3>
          </div>
          <div className="flex gap-4 text-[10px] font-mono text-muted-foreground">
             <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                SYSTEM OPTIMAL
             </div>
             <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                LIVE FEED
             </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-black/20">
          
          {/* Left Column: Visuals (Cameras & Stats) */}
          <div className="lg:col-span-7 border-r border-white/5 flex flex-col">
            
            {/* Camera Grid */}
            <div className="p-4 grid grid-cols-2 gap-3 border-b border-white/5 bg-black/20">
              <div className="col-span-2 relative aspect-video bg-black rounded border border-white/10 overflow-hidden group">
                <img src={[cctv1, cctv2, cctv3][activeCam]} alt="Main Feed" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] font-mono text-red-500 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> REC
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/70">CAM-{activeCam + 1} LIVE</div>
                
                {/* Scan line overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />
              </div>
              
              <div className="relative aspect-video bg-black rounded border border-white/10 overflow-hidden opacity-60">
                <img src={cctv2} alt="Feed 2" className="w-full h-full object-cover grayscale" />
                <div className="absolute top-2 left-2 text-[9px] font-mono text-white/50">LOBBY</div>
              </div>
              <div className="relative aspect-video bg-black rounded border border-white/10 overflow-hidden opacity-60">
                 <img src={cctv3} alt="Feed 3" className="w-full h-full object-cover grayscale" />
                 <div className="absolute top-2 left-2 text-[9px] font-mono text-white/50">DOCK</div>
              </div>
            </div>

            {/* Analytics Chart */}
            <div className="p-4 flex-1 min-h-[180px]">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-[10px] font-mono text-muted-foreground uppercase">Access Volume vs Threats</h4>
                <Activity className="h-3 w-3 text-primary/50" />
              </div>
              <div className="h-full w-full min-h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorAccess" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59c00" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59c00" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorThreat" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#000', border: '1px solid #333', fontSize: '10px' }}
                      itemStyle={{ padding: 0 }}
                    />
                    <Area type="monotone" dataKey="access" stroke="#f59c00" fillOpacity={1} fill="url(#colorAccess)" strokeWidth={2} />
                    <Area type="monotone" dataKey="threats" stroke="#ef4444" fillOpacity={1} fill="url(#colorThreat)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column: Threat Feed */}
          <div className="lg:col-span-5 bg-black/40 flex flex-col h-full max-h-[500px] lg:max-h-auto overflow-hidden">
            <div className="p-3 border-b border-white/5 bg-white/5 flex justify-between items-center">
              <span className="text-xs font-mono font-bold text-white">THREAT INTELLIGENCE</span>
              <span className="text-[10px] bg-red-500/20 text-red-500 px-1.5 py-0.5 rounded border border-red-500/30">LIVE</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-0 custom-scrollbar" ref={scrollRef}>
              <div className="flex flex-col divide-y divide-white/5">
                {logs.map((log) => (
                  <div key={log.id} className={`p-3 hover:bg-white/5 transition-colors border-l-2 ${
                    log.level === 'CRIT' ? 'border-red-500 bg-red-500/5' : 
                    log.level === 'WARN' ? 'border-yellow-500' : 'border-green-500'
                  }`}>
                    <div className="flex justify-between items-start mb-1">
                      <span className={`text-[10px] font-bold font-mono ${
                        log.level === 'CRIT' ? 'text-red-500' : 
                        log.level === 'WARN' ? 'text-yellow-500' : 'text-green-500'
                      }`}>
                        [{log.level}]
                      </span>
                      <span className="text-[9px] font-mono text-muted-foreground">{log.timestamp}</span>
                    </div>
                    <div className="text-xs font-medium text-gray-200 mb-1">{log.event}</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                        <MapPin className="h-2.5 w-2.5" /> {log.location}
                      </div>
                      <div className="text-[9px] font-mono text-primary/50">{log.device}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Footer */}
            <div className="p-3 border-t border-white/5 bg-black/60 grid grid-cols-2 gap-2">
              <div className="bg-white/5 rounded p-2 flex items-center gap-2">
                <DoorClosed className="h-4 w-4 text-green-500" />
                <div>
                  <div className="text-[9px] text-muted-foreground">PERIMETER</div>
                  <div className="text-xs font-bold text-white">SECURE</div>
                </div>
              </div>
              <div className="bg-white/5 rounded p-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-[9px] text-muted-foreground">ON SITE</div>
                  <div className="text-xs font-bold text-white">1,204</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
