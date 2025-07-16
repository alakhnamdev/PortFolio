"use client";
import dynamic from "next/dynamic";

const LottiePlayer = dynamic(() => import("@/components/LottiePlayer/Player"), {ssr: false,});

export default LottiePlayer;