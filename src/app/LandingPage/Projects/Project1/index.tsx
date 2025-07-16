import Project1Props from "@/types/Project1";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Project1({ projectFeatures, projectStack, projectLinks }: Project1Props) {
  return (
    <div className="px-6 py-10 text-gray-500 border-2 border-green-400 rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-green-600">
        Weather Application Overview
      </h1>
      <p className="mb-6">
        This Weather Application is a modern, dynamic web app designed to
        deliver real-time weather updates with a clean, responsive user
        interface. Developed using <strong>Next.js</strong>, styled with{" "}
        <strong>Tailwind CSS</strong>, and integrated with{" "}
        <strong>WeatherAPI.com</strong>, it ensures reliable and accurate
        weather data for users across the globe.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-500">
        Key Features:
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {projectFeatures.map(({ title, desc }) => (
          <li key={title}>
            <strong>{title}:</strong> {desc}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-green-500">
        Tech Stack & Technologies Used:
      </h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {projectStack.map((name, index) => (
          <span
            key={index}
            className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full shadow-sm text-sm"
          >
            {name}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        {projectLinks.map(({ href, label, bg }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${bg} text-white font-semibold px-6 py-3 rounded transition`}
          >
            {label} <FaExternalLinkAlt className="inline-block ml-2" />
          </Link>
        ))}
      </div>
    </div>
  );
}
