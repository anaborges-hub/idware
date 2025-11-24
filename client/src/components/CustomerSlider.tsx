import { useEffect, useState } from "react";
import logo1 from "@assets/generated_images/abstract_geometric_corporate_logo_1.png";
import logo2 from "@assets/generated_images/abstract_geometric_corporate_logo_2.png";
import logo3 from "@assets/generated_images/abstract_geometric_corporate_logo_3.png";
import logo4 from "@assets/generated_images/abstract_geometric_corporate_logo_4.png";
import logo5 from "@assets/generated_images/abstract_geometric_corporate_logo_5.png";

const LOGOS = [
  { id: 1, name: "SecureNet", img: logo1 },
  { id: 2, name: "GlobalGuard", img: logo2 },
  { id: 3, name: "CyberShield", img: logo3 },
  { id: 4, name: "NexusDefense", img: logo4 },
  { id: 5, name: "IronWall", img: logo5 },
  // Duplicate for infinite scroll effect
  { id: 6, name: "SecureNet", img: logo1 },
  { id: 7, name: "GlobalGuard", img: logo2 },
  { id: 8, name: "CyberShield", img: logo3 },
  { id: 9, name: "NexusDefense", img: logo4 },
  { id: 10, name: "IronWall", img: logo5 },
];

export default function CustomerSlider() {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden relative z-20">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-widest">
          Trusted by Global Enterprises & Government Agencies
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* Marquee Track */}
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
            {LOGOS.map((logo) => (
              <div 
                key={`a-${logo.id}`} 
                className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
              >
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(245,156,0,0.3)]"
                />
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate for seamless loop) */}
          <div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
            {LOGOS.map((logo) => (
              <div 
                key={`b-${logo.id}`} 
                className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
              >
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(245,156,0,0.3)]"
                />
              </div>
            ))}
          </div>
          
           {/* Third Set (Triple duplicate for very wide screens) */}
           <div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
            {LOGOS.map((logo) => (
              <div 
                key={`c-${logo.id}`} 
                className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
              >
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(245,156,0,0.3)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
