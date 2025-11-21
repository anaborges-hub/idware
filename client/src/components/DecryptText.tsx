import { useState, useEffect } from "react";

interface DecryptTextProps {
  text: string;
  className?: string;
  speed?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function DecryptText({ text, className, speed = 50 }: DecryptTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(prev => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (i < iteration) {
            result += text[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        return result;
      });

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      setIteration(prev => prev + 1 / 3); // Slow down the reveal
    }, speed);

    return () => clearInterval(interval);
  }, [text, iteration, speed]);

  return <span className={className}>{displayText}</span>;
}
