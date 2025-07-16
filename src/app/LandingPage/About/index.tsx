import { AboutProps } from "@/types/About";
import { FaUniversity } from "react-icons/fa";

export default function About({ ref }: AboutProps) {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center" ref={ref}>
      <div className="w-full flex flex-col items-center gap-4 mt-10">
        <h1 className="lg:text-6xl text-4xl  font-bold bg-gradient-to-bl poppins to-green-950 from-green-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="w-[80vw] sm:w-1/2 text-gray-300 jetbrains text-lg text-center">
          Hey I&#39;m Alakh Namdev, A passionate developer with a knack for creating seamless user
          experiences. My journey in tech has been fueled by curiosity and a
          desire to solve real-world problems through innovative solutions.
        </p>
        <div className="mt-8 w-full flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold poppins bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent">
            Education
          </h1>
          <div className="bg-green-950/50 jetbrains p-6 rounded-lg shadow-lg w-fit">
            <div className="flex text-xl text-gray-400 ml-2 font-bold">
              <FaUniversity className="text-2xl mr-2 -ml-2 text-green-400" />
              The ICFAI University
            </div>
            <h2 className="text-lg text-gray-300 mt-1">
              Bachelor of Computer Applications
            </h2>
            <h3 className="text-md text-gray-400 mt-1">
              July 2022 - July 2025
            </h3>
            <h4 className="text-sm text-green-600 mt-1 font-bold">
              CGPA: 9.6/10
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
