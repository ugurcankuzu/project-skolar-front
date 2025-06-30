"use client";

import { useEffect, useState } from "react";

export default function useScreen() {
  const [screenSize, setScreenSize] = useState({
    currentWidth: typeof window !== "undefined" ? window.innerWidth : 0,
    currentHeight: typeof window !== "undefined" ? window.innerHeight : 0,
    isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout; //For debounce
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize({
          currentWidth: window.innerWidth,
          currentHeight: window.innerHeight,
          isMobile: window.innerWidth < 768,
        });
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);
  return screenSize;
}
