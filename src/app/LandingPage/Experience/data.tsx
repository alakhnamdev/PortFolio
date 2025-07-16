import { BiSolidShoppingBags } from "react-icons/bi";
import { FaAward } from "react-icons/fa";

const experienceDetails = [
  {
    company: "Involead",
    icon: <BiSolidShoppingBags className="text-green-500" />,
    role: "Developer Intern",
    points: [
      "Developed and maintained scalable, high-performance web applications using Next.js and React.js, ensuring clean, modular component architecture within an Agile workflow.",
      "Designed and integrated RESTful APIs using FastAPI and Flask for efficient and secure backend operations.",
      "Engineered responsive UIs with Tailwind CSS, optimizing user experience and accessibility.",
      "Performed CRUD operations and optimized queries in MongoDB with indexed data modeling for enhanced performance.",
      "Collaborated using GitLab with effective branching, merge request workflows, and version control best practices.",
      "Gained hands-on experience in Docker containerization and configured GitHub Actions CI/CD pipelines for automated deployments.",
    ],
  },
];

const achievements = [
  {
    title: "Dean's Honor List Award",
    icon: <FaAward className="text-green-500" size={24} />,
    institution: "The ICFAI University Dehradun",
    description:
      "Proud recipient of the prestigious Dean's Honor List Award three times for outstanding academic performance.",
    details: [
      { label: "GPA of", value: "10", semester: "5th Semester" },
      { label: "GPA of", value: "9.70", semester: "2nd Semester" },
      { label: "GPA of", value: "9.60", semester: "3rd Semester" },
    ],
  },
];

export { experienceDetails, achievements };