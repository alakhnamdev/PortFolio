"use client";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import { LandingPageProps } from "@/types/LandingPage";

export default function LandingPage({ refs }: LandingPageProps) {
  return (
    <>
      <Home ref={refs.home} />
      <About ref={refs.about} />
      <Skills ref={refs.skills} />
      <Projects ref={refs.projects} />
      <Experience ref={refs.experience} />
      <Contact ref={refs.contact} />
    </>
  );
}   