import { useEffect, useState } from "react";

export default function ParticleBackground() {
  // Static high-tech background with CSS-only subtle animations
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#f59c00 1px, transparent 1px), linear-gradient(90deg, #f59c00 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,48,112,0.15),transparent_70%)]" />
      
      {/* Floating Orbs (CSS Animation only) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
    </div>
  );
}
