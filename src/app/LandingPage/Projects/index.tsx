import { ProjectsProps } from "@/types/Projects";
import { projectFeatures, projectStack, projectLinks, projectFeatures2, projectStack2, projectLinks2, } from "./data";
import Project1 from "./Project1";
import Project2 from "./Project2";

export default function Projects({ ref }: ProjectsProps) {
  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-center bg-gray-950/50 pt-30" ref={ref}>
      <h2 className="text-6xl poppins bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent font-bold p-4">
        My Projects
      </h2>
      <p className="text-gray-300 mb-8">
        Here are some of the projects I've worked on:
      </p>
      <div className="w-[90vw] flex gap-10 justify-center h-full">
        <Project2
          projectFeatures={projectFeatures2}
          projectStack={projectStack2}
          projectLinks={projectLinks2}
        />
        <Project1
          projectFeatures={projectFeatures}
          projectStack={projectStack}
          projectLinks={projectLinks}
        />
      </div>
    </div>
  );
}
