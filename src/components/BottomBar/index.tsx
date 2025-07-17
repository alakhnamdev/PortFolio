"use client";

import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

interface BottomBarProps {
  scrollToSection: (section: string) => void;
}

export default function BottomBar({ scrollToSection }: BottomBarProps) {
const buttons = [
    { label: "Home", icon: FaHome, target: "Home" },
    { label: "About", icon: FaUser, target: "About" },
    { label: "Skills", icon: FaTools, target: "Skills" },
    { label: "Projects", icon: FaProjectDiagram, target: "Projects" },
    { label: "Work", icon: FaBriefcase, target: "Experience" },
    { label: "Contact", icon: FaEnvelope, target: "Contact" },
];

  // state for tracking active icon index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="fixed -mb-0.5 bottom-0 left-0 w-full bg-black text-white grid grid-cols-6 place-items-center bottom-bar-shadow sm:grid lg:hidden">
      {buttons.map((button, index) => {
        const IconComponent = button.icon;
        const isActive = activeIndex === index;

        return (
          <button
            key={index}
            onClick={() => {
              scrollToSection(button.target);
              setActiveIndex(index);
            }}
            className={`mx-2 w-full h-full p-5 py-4 transition-all duration-300 text-green-400 bottom-bar-shadow-focus focus:bg-green-400 cursor-pointer flex flex-col items-center justify-center gap-1 group`}
          >
            <IconComponent
              className="text-md transition-all duration-300 group-focus:text-black group-focus:scale-110"
            />
            <span
              className="text-[10px] transition-all duration-300 poppins font-bold text-green-300 group-focus:text-black group-focus:font-bold "
            >
              {button.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
