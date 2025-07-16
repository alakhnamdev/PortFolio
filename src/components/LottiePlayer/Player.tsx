"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface PlayerProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  width?: string;
  height?: string;
}

const Player: React.FC<PlayerProps> = ({ animationData, loop = true, autoplay = true, width = "300px", height = "300px" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });

      return () => anim.destroy();
    }
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} style={{ width, height }} />;
};

export default Player;
