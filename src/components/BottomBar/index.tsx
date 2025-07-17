"use client";

import { BottomBarProps } from "@/types/BottomBar";
import { BottomBarData } from "./data";

export default function BottomBar({ scrollToSection }: BottomBarProps) {
  return (
    <div className="fixed -mb-0.5 bottom-0 left-0 w-full bg-black text-white grid grid-cols-6 place-items-center bottom-bar-shadow sm:grid lg:hidden">
      {BottomBarData.map((button, index) => {
        const IconComponent = button.icon;

        return (
          <button
            key={index}
            onClick={() => { scrollToSection(button.target) }}
            className="mx-2 w-full h-full p-5 py-4 transition-all duration-300 text-green-400 bottom-bar-shadow-focus focus:bg-green-400 hover:bg-green-400 cursor-pointer flex flex-col items-center justify-center gap-1 group"
          >
            <IconComponent className="text-md transition-all duration-300 group-focus:text-black group-focus:scale-110 group-hover:text-black group-hover:scale-110" />
            <span className="text-[10px] transition-all duration-300 poppins font-bold text-green-300 group-focus:text-black group-focus:font-bold group-hover:text-black group-hover:font-bold">
              {button.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
