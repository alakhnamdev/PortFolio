import { JSX } from "react";

interface Achievement1Props {
  achievements: {
    title: string;
    icon: JSX.Element;
    institution: string;
    description: string;
    details: {
      label: string;
      value: string;
      semester: string;
    }[];
  }[];
}

interface Experience1Props {
  experienceDetails: {
    company: string;
    icon: JSX.Element;
    role: string;
    points: string[];
  }[];
}

interface ExperienceProps {
  ref: React.RefObject<HTMLDivElement | null>;
}


export type { Achievement1Props, Experience1Props, ExperienceProps };