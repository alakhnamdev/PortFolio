import { SkillsProps } from "@/types/Skills";
import SkillsGrid from "./SkillsGrid";

export default function Skills({ ref }: SkillsProps) {
  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-center bg-gray-950/50 pt-30" ref={ref}>
      <div className="text-6xl poppins font-bold bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent">
        My Skills   
      </div>
      <p className="w-[80vw] sm:w-1/2 text-gray-300 text-lg text-center mt-4">
        I have experience with a variety of technologies that help me build
        robust and scalable applications.
      </p>
      <SkillsGrid />
    </div>
  );
}
