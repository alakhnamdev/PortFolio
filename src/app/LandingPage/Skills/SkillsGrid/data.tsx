import { FaJs, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaDocker, FaGithub, FaGitlab } from "react-icons/fa";
import { SiNextdotjs, SiFastapi, SiFlask, SiTailwindcss, SiBootstrap, SiJquery, SiMysql, SiPostgresql, SiMongodb, SiGithubactions } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const SkillsData = [
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