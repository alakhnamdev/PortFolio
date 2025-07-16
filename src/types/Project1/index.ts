import { ReactNode } from "react";

export default interface Project1Props {
  projectFeatures: { title: string; desc: string | ReactNode }[];
  projectStack: string[];
  projectLinks: { href: string; label: string; bg: string }[];
}