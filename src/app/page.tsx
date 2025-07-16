"use client";

import Navbar from "@/components/Navbar";
import LandingPage from "./LandingPage";
import { useRef } from "react";

export default function Home() {
  
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    experience: experienceRef,
    contact: contactRef,
  };

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      experience: experienceRef,
      contact: contactRef,
    };
    const ref = refs[section.toLowerCase()];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <LandingPage refs={refs} />
    </>
  );
}
