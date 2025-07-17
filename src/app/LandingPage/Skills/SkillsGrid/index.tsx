"use client";

import { SkillsData } from "./data";

export default function SkillsGrid() {
  return (
    <div className="p-8 space-y-8 w-full">
      {SkillsData.map((categoryData, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent font-bold mb-4 poppins">
            {categoryData.category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categoryData.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex flex-col items-center p-4 bg-zinc-900/70 w-full rounded-lg transition-all duration-300 cursor-pointer border-shadow hover:scale-105 hover:bg-green-950/50 group"
              >
                <div className="text-4xl mb-3 text-green-400 group-hover:text-gray-300">
                  {skill.icon}
                </div>
                <p className="text-center font-bold text-gray-300 -mt-2 group-hover:text-green-400">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
