import { useEffect, useState, useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Shield, UserCheck, FileCheck, CreditCard, RefreshCw, Printer, MapPin, Users, CheckCircle2 } from "lucide-react";
import smartCard from "@assets/generated_images/smart_card_visualization.png";
import accessMap from "@assets/generated_images/access_control_map.png";

interface LogEntry {
  id: number;
  timestamp: string;
  level: "INFO" | "SUCCESS" | "WARN";
  event: string;
  user: string;
  location: string;
}

const LOCATIONS = ["HQ Main Entrance", "London Office", "R&D Lab", "Executive Wing", "Data Center", "Paris Branch"];
const EVENTS = [
  { msg: "Badge Printed", level: "SUCCESS", type: "PROVISION" },
  { msg: "Access Granted", level: "INFO", type: "ACCESS" },
  { msg: "Identity Verified", level: "SUCCESS", type: "VERIFY" },
  { msg: "Card Activated", level: "INFO", type: "LIFECYCLE" },
  { msg: "Visitor Pass Issued", level: "INFO", type: "VISITOR" },
  { msg: "Clearance Updated", level: "WARN", type: "ADMIN" },
  { msg: "Biometric Match", level: "SUCCESS", type: "VERIFY" },
];

const USERS = ["A. Smith", "J. Doe", "M. Chen", "S. Patel", "K. Johnson", "L. Silva", "R. Al-Fayed"];

const INITIAL_DATA = Array.from({ length: 20 }, (_, i) => ({
  time: `${10 + Math.floor(i/4)}:${(i%4)*15}`,
  issued: 20 + Math.random() * 15,
  active: 80 + Math.random() * 20
}));

export default function LiveMonitor() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [chartData, setChartData] = useState(INITIAL_DATA);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState(0);

  // Simulate live logs
  useEffect(() => {
    const interval = setInterval(() => {
      const eventType = EVENTS[Math.floor(Math.random() * EVENTS.length)];
      const newLog: LogEntry = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        level: eventType.level as any,
        event: eventType.msg,
        user: USERS[Math.floor(Math.random() * USERS.length)],
        location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
      };
      setLogs(prev => [newLog, ...prev].slice(0, 15));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Simulate live chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev.slice(1), {
          time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          issued: 20 + Math.random() * 15,
          active: 80 + Math.random() * 20
        }];
        return newData;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // View cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView(prev => (prev + 1) % 2);
    }, 5000);
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
            <h3 className="font-mono font-bold text-sm tracking-widest text-primary">IDENTITY COMMAND CENTER</h3>
          </div>
          <div className="flex gap-4 text-[10px] font-mono text-muted-foreground">
             <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                SYSTEM ONLINE
             </div>
             <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                SYNCING
             </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-black/20">
          
          {/* Left Column: Visuals (Card Prod & Stats) */}
          <div className="lg:col-span-7 border-r border-white/5 flex flex-col">
            
            {/* Main Visual Area */}
            <div className="p-4 border-b border-white/5 bg-black/20 relative min-h-[220px]">
              
              {/* View 1: Smart Card Visualization */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${activeView === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                 <img src={smartCard} alt="Digital ID" className="w-full h-full object-cover opacity-90" />
                 <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded border border-primary/30 text-[10px] font-mono text-primary flex items-center gap-2">
                    <Printer className="h-3 w-3" />
                    <span>PROVISIONING QUEUE: ACTIVE</span>
                 </div>
                 <div className="absolute bottom-4 right-4 text-right">
                    <div className="text-xs font-mono text-white font-bold">ID: 8849-221</div>
                    <div className="text-[9px] text-primary/70">ENCODING CHIP...</div>
                 </div>
              </div>

              {/* View 2: Global Access Map */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${activeView === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                 <img src={accessMap} alt="Global Map" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                 <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded border border-green-500/30 text-[10px] font-mono text-green-500 flex items-center gap-2">
                    <Activity className="h-3 w-3" />
                    <span>GLOBAL ACCESS: NORMAL</span>
                 </div>
                 {/* Animated Dots */}
                 <div className="absolute top-[30%] left-[40%] w-2 h-2 bg-primary rounded-full animate-ping" />
                 <div className="absolute top-[50%] left-[60%] w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                 <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1.2s' }} />
              </div>
              
              {/* Scan line overlay */}
              <div className="absolute inset-0 z-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
            </div>

            {/* Analytics Chart */}
            <div className="p-4 flex-1 min-h-[180px]">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-[10px] font-mono text-muted-foreground uppercase">Identity Issuance vs Active Access</h4>
                <CreditCard className="h-3 w-3 text-primary/50" />
              </div>
              <div className="h-full w-full min-h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorIssued" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59c00" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59c00" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#133070" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#133070" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#000', border: '1px solid #333', fontSize: '10px' }}
                      itemStyle={{ padding: 0 }}
                    />
                    <Area type="monotone" dataKey="issued" stroke="#f59c00" fillOpacity={1} fill="url(#colorIssued)" strokeWidth={2} />
                    <Area type="monotone" dataKey="active" stroke="#133070" fillOpacity={1} fill="url(#colorActive)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column: Identity Feed */}
          <div className="lg:col-span-5 bg-black/40 flex flex-col h-full max-h-[500px] lg:max-h-auto overflow-hidden">
            <div className="p-3 border-b border-white/5 bg-white/5 flex justify-between items-center">
              <span className="text-xs font-mono font-bold text-white">IDENTITY LIFECYCLE</span>
              <RefreshCw className="h-3 w-3 text-primary animate-spin-slow" />
            </div>
            
            <div className="flex-1 overflow-y-auto p-0 custom-scrollbar" ref={scrollRef}>
              <div className="flex flex-col divide-y divide-white/5">
                {logs.map((log) => (
                  <div key={log.id} className={`p-3 hover:bg-white/5 transition-colors border-l-2 ${
                    log.level === 'WARN' ? 'border-yellow-500' : 
                    log.level === 'SUCCESS' ? 'border-green-500' : 'border-primary'
                  }`}>
                    <div className="flex justify-between items-start mb-1">
                      <span className={`text-[10px] font-bold font-mono ${
                        log.level === 'WARN' ? 'text-yellow-500' : 
                        log.level === 'SUCCESS' ? 'text-green-500' : 'text-primary'
                      }`}>
                        {log.event.toUpperCase()}
                      </span>
                      <span className="text-[9px] font-mono text-muted-foreground">{log.timestamp}</span>
                    </div>
                    <div className="text-xs font-medium text-gray-200 mb-1 flex items-center gap-2">
                        <UserCheck className="h-3 w-3 text-muted-foreground" />
                        {log.user}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                        <MapPin className="h-2.5 w-2.5" /> {log.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Footer */}
            <div className="p-3 border-t border-white/5 bg-black/60 grid grid-cols-2 gap-2">
              <div className="bg-white/5 rounded p-2 flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-green-500" />
                <div>
                  <div className="text-[9px] text-muted-foreground">ISSUED TODAY</div>
                  <div className="text-xs font-bold text-white">142</div>
                </div>
              </div>
              <div className="bg-white/5 rounded p-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-[9px] text-muted-foreground">ACTIVE USERS</div>
                  <div className="text-xs font-bold text-white">14,203</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
