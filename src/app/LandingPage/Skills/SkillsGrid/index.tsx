"use client";

import { FaJs, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaDocker, FaGithub, FaGitlab } from "react-icons/fa";
import { SiNextdotjs, SiFastapi, SiFlask, SiTailwindcss, SiBootstrap, SiJquery, SiMysql, SiPostgresql, SiMongodb, SiGithubactions } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Frameworks / Libraries",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Developer Tools / Others",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <FaGitlab /> },
      { name: "VS Code", icon: <VscVscode /> },
    ],
  },
  {
    category: "CI/CD & Containerization",
    skills: [
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <div className="p-8 space-y-8 w-full">
      {skillCategories.map((categoryData, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent font-bold mb-4 poppins">
            {categoryData.category}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
