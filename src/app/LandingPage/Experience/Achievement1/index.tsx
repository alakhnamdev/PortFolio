import { Achievement1Props } from "@/types/Experience";

export default function Achievement1({ achievements }: Achievement1Props) {
  return (
    <div className="w-[80vw] p-10 py-0 border-l-2 border-green-950 text-gray-300 relative">
      {achievements.map((ach, idx) => (
        <div
          key={idx}
          className="bg-green-950/50 shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-gray-300 mb-3 flex items-center gap-2">
            <div className="absolute left-[-18px] top-0 border-2 border-green-500 rounded-full p-1 bg-green-950">
              {ach.icon}
            </div>
            {ach.title}
          </h2>
          <div className="text-lg text-gray-400 mb-2">
            <div className="font-semibold text-green-700">
              {ach.institution}
            </div>
            {ach.description}
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            {ach.details.map((detail, i) => (
              <li key={i}>
                {detail.label}{" "}
                <span className="font-semibold text-green-600">
                  {detail.value}
                </span>{" "}
                in {detail.semester}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
