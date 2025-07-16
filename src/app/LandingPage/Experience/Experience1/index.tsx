import { Experience1Props } from "@/types/Experience";

export default function Experience1({ experienceDetails }: Experience1Props) {
  return (
    <div className="w-[80vw] p-10 pt-0 pr-0 pb-5 border-l-2 border-green-950 relative">
      {experienceDetails.map((exp, idx) => (
        <div
          key={idx}
          className="shadow-md rounded-lg p-6 mb-6 hover:shadow-lg bg-green-950/50"
        >
          <h2 className="text-2xl font-black text-gray-300 mb-1">
            <div className="absolute left-[-18px] top-0 border-2 border-green-500 rounded-full p-1 bg-green-950">
              {exp.icon}
            </div>
            {exp.company}
          </h2>
          <p className="text-lg text-green-600 font-bold mb-4">{exp.role}</p>
          <ul className="list-disc list-inside space-y-3 text-gray-400">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
