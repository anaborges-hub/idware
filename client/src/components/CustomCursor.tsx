import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "BUTTON" || (e.target as HTMLElement).tagName === "A") {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Reticle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <motion.div 
          className="w-1 h-1 bg-primary rounded-full"
          animate={{ scale: isHovering ? 4 : 1 }}
        />
      </motion.div>
      
      {/* Outer Ring - spins */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-dashed border-primary/30 rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: -8, // offset to center with main reticle (12-8)/2 = -2... wait. 48px vs 32px. diff 16. offset -8.
          y: -8, 
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Crosshairs */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-5">
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-primary" />
      </div>
    </>
  );
}
