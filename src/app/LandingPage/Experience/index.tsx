"use client";

import Experience1 from "./Experience1";
import Achievement1 from "./Achievement1";
import { experienceDetails, achievements } from "./data";
import { ExperienceProps } from "@/types/Experience";

export default function Experience({ ref }: ExperienceProps) {
  return (
    <div className="min-h-[100vh] px-6 pt-30 text-gray-600 flex flex-col items-center justify-center" ref={ref}>
      <h1 className="lg:text-6xl text-4xl text-center font-bold mb-8 poppins bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent">
        Work Experience & Achievements
      </h1>
      <Experience1 experienceDetails={experienceDetails} />
      <Achievement1 achievements={achievements} />
    </div>
  );
}
